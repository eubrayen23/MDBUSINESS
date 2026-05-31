import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

interface NotificationStore {
  notifications: any[];
  addNotification: (notification: any) => void;
  markAsRead: (id: string) => void;
  subscribe: (userId: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({ notifications: [notification, ...state.notifications] })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  subscribe: (userId) => {
    const channel = supabase
      .channel('realtime:notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `recipient_id=eq.${userId}`,
        },
        (payload) => {
          set((state) => ({ notifications: [payload.new, ...state.notifications] }));
          toast(payload.new.title, {
            description: payload.new.body,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  },
}));

import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-ink-50">
      <Sidebar />
      <main className="pl-[280px]">
        <div className="max-w-6xl mx-auto p-10">
          {children}
        </div>
      </main>
    </div>
  );
}

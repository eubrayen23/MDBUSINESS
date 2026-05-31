export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string
          phone: string | null
          avatar_url: string | null
          role: 'admin' | 'dentist' | 'receptionist' | 'patient'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name: string
          phone?: string | null
          avatar_url?: string | null
          role: 'admin' | 'dentist' | 'receptionist' | 'patient'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          phone?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'dentist' | 'receptionist' | 'patient'
          created_at?: string
          updated_at?: string
        }
      }
      clinics: {
        Row: {
          id: string
          name: string
          address: string | null
          phone: string | null
          email: string | null
          logo_url: string | null
          nif: string | null
          created_at: string
        }
      }
      dentists: {
        Row: {
          id: string
          profile_id: string
          clinic_id: string | null
          specialty: string | null
          license_number: string | null
          bio: string | null
          color_code: string | null
          is_active: boolean
          working_hours: Json
          created_at: string
        }
      }
      patients: {
        Row: {
          id: string
          profile_id: string
          clinic_id: string | null
          date_of_birth: string | null
          gender: 'M' | 'F' | 'other' | null
          address: string | null
          emergency_contact: string | null
          emergency_phone: string | null
          blood_type: string | null
          allergies: string[] | null
          notes: string | null
          nif: string | null
          registration_number: string | null
          created_at: string
        }
      }
      appointments: {
        Row: {
          id: string
          clinic_id: string
          patient_id: string
          dentist_id: string | null
          scheduled_at: string
          duration_minutes: number
          type: string
          status: 'agendado' | 'confirmado' | 'em_atendimento' | 'concluido' | 'cancelado' | 'faltou'
          chief_complaint: string | null
          notes: string | null
          created_by: string | null
          created_at: string
        }
      }
      medical_records: {
        Row: {
          id: string
          appointment_id: string
          patient_id: string
          dentist_id: string | null
          diagnosis: string | null
          treatment_done: string | null
          prescription: string | null
          next_appointment_notes: string | null
          attachments: string[] | null
          tooth_chart: Json
          created_at: string
        }
      }
      treatments: {
        Row: {
          id: string
          clinic_id: string
          name: string
          description: string | null
          price: number
          duration_minutes: number
          category: string | null
          is_active: boolean
        }
      }
      invoices: {
        Row: {
          id: string
          clinic_id: string
          patient_id: string
          appointment_id: string | null
          invoice_number: string | null
          subtotal: number
          discount: number
          total: number
          status: 'pendente' | 'pago' | 'parcialmente_pago' | 'cancelado'
          due_date: string
          paid_at: string | null
          notes: string | null
          created_at: string
        }
      }
      invoice_items: {
        Row: {
          id: string
          invoice_id: string
          treatment_id: string | null
          description: string | null
          quantity: number
          unit_price: number
          total: number
        }
      }
      payments: {
        Row: {
          id: string
          invoice_id: string
          amount: number
          method: 'dinheiro' | 'transferência' | 'multicaixa' | 'crédito' | 'outro'
          reference: string | null
          paid_at: string
          received_by: string | null
          notes: string | null
        }
      }
    }
  }
}

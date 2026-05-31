/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_APP_NAME: string
  readonly VITE_SUPPORT_PHONE: string
  readonly VITE_WHATSAPP_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

# GUIA DE IMPLEMENTAÇÃO — SMILEPRO + SUPABASE

Para transformar este projeto num SaaS vendável e funcional, siga estes passos:

## 1. Configuração do Supabase
1. Crie um projeto no [Supabase](https://supabase.com).
2. Vá para **SQL Editor** e execute os scripts localizados em `supabase/migrations/` na ordem:
   - `001_initial_schema.sql` (Cria tabelas)
   - `002_rls_policies.sql` (Ativa segurança)
   - `003_functions_and_triggers.sql` (Automação de números)
   - `004_seed_data.sql` (Dados iniciais de tratamentos)

## 2. Variáveis de Ambiente
No seu ambiente de produção (Netlify/Vercel):
- `VITE_SUPABASE_URL`: URL do seu projeto Supabase.
- `VITE_SUPABASE_ANON_KEY`: Sua chave anónima.

## 3. Autenticação Live
O sistema já está configurado para usar o `auth.users` do Supabase.
- Utilize o hook `src/store/useAuthStore.ts` para gerir o estado global.
- O botão "Demo" simula um login, mas para produção, o `src/pages/public/LoginPage.tsx` deve chamar `supabase.auth.signInWithPassword()`.

## 4. Hooks de Dados (TanStack Query)
Já implementamos hooks em `src/hooks/` que fazem chamadas reais:
- `usePatients()`: Lista pacientes e permite inserção.
- `useAppointments()`: Agenda e atualiza status em tempo real.
- `useTreatments()`: Puxa o catálogo de serviços.

## 5. Próximos Passos para Venda
- **Multi-tenancy**: Adicione lógica de `clinic_id` nas queries do Supabase para suportar múltiplas clínicas numa única base de dados.
- **Pagamentos Reais**: Integre a API do **Stripe** ou **Luma** (Angola) no `FinancialManager`.
- **SMS real**: No Edge Function `send-appointment-reminder`, substitua o mock pelo SDK da **Africa's Talking**.

O app já está com a fundação live. Basta ligar as chaves e começar a registar dados!

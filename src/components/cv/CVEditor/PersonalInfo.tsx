import { Input as CustomInput } from '@/components/ui/Input';
import { PersonalInfo as PIType } from '@/types/cv.types';

export function PersonalInfo({ data, onChange }: { data: PIType, onChange: (val: Partial<PIType>) => void }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <CustomInput
        label="Nome Completo"
        value={data.name || ''}
        onChange={(e) => onChange({ name: e.target.value })}
        placeholder="António José"
      />
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="Cargo / Título"
          value={data.role || ''}
          onChange={(e) => onChange({ role: e.target.value })}
          placeholder="Contabilista Sénior"
        />
        <CustomInput
          label="Província"
          value={data.province || ''}
          onChange={(e) => onChange({ province: e.target.value })}
          placeholder="Luanda"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CustomInput
          label="Email"
          value={data.email || ''}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="exemplo@mail.com"
        />
        <CustomInput
          label="Telefone"
          value={data.phone || ''}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="+244 9..."
        />
      </div>
      <CustomInput
        label="LinkedIn URL"
        value={data.linkedin || ''}
        onChange={(e) => onChange({ linkedin: e.target.value })}
        placeholder="linkedin.com/in/..."
      />
      <CustomInput
        label="Endereço"
        value={data.address || ''}
        onChange={(e) => onChange({ address: e.target.value })}
        placeholder="Maianga, Luanda"
      />
    </div>
  );
}

import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-black uppercase tracking-tight">DEFINIÇÕES</h1>
      <Card title="Perfil da Clínica">
        <form className="space-y-4">
          <Input label="Nome da Clínica" defaultValue="Clínica SmilePro" />
          <Input label="Telefone" defaultValue="934859497" />
          <Button>Guardar</Button>
        </form>
      </Card>
    </div>
  );
};

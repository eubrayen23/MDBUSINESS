// checkin.js — Sistema completo de check-in/reservas

const WHATSAPP_NUMBER = '244934859497';

class CheckinSystem {
  constructor() {
    this.currentStep = 1;
    this.formData    = {};

    this.initNavigation();
    this.initDateMin();
    this.initWhatsApp();
  }

  // Define data mínima como hoje
  initDateMin() {
    const dateInput = document.getElementById('res-data');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

  initNavigation() {
    // Botões "Avançar"
    document.querySelectorAll('.form-next').forEach(btn => {
      btn.addEventListener('click', () => {
        const nextStep = parseInt(btn.dataset.next);
        if (this.validateStep(this.currentStep)) {
          this.collectData();
          if (nextStep === 3) this.renderSummary();
          this.goToStep(nextStep);
        }
      });
    });

    // Botões "Voltar"
    document.querySelectorAll('.form-back').forEach(btn => {
      btn.addEventListener('click', () => {
        const prevStep = parseInt(btn.dataset.back);
        this.goToStep(prevStep);
      });
    });
  }

  validateStep(step) {
    const errors = [];

    if (step === 1) {
      const nome = document.getElementById('res-nome').value.trim();
      if (!nome) errors.push('Por favor, indique o seu nome.');
    }

    if (step === 2) {
      const pessoas = document.getElementById('res-pessoas').value;
      const data    = document.getElementById('res-data').value;
      const hora    = document.querySelector('input[name="hora"]:checked');

      if (!pessoas) errors.push('Indique o número de pessoas.');
      if (!data)    errors.push('Escolha uma data.');
      if (!hora)    errors.push('Seleccione uma hora.');
    }

    if (errors.length > 0) {
      this.showErrors(errors);
      return false;
    }

    this.clearErrors();
    return true;
  }

  showErrors(errors) {
    this.clearErrors();
    const panel = document.querySelector(`.form-panel[data-panel="${this.currentStep}"]`);
    const el = document.createElement('div');
    el.className = 'form-errors';
    el.innerHTML = errors.map(e => `⚠ ${e}`).join('<br>');
    panel.prepend(el);
  }

  clearErrors() {
    document.querySelectorAll('.form-errors').forEach(el => el.remove());
  }

  collectData() {
    this.formData = {
      nome:    document.getElementById('res-nome').value.trim(),
      tel:     document.getElementById('res-tel')?.value.trim() || '',
      pessoas: document.getElementById('res-pessoas').value,
      data:    document.getElementById('res-data').value,
      hora:    document.querySelector('input[name="hora"]:checked')?.value || '',
      obs:     document.getElementById('res-obs')?.value.trim() || '',
    };
  }

  renderSummary() {
    const grid = document.getElementById('summaryGrid');
    if (!grid) return;

    const dataFormatada = this.formData.data
      ? new Date(this.formData.data + 'T12:00:00')
          .toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      : '—';

    grid.innerHTML = `
      <div class="summary-item"><span>Nome:</span> <span>${this.formData.nome}</span></div>
      <div class="summary-item"><span>Pessoas:</span> <span>${this.formData.pessoas}</span></div>
      <div class="summary-item"><span>Data:</span> <span>${dataFormatada}</span></div>
      <div class="summary-item"><span>Hora:</span> <span>${this.formData.hora}</span></div>
      ${this.formData.tel ? `<div class="summary-item"><span>Contacto:</span> <span>${this.formData.tel}</span></div>` : ''}
    `;
  }

  initWhatsApp() {
    const btn = document.getElementById('btnWhatsApp');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const { nome, pessoas, data, hora, obs, tel } = this.formData;

      const dataFormatada = data
        ? new Date(data + 'T12:00:00')
            .toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
        : data;

      const msg = [
        `Olá! Gostaria de reservar uma mesa na Churrascaria Nandinhos.`,
        ``,
        `👤 Nome: ${nome}`,
        `👥 Pessoas: ${pessoas}`,
        `📅 Data: ${dataFormatada}`,
        `🕐 Hora: ${hora}`,
        tel ? `📱 Contacto: ${tel}` : '',
        obs ? `📝 Observações: ${obs}` : '',
        ``,
        `Aguardo confirmação. Obrigado(a)!`,
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }

  goToStep(step) {
    const currentPanel = document.querySelector(`.form-panel[data-panel="${this.currentStep}"]`);
    const nextPanel    = document.querySelector(`.form-panel[data-panel="${step}"]`);

    currentPanel.classList.remove('is-active');
    nextPanel.classList.add('is-active');

    document.querySelectorAll('.form-step').forEach(el => {
      const n = parseInt(el.dataset.step);
      el.classList.toggle('is-active',    n === step);
      el.classList.toggle('is-completed', n < step);
    });

    this.currentStep = step;
    this.clearErrors();
  }
}

document.addEventListener('DOMContentLoaded', () => new CheckinSystem());

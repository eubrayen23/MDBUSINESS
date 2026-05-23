/**
 * CHECKIN & RESERVATIONS ENGINE — CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * This module manages the multi-step reservation process. It ensures
 * data integrity through step-by-step validation and handles the
 * final handoff to the WhatsApp Business API.
 *
 * CORE FEATURES:
 * 1. Sequential form navigation with dynamic panel switching.
 * 2. Real-time validation for required fields.
 * 3. Dynamic summary generation for user review.
 * 4. Automated message formatting for WhatsApp.
 */

/**
 * The official management number for direct WhatsApp integration.
 * Format: [Country Code][Number] without spaces or symbols.
 */
const WHATSAPP_NUMBER = '244934859497';

class CheckinSystem {
  /**
   * Initializes the reservation system by binding navigation events,
   * setting constraints, and preparing the summary engine.
   */
  constructor() {
    this.currentStep = 1;
    this.formData    = {};

    this.initNavigation();
    this.initDateMin();
    this.initWhatsApp();
  }

  /**
   * Restricts the date picker to future dates only.
   */
  initDateMin() {
    const dateInput = document.getElementById('res-data');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

  /**
   * Binds click events to navigation buttons.
   */
  initNavigation() {
    // "Next" buttons — navigate forward if validation passes
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

    // "Back" buttons — navigate to the previous logical state
    document.querySelectorAll('.form-back').forEach(btn => {
      btn.addEventListener('click', () => {
        const prevStep = parseInt(btn.dataset.back);
        this.goToStep(prevStep);
      });
    });
  }

  /**
   * Validates user input for the current active panel.
   * @param {number} step - The current panel index.
   * @returns {boolean} - True if the step is valid.
   */
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

  /**
   * Visualizes errors in the UI.
   */
  showErrors(errors) {
    this.clearErrors();
    const panel = document.querySelector(`.form-panel[data-panel="${this.currentStep}"]`);
    const el = document.createElement('div');
    el.className = 'form-errors';
    el.innerHTML = errors.map(e => `Aviso: ${e}`).join('<br>');
    panel.prepend(el);
  }

  /**
   * Cleans up the error display.
   */
  clearErrors() {
    document.querySelectorAll('.form-errors').forEach(el => el.remove());
  }

  /**
   * Extracts values from the DOM and stores them in the local state.
   */
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

    grid.innerHTML = '';

    const fields = [
      { label: 'Nome:', value: this.formData.nome },
      { label: 'Pessoas:', value: this.formData.pessoas },
      { label: 'Data:', value: dataFormatada },
      { label: 'Hora:', value: this.formData.hora }
    ];

    if (this.formData.tel) {
      fields.push({ label: 'Contacto:', value: this.formData.tel });
    }

    fields.forEach(field => {
      const item = document.createElement('div');
      item.className = 'summary-item';

      const label = document.createElement('span');
      label.textContent = field.label;

      const value = document.createElement('span');
      value.textContent = field.value;

      item.appendChild(label);
      item.appendChild(value);
      grid.appendChild(item);
    });
  }

  /**
   * Finalizes the process by constructing the WhatsApp API URL.
   * Redirects the user to WhatsApp with a pre-filled, professionally
   * formatted message containing all reservation details.
   */
  initWhatsApp() {
    const btn = document.getElementById('btnWhatsApp');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const { nome, pessoas, data, hora, obs, tel } = this.formData;

      // Ensure date is valid for formatting
      const dataFormatada = data
        ? new Date(data + 'T12:00:00')
            .toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
        : data;

      /**
       * MESSAGE CONSTRUCTION
       * Using emojis for visual structure and clear field identification.
       */
      const msg = [
        `Solicitação de Reserva - Churrascaria Nandinhos`,
        ``,
        `Nome: ${nome}`,
        `Número de Pessoas: ${pessoas}`,
        `Data: ${dataFormatada}`,
        `Hora: ${hora}`,
        tel ? `Contacto: ${tel}` : '',
        obs ? `Observações: ${obs}` : '',
        ``,
        `Aguardamos confirmação.`,
      ].filter(Boolean).join('\n');

      // URI encode the message to ensure safe transmission through the URL
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

      /**
       * SUCCESS FEEDBACK LOOP
       * Provides immediate visual confirmation to the user that the action
       * is being processed before the redirect occurs.
       */
      const originalText = btn.textContent;
      btn.textContent = 'A abrir WhatsApp...';
      btn.classList.add('is-loading');

      setTimeout(() => {
          window.open(url, '_blank');
          btn.textContent = originalText;
          btn.classList.remove('is-loading');

          // Optional: Move form back to step 1 for subsequent entries
          this.goToStep(1);
          document.getElementById('checkinForm').reset();
      }, 800);
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

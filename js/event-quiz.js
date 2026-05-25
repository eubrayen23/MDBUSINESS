/**
 * EVENT QUIZ LOGIC - CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 */

class EventQuiz {
    constructor() {
        this.step = 1;
        this.totalSteps = 3;
        this.answers = {};

        this.container = document.querySelector('.quiz-container');
        this.progressBar = document.getElementById('quizProgress');
        this.nextBtn = document.getElementById('quizNext');
        this.prevBtn = document.getElementById('quizPrev');

        if (!this.container) return;
        this.init();
    }

    init() {
        // Option selection
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const stepEl = opt.closest('.quiz-step');
                const stepNum = parseInt(stepEl.dataset.step);

                // Clear selection in current step
                stepEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('is-selected'));
                opt.classList.add('is-selected');

                // Store answer
                this.answers[stepNum] = opt.dataset.value;
                this.nextBtn.disabled = false;

                // Auto-advance if not the last step (optional, but smoother)
                // setTimeout(() => this.next(), 300);
            });
        });

        this.nextBtn.addEventListener('click', () => this.next());
        this.prevBtn.addEventListener('click', () => this.prev());

        this.updateUI();
    }

    next() {
        if (this.step < this.totalSteps) {
            this.step++;
            this.updateUI();
        } else {
            this.finish();
        }
    }

    prev() {
        if (this.step > 1) {
            this.step--;
            this.updateUI();
        }
    }

    updateUI() {
        // Update steps visibility
        const steps = document.querySelectorAll('.quiz-step');
        steps.forEach(s => {
            s.classList.toggle('is-active', parseInt(s.dataset.step) === this.step);
        });

        // Update progress bar
        const progress = (this.step / this.totalSteps) * 100;
        this.progressBar.style.width = `${progress}%`;

        // Update buttons
        this.prevBtn.style.visibility = this.step === 1 ? 'hidden' : 'visible';
        this.nextBtn.textContent = this.step === this.totalSteps ? 'Finalizar Proposta' : 'Próximo';
        this.nextBtn.disabled = !this.answers[this.step];
    }

    finish() {
        const WHATSAPP_NUMBER = '244934859497';
        const msg = `*Pedido de Informação de Evento*\n\n` +
                    `• *Tipo de Evento:* ${this.answers[1]}\n` +
                    `• *Número de Pessoas:* ${this.answers[2]}\n` +
                    `• *Preferência de Menu:* ${this.answers[3]}\n\n` +
                    `Gostaria de saber disponibilidade e orçamentos para um evento com estas características.`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');

        // Reset quiz after delay
        setTimeout(() => {
            this.step = 1;
            this.answers = {};
            document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('is-selected'));
            this.updateUI();
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new EventQuiz();
});

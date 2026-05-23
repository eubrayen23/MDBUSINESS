/**
 * OPERATIONAL STATUS ENGINE — CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * This module calculates the restaurant's current status (Open/Closed)
 * based on Luanda's timezone and the specific operational windows.
 *
 * SCHEDULE:
 * Mon-Sat: 12:00-15:30 (Lunch) | 19:00-21:30 (Dinner)
 * Sun: 12:00-16:00 (Lunch Only)
 */

class StatusEngine {
    constructor() {
        this.schedule = {
            1: [{ s: 1200, e: 1530 }, { s: 1900, e: 2130 }], // Monday
            2: [{ s: 1200, e: 1530 }, { s: 1900, e: 2130 }], // Tuesday
            3: [{ s: 1200, e: 1530 }, { s: 1900, e: 2130 }], // Wednesday
            4: [{ s: 1200, e: 1530 }, { s: 1900, e: 2130 }], // Thursday
            5: [{ s: 1200, e: 1530 }, { s: 1900, e: 2130 }], // Friday
            6: [{ s: 1200, e: 1530 }, { s: 1900, e: 2130 }], // Saturday
            0: [{ s: 1200, e: 1600 }]                       // Sunday
        };

        this.init();
    }

    init() {
        this.updateStatus();
        // Update every minute
        setInterval(() => this.updateStatus(), 60000);
    }

    /**
     * Calculates if the restaurant is currently serving.
     * Also determines the time remaining until the next operational state change.
     * @returns {Object} { isOpen: boolean, timeString: string, nextOpening: string }
     */
    checkStatus() {
        const now = new Date();
        const day = now.getDay();
        const currentHour = now.getHours();
        const currentMin = now.getMinutes();
        const time = currentHour * 100 + currentMin;

        const windows = this.schedule[day];
        let isOpen = false;
        let nextOpening = '';

        for (const window of windows) {
            if (time >= window.s && time <= window.e) {
                isOpen = true;
                break;
            }
        }

        // Logic for "Next Opening" hint if closed
        if (!isOpen) {
            const upcoming = windows.find(w => w.s > time);
            if (upcoming) {
                const h = Math.floor(upcoming.s / 100);
                const m = upcoming.s % 100;
                nextOpening = `Abre às ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
            } else {
                nextOpening = 'Abre amanhã às 12:00';
            }
        }

        return {
            isOpen,
            nextOpening,
            timeString: now.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
        };
    }

    updateStatus() {
        const status = this.checkStatus();
        const containers = document.querySelectorAll('.operational-status');

        containers.forEach(el => {
            const label = el.querySelector('.status-text');

            if (status.isOpen) {
                el.classList.add('is-open');
                el.classList.remove('is-closed');
                el.setAttribute('title', 'Estamos prontos a servir!');
                if (label) label.textContent = 'Grelha Ativa';
            } else {
                el.classList.add('is-closed');
                el.classList.remove('is-open');
                el.setAttribute('title', status.nextOpening);
                if (label) label.textContent = status.nextOpening;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.statusEngine = new StatusEngine();
});

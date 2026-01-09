/**
 * DATA FRAGMENTS
 * Modular assembly logic allows for thousands of unique combinations.
 */
const fragmentData = {
    openers: [
        "It's remarkable how",
        "I’ve noticed that",
        "Everyone appreciates how",
        "It’s clear to see that",
        "The team is inspired by the way",
        "One of your greatest strengths is how",
        "You have this unique ability where"
    ],
    adjectives: [
        "consistently thoughtful",
        "exceptionally brilliant",
        "highly intuitive",
        "authentically creative",
        "fiercely dedicated",
        "remarkably visionary",
        "wonderfully articulate"
    ],
    attributes: [
        "approach to problem-solving",
        "attention to technical detail",
        "leadership during complex projects",
        "empathy for the user experience",
        "commitment to excellence",
        "clarity in communication",
        "ability to simplify the complex"
    ],
    impacts: [
        "elevates the standard for everyone else.",
        "creates a ripple effect of positivity.",
        "is the cornerstone of our recent success.",
        "makes difficult tasks look effortless.",
        "is truly a breath of fresh air.",
        "sets a new benchmark for professional growth.",
        "brings out the absolute best in the team."
    ]
};

/**
 * COMPLIMENT ENGINE CLASS
 * Manages state, randomization, and assembly.
 */
class ComplimentEngine {
    constructor(data) {
        this.data = data;
        this.history = [];
    }

    getRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generate(name = "") {
        const opener = this.getRandom(this.data.openers);
        const adj = this.getRandom(this.data.adjectives);
        const attr = this.getRandom(this.data.attributes);
        const impact = this.getRandom(this.data.impacts);

        const prefix = name.trim() ? `${name.trim()}, ` : "";
        const compliment = `${prefix}${opener} your ${adj} ${attr} ${impact}`;
        
        return compliment;
    }
}

/**
 * UI CONTROLLER
 * Handles DOM interactions and events.
 */
const UI = {
    engine: new ComplimentEngine(fragmentData),
    
    init() {
        this.cacheDOM();
        this.bindEvents();
    },

    cacheDOM() {
        this.generateBtn = document.getElementById('generateBtn');
        this.shareBtn = document.getElementById('shareBtn');
        this.display = document.getElementById('compliment-text');
        this.nameInput = document.getElementById('userName');
        this.toast = document.getElementById('toast');
    },

    bindEvents() {
        this.generateBtn.addEventListener('click', () => this.handleGenerate());
        this.shareBtn.addEventListener('click', () => this.handleShare());
        
        // Allow "Enter" key on input to generate
        this.nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleGenerate();
        });
    },

    handleGenerate() {
        const name = this.nameInput.value;
        const newCompliment = this.engine.generate(name);
        
        // Trigger CSS animation by re-rendering
        this.display.style.animation = 'none';
        this.display.offsetHeight; // trigger reflow
        this.display.style.animation = null;
        
        this.display.textContent = newCompliment;
    },

    async handleShare() {
        const text = this.display.textContent;
        
        // Fallback for Clipboard if Web Share isn't available
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'A Compliment for You',
                    text: text
                });
            } catch (err) {
                this.copyToClipboard(text);
            }
        } else {
            this.copyToClipboard(text);
        }
    },

    copyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            this.showToast();
        } catch (err) {
            console.error('Copy failed', err);
        }
        document.body.removeChild(textArea);
    },

    showToast() {
        this.toast.classList.remove('hidden');
        setTimeout(() => {
            this.toast.classList.add('hidden');
        }, 2500);
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => UI.init());
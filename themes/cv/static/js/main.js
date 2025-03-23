// Constants
const FONT_AWESOME_VERSION = '5.15.4';
const FONT_AWESOME_URL = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FONT_AWESOME_VERSION}/css/all.min.css`;

// DOM Elements
const aiTooltip = document.getElementById('aiTooltip');
const aiIcon = document.querySelector('.ai-icon');

// Load Font Awesome
function loadFontAwesome() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_AWESOME_URL;
    document.head.appendChild(link);
}

// Share CV functionality
function shareCV() {
    if (navigator.share) {
        navigator.share({
            title: 'CV - Rebeca Méndez',
            text: 'Tech Lead & Senior Backend Developer',
            url: window.location.href
        });
    }
}

// Tooltip functionality
function toggleAITooltip() {
    aiTooltip.classList.toggle('show');
}

function closeTooltipOnClickOutside(event) {
    if (!aiIcon.contains(event.target) && !aiTooltip.contains(event.target)) {
        aiTooltip.classList.remove('show');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadFontAwesome();
    document.addEventListener('click', closeTooltipOnClickOutside);
}); 
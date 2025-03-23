// Constantes
const FONT_AWESOME_VERSION = '5.15.4';
const FONT_AWESOME_URL = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FONT_AWESOME_VERSION}/css/all.min.css`;

// Elementos del DOM
let tooltip;
let aiIcon;

// Funciones
function loadFontAwesome() {
    if (!document.querySelector(`link[href*="font-awesome/${FONT_AWESOME_VERSION}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = FONT_AWESOME_URL;
        document.head.appendChild(link);
    }
}

function shareCV() {
    if (navigator.share) {
        navigator.share({
            title: 'CV - Rebeca Méndez',
            text: 'Tech Lead & Senior Backend Developer',
            url: window.location.href
        });
    }
}

function toggleAITooltip(event) {
    if (event) {
        event.stopPropagation();
    }
    tooltip.classList.toggle('show');
}

function closeTooltip(event) {
    if (!aiIcon.contains(event.target) && !tooltip.contains(event.target)) {
        tooltip.classList.remove('show');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Cargar Font Awesome
    loadFontAwesome();

    // Inicializar elementos
    tooltip = document.getElementById('aiTooltip');
    aiIcon = document.querySelector('.ai-icon');

    // Event listeners
    aiIcon.addEventListener('click', toggleAITooltip);
    document.addEventListener('click', closeTooltip);
}); 
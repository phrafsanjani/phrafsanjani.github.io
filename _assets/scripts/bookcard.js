function toggleContent() {
    const hiddenContent = document.querySelector('.hidden-content');
    const visibleContent = document.querySelector('.visible-content');
    const toggleButton = document.querySelector('.button-6');
    
    hiddenContent.classList.toggle('visible');
    visibleContent.classList.toggle('hidden');
    
    if (hiddenContent.classList.contains('visible')) {
        toggleButton.textContent = 'Back';
    } else {
        toggleButton.textContent = 'My Review';
    }
}
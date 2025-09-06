function toggleContent() {
    const normalCard = document.querySelector('#normal-card');
    const reviewCard = document.querySelector('#review-card');

    reviewCard.style.height = `${normalCard.offsetHeight}px`;
    
    reviewCard.classList.toggle('visible');
    normalCard.classList.toggle('hidden');
}
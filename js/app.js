document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameValue = document.getElementById('name').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const messageValue = document.getElementById('message').value.trim();

        hideFeedback();

        if (!nameValue || !emailValue || !messageValue) {
            showFeedback('Veuillez remplir tous les champs du formulaire.', 'error');
            return;
        }

        if (!isValidEmail(emailValue)) {
            showFeedback('Veuillez saisir une adresse e-mail valide.', 'error');
            return;
        }

        if (messageValue.length < 10) {
            showFeedback('Votre message doit contenir au moins 10 caractères.', 'error');
            return;
        }

        showFeedback(`Merci Alexis ! Votre message a été envoyé avec succès.`, 'success');
        document.getElementById('message').value = '';
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showFeedback(message, type) {
        formFeedback.textContent = message;
        formFeedback.className = type;
    }

    function hideFeedback() {
        formFeedback.textContent = '';
        formFeedback.className = '';
    }
});
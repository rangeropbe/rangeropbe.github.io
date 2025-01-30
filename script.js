// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Premium Toggle
    const premiumToggle = document.getElementById('premiumToggle');
    premiumToggle.addEventListener('change', handlePremiumToggle);

    // Modals
    const modals = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Course Selection
    document.querySelectorAll('.course-btn').forEach(btn => {
        btn.addEventListener('click', () => openModal('courseModal'));
    });

    // Payment Handling
    document.querySelectorAll('.select-course').forEach(btn => {
        btn.addEventListener('click', () => openModal('paymentModal'));
    });

    // Contributors
    document.getElementById('contributorsBtn').addEventListener('click', () => openModal('contributorsModal'));

    // Contact
    document.getElementById('contactBtn').addEventListener('click', () => openModal('contactModal'));

    // Payment Buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', handlePayment);
    });

    // Close Modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
});

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = document.querySelector('#themeToggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

function handlePremiumToggle(e) {
    if (!e.target.checked) {
        window.location.href = '#courses';
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
    });
}

function handlePayment() {
    const successMsg = document.querySelector('.payment-success');
    successMsg.classList.remove('hidden');
    setTimeout(() => {
        successMsg.classList.add('hidden');
        closeModal();
    }, 2000);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    document.querySelector('#themeToggle i').classList.replace('fa-moon', 'fa-sun');
}

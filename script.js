function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showPaymentModal(course) {
    alert('Processing Payment for ' + course);
    document.getElementById('phonePeAnimation').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('phonePeAnimation').style.display = 'none';
        alert('Payment Successful! Redirecting to course content...');
        showSection('dashboard');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

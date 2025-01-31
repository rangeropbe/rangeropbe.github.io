// script.js
let currentUser = null;
let selectedCourse = null;
let isLoading = false;

function showLoading() {
    isLoading = true;
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    isLoading = false;
    document.getElementById('loadingOverlay').style.display = 'none';
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => errorElement.style.display = 'none', 3000);
}

async function handleEnroll() {
    if (isLoading) return;
    
    if (!currentUser) {
        document.getElementById('authModal').style.display = 'block';
    } else {
        window.location.hash = '#courses';
    }
}

function toggleAuthForm(formType) {
    document.getElementById('signinForm').classList.toggle('active', formType === 'signin');
    document.getElementById('signupForm').classList.toggle('active', formType === 'signup');
    document.querySelectorAll('.error-message').forEach(e => e.style.display = 'none');
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function signUp() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!name || !email || !password) {
        return showError('signupError', 'All fields are required');
    }

    if (!validateEmail(email)) {
        return showError('signupError', 'Invalid email address');
    }

    if (localStorage.getItem(email)) {
        return showError('signupError', 'User already exists');
    }

    localStorage.setItem(email, JSON.stringify({ name, password }));
    alert('Sign up successful!');
    toggleAuthForm('signin');
}

function signIn() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        return showError('loginError', 'All fields are required');
    }

    const user = JSON.parse(localStorage.getItem(email));

    if (!user || user.password !== password) {
        return showError('loginError', 'Invalid credentials');
    }

    currentUser = user;
    document.getElementById('authModal').style.display = 'none';
    updateAccountSection();
}

function updateAccountSection() {
    const accountSection = document.getElementById('accountSection');
    accountSection.innerHTML = `<span>Welcome, ${currentUser.name}</span>`;
}

function selectCourse(course) {
    selectedCourse = course;
    document.getElementById('paymentModal').style.display = 'block';
}

async function processPayment() {
    if (isLoading) return;
    
    const payButton = document.getElementById('payButton');
    const loader = document.getElementById('paymentLoader');
    const paymentError = document.getElementById('paymentError');

    try {
        payButton.disabled = true;
        loader.style.display = 'block';
        showLoading();

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (Math.random() < 0.9) { // 90% success rate for simulation
            alert('Payment Successful!');
            document.getElementById('paymentModal').style.display = 'none';
            window.location.href = `/course-content/${selectedCourse}`;
        } else {
            throw new Error('Payment failed. Please try again.');
        }
    } catch (error) {
        paymentError.textContent = error.message;
        paymentError.style.display = 'block';
    } finally {
        payButton.disabled = false;
        loader.style.display = 'none';
        hideLoading();
    }
}

// Chatbot functionality
function toggleChat() {
    document.querySelector('.chat-container').classList.toggle('open');
}

document.getElementById('chatInput').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter' && !isLoading) {
        const input = e.target.value.trim();
        if (!input) return;

        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML += `<div class="user-message">${input}</div>`;
        e.target.value = '';
        
        showLoading();
        await new Promise(resolve => setTimeout(resolve, 1000));
        chatMessages.innerHTML += `<div class="bot-message">Thank you for your message. Our team will respond shortly.</div>`;
        hideLoading();
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

// Modal close functions
function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

function closeContributors() {
    document.getElementById('contributorsModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.length > 0) {
        const lastUser = localStorage.getItem(Object.keys(localStorage)[0]);
        currentUser = JSON.parse(lastUser);
        updateAccountSection();
    }
});

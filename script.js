// script.js
let currentUser = null;
let selectedCourse = null;

function handleEnroll() {
    if (!currentUser) {
        document.getElementById('authModal').style.display = 'block';
    } else {
        showCourseSelection();
    }
}

function toggleAuthForm(formType) {
    document.getElementById('signinForm').classList.toggle('active', formType === 'signin');
    document.getElementById('signupForm').classList.toggle('active', formType === 'signup');
}

function signUp() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        localStorage.setItem(email, JSON.stringify({ name, password }));
        alert('Sign up successful!');
        toggleAuthForm('signin');
    }
}

function signIn() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = JSON.parse(localStorage.getItem(email));
    
    if (user && user.password === password) {
        currentUser = user;
        document.getElementById('authModal').style.display = 'none';
        updateAccountSection();
    } else {
        alert('Invalid credentials!');
    }
}

function updateAccountSection() {
    const accountSection = document.getElementById('accountSection');
    accountSection.innerHTML = `<span>Welcome, ${currentUser.name}</span>`;
}

function selectCourse(course) {
    selectedCourse = course;
    document.getElementById('paymentModal').style.display = 'block';
}

function processPayment() {
    // Fake payment processing
    setTimeout(() => {
        alert('Payment Successful!');
        document.getElementById('paymentModal').style.display = 'none';
        window.location.href = `/course-content/${selectedCourse}`;
    }, 1000);
}

// Chatbot functionality
function toggleChat() {
    document.querySelector('.chat-container').classList.toggle('open');
}

// Contributors modal
document.getElementById('contributorsBtn').addEventListener('click', () => {
    document.getElementById('contributorsModal').style.display = 'block';
});

// Close modals
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
};

// script.js

const enrollNowButtons = document.querySelectorAll('.btn-enroll');
const selectCourseButtons = document.querySelectorAll('.btn-select');
const paymentModal = document.getElementById('payment-modal');
const courseContentModal = document.getElementById('course-content-modal');
const courseContentContainer = document.getElementById('course-content-container');
const closeButtons = document.getElementsByClassName("close");

enrollNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to sign-up/sign-in section
        // After successful sign-in, display account name
        alert('Redirecting to sign-up/sign-in'); 
        // In a real-world scenario, you would use JavaScript to navigate to the sign-up/sign-in page
        // and handle user authentication.
        // After successful sign-in, you can display the account name using JavaScript.
    });
});

selectCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.getAttribute('data-course');
        
        // Display payment modal
        paymentModal.style.display = "block";

        // Fake payment success
        const payNowButton = paymentModal.querySelector('.btn-pay');
        payNowButton.addEventListener('click', () => {
            alert('Payment successful!');
            paymentModal.style.display = "none";

            // Display course content
            courseContentModal.style.display = "block";

            // Load course content based on selected course
            if (courseName === 'machine-learning') {
                courseContentContainer.innerHTML = `
                    <h2>Machine Learning Course Content</h2>
                    <ul>
                        <li>Introduction to Machine Learning</li>
                        <li>Supervised Learning</li>
                        <li>Unsupervised Learning</li>
                        <li>Deep Learning</li>
                        <li>AI in Sales Applications</li>
                    </ul>
                `;
            } else if (courseName === 'ai-for-management') {
                courseContentContainer.innerHTML = `
                    <h2>AI for Management Course Content</h2>
                    <ul>
                        <li>AI in Sales Forecasting</li>
                        <li>Customer Relationship Management (CRM) with AI</li>
                        <li>AI-Powered Sales Analytics</li>
                        <li>Leading
                        

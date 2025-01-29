<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Master Pro | Complete AI Course</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary: #2563eb;
            --secondary: #1e40af;
            --light: #f3f4f6;
            --dark: #1f2937;
            --bg-dark: #0a0a12;
            --text-dark: #ffffff;
            --card-dark: #1a1a2e;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
            transition: background 0.3s, color 0.3s;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
        }

        body[data-theme="dark"] {
            background-color: var(--bg-dark);
            color: var(--text-dark);
        }

        /* Header */
        .header {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                        url('https://images.unsplash.com/photo-1573164713988-8665fc963095');
            background-size: cover;
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }

        /* Theme Toggle */
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 1000;
        }

        /* Pricing Cards */
        .pricing-section {
            padding: 4rem 2rem;
            text-align: center;
        }

        .pricing-cards {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .pricing-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            width: 300px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        body[data-theme="dark"] .pricing-card {
            background: var(--card-dark);
        }

        /* Contributors Section */
        .contributors-section {
            padding: 4rem 2rem;
            text-align: center;
        }

        .contributor-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .contributor-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        body[data-theme="dark"] .contributor-card {
            background: var(--card-dark);
        }

        .contributor-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1rem;
            border: 3px solid var(--primary);
        }

        /* Modals */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
            z-index: 999;
        }

        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            max-width: 400px;
            position: relative;
        }

        body[data-theme="dark"] .modal-content {
            background: var(--card-dark);
        }

        .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }

        /* Buttons */
        .cta-button {
            background: var(--primary);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 1rem;
            display: inline-block;
            text-decoration: none;
        }

        .cta-button:hover {
            background: var(--secondary);
        }
    </style>
</head>
<body>
    <!-- Theme Toggle -->
    <button class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
        <span>Dark Mode</span>
    </button>

    <!-- Header -->
    <header class="header">
        <h1>Master Artificial Intelligence</h1>
        <p>40-Hour Professional Certification Program</p>
        <button class="cta-button" id="enrollNow">Enroll Now</button>
    </header>

    <!-- Pricing Section -->
    <section class="pricing-section">
        <h2>Choose Your Plan</h2>
        <div class="pricing-cards">
            <div class="pricing-card">
                <h3>Monthly Plan</h3>
                <div class="price">₹1299/month</div>
                <ul>
                    <li>Full Course Access</li>
                    <li>Weekly Live Sessions</li>
                    <button class="cta-button" onclick="showPaymentModal()">Start Learning</button>
                </ul>
            </div>
            <div class="pricing-card">
                <h3>Annual Plan</h3>
                <div class="price">₹1699/year</div>
                <ul>
                    <li>All Monthly Features</li>
                    <li>Exclusive Content</li>
                    <button class="cta-button" onclick="showPaymentModal()">Get Premium</button>
                </ul>
            </div>
        </div>
    </section>

    <!-- Contributors Section -->
    <section class="contributors-section">
        <h2>Core Contributors</h2>
        <div class="contributor-grid">
         <!-- Joban Arsh -->
        <div class="contributor-card">
            <img src="https://source.unsplash.com/random/600x600/?man,face,tech" 
                 alt="Joban Arsh" class="contributor-img">
            <h3>Joban Arsh</h3>
            <p>AI Researcher</p>
            <p>@joban.arsh</p>
        </div>
            <div class="contributor-card">
                <img src="https://source.unsplash.com/random/600x600/?man,face,indian" 
                     alt="Jadeja Keyur" class="contributor-img">
                <h3>Jadeja Keyur</h3>
                <p>AI Architect</p>
                <p>@keyur.jadeja</p>
            </div>
            <div class="contributor-card">
                <img src="https://source.unsplash.com/random/600x600/?man,face,business" 
                     alt="Raghvani Tushar" class="contributor-img">
                <h3>Raghvani Tushar</h3>
                <p>ML Engineer</p>
                <p>@tushar.raghvani</p>
            </div>
            <div class="contributor-card">
                <img src="https://source.unsplash.com/random/600x600/?man,face,professional" 
                     alt="Bhanderi Jayesh" class="contributor-img">
                <h3>Bhanderi Jayesh</h3>
                <p>Data Scientist</p>
                <p>@jayesh.bhanderi</p>
            </div>
        </div>
    </section>

    <!-- Payment Modal -->
    <div id="paymentModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closePaymentModal()">&times;</span>
            <h3>Complete Payment</h3>
            <div class="payment-methods">
                <button class="cta-button" onclick="processPayment('upi')">Pay via UPI</button>
                <button class="cta-button" onclick="processPayment('netbanking')">NetBanking</button>
            </div>
        </div>
    </div>

    <!-- Social Media Modal -->
    <div id="socialModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeSocialModal()">&times;</span>
            <h3>Connect With Us</h3>
            <div class="social-links">
                <p><i class="fab fa-instagram"></i> @aicourseweb</p>
                <p><i class="fab fa-facebook"></i> @aicourseweb</p>
                <p><i class="fab fa-whatsapp"></i> +91 78492 18491</p>
            </div>
        </div>
    </div>

    <script>
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            body.setAttribute('data-theme', isDark ? '' : 'dark');
            themeToggle.innerHTML = isDark 
                ? '<i class="fas fa-moon"></i><span>Dark Mode</span>' 
                : '<i class="fas fa-sun"></i><span>Light Mode</span>';
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });

        // Initialize theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
        }

        // Modal Functions
        function showPaymentModal() {
            document.getElementById('paymentModal').style.display = 'flex';
        }

        function closePaymentModal() {
            document.getElementById('paymentModal').style.display = 'none';
        }

        function showSocialModal() {
            document.getElementById('socialModal').style.display = 'flex';
        }

        function closeSocialModal() {
            document.getElementById('socialModal').style.display = 'none';
        }

        // Payment Processing
        function processPayment(method) {
            alert(`Payment via ${method.toUpperCase()} successful!\nRedirecting to course...`);
            closePaymentModal();
        }

        // Event Listeners
        document.getElementById('enrollNow').addEventListener('click', showSocialModal);

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
    </script>
</body>
</html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery Pro - Enhanced</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #0a0a2e 0%, #0d1a35 100%);
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        /* Header Styles */
        header {
            text-align: center;
            margin-bottom: 4rem;
            animation: fadeIn 1s ease-in;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Floating Action Buttons */
        .floating-buttons {
            position: fixed;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            z-index: 1000;
        }

        .floating-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,180,216,0.3);
        }

        .floating-btn:hover {
            transform: scale(1.1) rotate(15deg);
        }

        /* Social Panel */
        .social-panel {
            position: fixed;
            top: 0;
            right: -400px;
            width: 400px;
            height: 100vh;
            background: rgba(0,0,0,0.95);
            padding: 2rem;
            transition: 0.4s ease-in-out;
            z-index: 999;
        }

        .social-panel.active {
            right: 0;
        }

        .social-card {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 15px;
            margin: 1rem 0;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .social-card:hover {
            transform: translateY(-5px);
        }

        /* Contributors Section */
        .contributors-container {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.95);
            padding: 2rem;
            border-radius: 20px;
            width: 90%;
            max-width: 800px;
            z-index: 1001;
        }

        .contributors-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 1rem;
        }

        .contributor-card {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .contributor-pfp {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1rem;
            border: 3px solid #00f3ff;
            box-shadow: 0 0 20px rgba(0,243,255,0.3);
        }

        /* Payment Modal */
        .payment-modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.95);
            padding: 2rem;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            z-index: 1002;
        }

        .payment-option {
            background: rgba(255,255,255,0.1);
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .payment-option:hover {
            background: rgba(255,255,255,0.15);
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            font-size: 1.5rem;
            color: #90e0ef;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .floating-buttons {
                bottom: 20px;
                top: auto;
                right: 20px;
                flex-direction: row;
            }

            .social-panel {
                width: 100%;
                right: -100%;
            }

            .contributors-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>AI Mastery Pro</h1>
            <p>Transform Your Future with Artificial Intelligence</p>
            <div class="course-image">
                <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa" alt="AI Course" style="width:100%;border-radius:15px;">
            </div>
        </header>

        <!-- Floating Action Buttons -->
        <div class="floating-buttons">
            <div class="floating-btn" onclick="toggleSocialPanel()">
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="floating-btn" onclick="showPaymentModal()">
                <i class="fas fa-rocket"></i>
            </div>
            <div class="floating-btn" onclick="showContributors()">
                <i class="fas fa-users"></i>
            </div>
        </div>

        <!-- Social Panel -->
        <div class="social-panel">
            <span class="close-btn" onclick="toggleSocialPanel()">&times;</span>
            <h2>Connect With Us</h2>
            <div class="social-card" onclick="window.open('https://instagram.com/aimasterycourse')">
                <i class="fab fa-instagram"></i> @aimasterycourse
                <p>Follow for daily updates</p>
            </div>
            <div class="social-card" onclick="window.open('https://facebook.com/aimasterycourse')">
                <i class="fab fa-facebook"></i> AI Mastery Course
                <p>Join our community</p>
            </div>
            <div class="social-card" onclick="window.open('https://wa.me/917284920412')">
                <i class="fab fa-whatsapp"></i> +91 7284920412
                <p>24/7 Support</p>
            </div>
        </div>

        <!-- Contributors Modal -->
        <div class="contributors-container" id="contributorsModal">
            <span class="close-btn" onclick="closeContributors()">&times;</span>
            <h2>Expert Team</h2>
            <div class="contributors-grid">
                <div class="contributor-card">
                    <img src="https://media.discordapp.net/attachments/1328338436226285589/1334229217482641458/296fe121-5dfa-43f4-98b5-db50019738a7.jpg" 
                         class="contributor-pfp" alt="Joban Arsh">
                    <h3>Joban Arsh</h3>
                    <p>AI Architect</p>
                </div>
                <div class="contributor-card">
                    <img src="https://example.com/path-to-image.jpg" 
                         class="contributor-pfp" alt="Team Member">
                    <h3>Jadeja Keyur</h3>
                    <p>ML Engineer</p>
                </div>
                <!-- Add other team members -->
            </div>
        </div>

        <!-- Payment Modal -->
        <div class="payment-modal" id="paymentModal">
            <span class="close-btn" onclick="closePayment()">&times;</span>
            <h2>Enrollment Options</h2>
            <div class="payment-options">
                <div class="payment-option" onclick="selectPlan('monthly')">
                    <h3>Monthly Plan</h3>
                    <p>₹1299/month</p>
                </div>
                <div class="payment-option" onclick="selectPlan('yearly')">
                    <h3>Yearly Plan</h3>
                    <p>₹1699/year (Save 35%)</p>
                </div>
            </div>
            <div id="paymentProcessor" style="display:none;">
                <input type="text" placeholder="Card Number" class="payment-field">
                <input type="text" placeholder="MM/YY" class="payment-field">
                <input type="text" placeholder="CVV" class="payment-field">
                <button class="pay-button" onclick="processPayment()">Pay Now</button>
            </div>
        </div>
    </div>

    <script>
        // Social Panel Toggle
        function toggleSocialPanel() {
            document.querySelector('.social-panel').classList.toggle('active');
        }

        // Contributors Modal
        function showContributors() {
            document.getElementById('contributorsModal').style.display = 'block';
        }

        function closeContributors() {
            document.getElementById('contributorsModal').style.display = 'none';
        }

        // Payment Modal
        function showPaymentModal() {
            document.getElementById('paymentModal').style.display = 'block';
        }

        function closePayment() {
            document.getElementById('paymentModal').style.display = 'none';
        }

        function selectPlan(planType) {
            document.getElementById('paymentProcessor').style.display = 'block';
        }

        function processPayment() {
            const modal = document.getElementById('paymentModal');
            modal.innerHTML = `
                <div style="text-align:center; padding:2rem;">
                    <h2 style="color:#00b4d8;">Payment Successful! 🎉</h2>
                    <i class="fas fa-check-circle" style="font-size:4rem; color:#00b4d8;"></i>
                    <p>Welcome to AI Mastery Pro!</p>
                    <button class="close-btn" onclick="closePayment()">Start Learning</button>
                </div>
            `;
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target === document.getElementById('contributorsModal')) {
                closeContributors();
            }
            if (event.target === document.getElementById('paymentModal')) {
                closePayment();
            }
            if (event.target === document.querySelector('.social-panel')) {
                toggleSocialPanel();
            }
        }
    </script>
</body>
</html>

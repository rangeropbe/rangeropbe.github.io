<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery Course - Enroll Now</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* All previous CSS styles remain the same */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #fff;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

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

        /* ... (keep all previous CSS styles) ... */

        .loader {
            border: 4px solid #f3f3f3;
            border-radius: 50%;
            border-top: 4px solid #00b4d8;
            width: 40px;
            height: 40px;
            margin: 20px auto;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>AI Mastery Course</h1>
            <p>40 Hours of Intensive Learning | Hands-on Projects | Certificate of Completion</p>
            <div class="course-image">
                <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="AI Course">
            </div>
        </header>

        <div class="pricing-switch">
            <span>Monthly</span>
            <label class="switch">
                <input type="checkbox" id="pricingToggle">
                <span class="slider"></span>
            </label>
            <span>Yearly (Save 35%)</span>
        </div>

        <div class="price-cards">
            <div class="price-card" id="monthlyCard">
                <h2>Monthly Plan</h2>
                <div class="price">₹<span id="monthlyPrice">1299</span></div>
                <ul class="features">
                    <li><i class="fas fa-clock"></i>40 Hours Course</li>
                    <li><i class="fas fa-certificate"></i>Course Certificate</li>
                    <li><i class="fas fa-video"></i>Lifetime Access</li>
                    <li><i class="fas fa-headset"></i>24/7 Support</li>
                </ul>
                <button class="enroll-btn">Enroll Now</button>
            </div>

            <div class="price-card" id="yearlyCard">
                <h2>Yearly Plan</h2>
                <div class="price">₹<span id="yearlyPrice">1699</span></div>
                <ul class="features">
                    <li><i class="fas fa-clock"></i>40 Hours Course</li>
                    <li><i class="fas fa-certificate"></i>Course Certificate</li>
                    <li><i class="fas fa-video"></i>Lifetime Access</li>
                    <li><i class="fas fa-headset"></i>24/7 Support</li>
                    <li><i class="fas fa-gift"></i>35% Discount</li>
                </ul>
                <button class="enroll-btn">Enroll Now</button>
            </div>
        </div>

        <!-- Contributors Button -->
        <div class="contributors-btn">Meet Our Team</div>

        <!-- Contributors Modal -->
        <div class="contributors-container" id="contributorsModal">
            <span class="close-btn" onclick="closeContributors()">&times;</span>
            <h2>Course Contributors</h2>
            <div class="contributors-grid">
                <div class="contributor-card">
                    <img src="https://media.discordapp.net/attachments/1328338436226285589/1334217392825307156/image0.png" 
                         class="contributor-pfp" alt="Joban Arsh">
                    <h3>Joban Arsh</h3>
                    <p>AI Specialist</p>
                </div>
                <div class="contributor-card">
                    <img src="https://media.discordapp.net/attachments/1328338436226285589/1334217392825307156/image0.png" 
                         class="contributor-pfp" alt="Jadeja Keyur">
                    <h3>Jadeja Keyur</h3>
                    <p>ML Engineer</p>
                </div>
                <div class="contributor-card">
                    <img src="https://media.discordapp.net/attachments/1328338436226285589/1334217392825307156/image0.png" 
                         class="contributor-pfp" alt="Bhanderi Jayesh">
                    <h3>Bhanderi Jayesh</h3>
                    <p>Data Scientist</p>
                </div>
                <div class="contributor-card">
                    <img src="https://media.discordapp.net/attachments/1328338436226285589/1334217392825307156/image0.png" 
                         class="contributor-pfp" alt="Raghvani Tushar">
                    <h3>Raghvani Tushar</h3>
                    <p>AI Researcher</p>
                </div>
            </div>
        </div>

        <!-- Payment Modal -->
        <div class="payment-modal" id="paymentModal">
            <span class="close-btn" onclick="closePayment()">&times;</span>
            <h2>Complete Enrollment</h2>
            <div class="coupon-section">
                <input type="text" class="coupon-input" placeholder="Enter coupon code">
                <button class="apply-coupon" onclick="applyCoupon()">Apply</button>
                <p id="coupon-status" style="margin-top: 0.5rem;"></p>
            </div>
            <div class="payment-option" onclick="processPayment('credit')">
                <i class="fas fa-credit-card"></i> Credit/Debit Card
            </div>
            <div class="payment-option" onclick="processPayment('upi')">
                <i class="fas fa-mobile-alt"></i> UPI Payment
            </div>
            <div class="payment-option" onclick="processPayment('netbanking')">
                <i class="fas fa-university"></i> Net Banking
            </div>
        </div>

        <!-- Social Media Section -->
        <div class="social-section">
            <div class="social-card" onclick="handleSocial('instagram')">
                <div class="social-header">
                    <i class="fab fa-instagram social-icon" style="color: #E1306C; font-size: 2rem;"></i>
                    <h3>AI Mastery Course</h3>
                </div>
                <p>Follow us on Instagram for more updates</p>
                <button class="social-button">
                    <i class="fab fa-instagram"></i> Follow Now
                </button>
            </div>

            <div class="social-card" onclick="handleSocial('facebook')">
                <div class="social-header">
                    <i class="fab fa-facebook social-icon" style="color: #3b5998; font-size: 2rem;"></i>
                    <h3>AI Mastery Course</h3>
                </div>
                <p>Like our Facebook page for updates</p>
                <button class="social-button">
                    <i class="fab fa-facebook"></i> Like Page
                </button>
            </div>

            <div class="social-card" onclick="handleSocial('whatsapp')">
                <div class="social-header">
                    <i class="fab fa-whatsapp social-icon" style="color: #25D366; font-size: 2rem;"></i>
                    <h3>Contact Support</h3>
                </div>
                <p>Chat with us on WhatsApp</p>
                <button class="social-button">
                    <i class="fab fa-whatsapp"></i> +91 7284920412
                </button>
            </div>
        </div>
    </div>

    <script>
        // Pricing Toggle
        const pricingToggle = document.getElementById('pricingToggle');
        const monthlyCard = document.getElementById('monthlyCard');
        const yearlyCard = document.getElementById('yearlyCard');

        pricingToggle.addEventListener('change', function() {
            yearlyCard.style.display = this.checked ? 'block' : 'none';
            monthlyCard.style.display = this.checked ? 'none' : 'block';
        });

        // Initialize pricing
        yearlyCard.style.display = 'none';

        // Contributors Modal
        function showContributors() {
            document.getElementById('contributorsModal').style.display = 'block';
        }

        function closeContributors() {
            document.getElementById('contributorsModal').style.display = 'none';
        }

        document.querySelector('.contributors-btn').addEventListener('click', showContributors);

        // Payment Modal
        document.querySelectorAll('.enroll-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.getElementById('paymentModal').style.display = 'block';
            });
        });

        function closePayment() {
            document.getElementById('paymentModal').style.display = 'none';
        }

        function applyCoupon() {
            const couponStatus = document.getElementById('coupon-status');
            couponStatus.textContent = '🎉 Coupon applied successfully!';
            couponStatus.style.color = '#90e0ef';
        }

        function processPayment(method) {
            const modal = document.getElementById('paymentModal');
            modal.innerHTML = `
                <div style="text-align:center; padding:2rem;">
                    <h2>Payment Processing...</h2>
                    <div class="loader"></div>
                    <p>Processing ${method.replace(/^\w/, c => c.toUpperCase())} payment</p>
                </div>
            `;

            setTimeout(() => {
                modal.innerHTML = `
                    <div style="text-align:center; padding:2rem;">
                        <h2 style="color:#90e0ef;">Payment Successful! 🎉</h2>
                        <i class="fas fa-check-circle" style="font-size:4rem; color:#90e0ef; margin:1rem;"></i>
                        <p>You now have full course access!</p>
                        <button class="enroll-btn" onclick="closePayment()">Continue Learning</button>
                    </div>
                `;
            }, 2000);
        }

        // Social Media Handling
        function handleSocial(platform) {
            const urls = {
                instagram: 'https://instagram.com/aimasterycourse',
                facebook: 'https://facebook.com/aimasterycourse',
                whatsapp: 'https://wa.me/917284920412'
            };
            window.open(urls[platform], '_blank');
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('contributors-container')) closeContributors();
            if (event.target.classList.contains('payment-modal')) closePayment();
        };
    </script>
</body>
</html>

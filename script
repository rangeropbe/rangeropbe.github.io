<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery Course - Enroll Now</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css>
    <style>
        /* Previous styles remain same */
        /* Add these new styles */

        .contributors-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            color: white;
            padding: 1rem 2rem;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0,180,216,0.3);
            transition: transform 0.3s ease;
            z-index: 1000;
        }

        .contributors-btn:hover {
            transform: scale(1.05);
        }

        .contributors-container {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            padding: 2rem;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            z-index: 1001;
            animation: slideIn 0.5s ease-out;
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

        .contributor-card:hover {
            transform: translateY(-5px);
        }

        .contributor-pfp {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 1rem;
            border: 3px solid #00b4d8;
            object-fit: cover;
        }

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
            backdrop-filter: blur(10px);
            animation: modalSlide 0.5s ease-out;
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
            transform: translateX(10px);
        }

        .coupon-section {
            margin: 1rem 0;
        }

        .coupon-input {
            width: 70%;
            padding: 0.8rem;
            border-radius: 25px;
            border: none;
            margin-right: 1rem;
            background: rgba(255,255,255,0.1);
            color: white;
        }

        .apply-coupon {
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        @keyframes modalSlide {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            font-size: 1.5rem;
            color: #90e0ef;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Add Contributors Button -->
        <div class="contributors-btn" onclick="showContributors()">Meet Our Team</div>

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
                <!-- Repeat for other contributors -->
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

        <!-- Rest of the original content -->
    </div>

    <script>
        // Previous JavaScript remains same
        // Add these new functions

        function showContributors() {
            document.getElementById('contributorsModal').style.display = 'block';
        }

        function closeContributors() {
            document.getElementById('contributorsModal').style.display = 'none';
        }

        let currentPlan = 'monthly';
        
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
            couponStatus.style.color = '#90e0ef';
            couponStatus.innerHTML = '🎉 Coupon applied successfully!';
            couponStatus.style.animation = 'fadeIn 0.5s ease';
        }

        function processPayment(method) {
            const paymentOptions = {
                'credit': 'Credit/Debit Card',
                'upi': 'UPI Payment',
                'netbanking': 'Net Banking'
            };
            
            const modal = document.getElementById('paymentModal');
            modal.innerHTML = `
                <div style="text-align:center; padding:2rem;">
                    <h2>Payment Processing...</h2>
                    <div class="loader"></div>
                    <p>Processing ${paymentOptions[method]} payment</p>
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

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target.className === 'contributors-container') {
                closeContributors();
            }
            if (event.target.className === 'payment-modal') {
                closePayment();
            }
        }
    </script>
</body>
</html>

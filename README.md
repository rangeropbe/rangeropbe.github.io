<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery Course - Enroll Now</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
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

        .pricing-switch {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 0;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            margin: 0 1rem;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #00b4d8;
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }

        .price-cards {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .price-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            width: 350px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: transform 0.3s ease;
            cursor: pointer;
        }

        .price-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.15);
        }

        .price-card h2 {
            margin-bottom: 1rem;
            color: #90e0ef;
        }

        .price {
            font-size: 3rem;
            margin: 1rem 0;
            font-weight: bold;
        }

        .features {
            list-style: none;
            margin: 2rem 0;
        }

        .features li {
            margin: 1rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .enroll-btn {
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
            width: 100%;
        }

        .enroll-btn:hover {
            transform: scale(1.05);
        }

        .course-image {
            width: 100%;
            max-width: 400px;
            margin: 2rem auto;
            border-radius: 15px;
            overflow: hidden;
        }

        .course-image img {
            width: 100%;
            height: auto;
        }

        /* Contributors Section */
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

        /* Social Media Section */
        .social-section {
            position: fixed;
            bottom: 30px;
            left: 30px;
            z-index: 1000;
        }

        .social-card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 1.5rem;
            margin: 1rem 0;
            width: 300px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
            animation: float 4s ease-in-out infinite;
        }

        .social-card:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.15);
        }

        .social-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }

        .social-button {
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 20px;
            color: white;
            cursor: pointer;
            transition: transform 0.3s ease;
            width: 100%;
        }

        .social-button:hover {
            transform: scale(1.05);
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        @keyframes modalSlide {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            font-size: 1.5rem;
            color: #90e0ef;
        }

        @media (max-width: 768px) {
            .price-cards {
                flex-direction: column;
                align-items: center;
            }
            .social-section {
                bottom: 120px;
                left: 50%;
                transform: translateX(-50%);
                width: 90%;
            }
            .social-card {
                width: 100%;
                margin: 0.5rem 0;
            }
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
            <!-- Pricing cards remain same -->
        </div>

        <!-- Contributors Button -->
        <div class="contributors-btn">Meet Our Team</div>

        <!-- Contributors Modal -->
        <div class="contributors-container" id="contributorsModal">
            <!-- Contributors content remains same -->
        </div>

        <!-- Payment Modal -->
        <div class="payment-modal" id="paymentModal">
            <!-- Payment content remains same -->
        </div>

        <!-- Social Media Section -->
        <div class="social-section">
            <!-- Social media cards remain same -->
        </div>
    </div>

    <script>
        // JavaScript from all features merged
        const pricingToggle = document.getElementById('pricingToggle');
        const monthlyCard = document.getElementById('monthlyCard');
        const yearlyCard = document.getElementById('yearlyCard');

        pricingToggle.addEventListener('change', function() {
            if(this.checked) {
                yearlyCard.style.display = 'block';
                monthlyCard.style.display = 'none';
            } else {
                monthlyCard.style.display = 'block';
                yearlyCard.style.display = 'none';
            }
        });

        // Initialize with monthly plan visible
        yearlyCard.style.display = 'none';

        // Contributors functions
        document.querySelector('.contributors-btn').addEventListener('click', showContributors);
        
        function showContributors() {
            document.getElementById('contributorsModal').style.display = 'block';
        }

        function closeContributors() {
            document.getElementById('contributorsModal').style.display = 'none';
        }

        // Payment functions
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

        // Social media functions
        function handleSocial(platform) {
            const links = {
                'instagram': 'https://www.instagram.com/aimasterycourse',
                'facebook': 'https://www.facebook.com/aimasterycourse',
                'whatsapp': 'https://wa.me/917284920412'
            };
            window.open(links[platform], '_blank');
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

        // Add floating animation to social cards
        document.querySelectorAll('.social-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.3}s`;
        });
    </script>
</body>
</html>

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

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
            .price-cards {
                flex-direction: column;
                align-items: center;
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
    </div>

    <script>
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
    </script>
</body>
</html>

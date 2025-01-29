<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery Pro - Next-Gen Learning</title>
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

        /* Neon Text Effect */
        .neon-text {
            text-shadow: 0 0 10px #00f3ff,
                       0 0 20px #00f3ff,
                       0 0 30px #00f3ff;
        }

        /* Glassmorphism Effect */
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        /* Interactive Sections */
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

        /* Contributors Carousel */
        .contributors-carousel {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 2rem;
            padding: 2rem 0;
        }

        .contributor-card {
            scroll-snap-align: center;
            min-width: 300px;
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .contributor-card:hover {
            transform: translateY(-10px);
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

        /* Enhanced Payment Modal */
        .payment-processor {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 2rem;
        }

        .payment-step {
            padding: 1rem;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .payment-step.active {
            background: linear-gradient(45deg, #00b4d8, #90e0ef);
            transform: scale(1.05);
        }

        /* Social Media Panel */
        .social-panel {
            position: fixed;
            top: 0;
            right: -400px;
            width: 400px;
            height: 100vh;
            background: rgba(0,0,0,0.9);
            backdrop-filter: blur(10px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 2rem;
            z-index: 999;
        }

        .social-panel.active {
            right: 0;
        }

        /* Holographic Effect */
        .holographic-effect {
            position: relative;
            overflow: hidden;
        }

        .holographic-effect::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, 
                transparent 25%,
                rgba(0,243,255,0.1) 50%,
                transparent 75%);
            animation: hologram 6s infinite linear;
        }

        @keyframes hologram {
            0% { transform: rotate(0deg) translate(-50%, -50%); }
            100% { transform: rotate(360deg) translate(-50%, -50%); }
        }

        /* Add other styles from previous version */
    </style>
</head>
<body>
    <!-- Floating Action Buttons -->
    <div class="floating-buttons">
        <div class="floating-btn" onclick="toggleSocialPanel()">
            <i class="fas fa-share-alt"></i>
        </div>
        <div class="floating-btn" onclick="showEnrollment()">
            <i class="fas fa-rocket"></i>
        </div>
        <div class="floating-btn" onclick="showContributors()">
            <i class="fas fa-users"></i>
        </div>
    </div>

    <!-- Social Media Panel -->
    <div class="social-panel glass-card">
        <h2 class="neon-text">Connect With Us</h2>
        <div class="social-grid">
            <div class="social-card" onclick="window.open('https://instagram.com/aimasterycourse')">
                <div class="social-header">
                    <i class="fab fa-instagram"></i>
                    <h3>@aimasterycourse</h3>
                </div>
                <p>Follow for daily AI insights</p>
                <div class="social-preview">
                    <img src="https://source.unsplash.com/random/800x600?ai,tech" alt="Instagram Preview">
                </div>
            </div>
            <!-- Add similar cards for other social media -->
        </div>
    </div>

    <!-- Contributors Section -->
    <div class="contributors-container glass-card">
        <div class="contributors-carousel">
            <div class="contributor-card holographic-effect">
                <img src="https://media.discordapp.net/attachments/1328338436226285589/1334229217482641458/296fe121-5dfa-43f4-98b5-db50019738a7.jpg" 
                     class="contributor-pfp" alt="Team Member">
                <h3>Joban Arsh</h3>
                <p>Lead AI Architect</p>
                <div class="contributor-bio">
                    <p>10+ years experience in machine learning</p>
                </div>
            </div>
            <!-- Add other contributors -->
        </div>
    </div>

    <!-- Enhanced Payment Gateway -->
    <div class="payment-modal glass-card">
        <div class="payment-processor">
            <div class="payment-step active" data-step="1">
                <i class="fas fa-wallet"></i>
                <p>Choose Plan</p>
            </div>
            <div class="payment-step" data-step="2">
                <i class="fas fa-credit-card"></i>
                <p>Payment Details</p>
            </div>
            <div class="payment-step" data-step="3">
                <i class="fas fa-check-circle"></i>
                <p>Confirmation</p>
            </div>
        </div>
        <!-- Add payment form steps -->
    </div>

    <!-- Course Highlights -->
    <div class="course-highlights">
        <div class="highlight-card holographic-effect">
            <div class="highlight-content">
                <h4>AI Project Lab</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 75%"></div>
                </div>
                <button class="neuro-button">Start Project</button>
            </div>
        </div>
    </div>

    <script>
        // Interactive Social Panel
        function toggleSocialPanel() {
            document.querySelector('.social-panel').classList.toggle('active');
        }

        // 3D Payment Process
        let currentStep = 1;
        function updatePaymentSteps(step) {
            document.querySelectorAll('.payment-step').forEach(el => {
                el.classList.remove('active');
                if(parseInt(el.dataset.step) === step) {
                    el.classList.add('active');
                }
            });
        }

        // Holographic Interaction
        document.querySelectorAll('.holographic-effect').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                el.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/10}deg) rotateY(${-(x - rect.width/2)/10}deg)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'none';
            });
        });

        // Add other interactive functions
    </script>
</body>
</html>

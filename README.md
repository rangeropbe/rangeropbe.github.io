<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery - Premium AI Courses</title>
    <meta name="description" content="Learn AI from industry experts with comprehensive courses and hands-on projects">
    <meta name="keywords" content="AI courses, Machine Learning, Artificial Intelligence, Online Education">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <style>
        :root {
            --primary-color: #00ffff;
            --secondary-color: #ff00ff;
            --bg-color: #0a0a2e;
            --text-color: #ffffff;
        }

        /* Loading Animation */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-color);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s;
        }

        .loader.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid var(--primary-color);
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        /* Theme Toggle */
        .theme-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px;
            border-radius: 50%;
            background: var(--bg-color);
            cursor: pointer;
            z-index: 1000;
        }

        /* Dark/Light Theme */
        .light-theme {
            --bg-color: #f0f0f0;
            --text-color: #0a0a2e;
            background: #ffffff;
        }

        /* Updated Hero Section */
        .hero {
            position: relative;
            overflow: hidden;
<section class="hero" id="home">
    <div class="hero-content">
        <!-- Text content -->
    </div>
    <div class="hero-image">
        <img src="https://media.discordapp.net/attachments/1328338436226285589/1334098573268353075/image0.jpg?ex=679b4b9e&is=6799fa1e&hm=3edcca294a4cca39d9c50b353c85fb2d050026f357368a892aa955f21da5004a&" alt="AI Course Illustration" loading="lazy">
    </div>
</section>
        }

        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        /* Testimonials */
        .testimonials {
            padding: 100px 10%;
            background: rgba(255, 255, 255, 0.1);
        }

        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .testimonial-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }

        /* Curriculum */
        .curriculum {
            padding: 100px 10%;
        }

        .module {
            background: rgba(255, 255, 255, 0.05);
            margin: 20px 0;
            padding: 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
        }

        /* Newsletter */
        .newsletter {
            padding: 100px 10%;
            text-align: center;
            background: #1a1a4a;
        }

        .newsletter-input {
            padding: 15px 30px;
            border-radius: 30px;
            border: 2px solid var(--primary-color);
            background: transparent;
            color: var(--text-color);
            margin-right: 10px;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero {
                flex-direction: column;
                text-align: center;
                padding-top: 150px;
            }

            .ai-image {
                width: 300px;
                height: 300px;
            }

            .nav-links {
                display: none;
            }
        }
    </style>
</head>
<body>
    <!-- Loading Screen -->
    <div class="loader">
        <div class="spinner"></div>
    </div>

    <!-- Theme Toggle -->
    <button class="theme-toggle" onclick="toggleTheme()">
        <i class="fas fa-moon"></i>
    </button>

    <!-- Updated Navbar -->
    <nav class="navbar">
        <div class="logo">AI Mastery</div>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <!-- Enhanced Hero Section -->
    <section class="hero" id="home">
        <div class="particles" id="particles"></div>
        <div class="hero-content">
            <h1>Become AI Expert in 2024</h1>
            <p>Join 10,000+ students mastering AI with our industry-leading program</p>
            <button class="cta-button">Enroll Now at ₹1,999 <s>₹2,999</s></button>
        </div>
        <div class="ai-image">
            <img src="https://undraw.co/illustrations" alt="AI Learning" loading="lazy">
        </div>
    </section>

    <!-- Student Stats -->
    <section class="stats">
        <div class="stat-item">
            <h3 class="count">10000</h3>
            <p>Students Enrolled</p>
        </div>
        <div class="stat-item">
            <h3 class="count">97</h3>
            <p>Placement Rate</p>
        </div>
        <div class="stat-item">
            <h3 class="count">1500</h3>
            <p>Hiring Partners</p>
        </div>
    </section>

    <!-- Curriculum Section -->
    <section class="curriculum" id="curriculum">
        <h2>Course Curriculum</h2>
        <div class="module">
            <h3>Module 1: Foundations of AI</h3>
            <div class="module-content">
                <p>Python Programming, Linear Algebra, Statistics Basics</p>
            </div>
        </div>
        <!-- Add more modules -->
    </section>

    <!-- Payment Section -->
    <section class="pricing" id="pricing">
        <div class="price-card">
            <h3>Full Stack AI Program</h3>
            <h2>₹1,999 <span>/ lifetime</span></h2>
            <ul>
                <li>40+ Hours Content</li>
                <li>50+ Projects</li>
                <li>1:1 Mentorship</li>
            </ul>
            <button class="cta-button" onclick="showPaymentOptions()">Enroll Now</button>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
        <h2>Get Course Syllabus</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
            <input type="email" name="email" class="newsletter-input" placeholder="Enter your email" required>
            <button type="submit" class="cta-button">Download Syllabus</button>
        </form>
    </section>

    <script>
        // Loading Screen
        window.addEventListener('load', () => {
            document.querySelector('.loader').classList.add('hidden');
        });

        // Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            document.querySelector('.theme-toggle i').classList.toggle('fa-moon');
            document.querySelector('.theme-toggle i').classList.toggle('fa-sun');
        }

        // Animated Counters
        const counters = document.querySelectorAll('.count');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.innerText;
                const count = +counter.innerText;
                const increment = target / 200;
                
                if(count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                }
            }
            updateCount();
        });

        // Payment Options
        function showPaymentOptions() {
            const options = ['Razorpay', 'Paytm', 'Credit Card', 'EMI'];
            const paymentHTML = options.map(option => 
                `<button class="payment-option">${option}</button>`
            ).join('');
            
            Swal.fire({
                title: 'Choose Payment Method',
                html: paymentHTML,
                showConfirmButton: false
            });
        }

        // GSAP Animations
        gsap.from(".hero-content", {duration: 1, y: 100, opacity: 0});
        gsap.from(".ai-image", {duration: 1, x: 100, opacity: 0, delay: 0.5});

        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    </script>

    <!-- Add Particle.js CDN -->
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script>
        // Particle Background
        particlesJS('particles', {
            particles: {
                number: { value: 80 },
                color: { value: '#00ffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3 },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    </script>
</body>
</html>

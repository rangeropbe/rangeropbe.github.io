<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Mastery - Premium AI Courses</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: #0a0a2e;
            color: #fff;
            overflow-x: hidden;
        }

        .navbar {
            position: fixed;
            width: 100%;
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(10, 10, 46, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
        }

        .logo {
            font-size: 2rem;
            font-weight: bold;
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            transition: 0.3s;
        }

        .nav-links a:hover {
            color: #00ffff;
        }

        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10%;
            background: radial-gradient(circle at center, #1a1a4a 0%, #0a0a2e 100%);
        }

        .hero-content {
            max-width: 600px;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: float 3s ease-in-out infinite;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .cta-button {
            padding: 15px 40px;
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            border: none;
            border-radius: 30px;
            color: #fff;
            font-size: 1.1rem;
            cursor: pointer;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
        }

        .cta-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .ai-image {
            width: 500px;
            height: 500px;
            background: url('https://media.discordapp.net/attachments/1328338436226285589/1334098573268353075/image0.jpg?ex=679b4b9e&is=6799fa1e&hm=3edcca294a4cca39d9c50b353c85fb2d050026f357368a892aa955f21da5004a&') center/contain no-repeat;
            filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .features {
            padding: 100px 10%;
            background: #1a1a4a;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 50px;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            transition: 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.15);
        }

        .pricing {
            padding: 100px 10%;
        }

        .price-cards {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .price-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            width: 300px;
            text-align: center;
            transition: 0.3s;
        }

        .price-card:hover {
            transform: scale(1.05);
        }

        footer {
            padding: 50px 10%;
            background: #000;
            text-align: center;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">AI Mastery</div>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <section class="hero" id="home">
        <div class="hero-content" data-aos="fade-right">
            <h1>Master AI with Our Expert Courses</h1>
            <p>Transform your future with cutting-edge AI education from industry leaders.</p>
            <button class="cta-button">Start Learning Now</button>
        </div>
        <div class="ai-image" data-aos="fade-left"></div>
    </section>

    <section class="features" id="features">
        <h2 data-aos="fade-up">Why Choose Us</h2>
        <div class="feature-grid">
            <div class="feature-card" data-aos="zoom-in">
                <i class="fas fa-brain fa-3x"></i>
                <h3>Expert Instructors</h3>
                <p>Learn from industry professionals with real-world AI experience.</p>
            </div>
            <div class="feature-card" data-aos="zoom-in" data-aos-delay="100">
                <i class="fas fa-certificate fa-3x"></i>
                <h3>Certification</h3>
                <p>Get recognized certification upon course completion.</p>
            </div>
            <div class="feature-card" data-aos="zoom-in" data-aos-delay="200">
                <i class="fas fa-infinity fa-3x"></i>
                <h3>Lifetime Access</h3>
                <p>Access course materials anytime, anywhere, forever.</p>
            </div>
        </div>
    </section>

    <section class="pricing" id="pricing">
        <h2 data-aos="fade-up">Pricing Plans</h2>
        <div class="price-cards">
            <div class="price-card" data-aos="flip-left">
                <h3>Basic</h3>
                <h2>$99</h2>
                <p>Monthly Access</p>
                <button class="cta-button">Choose Plan</button>
            </div>
            <div class="price-card" data-aos="flip-left" data-aos-delay="200">
                <h3>Pro</h3>
                <h2>$299</h2>
                <p>Annual Access</p>
                <button class="cta-button">Choose Plan</button>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 AI Community. All rights reserved.</p>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    </script>
</body>
</html># aicourse.github.io

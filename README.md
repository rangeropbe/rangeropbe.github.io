<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Academy - Learn Artificial Intelligence</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            line-height: 1.6;
        }

        /* Header Styles */
        header {
            background: #1a1a1a;
            color: white;
            padding: 1rem;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            margin-left: 2rem;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                        url('ai-bg.jpg');
            background-size: cover;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 0 1rem;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2rem;
            background: #00b894;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 1rem;
        }

        /* Courses Section */
        .courses {
            padding: 5rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .course-card {
            background: #f5f6fa;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
        }

        .course-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }

        .price {
            font-size: 1.5rem;
            color: #00b894;
            margin: 1rem 0;
        }

        /* Testimonials Section */
        .testimonials {
            background: #f5f6fa;
            padding: 5rem 1rem;
            text-align: center;
        }

        /* Footer */
        footer {
            background: #1a1a1a;
            color: white;
            text-align: center;
            padding: 2rem 1rem;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero-content h1 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">AI Academy</div>
            <div class="nav-links">
                <a href="#courses">Courses</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Master Artificial Intelligence</h1>
            <p>Transform your career with our comprehensive AI courses</p>
            <a href="#courses" class="cta-button">Explore Courses</a>
        </div>
    </section>

    <section id="courses" class="courses">
        <h2>Featured Courses</h2>
        <div class="courses-grid">
            <div class="course-card">
                <img src="machine-learning.jpg" alt="Machine Learning">
                <h3>Machine Learning Fundamentals</h3>
                <p class="price">$199</p>
                <p>Learn the basics of machine learning and predictive modeling</p>
                <a href="#" class="cta-button">Enroll Now</a>
            </div>

            <div class="course-card">
                <img src="deep-learning.jpg" alt="Deep Learning">
                <h3>Deep Learning Specialization</h3>
                <p class="price">$299</p>
                <p>Master neural networks and deep learning architectures</p>
                <a href="#" class="cta-button">Enroll Now</a>
            </div>

            <div class="course-card">
                <img src="nlp.jpg" alt="Natural Language Processing">
                <h3>Natural Language Processing</h3>
                <p class="price">$249</p>
                <p>Build intelligent systems that understand human language</p>
                <a href="#" class="cta-button">Enroll Now</a>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <h2>Student Testimonials</h2>
        <div class="testimonial">
            <p>"The best AI courses I've found online. Highly recommended!"</p>
            <h4>- John Doe, Data Scientist</h4>
        </div>
    </section>

    <footer>
        <p>&copy; 2023 AI Academy. All rights reserved.</p>
    </footer>
</body>
</html>

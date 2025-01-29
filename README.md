<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Master Pro | Artificial Intelligence Certification</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary: #2563eb;
            --secondary: #1e40af;
            --dark: #1f2937;
            --light: #f3f4f6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
        }

        .header {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                        url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }

        .course-highlights {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            padding: 4rem 2rem;
        }

        .highlight-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
        }

        .pricing-section {
            background: var(--dark);
            color: white;
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
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 10px;
            width: 300px;
            transition: transform 0.3s;
        }

        .pricing-card:hover {
            transform: translateY(-10px);
        }

        .cta-button {
            background: var(--primary);
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            margin-top: 1rem;
            transition: background 0.3s;
        }

        .cta-button:hover {
            background: var(--secondary);
        }

        .instructor-section {
            padding: 4rem 2rem;
            text-align: center;
        }

        .instructor-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .instructor-card {
            background: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .instructor-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 0 auto 1rem;
        }

        .testimonial-section {
            background: var(--light);
            padding: 4rem 2rem;
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>Master Artificial Intelligence</h1>
        <p>40-Hour Professional Certification Program</p>
        <a href="#pricing" class="cta-button">Enroll Now</a>
    </header>

    <section class="course-highlights">
        <div class="highlight-card">
            <i class="fas fa-certificate fa-3x"></i>
            <h3>Industry-Recognized Certification</h3>
            <p>Globally accepted certification from AI Masters</p>
        </div>
        <div class="highlight-card">
            <i class="fas fa-chalkboard-teacher fa-3x"></i>
            <h3>Expert Instructors</h3>
            <p>Learn from top AI researchers and practitioners</p>
        </div>
        <div class="highlight-card">
            <i class="fas fa-briefcase fa-3x"></i>
            <h3>Career Support</h3>
            <p>Job placement assistance and career guidance</p>
        </div>
    </section>

    <section id="pricing" class="pricing-section">
        <h2>Choose Your Plan</h2>
        <div class="pricing-cards">
            <div class="pricing-card">
                <h3>Monthly Access</h3>
                <div class="price">₹1299/month</div>
                <ul style="list-style: none; margin: 1rem 0;">
                    <li>✔ Full Course Access</li>
                    <li>✔ Weekly Live Sessions</li>
                    <li>✔ Community Support</li>
                </ul>
                <a href="#" class="cta-button">Start Learning</a>
            </div>
            <div class="pricing-card">
                <h3>Annual Access</h3>
                <div class="price">₹1699/year</div>
                <p style="margin: 1rem 0;">Save 35%</p>
                <ul style="list-style: none;">
                    <li>✔ Everything in Monthly</li>
                    <li>✔ Exclusive Workshops</li>
                    <li>✔ 1-on-1 Mentoring</li>
                </ul>
                <a href="#" class="cta-button">Get Premium</a>
            </div>
        </div>
    </section>

    <section class="instructor-section">
        <h2>Meet Your Instructors</h2>
        <div class="instructor-grid">
            <div class="instructor-card">
                <img src="https://example.com/joban-arsh.jpg" alt="Joban Arsh" class="instructor-img">
                <h3>Joban Arsh</h3>
                <p>AI Research Lead</p>
                <p>15+ years experience</p>
            </div>
            <!-- Add other instructors similarly -->
        </div>
    </section>

    <section class="testimonial-section">
        <h2>Student Success Stories</h2>
        <div class="testimonials">
            <!-- Add testimonials here -->
        </div>
    </section>
</body>
</html>

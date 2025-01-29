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
            --bg-dark: #0a0a12;
            --text-dark: #ffffff;
            --card-dark: #1a1a2e;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
            transition: background 0.3s, color 0.3s;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
        }

        body[data-theme="dark"] {
            background-color: var(--bg-dark);
            color: var(--text-dark);
        }

        /* Theme Toggle */
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 1000;
        }

        /* Contributors Section */
        .contributors-section {
            padding: 4rem 2rem;
            text-align: center;
        }

        .contributor-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .contributor-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        body[data-theme="dark"] .contributor-card {
            background: var(--card-dark);
        }

        .contributor-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1rem;
            border: 3px solid var(--primary);
        }

        /* Add previous styles for modals, pricing, etc. */
    </style>
</head>
<body>
    <!-- Theme Toggle -->
    <button class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
        <span>Dark Mode</span>
    </button>

    <!-- Contributors Section -->
    <section class="contributors-section">
        <h2>Core Contributors</h2>
        <div class="contributor-grid">
            <!-- Jadeja Keyur -->
            <div class="contributor-card">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                     alt="Jadeja Keyur" class="contributor-img">
                <h3>Jadeja Keyur</h3>
                <p>AI Architect</p>
                <div class="social-links">
                    <a href="https://instagram.com/keyur.jadeja" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <!-- Raghvani Tushar -->
            <div class="contributor-card">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                     alt="Raghvani Tushar" class="contributor-img">
                <h3>Raghvani Tushar</h3>
                <p>ML Engineer</p>
                <div class="social-links">
                    <a href="https://instagram.com/tushar.raghvani" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <!-- Bhanderi Jayesh -->
            <div class="contributor-card">
                <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                     alt="Bhanderi Jayesh" class="contributor-img">
                <h3>Bhanderi Jayesh</h3>
                <p>Data Scientist</p>
                <div class="social-links">
                    <a href="https://instagram.com/jayesh.bhanderi" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            if(body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Dark Mode</span>';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        if(savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
        }

        // Add previous modal and payment scripts
    </script>
</body>
</html>

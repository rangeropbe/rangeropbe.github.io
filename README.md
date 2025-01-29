<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NeuroAI Academy - Future of Learning</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --neon-blue: #00f3ff;
            --cyber-purple: #bc13fe;
            --matrix-green: #0f0;
        }

        body {
            background: radial-gradient(circle at center, #00081d 0%, #000 100%);
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
            font-family: 'Oxanium', cursive;
        }

        .cyber-border {
            position: relative;
            background: linear-gradient(45deg, 
                transparent 25%,
                var(--neon-blue) 50%,
                transparent 75%);
            background-size: 200% 200%;
            animation: cyberGlow 4s linear infinite;
        }

        .hologram-card {
            perspective: 1000px;
            transform-style: preserve-3d;
            transition: transform 0.5s;
        }

        .hologram-card:hover {
            transform: rotateX(5deg) rotateY(5deg);
        }

        .dna-strand {
            position: fixed;
            top: 0;
            left: 50%;
            width: 4px;
            height: 100vh;
            background: linear-gradient(to bottom, 
                var(--neon-blue),
                var(--cyber-purple),
                var(--neon-blue));
            box-shadow: 0 0 40px var(--neon-blue);
            animation: dnaFlow 8s linear infinite;
            z-index: -1;
        }

        .neuro-button {
            background: none;
            border: 2px solid var(--neon-blue);
            padding: 15px 30px;
            color: var(--neon-blue);
            font-size: 1.2em;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: 0.3s;
        }

        .neuro-button::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, 
                transparent 25%,
                var(--neon-blue) 50%,
                transparent 75%);
            animation: cyberGlow 3s linear infinite;
        }

        @keyframes cyberGlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }

        @keyframes dnaFlow {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .cyber-terminal {
            background: rgba(0,0,0,0.9);
            border: 2px solid var(--matrix-green);
            padding: 2rem;
            font-family: 'Courier New', monospace;
            position: relative;
        }

        .terminal-text {
            color: var(--matrix-green);
            text-shadow: 0 0 10px var(--matrix-green);
        }

        .particle-network {
            position: fixed;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
        }

        /* Add remaining styles from previous versions */
    </style>
</head>
<body>
    <div class="dna-strand"></div>
    <div class="particle-network"></div>

    <!-- Cyber Terminal Enrollment -->
    <div class="cyber-terminal" id="enrollmentTerminal">
        <div class="terminal-text">
            > INITIALIZING NEUROAI ENROLLMENT SYSTEM...
            <br>
            > SELECT INPUT METHOD:
            <br>
            [1] CRYPTOCARD PAYMENT
            <br>
            [2] NEURAL LINK VERIFICATION
            <br>
            [3] BLOCKCHAIN CREDENTIALS
        </div>
        <div class="neuro-input">
            <span class="blinking-cursor">_</span>
            <input type="text" id="cyberInput" autocomplete="off">
        </div>
    </div>

    <!-- Holographic Team Display -->
    <div class="hologram-grid">
        <div class="hologram-card">
            <div class="cyber-border"></div>
            <img src="https://media.discordapp.net/attachments/1328338436226285589/1334229217482641458/296fe121-5dfa-43f4-98b5-db50019738a7.jpg" 
                 alt="Joban Arsh" class="hologram-avatar">
            <div class="cyber-data">
                <h3 class="neon-text">JOBAN ARSH</h3>
                <p class="cyber-title">CHIEF NEURAL ARCHITECT</p>
                <div class="skill-bars">
                    <div class="skill" data-skill="AI Development" data-level="98%"></div>
                    <div class="skill" data-skill="Neuro-Links" data-level="95%"></div>
                </div>
            </div>
        </div>
        <!-- Add other team members -->
    </div>

    <!-- Quantum Social Interface -->
    <div class="quantum-social">
        <div class="qbit qbit-instagram" data-platform="instagram">
            <div class="qbit-core"></div>
        </div>
        <div class="qbit qbit-whatsapp" data-platform="whatsapp">
            <div class="qbit-core"></div>
        </div>
        <div class="qbit qbit-facebook" data-platform="facebook">
            <div class="qbit-core"></div>
        </div>
    </div>

    <!-- Neural Payment Gateway -->
    <div class="neural-payment" id="paymentGateway">
        <div class="synapse-connection"></div>
        <div class="neuron-node" data-node="input"></div>
        <div class="neuron-node" data-node="processor"></div>
        <div class="neuron-node" data-node="output"></div>
    </div>

    <script>
        // Quantum Social Interaction
        document.querySelectorAll('.qbit').forEach(qbit => {
            qbit.addEventListener('click', () => {
                const platform = qbit.dataset.platform;
                const urls = {
                    instagram: 'https://instagram.com/aimasterycourse',
                    whatsapp: 'https://wa.me/917284920412',
                    facebook: 'https://facebook.com/aimasterycourse'
                };
                window.open(urls[platform], '_blank');
                
                // Create quantum entanglement effect
                qbit.style.transform = `scale(5)`;
                setTimeout(() => {
                    qbit.style.transform = 'scale(1)';
                }, 500);
            });
        });

        // Neural Payment Animation
        const animatePayment = () => {
            const nodes = document.querySelectorAll('.neuron-node');
            nodes.forEach((node, index) => {
                setTimeout(() => {
                    node.style.background = `radial-gradient(circle, 
                        ${index === 1 ? '#00f3ff' : '#bc13fe'}, 
                        transparent)`;
                }, index * 300);
            });
        };

        // Cyber Terminal Interaction
        document.getElementById('cyberInput').addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                const input = e.target.value;
                // Process cyber commands
                if(input === '1') animatePayment();
                if(input === '2') showNeuralScan();
                if(input === '3') showBlockchainInterface();
                e.target.value = '';
            }
        });

        // Add particle network animation
        // Add remaining interactive functions
    </script>
</body>
</html>

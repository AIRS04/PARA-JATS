 const container = document.getElementById('container');
        const counter = document.getElementById('counter');
        const popSound = document.getElementById('pop-sound');
        let clickCount = 0;

        function createHeart(x, y, text) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            
            const heartText = document.createElement('div');
            heartText.className = 'heart-text';
            heartText.textContent = text;
            
            heart.appendChild(heartText);
            container.appendChild(heart);
            
            heart.addEventListener('click', multiplyHeart);
            
            const floatDuration = 3 + Math.random() * 2;
            const floatDelay = Math.random() * 2;
            heart.style.animation = `float ${floatDuration}s ease-in-out ${floatDelay}s infinite`;
        }

        function multiplyHeart(event) {
            event.stopPropagation();
            clickCount++;
            counter.textContent = `Clicks: ${clickCount}`;

            popSound.currentTime = 0;
            popSound.play();

            if (clickCount === 5) {
                alert("AMOR,SIEMPRE JUNTOS");
                return;
            }

            const rect = event.target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 2; i++) {
                const offsetX = (Math.random() - 0.5) * 200; // Ajustado para que no se salgan de la pantalla
                const offsetY = (Math.random() - 0.5) * 200; // Ajustado para que no se salgan de la pantalla
                const text = clickCount >= 4 ? "Feliz Aniversario" : "Te amo";
                createHeart(centerX + offsetX, centerY + offsetY, text);
            }
        }

        // Crear el corazón inicial
        createHeart(window.innerWidth / 2 - 25, window.innerHeight / 2 - 25, "Te amo");

        // Evento para crear corazones al hacer clic en cualquier parte
        document.addEventListener('click', (event) => {
            if (event.target === document.body) {
                createHeart(event.clientX - 25, event.clientY - 25, clickCount >= 4 ? "Feliz Aniversario" : "Te amo");
            }
        });
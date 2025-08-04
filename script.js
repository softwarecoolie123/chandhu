// Global variables
let typingText = '';
let currentSection = 0;
const messages = [
    "Hello hello...",
    "I have something special for you...",
    "Something that will make you smile...",
    "Something filled with love...",
    "Something just for your birthday... 💖"
];

// Photo gallery configuration
const photoGallery = {
    1: { title: "(' ')", description: "A beautiful moment" },
    2: { title: "(' ')", description: "Captured on record" },
    3: { title: "(' ')", description: "which is adorable!" }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCoverPage();
    initializeFloatingHearts();
    initializeEventListeners();
});

// Cover page functionality
function initializeCoverPage() {
    // Update system time
    updateSystemTime();
    setInterval(updateSystemTime, 1000);
    
    // Simulate gentle system scan
    simulateGentleScan();
}

function playVideoModal(videoUrl) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
        <video width="100%" controls autoplay>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    modal.style.display = "block";
}

// Close modal when clicking the (×) close button
document.querySelector(".modal .close").onclick = function () {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-body").innerHTML = "";
};


function updateSystemTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('system-time').textContent = timeString;
}

function simulateGentleScan() {
    const statusTexts = [
        "Preparing something special...",
        "Gathering beautiful memories...",
        "Creating magical moments...",
        "Wrapping love and joy...",
        "Almost ready for you..."
    ];
    
    let index = 0;
    const statusElement = document.querySelector('.status-text');
    
    setInterval(() => {
        statusElement.textContent = statusTexts[index];
        index = (index + 1) % statusTexts.length;
    }, 2500);
}

function showGentleMessage() {
    alert('💕 Take your time, beautiful. The surprise will be here when you\'re ready... 💕');
}

function proceedToBirthday() {
    const coverPage = document.getElementById('cover-page');
    const mainWebsite = document.getElementById('main-website');
    
    // Gentle fade out
    coverPage.style.opacity = '0';
    setTimeout(() => {
        coverPage.style.display = 'none';
        mainWebsite.classList.remove('hidden');
        startLoadingSequence();
    }, 800);
}

// Floating hearts background
function initializeFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 2000);
    
    // Initial hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 500);
    }
}

// Loading sequence
function startLoadingSequence() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Simulate gentle loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            startTypingAnimation();
            createGentleConfetti();
            showFirstSection();
        }, 800);
    }, 4000);
}

// Typing animation
function startTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    let messageIndex = 0;
    
    function typeMessage() {
        const currentMessage = messages[messageIndex];
        let charIndex = 0;
        typingText = '';
        
        function typeChar() {
            if (charIndex < currentMessage.length) {
                typingText += currentMessage.charAt(charIndex);
                typingElement.textContent = typingText;
                charIndex++;
                setTimeout(typeChar, 120);
            } else {
                // Wait before starting next message
                setTimeout(() => {
                    messageIndex = (messageIndex + 1) % messages.length;
                    typeMessage();
                }, 3000);
            }
        }
        
        typeChar();
    }
    
    typeMessage();
}

// Section reveal functionality
function showFirstSection() {
    setTimeout(() => {
        document.querySelector('.birthday-reveal-section').classList.add('visible');
    }, 1000);
}

function revealNext() {
    const sections = [
        '.message-section',
        '.gallery-section', 
        '.video-section',
        '.surprises-section',
        '.final-section'
    ];
    
    console.log('Current section:', currentSection, 'Total sections:', sections.length);
    
    if (currentSection < sections.length) {
        const nextSection = document.querySelector(sections[currentSection]);
        if (nextSection) {
            console.log('Revealing section:', sections[currentSection]);
            nextSection.classList.add('visible');
            currentSection++;
            
            // Gentle scroll to new section
            setTimeout(() => {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 500);
            
            // Create gentle confetti
            createGentleConfetti();
            
            // Special celebration for final section with signature
            if (currentSection === sections.length) {
                console.log('Final section reached! Signature should appear soon...');
                setTimeout(() => {
                    createSpecialSignatureConfetti();
                    showSignatureMessage();
                }, 1000);
            }
        } else {
            console.log('Section not found:', sections[currentSection]);
        }
    }
}

// Special confetti for signature
function createSpecialSignatureConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff69b4', '#ffb6c1', '#87ceeb', '#dda0dd', '#98fb98'];
    
    // Create more confetti for signature celebration
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 4) + 's';
            confetti.style.width = '12px';
            confetti.style.height = '12px';
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 8000);
        }, i * 100);
    }
}

// Show special message for signature
function showSignatureMessage() {
    setTimeout(() => {
        const signature = document.querySelector('.signature');
        if (signature) {
            signature.style.animation = 'signature-appear 1s ease-out';
            console.log('Signature animation applied!');
        } else {
            console.log('Signature element not found!');
        }
    }, 500);
}

// Initialize event listeners
function initializeEventListeners() {
    // Photo gallery events
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const photoId = this.getAttribute('data-photo');
            showPhotoModal(photoId);
        });
    });
    
    // Surprise items events
    const surpriseItems = document.querySelectorAll('.surprise-item');
    surpriseItems.forEach(item => {
        item.addEventListener('click', function() {
            const surpriseId = this.getAttribute('data-surprise');
            showSurpriseModal(surpriseId);
        });
    });
    
    // Modal close events
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Add keyboard support
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        }
    });
}

// Show photo modal
function showPhotoModal(photoId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const photo = photoGallery[photoId];
    const photoPath = `images/photo${photoId}.jpg`; // Add photos to images folder
    
    const content = `
        <div style="text-align: center;">
            <h2 style="color: #ff69b4; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem;">
                <i class="fas fa-heart"></i> ${photo.title}
            </h2>
            <div style="background: linear-gradient(135deg, #ffb6c1, #87ceeb); padding: 40px; border-radius: 20px; margin: 20px 0; color: white;">
                <img src="${photoPath}" alt="${photo.title}" style="width: 100%; max-width: 400px; height: auto; border-radius: 15px; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; text-align: center;">
                    <i class="fas fa-image" style="font-size: 4rem; margin-bottom: 20px;"></i>
                    <p style="font-size: 1.3rem; margin-bottom: 20px;">Add photo${photoId}.jpg to the images folder</p>
                </div>
                <p style="font-size: 1.2rem; margin-bottom: 15px;">${photo.description}</p>
                <p style="color: rgba(255,255,255,0.9); font-style: italic;">A beautiful memory we shared together 💕</p>
            </div>
        </div>
    `;
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    createGentleConfetti();
}

// Show surprise modal
function showSurpriseModal(surpriseId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    switch(surpriseId) {
        case '1':
            content = `
                <div style="text-align: center;">
                    <h2 style="color: #ff69b4; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem;">
                        <i class="fas fa-heart"></i> Special Message
                    </h2>
                    <div style="background: linear-gradient(135deg, #ffb6c1, #87ceeb); padding: 30px; border-radius: 20px; margin: 20px 0; color: white;">
                        <p style="font-size: 1.2rem; margin-bottom: 15px;">💕 You are absolutely amazing! 💕</p>
                        <p style="margin-bottom: 15px;">Your smile brightens my day, your laughter is contagious, and your presence makes everything better.</p>
                        <p style="font-weight: bold;">You deserve all the love and happiness in the world! 🌟</p>
                    </div>
                </div>
            `;
            break;
            
        case '2':
            content = `
                <div style="text-align: center;">
                    <h2 style="color: #87ceeb; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem;">
                        <i class="fas fa-star"></i> Birthday Wishes
                    </h2>
                    <div style="background: linear-gradient(135deg, #87ceeb, #ffb6c1); padding: 30px; border-radius: 20px; margin: 20px 0; color: white;">
                        <p style="font-size: 1.2rem; margin-bottom: 15px;">✨ May your birthday be filled with: ✨</p>
                        <ul style="list-style: none; padding: 0; text-align: left;">
                            <li style="margin: 10px 0; padding: 8px; background: rgba(255,255,255,0.2); border-radius: 10px;">💖 Endless love and joy</li>
                            <li style="margin: 10px 0; padding: 8px; background: rgba(255,255,255,0.2); border-radius: 10px;">🌟 Beautiful surprises</li>
                            <li style="margin: 10px 0; padding: 8px; background: rgba(255,255,255,0.2); border-radius: 10px;">🎂 Delicious cake and treats</li>
                            <li style="margin: 10px 0; padding: 8px; background: rgba(255,255,255,0.2); border-radius: 10px;">😊 Countless reasons to smile</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
            
        case '3':
            content = `
                <div style="text-align: center;">
                    <h2 style="color: #ffb6c1; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem;">
                        <i class="fas fa-rose"></i> Fun Facts About You
                    </h2>
                    <div style="background: linear-gradient(135deg, #ffb6c1, #87ceeb); padding: 30px; border-radius: 20px; margin: 20px 0; color: white;">
                        <p style="font-size: 1.2rem; margin-bottom: 15px;">🌸 Did you know? 🌸</p>
                        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px; margin: 15px 0;">
                            <h3 style="color: #ff69b4;">You're Magical!</h3>
                            <p>You have the power to make anyone's day better with just your presence! ✨</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px; margin: 15px 0;">
                            <h3 style="color: #87ceeb;">You're Unique!</h3>
                            <p>There's no one else quite like you in the entire universe! 🌍</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px; margin: 15px 0;">
                            <h3 style="color: #ffb6c1;">You're Loved!</h3>
                            <p>You are surrounded by people who care about you deeply! 💕</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case '4':
            content = `
                <div style="text-align: center;">
                    <h2 style="color: #ff69b4; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem;">
                        <i class="fas fa-seedling"></i> This is for you...
                    </h2>
                    
                        <p style="font-size: 1.3rem; margin-bottom: 15px; font-family: 'Dancing Script', cursive;">🌸 A beautiful flower just for you 🌸</p>
                        <p style="margin-bottom: 15px;">Like this flower, you bring beauty and joy to everyone around you. You deserve all the love and happiness in the world!</p>
                        <p style="font-weight: bold; color: #ff69b4;">You are absolutely precious! 💕</p>
                    </div>
                </div>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    createGentleConfetti();
}

// Create gentle confetti effect
function createGentleConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ffb6c1', '#87ceeb', '#ff69b4', '#dda0dd', '#98fb98'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }, i * 150);
    }
}

// Play birthday song (gentle)
function playBirthdaySong() {
    // Create a gentle audio context for soft sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const notes = [
        { frequency: 523.25, duration: 600 }, // C
        { frequency: 523.25, duration: 600 }, // C
        { frequency: 587.33, duration: 1200 }, // D
        { frequency: 523.25, duration: 1200 }, // C
        { frequency: 659.25, duration: 1200 }, // E
        { frequency: 523.25, duration: 1200 }, // C
        { frequency: 523.25, duration: 600 }, // C
        { frequency: 523.25, duration: 600 }, // C
        { frequency: 587.33, duration: 1200 }, // D
        { frequency: 523.25, duration: 1200 }, // C
        { frequency: 698.46, duration: 1200 }, // F
        { frequency: 659.25, duration: 1200 }, // E
    ];
    
    let currentTime = 0;
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note.frequency, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.duration / 1000);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + note.duration / 1000);
        }, currentTime);
        
        currentTime += note.duration;
    });
    
    // Create extra gentle confetti for the song
    setTimeout(() => {
        createGentleConfetti();
    }, 1000);
}

// Add some gentle interactive effects
document.addEventListener('mousemove', function(event) {
    // Create gentle sparkles on mouse move
    if (Math.random() < 0.1) {
        createSparkle(event.clientX, event.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = '#ffb6c1';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add some gentle Easter eggs
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 15) {
        alert('💕 You found a secret! You\'re absolutely wonderful! 💕');
        createGentleConfetti();
        clickCount = 0;
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('💖 Happy Birthday, beautiful! 💖');
        createGentleConfetti();
    }
    
    // Quick jump to final section for testing (Ctrl + F)
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        console.log('Quick jumping to final section...');
        currentSection = 4; // Jump to final section
        const finalSection = document.querySelector('.final-section');
        if (finalSection) {
            finalSection.classList.add('visible');
            finalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            createSpecialSignatureConfetti();
            showSignatureMessage();
        }
    }
});



// Add some gentle console messages
console.log('%c💕 Happy Birthday! 💕', 'color: #ff69b4; font-size: 20px; font-weight: bold;');
console.log('%cThis website was built with love for a special person!', 'color: #87ceeb; font-size: 14px;');
console.log('%cMay your day be filled with joy and beautiful moments! 🌸', 'color: #ffb6c1; font-size: 12px;');
console.log('%cTo test signature, click the "Test Signature Animation" button or reach the final section.', 'color: #ff69b4; font-size: 12px;'); 
document.addEventListener('DOMContentLoaded', function () {
    var myButton = document.getElementById('myButton');
    var darkModeButton = document.getElementById('darkModeButton');
    var aboutButton = document.getElementById('aboutButton');
    var loginButton = document.getElementById('loginButton');
    var confettiContainer = document.getElementById('confetti-container');
    var aboutSection = document.getElementById('aboutSection');
    var loginSection = document.getElementById('loginSection');

    var colors = [
        '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080', '#008000', '#808080',
        '#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff', '#ffcc99', '#cc99ff', '#99ccff', '#cccccc',
        '#ff6666', '#66ff66', '#6666ff', '#ffff66', '#ff66ff', '#66ffff', '#ff9966', '#9966ff', '#66ccff', '#ccccff',
        '#ff3333', '#33ff33', '#3333ff', '#ffff33', '#ff33ff', '#33ffff', '#ff6633', '#6633ff', '#33ccff', '#cc99cc',
        '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080', '#008000', '#808080'
    ];

    myButton.addEventListener('click', function () {
        createConfetti();
    });

    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    aboutButton.addEventListener('click', function () {
        toggleSection(aboutSection);
    });

    loginButton.addEventListener('click', function () {
        toggleSection(loginSection);
        loginSection.classList.toggle('login-done');
    });

    function createConfetti() {
        for (var i = 0; i < 50; i++) {
            var confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confettiContainer.appendChild(confetti);
        }
    }

    function toggleSection(section) {
        section.classList.toggle('hidden');
    }
});

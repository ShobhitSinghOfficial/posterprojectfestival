function changeColors() {
    const colors = ['orange', 'yellow', 'red', 'goldenrod'];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}

setInterval(changeColors, 2000);

function updateCountdown() {
    const eventDate = new Date('October 20, 2025 18:00:00').getTime(); // Diwali date
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
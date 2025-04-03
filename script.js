document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

function updateCountdown() {
    const weddingDate = new Date("June 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
        "timer"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "The big day is here!";
    }
}

function drawClock() {
    const canvas = document.getElementById("clock");
    const ctx = canvas.getContext("2d");
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenează cercul ceasului
    ctx.beginPath();
    ctx.arc(75, 75, 70, 0, 2 * Math.PI);
    ctx.stroke();

    // Funcție pentru a desena limbile ceasului
    function drawHand(length, angle, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.moveTo(75, 75);
        ctx.lineTo(75 + length * Math.cos(angle), 75 + length * Math.sin(angle));
        ctx.stroke();
    }

    // Calculează și desenează limbile ceasului
    const secAngle = (seconds * 6 - 90) * (Math.PI / 180);
    drawHand(60, secAngle, 2);

    const minAngle = (minutes * 6 - 90) * (Math.PI / 180);
    drawHand(50, minAngle, 4);

    const hourAngle = (hours * 30 + minutes / 2 - 90) * (Math.PI / 180);
    drawHand(40, hourAngle, 6);
}

// Setează update-ul automat la fiecare secundă
setInterval(updateCountdown, 1000);
setInterval(drawClock, 1000);

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 400);

// Cherry Blossom Petals
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (15 + Math.random() * 15) + "px";
    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);
}

setInterval(createPetal, 500);

// Start Button
document.getElementById("startBtn").addEventListener("click", () => {

    const card = document.querySelector(".glass");

    card.style.transition = "0.8s";
    card.style.transform = "scale(0)";
    card.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 800);

});
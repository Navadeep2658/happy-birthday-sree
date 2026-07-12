function nextPage() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("letter").style.display = "block";

    // 🎉 Confetti effect
    for (let i = 0; i < 120; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = ["💜", "💖", "🌸", "✨"][Math.floor(Math.random() * 4)];
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (16 + Math.random() * 18) + "px";
        heart.style.animation = `fall ${3 + Math.random() * 3}s linear forwards`;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }
}

// Create falling animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

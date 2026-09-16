const openButton = document.getElementById("open");
const startScreen = document.getElementById("start");
const birthdayScreen = document.getElementById("birthday");

openButton.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    birthdayScreen.classList.remove("hidden");
    birthdayScreen.classList.add("show");

    createConfetti();

    // Вибрация телефона, если поддерживается
    if (navigator.vibrate) {
        navigator.vibrate([80, 50, 80, 50, 180]);
    }

});


function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "⭐",
        "🥳",
        "🎈"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (12 + Math.random() * 18) + "px";

        confetti.style.animationDuration =
            (2.5 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.setProperty(
            "--x",
            (-100 + Math.random() * 200) + "px"
        );

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);

    }

}


const loading = document.getElementById("loading");
const birthday = document.getElementById("birthday");

const status = document.getElementById("status");
const sub = document.getElementById("sub");


// Небольшая вступительная анимация

setTimeout(() => {

    status.textContent = "Готовлю поздравление...";
    sub.textContent = "Ещё секундочку ✨";

}, 1200);


setTimeout(() => {

    status.textContent = "Почти готово...";
    sub.textContent = "🎂";

}, 2400);


setTimeout(() => {

    loading.classList.add("hidden");

    birthday.classList.remove("hidden");

    fireworks();

    if (navigator.vibrate) {

        navigator.vibrate([
            80,
            50,
            80,
            50,
            200
        ]);

    }

}, 3500);


// Конфетти

function fireworks() {

    const emojis = [
        "🎉",
        "🎊",
        "✨",
        "⭐",
        "🥳",
        "🎈",
        "💫",
        "🎂"
    ];

    for (let i = 100; i--;) {

        const el =
            document.createElement("div");

        el.className =
            "confetti";

        el.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        el.style.left =
            Math.random() * 100 + "vw";

        el.style.setProperty(
            "--x",
            (-150 +
                Math.random() * 300) +
            "px"
        );

        el.style.animationDuration =
            (2.5 +
                Math.random() * 3) +
            "s";

        el.style.animationDelay =
            Math.random() * .8 + "s";

        document.body.appendChild(el);

        setTimeout(() => {

            el.remove();

        }, 6000);

    }

}

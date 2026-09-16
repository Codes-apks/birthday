const loading = document.getElementById("loading");
const birthday = document.getElementById("birthday");
const status = document.getElementById("status");
const sub = document.getElementById("sub");


setTimeout(() => {

    status.textContent = "Проверка получателя...";
    sub.textContent = "Поиск именинника";

}, 1000);


setTimeout(() => {

    status.textContent = "✓ Получатель найден";
    sub.textContent = "Сообщение подготовлено";

}, 2000);


setTimeout(() => {

    status.textContent = "3";
    sub.textContent = "";

}, 2800);


setTimeout(() => {

    status.textContent = "2";

}, 3500);


setTimeout(() => {

    status.textContent = "1";

}, 4200);


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
            250
        ]);

    }

}, 4900);


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

    for (let i = 0; i < 100; i++) {

        const el =
            document.createElement("div");

        el.className = "confetti";

        el.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        el.style.left =
            Math.random() * 100 + "vw";

        el.style.setProperty(
            "--x",
            (-150 + Math.random() * 300) + "px"
        );

        el.style.animationDuration =
            (2.5 + Math.random() * 3) + "s";

        el.style.animationDelay =
            Math.random() * .8 + "s";

        document.body.appendChild(el);

        setTimeout(() => {

            el.remove();

        }, 6000);

    }

}

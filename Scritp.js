const birthday = document.getElementById("birthday");
const intro = document.getElementById("intro");
const starsContainer = document.getElementById("stars");

let revealed = false;

function createStars() {
    const numberOfStars = 100;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 75 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.setProperty(
            "--time",
            Math.random() * 3 + 2 + "s"
        );

        star.style.animationDelay =
            Math.random() * 4 + "s";

        starsContainer.appendChild(star);
    }
}

createStars();

/* ==============================
   MOSTRAR ESCENA
============================== */

function revealScene() {

    if (revealed) return;

    revealed = true;

    birthday.classList.add("reveal");
}

/* CLICK */

intro.addEventListener("click", revealScene);

/* SCROLL DEL MOUSE */

window.addEventListener(
    "wheel",
    function () {
        revealScene();
    },
    { passive: true }
);

/* SCROLL NORMAL */

window.addEventListener(
    "scroll",
    function () {
        revealScene();
    },
    { passive: true }
);

/* SOPORTE CELULAR */

let touchStart = 0;

window.addEventListener(
    "touchstart",
    function (event) {

        touchStart =
            event.touches[0].clientY;
    },
    { passive: true }
);

window.addEventListener(
    "touchmove",
    function (event) {

        const touchCurrent =
            event.touches[0].clientY;

        if (
            Math.abs(
                touchCurrent - touchStart
            ) > 25
        ) {
            revealScene();
        }
    },
    { passive: true }
);
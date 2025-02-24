const imagens = document.querySelectorAll(".foto");

function mexer_image(event) {
    const elementoAtual = event.currentTarget;
    if (elementoAtual.classList.contains("rotate-center")) {
    } else {
        elementoAtual.classList.add("rotate-center");
        setTimeout(() => {
            elementoAtual.classList.remove("rotate-center");
        }, 1000);
    }
}

imagens.forEach((element) => {
    element.addEventListener("click", mexer_image);
});
const botaoMenu = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll("#menu a");

const botoesReserva = document.querySelectorAll(".reservar");
const mensagem = document.querySelector("#mensagem");

const formulario = document.querySelector("#form-contato");
const mensagemForm = document.querySelector("#mensagem-form");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

links.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });
});

botoesReserva.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const suite = botao.dataset.suite;

        mensagem.value =
            "Olá! Gostaria de reservar a " + suite + ".";
    });
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const texto = document.querySelector("#mensagem").value;

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        texto === ""
    ) {
        mensagemForm.textContent =
            "Preencha todos os campos.";

        return;
    }

    mensagemForm.textContent =
        "Obrigado, " + nome + "! Mensagem enviada com sucesso.";

    formulario.reset();
});
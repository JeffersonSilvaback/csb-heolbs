function revelarResposta() {
  var resposta = document.querySelector("#cardResposta");
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML = "";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__rubberBand");

  cardDiv.innerHTML = `
  <div class="box2-cabeça centralizar">
  <h1 class="principal-logo2 centralizar">O que é ${proximaPergunta.title}?</h1>
</div>

<div>
<p id="cardResposta" class="principal-descrição2 blur">
${proximaPergunta.description}
</p>
</div>
`;
  pergunta.appendChild(cardDiv);
}
function buscarInformaçao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJason) {
      proximaPergunta(resultadoJason);
    });
}

window.addEventListener("load", buscarInformaçao);

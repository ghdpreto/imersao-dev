const input = document.querySelector("#input");
const btnConverte = document.querySelector("#btnConverte");
const resultHtml = document.querySelector("#result");
const btnClear = document.querySelector("#btnClear");
const valorDollar = 5.7733;

btnConverte.addEventListener("click", () => {
  let valor = parseFloat(input.value).toFixed(2);

  console.log(realToDollar(valor));
  realToDollar(valor);
});

btnClear.addEventListener("click", () => clear());

function realToDollar(real) {
  let valueDollar = parseFloat(real * valorDollar).toFixed(2);

  let valueFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valueDollar);

  let renderHtml = `
    <h1>Valor convertido</h1>
    <p>${valueFormatter}</p>
  `;
  resultHtml.innerHTML = renderHtml;
}

function clear() {
  resultHtml.innerHTML = "";
  input.value = "";
}

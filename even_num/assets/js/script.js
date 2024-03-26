let Multiply = document.getElementById("btnMultiply");

Multiply.addEventListener("click", function () {
  let RowLimit = document.getElementById("RowLimit").value;
  let ColLimit = document.getElementById("ColLimit").value;

  const array = Array(parseFloat(RowLimit))
    .fill(parseFloat(ColLimit))
    .map((n, i) => n + i);

  let evenNumbers = array.filter(function (element) {
    return element % 2 === 0;
  });
  document.getElementById("evennum").innerText = evenNumbers;
  //   console.log(evenNumbers);
});

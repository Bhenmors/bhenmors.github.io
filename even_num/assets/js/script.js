let Multiply = document.getElementById("btnMultiply");

Multiply.addEventListener("click", function () {
  let RowLimit = document.getElementById("RowLimit").value;

  const array = Array(parseFloat(RowLimit))
    .fill(1)
    .map((n, i) => n + i);

  let evenNumbers = array.filter(function (element) {
    return element % 2 === 0;
  });
  console.log(evenNumbers);
});

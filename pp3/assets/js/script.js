// $("#myCarousel").carousel({
//   interval: 5000,
// });
ProductsList();
let CartItems = [];

function ProductsList() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let divs = "";
        let result = JSON.parse(xhr.responseText);

        for (const product in result) {
          let x = result[product].id;
          divs +=
            ` 
            <div class="col-sm-3">
                      <div class="card collection-container">
                      <img src="${result[product].photo}" class="w-100 container-image" alt="...">
                      <div class="middle">
                      <div class="text"><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='add(` +
            x +
            `)'>Add to cart</button></div>
                      </div>
                      <div class="carousel-descritpion mt-3">
                          <h5> ${result[product].name}</h5>
                          <p>₱${result[product].Price}</p>
                      </div>
                      </div>
              </div>
                        `;
        }

        document.querySelector("#div-gallery").innerHTML = divs;
      } else {
        alert("failed to fetch data");
      }
    }
  };
  xhr.open("GET", "assets/file/products.json", true);
  xhr.send();
}
// add to cart
function add(index) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let result = JSON.parse(xhr.responseText);

        let x = 0;
        let Found = false;
        console.log(CartItems);
        while (x < CartItems.length) {
          if (CartItems[x].id == index) {
            Found = true;
            break;
          }
          x++;
        }

        if (Found) {
          CartItems[x].qtys = !CartItems[x].qtys
            ? 1
            : parseInt(CartItems[x].qtys) + 1;
        } else {
          CartItems.push(result[index]);
          CartItems[CartItems.length - 1].qtys = 1;
        }

        DrawTable();
        document.querySelector("#spn-badge").textContent = CartItems.length;
      } else {
        alert("failed to fetch data");
      }
    }
  };
  xhr.open("GET", "assets/file/products.json", true);
  xhr.send();
}

function DrawTable() {
  if (CartItems.length > 0) {
    let sum = 0;
    let TableBody =
      "<table class='table table-striped'><thead><tr><th class='modal-th-2'></th><th class='modal-th-4'>Product</th><th class='modal-th-3'>Amount</th><th class='modal-th-4'>Quantity</th><th class='modal-th-4'>Price</th></tr></thead><tbody>";
    for (let x = 0; x < CartItems.length; x++) {
      sum += parseInt(CartItems[x].qtys) * parseInt(CartItems[x].Price);
      TableBody += "<tr>";

      TableBody +=
        "<td><img class='rounded-circle' style='width: 100px; height: 100px;' src='" +
        CartItems[x].photo +
        "'></td>";

      TableBody += "<td>" + CartItems[x].name + "</td>";
      TableBody += "<td>" + CartItems[x].Price + "</td>";
      TableBody +=
        "<td><button class='qty-button' onclick='minus(" +
        x +
        ");'>-</button>" +
        " " +
        CartItems[x].qtys +
        " " +
        "<button class='qty-button' onclick='plus(" +
        x +
        ");'>+</button></td>";
      TableBody +=
        "<td>" +
        (
          parseFloat(CartItems[x].qtys) * parseFloat(CartItems[x].Price)
        ).toFixed(2) +
        "</td>";
      TableBody += "</tr>";
    }
    TableBody +=
      "<tr><td></td><td></td><td></td><td>Total Price :</td><td><b>" +
      sum +
      "</b></td></tr></tbody></table>";

    document.getElementById("modal-contents").innerHTML = TableBody;
  } else
    document.getElementById("modal-contents").innerHTML =
      "<h4 class='text-center'>Your Cart is Empty</h4>";
}

function minus(index) {
  let Qtys = CartItems[index].qtys;

  if (Qtys > 1) CartItems[index].qtys = parseInt(CartItems[index].qtys) - 1;
  else CartItems.splice(index, 1);

  DrawTable();
  document.querySelector("#spn-badge").textContent = CartItems.length;
}

function plus(index) {
  CartItems[index].qtys = parseInt(CartItems[index].qtys) + 1;
  DrawTable();
}

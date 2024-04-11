ProductsList();
let ProductList = [];
let CartItems = [];
let suggestions = [];
const searchInput = document.querySelector(".searchInput");
const resultBox = searchInput.querySelector(".resultBox");

// Draw cards for products
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
                      <div class="text"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ProductModal" onclick='view(` +
            x +
            `)'>View Product</button></div>
                      <div class="text"><button type="button" class="btn btn-warning mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='add(` +
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
          ProductList.push(result[x]);
          suggestions.push(result[product].name);
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

//view Product

function view(index) {
  let modalbody = "";
  modalbody += `<div class="container d-flex flex-column flex-lg-row justify-content-between gap-class align-self-stretc p-3">`;
  modalbody +=
    '<div class="col-lg-5"> <img src=' +
    ProductList[index].photo +
    ' class="w-100 container-image" alt="..."></div>';
  modalbody +=
    '<div class="col-lg-6"><div><h4>' +
    ProductList[index].name +
    '</h4><img class="w-25" src="assets/img/stars.png">';
  modalbody += "<h3> ₱" + ProductList[index].Price + "</h3>";
  modalbody +=
    `<div class="mt-3"><button type="button" class="btn btn-warning mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='add(` +
    index +
    `)'>Add to cart</button></div>`;
  modalbody +=
    '</div><div class="mt-3"><h6>Product Details</h6><p>' +
    ProductList[index].productdetails +
    "</p></div></div></div>";
  document.getElementById("modal-view").innerHTML = modalbody;
}
// add to cart

function add(index) {
  let x = 0;
  let Found = false;
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
    CartItems.push(ProductList[index]);
    CartItems[CartItems.length - 1].qtys = 1;
  }

  DrawTable();
  document.querySelector("#spn-badge").textContent = CartItems.length;
}

//cart draw table contents

function DrawTable() {
  if (CartItems.length > 0) {
    let sum = 0;
    let TableBody =
      "<table class='table table-striped'><thead><tr><th class='modal-th-2'></th><th class='modal-th-4'>Product</th><th class='modal-th-3'>Amount</th><th class='modal-th-4'>Quantity</th><th class='modal-th-4'>Price</th></tr></thead><tbody>";
    for (let x = 0; x < CartItems.length; x++) {
      sum += parseInt(CartItems[x].qtys) * parseInt(CartItems[x].Price);
      TableBody += "<tr>";

      TableBody +=
        "<td><img class='rounded-circle cart-photo' style='width: 100px; height: 100px;' src='" +
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

//cart qty selector

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

//search bar suggestion

document.querySelector("#txt-search").addEventListener("keyup", function () {
  let userData = this.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = "<li>" + data + "</li>");
    });
    searchInput.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = resultBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].classList.add("list" + i);
      allList[i].setAttribute("onclick", "selection(" + i + ")");
    }
  } else {
    searchInput.classList.remove("active"); //hide autocomplete box
  }
});

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  document.getElementById("resultBox").innerHTML = listData;
}

function selection(num) {
  document.getElementById("txt-search").value = document.querySelector(
    ".list" + num
  ).innerHTML;
  searchInput.classList.remove("active");
}

let Items = [];

document.getElementById("btn-add").addEventListener("click", function () {
  let itemIndex = document.getElementById("txtIndex").value;

  let SKU = document.getElementById("txtSKU").value;
  let itemName = document.getElementById("txtitemName").value;
  let itemPrice = document.getElementById("txtitemPrice").value;
  let photo = document.getElementById("photo").value;

  if (itemIndex == "") {
    if (SKU == "" || itemName == "" || itemPrice == "" || photo == "") {
      alert("Please fill in the required fields!");
      return;
    }

    if (isExists(SKU) == false) {
      alert("Id Number already exists");
      return;
    }

    let ObjItem = {
      itemSKU: SKU,
      itemName: itemName,
      itemPhoto: photo,
      itemPrice: itemPrice,
    };
    Items.push(ObjItem);
  } else {
    let ObjItem = {
      itemSKU: Items[itemIndex][0],
      itemName: itemName,
      itemPhoto: photo,
      itemPrice: itemPrice,
    };
    Items[itemIndex] = ObjItem;
  }

  document.getElementById("txtIndex").value = "";
  document.getElementById("txtSKU").value = "";
  document.getElementById("txtitemName").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("txtitemPrice").value = "";

  document.getElementById("btn-add").innerText = "Submit";

  DrawTable();
});

function DrawTable() {
  let displayItem = "";
  for (let x = 0; x < Items.length; x++) {
    displayItem +=
      "<div class='col-md-4'; style='text-align: center;'><div class='bg-white p-3'>";

    displayItem +=
      "<img style='width:100%;'; src='" + Items[x].itemPhoto + "'>";
    displayItem += "<h4>" + Items[x].itemName + "</h4>";
    displayItem += "<p>" + Items[x].itemPrice + "</p>";

    displayItem +=
      "<div> <button class='btn btn-success btn-sm' onclick='cart(" +
      x +
      ");'>Cart</button><button class='btn btn-warning btn-sm' onclick='modify(" +
      x +
      ");'>Modify</button><button class='btn btn-danger btn-sm' onclick='remove(" +
      x +
      ");'>Remove</button></div>";
    displayItem += "</div></div>";
  }

  document.getElementById("displayItems").innerHTML = displayItem;
}
function cart(index) {
  let cartItems = [];
  let itemsCart = Items[index];
  let cartSKU = itemsCart.itemSKU;
  let cartitemName = itemsCart.itemName;
  let cartitemPrice = itemsCart.itemPrice;
  let cartphoto = itemsCart.photo;
  let cartQty = 1;
  let cartId = 1;
  let TableBody = "<tr>";
  let totalPrice = parseInt(itemsCart.itemPrice) * parseInt(cartQty);

  // cartItems.push([
  //   cartId,
  //   cartSKU,
  //   cartphoto,
  //   cartitemName,
  //   cartitemPrice,
  //   cartQty,
  //   totalPrice,
  // ]);

  let ObjCart = {
    cartSKU: cartSKU,
    cartitemName: cartitemName,
    cartphoto: cartphoto,
    cartitemPrice: cartitemPrice,
    cartQty: cartQty,
    cartId: cartId,
    totalPrice: totalPrice,
  };
  cartItems.push({ ObjCart });

  for (let x = 0; x < cartItems.length; x++) {
    TableBody += "<tr>";
    TableBody += "<td>" + cartItems.cartId + "</td>";
    TableBody +=
      "<td> <img style='width:50px; height:50px; border-radius:50%;'; src='" +
      cartItems.cartphoto +
      "'> </td>";
    TableBody += "<td>" + cartItems.cartSKU + "</td>";

    TableBody += "<td>" + cartItems.cartitemName + "</td>";
    TableBody += "<td>" + cartItems.cartitemPrice + "</td>";
    TableBody += "<td>" + cartItems.cartQty + "</td>";
    TableBody += "<td>" + cartItems.totalPrice + "</td>";
    TableBody += "</tr>";

    document.getElementById("table-list").innerHTML = TableBody;
  }
}

function remove(index) {
  Items.splice(index, 1);
  DrawTable();
}

function modify(index) {
  let EditInfo = Items[index];
  document.getElementById("btn-add").innerText = "Update Item";
  document.getElementById("txtIndex").value = index;
  document.getElementById("txtSKU").value = EditInfo.itemSKU;
  document.getElementById("txtitemName").value = EditInfo.itemName;
  document.getElementById("txtitemPrice").value = EditInfo.itemPrice;
  document.getElementById("photo").value = EditInfo.itemPhoto;
}

function isExists(idno) {
  for (let x = 0; x < Items.length; x++) {
    if (Items[x].itemSKU == idno) return false;
  }

  return true;
}

// $("#myCarousel").carousel({
//   interval: 5000,
// });

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      let divs = "";
      let result = JSON.parse(xhr.responseText);

      for (const product in result) {
        divs += ` 

                      <div class="col-lg-3 collection-container">
                      <img src="${result[product].photo}" class="w-100 container-image" alt="...">
                      <div class="middle">
                      <div class="text"><button type="button" class="btn btn-warning" onclick="#';">Add to cart</button></div>
                      </div>
                      <div class="carousel-descritpion mt-3">
                          <h5> ${result[product].name}</h5>
                          <p>₱${result[product].Price}</p>
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



document.querySelector("#btnAdd").addEventListener("click", function () {

    let Input = document.createElement("input");
    Input.className = "form-control";
    Input.type = "number";
  
    let Li = document.createElement("li");
    Li.className = "mt-2 list-unstyled";
  
    Li.append(Input);
    
    document.querySelector("#ul-parent").append(Li);
  
  });
  
  document.querySelector("#btnRemove").addEventListener("click", function () {
    document.querySelector("li:last-child").remove();
    let listItems = document.querySelectorAll("ul#ul-parent li input");
    let sum = 0;

    for (let i = 0; i < listItems.length; i++) {
        
        sum += parseInt(listItems[i].value);
       
      }
      document.getElementById("result").innerHTML = sum;
  });
  

  document.querySelector("#btnCalculate").addEventListener("click", function () {
    let listItems = document.querySelectorAll("ul#ul-parent li input");
    let sum = 0;

    for (let i = 0; i < listItems.length; i++) {
        
        sum += parseInt(listItems[i].value);
       
      }
      document.getElementById("result").innerHTML = sum;
  });
  
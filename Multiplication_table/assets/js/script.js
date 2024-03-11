// //Nested loop
// let Quotients = "";
// for(var row = 1; row <= 5; row++) { // 1 2
//     Quotients = "";
//     for(var col = 1; col <= 5; col++) {// 1 2
//         Quotients += (row * col) + " "; //concatenation || 1 2 3 4 5
//     }
//     console.log( Quotients);
// }

// for(var x = 10; x >= 0; x--) {
//     console.log(x);
// }


let Execute = document.getElementById("btnExecute");

Execute.addEventListener('click', function() {
    let RowLimit = document.getElementById("RowLimit").value;
    let ColLimit = document.getElementById("ColLimit").value;
    let Quotients = "";
    let tableTD= "";


    for(var row = 1; row <= RowLimit; row++){
        Quotients = "";
        
        for(var col = 1; col <= ColLimit; col++){
            Quotients += "<td style='width: 50px;'>"+(row * col)+"</td>";
            
            
    }
    tableTD += "<tr class='border-bottom : 1px solid #fff;'>" +Quotients+ "</tr>";

    document.getElementById("div-wrapper").innerHTML = tableTD;
    }

    
});


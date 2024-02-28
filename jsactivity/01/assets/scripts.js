//Contatenation
let btnConcat = document.getElementById("btn-morning");
btnConcat.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Morning,";
    document.getElementById("p1-output").innerText = FullName.toUpperCase();
    console.log(Output);
});

//Contatenation
let btnConcat2 = document.getElementById("btn-afternoon");
btnConcat2.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Afternoon,";
    document.getElementById("p1-output").innerText = FullName.toUpperCase();
    console.log(Output);
});


//Contatenation
let btnConcat3 = document.getElementById("btn-evening");
btnConcat3.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Good Evening,";
    document.getElementById("p1-output").innerText = FullName.toUpperCase();
    console.log(Output);
});
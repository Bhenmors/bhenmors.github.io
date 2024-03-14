let Employee = [];


document.getElementById("btn-add").addEventListener('click', function() {
    let EmployeeId = document.getElementById("EmployeeId").value;
    let EmployeeName = document.getElementById("EmployeeName").value;
    let WorkingHours = document.getElementById("WorkingHours").value;
    if(EmployeeId == '' || EmployeeName == '' || WorkingHours == '')
{
    alert("Please fill out all Fields")
}
    else
    Employee.push( [EmployeeId, EmployeeName, WorkingHours] );
    DrawList();
});

function remove(index) {
    Employee.splice(index, 1);
    DrawList();
}

function edit(index) {
    document.getElementById("EmployeeId").value = Employee[index][0];
    document.getElementById("EmployeeName").value = Employee[index][1];
    document.getElementById("WorkingHours").value = Employee[index][2];

    document.getElementById("btn-update").style.visibility = 'visible';

    document.getElementById("btn-update").addEventListener('click', function() {
    Employee[index][2] = document.getElementById("WorkingHours").value;
    document.getElementById("btn-update").style.visibility = 'hidden';
    DrawList();
        

});
    

}


function DrawList() {
    let List = "";

    for(let x = 0; x < Employee.length; x++){
        List += "<tr><td style='width: 25%;'>" + Employee[x][0] + " </td> " + "<td style='width: 25%;'>" + Employee[x][1] + 
        "</td>" + "<td style='width: 25%;'>" + Employee[x][2] + "</td>" + 
        "<td style='width: 25%;'><button class='btn btn-danger' onclick='remove("+x+")'>Remove</button><button class='btn btn-warning' onclick='edit("+x+")'>Edit</button></td></tr>";
    }

        document.getElementById("table-list").innerHTML = List;
}


let ArrStudents = ['alexa', 'jaileen', 'diether', 'emman'];
console.log(ArrStudents);

//sort
ArrStudents.sort();
console.log(ArrStudents);

// reverse
ArrStudents.reverse();
console.log(ArrStudents);
//string
let StringStudents = ArrStudents.join('|');
console.log(StringStudents);

//Destructuring
let ArrFoods = ['hamburger', 'hotdog', 'spaghetti', 'chicken', 'sundae', 'fries', 'sprite'];
// let Burger = ArrFoods[0];
// let Hotdog = ArrFoods[1];
// let Spaghetti = ArrFoods[2];


let [Burger, Hotdog, ...OtherFoods] = ArrFoods;

let ArrGrades = [89, 95, 94, 50];
let [Math, Science, PE, Programming] = ArrGrades;
console.log(PE);

//Value Swap
let Num1 = 10;
let Num2 = 5;

console.log(Num1, Num2);
[Num1, Num2] = [Num2, Num1];
console.log(Num1, Num2);

//Updating Array
let ArrSubjects = ['Math', 'Science', 'Programming'];
console.log(ArrSubjects);
ArrSubjects[2] = "Web Development";
console.log(ArrSubjects);
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

function clrTable(){
    var Table = document.getElementById("table-list");
    Employee.length = 0;
    Table.innerHTML = "";
    
}

function DrawList() {
    let List = "";
    let sum = 0;

    for(let x = 0; x < Employee.length; x++){
        sum += parseInt(Employee[x][2]);
        List += "<tr><td style='width: 25%;'>" + Employee[x][0] + " </td> " + "<td style='width: 25%;'>" + Employee[x][1] + "</td>" + "<td style='width: 25%;'>" + Employee[x][2] + "</td>" + "<td style='width: 25%;'><button class='btn btn-danger' onclick='remove("+x+")'>Remove</button></td></tr>";
    }
        List += "<tr><td style='width: 25%;'><td style='width: 25%; font-weight: Bolder;'>" + 'Total' + "<td style='width: 25%;'>" + sum + "</td><td style='width: 25%;'><button class='btn btn-danger' onclick='clrTable()'>Clear Table</button></td></tr>";
        document.getElementById("table-list").innerHTML = List;
}



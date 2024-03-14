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
    document.getElementById('EmployeeId').readOnly = true;
    document.getElementById('EmployeeName').readOnly = true;

    document.getElementById("btn-update").style.visibility = 'visible';

    document.getElementById("btn-update").addEventListener('click', function() {
    Employee[index][2] = document.getElementById("WorkingHours").value;
    document.getElementById("btn-update").style.visibility = 'hidden';
    DrawList();
    document.getElementById('EmployeeId').readOnly = false;
    document.getElementById('EmployeeName').readOnly = false;

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


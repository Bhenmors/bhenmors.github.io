let Employee = [];

document.getElementById("btn-add").addEventListener("click", function () {
  let EmployeeId = document.getElementById("EmployeeId").value;
  let EmployeeName = document.getElementById("EmployeeName").value;
  let WorkingHours = document.getElementById("WorkingHours").value;
  if (EmployeeId == "" || EmployeeName == "" || WorkingHours == "") {
    alert("Please fill out all Fields");
  } else {
    Employee.push([EmployeeId, EmployeeName, WorkingHours]);
    DrawList();
    // document.getElementById("EmployeeId").value = "";
    // document.getElementById("EmployeeName").value ="";
    // document.getElementById("WorkingHours").value="";
  }
});

function remove(index) {
  Employee.splice(index, 1);
  DrawList();
}

function edit(index) {
  let EmployeeId = document.getElementById("EmployeeId");
  let EmployeeName = document.getElementById("EmployeeName");
  let WorkingHours = document.getElementById("WorkingHours");
  EmployeeId.value = Employee[index][0];
  EmployeeName.value = Employee[index][1];
  WorkingHours.value = Employee[index][2];
  EmployeeId.readOnly = true;
  EmployeeName.readOnly = true;

  document.getElementById("btn-update").style.visibility = "visible";

  document.getElementById("btn-update").addEventListener("click", function () {
    Employee[index][2] = WorkingHours.value;
    document.getElementById("btn-update").style.visibility = "hidden";
    DrawList();
    EmployeeId.readOnly = false;
    EmployeeName.readOnly = false;
    EmployeeId.value = "";
    EmployeeName.value = "";
    WorkingHours.value = "";
    return 0;
  });
}

function DrawList() {
  let List = "";

  for (let x = 0; x < Employee.length; x++) {
    List +=
      "<tr><td style='width: 25%;'>" +
      Employee[x][0] +
      " </td> " +
      "<td style='width: 25%;'>" +
      Employee[x][1] +
      "</td>" +
      "<td style='width: 25%;'>" +
      Employee[x][2] +
      "</td>" +
      "<td style='width: 25%;'><button class='btn btn-danger' onclick='remove(" +
      x +
      ")'>Remove</button><button class='btn btn-warning' onclick='edit(" +
      x +
      ")'>Edit</button></td></tr>";
  }

  document.getElementById("table-list").innerHTML = List;
}

let ArrPerson = ["Jesthony", "Bernal", "Morales"];

// let [FirstName, MiddleName, LastName] = ArrPerson;
ShowNames(ArrPerson);

function ShowNames(ParamPerson) {
  console.log(ParamPerson.join(" "));
}

let PersonName = "Jesthony Bernal Mora les";

console.log(PersonName.split(" "));

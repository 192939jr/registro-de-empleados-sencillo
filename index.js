// Array para almacenar los empleados
let empleados = [];

// Clase Empleado
let Empleado = function (nombre, apellidos, edad, cargo, sueldo) {
    this.nombre = nombre,
    this.apellidos = apellidos,
    this.edad = edad,
    this.cargo = cargo,
    this.sueldo = sueldo
}

// Función para validar los campos de entrada
function validateInput(name, surname, age, job, salary) {
    if (name === "" || surname === "" || age === "" || job === "" || salary === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    return true;
}

// Función para agregar un empleado
function addEmployee() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let job = document.getElementById("job").value;
    let salary = document.getElementById("salary").value;

    if (!validateInput(name, surname, age, job, salary)) {
        return;
    }

    let newEmployee = new Empleado(name, surname, age, job, salary);
    empleados.push(newEmployee);

    alert("Empleado agregado!");

    cleanInputs();
}

// Función para limpiar los campos de entrada
function cleanInputs() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("job").value = "";
    document.getElementById("salary").value = "";
}

// Función para mostrar la lista de empleados
function showEmployers() {
    document.getElementById("emplyersList").innerHTML = "";

    for (const empleado of empleados) {
        for (items in empleado) {
            let list = document.getElementById("emplyersList");
            let li = document.createElement("li");
            li.textContent = `${items}: ${empleado[items]}`;
            list.appendChild(li);
        }

        // Agregar un separador entre empleados
        let list = document.getElementById("emplyersList");
        let separator = document.createElement("li");
        separator.innerHTML = "<hr>";
        list.appendChild(separator);
    }

    document.getElementById("listTitle").textContent = "Listado de empleados";
}


// Función para mostrar y ocultar la lista de empleados
function toggleEmployersList() {
    let listTitle = document.getElementById("listTitle");
    let emplyersList = document.getElementById("emplyersList");
    let toggleEmployersBtn = document.getElementById("toggleEmployersBtn");

    if (emplyersList.style.display === "none" || emplyersList.style.display === "") {
        showEmployers();
        emplyersList.style.display = "block";
        listTitle.style.display = "block";
        toggleEmployersBtn.textContent = "Ocultar lista de empleados";
    } else {
        emplyersList.style.display = "none";
        listTitle.style.display = "none";
        toggleEmployersBtn.textContent = "Mostrar lista de empleados";
    }
}

// Agregar controlador de eventos para el botón "Lista de empleados"
document.getElementById("toggleEmployersBtn").addEventListener("click", toggleEmployersList);


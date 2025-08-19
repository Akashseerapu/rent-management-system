let employees = [];
let unemployees = [];
let renters = [];

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    let name = prompt("Enter the name of the employee:");
    let date = prompt("Enter the date (YYYY-MM-DD) for the employee:");
    if (name && date) {
        employees.push({ name, date });
        updateEmployeeList();
    }
});

document.getElementById('addUnEmployeeBtn').addEventListener('click', function() {
    let name = prompt("Enter the name of the unemployed person:");
    let date = prompt("Enter the date (YYYY-MM-DD) for the unemployed person:");
    if (name && date) {
        unemployees.push({ name, date });
        updateUnEmployeeList();
    }
});

document.getElementById('addRentBtn').addEventListener('click', function() {
    let name = prompt("Enter the name of the renter:");
    let rent = prompt("Enter the rent amount for the renter:");
    let date = prompt("Enter the date (YYYY-MM-DD) for the renter:");
    if (name && rent && date && !isNaN(rent)) {
        renters.push({ name, rent: parseFloat(rent), date });
        updateRentList();
    }
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const employeeRentTotal = employees.length * 1200;
    const unEmployeeRentTotal = unemployees.length * 600;
    const rentTotal = renters.reduce((total, renter) => total + renter.rent, 0);

    const totalOutcome = employeeRentTotal + unEmployeeRentTotal + rentTotal;

    document.getElementById('totalEmployees').textContent = employeeRentTotal;
    document.getElementById('totalUnemployees').textContent = unEmployeeRentTotal;
    document.getElementById('totalRent').textContent = rentTotal;
    document.getElementById('totalOutcome').textContent = totalOutcome;

    displayFinalList();
});

// Update the UI for employee list
function updateEmployeeList() {
    let employeeListDiv = document.getElementById('employeeList');
    employeeListDiv.innerHTML = "";
    employees.forEach(entry => {
        let div = document.createElement("div");
        div.textContent = `Employee: ${entry.name}, Date: ${entry.date}`;
        employeeListDiv.appendChild(div);
    });
}

// Update the UI for unemployed list
function updateUnEmployeeList() {
    let unEmployeeListDiv = document.getElementById('unEmployeeList');
    unEmployeeListDiv.innerHTML = "";
    unemployees.forEach(entry => {
        let div = document.createElement("div");
        div.textContent = `Unemployed: ${entry.name}, Date: ${entry.date}`;
        unEmployeeListDiv.appendChild(div);
    });
}

// Update the UI for renters list
function updateRentList() {
    let rentListDiv = document.getElementById('rentList');
    rentListDiv.innerHTML = "";
    renters.forEach(entry => {
        let div = document.createElement("div");
        div.textContent = `Renter: ${entry.name}, Rent: ${entry.rent}, Date: ${entry.date}`;
        rentListDiv.appendChild(div);
    });
}

// Display the final list with all information
function displayFinalList() {
    const finalListDiv = document.getElementById('finalList');
    finalListDiv.innerHTML = ""; // Clear previous content

    const allEntries = [
        ...employees.map(entry => `Employee: ${entry.name}, Date: ${entry.date}, Rent: 1200`),
        ...unemployees.map(entry => `Unemployed: ${entry.name}, Date: ${entry.date}, Rent: 600`),
        ...renters.map(entry => `Renter: ${entry.name}, Date: ${entry.date}, Rent: ${entry.rent}`)
    ];

    allEntries.forEach(entry => {
        let li = document.createElement("li");
        li.textContent = entry;
        finalListDiv.appendChild(li);
    });
}
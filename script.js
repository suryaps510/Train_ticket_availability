document.getElementById("ticket-form").addEventListener("submit", function(event) {
    // Allow the form to be submitted to the server
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const seat = document.getElementById("seat").value;
    const date = document.getElementById("date").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const tableBody = document.getElementById("history-table-body");
    const newRow = tableBody.insertRow();
    newRow.insertCell().textContent = Date.now(); 
    newRow.insertCell().textContent = name;
    newRow.insertCell().textContent = email;
    newRow.insertCell().textContent = seat;
    newRow.insertCell().textContent = date;
    newRow.insertCell().textContent = from;
    newRow.insertCell().textContent = to;

    
    const actionCell = newRow.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function() {
        tableBody.deleteRow(newRow.rowIndex - 1);
    });
    actionCell.appendChild(deleteButton);

    document.getElementById("ticket-form").reset();
});


document.getElementById("view-history-btn").addEventListener("click", function() {
    document.getElementById("ticket-history").style.display = "block";
});

document.getElementById("ticket-history").addEventListener("click", function(event) {
    if (event.target.classList.contains('delete-btn')) {
        var ticketIdToDelete = event.target.getAttribute('data-ticket-id');
        // Delete ticket logic (for demonstration, we'll remove the row from table)
        event.target.closest('tr').remove();
        alert("Ticket with ID " + ticketIdToDelete + " has been deleted.");
    }
});


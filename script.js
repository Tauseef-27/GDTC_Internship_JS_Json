
var selectedRow = null

function onFormSubmit() {
    if(hasBlankSpaces(document.getElementById("fname").value)){
        alert('The value of First Name is null, empty or has blank spaces');
        return false;
      }
      if(hasBlankSpaces(document.getElementById("mname").value)){
        alert('The value of Middle Name is null, empty or has blank spaces');
        return false;
      }
      if(hasBlankSpaces(document.getElementById("lname").value)){
        alert('The value of Last Name is null, empty or has blank spaces');
        return false;
      }

    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();     
        
    }
    

}

function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("fname").value;
    formData["middlename"] = document.getElementById("mname").value;
    formData["lastname"] = document.getElementById("lname").value;
    formData["number"] = document.getElementById("num").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.middlename;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.number;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg></a>

                       <a onClick="onDelete(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                       <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                     </svg></a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("num").value = "";
    document.getElementById("email").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("num").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(td) {
    selectedRow.cells[0].innerHTML = td.firstname;
    selectedRow.cells[1].innerHTML = td.middlename;
    selectedRow.cells[2].innerHTML = td.lastname;
    selectedRow.cells[3].innerHTML = td.number;
    selectedRow.cells[4].innerHTML = td.email;    
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {    
    isValid = true;    

    if (document.getElementById("fname").value == "" ) {
        isValid = false;
        
        document.getElementById("firstnameValidationError").classList.remove("hide");
    } 
    else if(document.getElementById("mname").value == ""){
        isValid=false;
        // hasBlankSpaces(document.getElementById("mname").value);
        document.getElementById("middlenameValidationError").classList.remove("hide")
        if (!document.getElementById("firstnameValidationError").classList.contains("hide"))
            document.getElementById("firstnameValidationError").classList.add("hide");
    }   
    else if(document.getElementById("lname").value == "")
    {
        isValid=false;
        document.getElementById("lastnameValidationError").classList.remove("hide")
        if (!document.getElementById("firstnameValidationError").classList.contains("hide"))
            document.getElementById("firstnameValidationError").classList.add("hide");
        if (!document.getElementById("middlenameValidationError").classList.contains("hide"))
            document.getElementById("middlenameValidationError").classList.add("hide");
    }  
    else {
        isValid = true;
        if (!document.getElementById("firstnameValidationError").classList.contains("hide"))
            document.getElementById("firstnameValidationError").classList.add("hide");
        if (!document.getElementById("middlenameValidationError").classList.contains("hide"))
            document.getElementById("middlenameValidationError").classList.add("hide");    
        if (!document.getElementById("lastnameValidationError").classList.contains("hide"))
            document.getElementById("lastnameValidationError").classList.add("hide");        
       
        }   

    return isValid;
}

function hasBlankSpaces(str){
    return  str.match(/^\s+$/) !== null;
}

// CRUD OPERATION IN JSON
// Creating a json object first

const myobj={
    "firstname": "rahul",
    "middlename": "kumar",
    "lastname": "singh",
    "number": 2343353213,
    "email": "rahul@gmail.com"
}

//update object
myobj.firstname="shyam";
console.log(myobj);

//Add new object

myobj.age=32;
console.log("show age",myobj);

//Delete object
delete myobj.age;

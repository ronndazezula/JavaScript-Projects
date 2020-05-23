alert("JS load test");

//Challenge Step 217
function validateFunction() {
    var x=document.forms["join"]["fName"].value;
    if (x==""){
        alert("first name is a required field");
        return false;
    }
    var y=document.forms["join"]["lName"].value;
    if (y==""){
        alert("last name is a required field");
        return false;
    }
    var z=document.forms["join"]["eMailAdd"].value;
    if (z==""){
        alert("email address is a required field");
        return false;
    }
}
var formtag=document.querySelector('#formtab');
// console.log(formtag);
formtag.addEventListener('submit',formSubmitted);
function formSubmitted(event)
{
    event.preventDefault()
    console.log("submitted")
    var table1=document.getElementById("myTable")
    var myrow=table1.insertRow();
    var col1=myrow.insertCell();
    var col2=myrow.insertCell();
    var col3=myrow.insertCell();
    var col4=myrow.insertCell();
    var col5=myrow.insertCell();
    var col6=myrow.insertCell();
    var col7=myrow.insertCell();


    col1.innerHTML=document.getElementById("FirstName").value
    col2.innerHTML=document.getElementById("LastName").value
    col3.innerHTML=document.getElementById("Address").value
    col4.innerHTML=document.getElementById("Pincode").value
    col5.innerHTML=document.getElementById("Gender").value
    col6.innerHTML=document.getElementById("State").value
    col7.innerHTML=document.getElementById("Country").value

 }
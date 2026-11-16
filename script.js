document.getElementById("form").addEventListener("submit",function(event){

    event.preventDefault()
    let name=document.getElementById("name").value
    let roll=document.getElementById("roll").value
    let mark1=document.getElementById("mark1").value
    let mark2=document.getElementById("mark2").value
    let mark3=document.getElementById("mark3").value

    var table=document.getElementById("report");

    var row=table.insertRow(-1)

    var cell1=row.insertCell();
    

    

    cell1.innerHTML= name;
    
})
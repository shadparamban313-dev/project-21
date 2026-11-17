   document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault()
   
   let name=document.getElementById("name").value
   let roll=document.getElementById("roll").value
   let mark1=Number(document.getElementById("mark1").value)
   let mark2=Number(document.getElementById("mark2").value)
   let mark3=Number(document.getElementById("mark3").value)

   let total= mark1+mark2+mark3 
   let average= total/3 
   var table = document.getElementById("report");
   var row=table.insertRow(-1);

    let garde;
    if(average>=90){
        garde="A Grade"
    }else if(average>=75){
        garde="B Grade"
    }else if(average>=60){
        garde="C Grade"
    }else{
        garde="D Grade"   
    }

 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
  

    cell1.innerHTML = (table.rows.length -1)
    cell2.innerHTML = name;
    cell3.innerHTML = roll;
    cell4.innerHTML = mark1;
    cell5.innerHTML = mark2;
    cell6.innerHTML = mark3;
    cell7.innerHTML = total;
    cell8.innerHTML = average;
    cell9.style.color="red"
    cell9.innerHTML = garde;
   

    
   

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("mark1").value = "";
    document.getElementById("mark2").value = "";
    document.getElementById("mark3").value = "";


})

let them=document.getElementById("theme")
them.addEventListener("click",function(){
    if(document.body.style.backgroundColor=="white"){
document.body.style.backgroundColor="gray"
}else{document.body.style.backgroundColor="white"}
}
)
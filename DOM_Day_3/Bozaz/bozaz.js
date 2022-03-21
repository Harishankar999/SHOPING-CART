document.querySelector("form").addEventListener("submit",Bozaz);
function Bozaz(){
    event.preventDefault();
    var catagory=document.querySelector("#category").value;
    var product=document.querySelector("#name").value;
    var price=document.querySelector("#price").value;


    var tr = document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    td1.innerText=catagory;
    td2.innerText=product;
    td3.innerText=price;
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);
}
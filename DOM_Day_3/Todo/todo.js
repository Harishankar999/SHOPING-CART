document.querySelector("form").addEventListener("submit",todoList);
function todoList(){
    event.preventDefault();
    var itemName = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value;
    var tr = document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    td1.innerText=itemName;
    td2.innerText=quantity;
    td3.innerText=priority;
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);
}
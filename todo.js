// let msg=alert("something is wrong");
let todovalue = ""

let handleChange = (event) => {
    todovalue = event.target.value;
};

let handleClick = () => {
    // document.getElementById("delBtn").value = "";
    document.getElementById("input").value = "";
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = todovalue;
    li.className = "list-style";
    list.appendChild(li);
    let delBtn=document.createElement("button");
    delBtn.textContent="Delete"
    li.appendChild(delBtn);
    delBtn.onclick=()=>{
list.removeChild(li);
    };
    
};
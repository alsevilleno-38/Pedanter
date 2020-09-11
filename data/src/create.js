export const users = ["MSI", "Dell", "Lenovo"];

export const populateUsers = function (len) {
    // this = button  
    const ul = document.createElement("ul");
    
    users.slice(0, len).forEach((value, index, arrs) => {
        const li = document.createElement("li");
        li.innerHTML = value;
        ul.appendChild(li);
    });
    this.parentElement.appendChild(ul);
}

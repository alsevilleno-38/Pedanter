import info from "./info.xml";
import setup from "./assets/setup.jpg";
import "./style.css";
import { alertPage } from "./events";
import { users, populateUsers } from "./create";
import { divide } from "lodash";

function addElement(type, text, eventHandler, args) {
    switch (type) {
        case "text": {
            const child = document.createElement("p");
            child.innerHTML = text;            
            return child;
        }
        case "img": {
            const img = new Image();
            img.src = setup;
            return img;
        }
        case "btn": {
            const child = document.createElement("button");
            child.innerHTML = text;
            child.onclick = eventHandler.bind(child, ...args);
            child.classList.add("btn");
            return child;
        }
        default:
            break;
    }    
}

const createBox = (element, className) => {
    const div = document.createElement("div");
    if (className) {
        div.classList.add(className);        
    }
    if (element) {
        div.appendChild(element);
    }
    return div;
}

function appendToBody(element) {    
    document.body.appendChild(element);    
}

appendToBody(createBox(addElement("btn", "Populate Users", populateUsers, [3]), "perspective"));

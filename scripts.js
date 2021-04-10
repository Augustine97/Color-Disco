const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");
const center = document.querySelector(".center");
//const para = document.querySelector(".para");



// console.log(window.getComputedStyle(red).backgroundColor);

const BGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = BGColor(yellow);

// yellow.addEventListener("mouseenter", () =>{
//     center.style.background = color;
    
// });

const rgbToColorNameConverter = (color) => {
    if(color === red){
        return "Red";
    }
    else if(color == cyan){
        return "Cyan";
    } 
    else if(color == violet){
        return "Violet";
    } 
    else if(color === orange){
        return "Orange";
    } 
    else if(color == pink){
        return "Pink";
    }
    else if(color == yellow){
        return "Yellow";
    }
   
       
};

const magicColorChanger = (element,color) => {
    return element.addEventListener("mouseenter", () =>{
    center.style.background = color;
    // para.innerText = rgbToColorNameConverter(element);
    center.innerHTML = "";
    
    const para = document.createElement("p");
    para.classList.add("para");
    
    const colorName = document.createTextNode(rgbToColorNameConverter(element));
    para.appendChild(colorName);

    center.appendChild(para);


    
});
};

magicColorChanger(red,BGColor(red));
magicColorChanger(cyan,BGColor(cyan));
magicColorChanger(violet,BGColor(violet));
magicColorChanger(orange,BGColor(orange));
magicColorChanger(pink,BGColor(pink));
magicColorChanger(yellow,BGColor(yellow));
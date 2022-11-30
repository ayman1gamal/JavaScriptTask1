// Colors

let firstColor = "#ececec";
let secondColor = "#23a86c";


// Font

let font=document.createElement("link");
font.href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" 
font.rel="stylesheet";
document.head.appendChild(font);
document.body.style.fontFamily="Nerko One";

// Header

let Header = document.createElement("header");
Header.style.height = "12px";

// Icon

let icon = document.createElement("h3");
let title = document.createTextNode("Elzero");
icon.appendChild(title);
icon.style.fontSize="20px";
icon.style.fontWeight="10px";
icon.style.letterSpacing="1px";
icon.style.color = secondColor;
Header.appendChild(icon);

// Links

let Links = document.createElement("div");
let Link1 = document.createElement("a");
let Link2 = document.createElement("a");
let Link3 = document.createElement("a");
let Link4 = document.createElement("a");
let text1 = document.createTextNode("Home");
Link1.appendChild(text1);
let text2 = document.createTextNode("About");
Link2.appendChild(text2);
let text3 = document.createTextNode("Services");
Link3.appendChild(text3);
let text4 = document.createTextNode("Contact");
Link4.appendChild(text4);
Link1.style.fontSize="15px";
Link2.style.fontSize="15px";
Link3.style.fontSize="15px";
Link4.style.fontSize="15px";
Link1.style.color="#caccd3";
Link2.style.color="#caccd3";
Link3.style.color="#caccd3";
Link4.style.color="#caccd3";
Link1.style.paddingRight = "10px";
Link2.style.paddingRight = "10px";
Link3.style.paddingRight = "10px";
Link4.style.paddingRight = "10px";

Links.appendChild(Link1);
Links.appendChild(Link2);
Links.appendChild(Link3);
Links.appendChild(Link4);

Header.appendChild(Links);
Header.style.display = "flex";
Header.style.justifyContent = "space-between";
Header.style.alignItems = "center";
Header.style.padding = "10px";
Header.style.paddingLeft = "15px";
Header.style.paddingRight = "10px";



document.body.appendChild(Header);

// Content-------------------


let content = document.createElement("div");
content.style.background = firstColor;
content.style.paddingBottom="10px";
content.style.paddingLeft="10px";

for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    let number = document.createElement("h3");
    let num = document.createTextNode(i);
    number.appendChild(num);
    product.appendChild(number);
    number.style.margin = "0px";
    let productTitle = document.createTextNode("Product");
    let prod = document.createElement("p");
    prod.appendChild(productTitle);
    product.appendChild(prod);
    prod.style.margin = "-5px";
    prod.style.padding = "0px";
    prod.style.textAlign = "center";
    prod.style.color="#caccd3";
    prod.style.fontSize="15px";
    number.style.padding = "5px";
    number.style.textAlign = "center";
    product.className = "product";
    product.style.display = "absolute";
    product.style.padding = "10px 0px";
    product.style.width = "32%";
    product.style.height = "55px";
    product.style.backgroundColor = "white";
    product.style.margin = "10px 10px 0px 0px";
    content.appendChild(product);
}
content.style.margin = "0px 10px";
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.flexWrap = "wrap";
content.style.alignItems = "center";

document.body.appendChild(content);

//Footer-----------------

let footer = document.createElement("footer");
footer.style.background = secondColor;
footer.style.height = "30px";
let text_footer = "Copyright 2021";
let text = document.createTextNode(text_footer);
let myText = document.createElement("p");
myText.appendChild(text);
myText.style.color = "white";
myText.style.letterSpacing=".3px";
myText.style.fontSize="15px";
footer.appendChild(myText);
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";


document.body.appendChild(footer);
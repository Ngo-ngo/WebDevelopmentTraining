let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Viktor.JPG'){
        myImage.setAttribute('src', 'images/Victor2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/Viktor.JPG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt("Please enter your name: ");
    if(!myName){
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        //myHeading.textContent = "Web dev is cool, " + myName;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Web dev is cool, " + storedName;
}

myButton.onclick = function(){
    setUserName();
}
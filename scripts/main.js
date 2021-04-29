let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/acordeon1.jpg') {
      myImage.setAttribute('src','images/acordeon2.jpg');
    } else {
      myImage.setAttribute('src','images/acordeon1.jpg');
    }
}


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


  myButton.onclick = function() {
    setUserName();
  }

  
document.getElementById('spin-button').addEventListener('click', function() {
    document.body.classList.add('spin');
  });

// var heading = document.getElementById("heading");

// var x = 0;
// var y = 0;
// var dx = 5;
// var dy = 5;

// function moveHeading() {
//   x += dx;
//   y += dy;
//   console.log("Salam")
//   heading.style.left = x + "px";
//   heading.style.top = y + "px";
  
//   if (x + heading.offsetWidth > window.innerWidth || x < 0) {
//     dx = -dx;
//   }
//   if (y + heading.offsetHeight > window.innerHeight || y < 0) {
//     dy = -dy;
//   }
// }

// setInterval(moveHeading, 10);

// console.log(heading)

// var text = document.getElementById("text");
// var fonts = ["Arial", "Verdana", "Times New Roman", "Courier New"];
// var sizes = ["14px", "16px", "18px", "20px"];

// function changeFont() {
//   var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
//   var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
//   text.style.fontFamily = randomFont;
//   text.style.fontSize = randomSize;
// }

// setInterval(changeFont, 500);

// var text = document.getElementById("text");
// var fonts = ["Arial", "Verdana", "Times New Roman", "Courier New"];
// var sizes = ["14px", "16px", "18px", "20px"];

// function changeFont() {
//   var words = text.innerText.split(' ');
//   for (var i = 0; i < words.length; i++) {
//     var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
//     var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
//     words[i] = '<span style="font-family: ' + randomFont + '; font-size: ' + randomSize + ';">' + words[i] + '</span>';
//   }
//   text.innerHTML = words.join(' ');
// }

// setInterval(changeFont, 500);

// var text = document.getElementById("text");
// var fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Impact", "Lucida Console", "Trebuchet MS", "Tahoma", "Comic Sans MS"];
// var sizes = ["14px", "16px", "18px", "20px"];

// function changeFont() {
//   var words = text.innerText.split(' ');
//   var numWords = Math.floor(Math.random() * words.length);
//   var indices = [];
//   while (indices.length < numWords) {
//     var randomIndex = Math.floor(Math.random() * words.length);
//     if (!indices.includes(randomIndex)) {
//       indices.push(randomIndex);
//     }
//   }
//   for (var i = 0; i < indices.length; i++) {
//     var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
//     var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
//     words[indices[i]] = '<span style="font-family: ' + randomFont + '; font-size: ' + randomSize + ';">' + words[indices[i]] + '</span>';
//   }
//   text.innerHTML = words.join(' ');
// }

// setInterval(changeFont, 500);
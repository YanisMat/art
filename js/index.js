var message = document.querySelector('#message');
var messages = ["one", "two"];
var i = 0;

function myLoop() { 
  var timeout = 
   setTimeout(function() {
     message.removeAttribute("class");
     message.classList.add(messages[i]);
     i++;   
     console.log(i);
     if (i > messages.length) {
          i = 0;
          message.removeAttribute("class");
      };
     clearTimeout(timeout);
     myLoop();
   }, 3000)
};
myLoop();
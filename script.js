const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link'); // Updated
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const header = document.querySelector('header');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Function to add/remove 'scrolled' class based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {  // If the user has scrolled more than 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

var placeholders = [
    "Near-by hospitals...",
    "Find nearby clinics...",
    "Search for emergency rooms...",
    "Locate health centers..."
  ];
  var i = 0;
  var typingSpeed = 100; // Speed of typing (in milliseconds)
  var deletingSpeed = 50; // Speed of deleting (in milliseconds)
  var delayBetweenLines = 1000; // Delay before starting to delete (in milliseconds)
  var currentIndex = 0; // Index to track character position
  
  function typeWriter() {
    let currentText = placeholders[i]; // Get the current line of text
    
    // If there are still characters left to type, type the next character
    if (currentIndex < currentText.length) {
      document.getElementById("demo").setAttribute("placeholder", currentText.substring(0, currentIndex + 1));
      currentIndex++;
      setTimeout(typeWriter, typingSpeed);
    } 
    // If the entire line is typed, wait and then start deleting
    else {
      setTimeout(deleteWriter, delayBetweenLines);
    }
  }
  
  function deleteWriter() {
    let currentText = placeholders[i]; // Get the current line of text  
    if (currentIndex > 0) {
      document.getElementById("demo").setAttribute("placeholder", currentText.substring(0, currentIndex - 1));
      currentIndex--;
      setTimeout(deleteWriter, deletingSpeed);
    } 
    // If the entire line is deleted, move to the next line and start typing again
    else {
      i = (i + 1) % placeholders.length; // Move to the next line, reset to 0 when at the end
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  // Start the auto-typing effect
  typeWriter();
  

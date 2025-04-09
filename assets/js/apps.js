
const lines = [
    "Web Designer",
    "Web Developer",
    "Graphic Designer"
  ];

  let currentLine = 0;
  let currentChar = 0;

  const textElement = document.querySelector('.typing');

  function typeText() {
    if (currentChar < lines[currentLine].length) {
      // Type character by character in the current line
      textElement.innerHTML += lines[currentLine].charAt(currentChar);
      currentChar++;
      setTimeout(typeText, 100); // Delay between each character
    } else {
      // After the current line is fully typed, remove it and move to the next one
      setTimeout(() => {
        textElement.innerHTML = ''; // Clear the current line
        currentLine++; // Move to the next line
        currentChar = 0; // Reset character counter for the new line

        if (currentLine < lines.length) {
          setTimeout(typeText, 500); // Delay before starting the next line
        } else {
          currentLine = 0; // Reset to the first line
          setTimeout(typeText, 500); // Start typing from the first line again
        }
      }, 1000); // Delay before removing the text after it's fully typed
    }
  }

  // Start typing the first line
  typeText();
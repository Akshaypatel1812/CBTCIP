document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent;
  
        if (buttonText === 'C') {
          currentInput = '0';
        } else if (buttonText === '←') {
          currentInput = currentInput.slice(0, -1);
          if (currentInput === '') {
            currentInput = '0';
          }
        } else if (buttonText === '=') {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = 'Error';
          }
        } else {
          if (currentInput === '0') {
            currentInput = buttonText;
          } else {
            currentInput += buttonText;
          }
        }
  
        display.textContent = currentInput;
      });
    });
  });
  
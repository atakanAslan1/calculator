const screen = document.getElementById('screen');

// Function to show the value on the screen
const showOnScreen = (input) => {
    screen.value +=input;
};

// Function to clear the screen
const clearScreen = () => {
    screen.value = '';
};

// Function to calculate the value on the screen
const calculate = () => {
    try {  
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
};

// Function to calculate the number on the screen/100 
const percentage = () => {
    try {
        screen.value = eval(screen.value)/100;

    }
    catch (error) {
        screen.value = 'Error';
    }
};

// Function to erase the last given number on the screen

const backspace = () => {
    screen.value = screen.value.slice(0, -1);
};






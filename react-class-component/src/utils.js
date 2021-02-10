export const limit50Chars = (userInput) => (userInput.length >= 100 ? userInput.substring(0, 100) + "..." : userInput);

export const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

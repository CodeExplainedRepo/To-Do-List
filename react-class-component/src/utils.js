export const limit10Items = (todos) => todos.length >=10 ? todos.slice(0,10) : todos;

export const limit50Chars = (userInput) => userInput.length >=100 ? userInput.substring(0,100)+"..." : userInput;
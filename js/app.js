// CODE EXPLAINED channel
const refresh = document.querySelector("[data-js=refresh]");
const date = document.querySelector("[data-js=date]");
const inputField = document.querySelector("[data-js=input-field]");
const list = document.querySelector("[data-js=list]");

//class names
const CHECKED = "fa-check-circle";
const UNCHECKED = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//show Date
const today = new Date();
const options = {weekday:"long", month: "short", day: "numeric" };
date.innerHTML = today.toLocaleDateString("en-US",options);
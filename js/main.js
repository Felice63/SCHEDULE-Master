let todaysDate = document.querySelector(".dateToday");
let today = new Date();

todaysDate.innerHTML = `<h1>Today is ${today.toDateString()}</h1>`;

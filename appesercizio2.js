const counter = function () {
  let counterElement = document.getElementById("counter");
  let test = sessionStorage.getItem("start-time") || 0;

  const updateCounter = function () {
    if (test === 0) {
      test++;
      console.log(test);
    } else if (test !== 0) {
      sessionStorage.setItem("start-time", JSON.stringify(++test));
      console.log(test);
      counterElement.textContent = test;
    }
  };

  setInterval(updateCounter, 1000);
  updateCounter();
};

window.onload = counter;

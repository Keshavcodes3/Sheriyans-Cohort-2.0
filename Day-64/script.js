//?Debouncing and Throttling

function debounce(fnc, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer=setTimeout(fnc, delay);
  };
}

document.querySelector("input").addEventListener(
  "input",
  debounce(function () {
    console.log("bhaagggoooooo");
  }, 400)
);

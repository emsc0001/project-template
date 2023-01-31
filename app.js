console.log("app.js is running 🎉");
function sayHello(Emil) {
  document.querySelector("h3").textContent =
    "SayHello" + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHello);

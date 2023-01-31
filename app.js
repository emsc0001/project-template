console.log("app.js is running 🎉");
function sayHello(name) {
  document.querySelector("h3").textContent =
    " Goddag " +
    document.querySelector("#name").value +
    " din alder er " +
    document.querySelector("#age").value;
}
document.querySelector("button").addEventListener("click", sayHello);

const slider = document.querySelector("#ranger");

slider.addEventListener("input", change1);

function change1() {
  if (Number(slider.value) === 0) {
    document.querySelector(".marker").setAttribute("fill", "transparent");
    document.querySelector(".progress").style.stroke = "#0000";
    document.querySelector("figure").style.color = "#0005";
  } else {
    document.querySelector(".marker").setAttribute("fill", "red");
    document.querySelector(".progress").style.stroke = "#000";
    document.querySelector("figure").style.color = "#000";
  }
  console.log("Changed Value");
  document.querySelector("figure").setAttribute("data-value", slider.value);
}

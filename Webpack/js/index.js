function openOrCloseMenu(event) {
  let ul = document.getElementsByTagName("ul")[0];
  if (ul.style.maxHeight == "0px") {
    ul.style.maxHeight = "200px";
    ul.style.paddingTop = "50px";
    event.style.transform = "rotate(-90deg)";
    ul.style.pointerEvents = "auto";
  } else {
    ul.style.maxHeight = "0px";
    ul.style.paddingTop = "0px";
    event.style.transform = "rotate(0deg)";
    ul.style.pointerEvents = "none";
  }
}
function onModeToggle(event) {
  let head = document.head;
  if(event.target.checked) {
    let link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `./css/light-mode.css`;
    link.id = 'light-mode'

    head.appendChild(link);
  } else {
    let lightMode = document.getElementById('light-mode')

    if(lightMode !== null) {
        lightMode.parentNode.removeChild(lightMode)
    }
  }
}
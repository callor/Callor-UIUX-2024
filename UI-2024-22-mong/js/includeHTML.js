const includeHTML = () => {
  /* Loop through a collection of all HTML elements: */
  const z = document.getElementsByTagName("*");
  for (let i = 0; i < z.length; i++) {
    const elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("ch-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
          if (xhttp.status == 200) {
            elmnt.innerHTML = xhttp.responseText;
          }
          if (xhttp.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("ch-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
};

(function processJSON() {
  let jsonContent = JSON.parse(document.body.innerText);
  let formattedJSON = JSON.stringify(jsonContent, null, 4);
  // alert(formattedJSON);
  document.body.innerHTML =
    `<pre style="word-wrap: break-word; white-space: pre-wrap;">` +
    formattedJSON +
    `</pre>`;
}());
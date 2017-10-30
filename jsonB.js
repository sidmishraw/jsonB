chrome.browserAction.onClicked.addListener((tab) => jsonB(tab));

/**
 * Function that executes when the extension is invoked.
 * 
 * @param {tabs.Tab} tab The current active tab
 */
function jsonB(tab) {
  let fileURL = tab.url;
  if (!fileURL.match(/.*.{1}json/i)) {
    alert("This is not a JSON file :)");
    return;
  }

  chrome.tabs.executeScript(
    null,
    {
      "file": "processjson.js"
    },
    () => { alert("done!"); }
  );
}
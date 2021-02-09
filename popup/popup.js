// Optionsページを開くボタン
document.getElementById("openOptions").addEventListener("click", function() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL("options.html"));
    }
});

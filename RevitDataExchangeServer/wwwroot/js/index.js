function sendText() {
    const text = document.getElementById('inputText').value;
    window.chrome.webview.postMessage(JSON.stringify({ type: "update", data: text }));
}

function notify(text) {
    console.log("Called");
    if (text === 0) {
        toastr.warning("No elements were selected");
    }
    else if (text === -1) {
        toastr.error("An error occured while data update");
    }
    else {
        toastr.success("Number of updated elements: " + text);
        document.getElementById('inputText').value = "";
    }
}


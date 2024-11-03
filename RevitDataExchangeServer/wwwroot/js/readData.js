function loadDataTable(jsonContent) {
    let dataTableElement  = $('#tableData');
    if (dataTableElement  === undefined) {
        return "error";
    }

    if ($.fn.DataTable.isDataTable(dataTableElement)) {
        dataTableElement.DataTable().clear().destroy();
    }
    dataTableElement .DataTable({
        "data": jsonContent,
        "columns": [
            {data: "Id", "width": "15%"},
            {data: "Name", "width": "25%"},
            {data: "TimeStamp", "width": "35%"},
            {data: "Value", "width": "25%"}
        ]
    });
}

function getText() {
    window.chrome.webview.postMessage(JSON.stringify({ type: "call", data: null }));;
}
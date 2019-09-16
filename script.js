function createPagination() {
    var element = document.getElementsByTagName("li"),
        index;

    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

    let pageAmount = parseInt(document.getElementById("pageAmount").value);
    let offset = parseInt(document.getElementById("offset").value);

    for (let i = 0; i < pageAmount; i++) {
        var page = i + 1;
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Page " + page);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
    var listObj = new List('test-list', {
        page: 1,
        pagination: {
            innerWindow: offset
        }
    });
}
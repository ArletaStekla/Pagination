function createPagination() {
    let element = document.getElementsByTagName("li"),
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
        document.getElementById("pagesContent").appendChild(node);
    }
     
    let listObj = new List('container', {
        page: 1,
        pagination: {
            innerWindow: offset
        }
    });
}

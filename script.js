function createPagination() {
    /*
    Deletes the list to be able to create another with new parameters.
    Goes through the entire list and removes items.
    */
    let element = document.getElementsByTagName("li"),
        index;

    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    
    /*
    Gets the values given by the user.
    */
    let pageAmount = parseInt(document.getElementById("pageAmount").value);
    let offset = parseInt(document.getElementById("offset").value);

    /*
    Creates pages based on given parameters and fills them with content.
    */
    for (let i = 0; i < pageAmount; i++) {
        var page = i + 1;
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Page " + page);
        node.appendChild(textnode);
        document.getElementById("pagesContent").appendChild(node);
    }
     
    /*
    Creates pagination based on the given parameters.
    */
    let listObj = new List('container', {
        page: 1,
        pagination: {
            innerWindow: offset
        }
    });
}

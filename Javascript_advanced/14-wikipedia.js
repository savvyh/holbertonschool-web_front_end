function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = (`${data}`);
    document.body.append(paragraph);
}

function queryWikipedia(callback) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=");
    xmlHttpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           callback(JSON.parse(this.responseText))
        }
    }
    xmlHttpRequest.send(); 
}

queryWikipedia(createElement);
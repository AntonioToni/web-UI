function req() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json => {
            for (i in json){
                let title = json[i].title;
                let body = json[i].body;
                document.write("<h2>"+title+"</h2>");
                document.write("<p>"+body+"</p>")
            }
    });
}
  
req();
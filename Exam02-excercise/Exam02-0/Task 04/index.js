const postsContainer = document.getElementById("posts");

function addPosts(data) {
    data.forEach((post) => {
        const container = document.createElement("div");
        container.className = "post";

        const title = document.createElement("h2");
        title.innerHTML = `${post.title}`
        container.appendChild(title);

        const body = document.createElement("p");
        body.innerHTML = `${post.body}`
        container.appendChild(body);
        
        postsContainer.appendChild(container);
    });
}

fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => {
        addPosts(data);
    })
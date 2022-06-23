const qoutesContainer = document.getElementById("quotes")

function addQuotes(data) {
    data.qoutes.forEach((quote) => {
        const container = document.createElement("div");
        container.className = "quote"

        const content = document.createElement("i");
        content.innerHTML = `"${quote.content}"`;
        container.appendChild(content)

        const author = document.createElement("p");
        author.innerHTML = `~${quote.author}`;
        container.appendChild(author)

        qoutesContainer.appendChild(container)
    })
}

fetch("https://pwks-kolokvij2.herokuapp.com/quotes")
    .then((response) => response.json())
    .then((data) => {
        addQuotes(data)
    })
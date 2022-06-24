const mainContainer = document.getElementById("container");

function addColors(data) {
    data.forEach(element => {
        const container = document.createElement("div");
        container.className = "size";
        container.style = "background-color: " + `${element.value}`;

        mainContainer.appendChild(container)
    });
}

fetch("https://pwks-kolokvij2.herokuapp.com/colors")
    .then((response) => response.json())
    .then((data) => {
        addColors(data);
    })
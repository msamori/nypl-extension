function addBarnesButton() {
    console.log("triggered Barnes extension");
    let productName = document.getElementById("productName");
    let format = document.getElementById("pdp-info-format");

    let title = productName.value.trim();

    // Create button
    let button = document.createElement("button");
    button.id = "nyplButton";
    button.type = "button";
    button.innerText = "NYPL";
    button.disabled = false; 
    button.onclick = () => {
        let searchUrl = `https://borrow.nypl.org/search?query=${encodeURIComponent(title)}`;
        window.open(searchUrl, "_blank");
    };

    format.appendChild(button);

}

addBarnesButton();


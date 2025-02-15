// Get the current page URL
const url = window.location.href;

if (url.includes("goodreads.com")) {
    addGoodreadsButton();
} else if (url.includes("amazon.com")) {
    addAmazonButton();
}

function addGoodreadsButton() {
    let buttonDiv = document.getElementsByClassName("BookActions")[0];
    let shopButton = buttonDiv.children[1]; // Place the button before this
    let titleElement = document.querySelector("h1[data-testid='bookTitle']");
    let title = titleElement.innerText.trim();

    // Prevent duplicate buttons
    if (document.getElementById("nyplButton")) return;

    // Create the button immediately
    let button = document.createElement("button");
    button.id = "nyplButton";
    button.innerText = "NYPL";
    button.className = "Button Button--buy Button--medium Button--block";
    button.disabled = false; 
    button.onclick = () => {
        let searchUrl = `https://borrow.nypl.org/search?query=${encodeURIComponent(title)}`;
        window.open(searchUrl, "_blank");
    };

    // Insert the button right away
    buttonDiv.insertBefore(button, shopButton);
}


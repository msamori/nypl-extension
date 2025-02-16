function addGoodreadsButton() {
    let buttonDiv = document.getElementsByClassName("BookActions")[0];
    let shopButton = buttonDiv.children[1]; // Place the button before this
    let titleElement = document.querySelector("h1[data-testid='bookTitle']");
    let title = titleElement.innerText.trim();

    // Prevent duplicate buttons
    if (document.getElementById("nyplButton")) return;

    // Create button container
    let buttonActions = document.createElement("div");
    buttonActions.className = "BookActions__button";

    let buttonGroup = document.createElement("div");
    buttonGroup.className = "ButtonGroup ButtonGroup--block";

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "Button__container Button__container--block";

    // Create button
    let button = document.createElement("button");
    button.id = "nyplButton";
    button.type = "button";
    button.className = "Button Button--wtr Button--medium Button--block";
    button.disabled = false; 
    button.onclick = () => {
        let searchUrl = `https://borrow.nypl.org/search?query=${encodeURIComponent(title)}`;
        window.open(searchUrl, "_blank");
    };

    // Create button label span
    let buttonLabel = document.createElement("span");
    buttonLabel.className = "Button__labelItem";
    buttonLabel.innerText = "NYPL";

    // Append elements 

    button.appendChild(buttonLabel);
    buttonContainer.appendChild(button);
    buttonGroup.appendChild(buttonContainer);
    buttonActions.appendChild(buttonGroup);

    // Insert the button right away
    buttonDiv.insertBefore(buttonActions, shopButton);
}

addGoodreadsButton();

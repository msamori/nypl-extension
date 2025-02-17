function addGoodreadsLink() {
    let buttonDiv = document.getElementsByClassName("BookActions")[0];
    let shopButton = buttonDiv.children[1]; 
    let titleElement = document.querySelector("h1[data-testid='bookTitle']");
    let title = titleElement.innerText.trim();

    // Prevent duplicate links
    if (document.getElementById("nyplLink")) return;

    // Create containers
    let buttonActions = document.createElement("div");
    buttonActions.className = "BookActions__button";

    let buttonGroup = document.createElement("div");
    buttonGroup.className = "ButtonGroup ButtonGroup--block";

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "Button__container Button__container--block";

    // Create link
    let link = createLibraryLink(title);
    link.className = "Button Button--wtr Button--medium Button--block";

    // Append elements 

    buttonContainer.appendChild(link);
    buttonGroup.appendChild(buttonContainer);
    buttonActions.appendChild(buttonGroup);
    buttonDiv.insertBefore(buttonActions, shopButton);
}

addGoodreadsLink();

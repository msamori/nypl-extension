function addBarnesLink() {
    let productName = document.getElementById("productName");
    let title = productName.value.trim();
    let format = document.getElementById("pdp-info-format");

    // Prevent duplicate links
    if (document.getElementById("nyplLink")) return;

    // Create link 
    let link = createLibraryLink(title);

    format.appendChild(link);
}

addBarnesLink();


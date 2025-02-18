function createLibraryLink(title) {
    let link = document.createElement("a");
    link.id = "nyplLink";
    link.href = `https://borrow.nypl.org/search?query=${encodeURIComponent(title)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.referrerPolicy = "no-referrer";
    link.innerText = "NYPL";
    console.log("link: ", link);

    return link;
}


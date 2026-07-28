function openImage(src){
    document.getElementById("viewer").style.display = "flex";
    document.getElementById("bigImage").src = src;
}

function likeNature(button){
    let count = parseInt(button.innerText.match(/\d+/)[0]);
    count++;
    button.innerHTML = "❤️ Like (" + count + ")";
}

function searchYouTube() {
    let text = document.getElementById("searchBox").value;
    window.open(
        "https://www.youtube.com/results?search_query=" + encodeURIComponent(text),
        "_blank"
    );
}

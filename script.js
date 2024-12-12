function zoomImage(img) {
    var modal = document.getElementById("zoomModal");
    var modalImg = document.getElementById("zoomedImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("zoomModal");
    modal.style.display = "none";
}

function filterSelection(category) {
    var items = document.getElementsByClassName("item");
    if (category == "all") category = "";
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
        if (items[i].className.indexOf(category) > -1) {
            items[i].style.display = "block";
        }
    }
}

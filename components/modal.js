function showModal() {
    let modal = document.getElementById("modal");
    let body = document.getElementById("body");
    console.log(body);
    body.classList.add("stop--scroll");
    modal.classList.toggle('modal--show');
}

function closeModal() {
    body.classList.remove("stop--scroll");
    modal.classList.remove("modal--show");
}

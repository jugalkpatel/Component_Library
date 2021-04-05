function showSnackbar() {
    let snackbar = document.getElementById("snackbar-item");

    snackbar.classList.remove("snackbar--hide");
    snackbar.classList.add("snackbar--show");
    setTimeout(() => {
        snackbar.classList.remove("snackbar--show");
        snackbar.classList.add("snackbar--hide");
    }, 3000)
}

function closeSnackbar() {

    let snackbar = document.getElementById("snackbar-item");
    snackbar.classList.add("snackbar--hide");
}


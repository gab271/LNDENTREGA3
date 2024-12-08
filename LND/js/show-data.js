function showData() {
    const NAME = localStorage.getItem("name");
    document.getElementById("name").innerHTML = NAME;

    const EMAIL = localStorage.getItem("email");
    document.getElementById("email").innerHTML = EMAIL;

    const PASSWORD = localStorage.getItem("password");
    document.getElementById("password").innerHTML = PASSWORD;
}

showData();
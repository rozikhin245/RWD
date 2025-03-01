// untuk aksi setelah loginlogin
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        return;
    }

    if (email === "rozikihnkhoirur@gmail.com" && password === "123456") {
        window.location.href = "index.html"; 
    }
});

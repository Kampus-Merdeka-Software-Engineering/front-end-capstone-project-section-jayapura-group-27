var btn = document.getElementById("buttonLogin")
var username = document.getElementById("username")
var password = document.getElementById("password")

btn.addEventListener("click", login);
    
        function login() {
            fetch("http://localhost:3000/static/login.html", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username.value,
                        password: password.value,
                    })
                })
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    alert(data.message);
                    localStorage.setItem("users", JSON.stringify(data.data))
                    window.location.replace("http://localhost:3000/static/home.html")
                }).catch(function (error) {
                    console.log(error);
                });
            }
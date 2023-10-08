let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

function removeDisabled() {
    let pilih = document.getElementById("pilih");
    pilih.removeAttribute("disabled");
}

function myFunction() {
  var nama = document.getElementById("nama").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var pilihan = document.getElementById("pilihan").value;
  var pilih = document.getElementById("pilih").value;
  var tanggal = document.getElementById("tanggal").value;

  if (nama === "" || phone === "" || email === "" || pilihan ==="" || pilih === "" || tanggal === "") {
    swal({
      title: "Fields Empty!",
      text: "Please fill in all data first!",
      icon: "warning",
      button: "Ok",
    });
  } else {
    swal({
      title: "Susccessfully Submitted!",
      text: "Your data has been entered successfully, proof of booking will be sent to your email",
      icon: "success",
      button: "Ok",
    });
  }
}
  
  window.addEventListener("scroll", reveal);
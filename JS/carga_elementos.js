// Navbar
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('navbar').innerHTML =this.responseText;
    }
}
xhttp.open('GET','navbar.html',true);
xhttp.send();

// Navbar Cliente
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('navbar_cliente').innerHTML =this.responseText;
    }
}
xhttp.open('GET','navbar_cliente.html',true);
xhttp.send();

// Navbar Admin
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('navbar_admin').innerHTML =this.responseText;
    }
}
xhttp.open('GET','navbar_admin.html',true);
xhttp.send();

// Footer
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('footer').innerHTML =this.responseText;
    }
}
xhttp.open('GET','footer.html',true);
xhttp.send();
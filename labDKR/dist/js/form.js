function set() {
	document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("email").value = localStorage.getItem("email");
}

function get() {
    localStorage.setItem("name", document.getElementById("name").value);
	localStorage.setItem("email", document.getElementById("email").value);
}

set();

document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let userData = { name, email, password };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(userData);

  localStorage.setItem("users", JSON.stringify(users));

  // Redirect to list page (same tab, proper way)
  window.location.href = "list.html";
});

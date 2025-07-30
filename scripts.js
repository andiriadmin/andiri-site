const users = [
  { username: "owner@andiri.io", password: "owner123", role: "OWNER" },
  { username: "admin@andiri.io", password: "andiri123", role: "ADMIN" },
  { username: "dispatch@andiri.io", password: "truck123", role: "DISPATCH" },
  { username: "analytics@andiri.io", password: "data456", role: "ANALYTICS" },
  { username: "finance@andiri.io", password: "fin789", role: "FINANCIAL" }
];

function login() {
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();

  const user = users.find(u => u.username === email && u.password === pass);
  if (user) {
    localStorage.setItem("auth", "true");
    localStorage.setItem("user", user.username);
    localStorage.setItem("role", user.role);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('login-msg').innerText = "Invalid credentials.";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
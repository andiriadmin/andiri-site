function login() {
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();

  fetch('users.json')
    .then(response => response.json())
    .then(users => {
      const user = users.find(u => u.username === email && u.password === pass);
      if (user) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("user", user.username);
        localStorage.setItem("role", user.role);
        window.location.href = "dashboard.html";
      } else {
        document.getElementById('login-msg').innerText = "Invalid credentials.";
      }
    })
    .catch(() => {
      document.getElementById('login-msg').innerText = "Login system unavailable.";
    });
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
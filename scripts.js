
const users = {
  "admin@andiri.io": { password: "andiri123", role: "ADMIN" },
  "dispatch@andiri.io": { password: "truck123", role: "DISPATCH" },
  "analytics@andiri.io": { password: "data456", role: "ANALYTICS" },
  "finance@andiri.io": { password: "fin789", role: "FINANCIAL" }
};

function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  if (users[email] && users[email].password === pass) {
    localStorage.setItem("auth", "true");
    localStorage.setItem("user", email);
    localStorage.setItem("role", users[email].role);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('login-msg').innerText = "Invalid credentials.";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

function renderDashboard() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("user");
  const sidebar = document.getElementById("sidebar");
  const accessMap = JSON.parse(localStorage.getItem("roleAccessMap") || "{}");

  document.getElementById("user-email").innerText = email;

  const allowedModules = accessMap[role] || [];

  if (role === "ADMIN") {
    const adminBtn = document.createElement("a");
    adminBtn.className = "glow-btn sidebar-btn";
    adminBtn.href = "admin-dashboard.html";
    adminBtn.innerText = "ADMIN PORTAL";
    sidebar.appendChild(adminBtn);
  }

  allowedModules.forEach(mod => {
    const btn = document.createElement("button");
    btn.className = "glow-btn sidebar-btn";
    btn.innerText = mod;
    sidebar.appendChild(btn);
  });

  const logoutBtn = document.createElement("button");
  logoutBtn.className = "glow-btn sidebar-btn";
  logoutBtn.innerText = "Logout";
  logoutBtn.onclick = logout;
  sidebar.appendChild(logoutBtn);
}

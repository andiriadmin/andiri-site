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
  document.getElementById("user-email").innerText = email;

  const modules = {
    ADMIN: ["LOGISTAPRO TMS", "COMMERCIAL INVOICE BUILDER", "RATE QUOTING TOOL", "Admin Dashboard"],
    DISPATCH: ["LOGISTAPRO TMS"],
    ANALYTICS: ["COMMERCIAL INVOICE BUILDER"],
    FINANCIAL: ["RATE QUOTING TOOL"]
  };

  const sidebar = document.getElementById("sidebar");
  modules[role].forEach(mod => {
    const btn = document.createElement("button");
    btn.className = "glow-btn";
    btn.innerText = mod;
    sidebar.appendChild(btn);
  });
}

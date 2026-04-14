console.log("login.js loaded");

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Attempting login:", email);

  const { data, error } = await window.supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  console.log("Login result:", data, error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Login successful!");
  window.location.href = "landinglog.html";
});
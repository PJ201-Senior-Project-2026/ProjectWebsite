const emailBtn = document.getElementById("update-email-btn");
const passwordBtn = document.getElementById("update-password-btn");
const statusMessage = document.getElementById("status-message");

// Update Email
emailBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;

  // 🔵 SUPABASE EMAIL UPDATE
  /*
  const { data, error } = await supabase.auth.updateUser({
    email: email
  });

  if (error) {
    statusMessage.textContent = error.message;
    statusMessage.style.color = "red";
  } else {
    statusMessage.textContent = "Email updated! Check your inbox.";
    statusMessage.style.color = "lightgreen";
  }
  */

  console.log("Update email:", email);
});

// Update Password
passwordBtn.addEventListener("click", async () => {
  const password = document.getElementById("new-password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    statusMessage.textContent = "Passwords do not match!";
    statusMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    statusMessage.textContent = "Password must be at least 6 characters.";
    statusMessage.style.color = "red";
    return;
  }

  // 🔵 SUPABASE PASSWORD UPDATE
  /*
  const { data, error } = await supabase.auth.updateUser({
    password: password
  });

  if (error) {
    statusMessage.textContent = error.message;
    statusMessage.style.color = "red";
  } else {
    statusMessage.textContent = "Password updated successfully!";
    statusMessage.style.color = "lightgreen";
  }
  */

  console.log("Update password:", password);
});
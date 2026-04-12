document.getElementById("signup-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await window.supabaseClient.auth.signUp({
    email,
    password,
  });

  console.log(data, error);

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful!");
  }
});
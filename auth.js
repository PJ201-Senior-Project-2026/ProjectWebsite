let isLogin = true;

const title = document.getElementById("form-title");
const toggle = document.getElementById("toggle-mode");
const toggleText = document.getElementById("toggle-text");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

// Toggle between login/signup UI
toggle.addEventListener("click", () => {
  isLogin = !isLogin;

  if (isLogin) {
    title.textContent = "Login";
    toggleText.innerHTML = `Don't have an account? <span id="toggle-mode">Sign up</span>`;
  } else {
    title.textContent = "Sign Up";
    toggleText.innerHTML = `Already have an account? <span id="toggle-mode">Login</span>`;
  }

  // Re-bind toggle after innerHTML change
  document.getElementById("toggle-mode").addEventListener("click", arguments.callee);
});

// Login
loginBtn.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 🔵 SUPABASE LOGIN PLACEHOLDER
  /*
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Login successful!");
  }
  */

  console.log("Login clicked:", username, password);
});

// Signup
signupBtn.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 🔵 SUPABASE SIGNUP PLACEHOLDER
  /*
  const { data, error } = await supabase.auth.signUp({
    email: username,
    password: password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful!");
  }
  */

  console.log("Signup clicked:", username, password);
});
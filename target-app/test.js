
console.log("Login script loaded");
const SUPABASE_URL = 'https://uoymhbrqfgobfojwoxrq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_m-9nszEZuYvgMb-CoC4m_g_DBJUYxAi';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth state changed", event, session);
  if (session && session.user) {
    window.location.href = 'index.html';
  }
});

async function signUpWithEmail() {
  console.log("signUpWithEmail called");
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  if (!email || !password) {
    console.log("Missing email or password");
    return alert('Enter email and password');
  }
  const { data, error } = await supabase.auth.signUp({ email, password });
  console.log("Sign up result", { data, error });
  if (error) alert(error.message);
  else alert('Check your email for the confirmation link.');
}

async function signInWithEmail() {
  console.log("signInWithEmail called");
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  if (!email || !password) {
    console.log("Missing email or password");
    return alert('Enter email and password');
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  console.log("Sign in result", { data, error });
  if (error) alert(error.message);
}

async function signInWithMagicLink() {
  console.log("signInWithMagicLink called");
  const email = document.getElementById('auth-email').value;
  if (!email) {
    console.log("Missing email");
    return alert('Enter email');
  }
  const { data, error } = await supabase.auth.signInWithOtp({ email });
  console.log("Magic link result", { data, error });
  if (error) alert(error.message);
  else alert('Magic link sent to your email.');
}

async function signInWithGoogle() {
  console.log("signInWithGoogle called");
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
  console.log("Google sign in result", { data, error });
  if (error) alert(error.message);
}

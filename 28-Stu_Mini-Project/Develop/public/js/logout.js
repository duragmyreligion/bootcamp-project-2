const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // Make a POST req to destroy the session on the back end
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // When successfully logged out, redirects to login page.
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);

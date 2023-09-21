const registerUser = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (userName && email && password){
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ name:userName, email, password}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorMessage = await response.json(); // Get the error message as JSONs
        console.error(`HTTP Error: ${response.status} - ${errorMessage.message}`);
        alert(`HTTP Error: ${response.status} - ${errorMessage.message}`);
      }
    }
  };

  document
  .querySelector('.register-form')
  .addEventListener('submit', registerUser);

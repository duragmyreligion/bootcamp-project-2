const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#forum-title').value.trim();
    const name = document.querySelector('#forum-game').value.trim();
    const description = document.querySelector('#forum-desc').value.trim();

    if (title && name && description) {
      const response = await fetch('/api/forums/', {
        method: 'POST',
        body: JSON.stringify({title, name, description}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create forum post');
      }
    }
  };

  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/forums/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };

document
    .querySelector('.new-forum-form')
    .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.del-forum-post')
//     .addEventListener('click', delButtonHandler);
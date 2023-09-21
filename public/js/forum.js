const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#forum-title').value.trim();
    const gameName = document.querySelector('#forum-game').value.trim();
    const description = document.querySelector('#forum-desc').value.trim();
    if (title && gameName && description) {
      const response = await fetch(`/api/forum/`, {
        method: 'POST',
        body: JSON.stringify({ title, name:gameName, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/blog_new_post');
      } else {
        alert('Failed to create forum post');
      }
    }
  };
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  document
    .querySelector('.new-forum-form')
    .addEventListener('submit', newFormHandler);
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
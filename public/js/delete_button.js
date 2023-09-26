const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/forums/4`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/`);
      } else {
        alert('Failed to delete project');
      }
    }
  };

document
    .querySelector('.del-forum-post')
    .addEventListener('click', delButtonHandler);
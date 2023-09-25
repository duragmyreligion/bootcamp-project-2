const newCommentHandler = async (event) => {
    event.preventDefault();
    const comments = document.querySelector('forum-comments').value.trim();

    if (comments) {
      const response = await fetch('/api/forums/', {
        method: 'POST',
        body: JSON.stringify({comments}),
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

  

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
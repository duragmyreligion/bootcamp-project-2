const newCommentHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#forum-comment').value.trim();

    
    if (comment) {
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/blog_post/${commentId}');
      } else {
        alert('Failed to create forum post');
      }
    }
  };

  

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM Loaded');
  }

  const changeDevourBtns = document.querySelectorAll('.status-devour');

  if (changeDevourBtns) {
    changeDevourBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newDevour = e.target.getAttribute('data-newdevour');

        const newDevourStatus = {
          devoured: newDevour,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(newDevourStatus),
        }).then((response) => {
          // Empty the form
          if (response.ok) {
            console.log(`Status Updated: ${newDevour}`);
            location.reload("/");
          } else {
            alert('Could not update devour status')
            console.log(response)
          }
        });
      });
    });
  }
  const createBurgerBtn = document.getElementById('start-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        burger_name: document.getElementById('brgr').value.trim(),
        devoured: document.getElementById('devoured').checked,
      };

      // Send POST request to create a new quote
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('brgr').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new burger!');
        location.reload();
      });
    });
  }

  const deleteBurgerBtns = document.querySelectorAll('.delete-burger');

  // Set up the event listeners for each delete button
  deleteBurgerBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});

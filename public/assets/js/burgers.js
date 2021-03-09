document.addEventListener("DOMContentLoaded",(event) => {
  if (event) {
    console.info("DOM Loaded");
  }

  const changeDevourBtns = document.querySelectorAll(".status-devour");
  if (changeDevourBtns) {
    changeDevourBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newDevour= e.target.getAttribute('data-newdevour');

    const newDevourStatus = {
      devoured: newDevour,
    };

    fetch(`/api/burgers/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },


      body: JSON.stringify(newCat),
    }).then(() => {
      // Empty the form
      document.getElementById('ca').value = '';

      // Reload the page so the user can see the new quote
      console.log('Created a new cat!');
      location.reload();
    });
  });


      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(() => {
        console.log('New burger created!');

        location.reload();

      });
      }
    });

    $('.delete-burger').on('click', (event) => {
      const id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
        type: 'DELETE',
        }).then(() => {
        console.log('Burger deleted', id);

        location.reload();
        });
      })
    });

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

    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: newDevourStatus,
    }).then(() => {
      console.log('devoured is now: ', newDevour);

      location.reload();
    });
  });

    $('start-form').on('submit', (event) =>{
      event.preventDefault();

      const burgerVal = $('#brgr')
      .val()
      .trim();
    if (burgerVal) {
      const newBurger = {
        burger_name: $('#brgr')
        .val()
        .trim(),
        devoured: 0,
      };

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

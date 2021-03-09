document.addEventListener("DOMContentLoaded",(event) => {
  if (event) {
    console.log("DOM Loaded");
  }

  $('.status-devour').on('click', (event) => {
    event.preventDefault();
    const id = $(this).data('id');
    const newDevour = $(this).data('newdevour');

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

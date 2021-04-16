document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const changeDevourBtns = document.querySelectorAll(".change-devour");

  if (changeDevourBtns) {
    changeDevourBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        const newDevoured = e.target.getAttribute("data-newdevour");

        const newDevouredStatus = {
          devour: newDevoured,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newDevouredStatus),
        }).then((response) => {

          if (response.ok) {
            console.log(`New devoured status: ${newDevoured}`);
            location.reload("/");
          } else {
            alert("ERROR!");
          }
        });
      });
    });
  }

  // CREATE
  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById("brgr").value.trim(),
        devoured: document.getElementById("d-list").checked,
      };

      // Send POST request to create a new quote
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById("brgr").value = "";

        // Reload the page so the user can see the new quote
        console.log("New burger added!");
        location.reload();
      });
    });
  }

  const deleteBurgerBtns = document.querySelectorAll(".delete-burger");

  deleteBurgerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      fetch(`/api/burgers/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        location.reload();
      });
    });
  });
});
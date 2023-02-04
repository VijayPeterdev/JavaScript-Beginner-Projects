(function () {
  const button = document.querySelectorAll(".item");

  //    console.log(button);

  const Image = document.querySelectorAll(".wrapper");

  button.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const filter = e.target.dataset.filter;

      Image.forEach((item) => {
        if (filter === "all") {
          return (item.style.display = "block");
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          } 
        }
      });
    });
  });
})();

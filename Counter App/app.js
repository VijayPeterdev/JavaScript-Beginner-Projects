(function () {
  const add = document.querySelectorAll(".button");
  let count = 0;

  console.log(add);

  add.forEach((button, i) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("add")) {
        count++;
      } else if (button.classList.contains("remove")) {
        count--;
      }

      const countViewer = document.querySelector(".countview");

      countViewer.textContent = count;
     
    });
  });
})();

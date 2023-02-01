const form = document.querySelector("#message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.querySelector("#inputmessage");
  const warning = document.querySelector("#warning");
  let messageDisplay = document.querySelector(".message");

  if (message.value === "") {
    warning.classList.add("show");
    setTimeout(() => {
      warning.classList.remove("show");
    }, 2000);
  } else if (message.value === "vijay") {
    warning.classList.add("show");
    warning.classList.add("success");

    warning.innerHTML = "Coupon Apply Successfully";

    setTimeout(() => {
      warning.classList.remove("show");

      warning.classList.remove("success");
      warning.innerHTML = "Please Enter Message Empty Message not Send";
    }, 2000);
  } else {
    messageDisplay.innerHTML = message.value;
    message.value = "";
  }
});

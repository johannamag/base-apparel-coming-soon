const form = document.querySelector(".form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailValue = email.value;
  if (isValid(emailValue)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
});

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

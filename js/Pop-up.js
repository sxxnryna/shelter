document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("closeButton");

  function openPopup() {
    console.log("Попап открывается");
    popup.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    console.log("Попап закрывается");
    popup.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(".petCard")) {
      openPopup();
    }
    if (target.classList.contains("LearnMoreButton")) {
      event.stopPropagation();
      openPopup();
    }
  });

  //closure control
  closeButton.addEventListener("click", closePopup);

  overlay.addEventListener("click", closePopup);

  popup.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const closeButton = document.querySelector("button.closePopup")
const popup = document.getElementById("popup");
const onMouseOut = ((event) => {
  document.removeEventListener("mouseleave", onMouseOut)
  popup.classList.remove("hidden")
})

document.addEventListener("mouseleave", onMouseOut)

closeButton.addEventListener("click", () =>{
  popup.classList.add("hidden")
})

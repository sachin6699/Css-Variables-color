const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (event) => {
  console.log(event.target.value);
};

// function handleUpdate() {
//   console.log(this.value);
// }

// const handleUpdate = ({ target }) => {
//   const { value } = target;
//   console.log(value);
// };  // cool stuff

inputs.forEach((input) => input.addEventListener("change", handleUpdate));

const wrapper = document.querySelector(".wrapper");

function changeBackground(number) {
  if (!wrapper.classList.contains(`background-${number}`)) {
    wrapper.classList.remove(`background-1`);
    wrapper.classList.remove(`background-2`);
    wrapper.classList.remove(`background-3`);
    wrapper.classList.add(`background-${number}`);
  } else {
    wrapper.classList.remove(`background-1`);
    wrapper.classList.remove(`background-2`);
    wrapper.classList.remove(`background-3`);
  }
  //   console.log(wrapper.classList.toString());
}

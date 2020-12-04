
const feedbackChecker = document.getElementById("feedback-checker");
const nextStepper = document.getElementById("next-stepper");

console.log(feedbackChecker)



function hide(el) {
  console.log("hiding...")
  console.log(el)
  el.classList.add("hidden");
}

function show(el) {
  el.classList.remove("hidden");
}

function checkerClicked(isChecked) {
  if (isChecked) {
    show(nextStepper);
    hide(feedbackChecker); // 
  } else {
    hide(nextStepper);
  }
}

hide(nextStepper);

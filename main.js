//  all button for the calculator
const allButtons = document.querySelectorAll('input[type="button"]');

// the input text is contain the result
const result = document.getElementById("result");

//  to delete the last number in the input text
function deleteLastNumber(resultValue) {
  let newResultValue = resultValue.split("");
  newResultValue.pop();

  //  transform the result value from string to array for delete the last element
  return (result.value = newResultValue.join(""));
}

//  get all buttons

allButtons.forEach((button) => {
  button.addEventListener("click", ({ target }) => {
    if (target.value == "ac") {
      result.value = "";
    } else if (target.value == "De") {
      deleteLastNumber(result.value);
      //   -----------------------------------

      //  this another way to delete the last element
      //   result.value=result.value.slice(0,-1)
      //   -----------------------------------
    } else if (target.value == "=") {
      result.value = eval(result.value);
    } else {
      result.value += target.value;
    }
  });
});

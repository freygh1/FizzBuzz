//PseudoCode

/**
 * 1. The user needs to insert a number. That number need to be
 *    greater than zero and equal or less than one hundred.
 * 2. To show the results, the user needs to press the buttom "play".
 * 3. When the buttom would be pressed, the screen should show the results.
 * 4. The results should be an amount of numbers between 1 and the number that the
 *    user entered in the input. The numbers that are divisible by 3, need to be
 *    replace by "Fizz" and the numbers that are divisible by 5, need to be
 *    replace by "Buzz".
 **/

// accessing to the elements

const inputValue = document.getElementById('input-value')
const btn = document.getElementById('btn')
const resultsCtn = document.getElementById('results-ctn')
const btnReset = document.getElementById('btn-reset')

// Functions

const creatingListElement = (value) => {
  return resultsCtn.innerHTML += `<li class="number">${value}</li>`
}

const showResults = () => {

  for (let i = 1; i <= inputValue.value; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      creatingListElement("FizzBuzz")
    } else if (i % 3 === 0) {
      creatingListElement("Fizz")
    } else if (i % 5 === 0) {
      creatingListElement("Buzz")
    } else {
      creatingListElement(i)
    }
  }
}

const verifyMinMax = () => {
  if (!inputValue.value) {
    return alert("Insert something, dude!")
  }
  else if (inputValue.value < 0 || inputValue.value > 100) {
    return alert("The value need to be > 0 and <= 100")
  }
  else {
    showResults()
  }
}

const cleaningResults = () => {
  resultsCtn.innerHTML = ''
}

const cleaningValue = () => {
  inputValue.value = ''
}

btn.addEventListener('click', () => {
  cleaningResults()
  verifyMinMax()
  cleaningValue()
})

btnReset.addEventListener('click', cleaningResults)

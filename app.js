function setDigits(digitNumber) {
  let $container = document.getElementById('numbersContainer');

  for (let digit = 1; digit <= digitNumber; digit++) {
    let $digit = document.createElement('div');
    for (let number = 0; number <= 9; number++) {
      let $number = document.createElement('div');
      $number.classList.add('number');
      $number.classList.add(number);
      $number.textContent = number;
      $digit.appendChild($number);
    }
    $digit.classList.add('digit');
    $container.appendChild($digit);
  }
}

setDigits(5);

function setNumber(number) {
  console.log(number);
  let parsedNumber = number.toString().split('');
  let $digits = document.querySelectorAll('.digit');
  parsedNumber.forEach((number, index) => {
    let $digit = $digits[index];
    let $number = $digit.getElementsByClassName(number)[0];
    let digitRect = $digit.getBoundingClientRect();
    let numberRect = $number.getBoundingClientRect();
    console.log($number, numberRect.top, digitRect.top);

    $digit.scrollTo({
      top: numberRect.top - digitRect.top,
      behavior: 'smooth',
    });
  });
}

document
  .getElementById('numbersContainer')
  .addEventListener('click', () => setNumber(randInt(11111, 99999)));

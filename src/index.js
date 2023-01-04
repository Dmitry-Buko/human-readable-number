module.exports = function toReadable (number) {
    number = String(number);
    let index = number.split('',);

  let decade = [
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let unit = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelwe',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
  ]

if (number < 20) {
    return unit[number - 1]
}

if (number >= 20 && number < 100 && number % 10 == 0) {
    return decade[(number / 10) - 1]
}

if (number >= 20 && number < 100 && number % 10 != 0) {
    return decade[Math.floor(number / 10) - 1] + ' ' + unit[number.at(-1) - 1]
}

/* Не рабочая часть, слишком много переменных для точного результат */
/*if (number >= 100 && number <= 1000 && number % 100 == 0) {
    return unit[(number / 100) - 1] + ' ' + 'hundred'
}
if (number >= 100 & number <= 500 && number % 100 != 0) {
    return unit[Math.floor(number / 100) - 1] + ' ' + 'hundred' + ' ' + decade[Math.floor(number / 100 - 1)] + ' ' + unit[Math.floor(number.at(-1) - 1)];
} */

if (number.length == 3 && number.at(-1) != '0') {
    return unit[index[0] - 1] + ' ' + 'hundred' + ' ' + decade[index[1] - 1] + ' ' + unit[index[2] - 1]
  }

}
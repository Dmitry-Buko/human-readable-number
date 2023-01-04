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
]

    let tens = [
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    ]

if (number == '0') {
    return 'zero'
}

if (number <= 10) {
    return unit[number - 1]
}

if (number > 10 && number < 20) {
    return tens[number - 11]
}

if (number >= 20 && number < 100 && number % 10 == 0) {
    return decade[(number / 10) - 1]
}

if (number >= 20 && number < 100 && number % 10 != 0) {
    return decade[Math.floor(number / 10) - 1] + ' ' + unit[number.at(-1) - 1]
}

if (number.length == 3 && number.at(-1) != '0' && number.at(1) != '0' && number.at(1) != '1') {
    return unit[index[0] - 1] + ' ' + 'hundred' + ' ' + decade[index[1] - 1] + ' ' + unit[index[2] - 1]
  }

  if (number.length == 3  &&  number.at(-1) == '0'  &&  number.at(1) != '0') {
    return unit[index[0] - 1] + ' ' + 'hundred' + ' ' + decade[index[1] - 1]
  }

  if (number.length == 3  &&  number.at(-1) == '0'  &&  number.at(1) == '0') {
    return unit[index[0] - 1] + ' ' + 'hundred'
  }

  if (number.length == 3  &&  number.at(1) == '0') {
    return unit[index[0] - 1] + ' ' + 'hundred' + ' ' + unit[index[2] - 1]
  }

  if (number.length == 3  &&  number.at(-1) != '0'  &&  number.at(1) == '1') {
    return unit[index[0] - 1] + ' ' + 'hundred' + ' ' + tens[index[2] - 1]
  }
}
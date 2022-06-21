module.exports = function toReadable(number) {
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (!number) return numbers[0];

    const result = [];
    const hundreds = Math.floor(number / 100);
    const dozens = number % 100;

    if (hundreds) {
        result.push(`${numbers[hundreds]} hundred`)
    }

    if (dozens > 20) {
        result.push(numbers[Math.floor(dozens / 10) * 10])
        dozens % 10 ? result.push(numbers[dozens % 10]) : null;
    } else if (dozens) {
        result.push(numbers[dozens]);
    }

    return result.join(' ');
}

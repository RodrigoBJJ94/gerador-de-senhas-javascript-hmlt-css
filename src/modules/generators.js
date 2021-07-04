const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapital = () => String.fromCharCode(rand(65, 91));
const generateTiny = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbol = ',.;/~]´[<>:?^}`{=+-_)(*&¨%$#@!"';
const generateSymbol = () => symbol[rand(0, symbol.length)];

export default function genereratePassword(amount, capital, tiny, number, symbol) {
    const passwordArray = [];
    amount = Number(amount);
    for (let i = 0; i < amount; i++) {
        capital && passwordArray.push(generateCapital());
        tiny && passwordArray.push(generateTiny());
        number && passwordArray.push(generateNumber());
        symbol && passwordArray.push(generateSymbol());
    }
    return passwordArray.join('').slice(0, amount);
}


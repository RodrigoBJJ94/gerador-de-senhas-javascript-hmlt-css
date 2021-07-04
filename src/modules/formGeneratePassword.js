import generatePassword from "./generators";

const generatedPassword = document.querySelector('.generated-password');
const amountCharacters = document.querySelector('.amount-characters');
const checkboxCapital = document.querySelector('.checkbox-capital');
const checkboxTiny = document.querySelector('.checkbox-tiny');
const checkboxNumber = document.querySelector('.checkbox-number');
const checkboxSymbol = document.querySelector('.checkbox-symbol');
const generateThePassword = document.querySelector('.generate-password');

export default () => {
    generateThePassword.addEventListener('click', () => {
        generatedPassword.innerHTML = generate();
    });
};
function generate() {
    const password = generatePassword(amountCharacters.value, checkboxCapital.checked, checkboxTiny.checked, checkboxNumber.checked, checkboxSymbol.checked);
    return password || 'Nada selecionado!'.fontcolor('red');
}
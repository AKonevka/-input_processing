const phone = document.getElementById('phone');

phone.addEventListener('keydown', function (event) {
    // Вывод в консоль нажатый на клаывиатуре символ
    console.log(event.key);

    // Объявление переменной (флага)
    let isDigit = false;

    // Проверка ввода символов и клавиш управления курсором он
    if (event.key >= 0 && event.key <= 9 || event.key == '-' ||
        event.key == 'Backspace' || event.key == 'ArrowLeft' ||
        event.key == 'ArrowRight') {
        isDigit = true;
    }

    // Если нажата не цифра, не тире, и не клавиши управления курсором или Backspace то отменить ввод 
    if (!isDigit) {
        event.preventDefault();
    }
    console.log(event.preventDefault);
})
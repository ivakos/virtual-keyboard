const currentLocal = "en";
const layout = [
  [createKey(192, '`', '~', 'ё', 'Ё'), createKey(49, 1, '!', 1, '!'), createKey(50, 2, '@', 2, '@'), createKey(51, 3, '#', 3, '#'), createKey(52, 4, '$', 4, '$'), createKey(53, 5, '%', 5, '%'), createKey(54, 6, '^', 6, '^'), createKey(55, 7, '&', 7, '&'), createKey(56, 8, '*', 8, '*'), createKey(57, 9, '(', 9, '('), createKey(48, 0, ')', 0, ')'), createKey(189, '-', '_', '-', '_'), createKey(187, '=', '+', '=', '+'), createKey(8, 'Backspace', 'Backspace', 'Backspace', 'Backspace')],
  [createKey(9, 'Tab', 'Tab', 'Tab', 'Tab'), createKey(81, 'q', 'Q', 'й', 'Й'), createKey(87, 'w', 'W', 'ц', 'Ц'), createKey(69, 'e', 'E', 'у', 'У'), createKey(82, 'r', 'R', 'к', 'К'), createKey(84, 't', 'T', 'е', 'Е'), createKey(89, 'y', 'Y', 'н', 'Н'), createKey(85, 'u', 'U', 'г', 'Г'), createKey(73, 'i', 'I', 'ш', 'Ш'), createKey(79, 'o', 'O', 'щ', 'Щ'), createKey(80, 'p', 'P', 'з', 'З'), createKey(219, '[', '{', 'х', 'Х'), createKey(221, ']', '}', 'ъ', 'Ъ'), createKey(220, '\\', '|', '\\', '/'), createKey(46, 'del', 'del', 'del', 'del')],
  [createKey(20, 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'), createKey(65, 'a', 'A', 'ф', 'Ф'), createKey(83, 's', 'S', 'ы', 'Ы'), createKey(68, 'd', 'D', 'в', 'В'), createKey(70, 'f', 'F', 'а', 'А'), createKey(71, 'g', 'G', 'п', 'П'), createKey(72, 'h', 'H', 'р', 'Р'), createKey(74, 'j', 'J', 'о', 'О'), createKey(75, 'k', 'K', 'л', 'Л'), createKey(76, 'l', 'L', 'д', 'Д'), createKey(186, ';', ':', 'ж', 'Ж'), createKey(222, "'", '"', 'э', 'Э'), createKey(13, 'Enter', 'Enter', 'Enter', 'Enter')],
  [createKey(16, "Shift", 'Shift', "Shift", 'Shift'), createKey(90, 'z', 'Z', 'я', 'Я'), createKey(88, 'x', 'X', 'ч', 'Ч'), createKey(67, 'c', 'C', 'с', 'С'), createKey(86, 'v', 'V', 'м', 'М'), createKey(66, 'b', 'B', 'и', 'И'), createKey(78, 'n', 'N', 'т', 'Т'), createKey(77, 'm', 'M', 'ь', 'Ь'), createKey(188, ',', '<', 'б', 'Б'), createKey(190, '.', '>', 'ю', 'Ю'), createKey(191, '/', '?', '.', ','), createKey(16, 'Shift', 'Shift', 'Shift', 'Shift'), createKey(38, '↑', '↑', '↑', '↑')],
  [createKey(17, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'), createKey(91, 'Win', 'Win', 'Win', 'Win'), createKey(18, 'Alt', 'Alt', 'Alt', 'Alt'), createKey(32, '', '', '', ''), createKey(18, 'Alt', 'Alt', 'Alt', 'Alt'), createKey(17, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'), createKey(37, '←', '←', '←', '←'), createKey(40, '↓', '↓', '↓', '↓'), createKey(39, '→', '→', '→', '→')]
]

function createKey(keyCode, enValue, enSymbol, ruValue, ruSymbol) {
  return {
    code: keyCode,
    en: enValue,
    enSymbol: enSymbol,
    ru: ruValue,
    ruSymbol: ruSymbol,
  }
}

const body = document.body;
const wrapper = document.createElement('div');
wrapper.className = "wrapper";
body.append(wrapper);

const textAreaField = document.createElement('textarea');
textAreaField.className = "textAreaField";
textAreaField.setAttribute("autofocus", "autofocus");
wrapper.append(textAreaField);

const keyboard = document.createElement('div');
keyboard.className = "keyboard";
wrapper.append(keyboard);

for (let i = 0; i < layout.length; i++) {
  const row = document.createElement('div');
  row.className = "row";
  keyboard.append(row);

  for (let k = 0; k < layout[i].length; k++) {
    const keyWrapper = document.createElement('div');
    keyWrapper.className = "key-wrapper";
    row.append(keyWrapper);

    const key = document.createElement('p');
    const letter = layout[i][k];
    key.className = "key";

    keyWrapper.onclick = (event) => {
      if (event.target || event.target.firstElementChild) {
        const textArea = document.getElementsByClassName("textAreaField")[0];
        // textArea.value = textArea.value + event.target.firstElementChild.innerHTML;
        console.log(event.target);
      }
    }

    key.innerHTML = letter[currentLocal];
    key.id = letter.code;

    if ((i == 0 && (k == 0 || k == 13)) ||
      (i == 1 && (k == 0 || k == 14)) ||
      (i == 2 && (k == 0 || k == 12)) ||
      (i == 3 && (k == 0 || k == 11 || k == 12)) ||
      (i == 4 && (k != 3))) {
      keyWrapper.classList.add('key-special');
    }

    keyWrapper.append(key);
    layout[i][k] = keyWrapper;
  }
}

layout[0][13].classList.add('backspace');

layout[1][0].classList.add('tab');
layout[1][14].classList.add('delete');

layout[2][0].classList.add('caps-lock');
layout[2][12].classList.add('enter');

layout[3][0].classList.add('shift');

layout[4][0].classList.add('ctrl');
layout[4][3].classList.add('space');
layout[4][5].classList.add('ctrl');

const description = document.createElement('div');
description.className = "description";
description.innerHTML = "Keyboard was created for Windows. <br>Shift + Alt to switch language."
wrapper.append(description);

// ----------------------------- SWITCH THEME
const switchTheme = document.createElement('div');
switchTheme.className = "switch-theme";
wrapper.append(switchTheme);

const keysWrapper = document.querySelectorAll('.key-wrapper');
const keys = document.querySelectorAll('.key');
const lightTheme = [body, textAreaField, keyboard, description];
switchTheme.addEventListener('click', () => {
  switchTheme.classList.toggle('active')
  lightTheme.forEach((element) => element.classList.toggle('dark'));
  keys.forEach((element) => element.classList.toggle('dark'));
})
// -----------------------------END SWITCH THEME

const functionalKeys = [16];

addEventListener("keydown", (event) => {
  document.getElementById(event.keyCode).parentNode.classList.add("click");
  if (document.activeElement.classList[0] !== "textAreaField" && !functionalKeys.includes(event.keyCode)) {
    const textArea = document.getElementsByClassName("textAreaField")[0];
    textArea.value = textArea.value + event.key;
  }
  if (event.keyCode === 16) {

  }

});

addEventListener("keyup", (event) => {
  setTimeout(() => {
    document.getElementById(event.keyCode).parentNode.classList.remove("click");
    if (event.keyCode === 16) {
      document.getElementById("49").innerHTML = "1";
    }
  }
    , 100)
});


function createKey(keyCode, enValue, ruValue, enSymbol, ruSymbol) {
  return {
    code: keyCode,
    en: enValue,
    enSymbol: enSymbol,
    ru: ruValue,
    ruSymbol: ruSymbol,
  }
}

const layout = [
  [createKey(192, '`', '~', 'ё', 'Ё'), createKey(49, 1, 1, "!"), createKey(50, 2, 2), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!"), createKey(49, 1, 1, "!")],
  ["", createKey(81, 'q', 'й'), "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", ""],
  [createKey(16, "shift", 'shift'), "", "", "", "", "", "", "", "", "", "", "", "", ""],
  [createKey(17, 'ctrl', 'ctrl'), "", "", "", "", "", "", "", ""]
]

function createlayoutKeyboard() {
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
  const currentLocal = "en";

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

      key.onclick = (event) => {
        const textArea = document.getElementsByClassName("textAreaField")[0];
        textArea.value = textArea.value + event.target.innerHTML;
      }

      key.innerHTML = letter[currentLocal];
      key.id = letter.code;

      if ((i == 0 && (k == 0 || k == 13)) ||
        (i == 1 && (k == 0 || k == 14)) ||
        (i == 2 && (k == 0 || k == 12)) ||
        (i == 3 && (k == 0 || k == 12 || k == 13)) ||
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
}

export { createlayoutKeyboard }

const empty = [
  [[], [], [], [], [], [], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], [], []]
]

function createEmptyKeyboard() {
  const wrapper = document.createElement('div');
  wrapper.className = "wrapper";
  document.body.append(wrapper);

  const textAreaField = document.createElement('textarea');
  textAreaField.className = "textAreaField";
  wrapper.append(textAreaField);

  const keyboard = document.createElement('div');
  keyboard.className = "keyboard";
  wrapper.append(keyboard);

  const description = document.createElement('div');
  description.className = "description";
  description.innerHTML = "Keyboard was created for Windows. <br>Shift + Alt to switch language."
  wrapper.append(description);

  for (let i = 0; i < empty.length; i++) {
    const row = document.createElement('div');
    row.className = "row";
    keyboard.append(row);

    for (let k = 0; k < empty[i].length; k++) {
      const key = document.createElement('div');
      key.className = "key";
      if ((i == 0 && (k == 0 || k == 13)) ||
        (i == 1 && (k == 0 || k == 14)) ||
        (i == 2 && (k == 0 || k == 12)) ||
        (i == 3 && (k == 0 || k == 12 || k == 13)) ||
        (i == 4 && (k !=3 ))){
          key.classList.add('key-special');
        }
        row.append(key);
      empty[i][k] = key;
    }
  }

  empty[0][13].classList.add('backspace');

  empty[1][0].classList.add('tab');
  empty[1][14].classList.add('delete');

  empty[2][0].classList.add('caps-lock');
  empty[2][12].classList.add('enter');

  empty[3][0].classList.add('shift');

  empty[4][0].classList.add('ctrl');
  empty[4][3].classList.add('space');
  empty[4][5].classList.add('ctrl');
}

export {createEmptyKeyboard}
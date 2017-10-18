const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let codeIndex = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.keyCode || e.which || e.detail);

    if (code[codeIndex] === key) {
      codeIndex++
      if (codeIndex === code.length) {
        alert("Hurray!");
        codeIndex = 0;
      }
    } else {
      codeIndex = 0;
    }
  });

}

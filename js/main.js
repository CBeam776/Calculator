function toScreen(val) {
  document.getElementById('display').value += val;

  if (val === "c") {
    document.getElementById('display').value = "";
  }
}

function answer() {
  val = document.getElementById('display').value;
  val = eval(val);
  document.getElementById('display').value = val;
}

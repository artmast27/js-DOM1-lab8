const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

const btnAdd = document.getElementById("add");
const btnSub = document.getElementById("sub");
const btnMul = document.getElementById("mul");
const btnDiv = document.getElementById("div");

function showError(message) {
  errorEl.textContent = message;
  resultEl.textContent = "—";
}

function clearError() {
  errorEl.textContent = "";
}

function getNumbers() {
  const v1 = num1Input.value.trim();
  const v2 = num2Input.value.trim();

  if (v1 === "" || v2 === "") {
    showError("Введіть числа в обидва поля.");
    return null;
  }

  const a = Number(v1);
  const b = Number(v2);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    showError("Введені некоректні дані. Потрібні числа.");
    return null;
  }

  clearError();
  return { a, b };
}

function displayResult(value) {
  // округляємо до сотих, якщо є дробна частина
  const rounded = Math.round(value * 100) / 100;
  resultEl.textContent = rounded;
}

btnAdd.addEventListener("click", () => {
  const nums = getNumbers();
  if (!nums) return;
  const { a, b } = nums;
  displayResult(a + b);
});

btnSub.addEventListener("click", () => {
  const nums = getNumbers();
  if (!nums) return;
  const { a, b } = nums;
  displayResult(a - b);
});

btnMul.addEventListener("click", () => {
  const nums = getNumbers();
  if (!nums) return;
  const { a, b } = nums;
  displayResult(a * b);
});

btnDiv.addEventListener("click", () => {
  const nums = getNumbers();
  if (!nums) return;
  const { a, b } = nums;

  if (b === 0) {
    showError("На нуль ділити не можна.");
    return;
  }

  displayResult(a / b);
});

document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");
  const button = document.getElementById("incrementBtn");

  button.addEventListener("click", () => {
    const currentValue = parseInt(counterElement.textContent);
    alert(currentValue);
    counterElement.textContent = currentValue + 1;
  });
});

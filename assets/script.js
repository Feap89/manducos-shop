// -----------------------------
// Control independiente de productos
// -----------------------------
const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {
  const price = parseInt(producto.querySelector(".price").textContent);
  let quantityValue = parseInt(producto.querySelector(".quantity").textContent);
  const total = producto.querySelector(".total");
  const btnPlus = producto.querySelector(".btn-plus");
  const btnMinus = producto.querySelector(".btn-minus");

  // Función para actualizar el total con formato
  function updateTotal() {
    total.textContent = (price * quantityValue).toLocaleString("es-CL");
    total.style.transition = "transform 0.2s";
    total.style.transform = "scale(1.2)";
    setTimeout(() => total.style.transform = "scale(1)", 200);
  }

  // Botón +
  btnPlus.addEventListener("click", () => {
    quantityValue++;
    producto.querySelector(".quantity").textContent = quantityValue;
    updateTotal();
  });

  // Botón -
  btnMinus.addEventListener("click", () => {
    if (quantityValue > 1) {
      quantityValue--;
      producto.querySelector(".quantity").textContent = quantityValue;
      updateTotal();
    }
  });
});

// -----------------------------
// Validación de correo en suscripción
// -----------------------------
const emailInput = document.getElementById("email");
const confirmEmailInput = document.getElementById("confirmEmail");
const emailMessage = document.getElementById("emailMessage");
const confirmMessage = document.getElementById("confirmMessage");
const form = document.getElementById("suscripcionForm");
const successMessage = document.getElementById("successMessage");

if (emailInput && confirmEmailInput) {
  // Validación formato
  emailInput.addEventListener("input", () => {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (regex.test(emailInput.value)) {
      emailMessage.textContent = "✅ Correo válido";
      emailMessage.style.color = "green";
    } else {
      emailMessage.textContent = "❌ Ingresa un correo válido";
      emailMessage.style.color = "red";
    }
  });

  // Validación coincidencia
  confirmEmailInput.addEventListener("input", () => {
    if (confirmEmailInput.value === emailInput.value) {
      confirmMessage.textContent = "✅ Los correos coinciden";
      confirmMessage.style.color = "green";
    } else {
      confirmMessage.textContent = "❌ Los correos no coinciden";
      confirmMessage.style.color = "red";
    }
  });

  // Mensaje de éxito al enviar
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput.value && confirmEmailInput.value === emailInput.value) {
      successMessage.textContent = "🎉 ¡Suscripción exitosa! Gracias por registrarte.";
      successMessage.style.color = "green";
    } else {
      successMessage.textContent = "⚠️ Verifica que los correos sean válidos y coincidan.";
      successMessage.style.color = "red";
    }
  });
}

// -----------------------------
// Modo oscuro
// -----------------------------
const toggleBtn = document.getElementById("toggle-theme");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Cambiar ícono dinámicamente
    const icon = toggleBtn.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
  });
}
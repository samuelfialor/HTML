document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const product = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const email = document.getElementById("email").value;

  if (!product || !quantity || !email) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate payment processing
  setTimeout(() => {
    document.getElementById("orderForm").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
  }, 1000);
});

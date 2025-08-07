function apply(job) {
  document.getElementById("confirmation").classList.remove("hidden");
  document.getElementById("jobTitle").textContent = `You applied for: ${job}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

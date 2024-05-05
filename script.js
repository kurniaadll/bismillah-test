document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    // Simpan preferensi mode gelap di localStorage jika diperlukan
  });

// Periksa jika mode gelap disimpan di localStorage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

// Tambahkan event listener untuk menyimpan preferensi mode gelap
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    // Simpan preferensi mode gelap di localStorage
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode")
    );
  });

document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".typedText", {
    strings: ["Developer", "Designer", "Creator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

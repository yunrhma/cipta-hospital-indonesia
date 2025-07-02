document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const nama = form.querySelector("#nama").value.trim();
    if (nama === "") {
      e.preventDefault();
      alert("Nama tidak boleh kosong.");
    }
  });
});

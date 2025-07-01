document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nama = form.querySelector("#nama").value;
      if (!nama) {
        e.preventDefault();
        alert("Nama tidak boleh kosong.");
      }
    });
  }
});

(function () {
  const yesBtn = document.querySelector(".val-heart--yes");
  const noBtn = document.querySelector(".val-heart--no");
  const dropYes = document.getElementById("val-drop-yes");
  const dropNo = document.getElementById("val-drop-no");

  let hideTimer = null;

  function showFor3s(card) {
    // hentikan timer lama
    if (hideTimer) clearTimeout(hideTimer);
    // sembunyikan keduanya dulu supaya tidak bertindihan
    dropYes.classList.remove("show");
    dropNo.classList.remove("show");

    // tampilkan yang dipilih
    card.classList.add("show");

    // auto-hide setelah 3 detik
    hideTimer = setTimeout(() => {
      card.classList.remove("show");
      hideTimer = null;
    }, 3000);
  }

  yesBtn.addEventListener("click", () => showFor3s(dropYes));
  noBtn.addEventListener("click", () => showFor3s(dropNo));
})();

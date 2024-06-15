const scrittaDaNascondere = document.getElementById("scrittaDaNascondere"); // prendi l'elemento da nascondere in base al suo ID //
scrittaDaNascondere.addEventListener("click", function () {
  // addEventListener indica che è in attesa di un evento, in questo caso il 'clik' //
  scrittaDaNascondere.classList.add("hidden"); // .classList.add aggiunge una classe //
});

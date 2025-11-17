function openMap() {
  const modal = document.getElementById("mapModal");
  const iframe = document.getElementById("mapFrame");

  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=82.9357,55.0084&z=13&l=map`;

  iframe.src = mapUrl;
  modal.style.display = "block";
}

function closeMap() {
  document.getElementById("mapModal").style.display = "none";
  document.getElementById("mapFrame").src = "about:blank";
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("mapModal");
  if (event.target === modal) {
    closeMap();
  }
});

function showInfo(cityKey) {
  const data = universityData[cityKey];
  if (!data) return;

  document.getElementById("uni-name").innerText = data.city;
  document.getElementById("uni-details").innerHTML = `
        <p>${data.details}</p>
        <hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">
        <strong>มหาวิทยาลัยแนะนำ:</strong>
        <ul style="margin-top: 10px; padding-left: 20px;">
            ${data.universities.map((uni) => `<li style="margin-bottom: 5px;">${uni}</li>`).join("")}
        </ul>
    `;

  document.querySelector(".map-wrapper").classList.add("active");

  if (window.innerWidth <= 768) {
    setTimeout(() => {
      document.getElementById("info-panel").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
  }
}

function closeInfo() {
  document.querySelector(".map-wrapper").classList.remove("active");
}

function initMap() {
  const mapContainer =
    document.querySelector(".map-content") ||
    document.querySelector(".map-container");

  for (const [key, data] of Object.entries(universityData)) {
    const pin = document.createElement("div");
    pin.className = "pin";
    pin.style.top = data.top;
    pin.style.left = data.left;
    pin.setAttribute("data-city", key);

    pin.addEventListener("click", function () {
      showInfo(key);
    });

    mapContainer.appendChild(pin);
  }

  if (window.innerWidth <= 768) {
    const container = document.querySelector(".map-container");
    const content = document.querySelector(".map-content");

    if (container && content) {
      const centerX = (content.offsetWidth - container.offsetWidth) / 2;
      const centerY = (content.offsetHeight - container.offsetHeight) / 2;

      container.scrollLeft = centerX;
      container.scrollTop = centerY;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initMap();
});
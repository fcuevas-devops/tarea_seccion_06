

const regionsList = document.querySelector("#regions-list");
const weatherTitle = document.querySelector("#weather-title");
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const minmax = document.querySelector("#minmax");
const summary = document.querySelector("#weather-summary");

function renderRegions() {
    regions.forEach((region, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "region-button";
        button.dataset.index = index;
        button.setAttribute("aria-pressed", index === 0 ? "true" : "false");

        button.innerHTML = `
            <span class="region-number">REGIÓN ${String(index + 1).padStart(2, "0")}</span>
            <span class="region-name">${region.name}</span>
        `;

        button.addEventListener("click", () => selectRegion(index));
        regionsList.appendChild(button);
    });
}

function selectRegion(index) {
    const region = regions[index];

    weatherTitle.textContent = `Región de ${region.name}`;
    temperature.textContent = region.temperature;
    condition.textContent = region.condition;
    humidity.textContent = region.humidity;
    wind.textContent = region.wind;
    minmax.textContent = region.minmax;
    summary.textContent = region.summary;

    weatherIcon.src = `assets/images/${region.icon}`;
    weatherIcon.alt = region.condition;

    document.querySelectorAll(".region-button").forEach((button, buttonIndex) => {
        const isActive = buttonIndex === index;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

//renderRegions();
//selectRegion(0);

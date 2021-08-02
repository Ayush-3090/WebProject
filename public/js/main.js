const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_value = document.getElementById("temp_real_value");
const datahide = document.querySelector(".middle_layer");

const getinfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "plz write the name before search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8ade95e60a63a6a70a1e58c8d05e2bb4`;
      const response = await fetch(url);

      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

      temp_real_value.innerText = arrData[0].main.temp;
      // temp_status.innerText = arrData[0].weather[0].main;

      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-rain' style='color:#04b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#eccc68;'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `plz enter the city properly `;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getinfo);

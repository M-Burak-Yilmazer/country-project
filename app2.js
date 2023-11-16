const searchInput = document.querySelector("#search");
const countrySelect = document.querySelector("#countryArea");
const countries = document.querySelector(".countries");

const getFetch = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      showCountryNames(data);
      getData(data);
    });
};
window.addEventListener("load", () => {
  getFetch();
});

function getData(data) {
  console.log(data);
  data.forEach((element) => {
    countries.innerHTML = `
    <div class="card shadow-lg" style="width: 22rem">
            <img src="${
              element.flags.png
            }" class="card-img-top shadow" alt="..." />
            <div >
              <h5 class="p-2 text-center">${element.name.common}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${
                  element.region
                }
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-landmark"></i>
                <span class="fw-bold"> Capitals:</span> ${element.capital}
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-comments"></i>
                <span class="fw-bold"> Languages:</span> ${Object.values(
                  element.languages
                )}
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-money-bill-wave"></i>
                <span class="fw-bold"> Currencies:</span> 
                 ${element.currencies[Object.keys(element.currencies)[0]].name},
                 ${
                   element.currencies[Object.keys(element.currencies)[0]].symbol
                 }
              </li>
              <li class="list-group-item">
              <i class="fa-solid fa-people-group"></i></i>
              <span class="fw-bold"> Population:</span> ${element.population.toLocaleString()}
            </li>
              <li class="list-group-item">
              <i class="fa-sharp fa-solid fa-road-barrier"></i>
              <span class="fw-bold"> Borders:</span>  ${element.borders || null}
            </li>
            </li>
            <li class="list-group-item">
              <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href="${
                element.maps.googleMaps
              }" target='_blank'> Go to google map</a> </li>
            </ul>
          </div>
    `;
  });
}

const showCountryNames = (data) => {
    data.sort((a,b)=>b.name.common-a.name.common)
  const option = document.createElement("option");
  option.textContent = "Select Country";
  countrySelect.appendChild(option);
  data.forEach((element) => {
    // console.log(element.name.common);
    const option = document.createElement("option");
    option.textContent = element.name.common;
    countrySelect.appendChild(option);
  });

  countrySelect.addEventListener("change", (e) => {
    const value = e.target.value;
    data
      .filter((element) => element.name.common == value)
      .forEach((element) => {
        console.log(element.flags.png);
        console.log(element);
        countries.innerHTML = `
    <div class="card shadow-lg" style="width: 22rem">
            <img src="${
              element.flags.png
            }" class="card-img-top shadow" alt="..." />
            <div >
              <h5 class="p-2 text-center">${element.name.common}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${
                  element.region
                }
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-landmark"></i>
                <span class="fw-bold"> Capitals:</span> ${element.capital}
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-comments"></i>
                <span class="fw-bold"> Languages:</span> ${Object.values(
                  element.languages
                )}
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-money-bill-wave"></i>
                <span class="fw-bold"> Currencies:</span> 
                 ${element.currencies[Object.keys(element.currencies)[0]].name},
                 ${
                   element.currencies[Object.keys(element.currencies)[0]].symbol
                 }
              </li>
              <li class="list-group-item">
              <i class="fa-solid fa-people-group"></i></i>
              <span class="fw-bold"> Population:</span> ${element.population.toLocaleString()}
            </li>
              <li class="list-group-item">
              <i class="fa-sharp fa-solid fa-road-barrier"></i>
              <span class="fw-bold"> Borders:</span>  ${element.borders || null}
            </li>
            </li>
            <li class="list-group-item">
              <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href="${
                element.maps.googleMaps
              }" target='_blank'> Go to google map</a> </li>
            </ul>
          </div>
    `;
      });
  });
};

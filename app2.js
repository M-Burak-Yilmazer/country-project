const searchInput = document.querySelector("#search");
const countrySelect = document.querySelector("#countryArea");
const countries = document.querySelector(".countries");

const getFetch = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      
      console.log(data);
      showCountryNames(data);
      getData(data);
    });
};
window.addEventListener("load", () => {
  getFetch();
});

function getData(data) {
  let country = data[227];

  countries.innerHTML = `
    <div class="card shadow-lg" style="width: 22rem">
            <img src="${
              country.flags.png
            }" class="card-img-top shadow" alt="..." />
            <div >
              <h5 class="p-2 text-center">${country.name.common}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${
                  country.region
                }
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-landmark"></i>
                <span class="fw-bold"> Capitals:</span> ${country.capital}
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-comments"></i>
                <span class="fw-bold"> Languages:</span> ${Object.values(
                  country.languages
                )}
              </li>
              <li class="list-group-item">
                <i class="fas fa-lg fa-money-bill-wave"></i>
                <span class="fw-bold"> Currencies:</span> 
                 ${country.currencies[Object.keys(country.currencies)[0]].name},
                 ${
                   country.currencies[Object.keys(country.currencies)[0]].symbol
                 }
              </li>
              <li class="list-group-item">
              <i class="fa-solid fa-people-group"></i></i>
              <span class="fw-bold"> Population:</span> ${country.population.toLocaleString()}
            </li>
              <li class="list-group-item">
              <i class="fa-sharp fa-solid fa-road-barrier"></i>
              <span class="fw-bold"> Borders:</span>  ${country.borders || null}
            </li>
            </li>
            <li class="list-group-item">
              <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href="${
                country.maps.googleMaps
              }" target='_blank'> Go to google map</a> </li>
            </ul>
          </div>
    `;
}

const showCountryNames = (veri) => {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const bandA = a.name.common.toUpperCase();
      const bandB = b.name.common.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }
    const data=veri

    data.sort(compare)
 

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

//Los_Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }

  //Lagos
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }

  //Victoria
  let victoriaElement = document.querySelector("#victoria");
  if (victoriaElement) {
    let victoriaDateElement = victoriaElement.querySelector(".date");
    let victoriaTimeElement = victoriaElement.querySelector(".time");
    victoriaTime = moment().tz("Australia/Victoria");

    victoriaDateElement.innerHTML = victoriaTime.format("MMMM Do YYYY");
    victoriaTimeElement.innerHTML = victoriaTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }

  //Barnaul
  let barnaulElement = document.querySelector("#barnaul");
  if (barnaulElement) {
    let barnaulDateElement = barnaulElement.querySelector(".date");
    let barnaulTimeElement = barnaulElement.querySelector(".time");
    barnaulTime = moment().tz("Asia/Barnaul");

    barnaulDateElement.innerHTML = barnaulTime.format("MMMM Do YYYY");
    barnaulTimeElement.innerHTML = barnaulTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss:SS[<small>]A[</small]"
    );
  }

  //Reunion
  let reunionElement = document.querySelector("#reunion");
  if (reunionElement) {
    let reunionDateElement = reunionElement.querySelector(".date");
    let reunionTimeElement = reunionElement.querySelector(".time");
    reunionTime = moment().tz("Indian/Reunion");

    reunionDateElement.innerHTML = reunionTime.format("MMMM Do YYYY");
    reunionTimeElement.innerHTML = reunionTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }

  //Majuro
  let majuroElement = document.querySelector("#majuro");
  if (majuroElement) {
    let majuroDateElement = majuroElement.querySelector(".date");
    let majuroTimeElement = majuroElement.querySelector(".time");
    majuroTime = moment().tz("Pacific/Majuro");

    majuroDateElement.innerHTML = majuroTime.format("MMMM Do YYYY");
    majuroTimeElement.innerHTML = majuroTime.format(
      "h:mm:ss:SS[<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
       <div class="city">
        <div>
        <h2>${cityTimeZone}</h2>
        <div class="date">${cityTime.format("MMMM dddd Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss:SS")}
        <small>${cityTime.format("A")}</small></div>
      </div>
     `;
}
updateTime();
setInterval(updateTime, 100);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

//Los_Angeles
function updateTime(){
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Lagos
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  lagosTime = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Victoria
  let victoriaElement = document.querySelector("#victoria");
  let victoriaDateElement = victoriaElement.querySelector(".date");
  let victoriaTimeElement = victoriaElement.querySelector(".time");
  victoriaTime = moment().tz("Australia/Victoria");

  victoriaDateElement.innerHTML = victoriaTime.format("MMMM Do YYYY");
  victoriaTimeElement.innerHTML = victoriaTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Barnaul
  let barnaulElement = document.querySelector("#barnaul");
  let barnaulDateElement = barnaulElement.querySelector(".date");
  let barnaulTimeElement = barnaulElement.querySelector(".time");
  barnaulTime = moment().tz("Asia/Barnaul");

  barnaulDateElement.innerHTML = barnaulTime.format("MMMM Do YYYY");
  barnaulTimeElement.innerHTML = barnaulTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Reunion
  let reunionElement = document.querySelector("#reunion");
  let reunionDateElement = reunionElement.querySelector(".date");
  let reunionTimeElement = reunionElement.querySelector(".time");
  reunionTime = moment().tz("Indian/Reunion");

  reunionDateElement.innerHTML = reunionTime.format("MMMM Do YYYY");
  reunionTimeElement.innerHTML = reunionTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Majuro
  let majuroElement = document.querySelector("#majuro");
  let majuroDateElement = majuroElement.querySelector(".date");
  let majuroTimeElement = majuroElement.querySelector(".time");
  majuroTime = moment().tz("Pacific/Majuro");

  majuroDateElement.innerHTML = majuroTime.format("MMMM Do YYYY");
  majuroTimeElement.innerHTML = majuroTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );

  //Majuro
  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  hawaiiTime = moment().tz("US/Hawaii");

  hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "h:mm:ss:SS[<small>]A[</small]"
  );
}









updateTime();
setInterval(updateTime, 100);


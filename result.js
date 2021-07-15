const zodiacSign = sessionStorage.getItem("zodiacSign");
const zodiacDate = sessionStorage.getItem("zodiacDate");

if(!zodiacSign){
    location.href = "index.html";
}

document.title = `your Zodiac - ${zodiacSign}`;

document.getElementById("zodiac-sign").innerHTML = zodiacSign;
document.getElementById("zodiac-date").innerHTML = zodiacDate;
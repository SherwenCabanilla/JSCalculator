document.getElementById("subBtn").onclick = function () {
  let temp;

  if (document.getElementById("celsius").checked) {
    temp = document.getElementById("userInput").value;
    temp = parseInt(temp);
    temp = toCelsius(temp);
    document.getElementById("converted").innerHTML = temp + "°c";
  } else if (document.getElementById("farenheit").checked) {
    temp = document.getElementById("userInput").value;
    temp = parseInt(temp);
    temp = toFarenheit(temp);
    document.getElementById("converted").innerHTML = temp + "°f";
  } else {
    document.getElementById("converted").innerHTML = "Please select";
  }
};

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFarenheit(temp) {
  return temp * (9 / 5) + 32;
}

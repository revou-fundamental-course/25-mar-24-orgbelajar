function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid height and weight.";
    return;
  }

  var bmi = weight / Math.pow(height / 100, 2);
  var bmiCategory = "";
  var bmiCategory2 = "";
  var bmiCategory3 = "";

  if (bmi < 18.5) {
    bmiCategory = "underweight";
    bmiCategory2 = "berat badan kurang";
  } else if (bmi < 25) {
    bmiCategory = "normal weight";
    bmiCategory2 = "berat badan normal";
  } else if (bmi < 30) {
    bmiCategory = "overweight";
    bmiCategory2 = "berat badan berlebih";
    bmiCategory3 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
  } else {
    bmiCategory = "obese";
    bmiCategory2 = "terlalu gemuk";
  }

  var bmiMin = bmi - 1;
  var bmiPlus = bmi + 1;

  document.getElementById("bmiNumber").innerHTML = bmi.toFixed(1);

  document.getElementById("bmiTeks1").innerHTML = bmiCategory2;

  document.getElementById("bmiTeks2").innerHTML =
    "Anda memiliki " + bmiCategory2;

  document.getElementById("result1").innerHTML =
    "Hasil BMI diantara " + Math.round(bmiMin) + " dan " + Math.round(bmiPlus);

  document.getElementById("result2").innerHTML =
    "Anda berada dalam kategori" +
    " " +
    bmiCategory +
    " atau " +
    bmiCategory2 +
    ".";

  document.getElementById("result3").innerHTML = bmiCategory3;
}

function resetInputs() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result1").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
  document.getElementById("bmiTeks1").innerHTML = "";
  document.getElementById("bmiTeks2").innerHTML = "";
  document.getElementById("bmiNumber").innerHTML = "";
}

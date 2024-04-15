//Write a program that calculates the Body Mass Index (BMI) and categorizes it.
function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / height (m) squared
    var bmi = weight / (height * height);
    return bmi;
}
var bmii = calculateBMI(50, 5);
var category;
if (bmii < 18.5) {
    category = "Underweight";
}
else if (bmii >= 18.5 && bmii < 24.9) {
    category = "Normal weight";
}
else if (bmii >= 24.9 && bmii < 29.9) {
    category = "Overweight";
}
else {
    category = "Obese";
}
console.log("Your BMI is ".concat(bmii.toFixed(2), ", which falls under the category of ").concat(category, "."));
var bmi = calculateBMI(50, 5);

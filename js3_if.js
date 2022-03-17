const massMark=95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.75;
const BMI_mark = massMark/heightMark**2;
const BMI_John = massJohn/(heightMark*heightJohn);
const markHightBMI = BMI_mark>BMI_John;
console.log(BMI_mark,BMI_John,markHightBMI);

if (BMI_mark>BMI_John) {
  console.log('Mark BMI is higher');
}
else {
  console.log('John BMI is higher');

}

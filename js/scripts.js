$(document).ready(function(){
  $("form#container").submit(function(event) {
    event.preventDefault();
    const length1 = parseInt(prompt("Enter length1:")).val();
    const length2 = parseInt(promp("Enter length2:")).val();
    const length3 = parseInt(prompt("Enter length3:")).val();

    let result;
      if (length1 === length2 && length2 === length3) {
      result = $("#equilateral").show();
    } else if (length1 === length2 && length1 === length3) {
      result = $("#isosceles").show();
    } else if (length1 !== length2 && length1 !== length3) {
      result = $("#scalene").show();
    } else {
      return ("not a triangle");
    }
  })
})

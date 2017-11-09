// Write your code in this file!
function scuberGreetingForFeet(d){
  var d;
  if(d < 400){
    return "This one is on me!"
  }
  else if(d > 2000 && d < 2500){
    return "I will gladly take your thirty bucks."
  }
  else{
    return "No can do."
  }
}

function ternaryCheckCity(city){

  const city = "NYC";

  (city === true) ? "Ok, sounds good.": "No go.";

}

function switchOnCharmFromTip(tip){

  let response = tip

  switch(tip){

    case 'generous':
      return "Thank you so much."

    case 'not as generous':
      return "Thank you."

    case 'thanks for everything'
      return "Bye."
}}

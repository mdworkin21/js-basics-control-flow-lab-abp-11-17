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


  var check = (city === "NYC") ? "Ok, sounds good.": "No go.";
  return check

}


function switchOnCharmFromTip(tip){
  //let tip;

  switch(tip){

    case 'generous':
      tip = "Thank you so much."

      break;

    case 'not as generous':
      tip = "Thank you."

      break;

    case 'thanks for everything'
      tip = "Bye."

      break;

    } return tip
}

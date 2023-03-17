function scuberGreetingForFeet(x){
  if (x <= 400) {
   return x = 'This one is on me!';
  } else if (x <= 2000) {
    return x = 'That will be twenty bucks.'
  } else if (x <= 2500) {
    return x = "I will gladly take your thirty bucks."
  } else {return x = "No can do."}
}

function ternaryCheckCity(x){
  const result = x === 'NYC' ? "Ok, sounds good." : "No go.";
  return result;
} 

function switchOnCharmFromTip(x){
  switch (x) {
    case 'generous':
      return 'Thank you so much.';
      
    case 'not as generous':
      return 'Thank you.';
      
    case 'thanks for everything':
      return 'Bye.'
    
  }
}
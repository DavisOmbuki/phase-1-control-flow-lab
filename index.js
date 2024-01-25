function scuberGreetingForFeet(){
  let distance = 1000; // Replace this with the actual distance desired by the passenger

  if (distance <= 250) {
    return "Your destination is very close, I'll be there shortly!";
  } else if (distance <= 2500) {
    return "You've got a long way to go, but I'll get you there in no time!";
  } else {
    return "Wow, your destination is far away! But don't worry, I'll make sure you get there on time.";
  }
}

function ternaryCheckCity(){
  let destination = "New York"; // Replace this with the actual destination desired by the passenger

  return destination === "New York" ? "Let's go to the city!" : "Sorry, I can't go to the city.";
}

function switchOnCharmFromTip(){
  let tip = 20; // Replace this with the actual tip amount given by the passenger

  switch (tip) {
    case 10:
      return "Thank you for your generous tip!";
    case 15:
      return "Your tip is appreciated!";
    case 20:
      return "Wow, what a kind passenger!";
    default:
      return "Thank you for your tip!";
  }
}
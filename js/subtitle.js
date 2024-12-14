function getRandomGreeting() {
  var greetings = [
    "Could a pig do this?",
    "What's a New World? Sounds kinda boring",
    "Phoenix sux",
    "Bunkr was just another Github repo he did not actually code it",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();

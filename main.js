// // Generates a random integer between 0 (inclusive) and num (exclusive)
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// An object containing arrays of different types of wisdom
const collectiveWisdom = {
  signInfo: ["star", "moon", "sun", "comet"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};

function generatePersonalWisdom() {
  const personalWisdom = [];

  for (const prop in collectiveWisdom) {
    const options = collectiveWisdom[prop];
    const randomIndex = generateRandomNumber(options.length);
    const selectedOption = options[randomIndex];
  }
}

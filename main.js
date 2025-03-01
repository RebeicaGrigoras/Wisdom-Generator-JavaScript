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

    switch (prop) {
      case "signInfo":
        personalWisdom.push(`Your sign right now is a ${selectedOption}.`);
        break;
      case "fortuneOutput":
        personalWisdom.push(`You are having: ${selectedOption}.`);
        break;
      case "advice":
        personalWisdom.push(`You should: ${selectedOption}.`);
        break;
      default:
        personalWisdom.push("There is not enought info.");
    }
  }
  return personalWisdom;
}

function formatWisdom(wisdom) {
  const formatted = wisdom.join("\n");
  console.log(formatted);
}

const personalWisdom = generatePersonalWisdom();
formatWisdom(personalWisdom);

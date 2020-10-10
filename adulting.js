const readlineSync = require("readline-sync");

console.log(
  "Welcome to the Adulting game - the only game that you get to play forever!"
);
console.log(
  "Let's begin! You've just graduated from high school and turned 18! The world is wide open to you, what do you want to do? "
);

const firstQuestion = readlineSync.question(
  "You can: Go to college, Take a gap year or Join the Peace Corps?"
);

switch (firstQuestion) {
  case "Go to college":
    console.log(
      "College is full of choices. One of them is what major will you choose?"
    );
    break;
  case "Take a gap year":
    console.log(
      "You've got some free time on your hands. What are you going to do all day?"
    );
    break;
  case "Join the Peace Corps":
    console.log(
      "Volunteer life is calling. Which one is your passion project?"
    );
}

const collegeMajors = readlineSync.question("Science, Fine Arts or Tech?");

switch (collegeMajors) {
  case "Science":
    console.log(
      "You've got lots of lab time and formulas in your future. Congrats - it all pays of at graduation with some great options. Which of the following do you choose?"
    );
    break;
  case "Fine Arts":
    console.log(
      "Art is passion and you throw yourself into your craft. What's up next for you?"
    );
    break;
  case "Tech":
    console.log(
      "Make sure you get some great blue light glasses for all that screen time. Don't worry though those late nights pay off and in no time you have great offers in front of you. Everyone loves your work and you can open up shop and be your own boss, take a generous job offer or develop a product you've started in a class. "
    );
}

const freeTimeOptions = readlineSync.question(
  "Get a job, Find yourself or Hang out and chill?"
);

switch (freeTimeOptions) {
  case "Get a job":
    console.log(
      "You're putting in the hours and have some money to show for it. What are you going to do with your new funds?"
    );
    break;
  case "Find yourself":
    console.log(
      "The journey of self discovery can be long or short, exotic or near? Where would you look for your zen?"
    );
    break;
  case "Hang out and chill":
    console.log(
      "You've been living the good life and the year is nearly over. You're not sure if you should go to law school, chill for another year or go to Wyncode. What's your next move?"
    );
}
const peaceCorps = readlineSync.question("Health, Education or Environment?");

switch (peaceCorps) {
  case "Health":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next. One idea is to go to med school to be a doctor, or start a nonprofit or start a farm. What's your choice?"
    );
    break;
  case "Education":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next. You wouldn't mind going to college, pursuing acting or working with Teach for America"
    );
    break;
  case "Environment":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next. Living off the grid sounds appealing to you but so does developing a product to benefit the environment or becoming an activist."
    );
}
const fineArts = readlineSync.question(
  "Pursue acting, Get a Masters or Apprentice overseas?"
);

switch (fineArts) {
  case "Pursue Acting":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Get a Masters":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Apprentice overseas":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
}
const science = readlineSync.question(
  "High paying job, PhD scholarship or Exotic research study?"
);

switch (science) {
  case "High paying job":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "PhD scholarship":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Exotic research study":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
}

const tech = readlineSync.question("Open up shop, Invent or Job offer?");

switch (tech) {
  case "Open up shop":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Invent":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Job offer":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
}

const freeTimeJob = readlineSync.question("Invest, Save or Make it rain");

switch (freeTimeJob) {
  case "Invest":
    console.log(
      "You're putting in the hours and have some money to show for it. What are you going to do with your new funds?"
    );
    break;
  case "Save":
    console.log(
      "The journey of self discovery can be long or short, exotic or near? Where would you look for your zen?"
    );
    break;
  case "Make it rain":
    console.log(
      "You've been living the good life and the year is nearly over. What's your next move?"
    );
}
const freeTimeFindYourself = readlineSync.question(
  "Travel, Retreats or Partying?"
);

switch (freeTimeFindYourself) {
  case "Travel":
    console.log(
      "You're putting in the hours and have some money to show for it. What are you going to do with your new funds?"
    );
    break;
  case "Retreats":
    console.log(
      "The journey of self discovery can be long or short, exotic or near? Where would you look for your zen?"
    );
    break;
  case "Partying":
    console.log(
      "You've been living the good life and the year is nearly over. What's your next move?"
    );
}
const freeTimeChill = readlineSync.question(
  "Law school, Another year or Wyncode?"
);

switch (freeTimeChill) {
  case "Law school":
    console.log(
      "You're putting in the hours and have some money to show for it. What are you going to do with your new funds?"
    );
    break;
  case "Another year":
    console.log(
      "The journey of self discovery can be long or short, exotic or near? Where would you look for your zen?"
    );
    break;
  case "Wyncode":
    console.log(
      "You've been living the good life and the year is nearly over. What's your next move?"
    );
}

const peaceCorpsHealth = readlineSync.question("Farm, Doctor or Nonprofit?");

switch (peaceCorpsHealth) {
  case "Farm":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Doctor":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Nonprofit":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
}

const peaceCorpsEd = readlineSync.question(
  "College, Acting or Teach for America"
);

switch (peaceCorpsEd) {
  case "College":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Acting":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Teach for America":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
}
const peaceCorpsEnv = readlineSync.question(
  "Off the grid, Invent or Activism?"
);

switch (peaceCorpsEnv) {
  case "Off the grid":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Invent":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
    break;
  case "Activism":
    console.log(
      "It was an amazing experience and you have an idea about what you want to do next."
    );
}

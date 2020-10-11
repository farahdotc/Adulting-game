const readlineSync = require("readline-sync");
const colors = require("colors");

console.log(
  "Welcome to the Adulting game - the only game that you get to play forever!"
);
console.log(
  "Let's begin! \nYou've just graduated from high school and turned 18! \nThe world is wide open to you, what do you want to do? \nType in the number for your selection and press enter."
    .magenta
);

const firstQuestion = readlineSync.question(
  "You can: \n1 Go to college \n2 Take a gap year \n3 Join the Peace Corps \n"
);

switch (firstQuestion) {
  case "1":
    console.log(
      "College is full of choices. One of them is what major will you choose?"
    );
    const collegeMajors = readlineSync.question(
      "\n1. Science \n2. Fine Arts  \n3. Tech\n".cyan
    );

    switch (collegeMajors) {
      case "1":
        console.log(
          "You've got lots of lab time and formulas in your future. \nCongrats - it all pays of at graduation with some great options. \nWhich of the following do you choose?"
        );
        const science = readlineSync.question(
          "1 High paying job \n2 PhD scholarship \n3 Exotic research study\n"
            .green
        );

        switch (science) {
          case "1":
            console.log(
              "Without ambition one starts nothing. Without work one finishes nothing. \nThe prize will not be sent to you. You have to win it. - Ralph Waldo Emerson"
            );
            break;
          case "2":
            console.log(
              "There are no limits to what you can accomplish, \nexcept the limits you place on your own thinking. – Brian Tracy."
            );
            break;
          case "3":
            console.log(
              "Life begins at the end of your comfort zone - Neale Donald Walsch"
            );
        }
        break;
      case "2":
        console.log(
          "Art is passion and you throw yourself into your craft. What's up next for you?"
        );
        const fineArts = readlineSync.question(
          "1 Pursue acting \n2 Get a Masters \n3 Apprentice overseas\n"
        );

        switch (fineArts) {
          case "1":
            console.log(
              "Acting is not about being someone different. \nIt's finding the similarity in what is apparently different, then finding myself in there - Meryl Streep"
            );
            break;
          case "2":
            console.log(
              "Education is the most powerful weapon which you can use to change the world - Nelson Mandela"
            );
            break;
          case "3":
            console.log(
              "The key to success is to start before you’re ready - Marie Forleo "
            );
        }

        break;
      case "3":
        console.log(
          "Make sure you get some great blue light glasses for all that screen time. \nDon't worry though those late nights pay off and in no time you have great offers in front of you."
        );
        const tech = readlineSync.question(
          "\nEveryone loves your work and you can \n1 Open up shop and be your own boss \n2 Take a generous job offer \n3 Develop a product you've started in a class\n"
        );

        switch (tech) {
          case "1":
            console.log(
              "The man who knows how will always have a job. \nThe man who also knows why will always be his boss. \n- Ralph Waldo Emerson"
            );
            break;
          case "2":
            console.log(
              "“The real measure of your wealth is how much you’d be worth if you lost all your money \n- Unknown"
            );
            break;
          case "3":
            console.log(
              "If a thing is done well, no one will ask how long it took to do it, \nbut only, who did it. \n— John Taylor."
            );
        }
    }
    break;
  case "2":
    console.log(
      "You've got some free time on your hands. What are you going to do all day?"
    );
    const freeTimeOptions = readlineSync.question(
      "\n1 Get a job \n2 Find myself  \n3 Hang out and chill\n"
    );

    switch (freeTimeOptions) {
      case "1":
        console.log(
          "You're putting in the hours and have some money to show for it. \nWhat are you going to do with your new funds?"
        );
        const freeTimeJob = readlineSync.question(
          "1 Invest \n2 Save  \n3 Make it rain"
        );

        switch (freeTimeJob) {
          case "1":
            console.log(
              "“The big money is not in the buying or selling, but in the waiting \n- Charlie Munge"
            );
            break;
          case "2":
            console.log(
              "Saving a small amount soon builds up to a large amount \n-Scottish Proverb"
            );
            break;
          case "3":
            console.log(
              "Whoever said that money can’t buy happiness simply didn’t know where to go shopping \n— Bo Derek"
            );
        }
        break;
      case "2":
        console.log(
          "The journey of self discovery can be long or short, exotic or near? \nWhere would you look for your zen?"
        );
        const freeTimeFindYourself = readlineSync.question(
          "1 Travel \n2 Retreats \n3 Partying\n"
        );

        switch (freeTimeFindYourself) {
          case "1":
            console.log(
              "The world is a book, and those who do not travel read only a page \n-Saint Augustine"
            );
            break;
          case "2":
            console.log(
              "Nowhere can man find a quieter or more untroubled retreat than in his own soul \n― Marcus Aurelius"
            );
            break;
          case "3":
            console.log(
              "Party hard, make mistakes, laugh endlessly. Do things you are afraid to do. after all, you are only young once \n- Unknown"
            );
        }
        break;
      case "3":
        console.log(
          "You've been living the good life and the year is nearly over. \nYou're not sure if you should go to law school, chill for another year or go to Wyncode. What's your next move?"
        );
        const freeTimeChill = readlineSync.question(
          "1 Law school \n2 Another year \n3 Wyncode\n"
        );

        switch (freeTimeChill) {
          case "1":
            console.log(
              "Law school taught me one thing: how to take two situations that are exactly the same and show how they are different \n- Hart Pomerantz"
            );
            break;
          case "2":
            console.log(
              "Party hard, make mistakes, laugh endlessly. Do things you are afraid to do. after all, you are only young once \n- Unknown"
            );
            break;
          case "3":
            console.log("Three words: Trust the Process! - Wyncode Fam");
        }
    }
    break;
  case "3":
    console.log(
      "Volunteer life is calling. Which one is your passion project?"
    );
    const peaceCorps = readlineSync.question(
      "1 Health \n2 Education \n3 Environment\n"
    );

    switch (peaceCorps) {
      case "1":
        console.log(
          "It was an amazing experience and you have an idea about what you want to do next. \nOne idea is to go to med school to be a doctor, or \nstart a nonprofit or start a farm. What's your choice?"
        );
        const peaceCorpsHealth = readlineSync.question(
          "1 Farm \n2 Doctor \n3 Nonprofit?\n"
        );

        switch (peaceCorpsHealth) {
          case "1":
            console.log(
              "Life on a farm is a school of patience. You can’t hurry the crops or make an ox in two days \n– Haneri Alain Liogier"
            );
            break;
          case "2":
            console.log(
              "The best way to find yourself is to lose yourself in the service of others - Gandhi"
            );
            break;
          case "3":
            console.log(
              "The meaning of life is to find your gift. The purpose of life is to give it away. ― Pablo Picasso"
            );
        }
        break;
      case "2":
        console.log(
          "It was an amazing experience and you have an idea about what you want to do next. \nYou wouldn't mind going to college, pursuing acting or \nworking with Teach for America"
        );
        const peaceCorpsEd = readlineSync.question(
          "1 College \n2 Acting \n3 Teach for America\n"
        );

        switch (peaceCorpsEd) {
          case "1":
            console.log(
              "Education is the most powerful weapon which you can use to change the world \n- Nelson Mandela"
            );
            break;
          case "2":
            console.log(
              "Follow your dreams. They know the way \n― Kobi Yamada"
            );
            break;
          case "3":
            console.log(
              "“In teaching others, we teach ourselves.” \n- Latin Proverb"
            );
        }
        break;
      case "3":
        console.log(
          "It was an amazing experience and you have an idea about what you want to do next. \nLiving off the grid sounds appealing to you but so does developing a product to benefit the environment or \nbecoming an activist."
        );
        const peaceCorpsEnv = readlineSync.question(
          "1 Off the grid \n2 Invent \n3 Activism\n"
        );

        switch (peaceCorpsEnv) {
          case "1":
            console.log("Nature is a miracle we depend on \n-Bridget Cameron");
            break;
          case "2":
            console.log(
              "If a thing is done well, no one will ask how long it took to do it, \nbut only, who did it. — John Taylor"
            );
            break;
          case "3":
            console.log(
              "You never change things by fighting the existing reality. \nTo change something, build a new model that makes the existing model obsolete \n― Buckminster Fuller"
                .magenta
            );
        }
    }
  default:
    "Please enter a response listed above to continue";
}

const questions = [
  {
    //
    //#1
    //2c - 2person conf call
    //https://docs.google.com/document/d/1Fh9vvneRlcoN3eyXCaVTVl2_Tmitdh1j5QCRU_PCY6Y/edit
    id:"1",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    audio: "1_toeic2.mp3",
    imageUrl: "img/mancomputer1.jpg",
  },
  //
  {
    //2
    //
    //b1 - skyscrapers
    //mwh vo
    id:"2",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 1,
    audio: "2_toeic2.mp3",
    imageUrl: "img/buildings1.jpg",
  },
  //
  {
    //3
    //c2

    // mh vo
    id:"3",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    audio: "3_toeic2.mp3",
    imageUrl: "img/emptychairs1.jpg",
  },

  {
    //4
    //
    //
    //mwh,vo d3 - 2 women conf rm
    id:"4",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 3,
    imageUrl: "img/women1.jpg",
    audio: "4_toeic2.mp3",
  },

  {
    //5
    //mwh, vo c2 - students auditorium
    id:"5",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    imageUrl: "img/students1.jpg",
    audio: "5_toeic2.mp3",
  },

  {
    //6
    //mwh,vo - adults sitting in hall b1
    id:"6",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 1,
    audio: "6_toeic2.mp3",
    imageUrl: "img/adultstudents1.jpg",
  },
  //
  {
    //7
    //mwh, daniela vo - woman presents in conf room d3
    id:"7",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 3,
    // audio: "uber.mp3"
    // qType: "Part 5: Incomplete Sentences",
    // question: "Many stock _____ predict that the company's share price is wildly overalued, with a few predicting further a price drop of 25% or more in the coming quarter.",
    // choices: ["analyze", "analysis", "analysts", "analyses"],
    // correctAnswer: 2,
    imageUrl: "img/company1.jpg",
    audio: "7_toeic2.mp3",
    // content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
  },
  //
  {
    //8

    // 8 mwh,vo c2 - table wooden
    id:"8",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    // audio: "promotion.mp3"
    // qType: "Part 5: Incomplete Sentences",
    // question: "She was _____ upset that her carpool cohort wouldn't come 30 minutes earlier to pick her up on Friday.",
    // choices: ["possible", "positive", "likely", "most of"],
    // correctAnswer: 2,
    imageUrl: "img/table1.jpg",
    audio: "8_toeic2.mp3",
    // content: "Consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
  },
  //
  {
    //

    //9

    //9 mwh,vo c2 - man,woman,high-five,indoor
    id:"9",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2,
    // audio: "boatchalet.mp3"
    // qType: "Part 5: Incomplete Sentences",
    // question: "_____ paid maternity and paternity leave were both described as perks of the job before he was hired, Stephen was understandably annoyed when he read his work agreement that there was no such language in the offering document.",
    // choices: ["Meanwhile", "Most", "Since", "While"],
    // correctAnswer: 2,
    imageUrl: "img/highfive.jpg",
    audio: "9_toeic2.mp3",
    // content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
  },

  {
    //10

    //mwh, vo - a0 - women, meditate
    id:"10",
    qType: "Section 1: Listening Test (Part 1: Photographs)",
    question: "Listen to the recording and choose the best answer.",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 0,
    // audio: "boatchalet.mp3"
    // qType: "Part 6: Text Completion",
    // question: "What is the correct word that belongs in the '30' slot?",
    // choices: ["offer", "offers", "offering", "offered"],
    imageUrl: "img/meditate1.jpg",
    audio: "10_toeic2.mp3",
    // content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
  },
];


export { questions };

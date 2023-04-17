import { randomiseData } from "./randomOptionGenerator";
// chapter 1 to 12
const quizData = randomiseData([
  {
    id: "1",
    question: "Which website is used to download Blue Griffon HTML editor?",
    options: randomiseData([
      "www.bluegriffon.org",
      "www.bluegriffon.com",
      "www.griffon.org",
      "www.griffon.com",
    ]),
    answer: "www.bluegriffon.org",
  },
  {
    id: "2",
    question: "Which of the following is a feature of traditional commerce?",
    options: randomiseData([
      "Operates within a certain period of time or during business hours",
      "Advertising of the product is done electronically",
      "E - payments systems are used for receiving payment",
      "Customer can browse through products and offers",
    ]),
    answer: "Operates within a certain period of time or during business hours",
  },
  {
    id: "3",
    question: "Which of the following is a disadvantage of E - commerce?",
    options: randomiseData([
      "Privacy",
      "Improved Customer Service",
      "Speed",
      "Conduct business 24x7",
    ]),
    answer: "Privacy",
  },
  {
    id: "4",
    question: "Which of the following is a feature of E - commerce?",
    options: randomiseData([
      "Operates within a certain period of time or during business hours",
      "No sharing of information with competitors",
      "Location renting or purchasing",
      "Advertising of the product is done electronically",
    ]),
    answer: "Advertising of the product is done electronically",
  },
  {
    id: "5",
    question: "Which of the following is a popular website for online auction?",
    options: randomiseData([
      "www.gseb.org",
      "www.flipkart.com",
      "www.ebay.com",
      "www.axisbank.com",
    ]),
    answer: "www.ebay.com",
  },
  {
    id: "6",
    question:
      "Which of the following statement is true for services provided by Online Banking? (i) Customer can check account balance at any time (ii) Customer can deposit cash using online banking  (iii) Customer can transfer the money from one account to another",
    options: randomiseData([
      "only (ii) and (iii)",
      "only (i) and (iii)",
      "only (i) and (ii)",
      "(i), (ii) and (iii)",
    ]),
    answer: "only (i) and (iii)",
  },
  {
    id: "7",
    question:
      "Which E - commerce business model refers to business and organisations that sells products or services to customers over the internet using websites?",
    options: randomiseData([
      "Business to Consumer (B2C)",
      "Business to Business (B2B)",
      "Customer to Customer (C2C)",
      "Government to Business (G2B)",
    ]),
    answer: "Business to Consumer (B2C)",
  },
  {
    id: "8",
    question:
      "Which of the following is an example of Business to Business (B2B) model website?",
    options: randomiseData([
      "www.commodity.com",
      "www.tradeindia.com",
      "(A) and (B) both",
      "None of the above",
    ]),
    answer: "(A) and (B) both",
  },
  {
    id: "9",
    question:
      "Which of the following refers to buying and selling of goods or services through the use of internet enabled wireless devices?",
    options: randomiseData(["Internet", "M - Commerce", "M - Banking", "www"]),
    answer: "M - Commerce",
  },
  {
    id: "10",
    question:
      "Which of the following is the transformation of encrypted text back into normal text?",
    options: randomiseData([
      "Firewall",
      "Digital Certificate",
      "Decryption",
      "Virus",
    ]),
    answer: "Decryption",
  },
  {
    id: "11",
    question: "Which of the following is the symbol for trademark?",
    options: randomiseData([
      "TM, MT and Ⓒ",
      "TM, MS and Ⓡ",
      "TM, SM and Ⓡ",
      "TM, SM and Ⓒ",
    ]),
    answer: "TM, SM and Ⓡ",
  },
  {
    id: "12",
    question:
      "Which is the most accurate in determining a mobile device's position?",
    options: randomiseData(["Website", "SSL", "TCP / IP", "GPS"]),
    answer: "GPS",
  },
  {
    id: "13",
    question:
      "Which of the following is used for securing web transactions on the internet?",
    options: randomiseData(["TCP / IP", "HTTP", "HTML", "SSL"]),
    answer: "SSL",
  },
  {
    id: "14",
    question:
      "Which is the most popular and widely accepted method of payment on internet?",
    options: randomiseData([
      "Credit Card",
      "Debit Card",
      "Internet Banking",
      "All of the above",
    ]),
    answer: "Credit Card",
  },
  {
    id: "15",
    question: "Which of the following is provided using encapsulation?",
    options: randomiseData([
      "Data protection",
      "Data sharing",
      "Separation of data and methods",
      "All of the above",
    ]),
    answer: "Data protection",
  },
  {
    id: "16",
    question:
      "With which of the following options prandomiseData(olymorphism cannot be achieved?",
    options: randomiseData([
      "Method Overloading",
      "Operator Overloading",
      "Data hiding",
      "All of the above",
    ]),
    answer: "Data hiding",
  },
  {
    id: "17",
    question:
      "An inheritance model refers to which of the following relationships?",
    options: randomiseData([
      "'is-a'",
      "'has-a'",
      "'a-part-of'",
      "All of these",
    ]),
    answer: "'has-a'",
  },
  {
    id: "18",
    question:
      "Which of the following describes a group of objects with similar attributes and common behavior?",
    options: randomiseData(["Object", "Class", "Program", "Diagram"]),
    answer: "Class",
  },
  {
    id: "19",
    question:
      "Which of the following is a mechanism of providing protection to data and methods of a program?",
    options: randomiseData([
      "Encapsulation",
      "Data abstraction",
      "Polymorphism",
      "Aggregation",
    ]),
    answer: "Encapsulation",
  },
  {
    id: "20",
    question:
      "Which of the following represents non-exclusive relationship between two classes?",
    options: randomiseData([
      "Aggregation",
      "Composition",
      "Inheritance",
      "All of the above",
    ]),
    answer: "Aggregation",
  },
  {
    id: "21",
    question: "What is the full form of tar?",
    options: randomiseData([
      "tape archiver",
      "tech archiver",
      "tight archiver",
      "test archiver ",
    ]),
    answer: "tape archiver",
  },
  {
    id: "22",
    question: "Which keyword is used to create an object by allocating memory?",
    options: randomiseData(["memory", "allocate", "variable", "new"]),
    answer: "new",
  },
  {
    id: "23",
    question: "What does ' length ' refer to for an object of String class?",
    options: randomiseData([
      "attribute",
      "method",
      "class attribute",
      "class name",
    ]),
    answer: "method",
  },
  {
    id: "24",
    question:
      "Which exit code in SciTE editor indicates that the command execution is successful?",
    options: randomiseData(["0", "1", "-1", "10"]),
    answer: "0",
  },
  {
    id: "25",
    question:
      "Which of the following character is used to mark a comment in LaTeX?",
    options: randomiseData(["$", "%", "#", "&"]),
    answer: "%",
  },
]);
const data = quizData.slice(0, 25);
export { data };

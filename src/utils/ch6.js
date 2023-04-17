import { randomiseData } from "./randomOptionGenerator";
//ch 6 = 20 marks

const quizData = randomiseData([
  {
    id: "01",
    question: "Which of the following best suits to Java ?",
    options: randomiseData([
      "A procedural programming language",
      "An Object - oriented programming language",
      "A Query language",
      "All of these",
    ]),
    answer: "An Object - oriented programming language",
  },
  {
    id: "02",
    question:
      "An aggregation model refers to which of the following relationships?",
    options: randomiseData([
      "'is - a' relationship",
      "'has - a' relationship",
      "'a - part - of' relationship",
      "All of these",
    ]),
    answer: "'has - a' relationship",
  },
  {
    id: "03",
    question: "Which of the following is not a visibility symbol?",
    options: randomiseData(["-", "*", "#", "-"]),
    answer: "*",
  },
  {
    id: "04",
    question:
      "In which year the object - oriented programming concepts started?",
    options: randomiseData(["1990s", "1980s", "1970s", "1960s"]),
    answer: "1960s",
  },
  {
    id: "05",
    question:
      "Which of the following is the popular programming language which support object - oriented ?",
    options: randomiseData(["Java", "C++", "VB.net", "All of these"]),
    answer: "All of these",
  },
  {
    id: "06",
    question:
      "In which of the following categories the way of programming can be divided?",
    options: randomiseData([
      "Procedural",
      "Object - oriented",
      "Both Procedural & Object - oriented",
      "None of the above",
    ]),
    answer: "Both Procedural & Object - oriented",
  },
  {
    id: "07",
    question: "In which paradigm , the focus is on objects ?",
    options: randomiseData([
      "Structural",
      "Sequential",
      "Procedural",
      "Object - oriented",
    ]),
    answer: "Object - oriented",
  },
  {
    id: "08",
    question: "Objects are classified using a concept of .....",
    options: randomiseData(["Person", "class", "Book", "map"]),
    answer: "class",
  },
  {
    id: "09",
    question:
      "In Object - oriented terminology , characteristics are known as ...",
    options: randomiseData(["class", "Objects", "Properties", "None of these"]),
    answer: "Properties",
  },
  {
    id: "10",
    question: "Which of the following describes the object?",
    options: randomiseData(["Members", "Attributes", "Methods", "Features"]),
    answer: "Attributes",
  },
  {
    id: "11",
    question:
      "Which of the following is a general concept used to embody all the common features of a particular set of objects?",
    options: randomiseData(["class", "state", "Behaviour", "Attributes"]),
    answer: "class",
  },
  {
    id: "12",
    question:
      "What is not protected from modification in procedural programming?",
    options: randomiseData(["Function", "data", "Methods", "Behaviour"]),
    answer: "data",
  },
  {
    id: "13",
    question:
      "Which kind of members of the class are not available directly to outside world?",
    options: randomiseData(["Private", "Protected", "Public", "Default"]),
    answer: "Private",
  },
  {
    id: "14",
    question: "Which concept hides the complexity ?",
    options: randomiseData([
      "UML diagrams",
      "Class diagrams",
      "Abstraction",
      "Features",
    ]),
    answer: "Abstraction",
  },
  {
    id: "15",
    question: "'Polymorphism' means ....",
    options: randomiseData([
      "Many forms",
      "Data hiding",
      "A call to a method",
      "Encapsulation",
    ]),
    answer: "Many forms",
  },
  {
    id: "16",
    question: "Which of the following may have same methods with same name",
    options: randomiseData(["Data", "Function", "Objects", "classes"]),
    answer: "classes",
  },
  {
    id: "17",
    question: "With which symbol , basic aggregation is represented ?",
    options: randomiseData([
      "Filled diamond",
      "Filled rectangle",
      "Empty diamond",
      "Empty rectangle",
    ]),
    answer: "Empty diamond",
  },
  {
    id: "18",
    question:
      "Between classes , which kind of relationship is represented by aggregation?",
    options: randomiseData([
      "has - a",
      "a - part - of",
      "Both has - a & a - part - of",
      "is - a",
    ]),
    answer: "Both has - a & a - part - of",
  },
  {
    id: "19",
    question:
      "In class diagram, which symbol is used to represent inheritance ?",
    options: randomiseData([
      "An arrow pointing to subclass",
      "Two sided arrow which connect subclass and superclass",
      "An arrow pointing to superclass",
      "A single line connecting sub and superclass",
    ]),
    answer: "An arrow pointing to superclass",
  },
  {
    id: "20",
    question:
      "Class diagram Which symbol is used to represent class in class diagram?",
    options: randomiseData(["Circle", "Oval", "Rectangle", "None of these"]),
    answer: "Rectangle",
  },
]);
export { quizData };

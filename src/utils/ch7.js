import { randomiseData } from "./randomOptionGenerator";
//ch 7 = 20 marks

const quizData = randomiseData([
  {
    id: "01",
    question: "For which of the following, Sun Microsystems is known for?",
    options: randomiseData([
      "High - end Unix workstations",
      "High - end MAC workstations",
      "High - end Windows workstations",
      "All of these",
    ]),
    answer: "High - end Unix workstations",
  },
  {
    id: "02",
    question: "In which year, JAVA language was developed at Sun Microsystems?",
    options: randomiseData(["1990", "1991", "1989", "1986"]),
    answer: "1991",
  },
  {
    id: "03",
    question: "What is the full form of JDK?",
    options: randomiseData([
      "Java Developing Kit",
      "Java Demand Kit",
      "Java Development Key",
      "Java Development Kit",
    ]),
    answer: "Java Development Kit",
  },
  {
    id: "04",
    question: "Which code is faster to execute but not machine independent?",
    options: randomiseData(["Byte code", "Native", "Program", "Java binary"]),
    answer: "Native",
  },
  {
    id: "05",
    question: "What should be the extension of Java source file?",
    options: randomiseData([".class", ".java", ".net", ".javac"]),
    answer: ".java",
  },
  {
    id: "06",
    question:
      "Which routine determines how and in what order the other subroutines are used?",
    options: randomiseData([
      "Private( )",
      "main( )",
      "Public class( )",
      "Package( )",
    ]),
    answer: "main( )",
  },
  {
    id: "07",
    question: "IWhat is called by the Java interpreter?",
    options: randomiseData([
      "Public method",
      "Variables",
      "main() routine",
      "Private method",
    ]),
    answer: "main() routine",
  },
  {
    id: "08",
    question: "Which is a free - format language ?",
    options: randomiseData(["java", "visual basic", "sql", "MySql"]),
    answer: "java",
  },
  {
    id: "09",
    question: "How many primitive data types are supported by Java?",
    options: randomiseData(["Ten", "Six", "Five", "Eight"]),
    answer: "Eight",
  },
  {
    id: "10",
    question:
      "Which of the following specify the basic vocabulary of the language and how programs can be constructed using things like variables , expressions etc. ?",
    options: randomiseData([
      "Structure of program",
      "Grammar of language",
      "Syntax rules",
      "Description",
    ]),
    answer: "Syntax rules",
  },
  {
    id: "11",
    question: "Which data types are built into the system ?",
    options: randomiseData(["Primitive", "Secondary", "String", "Array"]),
    answer: "Primitive",
  },
  {
    id: "12",
    question: "Which data types are machine - independent ?",
    options: randomiseData(["Array", "String", "Secondary", "Primitive"]),
    answer: "Primitive",
  },
  {
    id: "13",
    question: "What is the default value of Boolean data type of Java ?",
    options: randomiseData(["False", "True", "0(Zero)", "1"]),
    answer: "False",
  },
  {
    id: "14",
    question:
      "Which of the following is an international standard for defining floating - point numbers and arithmetic?",
    options: randomiseData(["Java", "C++", "IEEE 754", "C#"]),
    answer: "IEEE 754",
  },
  {
    id: "15",
    question: "Which of the following is not proper to begin variable name?",
    options: randomiseData([
      "An alphabet",
      "Hash ( # )",
      "Underscore (_)",
      "Dollar ($)",
    ]),
    answer: "Underscore (_)",
  },
  {
    id: "16",
    question:
      "From the following which is the illegal name of variable in Java ?",
    options: randomiseData(["4me", "result", "amount", "price"]),
    answer: "4me",
  },
  {
    id: "17",
    question: 'Identify : " A name used for a constant value in Java ".',
    options: randomiseData(["Variable", "Identifier", "Literal", "Keyword"]),
    answer: "Literal",
  },
  {
    id: "18",
    question:
      "Which numeric digits are used for Hexadecimal numbers ( 16 digits ) in integer literals in Java ? [ M - 18 ]",
    options: randomiseData([
      "0 to 8 and A to E",
      "0 to 15",
      "0 to 9 and A to F",
      "0 to 16",
    ]),
    answer: "0 to 15",
  },
  {
    id: "19",
    question: "Which of the following are notations of Real number literals ?",
    options: randomiseData([
      "Standard",
      "Scientific",
      "Unicode",
      "Standard and Scientific",
    ]),
    answer: "Standard and Scientific",
  },
  {
    id: "20",
    question: "Which is the default type for floating point literal ?",
    options: randomiseData(["Long", "Double", "Byte", "Short"]),
    answer: "Double",
  },
  {
    id: "21",
    question: "Which of the following is used to store characters ?",
    options: randomiseData([
      "32 - bit Unicode",
      "4 - bit Unicode",
      "8 - bit Unicode",
      "16 - bit Unicode",
    ]),
    answer: "16 - bit Unicode",
  },
  {
    id: "22",
    question: "Which delimiter denotes single line comment in Java?",
    options: randomiseData(["//", "/*....*/", "#", "$"]),
    answer: "//",
  },
  {
    id: "23",
    question: "Which operator is used to concatenate string ?",
    options: randomiseData(["%", "$", "+", "="]),
    answer: "+",
  },
  {
    id: "24",
    question:
      "Which of the following is ' not equal to ' Comparison operator in Java ?",
    options: randomiseData(["!=", "==", "<=", ">="]),
    answer: "!=",
  },
  {
    id: "25",
    question: "What is the other name of Logical operators?",
    options: randomiseData([
      "Relational",
      "Arithmetic",
      "Boolean",
      "Comparison",
    ]),
    answer: "Boolean",
  },
  {
    id: "26",
    question:
      "Which of the following statement is used when there are many alternative actions to be taken depending the value of a variable or expression ? [ M - 15 ]",
    options: randomiseData(["Switch", "for", "while", "do...while"]),
    answer: "Switch",
  },
]);
const data = quizData.slice(0, 20);
export { data };

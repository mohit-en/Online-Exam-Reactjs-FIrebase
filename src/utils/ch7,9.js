import { randomiseData } from "./randomOptionGenerator";
//ch 7, 9 = 40 marks

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
  {
    id: "27",
    question:
      "Which of the following refer to the starting index value in arrays ? [ M - 15 , 18 ]",
    options: randomiseData(["0", "1", "null", "All of these"]),
    answer: "0",
  },
  {
    id: "28",
    question:
      "If 'str' is the object of String class and its content is \"Thank GOD\" , then what is the value of str.length ( ) ? [ M - 16 , 17 , 18 ]",
    options: randomiseData(["9", "10", "8", "11"]),
    answer: "9",
  },
  {
    id: "29",
    question:
      "What type of value is returned when we use get method of Calendar class with constant DAY_OF_WEEK as an argument ? [ M - 15 ]",
    options: randomiseData(["int", "char", "string", "boolean"]),
    answer: "int",
  },
  {
    id: "30",
    question:
      "Which of the following can be represented by Arrays ? [ M - 15 , M - 16 , M - 17 ]",
    options: randomiseData([
      "Vector",
      "Multi - dimensional data",
      "Matrix",
      "All of these",
    ]),
    answer: "All of these",
  },
  {
    id: "31",
    question:
      "Which of the following are useful when some options are to be performed on arious elements of the similar type ? [ M - 15 ]",
    options: randomiseData(["Class", "Arrays", "Object", "Methods"]),
    answer: "Arrays",
  },
  {
    id: "32",
    question: "How many ways are there to create an array object ? [ M - 16 ]",
    options: randomiseData(["1", "2", "3", "4"]),
    answer: "2",
  },
  {
    id: "33",
    question:
      "In Java , how can be array elements accessed using index for each dimension ? [ M - 15 ] , [ M - 16 ]",
    options: randomiseData(["{}", "[]", "()", "<>"]),
    answer: "[]",
  },
  {
    id: "34",
    question: "What is used to refer an element of an array ? [ M - 17 ]",
    options: randomiseData([
      "{}",
      "Array content",
      "Index or subscript",
      "Element reference",
    ]),
    answer: "Index or subscript",
  },
  {
    id: "35",
    question:
      "What is used as a separator of 1- D array values ?[ M - 15 , 18 ]",
    options: randomiseData([
      "; ( Semi colon )",
      "+ ( Plus )",
      "- ( Hyphen )",
      ", ( Comma )",
    ]),
    answer: ", ( Comma )",
  },
  {
    id: "36",
    question:
      "By using which of the following class we can use various static methods provided by Java ? OR Sort ( ) and Fill ( ) are methods of which of the following Java class ? [ M - 17 , 18 ]",
    options: randomiseData([
      "Array.java.data",
      "util.Array.java",
      "java.util.Arrays",
      "Array.java.fill",
    ]),
    answer: "java.util.Arrays",
  },
  {
    id: "37",
    question:
      "Which array class method is used to search an element in an array ? [ M - 16 , 17 ]",
    options: randomiseData([
      "Search ( )",
      "binary ( )",
      "SearchArray ( )",
      "binarySearch ( )",
    ]),
    answer: "binarySearch ( )",
  },
  {
    id: "38",
    question:
      "In Java , 2- D array can be declared in which of the following correct way ? [ M - 16 ]",
    options: randomiseData([
      "int marks [ ] [ ] = new int [ 5 ] [ 3 ] ;",
      "int marks = int [ 5 ] , [ 3 ] ;",
      "int marks [ ] ( ) = new int ( 5 ) ( 3 ) ;",
      "int marks ( ) ( ) = new int ( 5 ) , ( 3 ) ;",
    ]),
    answer: "int marks [ ] [ ] = new int [ 5 ] [ 3 ] ;",
  },
  {
    id: "39",
    question:
      "Which Java classes are used to handle strings ? [ M - 15 ] , [ M - 16 ]",
    options: randomiseData([
      "Buffer and String.Java",
      "Strings and Buffer.Java",
      "String and StringBuffer",
      "String and Buffer",
    ]),
    answer: "String and StringBuffer",
  },
  {
    id: "40",
    question:
      "What is used to create a String object which is same as object specified in argument ? [ M - 18 ]",
    options: randomiseData([
      "String ( String strObj )",
      "String ( string literal )",
      "String ( char ary [ ] , int start , int len )",
      "String ( )",
    ]),
    answer: "String ( String strObj )",
  },
]);
const data = quizData.slice(0, 40);
export { data };

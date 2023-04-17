import { randomiseData } from "./randomOptionGenerator";
// chapter 8, 9 = 40 marks
const quizData = randomiseData([
  {
    id: "01",
    question: "Which of the following defines attributes and methods?",
    options: randomiseData(["class", "Object", "Instance", "Variable"]),
    answer: "class",
  },
  {
    id: "02",
    question:
      "Which of the following refers more than one method having same name but different parameters [ M - 16 ]",
    options: randomiseData([
      "Overloaded methods",
      "Duplicate methods",
      "Overridden methods",
      "All of these",
    ]),
    answer: "Overloaded methods",
  },
  {
    id: "03",
    question:
      "Which of the following is the keyword used to refer a superclass constructor in subclass constructor ? [ M - 18 ]",
    options: randomiseData([
      "extends",
      "name of the superclass",
      "super",
      "new",
    ]),
    answer: "super",
  },
  {
    id: "04",
    question: "Which keyword is used to define class in Java ?",
    options: randomiseData(["main", "class", "void", "static"]),
    answer: "class",
  },
  {
    id: "05",
    question:
      "Which is a template for multiple objects with similar features ?",
    options: randomiseData(["Class", "Attribute", "Object", "Method"]),
    answer: "Class",
  },
  {
    id: "06",
    question:
      "Which of the following contains both data and program code ? [ M - 16 ]",
    options: randomiseData(["Object", "Class", "Function", "Attribute"]),
    answer: "Class",
  },
  {
    id: "07",
    question: "Java class is made up of which component / s ?",
    options: randomiseData([
      "Attributes",
      "Behaviour",
      "Behaviour and Attributes",
      "Method",
    ]),
    answer: "Behaviour and Attributes",
  },
  {
    id: "08",
    question:
      "In Object - Oriented Programming ( OOP ) languages, creating an object is also known as what ? [ M - 17 ]",
    options: randomiseData([
      "Object instantiation",
      "Object making",
      "Object creation",
      "None of all",
    ]),
    answer: "Object instantiation",
  },
  {
    id: "09",
    question:
      "Which of the following are steps to create an object from a class ? [ M - 15, 17 ]",
    options: randomiseData([
      "Declaration",
      "Instantiation",
      "Initialization",
      "All of these",
    ]),
    answer: "All of these",
  },
  {
    id: "10",
    question:
      "Which keyword is used to create an object by allocating memory ? [ M - 16 ]",
    options: randomiseData(["Create", "Declare", "New", "Initialize"]),
    answer: "New",
  },
  {
    id: "11",
    question:
      "What is the name of a special memory portion where the objects live ? [ M - 16 ]",
    options: randomiseData(["Heap", "Class", "Object", "Hard disk"]),
    answer: "Heap",
  },
  {
    id: "12",
    question:
      "Which operator is used to refer instance variables and instance methods ?[ M - 15 , 17 , 18 ]",
    options: randomiseData([
      "Is equal to ( = )",
      "Dollar ( $ )Plus ( + )",
      "Plus ( + )",
      "Dot ( . )",
    ]),
    answer: "Dot ( . )",
  },
  {
    id: "13",
    question: "In which part value of class variables are stored ? [ M - 16 ]",
    options: randomiseData([
      "Class itself",
      "Memory allocated to object",
      "Instance",
      "Anywhere",
    ]),
    answer: "Class itself",
  },
  {
    id: "14",
    question:
      "Which variables can be accessed without creating instance of a class ? [ M - 18 ]",
    options: randomiseData(["Object", "Static", "Method", "Void"]),
    answer: "Static",
  },
  {
    id: "15",
    question:
      "What are the variables defined inside method or blocks are called as ? [ M - 16 , 18 ]",
    options: randomiseData(["Class", "Method", "Instance", "Local"]),
    answer: "Local",
  },
  {
    id: "16",
    question:
      "Which variables are created when the method or block is started and destroyed when the method or block has completed ? [ M - 17 ]",
    options: randomiseData(["Global", "Local", "Class", "Instance"]),
    answer: "Local",
  },
  {
    id: "17",
    question: "Which keyword is used to create class variables ? [ M - 16 ]",
    options: randomiseData(["Void", "Main", "Static", "Public"]),
    answer: "Static",
  },
  {
    id: "18",
    question: "What is the meaning of the word ' Polymorphism ' ?",
    options: randomiseData([
      "Many Forms",
      "Method overwritten",
      "Method's signature",
      "Many Reports",
    ]),
    answer: "Many Forms",
  },
  {
    id: "19",
    question:
      "What is the different methods having same name but a different signature called as ? [ M - 18 ]",
    options: randomiseData([
      "Many Reports",
      "Class Overwritten",
      "Class Overloading",
      "Method Overloading",
    ]),
    answer: "Method Overloading",
  },
  {
    id: "20",
    question:
      "Which of the following is a special kind of method that is invoked when a new object is created ? [ M - 18 ]",
    options: randomiseData(["Class", "Object", "Method", "Constructor"]),
    answer: "Constructor",
  },
  {
    id: "21",
    question:
      "Which of the following initializes the attributes of a newly created object using default values based on their data types ? [ M - 16 ]",
    options: randomiseData([
      "Instance",
      "Static",
      "Non - static",
      "Constructor",
    ]),
    answer: "Constructor",
  },
  {
    id: "22",
    question:
      "From the following which type of visibility modifiers are used to protect a method or variables ? [ M - 17 ]",
    options: randomiseData([
      "Public",
      "Package",
      "Protected and Private",
      "All of them",
    ]),
    answer: "All of them",
  },
  {
    id: "23",
    question:
      "Which type of access should be defined , when we want to make method or variable visible to all the classes outside ? [ M - 17 ] ",
    options: randomiseData(["Package", "Public", "Private", "Accessor"]),
    answer: "Public",
  },
  {
    id: "24",
    question:
      "Which of the following is default level protection ? [ M - 17 , 18 ]",
    options: randomiseData(["Public", "Package", "Private", "Protected"]),
    answer: "Package",
  },
  {
    id: "25",
    question:
      'Which level of protection is used to share with the methods declared as " friend " ? [ M - 16 ]',
    options: randomiseData(["Package", "Public", "Private", "Protected"]),
    answer: "Protected",
  },
  {
    id: "26",
    question:
      "Which protection can be used to achieve highest level of protection ? [ M - 16 , 18 ]",
    options: randomiseData(["Package", "Private", "Protected", "Public"]),
    answer: "Private",
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

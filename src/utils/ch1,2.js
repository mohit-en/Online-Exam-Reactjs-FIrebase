import { randomiseData } from "./randomOptionGenerator";
//ch 1,2 = 20 marks
const quizData = randomiseData([
  {
    id: "01",
    question:
      "Which of the following attributes of form is used to specify where to send the form data when the form is submitted ? [ M - 17 ]",
    options: randomiseData(["method", "action", "submit", "input"]),
    answer: "action",
  },
  {
    id: "02",
    question:
      "Which of the following attributes of form specifies the HTTP method to be used when sending the data ? [ M - 18 ]",
    options: randomiseData(["method", "action", "submit", "input"]),
    answer: "method",
  },
  {
    id: "03",
    question:
      "Which of the following method allows only a limited amount of information to be sent at a time ? [ 0-16 ]",
    options: randomiseData(["GET", "POST", "SET", "PUT"]),
    answer: "GET",
  },
  {
    id: "04",
    question:
      "Which of the following method sends the data as a block through the HTTP transaction ? [ M - 15 ]",
    options: randomiseData(["GET", "SET", "PUT", "POST"]),
    answer: "POST",
  },
  {
    id: "05",
    question:
      "Which of the following elements allows multi - line text input ? [ M - 15 , 18 0-14 ]",
    options: randomiseData(["Textarea", "Input", "Select and Option", "Form"]),
    answer: "Select and Option",
  },
  {
    id: "06",
    question:
      "Which of the following is a free open source web development IDE ? [ O - 16 ]",
    options: randomiseData(["HTML", "KompoZer", "SciTE", "Base"]),
    answer: "KompoZer",
  },
  {
    id: "07",
    question:
      "Which of the following allows for more interactivity and control in data entry ? [ M - 17 ]",
    options: randomiseData([
      "Mobile phone",
      "Internet",
      "HTML forms",
      "Web site",
    ]),
    answer: "HTML forms",
  },
  {
    id: "08",
    question:
      "In HTML , which of the following element is not used to create a form ? [ Oct - 14 ]",
    options: randomiseData(["Form", "Image", "Input", "Text Area"]),
    answer: "Image",
  },
  {
    id: "09",
    question: "Which option is used to open recently opened file ?",
    options: randomiseData([
      "File → Open",
      "File → Open an exist",
      "File → Open Recent file",
      "File → Recent Pages",
    ]),
    answer: "File → Recent Pages",
  },
  {
    id: "10",
    question:
      "Which of the following menu is used to insert a label for the name field in KompoZer?",
    options: randomiseData([
      "Insert  Form  Create Label",
      "Insert  Form  Label Assign",
      "Insert  Form  Insert Label",
      "Insert  Form  Define Label",
    ]),
    answer: "Insert  Form  Define Label",
  },
  {
    id: "11",
    question: "How many attributes are used by <form> elements?",
    options: randomiseData(["2", "3", "4", "5"]),
    answer: "2",
  },
  {
    id: "12",
    question: "Which of the following is not an example of Open Source IDEs ?",
    options: randomiseData(["Netchain", "Eclipse", "Netbeans ", "JBuilder"]),
    answer: "Netchain",
  },
  {
    id: "13",
    question:
      "Which of the following viewing modes are there in Edit mode toolbar of KompoZer?",
    options: randomiseData([
      "Normal, HTML Tag, Preview",
      "Normal, Source, Split",
      "Normal, CSS tag, View ",
      "Design, Split, Source code",
    ]),
    answer: "Normal, HTML Tag, Preview",
  },
  {
    id: "14",
    question:
      "Which element is used to create a drop down list or menu in a form of HTML?",
    options: randomiseData([
      "<select>.....</select>",
      "<option>.....</option>",
      "<pulldown>.....</pulldown>",
      "<body>.....</body>",
    ]),
    answer: "<select>.....</select>",
  },
  {
    id: "15",
    question:
      "Which of the following is a software application that provides complete facilities toprogrammer to develop software?",
    options: randomiseData([
      "Internet Development Environment",
      "Internet Development Active",
      "Interface Development Environment",
      "Integrated Development Environment",
    ]),
    answer: "Integrated Development Environment",
  },
  {
    id: "16",
    question:
      "Which by default name of webpage is shown when user starts KompoZer first time?",
    options: randomiseData(["Document1 ", "kompozer1", "File1", "Untitled"]),
    answer: "Untitled",
  },
  {
    id: "17",
    question:
      "Which of the following are viewed when user open form properties dialog box in KompoZer?",
    options: randomiseData([
      "Form Name, Action URL, Method",
      "Field Name, Method URL, Label",
      "Action URL, Method, Field ",
      "Field Name, Action URL, Method",
    ]),
    answer: "Form Name, Action URL, Method",
  },
  {
    id: "18",
    question:
      "Which of the following attributes are used in textarea element in HTML form?",
    options: randomiseData([
      "cols, rolls",
      "rows, codes",
      "codes, rolls",
      "rows, cols",
    ]),
    answer: "rows, cols",
  },
  {
    id: "19",
    question: "Which of the following stands for “WYSIWYG” ?",
    options: randomiseData([
      "When You See Is When You Get",
      "What You See Is When You Get",
      "What You See Is What You Get",
      "When You See Is What You Get",
    ]),
    answer: "What You See Is What You Get",
  },
  {
    id: "20",
    question:
      "Which tool of KompoZer is used to give rapid access of the files on both local machine andremote servers?",
    options: randomiseData([
      "Site Manager",
      "Page Manager",
      "Document Manager",
      "None of these",
    ]),
    answer: "Site Manager",
  },
  {
    id: "21",
    question: "Which type of data can be stored in the variables ? [ N - 15 ]",
    options: randomiseData(["Numbers", "Strings", "Text", "All of these"]),
    answer: "All of these",
  },
  {
    id: "22",
    question:
      "With which keyword we can declare a variable ? [ O - 14 ] , [ M - 16 ]",
    options: randomiseData(["Var", "Script", "CSS", "HTML"]),
    answer: "Var",
  },
  {
    id: "23",
    question:
      "Which event would occur when document or image is loaded ? [ O - 14 , M - 18 ]",
    options: randomiseData(["Focus", "Reset", "Load", "Unload"]),
    answer: "Load",
  },
  {
    id: "24",
    question:
      "With which event , elements such as radio button becomes inactive ? [ O - 16 ]",
    options: randomiseData(["Change", "Blur", "Unload", "Select"]),
    answer: "Blur",
  },
  {
    id: "25",
    question:
      "In how many parts CSS rules are mainly divided ? [ O - 14 , M - 17 , 18 ]",
    options: randomiseData(["Four", "Six", "Two", "Three"]),
    answer: "Two",
  },
  {
    id: "26",
    question:
      "Styles can be applied on which of the following HTML element ? [ M - 17 , 18 ]",
    options: randomiseData(["Declaration", "Property", "Value", "Selector"]),
    answer: "Selector",
  },
  {
    id: "27",
    question:
      "In the example of CSS , H1 { color : green } ; Which is selector ?[ O - 14 , M - 16 , 0-16 ]",
    options: randomiseData(["H1", "Color", "Green", "{ }"]),
    answer: "H1",
  },
  {
    id: "28",
    question:
      "In CSS , property and value are separated by which symbol ? [ O - 16 ]",
    options: randomiseData(["Comma", "Colon", "Space", "Semicolon"]),
    answer: "Colon",
  },
  {
    id: "29",
    question:
      "By using which option , we can set all element types to appear in a style as per our choice ? [ M - 16 ]",
    options: randomiseData(["Java script", "CSS", "Web browser", "Web server"]),
    answer: "CSS",
  },
  {
    id: "30",
    question:
      "Which of the following option/s of our web site is / are controlled by CSS ? [ 0-14 ][ M - 18 ]",
    options: randomiseData([
      "Font types",
      "Font and element colors",
      "Margins",
      "All of these",
    ]),
    answer: "All of these",
  },
  {
    id: "31",
    question:
      "Pad spaces and element position of our website are controlled by which option ?[ M - 18 ]",
    options: randomiseData(["HTML", "CSS", "JS", "Web Browser"]),
    answer: "CSS",
  },
  {
    id: "32",
    question: "Which tab will show the CSS code ? [ N - 15 , 0-16 , M - 18 ]",
    options: randomiseData(["CSS", "General", "Text", "HTML"]),
    answer: "General",
  },
  {
    id: "33",
    question:
      "Which of the following varies with different browsers ? [ N - 15 ]",
    options: randomiseData([
      "Scripting language",
      "Borders",
      "HTML",
      "CSS compatibility",
    ]),
    answer: "CSS compatibility",
  },
  {
    id: "34",
    question:
      "Which kind of web pages can be created using HTML ? [ M - 15 , 0-16 , M - 17 ]",
    options: randomiseData([
      "Dynamic",
      "Static",
      "Simple without formatting",
      "All of these",
    ]),
    answer: "Static",
  },
  {
    id: "35",
    question:
      "Which is used to improve the design in web pages and validate the Forms ? [ N - 15 , M - 17 ]",
    options: randomiseData(["JS", "HTML", "CSS", "HTML forms"]),
    answer: "JS",
  },
  {
    id: "36",
    question:
      "A reusable block of code that performs a particular task is called ..... [ M - 15 , M - 16 ]",
    options: randomiseData(["Script", "Function", "Style sheet", "Web page"]),
    answer: "Function",
  },
  {
    id: "37",
    question: "What is defined by the keyword function ? [ N - 15 , M - 18 ]",
    options: randomiseData([
      "Style sheet",
      "Function",
      "Javascript",
      "None of these",
    ]),
    answer: "Function",
  },
  {
    id: "38",
    question:
      "Which of the following is inbuilt function of JavaScript ? [ N - 15 , 0-16 , M - 18 ]",
    options: randomiseData([
      "ValidateForm ( )",
      "Alert ( )",
      "Check ( )",
      "Draw ( )",
    ]),
    answer: "Alert ( )",
  },
  {
    id: "39",
    question:
      "Which symbols are used to start and end a block ? [ O - 14 , N - 15 , 0-16 , M - 18 ]",
    options: randomiseData(["( )", "[ ]", "{ }", '" "']),
    answer: "{ }",
  },
  {
    id: "40",
    question:
      "Under which heading a style rule will appear , whenever we add new element , in CSS Style sheets dialogbox ? [ M - 18 ]",
    options: randomiseData([
      "General",
      "Internal stylesheet",
      "Aural",
      "Background",
    ]),
    answer: "Internal stylesheet",
  },
]);
const data = quizData.slice(0, 40);
export { data };

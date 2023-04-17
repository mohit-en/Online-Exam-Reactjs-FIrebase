import { randomiseData } from "./randomOptionGenerator";
//ch 1,2 = 20 marks
const quizData = randomiseData([
  {
    id: "01",
    question: "",
    options: randomiseData(["", "", "", ""]),
    answer: "",
  },
]);
const data = quizData.slice(0, 40);
export { data };

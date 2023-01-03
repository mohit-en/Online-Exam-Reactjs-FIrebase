import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  setDoc,
  arrayUnion,
  getDoc,
  deleteField,
} from "firebase/firestore";

//
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

//
import { quizData } from "./utils/quiz";
import { db } from "./utils/firebase";

function App() {
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState(quizData);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);
  const [unitNo, setUnitNo] = useState(7);

  //
  const [counterTrial, setCounterTrial] = useState(0);
  const [imgUrl, setImgUrl] = useState(
    "https://media.tenor.com/oO9gPLLv9PcAAAAd/goli-beta-masti-nahi-jethalal-champaklal-gada.gif"
  );
  const [showGoliImg, setShowGoliImg] = useState(false);

  //
  const [usersData, setUsersData] = useState({
    rollNo: "",
    computerId: "",
    studentName: "",
  });

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // Start Quiz
  const startQuiz = async (event) => {
    event.preventDefault();

    if (usersData.computerId && usersData.rollNo && usersData.studentName) {
      const snapData = await getDoc(doc(db, "students", usersData.rollNo));

      const d = (await snapData.exists())
        ? { ...snapData.data(), isDataFound: [] }
        : { isDataFound: "customundefined" };

      const isAbleToGiveExam =
        d.isDataFound == "customundefined"
          ? true
          : d.data && d.data.find((item) => item.unit_id === unitNo)
          ? false
          : d.status == "pending"
          ? false
          : true;

      if (isAbleToGiveExam) {
        setShowGoliImg(false);
        setShowStart(false);
        setShowQuiz(true);

        await setDoc(
          doc(db, "students", usersData.rollNo),
          {
            roll_no: usersData.rollNo,
            name: usersData.studentName,
            status: "pending",
          },
          { merge: true }
        );
      } else {
        var i = counterTrial + 1;
        setCounterTrial(i);
        if (i >= 3) {
          setImgUrl(
            "https://media.tenor.com/BqpV1jtLUGEAAAAM/arre-kyu-mera-loy-pee-raha-hai-jadiya-jethalal-and-goli.gif"
          );
        }
        //
        setShowGoliImg(true);
      }
    }
  };

  // Check Answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        event.target.classList.add("bg-success");
        setMarks(marks + 1);
      } else {
        event.target.classList.add("bg-danger");
      }
    }
  };

  // Next Quesion
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
    setQuestionIndex(questionIndex + 1);
  };

  // Show Result
  const showTheResult = async () => {
    //

    if (marks <= 5) {
      setImgUrl(
        "https://qph.cf2.quoracdn.net/main-qimg-2cd344ad99b5ce46f033c80553392a06"
      );
    } else if (marks <= 10) {
      setImgUrl(
        "https://media.tenor.com/BomrEy3LytgAAAAd/beta-tumse-na-ho-payega-gangs-of-wasseypur.gif"
      );
    } else if (marks <= 15) {
      setImgUrl("https://media.tenor.com/T2quXxEDDAEAAAAC/mirzapur-kaleen.gif");
    } else {
      setImgUrl("https://media.tenor.com/FzHuYmU7pToAAAAM/kbc-adbhut.gif");
    }

    setShowGoliImg(true);

    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);

    await setDoc(
      doc(db, "students", usersData.rollNo),
      {
        roll_no: usersData.rollNo,
        name: usersData.studentName,
        status: deleteField(),
        data: arrayUnion({
          date: Date.now(),
          marks: marks,
          unit_id: unitNo,
          user_no: usersData.computerId,
        }),
      },
      { merge: true }
    );

    // await setDoc(doc(db, "students", usersData.rollNo), {
    //   data: arrayUnion({
    //     date: Date.now(),
    //     marks: marks,
    //     unit_id: unitNo,
    //     user_no: usersData.computerId,
    //   }),
    // });
  };

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };

  return (
    <>
      {showGoliImg ? (
        <div
          className="position-absolute  d-flex justify-content-center align-items-center mt-2"
          style={{ height: "30vh", width: "100vw" }}
        >
          <img src={imgUrl} style={{ height: "250px", width: "500px" }} />
        </div>
      ) : null}

      {/* Welcome Page */}
      <Start
        startQuiz={startQuiz}
        showStart={showStart}
        usersData={usersData}
        setUsersData={setUsersData}
      />

      {/* Quiz Page */}
      <Quiz
        showQuiz={showQuiz}
        question={question}
        quizs={quizs}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        selectedAnswer={selectedAnswer}
        questionIndex={questionIndex}
        nextQuestion={nextQuestion}
        showTheResult={showTheResult}
      />

      {/* Result Page */}
      <Result
        showResult={showResult}
        quizs={quizs}
        marks={marks}
        startOver={startOver}
      />
    </>
  );
}

export default App;

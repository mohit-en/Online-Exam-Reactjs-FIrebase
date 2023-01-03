import React from "react";

const Start = ({ startQuiz, showStart, usersData, setUsersData }) => {
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">Chapter No 7 - Java Basics</h1>
            <form action="#" method="get" onSubmit={startQuiz}>
              <div className="container">
                <div className="row">
                  <label htmlFor="rollno">Roll No</label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="rollno"
                    placeholder="Enter Roll Number"
                    required
                    value={usersData.rollNo}
                    onChange={(e) =>
                      setUsersData({
                        ...usersData,
                        rollNo: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="user_no">User No</label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="user_no"
                    placeholder="Enter your computer user Id's number"
                    required
                    value={usersData.computerId}
                    onChange={(e) =>
                      setUsersData({ ...usersData, computerId: e.target.value })
                    }
                  />
                  <label htmlFor="name">Name</label>
                  <input
                    type="textbox"
                    className="form-control mb-4"
                    id="name"
                    placeholder="Enter your Name"
                    required
                    value={usersData.studentName}
                    onChange={(e) =>
                      setUsersData({
                        ...usersData,
                        studentName: e.target.value,
                      })
                    }
                  />
                  <input
                    type="submit"
                    className="btn px-4 py-2 bg-light text-dark fw-bold"
                    value="Start Quiz"
                  />
                </div>
              </div>
            </form>
            {/* <button
              onClick={startQuiz}
              className="btn px-4 py-2 bg-light text-dark fw-bold"
            >
              Start Quiz
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;

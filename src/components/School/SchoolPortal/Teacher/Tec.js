import React from 'react'
import { NavLink } from 'react-router-dom'
import Learning from "../../../../Assets/Images/learning.png"
const Tec = () => {
  return (
    <div>
       <div className="container">
              <h3 className="text-center fw-bold mt-3">Teachers</h3>
              <div className="row d-flex justify-content-center">
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-time-table"}
                  >
                    <i className="fa-solid fa-clock text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      href="/"
                    >
                      <h6 className="text-center pt-2">Time Table</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-take-attendance"}
                  >
                    <i className="fa-solid fa-chalkboard-user text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      to={"/teacher-take-attendance"}
                    >
                      <h6 className="text-center pt-2">Take Attendance</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-view-attendance"}
                  >
                    <i className="fa-solid fa-chalkboard-user text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      to={"/teacher-view-attendance"}
                    >
                      <h6 className="text-center pt-2">View Attendance</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-weekly-attendance"}
                  >
                    <i className="fa-solid fa-calendar-week text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      to={"/teacher-weekly-attendance"}
                    >
                      <h6 className="text-center pt-2">Weekly</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-monthly-attendance"}
                  >
                    <i className="fa-solid fa-calendar-days text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      to={"/teacher-monthly-attendance"}
                    >
                      <h6 className="text-center pt-2">Monthly</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-yearly-attendance"}
                  >
                    <i className="fa-solid fa-calendar-check text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      to={"/teacher-yearly-attendance"}
                    >
                      <h6 className="text-center pt-2">Annual</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    className="text-center text-decoration-none text-reset"
                    to={"/teacher-lms"}
                  >
                    <i className="fa-solid fa-calendar-check text-center fa-2x mt-3" />
                  </NavLink>
                  <div className="card-body">
                    <NavLink
                      className="text-center text-decoration-none text-reset"
                      to={"/teacher-lms"}
                    >
                      <h6 className="text-center pt-2">Learning Management System</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <i className="fa-solid fa-handshake-simple text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">Meeting</h6>
                  </div>
                </div>
                {/* <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <i className="fa-solid fa-comments text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">
                      <a
                        className="text-decoration-none text-dark"
                        href="feedback.html"
                      >
                        Feedback
                      </a>
                    </h6>
                  </div>
                </div> */}
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <NavLink
                    to={"/teacher-add-result"}
                    className={"flex justify-center flex-col items-center"}
                    >
                    <i className="fa-solid fa-chart-bar text-center fa-2x mt-3" />
                    <div className="card-body">
                      <h6 className="text-center pt-2">Add Result</h6>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Tec

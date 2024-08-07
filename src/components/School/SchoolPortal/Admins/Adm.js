import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Adm = () => {
    const navigate = useNavigate();
    const adminPanelNavigator = () => {
      navigate("/admin-dashboard");
    };
  return (
    <div>
      <div className="container">
              <h3 className="text-center fw-bold mt-3">Administration</h3>
              <div className="row d-flex justify-content-center">
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                <NavLink
                    to={"/accounts"}
                    className={"flex justify-center flex-col items-center"}
                    >
                  <i className="fa-solid fa-file-invoice text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">

                        Accounts

                    </h6>
                  </div>
                  </NavLink>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                <NavLink
                    to={"/teacherslip"}
                    className={"flex justify-center flex-col items-center"}
                    >
                  <i className="fa-solid fa-user-tie text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">

                        Employment{" "}

                    </h6>
                  </div>
                  </NavLink>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <i className="fa-solid fa-money-bill-1-wave text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">Salary</h6>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                <NavLink
                    to={"/receipt"}
                    className={"flex justify-center flex-col items-center"}
                  >
                  <i className="fa-solid fa-file-invoice-dollar text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">Fee Schedule</h6>
                  </div>
                  </NavLink>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">

                <NavLink
                    to={"/admin-reminder"}
                    className={"flex justify-center flex-col items-center"}
                  >
                  <i className="fa-solid fa-calendar-check text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">Reminder</h6>
                  </div>
                  </NavLink>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <i className="fa-solid fa-comments text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">
                      <NavLink
                        className="text-decoration-none text-dark"
                        to="/admin-feedback"
                      >
                        Feedback
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div
                  className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3 cursor-pointer"
                  onClick={adminPanelNavigator}
                >
                  <i className="fa-solid fa-user-tie text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">Admin Panel</h6>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <i className="fa-regular fa-handshake text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">Teacher's Meeting</h6>
                  </div>
                </div>
                <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
                  <i className="fa-solid fa-handshake text-center fa-2x mt-3" />
                  <div className="card-body">
                    <h6 className="text-center pt-2">
                      <a
                        className="text-decoration-none text-dark"
                        href="https://example.com"
                      >
                        Parent's Meeting
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Adm

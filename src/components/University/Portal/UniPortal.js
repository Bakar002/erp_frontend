import React from "react";

import "./UniPortal.css";

import Logo from "../../../Assets/Img/logo.webp";

import { NavLink, useNavigate } from "react-router-dom";
export default function UniPortal() {
  const navigate = useNavigate();
  const adminPanelNavigator = () => {
    navigate("/admin-dashboard");
  };
  return (
    <div className="container pt-3">
      <div className="text-center d-flex justify-content-center">
        <h1 className="text-center school ">Belike Edu. Software</h1>
        <img
          alt=""
          className="ms-lg-2 logo"
          src={Logo}
          style={{
            height: "70px",
            width: "70px",
          }}
        />
      </div>

             
        <div className="container">
          <h3 className="text-center fw-bold my-4">Books of Different Departments</h3>
          <div className="row d-flex justify-content-center">
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-c text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/university/commerce">
                <div className="card-body">
                  <h6 className="text-center pt-2">Commerce Department</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
            <i className="fa-solid fa-c text-center fa-2x mt-3" />

              <a className="text-decoration-none" href="/university/cs">
                <div className="card-body">
                  <h6 className="text-center pt-2">Computer Science Department</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-a text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/university/arts">
                <div className="card-body">
                  <h6 className="text-center pt-2">Arts Literature</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-i text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/university/islamic">
                <div className="card-body">
                  <h6 className="text-center pt-2">Islamic studies</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-b text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/university/bed">
                <div className="card-body">
                  <h6 className="text-center pt-2">B.ed</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-6 text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/school/grade-six">
                <div className="card-body">
                  <h6 className="text-center pt-2">Get books</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-7 text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/school/grade-seven">
                <div className="card-body">
                  <h6 className="text-center pt-2">Get books</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-8 text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/school/grade-eight">
                <div className="card-body">
                  <h6 className="text-center pt-2">Get books</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <i className="fa-solid fa-9 text-center fa-2x mt-3" />
              <a className="text-decoration-none" href="/school/grade-nine">
                <div className="card-body">
                  <h6 className="text-center pt-2">Get books</h6>
                </div>
              </a>
            </div>
            <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
              <div className="d-flex justify-content-center">
                <i className="fa-solid fa-1 text-center fa-2x mt-3" />
                <i className="fa-solid fa-0 text-center fa-2x mt-3" />
              </div>
              <a className="text-decoration-none" href="/school/grade-ten">
                <div className="card-body">
                  <h6 className="text-center pt-2">Get books</h6>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
  );
}

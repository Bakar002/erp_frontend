import React from 'react';
import { NavLink } from 'react-router-dom';

const AdmissionsAll = () => {
  return (
    <div className="container ">
      <h3 className="text-center fw-bold my-4">Admissions</h3>
      <div className="row d-flex justify-content-center">
        <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
          <NavLink
            className="text-reset text-decoration-none text-center"
            to="/admission"
          >
            {/* Replace with appropriate icon */}
            <i className="fa-solid fa-temperature-high text-center fa-2x mt-3" />
          </NavLink>
          <div className="card-body">
            <h6 className="text-center pt-2">
              <NavLink
                className="text-reset text-decoration-none text-center"
                to="/admission"
              >
                Summer
              </NavLink>
            </h6>
          </div>
        </div>
        <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
          <NavLink
            className="text-reset text-decoration-none text-center"
            to="/admission"
          >
            {/* Replace with appropriate icon */}
            <i className="fa-solid fa-atom text-center fa-2x mt-3" />
          </NavLink>
          <div className="card-body">
            <h6 className="text-center pt-2">
              <NavLink
                className="text-reset text-decoration-none text-center"
                to="/admission"
              >
                Annual
              </NavLink>
            </h6>
          </div>
        </div>
        <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
          <NavLink
            className="text-reset text-decoration-none text-center"
            to="/admission"
          >
            {/* Replace with appropriate icon */}
            <i className="fa-solid fa-school-flag text-center fa-2x mt-3" />
          </NavLink>
          <div className="card-body">
            <h6 className="text-center pt-2">
              <NavLink
                className="text-reset text-decoration-none text-center"
                to="/admission"
              >
                Academy
              </NavLink>
            </h6>
          </div>
        </div>
        {/* <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
          <i className="fa-solid fa-microchip text-center fa-2x mt-3" />
          <div className="card-body">
            <h6 className="text-center pt-2">
              <NavLink
                className="text-decoration-none text-dark"
                to="/admission"
              >
                IT Courses
              </NavLink>
            </h6>
          </div>
        </div> */}
        <div className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
          <NavLink
            className="text-reset text-decoration-none text-center"
            to="/admission"
          >
            {/* Replace with appropriate icon */}
            <i className="fa-solid fa-school text-center fa-2x mt-3" />
          </NavLink>
          <div className="card-body">
            <h6 className="text-center pt-2">
              <NavLink
                className="text-reset text-decoration-none text-center"
                to="/admission"
              >
                Home Tuition
              </NavLink>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsAll;

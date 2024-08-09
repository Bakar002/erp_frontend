import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SchoolData.css"; // Import custom styles
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loadCurrentAdminAction from "../../Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import loadCurrentTeacherAction from "../../Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher";
import loadCurrentStudentAction from "../../Redux/Student/Actions/loadCurrentStudentAction.Student";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

import Logo from "../../../Assets/school.png";

const services = {
  "Our Partners": [
    { name: "All Schools and Academies Collaborations", img: Logo },
    { name: "Admission For All", img: Logo },
    { name: "Board Papers", img: Logo },
    { name: "Syllabus Grade 1-10", img: Logo },
  ],
  "Portal": [
    { name: "Administration", img: Logo },
    { name: "Teachers", img: Logo },
    { name: "Students", img: Logo },
  ],
  "School Store": [
    { name: "Uniform", img: Logo },
    { name: "Books", img: Logo },
    { name: "Stationary", img: Logo },
  ]
};

const SchoolData = () => {
  const [admins, setAdmins] = useState([]);
  const [displayAdmin, setDisplayAdmin] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentAdminData } = useSelector((state) => state.currentAdminData);
  const { currentTeacherData } = useSelector((state) => state.currentTeacherData);
  const { currentStudentData } = useSelector((state) => state.currentStudentData);

  useEffect(() => {
    dispatch(loadCurrentAdminAction());
    dispatch(loadCurrentTeacherAction());
    dispatch(loadCurrentStudentAction());
  }, [dispatch]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-admins");
        setAdmins(response.data.data);
      } catch (error) {
        toast.error("Failed to load admins");
      }
    };

    fetchAdmins();
  }, []);

  useEffect(() => {
    const userRoleData = currentAdminData?.admin || currentTeacherData?.teacher || currentStudentData?.student;

    if (userRoleData && (currentTeacherData || currentStudentData)) {
      const matchedAdmin = admins.find(admin => admin._id === userRoleData.adminId);
      if (matchedAdmin) {
        setDisplayAdmin(matchedAdmin);
      }
    } else if (currentAdminData) {
      setDisplayAdmin(currentAdminData.admin);
    }
  }, [admins, currentAdminData, currentTeacherData, currentStudentData]);

  if (!displayAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="school-data-container">
      <div className="user-info-container">
        <div className="user-info">
          <img
            alt="Admin Avatar"
            className="user-avatar"
            src={displayAdmin.adminAvatar || "/default-avatar.png"}
            style={{ height: "70px", width: "70px" }} // Adjust in CSS if needed
          />
          <div className="user-details">
            <h1 className="user-name">{displayAdmin.adminName}</h1>
            <p>Contact: {displayAdmin.contactNumber}</p>
            <p>Address: {displayAdmin.address}</p>
          </div>
        </div>
      </div>

      <div className="services-section">
        {Object.entries(services).map(([heading, blocks]) => (
          <div key={heading} className="service-category">
            <h3 className="service-heading">{heading}</h3>
            <div className="services-grid">
              {blocks.map((service) => (
                <div key={service.name} className="service-card">
                  <NavLink
                    className="service-link"
                    to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="service-image-container">
                      <img
                        src={service.img}
                        alt={`${service.name} Logo`}
                        className="service-img" // Adjust size in CSS if needed
                      />
                    </div>
                    <h1 className="service-name">{service.name}</h1>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!displayAdmin && (
        <section>
          <div className="chatbot-container">
            <a
              href="https://api.whatsapp.com/send?phone=+923475800705&text=Hi, I’m reaching out through Belike!"
              className="whatsapp-link"
            >
              <div className="whatsapp-chip">
                <i aria-hidden="true" className="fa fa-whatsapp whatsapp-icon" />
              </div>
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default SchoolData;

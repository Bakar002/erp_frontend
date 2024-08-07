
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SchoolData.css"; // Import custom styles
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loadCurrentAdminAction from "../../Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import loadCurrentTeacherAction from "../../Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher";
import loadCurrentStudentAction from "../../Redux/Student/Actions/loadCurrentStudentAction.Student";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

import { Oval } from "react-loader-spinner"; // Import loader

import Logo from "../../../Assets/school.png"
import Logo1 from "../../../Assets/school.png"

// import Logo15 from "../Assets/Medical/medical/pharmancy.jpg";
// import Logo16 from "../Assets/Medical/medical/ho.jpg";
// import Logo17 from "../Assets/Medical/medical/labortary.png";
// import Logo18 from "../Assets/Medical/medical/specialclinic.png";
// import Logo19 from "../Assets/Medical/medical/medicalcomplex.jpg";
// import Logo1 from "../Assets/Medical/medical/appointment.png"; // Replace with actual logo path
// import Logo2 from "../Assets/Medical/medical/patientrecord.png"; // Replace with actual logo path
// import Logo3 from "../Assets/Medical/medical/doctorlist.png"; // Replace with actual logo path
// import Logo4 from "../Assets/Medical/medical/remindermsg.png"; // Replace with actual logo path
// //import Logo5 from "../Assets/Medical/medical/patientpannel.jpg"; // Replace with actual logo path
// import Logo6 from "../Assets/Medical/medical/pr.png"; // Replace with actual logo path
// import Logo7 from "../Assets/Medical/medical/emergency.jpg"; // Replace with actual logo path
// import Logo8 from "../Assets/Medical/medical/appointmentform.png"; // Replace with actual logo path
// import Logo9 from "../Assets/Medical/medical/office mangemnet.png"; // Replace with actual logo path
// import Logo10 from "../Assets/Medical/medical/contactus.jpg"; // Replace with actual logo path
// import Logo11 from "../Assets/Medical/medical/SMM.png"; // Replace with actual logo path
// import Logo12 from "../Assets/Medical/medical/previousclient.png"; // Replace with actual logo path
// import Logo13 from "../Assets/Medical/medical/medicalcamp.png"; // Replace with actual logo path

const services = {
  "Our Partners": [
    { name: "All Schools and Academies Collaborations", img: Logo1 },
    { name: "Admission For All", img: Logo1 },
    { name: "Board Papers", img: Logo1 },
    { name: "Syllabus Grade 1-10", img: Logo1 },
  ],
  "Portal": [
    { name: "Administration", img: Logo1 },
    { name: "Teachers", img: Logo1 },
    { name: "Students", img: Logo1 },
  ],
  "School Store": [
    { name: "Uniform", img: Logo1 },
    { name: "Books", img: Logo1 },
    { name: "Stationary", img: Logo1 },
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
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }



  return (
    <div className="pt-10 p-20 bg-gradient-to-r from-blue-400 to-green-500">
      {displayAdmin ? (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img
            alt="Admin Avatar"
            className="admin-avatar ms-lg-2"
            src={displayAdmin.adminAvatar || "/default-avatar.png"}
            style={{ height: "70px", width: "70px" }} // Adjust as needed
          />
          <div className="d-flex items-center">
            <h1 className="admin-heading">{displayAdmin.adminName}</h1>
          </div>
          <div>
            <p>Contact: {displayAdmin.contactNumber}</p>
            <p>Address: {displayAdmin.address}</p>
          </div>
          {/* <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button> */}
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h1 className="admin-heading">Belike Group Software Login First </h1>
          </div>
          {/* <button
            className="btn btn-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </button> */}
        </div>
      )}

      {Object.entries(services).map(([heading, blocks]) => (
        <div key={heading} className="service-section">
          <h3 className="text-center fw-bold service-heading">{heading}</h3>
          <div className="services-grid">
            {blocks.map((service) => (
              <div key={service.name} className="service-card">
                <NavLink
                  className="text-reset text-decoration-none text-center"
                  to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="medical-img-container mb-3">
                    <img
                      src={service.img}
                      alt={`${service.name} Logo`}
                      className="service-img" // Adjust size here
                    />
                  </div>
                  <h1 className="service-name">{service.name}</h1>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}

      {!displayAdmin && (
        <section>
          <div
            className="ccw_plugin chatbot"
            style={{
              bottom: "20px",
              right: "20px",
            }}
          >
            <div className="style4 animated no-animation ccw-no-hover-an">
              <a
                className="nofocus"
                href="https://api.whatsapp.com/send?phone=+923475800705&text=Hi, I’m reaching out through Belike!"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <div
                  className="chip style-4 ccw-analytics"
                  data-ccw="style-4"
                  id="style-4"
                  style={{
                    backgroundColor: "#25D366",
                    borderRadius: "100%",
                    color: "white !important",
                    fontSize: "20px",
                    padding: "18px 20px 15px 20px",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  <i
                    aria-hidden="true"
                    className="fa fa-whatsapp"
                    style={{
                      fontSize: "36px",
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SchoolData;

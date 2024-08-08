import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Landingpage from "./components/Landing/Landing";
 //import SchoolPortalHome from "./components/SchoolPortal/SchoolPortalHome/SchoolPortalHome";
import AdminDashboard from "./components/Admin/AdminDashboard";
// import TeacherDashboard from "./components/Teacher/TeacherDashboard.js";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminSignup from "./components/Admin/AdminLogin/AdminSignup";
import StudentLogin from "./components/Student/StudentLogin/Login.Student";
import Login from './components/Login/Login.js';
import Signup from "./components/Login/signUp.js";
import TeacherLogin from "./components/Teacher/TeacherLogin/TeacherLogin";
import StudentViewAtttendance from "./components/Student/StudentViewAttendance/StudentViewAtttendance";

import TeacherTakeAttendance from "./components/Teacher/TeacherTakeAttendance/TeacherTakeAttendance.js";
import TeacherViewAttendance from "./components/Teacher/TeacherViewAttendance/TeacherViewAttendance.js";
import axios from "axios";

import  AddCourse  from "./components/Admin/AdminAddCourse/AdminAddCourse";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentViewProfile from "./components/Student/StudentViewSubjects/StudentViewProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import loadCurrentStudentAction from "./components/Redux/Student/Actions/loadCurrentStudentAction.Student";
import RingLoader from "./components/Loaders/RingLoader";
import loadCurrentAdminAction from "./components/Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import Landingpage from "./components/Landing/Landing";
import SchoolData from './components/School/SchoolPortal/SchoolData.jsx';
import SchoolPortalHome from "./components/School/SchoolPortal/SchoolPortal.js";
import One from "./components/School/Grades/One/One.js";
import Two from "./components/School/Grades/Two/Two.js";
import Three from "./components/School/Grades/Three/Three.js";
import Four from "./components/School/Grades/Four/Four.js";
import Five from "./components/School/Grades/Five/Five.js";
import Six from "./components/School/Grades/Six/Six.js";
import Seven from "./components/School/Grades/Seven/Seven.js";
import Eight from "./components/School/Grades/Eight/Eight.js";
import Nine from "./components/School/Grades/Nine/Nine.js";
import Ten from "./components/School/Grades/Ten/Ten.js";
import StudentCourseTimetable from "./components/Student/StudentCourseTimetable/StudentCourseTimeTable.js";
import StudentAttendance from "./components/Student/StudentAttendance/StudentAttendance.js";
import StudentWeeklyAtttendance from "./components/Student/StudentWeeklyAttendance/StudentWeeklyAttendance.js";
import StudentMonthlyAtttendance from "./components/Student/StudentMonthlyAttendance/StudentMonthlyAttendance.js";
import StudentYearlyAtttendance from "./components/Student/StudentYearlyAttendance/StudentYearlyAttendance.js";
import loadCurrentTeacherAction from "./components/Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher.js";
import TeacherCourseTimetable from "./components/Teacher/TeacherCourseTimetable/TeacherCourseTimetable.js";
import TeacherWeeklyAttendance from "./components/Teacher/TeacherWeeklyAttendance/TeacherWeeklyAttendance.js";
import TeacherYearlyAttendance from "./components/Teacher/TeacherYearlyAttendance/TeacherYearlyAttendance.js";
import TeacherMonthlyAttendance from "./components/Teacher/TeacherMonthlyAttendance/TeacherMonthlyAttendance.js";
import StudentAddFeedback from "./components/Student/StudentAddFeedback/StudentAddFeedback.js";
import AdminFeedback from "./components/Admin/AdminFeedback/AdminFeedback.js";
import TeacherAddResult  from "./components/Teacher/TeacherAddResult/TeacherAddResult.js";
import AddResult from "./components/Student/StudentResult/StudentResult.js";
import AdmissionForm from './components/Landing/AdmissionForm';
import SchoolBlocks from './components/Landing/SchoolsBlocks';
import SchoolBlock2 from './components/Landing/SchoolBlocks2';
import Addmisionsall from './components/School/SchoolPortal/Addmisionsall.js';
import Board from './components/School/SchoolPortal/Board.js';




import ReceiptApp from './components/Landing/Receipt';
import Accounts from './components/Landing/Accounts';
import TeacherSlip from './components/Landing/TeacherSlip';
import First from './components/University/Department/Commerce/First';
import UniPortal from './components/University/Portal/UniPortal';
import Second from './components/University/Department/Cs/Second';
import Third from './components/University/Department/Arts/Third';
import Fourth from './components/University/Department/Islamic/Fourth';
import Fifth from './components/University/Department/Education/Fifth';
import MedicalPortal from './MedicalPortal/Medical';
import { Appointments } from './MedicalPortal/Form/Appointments';
import PatientSlips from './MedicalPortal/Form/PatientSlips';
import Pharmacy from './MedicalPortal/Partners/Pharmacies/Pharmacy';
import Hospital from './MedicalPortal/Partners/Hospitals/Hospital';

import Ambulance from './MedicalPortal/Partners/Ambulances/Ambulance';
import Complex from './MedicalPortal/Partners/Complexes/Complex';
import Laboratory from './MedicalPortal/Partners/Laboratories/Laboratory.js';
import SpecializedClinic from './MedicalPortal/Partners/SpecializedClinics/SpecializedClinic';
import  DoctorList  from './MedicalPortal/Specialist/Doctor/DoctorList.jsx';

import PropertyServices from './PropertyServices/ProService';
import NetPayment from './PropertyServices/Partner/Commercial/NetPayment';
import Files from './PropertyServices/Partner/Residential/Files';

import PaymentPlain from './PropertyServices/Partner/Commercial/PaymentPlain';
import Home from './PropertyServices/Partner/Residential/Home.js';

import ItService from './ItServices/ItService.js';
import Course from './ItServices/Courses/Course.js';
import MAdmin from './MedicalPortal/Dashboard/MAdmin';

import WelfareActivity from './Welfare/WelfareActivity.jsx';
import Itadmissionform from './ItServices/Itadmission/Itadmissionform';

import Travel from './Travels/Travel.jsx';

import IntConsultant from './Consultant/IntConsultant.js';
import Country from './Consultant/Countries/Country.js';
import Uni from './Consultant/University/Uni.js';
import Department from './Consultant/Departments/Deparment.js';
import Appoint from './MedicalPortal/Form/Appoint.js';
import Reminder from './MedicalPortal/Specialist/Reminders/Reminder.js';

import Emergency from './MedicalPortal/Form/Emergency.js';



import Influencer from './Influencers/Influencer';
import Ecommerce from './Ecommerces/Ecommerce.js';
import Contact from './MedicalPortal/Mangement/ContactInfo.js';
import OfficeMangment from './MedicalPortal/Mangement/OfficeMangment.js';
import SMM from './MedicalPortal/Mangement/SMM.js';
import Client from './MedicalPortal/Mangement/Client.js';
import MedicalCamp from './MedicalPortal/Mangement/MedicalCamps.js';
import Job from './Jobs/Job.js';
import Food from './Foods/Food.js';
import Legal from './LegalServices/Legal.js';

import Syllabus1to10 from './components/School/SchoolPortal/Syllabus1to10.js';
import Stu from './components/School/SchoolPortal/Student/Stu.jsx';
import StudentCourseTimeTable from './components/Student/StudentCourseTimetable/StudentCourseTimeTable.js';
import Tec from './components/School/SchoolPortal/Teacher/Tec.js';
import Adm from './components/School/SchoolPortal/Admins/Adm.js';

import AfaqSubCampus from './components/School/AfaqSubCampus/AfaqSubCampus';
import LwssSubCampus from './components/School/LwssSubCampus/LwssSubCampus';
import PakSubCampus from './components/School/PakSubCampus/PakSubCampus';
import { TeacherAddTask } from './components/Teacher/TeacherAddTask/TeacherAddTask';
import { AdminAddReminder } from './components/Admin/AdminAddReminder/AdminAddReminder';
import { StudentTask } from './components/Student/StudentTask/StudentTask';


function App() {
  const dispatch = useDispatch();
  const [studentLoading, setStudentLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [teacherLoading, setTeacherLoading] = useState(true);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    dispatch(loadCurrentStudentAction())
      .then(() => setStudentLoading(false))
      .catch((error) => {
        setStudentLoading(false);
      });

    dispatch(loadCurrentAdminAction())
      .then(() => setAdminLoading(false))
      .catch((error) => setAdminLoading(false));

    dispatch(loadCurrentTeacherAction())
      .then(() => setTeacherLoading(false))
      .catch((error) => setTeacherLoading(false));
  }, [dispatch]); // Added dependency array

  const { isStudentAuthenticated } = useSelector(
    (state) => state.currentStudentData
  );
  const { isAdminAuthenticated } = useSelector(
    (state) => state.currentAdminData
  );
  const { isTeacherAuthenticated } = useSelector(
    (state) => state.currentTeacherData
  );

  // if (studentLoading || adminLoading || teacherLoading) {
  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center">
  //       <RingLoader />
  //     </div>
  //   );
  // }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/admissionit" element={<Itadmissionform />} />

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/studenttask" element={<StudentTask/>} />










          <Route path="/all-schools-and-academies-collaborations" element={<SchoolBlocks />} />
          <Route path="/schoolblock2" element={<SchoolBlock2/>} />
          <Route path="/afaq-sub-campus" element={<AfaqSubCampus/>} />
          <Route path="/lwss-sub-campus" element={<LwssSubCampus/>} />
          <Route path="/pak-sub-campus" element={<PakSubCampus/>} />



          <Route path="/admission-for-all" element={<Addmisionsall/>} />
          <Route path="/board-papers" element={<Board/>} />
          <Route path="/syllabus-grade-1-10" element={<Syllabus1to10/>} />
           {/* <Route path="/students" element={<Stu/>} />   */}
           <Route path="/teachers"
           
           
           
           element={
            isTeacherAuthenticated ? (
              <Tec />
            ) : (
              <TeacherLogin />
            )
          }
        />

<Route path="/teacher-lms" element={<TeacherAddTask />} />

           
           


           
           
           <Route path="/administration" 
           
           
           
           element={isAdminAuthenticated ? <Adm /> : <AdminLogin />}

           
           />
           

         {/*   <Route
            path="/students"
            element={
              isStudentAuthenticated ? <Stu /> : <StudentLogin />
            }
            ></Route>

<Route
            path="/teachers"
            element={
              isStudentAuthenticated ? <Tec /> : <TeacherLogin />
            }
            ></Route> */}









            
           <Route path="/health-login" element={<Login/>} />

          <Route path="/health-admin" element={<MAdmin />} />

          <Route path="/health-portal-home" element={<MedicalPortal />} />
          <Route path="/appointment-forms" element={<Appointments />} />
          <Route path="/patient-slips" element={<PatientSlips/>} />
          <Route path="/pharmacy" element={<Pharmacy/>} />
          <Route path="/hospital" element={<Hospital/>} />


          <Route path="/ambulance" element={<Ambulance/>} />
          <Route path="/medical-complex" element={<Complex/>} />
          <Route path="/laboratory" element={<Laboratory/>} />
          <Route path="/specialized-Clinic" element={< SpecializedClinic/>} />

          <Route path="/ser-portal-home" element={<PropertyServices />} />
          <Route path="/commercial" element={<NetPayment/>} />
          <Route path="/residential" element={<Files/>} />
          <Route path="/rental" element={<PaymentPlain/>}/>
          <Route path="/sale-and-purchase-" element={<PaymentPlain/>}/>
          <Route path="/home" element={<Home/>}/>




        
          <Route path="/it-portal-home" element={<ItService />} />
          <Route path="/courseit" element={<Course/>}/>
         
          appointments
          <Route path="doctor's-panel" element={<DoctorList/>}/>
          <Route path="appointments" element={<Appoint/>}/>
          <Route path="reminder-messages" element={<Reminder/>}/>

          <Route path="/contact-info" element={<Contact/>}/>
          <Route path="/office-management" element={<OfficeMangment/>}/>\
          <Route path="/smm" element={<SMM/>}/>
          <Route path="/client-services" element={<Client/>}/>
          <Route path="/medical-camp" element={<MedicalCamp/>}/>


          <Route path="/emergency" element={<Emergency/>}/>


          <Route path="/donation-portal-home" element={<WelfareActivity />} />


          <Route path="/tra-portal-home" element={<Travel/>} />


          <Route path="/Consultant-portal-home" element={<IntConsultant/>} />
          <Route path="/countries-" element={<Country/>} />
          <Route path="/cities-" element={<Uni/>} />
          <Route path="/university-" element={<Department/>} />



          <Route path="/Influencer-portal-home" element={<Influencer/>} />

          

          <Route path="/Ecommerce-portal-home" element={<Ecommerce/>} />

          <Route path="/Job-portal-home" element={<Job/>} />

          <Route path="/food-portal-home" element={<Food/>} />

          <Route path="/legal-home-portal" element={<Legal/>} />




          <Route path="/signup" element={<Signup />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-feedback" element={<StudentAddFeedback />} />

          <Route path="/admin-add-course" element={<AddCourse />} />
          <Route path="/school-portal-home" element={<SchoolData />} />
          {/* <Route path="/school-portal-home" element={<SchoolPortalHome />} /> */}
          <Route path="/uni-portal-home" element={<UniPortal />} />


          <Route
            path="/admin-dashboard"
            element={isAdminAuthenticated ? <AdminDashboard /> : <AdminDashboard />}
          />


<Route
            path="/admin-reminder"
            element={isAdminAuthenticated ? <AdminAddReminder /> : <AdminDashboard />}
          />


<Route
            path="/receipt"
            element={isAdminAuthenticated ? <ReceiptApp /> : <AdminLogin />}
          />


<Route
            path="/accounts"
            element={isAdminAuthenticated ? <Accounts /> : <AdminLogin />}
          />

<Route
            path="/teacherslip"
            element={isAdminAuthenticated ? <TeacherSlip /> : <AdminLogin />}
          />



          <Route
            path="/admin-feedback"
            element={isAdminAuthenticated ? <AdminFeedback /> : <AdminLogin />}
          />
          <Route
            path="/student-dashboard"
            element={isStudentAuthenticated ? <StudentDashboard /> : <StudentLogin />}
          />
          <Route
            path="/student-view-profile"
            element={
              isStudentAuthenticated ? <StudentViewProfile /> : <StudentLogin />
            }
          />
          <Route
            path="/student-view-attendance"
            element={<StudentViewAtttendance />}
          />

          {/* Grades  Routes*/}
          <Route path="/school/grade-one" element={<One />} />
          <Route path="/school/grade-two" element={<Two />} />
          <Route path="/school/grade-three" element={<Three />} />
          <Route path="/school/grade-four" element={<Four />} />
          <Route path="/school/grade-five" element={<Five />} />
          <Route path="/school/grade-six" element={<Six />} />
          <Route path="/school/grade-seven" element={<Seven />} />
          <Route path="/school/grade-eight" element={<Eight />} />
          <Route path="/school/grade-nine" element={<Nine />} />
          <Route path="/school/grade-ten" element={<Ten />} />
          {/* University Routes  */}
          <Route path="/university/commerce" element={<First/>} />
          <Route path="/university/cs" element={<Second/>} />
          <Route path="/university/arts" element={<Third/>} />
          <Route path="/university/islamic" element={<Fourth/>} />
          <Route path="/university/bed" element={<Fifth/>} />










          {/* Student Routes  */}
          <Route
            path="/student-time-table"
            element={
            <StudentCourseTimetable />
            }

          />
          
          <Route
            path="/student-attendance" element={<StudentAttendance /> }></Route>
            
          <Route
            path="/student-weekly-attendance"
            element={
               <StudentWeeklyAtttendance />
            }
          />
          <Route
            path="/student-monthly-attendance"
            element={
<StudentMonthlyAtttendance />

            }
          />
          <Route
            path="/student-yearly-attendance"
            element={
<StudentYearlyAtttendance /> 

            }
          />
          <Route
            path="/student-add-feedback"
            element={
 <StudentAddFeedback /> 

            }
          />

<Route
            path="/students"
            element={
              isStudentAuthenticated ? <Stu /> : <StudentLogin />
            }
          />





          
          <Route
            path="/student-result"
            element={
 <AddResult />
}
          />
          {/* Teacher Routes  */}
          <Route
            path="/teacher-take-attendance"
            element={
              isTeacherAuthenticated ? (
                <TeacherTakeAttendance />
              ) : (
                <TeacherLogin />
              )
            }
          />

          <Route
            path="/teacher-view-attendance"
            element={
              isTeacherAuthenticated ? (
                <TeacherViewAttendance />
              ) : (
                <TeacherLogin />
              )
            }
          />
          <Route
            path="/teacher-time-table"
            element={
              isTeacherAuthenticated ? (
                <TeacherCourseTimetable />
              ) : (
                <TeacherLogin />
              )
            }
          />
          <Route
            path="/teacher-weekly-attendance"
            element={
              isTeacherAuthenticated ? (
                <TeacherWeeklyAttendance />
              ) : (
                <TeacherLogin />
              )
            }
          />
          <Route
            path="/teacher-monthly-attendance"
            element={
              isTeacherAuthenticated ? (
                <TeacherMonthlyAttendance />
              ) : (
                <TeacherLogin />
              )
            }
          />
          <Route
            path="/teacher-yearly-attendance"
            element={
              isTeacherAuthenticated ? (
                <TeacherYearlyAttendance />
              ) : (
                <TeacherLogin />
              )
            }
          />

          <Route
            path="/teacher-add-result"
            element={
              isTeacherAuthenticated ? <TeacherAddResult /> : <TeacherLogin />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

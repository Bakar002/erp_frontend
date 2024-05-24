import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import loadCurrentStudentAction from "./components/Redux/Student/Actions/loadCurrentStudentAction.Student";
import loadCurrentAdminAction from "./components/Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import loadCurrentTeacherAction from "./components/Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher";

import RingLoader from "./components/Loaders/RingLoader";
import Landingpage from "./components/Landing/Landing";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminSignup from "./components/Admin/AdminLogin/AdminSignup";
import TeacherLogin from "./components/Teacher/TeacherLogin/TeacherLogin";
import StudentDashboard from "./components/Student/StudentDashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Login/signUp";
import StudentLogin from "./components/Student/StudentLogin/Login.Student";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminFeedback from "./components/Admin/AdminFeedback/AdminFeedback";
import StudentViewProfile from "./components/Student/StudentViewSubjects/StudentViewProfile";
import StudentViewAtttendance from "./components/Student/StudentViewAttendance/StudentViewAtttendance";
import AddCourse from "./components/Admin/AdminAddCourse/AdminAddCourse";
import SchoolPortalHome from "./components/School/SchoolPortal/SchoolPortal";
import One from "./components/School/Grades/One/One";
import Two from "./components/School/Grades/Two/Two";
import Three from "./components/School/Grades/Three/Three";
import Four from "./components/School/Grades/Four/Four";
import Five from "./components/School/Grades/Five/Five";
import Six from "./components/School/Grades/Six/Six";
import Seven from "./components/School/Grades/Seven/Seven";
import Eight from "./components/School/Grades/Eight/Eight";
import Nine from "./components/School/Grades/Nine/Nine";
import Ten from "./components/School/Grades/Ten/Ten";
import StudentCourseTimetable from "./components/Student/StudentCourseTimetable/StudentCourseTimeTable";
import StudentAttendance from "./components/Student/StudentAttendance/StudentAttendance";
import StudentWeeklyAtttendance from "./components/Student/StudentWeeklyAttendance/StudentWeeklyAttendance";
import StudentMonthlyAtttendance from "./components/Student/StudentMonthlyAttendance/StudentMonthlyAttendance";
import StudentYearlyAtttendance from "./components/Student/StudentYearlyAttendance/StudentYearlyAttendance";
import StudentAddFeedback from "./components/Student/StudentAddFeedback/StudentAddFeedback";
import TeacherTakeAttendance from "./components/Teacher/TeacherTakeAttendance/TeacherTakeAttendance";
import TeacherViewAttendance from "./components/Teacher/TeacherViewAttendance/TeacherViewAttendance";
import TeacherCourseTimetable from "./components/Teacher/TeacherCourseTimetable/TeacherCourseTimetable";
import TeacherWeeklyAttendance from "./components/Teacher/TeacherWeeklyAttendance/TeacherWeeklyAttendance";
import TeacherMonthlyAttendance from "./components/Teacher/TeacherMonthlyAttendance/TeacherMonthlyAttendance";
import TeacherYearlyAttendance from "./components/Teacher/TeacherYearlyAttendance/TeacherYearlyAttendance";
import TeacherAddResult from "./components/Teacher/TeacherAddResult/TeacherAddResult";
import AddResult from "./components/Student/StudentResult/StudentResult";

axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const [studentLoading, setStudentLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [teacherLoading, setTeacherLoading] = useState(true);

  useEffect(() => {
    dispatch(loadCurrentStudentAction())
      .then(() => setStudentLoading(false))
      .catch(() => setStudentLoading(false));

    dispatch(loadCurrentAdminAction())
      .then(() => setAdminLoading(false))
      .catch(() => setAdminLoading(false));

    dispatch(loadCurrentTeacherAction())
      .then(() => setTeacherLoading(false))
      .catch(() => setTeacherLoading(false));
  }, [dispatch]);

  const { isStudentAuthenticated } = useSelector((state) => state.currentStudentData);
  const { isAdminAuthenticated } = useSelector((state) => state.currentAdminData);
  const { isTeacherAuthenticated } = useSelector((state) => state.currentTeacherData);

  if (studentLoading || adminLoading || teacherLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <RingLoader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-add-course" element={<AddCourse />} />
        <Route path="/school-portal-home" element={<SchoolPortalHome />} />

        <Route
          path="/admin-dashboard"
          element={isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/admin-login" />}
        />
        <Route
          path="/admin-feedback"
          element={isAdminAuthenticated ? <AdminFeedback /> : <Navigate to="/admin-login" />}
        />
        <Route
          path="/student-dashboard"
          element={isStudentAuthenticated ? <StudentDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-view-profile"
          element={isStudentAuthenticated ? <StudentViewProfile /> : <Navigate to="/login" />}
        />
        <Route path="/student-view-attendance" element={<StudentViewAtttendance />} />

        {/* Grades Routes */}
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

        {/* Student Routes */}
        <Route
          path="/student-time-table"
          element={isStudentAuthenticated ? <StudentCourseTimetable /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-attendance"
          element={isStudentAuthenticated ? <StudentAttendance /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-weekly-attendance"
          element={isStudentAuthenticated ? <StudentWeeklyAtttendance /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-monthly-attendance"
          element={isStudentAuthenticated ? <StudentMonthlyAtttendance /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-yearly-attendance"
          element={isStudentAuthenticated ? <StudentYearlyAtttendance /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-add-feedback"
          element={isStudentAuthenticated ? <StudentAddFeedback /> : <Navigate to="/login" />}
        />
        <Route
          path="/student-result"
          element={isStudentAuthenticated ? <AddResult /> : <Navigate to="/login" />}
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher-take-attendance"
          element={isTeacherAuthenticated ? <TeacherTakeAttendance /> : <Navigate to="/teacher-login" />}
        />
        <Route
          path="/teacher-view-attendance"
          element={isTeacherAuthenticated ? <TeacherViewAttendance /> : <Navigate to="/teacher-login" />}
        />
        <Route
          path="/teacher-time-table"
          element={isTeacherAuthenticated ? <TeacherCourseTimetable /> : <Navigate to="/teacher-login" />}
        />
        <Route
          path="/teacher-weekly-attendance"
          element={isTeacherAuthenticated ? <TeacherWeeklyAttendance /> : <Navigate to="/teacher-login" />}
        />
        <Route
          path="/teacher-monthly-attendance"
          element={isTeacherAuthenticated ? <TeacherMonthlyAttendance /> : <Navigate to="/teacher-login" />}
        />
        <Route
          path="/teacher-yearly-attendance"
          element={isTeacherAuthenticated ? <TeacherYearlyAttendance /> : <Navigate to="/teacher-login" />}
        />
        <Route
          path="/teacher-add-result"
          element={isTeacherAuthenticated ? <TeacherAddResult /> : <Navigate to="/teacher-login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import StudentCourseTimeTable from '../../../Student/StudentCourseTimetable/StudentCourseTimeTable';
import StudentAttendance from '../../../Student/StudentAttendance/StudentAttendance';
import StudentMonthlyAttendance from '../../../Student/StudentMonthlyAttendance/StudentMonthlyAttendance';
import StudentWeeklyAttendance from '../../../Student/StudentWeeklyAttendance/StudentWeeklyAttendance';
import StudentYearlyAttendance from '../../../Student/StudentYearlyAttendance/StudentYearlyAttendance';
import StudentAddFeedback from '../../../Student/StudentAddFeedback/StudentAddFeedback';
import StudentResult from '../../../Student/StudentResult/StudentResult';
import StudentMeeting from '../../../Student/StudentMeeting/StudentMeeting';
import StudentLMS from '../../../Student/StudentLMS/StudentLMS';

const Stu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { key: 'TimeTable', label: 'Time Table', icon: 'fa-clock', component: StudentCourseTimeTable, path: '/student-time-table' },
    { key: 'StudentAttendance', label: 'Attendance', icon: 'fa-chalkboard-user', component: StudentAttendance, path: '/student-attendance' },
    { key: 'Weekly', label: 'Weekly', icon: 'fa-calendar-week', component: StudentWeeklyAttendance, path: '/student-weekly-attendance' },
    { key: 'Monthly', label: 'Monthly', icon: 'fa-calendar-days', component: StudentMonthlyAttendance, path: '/student-monthly-attendance' },
    { key: 'Annual', label: 'Annual', icon: 'fa-calendar-check', component: StudentYearlyAttendance, path: '/student-annual-attendance' },
    { key: 'Meeting', label: 'Meeting', icon: 'fa-handshake-simple', component: StudentMeeting, path: '/student-meeting' },
    { key: 'Feedback', label: 'Add Feedback', icon: 'fa-comments', component: StudentAddFeedback, path: '/student-feedback' },
    { key: 'ViewResult', label: 'View Result', icon: 'fa-chart-bar', component: StudentResult, path: '/student-result' },
    { key: 'LearningManagementSystem', label: 'LMS', icon: 'fa-book', component: StudentLMS, path: '/student-lms' },
  ];

  return (
    <div className="container">
      <h3 className="text-center fw-bold mt-3">Students</h3>
      <div className="row d-flex justify-content-center">
        {menuItems.map((item) => (
          <div key={item.key} className="card col-6 col-sm-6 col-md-4 col-lg-2 ms-2 mt-3">
            <NavLink to={item.path} className="text-center text-decoration-none text-reset">
              <div className="cursor-pointer">
                <i className={`fa-solid ${item.icon} text-center fa-2x mt-3`} />
                <div className="card-body">
                  <h6 className="text-center pt-2">{item.label}</h6>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Stu;

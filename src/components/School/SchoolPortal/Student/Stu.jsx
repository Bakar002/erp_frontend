import React, { useState } from 'react';
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
  const [activeComponent, setActiveComponent] = useState('');

  const menuItems = [
    { key: 'TimeTable', label: 'Time Table' },
    { key: 'StudentAttendance', label: 'Attendance' },
    { key: 'Weekly', label: 'Weekly' },
    { key: 'Monthly', label: 'Monthly' },
    { key: 'Annual', label: 'Annual' },
    { key: 'Meeting', label: 'Meeting' },
    { key: 'Feedback', label: 'Add Feedback' },
    { key: 'ViewResult', label: 'View Result' },
    { key: 'LearningManagementSystem', label: 'LMS' },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'TimeTable':
        return <StudentCourseTimeTable />;
      case 'StudentAttendance':
        return <StudentAttendance />;
      case 'Weekly':
        return <StudentWeeklyAttendance />;
      case 'Monthly':
        return <StudentMonthlyAttendance />;
      case 'Annual':
        return <StudentYearlyAttendance />;
      case 'Meeting':
        return <StudentMeeting />;
      case 'Feedback':
        return <StudentAddFeedback />;
      case 'ViewResult':
        return <StudentResult />;
      case 'LearningManagementSystem':
        return <StudentLMS />;
      default:
        return <StudentCourseTimeTable />;
    }
  };

  return (
    <div className="flex bg-white  h-screen text-black">
      {/* Sidebar Menu */}
      <ul className="w-64 pt-4 pl-5 pr-3 pb-8 bg-blue-800 flex-shrink-0 mb-4 h-screen">
        <li>
          <h1 className="font-bold text-5xl md:text-3xl  text-white">Quick as</h1>
        </li>
        {menuItems.map((item) => (
          <li className="mt-4 text-xl font-semibold relative" key={item.key}>
            <h1
              onClick={() => setActiveComponent(item.key)}
              className={`cursor-pointer inline-block text-white ${activeComponent === item.key ? 'active' : ''}`}
              style={{ paddingBottom: '10px' }} // Adds spacing for the underline effect
            >
              {item.label}
            </h1>
            {activeComponent === item.key && (
              <div
                className="absolute bottom-0 left-0 w-64 border-b-2 border-white"
                style={{ transform: 'translateY(10px)' }} // Moves underline below the text
              />
            )}
          </li>
        ))}
      </ul>

      {/* Render Selected Component */}
      <div className="flex-1 p-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Stu;

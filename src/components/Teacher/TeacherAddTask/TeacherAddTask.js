import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../ToastMessages/ToastMessage";
import loadCurrentTeacherAction from "../../Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher";

export const TeacherAddTask = () => {
  const dispatch = useDispatch();
  const [grade, setGrade] = useState(null);
  const [courses, setCourses] = useState([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(loadCurrentTeacherAction());
    const loadCourses = async () => {
      try {
        const response = await axios.get(
          `https://belikeerp-3.onrender.com/api/v1/teacher/load-courses-with-grade/${grade}`
        );
        setCourses(response.data.courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    if (grade) {
      loadCourses();
    }
  }, [grade]);

  const { currentTeacherData } = useSelector(
    (state) => state.currentTeacherData
  );

  const onSubmit = async (data) => {
    if (data) {
      try {
        const response = await axios.post(
          `https://belikeerp-3.onrender.com/api/v1/teacher/create-task`,
          {
            taskDescription: data.taskDescription,
            taskImage: data.taskImage[0],
            course: data.course,
            grade: data.grade,
            removeTime: data.removeTime,
          }
        );
        handleShowSuccessToast(response.data.message);
        console.log(response.data.message);
      } catch (error) {
        console.log(error.response.data.message);
        handleShowFailureToast(error.response.data.message);
      }
    } else {
      handleShowFailureToast("Form data is missing");
      console.log("Form data is missing");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-gray-600 body-font w-full h-full xl:mt-20"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              Add Task
            </h1>
          </div>
          <div className="w-[90%] md:w-[30%]">
            <div className="">
              <div className="">
                <label
                  htmlFor="grade"
                  className="leading-7 text-sm text-white"
                >
                  Select Grade
                </label>
                <select
                  name="grade"
                  id="grade"
                  {...register("grade", { required: true })}
                  onChange={(e) => setGrade(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                >
                  <option value="">Grade</option>
                  {currentTeacherData &&
                  Array.isArray(currentTeacherData.teacher.teacherGrades)
                    ? currentTeacherData.teacher.teacherGrades.map(
                        (grade) => (
                          <option value={grade.gradeId._id}>
                            {grade.gradeId.gradeCategory}
                          </option>
                        )
                      )
                    : ""}
                </select>
                {errors.grade && (
                  <p className="text-red-500 text-xs mt-1">
                    Grade is required
                  </p>
                )}
              </div>
              {courses && (
                <div className="">
                  <label
                    htmlFor="course"
                    className="leading-7 text-sm text-white"
                  >
                    Select Course
                  </label>
                  <select
                    name="course"
                    id="course"
                    {...register("course", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  >
                    <option value="">Course</option>
                    {Array.isArray(courses)
                      ? courses.map((course) => (
                          <option value={course._id}>
                            {course.courseTitle}
                          </option>
                        ))
                      : ""}
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-xs mt-1">
                      Course is required
                    </p>
                  )}
                </div>
              )}
              <div className="">
                <label
                  htmlFor="taskDescription"
                  className="leading-7 text-sm text-white"
                >
                  Task Description
                </label>
                <input
                  type="text"
                  id="taskDescription"
                  {...register("taskDescription", { required: true })}
                  name="taskDescription"
                  className="w-full bg-white text-black bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.taskDescription && (
                  <p className="text-red-500 text-xs mt-1">
                    Task Description is required
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="taskImage"
                  className="leading-7 text-sm text-white"
                >
                  Upload Task Image
                </label>
                <input
                  type="file"
                  id="taskImage"
                  {...register("taskImage", { required: true })}
                  name="taskImage"
                  className="w-full bg-white text-black bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.taskImage && (
                  <p className="text-red-500 text-xs mt-1">
                    Task Image is required
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="removeTime"
                  className="leading-7 text-sm text-white"
                >
                  Remove Task After
                </label>
                <input
                  type="datetime-local"
                  id="removeTime"
                  {...register("removeTime", { required: true })}
                  name="removeTime"
                  className="w-full bg-white text-black bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.removeTime && (
                  <p className="text-red-500 text-xs mt-1">
                    Remove Time is required
                  </p>
                )}
              </div>
              <div className="w-full mt-4">
                <button
                  className="w-full mx-auto text-white bg-[#40b08c] border-0 py-1 px-4 focus:outline-none hover:bg-[#75dbbb] rounded text-lg"
                  type="submit"
                >
                  Submit Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};



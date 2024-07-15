import React, { useState } from 'react';
import axios from 'axios';
import styles from './Itadmissionform.module.css';

const courses = [
    "Digital Marketing", "SMM (Social Media Marketing)", "SEO (Search Engine Optimization)", 
    "Blogging", "Freelancing", "Web Development", "Front End Development", "Backend Development", 
    "Graphics Designing", "Video Editing", "Fashion Designing", "Artificial Intelligence", 
    "E-commerce", "Amazon", "Guest Posting", "Spoken English", "PTE (Pearson Test of English)", 
    "IELTS", "Daraz", "Ebay", "Shopify"
];

const durations = ["2 months", "4 months", "6 months"];

const Itadmissionform = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentDOB: '',
        studentAddress: '',
        guardianName: '',
        guardianPhone: '',
        studentClass: '',
        course: '',
        duration: '',
        studentIdPhoto: null,
        paymentMethod: '',
        paymentSlip: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach(key => {
            form.append(key, formData[key]);
        });
        form.append('adminId', '664a5ee70b568ab80ac19de7');  // default admin ID

        try {
            const response = await axios.post(
                "https://belikeerp-3.onrender.com/api/v1/student/createItStudent",
                form,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
            alert(response.data.message);
        } catch (error) {

        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.admissionForm} onSubmit={handleSubmit}>
                <h2>Student Admission Form</h2>
                <div className={styles.formGroup}>
                    <label>Student Name</label>
                    <input type="text" name="studentName" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Student Email</label>
                    <input type="email" name="studentEmail" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Student Phone</label>
                    <input type="text" name="studentPhone" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Date of Birth</label>
                    <input type="date" name="studentDOB" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Address</label>
                    <input type="text" name="studentAddress" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Guardian Name</label>
                    <input type="text" name="guardianName" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Guardian Phone</label>
                    <input type="text" name="guardianPhone" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Class</label>
                    <input type="text" name="studentClass" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Course</label>
                    <select name="course" onChange={handleChange} required>
                        <option value="">Select a Course</option>
                        {courses.map(course => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label>Duration</label>
                    <select name="duration" onChange={handleChange} required>
                        <option value="">Select Duration</option>
                        {durations.map(duration => (
                            <option key={duration} value={duration}>{duration}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label>Student ID Photo</label>
                    <input type="file" name="studentIdPhoto" onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Payment Method</label>
                    <select name="paymentMethod" onChange={handleChange} required>
                        <option value="">Select a Payment Method</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>
                {formData.paymentMethod === 'online' && (
                    <div className={styles.formGroup}>
                        <label>Payment Slip</label>
                        <input type="file" name="paymentSlip" onChange={handleChange} required />
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Itadmissionform;
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

const durations = [
    { label: "2 months", fee: "1000" },
    { label: "4 months", fee: "2000" },
    { label: "6 months", fee: "4000" }
];

const feeMap = {
    "2 months": "1000",
    "4 months": "20000",
    "6 months": "40000"
};

const Itadmissionform = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        studentPhone: '',
        guardianName: '',
        guardianPhone: '',
        studentEmail: '',
        studentDOB: '',
        studentClass: '',
        course: '',
        duration: '',
        fee: '',
        studentAddress: '',
        studentIdPhoto: null,
        paymentMethod: '',
        paymentSlip: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "duration") {
            const selectedDuration = value;
            const fee = feeMap[selectedDuration];
            setFormData({ ...formData, duration: selectedDuration, fee });
        } else if (files) {
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
                "https://belikeerp-3.onrender.com/api/v1/admin/createItStudent",
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert(response.data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.admissionForm} onSubmit={handleSubmit}>
                <h2>Student Admission Form</h2>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Student Name</label>
                        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Student Phone</label>
                        <input type="text" name="studentPhone" value={formData.studentPhone} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Guardian Name</label>
                        <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Guardian Phone</label>
                        <input type="text" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input type="email" name="studentEmail" value={formData.studentEmail} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Date of Birth</label>
                        <input type="date" name="studentDOB" value={formData.studentDOB} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Class</label>
                        <input type="text" name="studentClass" value={formData.studentClass} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Course</label>
                        <select name="course" value={formData.course} onChange={handleChange} className={styles.inputWide} required>
                            <option value="">Select a Course</option>
                            {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Duration</label>
                        <select name="duration" value={formData.duration} onChange={handleChange} className={styles.inputWide} required>
                            <option value="">Select Duration</option>
                            {durations.map(({ label }) => (
                                <option key={label} value={label}>{label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Fee</label>
                        <input type="text" name="fee" value={formData.fee} onChange={handleChange} className={styles.inputWide} readOnly />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Student ID Card / ByForm</label>
                        <input type="file" name="studentIdCard" onChange={handleChange} className={styles.inputWide} required />
                    </div>
                   
                </div>
                <div className={styles.inlineGroup}>
                <div className={styles.formGroup}>
                        <label>Address</label>
                        <input type="text" name="studentAddress" value={formData.studentAddress} onChange={handleChange} className={styles.inputWide} required />
                    </div>
                   
                </div>
                <div className={styles.inlineGroup}>
                    <div className={styles.formGroup}>
                        <label>Payment Method</label>
                        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className={styles.inputWide} required>
                            <option value="">Select a Payment Method</option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>
                    {formData.paymentMethod === 'online' && (
                        <div className={styles.formGroup}>
                            <label>Payment Slip</label>
                            <input type="file" name="paymentSlip" onChange={handleChange} className={styles.inputWide} required />
                        </div>
                    )}
                </div>
                <div className={styles.buttonGroup}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Itadmissionform;

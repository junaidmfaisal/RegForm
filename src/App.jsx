import React, { useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';

function App() {
  // manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    mobileNumber: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  })

  // manage validation errors
  const [errors, setErrors] = useState({})

  // input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  // form clear
  const handleClear = () => {
    setFormData({
      fullName: '',
      address: '',
      mobileNumber: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    })
    setErrors({})
  }

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation logic
    const newErrors = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.'
    if (!formData.address.trim()) newErrors.address = 'Address is required.'
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required.'
    else if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Enter a valid 10-digit Mobile Number.'
    if (!formData.email.trim()) newErrors.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid Email address.'
    if (!formData.gender) newErrors.gender = 'Gender selection is required.'
    if (!formData.dob) newErrors.dob = 'Date of Birth is required.'
    if (!formData.course) newErrors.course = 'Course selection is required.'

    setErrors(newErrors)

    // If no errors, process the form data
    if (Object.keys(newErrors).length === 0) {
      alert(`Data Stored Successfully!\n\nUser Details:\nFull Name: ${formData.fullName}\nAddress: ${formData.address}\nMobile Number: ${formData.mobileNumber}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDOB: ${formData.dob}\nCourse: ${formData.course}`)
      handleClear() // Clear the form on successful submission
    }
  }

  return (
    <>
      <div className="container border mt-5 mb-2">
        <div className='pt-3'>
          <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '3rem', fontWeight: 'bold', color: 'black'}}>
            REGISTRATION FORM</h1>
        </div>

        <div className="px-5">
          <Form onSubmit={handleSubmit}>

            {/* Name */}
            <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
            </FloatingLabel>

            {/* Address */}
            <FloatingLabel className="mb-2" controlId="floatingInput" label="Address">
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </FloatingLabel>

            {/* Mobile Number */}
            <FloatingLabel className="mb-2" controlId="floatingInput" label="Mobile Number">
              <Form.Control
                type="text"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                isInvalid={!!errors.mobileNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.mobileNumber}</Form.Control.Feedback>
            </FloatingLabel>

            {/* Email */}
            <FloatingLabel className="mb-2" controlId="floatingInput" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </FloatingLabel>

            {/* Gender */}
            <FloatingLabel className="mb-2" controlId="floatingSelect" label="Gender">
              <Form.Select
                aria-label="Floating label select example"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                isInvalid={!!errors.gender}
              >
                <option value="">Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Neither">Neither</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </FloatingLabel>

            {/* DOB */}
            <FloatingLabel className="mb-2" controlId="floatingInput" label="Date of Birth">
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                isInvalid={!!errors.dob}
              />
              <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
            </FloatingLabel>

            {/* Course */}
            <FloatingLabel controlId="floatingSelect" label="Course">
              <Form.Select
                aria-label="Floating label select example"
                name="course"
                value={formData.course}
                onChange={handleChange}
                isInvalid={!!errors.course}
              >
                <option value="">Select Your Course</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.course}</Form.Control.Feedback>
            </FloatingLabel>


            <div className="d-flex justify-content-around pb-3">
              <Button className="mt-2" variant="danger" onClick={handleClear}>
                Clear
              </Button>

              <Button className="mt-2" variant="success" type="submit">
                Submit
              </Button>
            </div>

          </Form>


        </div>
      </div>


    </>
  )

}


export default App;

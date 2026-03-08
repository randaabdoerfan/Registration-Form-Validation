import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ArticleIcon from '@mui/icons-material/Article';


function Registration() {
    const [errors, setError] = useState({
        nameError: " ",
        emailError: " ",
        passwordError: " ",
        phoneError: " "
    })
    const [message, setMessage] = useState("")
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const handleChange = (evt) => {
         if (evt.target.name === "inputName") {
            setValues({ ...values, name: evt.target.value })

        }if (evt.target.name === "inputEmail") {
            setValues({ ...values, email: evt.target.value })
        }
        if (evt.target.name === "inputPhone") {
            setValues({ ...values, phone: evt.target.value })
        }
            if (evt.target.name === "inputPassword") {
            setValues({ ...values, password: evt.target.value })
            }


        if (evt.target.name === "inputName") {
            setError({
                ...errors, nameError: evt.target.value.length === 0 ? "This Feild is Requried" : evt.target.value.length === 10 ? "the name should be less than 10" : ""
            })
        }
        if (evt.target.name === "inputEmail") {
            setError({
                ...errors, emailError: evt.target.value.length === 0 ? "This Feild is Requried" : !evt.target.value.includes('@') ? "Email should have @ " : !evt.target.value.includes('.com') ? "Email should have .com " : ""
            })
        }
        if (evt.target.name === "inputPhone") {
            setError({
                ...errors, phoneError: evt.target.value.length === 0 ? "This Feild is Requried" : !/^01[0125][0-9]{8}$/.test(evt.target.value) ? "Enter valid Egyptian phone number" : ""
            })

        }
        if (evt.target.name === "inputPassword") {
            setError({
                ...errors, passwordError: evt.target.value.length === 0 ? "This Feild is Requried" : evt.target.value.length < 8 ? "Password Should be 8 at least " : !(
                    evt.target.value.includes('@') ||
                    evt.target.value.includes('#') ||
                    evt.target.value.includes('*') ||
                    evt.target.value.includes('$') ||
                    evt.target.value.includes('!'))
                    ? "Password should have special character" : ""
            })



        }
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (errors.emailError === "" && errors.nameError === "" && errors.passwordError === "" && errors.phoneError === "") {
            setMessage("Successful Registration");
            setValues({ name: '', email: '', phone: '', password: '' })

        }
        else {
            alert("Fix the Errors First");
        }

    }
    console.log(errors)
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 '>

                <Form className='w-50 m-5 border shadow p-4 rounded' >
                    <h2 style={{ fontSize: '40px'}} className='mb-5'><ArticleIcon style={{ fontSize: '40px' }} />Registration</h2>

                    <FloatingLabel controlId="inputName"
                        label={<span><PersonIcon style={{ fontSize: '20px' }} /> Name</span>}
                        className="mb-3">
                        <Form.Control
                            name='inputName'
                            value={values.name}
                            type="text"
                            placeholder="Name"
                            onChange={(e) => { handleChange(e) }} />
                    </FloatingLabel>
                    <small className="text-danger">{errors.nameError}</small>


                    <FloatingLabel controlId="inputEmail"
                        label={<span><EmailIcon style={{ fontSize: '20px' }} /> Email</span>}
                        className="mb-3">
                        <Form.Control
                            name='inputEmail'
                            value={values.email}
                            type="email"
                            placeholder="name@example.com"
                            onChange={(e) => { handleChange(e) }} />
                    </FloatingLabel>
                    <Form.Text className="text-danger">{errors.emailError}</Form.Text>

                    <FloatingLabel
                        controlId="inputPhone"
                        label={<span><PhoneIphoneIcon style={{ fontSize: '20px' }} /> Phone</span>}
                        className="mb-3">
                        <Form.Control
                            name='inputPhone'
                            value={values.phone}
                            type="text"
                            placeholder="01258954365"
                            onChange={(e) => { handleChange(e) }} />
                    </FloatingLabel>
                    <small className="text-danger">{errors.phoneError}</small>

                    <FloatingLabel
                        controlId="inputPassword"
                        label={<span> <VpnKeyIcon style={{ fontSize: '20px' }} /> Password</span>}
                        className="mb-3">
                        <Form.Control
                            name='inputPassword'
                            value={values.password}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => { handleChange(e) }} />
                    </FloatingLabel>
                    <small className="text-danger">{errors.passwordError}</small>

                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    <br/>
                    <Form.Text className='text-success mt-5'>{message}</Form.Text>
                </Form>

            </div>
        </>
    )
}

export default Registration
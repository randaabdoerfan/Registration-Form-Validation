# React Registration Form

This project demonstrates a **responsive registration form** built with **React** and **React-Bootstrap**.  
It includes **floating labels**, **field validation**, **icons**, and **success messages**.

---
## Preview

![Registration Form](assests/formScreenShoot.jpg)

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.  
- **Floating Labels**: Labels move above input when focused or filled.  
- **Validation**: Validates user inputs before submission:  
  - Name: required, max 10 characters  
  - Email: must include `@` and `.com`  
  - Phone: valid Egyptian phone number (starts with 010, 011, 012, or 015, and 11 digits)  
  - Password: min 8 characters, includes at least one special character (`@`, `#`, `*`, `$`, `!`)  
- **Icons inside fields**: Optional Material-UI icons can be added to inputs.  
- **Success Message**: Shows `"Successful Registration"` when the form is valid.  
- **Reset Form**: Clears all inputs after successful submission.  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/randaabdoerfan/Registration-Form-Validation.git
cd Registration-Form-Validation
npm install 
npm install @mui/material @mui/icons-material @emotion/styled @emotion/react
npm start
```
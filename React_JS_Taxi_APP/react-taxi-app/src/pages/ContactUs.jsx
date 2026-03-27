import { useState } from "react";
import { validateContactForm, hasErrors } from "../utils/validation";

function ContactUs(){

const [contact,setContact]=useState({
name:"",
email:"",
message:""
});

const [msg,setMsg]=useState("");
const [msgType,setMsgType]=useState("");
const [errors,setErrors]=useState({});

const containerStyle={
maxWidth:"800px",
margin:"auto",
padding:"30px"
};

const inputStyle={
width:"100%",
padding:"10px",
margin:"10px 0",
borderRadius:"5px",
border:"1px solid #ddd",
fontSize:"0.95em"
};

const errorInputStyle={
...inputStyle,
borderColor:"#ff4444",
backgroundColor:"#ffe6e6"
};

const errorMessageStyle={
color:"#d9534f",
fontSize:"0.9em",
marginTop:"-8px",
marginBottom:"10px"
};

const successMessageStyle={
color:"#5cb85c",
fontSize:"1em",
marginBottom:"15px",
fontWeight:"500"
};

const errorAlertStyle={
color:"#d9534f",
fontSize:"1em",
marginBottom:"15px",
fontWeight:"500",
padding:"10px",
backgroundColor:"#f2dede",
borderRadius:"5px",
border:"1px solid #ebcccc"
};

const buttonStyle={
padding:"10px 20px",
backgroundColor:"#1e90ff",
color:"white",
border:"none",
cursor:"pointer",
borderRadius:"5px",
fontSize:"1em",
fontWeight:"600",
transition:"background-color 0.3s ease"
};

const handleInput=(e)=>{
const {name,value}=e.target;
setContact({...contact,[name]:value});
// Clear error for this field when user starts typing
if(errors[name]){
setErrors({...errors,[name]:""});
}
};

const handleSubmit=(e)=>{
e.preventDefault();

// Validate form
const newErrors = validateContactForm(contact);
setErrors(newErrors);

if(hasErrors(newErrors)){
setMsg("Please fix all errors before submitting");
setMsgType("error");
return;
}

// Form is valid, process submission
setMsg("✓ Your message has been submitted successfully! Our team will get back to you soon.");
setMsgType("success");
setContact({name:"",email:"",message:""});
setErrors({});
};

return(

<div style={containerStyle}>

<h2 style={{color:"#1e90ff",marginBottom:"10px"}}>Contact Us</h2>

<p style={{color:"#666",marginBottom:"30px"}}>If you have any questions or need help with booking a taxi, please contact us.</p>

{msg && (
<p style={msgType === "error" ? errorAlertStyle : successMessageStyle}>
{msg}
</p>
)}

<form onSubmit={handleSubmit}>

<div>
<input
type="text"
name="name"
placeholder="Enter Your Name"
value={contact.name}
onChange={handleInput}
style={errors.name ? errorInputStyle : inputStyle}
/>
{errors.name && <p style={errorMessageStyle}>{errors.name}</p>}
</div>

<div>
<input
type="email"
name="email"
placeholder="Enter Your Email"
value={contact.email}
onChange={handleInput}
style={errors.email ? errorInputStyle : inputStyle}
/>
{errors.email && <p style={errorMessageStyle}>{errors.email}</p>}
</div>

<div>
<textarea
name="message"
placeholder="Enter Your Message"
value={contact.message}
onChange={handleInput}
style={errors.message ? errorInputStyle : inputStyle}
rows="5"
/>
{errors.message && <p style={errorMessageStyle}>{errors.message}</p>}
</div>

<button type="submit" style={buttonStyle} onMouseEnter={(e)=>e.target.style.backgroundColor="#0066cc"} onMouseLeave={(e)=>e.target.style.backgroundColor="#1e90ff"}>Send Message</button>

</form>

<hr style={{marginTop:"40px",marginBottom:"30px"}}/>

<h3 style={{color:"#1e90ff",marginBottom:"15px"}}>Our Office</h3>

<p><strong>Email:</strong> support@taxiapp.com</p>
<p><strong>Phone:</strong> +91 9876543210</p>
<p><strong>Address:</strong> Bangalore, India</p>

</div>

)

}

export default ContactUs;
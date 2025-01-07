import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form 
        action="https://getform.io/f/ajjjwxda" 
        method="POST"
      >
        <label>Your Name</label>
        <input type="text" name="name" required />
        
        <label>Email</label>
        <input type="email" name="email" required />
        
        <label>Subject</label>
        <input type="text" name="subject" />
        
        <label>Message</label>
        <textarea 
          name="message" 
          rows="6" 
          placeholder="Type your message here" 
          required 
        />
        
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

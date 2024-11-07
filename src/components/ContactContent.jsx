import { useState, useRef } from "react";
import { toast } from "react-toastify";

const ContactContent = () => {

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const contactFormRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!contactData.name) {
      newErrors.name = "* Your name is required.";
    }
    if (!contactData.email) 
    {
      newErrors.email = "* Your email is required.";
    } 
    else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      newErrors.email = "* Email address is invalid format.";
    }
    if (!contactData.message) {
      newErrors.message = "* Your message is required.";
    } 

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContactData(values => (
      {...values, [name]: value}
    ))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = new FormData(event.target);
      formData.append("access_key", "5eb343ce-e0ca-4a28-bbe1-423329c978c9");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: contactData
      });
      const dataResponse = await response.json();

      if (dataResponse.success) {
        toast.success(dataResponse.message);
        contactFormRef.current.reset();
      } 
      else {
        toast.error(dataResponse.message);
      }
    }
  }

  return (
    <div className="section-container contact">
      <div className="content-container contact-container">
        <div className="contact-content">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
            </li>
            <li>
              <span>Phone:</span> + 1235 2355 98
            </li>
            <li>
              <span>Email:</span> info@yoursite.com
            </li>
            <li>
              <span>Website:</span> yourwebsite.com
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} ref={contactFormRef}>
          <input
            type="text" 
            name="name"
            className="input-form"
            placeholder="Your Name"
            value={contactData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="validate-error">{errors.name}</div>}
          <input 
            type="text"
            name="email"
            className="input-form"
            placeholder="Your Email"
            value={contactData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="validate-error">{errors.email}</span>}
          <textarea
            name="message"
            className="input-form textarea"
            placeholder="Your Message"
            value={contactData.message}
            onChange={handleChange}
          >
          </textarea>
          {errors.message && <span className="validate-error">{errors.message}</span>}
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  )

}

export default ContactContent;
import { toast } from "react-toastify";

const ContactContent = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "5eb343ce-e0ca-4a28-bbe1-423329c978c9");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const dataResponse = await response.json();

    if (dataResponse.success) {
      toast.success(dataResponse.message);
    } 
    else {
      toast.error(dataResponse.message);
    }
  }

  return (
    <div className="contact">
      <div className="contact-container">
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" className="input-form" placeholder="Your Name" required />
          <input type="email" name="email" className="input-form" placeholder="Your Email" required />
          <textarea name="message" className="input-form textarea" placeholder="Message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  )

}

export default ContactContent;
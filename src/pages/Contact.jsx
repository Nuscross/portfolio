import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postContact } from "../management/api";
import HeroPage from "../components/HeroPage";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const dataResponse = await postContact(data);
    if (dataResponse.success) {
      toast.success(dataResponse.message);
      reset();
    } 
    else {
      toast.error("Something went wrong, please try again.");
    }
  }

  return (
    <>
      <HeroPage title="Contact Us" />
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
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              className="input-form"
              placeholder="Your Name"
              { ...register('name', { required: "* Your name is required." }) }
            />
            { errors.name && 
              <div className="validate-error">{ errors.name.message }</div> 
            }
            <input
              type="email"
              name="email"
              className="input-form"
              placeholder="Your Email"
              { ...register('email', {
                required: "* Your email is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "* Email address is in an invalid format.",
                },
              })}
            />
            { errors.email && 
              <span className="validate-error">{ errors.email.message }</span> 
            }
            <textarea
              name="message"
              className="input-form textarea"
              placeholder="Your Message"
              { ...register('message', { required: "* Your message is required." }) }
            />
            { errors.message && 
              <span className="validate-error">{ errors.message.message }</span> 
            }
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
  
}

export default Contact;
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData to send as body
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);

      // Send data to Formspree API
      const response = await fetch('https://formspree.io/f/xnnnjowa', {  // Replace with your Formspree form endpoint
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      // Check if the response is successful
      if (response.ok) {
        setLoading(false);
        setAlert({
          show: true,
          message: 'Your message has been sent successfully!',
          type: 'success',
        });
        setForm({ name: '', email: '', message: '' });  // Clear form after successful submission

        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlert({ show: false, message: '', type: '' });
        }, 5000);
      } else {
        setLoading(false);
        const errorMessage = await response.text();
        console.error('Formspree Error:', errorMessage);  // Log error message from Formspree
        setAlert({
          show: true,
          message: 'Something went wrong, please try again!',
          type: 'error',
        });

        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlert({ show: false, message: '', type: '' });
        }, 5000);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      setAlert({
        show: true,
        message: 'Something went wrong, please try again!',
        type: 'error',
      });

      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 5000);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>

          {/* Notification directly below the form */}
          {alert.show && (
            <div
              className={`mt-4 p-4 text-white rounded-lg shadow-md ${
                alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
              role="alert"
            >
              {alert.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

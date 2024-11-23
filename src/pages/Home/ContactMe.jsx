function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="section--heading">Contact Me</h2>
        <p className="text-lg">
          Whether you have questions or exciting project ideas in mind, drop me
          a message. I&apos;m all ears and ready to collaborate
        </p>
      </div>
      <form
        action="https://formspree.io/f/xknllnnk"
        method="POST"
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              id="first-name"
              name="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              id="last-name"
              name="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              id="email"
              name="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              id="phone-number"
              name="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Chose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
          >
            <option value="" disabled>
              Select One...
            </option>
            <option value="graphic design">Graphic design</option>
            <option value="web development">Web development</option>
            <option value="web design">Web design</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
          ></textarea>
        </label>

        <div>
          <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;

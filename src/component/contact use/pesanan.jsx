import React, { useState } from "react";
import "./contact.css"

function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    instagram: "",
    email: "",
    facebook: "",
    twitter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactInfo);
  };

  return (
    <div className="contact-container">
      <h2>Segara pesan Makanan</h2>
      <form onSubmit={handleSubmit} className="contact">
        <div>
          <label htmlFor="nama">nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={contactInfo.nama}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="makanan">makanan:</label>
          <input
            type="text"
            id="makanan"
            name="makanan"
            value={contactInfo.makanan}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="jumlah makanan">jumlah makanan:</label>
          <input
            type="text"
            id="jumlah makanan"
            name="jumlah makanan"
            value={contactInfo.jumlahmakanan}
            onChange={handleChange}
          />
        </div>
        <div></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;

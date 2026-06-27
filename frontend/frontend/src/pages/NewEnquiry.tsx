import { useState } from 'react';
import '../App.css';

export default function NewEnquiry() {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('New enquiry:', formData);
  }

  return (
    <main className="enquiryPage">
      <form className="enquiryForm" onSubmit={handleSubmit}>
        <h1 className="formTitle">New Enquiry</h1>

        <div className="formField">
          <label className="formLabel" htmlFor="clientName">Client Name</label>
          <input
            className="formInput"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="email">Email</label>
          <input
            className="formInput"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="phone">Phone</label>
          <input
            className="formInput"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="enquiryType">Enquiry Type</label>
          <select
            className="formInput"
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
          >
            <option value="">Select type</option>
            <option value="housing">Housing</option>
            <option value="employment">Employment</option>
            <option value="family">Family</option>
            <option value="immigration">Immigration</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="message">Message</label>
          <textarea
            className="formInput"
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button className="formSubmit" type="submit">
          Submit Enquiry
        </button>
      </form>
    </main>
  );
}

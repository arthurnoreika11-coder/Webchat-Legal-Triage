import { useState } from 'react';
import '../../App.css';

export default function NewEnquiry() {
  const [formData, setFormData] = useState({
    subject:  '',
    preferredDate: '',
    preferredTime: '',
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

        <div className='formField'>
          <label className='formLabel' htmlFor='subject'>Subject</label>
          <input
            className='formInput'
            id='subject'
            name='subject'
            type='string'
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className='formField'>
          <label className='formLabel' htmlFor='PreferredContactMethod'>Preferred contact method</label>
          <label>
            <input
              className='formRadio'
              type='radio'
              name='enquiryType'
              value='Online chat'
              checked={formData.enquiryType === 'Online chat'}
              onChange={handleChange}
            />
            Online chat
          </label>
          <label>
            <input
              className='formRadio'
              type='radio'
              name='enquiryType'
              value='Telephone'
              checked={formData.enquiryType === 'Telephone'}
              onChange={handleChange}
            />
            Telephone
          </label>
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="preferredDate">Preferred Date</label>
          <input
            className="formInput"
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="preferredTime">Preferred Time</label>
          <input
            className="formInput"
            id="preferredTime"
            name="preferredTime"
            type="time"
            value={formData.preferredTime}
            onChange={handleChange}
          />
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

        {/* Automatically add client info */}

        <button className="formSubmit" type="submit">
          Submit Enquiry
        </button>
      </form>
    </main>
  );
}

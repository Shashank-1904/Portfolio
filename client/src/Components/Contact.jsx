import React, { useState } from 'react';
import Title from './Title';
import { SocialLinks } from '../assets/utils/Data';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <div className='mt-20' id='Eduex'>
      <Title title="Contact Me" />
      <div className="flex flex-wrap justify-center mt-5 gap-8">
        <div className="pt-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {SocialLinks.map((item, index) => (
              <div key={index} className="flex mb-8">
                <div className="text-tertiary mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                  {<item.icon />}
                </div>
                <div>
                  <h5 className="mb-1 text-lg lg:text-xl">{item.title}</h5>
                  <a
                    href={item.title === 'Mail' ? `mailto:${item.url}` : item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs lg:text-lg text-neutral-500 cursor-pointer"
                  >
                    {item.content}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12 w-full bg-neutral-900 rounded-lg p-6">
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Your Contact</label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Contact No"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

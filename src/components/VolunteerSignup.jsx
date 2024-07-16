import React, { useState } from 'react';
import { Modal, Button, TextInput, Textarea } from '@mantine/core';

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    interests: '',
  });

  const [opened, setOpened] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setOpened(false); // Close the modal after submission
  };

  return (
    <>
      <Button color='red' onClick={() => setOpened(true)} className="bg-blue-500 hover:bg-blue-600">
        Volunteer Signup
      </Button>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Volunteer Signup">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <TextInput
            label="Availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Textarea
            label="Interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default VolunteerSignup;

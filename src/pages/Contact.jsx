import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: your.email@example.com</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <br />
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send</button>
      </form>

      {sent && <p>Thanks for your message!</p>}
    </div>
  );
}
"use client"
import React from "react";

export default function Home() {
  const [form, setForm] = React.useState({ username: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '320px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#111' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '.5rem', color: '#111' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '.5rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                color: '#222' // Make text darker and more visible
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem', color: '#111' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '.5rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                color: '#222' // Make text darker and more visible
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '.75rem',
              background: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


import { useState } from "react";

const initialForm = {
  name: "",
  status: "Student",
  education: "B.Tech",
  interest: "Technology",
  goal: "Get a job",
};

export default function ProfileSetup({ onSave }) {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...form,
      name: form.name.trim(),
    });
  }

  return (
    <section className="section-container form-page">
      <div className="form-intro">
        <span className="eyebrow">LET'S FIND YOUR DIRECTION</span>
        <h1>Every journey starts <span className="gradient-text">somewhere.</span></h1>
        <p>
          Tell us about your current situation. We'll use your answers to
          filter the opportunities shown in this demo.
        </p>

        <div className="form-benefit">
          <span>✓</span> Simple profile setup
        </div>
        <div className="form-benefit">
          <span>✓</span> Options across different fields
        </div>
        <div className="form-benefit">
          <span>✓</span> A starting point for your next move
        </div>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-progress">
          <div>
            <span className="muted-label">YOUR PROFILE</span>
            <span className="step-count">Step 1 of 1</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>

        <h2>Tell us about yourself</h2>
        <p className="form-subtitle">A few details will help you get started.</p>

        <label htmlFor="name">What should we call you?</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Enter your name (optional)"
          maxLength={60}
        />

        <label htmlFor="status">What best describes your situation?</label>
        <select id="status" name="status" value={form.status} onChange={updateField}>
          <option>Student</option>
          <option>Graduate</option>
          <option>Job seeker</option>
          <option>Non-student</option>
        </select>

        <label htmlFor="education">Your education level</label>
        <select
          id="education"
          name="education"
          value={form.education}
          onChange={updateField}
        >
          <option>School</option>
          <option>12th pass</option>
          <option>Diploma</option>
          <option>B.Tech</option>
          <option>Other undergraduate degree</option>
          <option>Postgraduate</option>
          <option>Other</option>
        </select>

        <label htmlFor="interest">What are you interested in?</label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={updateField}
        >
          <option>Technology</option>
          <option>Business</option>
          <option>Government jobs</option>
          <option>Creative work</option>
          <option>Finance</option>
          <option>Not sure yet</option>
        </select>

        <label htmlFor="goal">What's your main goal right now?</label>
        <select id="goal" name="goal" value={form.goal} onChange={updateField}>
          <option>Get a job</option>
          <option>Learn new skills</option>
          <option>Prepare for exams</option>
          <option>Start a business</option>
          <option>Earn through freelancing</option>
          <option>Explore my options</option>
        </select>

        <button className="btn btn-primary btn-large submit-btn" type="submit">
          Find opportunities <span>→</span>
        </button>

        <p className="privacy-note">
          Demo version: your profile stays in the current app session.
        </p>
      </form>
    </section>
  );
}

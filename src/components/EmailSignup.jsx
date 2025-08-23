import { useState } from "react";
import { SIGNUP_POST_URL, FORMSPREE_FORM_ID } from "../config.js";

function EmailSignup() {
  const [emailAddress, setEmailAddress] = useState("");
  const [subscriberName, setSubscriberName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      if (SIGNUP_POST_URL) {
        const response = await fetch(SIGNUP_POST_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailAddress, name: subscriberName }),
        });
        if (!response.ok) throw new Error("Signup failed");
        setIsSuccess(true);
      } else if (FORMSPREE_FORM_ID) {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailAddress, name: subscriberName }),
        });
        if (!response.ok) throw new Error("Signup failed");
        const data = await response.json();
        if (data.ok || data.next) {
          setIsSuccess(true);
        } else {
          throw new Error("Unexpected response");
        }
      } else {
        throw new Error("No signup endpoint configured. Set VITE_SIGNUP_POST_URL or VITE_FORMSPREE_FORM_ID.");
      }
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="email-success">
        <h3>You're in.</h3>
        <p>We'll send you the next chilling chapter soon.</p>
      </div>
    );
  }

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <div className="email-row">
        <input
          type="text"
          name="name"
          className="email-input name"
          placeholder="Name (optional)"
          value={subscriberName}
          onChange={(e) => setSubscriberName(e.target.value)}
          autoComplete="name"
        />
        <input
          required
          type="email"
          name="email"
          className="email-input"
          placeholder="Enter your email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          autoComplete="email"
        />
        <button className="cta-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Joining..." : "Join the list"}
        </button>
      </div>
      {errorMessage ? <div className="email-error">{errorMessage}</div> : null}
      <p className="fine-print">No spam. Unsubscribe anytime.</p>
    </form>
  );
}

export default EmailSignup;
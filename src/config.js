export const TRAILER_VIDEO_ID = import.meta.env.VITE_TRAILER_VIDEO_ID || "VIDEO_ID_HERE";
export const YOUTUBE_CHANNEL_URL = import.meta.env.VITE_YOUTUBE_CHANNEL_URL || "https://www.youtube.com/@yourchannel";
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/yourhandle";
export const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/yourpage";

// If you have a backend endpoint to capture emails, set VITE_SIGNUP_POST_URL.
export const SIGNUP_POST_URL = import.meta.env.VITE_SIGNUP_POST_URL || "";

// Alternatively, you can use Formspree: https://formspree.io
// Create a form and set the ID here as VITE_FORMSPREE_FORM_ID (e.g. xyzabcd)
export const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
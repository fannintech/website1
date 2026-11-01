export const company = {
  name: "Fannin Technologies",
  tagline: "Your Technology Partner",
  email: import.meta.env.VITE_CONTACT_EMAIL || "",
  phone: import.meta.env.VITE_CONTACT_PHONE || "",
  address: import.meta.env.VITE_CONTACT_ADDRESS || "",
};

export const apiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export function contactEndpoint() {
  return apiUrl ? `${apiUrl}/api/contact` : "/api/contact";
}

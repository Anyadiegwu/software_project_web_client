// const BASE_URL = "http://localhost:5000/api"; // change to your backend

// export const registerReporter = async (data) => {
//   const res = await fetch(`${BASE_URL}/reporter/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await res.json();

//   if (!res.ok) {
//     throw new Error(result.message || "Registration failed");
//   }

//   return result;
// };

// export const loginReporter = async (data) => {
//   const res = await fetch(`${BASE_URL}/reporter/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await res.json();

//   if (!res.ok) {
//     throw new Error(result.message || "Login failed");
//   }

//   return result;
// };
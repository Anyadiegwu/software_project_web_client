const BASE_URL = "http://localhost:5000/api";
// console.log(BASE_URL)
const normalizeLoginPayload = (role, data) => {
  switch (role) {
    case "security":
      return {
        identifier: data.identifier || data.email,
        password: data.password,
      };

    default:
      return {
        email: data.email,
        password: data.password,
      };
  }
};

const normalizeRegisterPayload = (role, data) => {
  switch (role) {
    case "reporter":
      return {
        name: data.name,
        email: data.email,
        password: data.password,
      };

    case "security":
      return {
        name: data.name,
        email: data.email,
        badgeNumber: data.badgeNumber,
        department: data.department,
        rank: data.rank,
        password: data.password,
      };

    default:
      return data;
  }
};

export const authService = {
  login: async (role, data) => {
    const payload = normalizeLoginPayload(role, data);

    const res = await fetch(`${BASE_URL}/auth/${role}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log("Login response:", result);
    if (!res.ok) {
      throw new Error(result.message || "Login failed");
    }

    return result;
  },

  register: async (role, data) => {
    const payload = normalizeRegisterPayload(role, data);

    const res = await fetch(`${BASE_URL}/auth/${role}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Registration failed");
    }

    return result;
  },
};
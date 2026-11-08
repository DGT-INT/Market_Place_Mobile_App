import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};

// might have to comeback to video 4 and do the postman api stuff

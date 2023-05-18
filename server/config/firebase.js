const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const key = require("../account.json");

const app = initializeApp({
  credential: cert(key),
});

const auth = getAuth(app);

module.exports = {
  auth,
};

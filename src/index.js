function greet(name) {
  return `Hello, ${name}!`;
}

// ✅ New function: validate email
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

module.exports = { greet, validateEmail };

// Added email validation – Ritika



function greet(name) {
  return Hello, ${name}!;
}

// ✅ New function: validate email
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

module.exports = { greet, validateEmail };



// Added email validation – Ritika
// Added user dashboard card layout section - Ritika
// Added sidebar and navigation section - Ritika
// Added YAML stage logic — Tamirlan
// Configured Dev and QAT environments – Tamirlan
// Verifying YAML stages in DevOps pipeline – Tamirlan
// GitHub connected to Azure DevOps via PAT – Tamirlan
// Add test function for pipeline – closes #32

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('🚀 Hello Ritika, your DevOps project is running on localhost!');
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});


// Added email validation – Ritika
// Added user dashboard card layout section - Ritika
// Added sidebar and navigation section - Ritika
// Added YAML stage logic — Tamirlan
// Configured Dev and QAT environments – Tamirlan
// Verifying YAML stages in DevOps pipeline – Tamirlan
// GitHub connected to Azure DevOps via PAT – Tamirlan
// Add test function for pipeline – closes #32

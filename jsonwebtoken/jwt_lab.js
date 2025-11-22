
// ==============================
// Step 3: Import jsonwebtoken
// ==============================
const jwt = require("jsonwebtoken");

// Secret key used for signing & verifying
// In real apps, NEVER hardcode this. Use env variables.
const secretKey = "yourSecretKey";

// ==============================
// Step 4: Creating and Signing a JWT
// ==============================
function createJWT() {
  const payload = {
    userId: 123,
    username: "exampleUser",
    role: "student"
  };

  // token expires in 1 hour (optional but recommended)
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  console.log("💡 Generated JWT Token:");
  console.log(token);
  console.log("\n");

  return token;
}

// ==============================
// Step 5: Verifying a JWT
// ==============================
function verifyJWT(token) {
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("❌ JWT Verification Failed:", err.message);
    } else {
      console.log("✅ JWT Verified Successfully!");
      console.log("Decoded Payload:", decoded);
    }
    console.log("\n");
  });
}

// ==============================
// Step 6: Decoding a JWT (NO verification)
// ==============================
function decodeJWT(token) {
  const decoded = jwt.decode(token);
  console.log("🔍 Decoded JWT (NOT VERIFIED):");
  console.log(decoded);
  console.log("\n");
}

// ==============================
// Step 7: Run the lab
// ==============================

// 1️⃣ Create a new JWT
const newToken = createJWT();

// 2️⃣ Verify the JWT
verifyJWT(newToken);

// 3️⃣ Decode the JWT without verification
decodeJWT(newToken);

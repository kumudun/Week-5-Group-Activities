// Import bcrypt
const bcrypt = require('bcrypt');




async function hashPassword() {
  const password = 'abcd'; 

  try {
   
    const salt = await bcrypt.genSalt(10);

  
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('--- Async Hashing ---');
    console.log('Password:', password);
    console.log('Salt:', salt);
    console.log('Hashed Password:', hashedPassword);
    console.log();
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}




async function comparePassword() {
  const inputPassword = 'abcd'; 
  const storedHashedPassword = '$2b$10$RANDOM_HASH_EXAMPLE';  
 

  try {
    const isMatch = await bcrypt.compare(inputPassword, storedHashedPassword);

    console.log('--- Password Comparison ---');
    if (isMatch) {
      console.log('Password is correct.');
    } else {
      console.log('Password is incorrect.');
    }
    console.log();
  } catch (error) {
    console.error('Error comparing password:', error);
  }
}



function syncHashExample() {
  const password = 'abcd';

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  console.log('--- Synchronous Hashing ---');
  console.log('Salt:', salt);
  console.log('Synchronous Hashed Password:', hashedPassword);
  console.log();
}


(async () => {
  await hashPassword();
  syncHashExample();

 
})();

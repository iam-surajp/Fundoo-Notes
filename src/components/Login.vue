<script>
export default {
  name: 'Login'
}
</script>

<template>
  <div class="container">
    <div class="logo" style="position: relative; display: flex; flex-direction: column">
      <img src="/src/assets/Google__G__logo.svg.png" alt="Google Logo" />
      <div>
        <h1>
          Create a Google <br />
          Account
        </h1>
        <p>Enter your name</p>
      </div>
    </div>

    <div>
      <input type="text" name="first_name" placeholder="First name" required /><br />
      <input type="text" name="last_name" placeholder="Last name (optional)" /><br />
      <button type="submit">Next</button>
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 900px;
  height: 350px;
}

.logo img {
  width: 50px;
  position: relative;
  /* left: 30px; */
  /* height: 30px; */
}

h1 {
  font-size: 40px;
  color: #202124;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #5f6368;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 400px;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #1a73e8;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  left: 150px;
}

button:hover {
  background-color: #1558b0;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  color: #5f6368;
  position: relative;
  top: 300px;
  /* right: 200px; */
}

.footer select {
  border: none;
  background: transparent;
  font-size: 12px;
  color: #5f6368;
  cursor: pointer;
}

.footer .links {
  display: flex;
  gap: 10px;
}

.footer .links a {
  color: #1a73e8;
  text-decoration: none;
}

.footer .links a:hover {
  text-decoration: underline;
}
</style>

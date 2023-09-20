<template>
    <div class="main">
        <div class="container">
            <div class="form-container" id="signup-container">
                <h1>Sign Up</h1>
                <form id="signup-form">
                    <div class="form-group">
                        <input type="text" id="signup-firstname" v-model="fname"  placeholder="First Name" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="signup-lastname" v-model="lname"  placeholder="Last Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="signup-email" v-model="email"  placeholder="Email" required>
                    </div>
                    <div class="form-group eye-sec">
                        <input type="password" id="signup-password" v-model="password"  placeholder="Password" required>
                        <span class="password-toggle" id="signup-password-toggle" @click="togglePasswordVisibility">👁️</span>
                    </div>
                    <div class="form-group">
                        <input type="text" id="signup-address" v-model="address"  placeholder="Address" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="signup-phone" v-model="phone"  placeholder="Phone" required>
                    </div>
                    <button type="submit" id="signup-btn" @click="signup">Sign Up</button>
                </form>
                <p>Already have an account? <router-link to="/login" id="login-link">Login</router-link></p>
            </div>
        </div>
    </div>
</template>



<script>

    export default 
    {
        name:"signup"
    }
    
</script>





<script setup>

    import { ref} from 'vue'
    const fname = ref("");
    const lname = ref("");
    const email = ref("");
    const password = ref("");
    const address = ref("");
    const phone = ref("");



    const signup= () => 
    {
        const signupData=
         {
            fname : fname.value,
            lname : lname.value,
            email :  email.value,
            password : password.value,
            address : address.value,
            phone : phone.value,
        }
        
        
        localStorage.setItem("signupData", JSON.stringify(signupData));
        alert("Signup successful!");
    }

    // Helper function to validate email format
    function togglePasswordVisibility(inputId)
    {
        const passwordInput = document.getElementById(inputId);
        const passwordIcon = document.getElementById(`show-${inputId}`);
        if (passwordInput.type === "password")
        {
            passwordInput.type = "text";        
            passwordIcon.textContent = "👁️";    
        } 
        else 
        {
            passwordInput.type = "password";
            passwordIcon.textContent = "👁️";
        }
    }


    
</script>


<style scoped>
    /* Add responsive CSS here */
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .main
    {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .container {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 400px;
        width: 100%;
        text-align: center;
    }

    .form-container {
        transition: transform 0.3s ease;
    }

    .form-container.hidden {
        transform: translateX(100%);
    }

    .form-group {
        margin-bottom: 15px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="tel"],
    input[type="file"] {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    .live-picture
    {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    button[type="submit"] {
        background-color: #007BFF;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
    }

    #signup-link,
    #login-link {
        color: #007BFF;
        text-decoration: none;
        font-weight: bold;
    }

    .password-toggle {
        cursor: pointer;
        user-select: none;
    }

    .hidden {
        display: none;
    }
    .eye-sec{
        position: relative;
    
    }
    .eye-sec span{
        position: absolute ;
        top: 7px;
        right: 23px;
    }
    .password-toggle{
        position: absolute;
    }
    .live-captured
    {
        width: 96%;
        padding: 10px;
        background-color: #36b311;
        border-radius: 5px;
        font-size: 16px;
        color: white;
        font-weight: bold;
        border: 1px;
    }
    #captured-image
    {
        width: 80%;
        height: 80%;
    }
</style>
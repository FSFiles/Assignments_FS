const form =document.getElementById("forming");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const userdata = {name,email,password};
    if(!name || !email || !password){
        alert("Please fill in all details.");
        return;
    }else{
        localStorage.setItem("user",JSON.stringify(userdata));
        alert("Registration successful!");
        window.location.href ="login.html";
    }
    const store = JSON.parse(localStorage.getItem("user"));
    if(store && store.email == email && store.password == password){
        alert("Login successful!");
        reset();
        window.location.href = "newWeb.html";
    }else{
        alert("Invalid email or password.");
    }



})
document.getElementById("submitbtn").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    // console.log("name:", name,email,subject,message);
    user({name,email,subject,message});
    
  });

  function user(data) {
    console.log("name:", data);
    localStorage.setItem("user",JSON.stringify(data));
  }
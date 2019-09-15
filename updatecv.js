      // Change fullname, email, address, and phone number based on what was filled in the form
      var name=localStorage.getItem("name").toUpperCase();
      var mail=localStorage.getItem("mail").toLowerCase();
      var phone=localStorage.getItem("phone");
      var address=localStorage.getItem("address").toUpperCase();
      
      //Edit the CV
      document.getElementById("name").innerHTML = name.bold();
      document.getElementById("email").innerHTML = mail.bold();
      document.getElementById("phone").innerHTML = phone.bold();
      document.getElementById("address").innerHTML = address.bold();
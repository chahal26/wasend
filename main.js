function startchat(){
    const phonecode = document.getElementById('phonecode').value;
    const phonenumber = document.getElementById('phonenumber').value;
    
    window.open(
        "https://wa.me/"+phonecode+phonenumber,
        '_blank'
      );
}
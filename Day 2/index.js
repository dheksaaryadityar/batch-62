function getData(event) {
    event.preventDefault()
   
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
 
    console.log(name, email, phone, subject, message);
    alert("berhasil input data")
}

function exercise(e) {
    e.preventDefault()
    // ARRAY => [] => 0,1,2,3, dst
    let datas = ["dheksa, 12"]

    let lengthArray = datas.length

    console.log('value array index 0: ${datas} || memiliki panjang data sebanyak 2 ${datas.length}');
    
}

    //OBJECT => {} => key => custom
    let person = {
        name: "dheksa aryaditya ramadhan", 
        age: 23

        console.log('value object: ${person.name} dan ${person["age"]} ');


    }

    //ARRAY OF OBJECT
    let dataPerson=

    //LOOPING 
    for(let i=0; i < datas.length; i++){
        // console.log(datas[i]);
        console.log('value object: ${dataPerson.name} dan ${dataPerson["age"]} ');
        
        
    }
    


    //operator
    let number = 4
    // number = number + 2
    // AND dan OR => && dan 
    number += 2 
    console.log(number % 3);
    

    //CONDITIONAL
    let weather = "badai"
    if(weather == "cerah"){
        console.log("Tidak bawa mantel");
        
    }else if(weather == "mendung"){
        console.log("bawa mantel");
        
    }else{
        console.log("tidak keluar rumah");
        
    }
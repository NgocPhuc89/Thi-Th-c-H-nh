class Staff {
    constructor ( fullname , email ){
        this.fullname = fullname;
        this.email = email;
    }
    setFullname (fullname){
        this.fullname = fullname;
    }
    getFullname (){
        return fullname
    }
    setEmail(email){
        this.email = email;
    }
    getEmail (){
        return email;
    }
    toString(){
        return "fullname" + "email";
    }
}
let david = new Staff ("David" , "david@gmail.com");
david.setFullname = ("David Do");
david.setEmail = ("david.do@gmail.com");
david.toString = ("David Do" + "david.do@gmail.com");


let staffs = [
    new Staff ( "David" , "david@gmail.com"),
    new Staff ( "Phuc" , "phuc@gmail.com"),
    new Staff ( "Khoa" , "khoa@gmail.com"),
]
function find(){
    for ( let i = 0 ; i < staffs.length; i++){
        if( staffs[i].fullname == "David"){
            console.log (david.toString);
        }
    }
}
find();


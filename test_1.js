function equation_2 (a , b, c){
    // (a * x * x) + (b * x) + c = 0
    let x1 , x2 ;
    // let a  , b  , c ;
    let delta = (b * b - 4 * a * c) ;
    if ( delta == 0 ){
        x1 = -b / (2 * a);
        x2 = -b / (2 * a);
        console.log (x1);
        console.log (x2);
    }
    if (delta < 0){
        console.log ("Phương Trình bậc 2 vô nghiệm")
    }else{
        x1 = (- b - (Math.sqrt(delta))) / (2 * a);
        x2 = (- b + (Math.sqrt(delta))) / (2 * a);
        console.log (x1);
        console.log (x2); 
    }
}
equation_2 (8 , 12 , -20);
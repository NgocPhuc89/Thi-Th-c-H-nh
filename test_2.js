function findElemen (){
    let numbers = [ 1 , 2 , 4  ,6 , 8 , 12 , 20];
    let x = 2 ;
    for ( let i = 0 ; i < numbers.length ; i++){
        if ( x == numbers[i]){
            console.log (x + "có trong mảng");
        }
    }
}
findElemen ();
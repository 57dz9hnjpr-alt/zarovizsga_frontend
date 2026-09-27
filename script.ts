//Elso feladat

function osszesOszto(szam:number):number[] {
    var eredmeny:number[]=[];


     for (var i : number = 1; i <= szam; i++) {
        
         if (szam % i ==0 ) {
            eredmeny.push(i)
        }
     }
   

    return eredmeny;
}




//Masodik feladat
function parosDarab(szamTomb:number[]):number {

    var db:number = 0;

    for (var i : number = 0; i < szamTomb.length; i++) {
        
        if (szamTomb[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}
//Harmadik feladat





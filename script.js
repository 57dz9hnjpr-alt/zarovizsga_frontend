"use strict";
//Elso feladat
function osszesOszto(szam) {
    var eredmeny = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            eredmeny.push(i);
        }
    }
    return eredmeny;
}
//Masodik feladat
function parosDarab(szamTomb) {
    var db = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        if (szamTomb[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}
//Harmadik feladat

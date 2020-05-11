//sudėk į masyvą žodžius šia tvarka.
// Tiek, šviežiose, tiek, džiovintose, slyvose, yra, išties, daug, maisto, medžiagų, Jose, esama, daugiau, nei, 15, skirtingų, vitaminų, ir, mineralų, be, to, skaidulų, ir, antioksidantų, Svarbu, ir, tai, kad, slyvos, yra, palyginti, nekaloringos
// ciklo pagalba sukonstruok vieną stringą, ir vėliau jį atspausdink.
// sugalvok kaip padaryti, kad šie žodžiai virstų sakiniais. padėk tinkamose vietose taškus.

let kintamasis = ['Tiek', 'šviežiose', 'tiek', 'džiovintose', 'slyvose', 'yra', 'išties', 'daug', 'maisto', 'medžiagų', 'Jose', 'esama', 'daugiau', 'nei', '15', 'skirtingų', 'vitaminų', 'ir', 'mineralų', 'be', 'to', 'skaidulų', 'ir', 'antioksidantų', 'Svarbu', 'ir', 'tai', 'kad', 'slyvos', 'yra', 'palyginti', 'nekaloringos'];
let str='';
for(let i=0; i<kintamasis.length; i++){


    let character = kintamasis[i].charAt(0);
    if (!isNaN(character * 1)){
        //alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            if (i==0){

            }
            else {
            str = str + '. ';
        }
        }
        if (character == character.toLowerCase()){

        //    alert ('lower case true');
        }
    }

    str=str + ' ' + kintamasis[i]; 
}
console.log(str);
//Tiek šviežiose tiek džiovintose slyvose yra išties daug maisto medžiagų. Jose esama daugiau nei 15 skirtingų vitaminų ir mineralų be to skaidulų ir antioksidantų. Svarbu ir tai kad slyvos yra palyginti nekaloringos.


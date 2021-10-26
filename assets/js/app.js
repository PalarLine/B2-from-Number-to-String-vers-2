

function grivny(e, k) {
        
        if (e == 1 && k != 1) {
        
                 text = 'Гривна';
        
        } else if ((e == 2 || e == 3 || e == 4) && k != 1) {
        
                 text = 'Гривны';
        
                }
        else {

                text = 'Гривен';
        }

        
        return text;

}   

function capitalize(sumToString) {
        
        return sumToString.replace(/(^|\s)\S/g, function(a) {
                return a.toUpperCase() 
        })
}


function userFillForm() { 

        let sum = formInput.value;
        
        let sumMass = [];
        
               sumMass = [...sum];
        
               sumMass.reverse();
        
        let sumMassToStr = String(sumMass);
        
               sumMassToStr = sumMassToStr.replaceAll(',','');
        
        if(sumMassToStr.length == 0) {
        
                document.getElementById('formGetting').innerHTML = '&nbsp;';
        }
        
        let sumToString;
        
        
        const mass1 = ['ноль', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',         'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',         'семнадцать', 'восемнадцать', 'девятнадцать'];
        
        const mass2 = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят',         'семьдесят', 'восемьдесят', 'девяносто'];
        
        const mass3 = [' ', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот','шестьсот', 'семьсот',         'восемьсот', 'девятьсот'];
          
        
        if (sumMassToStr.length == 3) {
        
                if ([sumMassToStr[0]] == 0 && [sumMassToStr[1]] == 0) {
        
                        sumToString = mass3[sumMassToStr[2]];
                      
                } else if ([sumMassToStr[1]] ==  1) {
        
                               let num = Number([sumMassToStr[0]]) + 10;
                               
                               sumToString = mass3[sumMassToStr[2]] + ' ' + mass1[num];
                               
        
                } else if (sumMassToStr[1] == 0) {
        
                               sumToString = mass3[sumMassToStr[2]] + ' ' + mass1[sumMassToStr[0]];
                               
        
                } else if (sumMassToStr[0] == 0) {
        
                               sumToString = mass3[sumMassToStr[2]] + ' ' + mass2[sumMassToStr[1]];
                               
                } else { 
        
                               sumToString = mass3[sumMassToStr[2]] + ' ' + mass2[sumMassToStr[1]]  + ' ' +  mass1[sumMassToStr[0]];
                               
                        } 
        }
        
        
        if (sumMassToStr.length == 2) {
        
                if ([sumMassToStr[0]] == 0) {
        
                        sumToString = mass2[sumMassToStr[1]]; 
                        
        
                } else if ([sumMassToStr[1]] ==  1) {
        
                               let num = Number([sumMassToStr[0]]) + 10;
                               
                               sumToString = mass1[num];
                               
                } else {
        
                               sumToString = mass2[sumMassToStr[1]] + ' ' + mass1[sumMassToStr[0]];
                               
                }
        }
        
        
        if (sumMassToStr.length == 1) {
        
                sumToString = mass1[sumMassToStr[0]];
                
        }
        
        
        
        document.getElementById('formGetting').innerHTML = capitalize(sumToString)  +  ' '  + grivny        (sumMassToStr[0], sumMassToStr[1]);
                console.log(sumMassToStr[0])

}

        
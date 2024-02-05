// ----------------------------------------------------------------------
//***** ফংশন বিষয় আলোচনা বর্গ করার নিয়ম বর্গ সুদু এক ভাবে করা যায় ***video--20-1,2***//

function Rabbi(nambar){
    console.log('This is a heading', nambar)
    const borgo = nambar * nambar ;
    console.log('this is a paragraph.', borgo)
}
Rabbi(4);
Rabbi(50);

// ***আবার যোগ করার বিষয় হল **

function add(Nam1, Nam2, Nam3){
    const total = Nam1 + Nam2 + Nam3;
    console.log(total)
}
add(50,25,25);

function Rabbi(a, b, c, d, f, g, h){
    const mot =a + b + c + d + f + g + h;
    console.log('This is a website in bangladesh', mot)

}
Rabbi(10, 20, 20, 100, 700, 50, 100);

// ----------------------------------------------------------------------------------------;

//*** বিয়োগ করার বিষয় ফাংশন দিয়ে করে তার বিষয় আলোচনা বা মান আকারে দিতে পারি বা const dite pari ***video--20.3 ***//

function Rabbi(Ra1, Ra2){
    const Rafi = Ra1 - Ra2;
    console.log('This is a ba jekono bisoy', Rafi)
}
const Najim =50;
const Nahid =20;
Rabbi(Najim,Nahid);

// -------------------------------------------------------------------------------------;

//**** গুন করার বিষয় ফাংশন নিয়ে আলোচনা ***video--20.4***///

function Rabbi(nam){
    const Rakib = nam * 20;
    return Rakib;
}

const out = Rabbi(100);
console.log('this is a heading', out);

// --------------------------------------------------------------------------------------------------------;

// *****যোগ বিয়োগ গুন ভাগ একবারে করতে পারি তার হিসাব এর ভিতর  if else  ব্যাবহার করতে পারি video--20.5****//

function Rabbi(Name1, Name2){
    const sum =Name1 + Name2;
    const diff =Name1 - Name2;
    const gun =sum * diff;
    const Rakib =gun /2;
    return Rakib;
}
Rabbi(20, 10)
 const Rayhan = Rabbi(20,10);
 console.log(Rayhan)
 const Rifat = Rabbi(50,25)
 console.log(Rifat)

// *******************************
 
//  *** if বা else জোর বিজোড় খজার নিয়েম ***
// জোড় বিষয় "০"/////

function Rabbi(Nambar){
    if(Nambar % 2===0){
        return true;
    }
    else {
        return false;
    }
}
console.log(Rabbi(10))
console.log(Rabbi(115))

// *******************************

// বিজোড় বিষয় "১"////

function Rayhan(Nambar){
    if(Nambar % 2===1){
        return true;
    }
    else {
        return false;
    }
}
console.log(Rayhan(115))
console.log(Rayhan(120))

// ----------------------------------------------------------------------------------------------------;

//****** srting সটকাট বলে str এটা দ্বারা কাজ করে if else bisay ***video--20.6**//

function Rabbi(str){
    const size =str.length;
    console.log(str,size)
}
Rabbi('Bangladesh');
Rabbi('Dhaka');

// ******************************;

function Rakib(str){
    const size=str.length;
    console.log(str,size)
    if(size % 2 ===0){
        console.log('this is a heading.')
        return true;
    }
    else {
        console.log('This is a paragraph.')
        return false;
    }
}

// ----------------------------------------------------------------------------------------------------;

// ***** এরে কাজ নামবার নিয়ে কাজ যোগ করে এরে আনা *** video --20.7***///

function Rabbi(nambar){
    let sum =0;
    for(const nam of nambar){
        console.log(nam);
        sum =sum +nam;
    }
    return sum;
}
const Nambar=[10, 20, 30, 40];
const sum =Rabbi(Nambar);
console.log('this is a heading', sum)

// ******খুব গুরুত্বপূর্ণ বিষয় @@@@@@@@@@;

// -------------------------------------------------------------------------------------------------------;

// ******* এরে কাজ যদি জোর সংখ্যা খুঁজি তাহলে %২===০, আর যদি বিজোড় সংখ্যা খুঁজি তাহলে %২===১; বিষয় আলোচনা ***video--20.8**//

// ***এরে আনার জন্য কাজ বা নামবার আনার জন্য কাজ

// function Rabbi(Nambar){
//     for(Rakib of Nambar){
//         console.log(Rakib)
//     }

// }
// const Nambar =[1, 2, 3, 4, 5, 6];
// Rabbi(Nambar);

// ********************

// **** জোর সংখ্যা খজার জন্য এরে বা for ****

// function Rayhan(Rabbi){
//     for (Rafi of Rabbi){
//         if(Rafi %2===0)
//         console.log(Rafi)
//     }
// }
// const Rifat =[20, 25, 30, 35, 40, 50, 75, 99];
// Rayhan(Rifat);

// **************************

// ** বিজোর সংখ্যা খজার জন্য এরে বা for*/

function Najim(Muhid){
    for(Chabbir of Muhid){
        if(Chabbir %2===1){
            console.log(Chabbir)
        }
    }
}
const Rabbi =[5,15,20, 10, 4, 6, 22, 7, 47];
Najim(Rabbi);

// ******************

// **যদি জোর অথবা বিজোড় সংখার জগফল বের করতে চাই তাহলে "রিতান-" ব্যাবহার করতে হবে ***/

// function Rabbi(Nambar){
//     let from =0;
//     for(Rakib of Nambar){
//         if(Rakib %2 ===0){
//             console.log(Rakib);
//             total =from + Rakib;
//         }

//     }
//     return total;
// }
// const Nambar=[10, 20, 23, 25, 27, 99, 100, 20]
// const sum = Rabbi(Nambar);
// console.log('This is a total', sum);

// -------------------------------------------------------------------------------------------------------;

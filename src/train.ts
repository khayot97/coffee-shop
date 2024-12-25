// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda


function countVowels(input: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0; // Hisoblagich
    // console.log("unli - 1:", vowels);
    // 
    // Kiruvchi matnni belgilar qatoriga aylantirib for loop orqali tekshiramiz!
    for (let  i = 0; i <input.length; i++) {
        // console.log("i - 2:", i);
        if (vowels.includes(input[i])) {
            count++; // Agar unli harif bo'lsa hisoblagichni oshiramiz!
            // console.log("count - 3:", count);
        }
    }

    return count; // Natijani qaytaramiz!
}
const result = countVowels("string"); 
console.log("result:", result);

/*
// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

function findLongestWord(name: string): string {
    // Matnni so'zlarga ajratamiz slipt yordamida!
    const words = name.split(" ");

    // Eng uzun so'zlarni saqlash uchun ozgaruvchi hosil qilamiz!
    let longestword = "";

    // Har bir so'zni tekshiramiz!
    for (const word of words) {
        if (word.length > longestword.length) {
         
    // Eng uzun so'zni yangiledi!
            longestword = word;
        }
    }

    // Eng uzun so'zni qaytarsin!
    return longestword;
}

const result = findLongestWord("I came from Uzbekistan!");
console.log("result:", result);


// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan
// array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

function majorityElement(arr: number[]): number {
    // Arraylarni sortlash!
    arr.sort((a, b) => a - b); 
    // Maximal takrorlanishni topish!
    let maxCount = 1; // Eng kop takrorlanish soni!
    let currentCount = 1; // Hozirgi elementning takrorlanish soni!
    let majority = arr[0]; // Eng kop takrorlangan element!

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            // Agar bir xil element bolsa, sanashni davom ettiramiz!
            currentCount++
        }  else {
            // Yangi element paydo bolganda, sanashni yangilaymiz!
            currentCount = 1;
        }
        // Agar yangi maksimal takrorlanish topilsa, uni yangilaymiz!
        if (currentCount > maxCount) {
            maxCount = currentCount;
            majority = arr[i];
        }
    }
    // Natija qaytarish!
    return majority;
}


const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);

console.log("result:", result);



// function majorityElement(arr: number[]): number[] {
//     const dublicates: number[] = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) !== i && !dublicates.includes(arr[i])) {
//             dublicates.push(arr[i]);
//         }
//     }

//     return dublicates;
// }

// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);

// console.log("test", result);

/** Project Standards:
- Login standards:
-  Naming standards: 
   Function, method, variable => Camel    goHOME
   class => Pascal                       MemberService
   folder => Kebab
   css => Snake                          button_stle
- Error handling 
 */

/** Request:
Tradational Api
Rest Api
GraphQl Api
 */


/** Frontend Development:
Tradational FD => BSSR (Admin) => EJS
Modern FD => SPA (Users' Application) => REACT

 */

/** Cookies:
request join
self destroy: cookieslar ozini ozi destroy qiloa oladi
/*

/** Validation:
 * Frontend validation
 * Backend validation
 * Database validation
 */


// H2-TASK: 
// Shunday function tuzing, unga
// string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni 
// Yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(input: string): string {
    return input.replace(/\D/g, ""); // Matndan raqam bo'lmagan belgilarni olib tashlaydi
}
// replace() matndagi korsatilgan belgilarni qidiradi va almashtiradi!
// (/\D/g, "") raqam bolmagan belgilarni anglatadi!
// g esa matndagi barcha mos keluvchi qisimlarni qidiradi!
// "" esa bosh string bilan almashtiradi yani ularni olib tashledi!
const result = getDigits("m14i1t");
console.log("result:", result);


// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni
//  argument sifatida qabul qilib, faqat positive qiymatlarni 
//  olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(numbers: number[]): string {
    // 1-qadam: Musbat sonlarni tanlab olish!
    return numbers.filter(num1 => num1 > 0).join('');
    // 2-qadam filtrlab [1, 2] keyin join('12)

}

const result = getPositive([1, -4, 2]);
console.log("result:", result);
*/
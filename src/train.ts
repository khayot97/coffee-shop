// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan
// 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib,
//  tartib raqam bo'yicha tartiblab qaytarmoqda.

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    let mergedArray = [...arr1, ...arr2]; // Ikkalaarrayni birlashtiradi
    mergedArray.sort((a, b) => a -b); // O'sish tartibdan saralash 
    return mergedArray; // Natijani qaytaradi
}

const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log("result:", result);

/*
// TASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan
function missingNumber(arr: number[]): number {
    // Arrayni tartiblash
    arr.sort((a, b) => a - b);
    // console.log("arr:", arr);
    
    // Tushib qolgan sonni qidirish
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] !== i) {
        // console.log("i:", i);
        return i;  // Tushib qolgan son
      }
    }
    return -1; // Agar hammasi joyida bo'lsa, -1 qaytaradi
  }
const result = missingNumber([3, 0, 1]); 
console.log("result:", result);

// TASK-R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarni yig'indisini hisoblab, number holatida qaytarsin.
// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

function calculate(str: string): number {
    // String ichidagi barcha bosh joylarni olib tashledi!
    const cleanStr = str.replace(/\s+/g, '');

    // String ichidan raqamlar va opertorlarni ajratish!
    const parts = cleanStr.split('+').map(Number);

    // Raqamlarni yig'adi!
    const sum = parts.reduce((total, num) => total + num, 0);

    // Natijani qaytarmoqda!
    return sum 
}

const result = calculate("1 + 3");
console.log("result:", result);

//1.replace(/\s+/g, '') – String ichidagi bo‘sh joylarni olib tashlaydi.
//2.split('+').map(Number) – '+' belgisi bo‘yicha ajratadi va har bir
//  elementni Number ga o‘zgartiradi.
//3.reduce – Ajratilgan raqamlarni yig‘ib, natijani qaytaradi.

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun
// 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

// Generics yordamida hasProperty funksiyasi
function hasProperty<T extends object>(obj: T, propertyName: string): boolean {
    return propertyName in obj;
}

const result = hasProperty({ name: "BMW", model: "M3" }, "model"), // true 
 result1 = hasProperty({ name: "BMW", model: "M3" }, "year"); // false

 console.log("result:", result);
 console.log("result1:", result1);

 // T - Bu generik parametr, ya'ni tur (type) joyini saqlovchi o'zgaruvchi.
 // T extends object faqat obyektlar bilan ishlaydigan kodni cheklaydi, bu xatolarni oldini oladi.
//  Extends object - bu T parametri faqat obeyktlar turida bo'lishi keragligini bildiradi.
// Bu degani T matn, raqam yoki boshqa primitiv turlar emas, faqat obeyktlar bo'lishi kerak.

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: any): any {
    if (typeof obj === 'object' && obj !== null) {
        const result1 = [];
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && value !== null) {
                result1.push([key, objectToArray(value)]);
            } else {
                result1.push([key, value]);
            }
        } 
        return result1;
    }
    return obj;
}

const result = objectToArray( {a: 10, b: 20});
console.log("result:", result);

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona 
// son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

function calculateSumOfNumbers(arr: any[]): number {
    let sum = 0;
    // console.log("sum", sum);
    arr.forEach((num) => {
        // console.log("num:", num);
        // console.log("arr:", arr);
        if (typeof num === 'number') {
            sum += num;
        }
    });
    return sum;
};

const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log("result:", result);


TASK-N
// Shunday function yozing, u string qabul qilsin va string
//  palindrom yani togri oqilganda ham, orqasidan oqilganda
//   ham bir hil oqiladigan soz ekanligini aniqlab boolean 
//   qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;
//   palindromCheck("son") return false;

function palindromCheck(input: string): boolean {
    // Kiritilgan stringni pastki registrga o‘tkazamiz va bo‘sh 
    // joylarni olib tashlaymiz.
    const cleanedString = input.toLowerCase().replace(/\s+/g, "");

    // Stringni teskari o‘giramiz.
    const reversedString = cleanedString.split("").reverse().join("");

    // Teskari stringni asl string bilan solishtiramiz.
    return cleanedString === reversedString;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false


// TASK M:
// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning
//  o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil
//  bo'lgan objectlarni array ichida qaytarsin!
// MASALAN: MASALAN: getSquareNumbers([1, 2, 3])
//  return [{ number: 1, square: 1 }, { number: 2, square: 4 },
//      { number: 3, square: 9 }];
function getSquareNumbers(input: number[]): {number: number; square: number}[] {
    return input.map((i) => ({
        number: i, // 1 numberni o'zi!
        square: i * i, // kvadratini chiqaradi!
    }));
}
const result = getSquareNumbers([1, 2, 3]);
console.log("result:", result);

// Mapga oid misollar:
// function getSquareNumbers(input: number[]) {    
//     return input.map(num => num * 2);
// }
// const result = getSquareNumbers([1, 2, 3]);
// console.log("result:", result);

// TASK L:
// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin
// MASALAN: reverseSentence("we like coding!")
//  return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz,
// so'zlar joyi o'zgarmasdan turgan o'rnida
//  teskarisiga o'girilmoqda
function reverseSentence(inupt: string): string {
   // 1. Stringa so'zlarni ajratish!
   const words: string[] = inupt.split(" ");
   // 2. Har bir so'zni teskari qilish!
   const reverseWords: string[] = words.map((word: string) => {
    return word.split("").reverse().join("");
   });
   // 3. Teskari bo'lgan so'zlarni birlashtiradi!
    return reverseWords.join(" ");
}
const result = reverseSentence("we like coding!");
console.log("result:", result)

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
/*
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

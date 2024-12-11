//  Project Standards:
// - Login standards:
// -  Naming standards: 
//    Function, method, variable => Camel    goHOME
//    class => Pascal                       MemberService
//    folder => Kebab
//    css => Snake                          button_stle
// - Error handling 




/*
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
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // Natija: 15
console.log(add(5, 10));





/*
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
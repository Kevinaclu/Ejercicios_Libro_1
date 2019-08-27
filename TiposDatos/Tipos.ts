/* VOIDS */
// With strictNullChecks set to true
let va: void = undefined; // Ok
let vb: void = null; // Error
let vc: void = 3; // Error
let vd: void = "apple"; // Error

// With strictNullChecks set to false
let vaa: void = undefined; // Ok
let vbb: void = null; // Ok
let vcc: void = 3; // Error
let vdd: void = "apple"; // Error

/* BOOLEANS */
let ba: boolean = true;
let bb: boolean = false;
let bc: boolean = 23; // Error
let bd: boolean = "blue"; // Error

/* NUMERIC */
// With strictNullChecks set to true
let na: number = undefined; // Error
let nb: number = null; // Error
let nc: number = 3;
let nd: number = 0b111001; // Binary
let ne: number = 0o436; // Octal
let nf: number = 0xadf0d; // Hexadecimal
let ng: number = "cat"; // Error
// With strictNullChecks set to false
let naa: number = undefined; // Ok
let nbb: number = null; // Ok
let ncc: number = 3;
let ndd: number = 0b111001; // Binary
let nee: number = 0o436; // Octal
let nff: number = 0xadf0d; // Hexadecimal
let ngg: number = "cat"; // Error

/* STRING */
// With strictNullChecks set to true
let sa: string = undefined; // Error
let sb: string = null; // Error
let sc: string = "";
let sd: string = "y";
let se: string = "building";
let sf: string = 3; // Error
let sg: string = "3";
// With strictNullChecks set to false
let saa: string = undefined; // Ok
let sbb: string = null; // Ok
let scc: string = "";
let sdd: string = "y";
let see: string = "building";
let sff: string = 3; // Error
let sgg: string = "3";

/* COMILLAS LITERALES ES6 */
let e: string = "building";
let f: number = 300;
let sentence: string = `The ${e} in front of my office is ${f} feet tall.`;

/* ARRAYS */
// With strictNullChecks set to false
let aa: number[] = [1, 12, 93, 5];
let ab: string[] = ["a", "apricot", "mango"];
let ac: number[] = [1, "apple", "potato"]; // Error
let ad: Array<number> = [null, undefined, 10, 15];
let ae: Array<string> = ["pie", null, ""];
// With strictNullChecks set to true
let aaa: number[] = [1, 12, 93, 5];
let abb: string[] = ["a", "apricot", "mango"];
let acc: number[] = [1, "apple", "potato"]; // Error
let add: Array<number> = [null, undefined, 10, 15]; // Error
let aee: Array<string> = ["pie", null, ""]; // Error

/* TUPLES */
let ta: [number, string] = [11, "monday"];
let tb: [number, string] = ["monday", 11]; // Error
let tc: [number, string] = ["a", "monkey"]; // Error
let td: [number, string] = [105, "owl", 129, 45, "cat"];
let te: [number, string] = [13, "bat", "spiderman", 2];
te[1] = "elephant";
te[15] = false; // Error

/* ENUMS */
enum Animals { cat, lion, dog, cow, monkey }
let c: Animals = Animals.cat;
console.log(Animals[3]); // cow
console.log(Animals.monkey); // 4

/* ANY */
let ana: any = "apple";
let anb: any = 14;
let anc: any = false;

/* NEVER */
let neva: never; // Ok
let nevb: never = false; // Error
let nevc: never = null; // Error
let nevd: never = "monday"; // Error
function stuck(): never {
    while (true) {
    }
}


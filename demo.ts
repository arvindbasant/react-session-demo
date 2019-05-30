/**
 * Topics:
 * 
 * Why typescript & problems with js
 * 
 * Lang Features
 * 
 * Datatypes
 * Enum
 * Enum + static function merging
 * Type Assertion
 * Type Inference
 * interface
 * union type
 * intersection type
 * partial type
 * optional and readonly
 * duck typing
 * type guards
 * class
 * generic function and class
 * 
 * react app demo to start
 * 
 * comparison between js and ts code 
 * 
 * Task
 */

/**
 * Why Typescript 
  1. Interface oriented development - scalability 
  2. Future Js features 
  3. Enhanced code quality and maintainability 
  4. Types are one of the best forms of documentation you can have.
  5. DI
  6. Improved testing with DI
  7. Easy to implement SOLID design patterns 
  8. Code is more readable 
  9. Fast development with better IntelliSense support 
  10. Refactoring with TypeScript tools is easier and faster.
  11. You can very easily write pure object-oriented code.
 */


/*
 * DataTypes:
 * boolean, 
 * number, 
 * string, 
 * array, 
 * tuple, 
 * enum, 
 * any, 
 * void
 * null
 * undefined
 * never
 * object
 * symbol
*/
let isValid: boolean = true;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = 'blue';

let list: number[] = [1, 2, 3];
let genericList: Array<number> = [1, 2, 3];
let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
interface test {
  a: number;
}
let tuple: [test, string] = [{a: 323}, 'hello'];
// console.log(tuple[0].substr(1)); // Error: Property 'substr' does not exist on type 'number'.ts(2339)
console.log(tuple[1].substr(1)); // OK

enum ColorEnum {
  Red,
  Green,
  Blue
}




// Enum with static function -> enum + namespace merging
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(sun)); // false






// Type Assertion - allow us to override inferred type
interface Foo {
  bar: string;
}
let fooValid: Foo = { bar: 'vdf' };
// let fooInvalid: Foo = {}; // Error: Property 'bar' is missing in type '{}' but required in type 'Foo'.ts(2741)

let foo = {} as Foo;
foo.bar

let foo1: any;
let bar = <string>foo1;


// type inference
let num = 123; // num is a `number`
let msg = "Hello"; // msg is a `string`
// num = msg; // Error: cannot assign `string` to a `number`



// interface, union, intersection, partial, class: types
// optional and readonly property

interface Person {
  firstName: string;
  lastName: string;
}

let person: Person = { firstName: 'arvind', lastName: 'kumar' };

// duck typing
let duckPerson: { firstName: string, lastName: string } = person;


// optional and readonly
interface Person1 {
  readonly id: number;
  title?: string; // optional property
  firstName: string;
  lastName: string;
}

let p1: Person1 = { id: 1, firstName: 'arvind', lastName: 'kumar' };
// p1.id = 12; // Error: Cannot assign to 'id' because it is a read-only property.ts(2540)
p1.title = 'Mr.';


// union type
let title: 'Mr' | 'Mrs';
let stringOrNumber: string | number;

interface TitleUser {
  title?: 'Mr.' | 'Mrs.';
  firstName: string;
  lastName: string;
}

let titleUser: TitleUser = { title: 'Mr.', firstName: 'arvind', lastName: 'kumar' };


// intersection type
interface AdminUser {
  isAdmin: boolean;
}

type User = TitleUser & AdminUser;

let user: User = { firstName: 'arvind', lastName: 'kumar', isAdmin: false }; // bit turse
let adminUser: User = { firstName: 'arvind', lastName: 'kumar', isAdmin: true };


// partial type

type SuperUser = TitleUser & Partial<AdminUser>;
let superUser: SuperUser = { firstName: 'arvind', lastName: 'kumar' }; // cool
let superAdminUser: SuperUser = { firstName: 'arvind', lastName: 'kumar', isAdmin: true };


// type guard -> typeof, instanceof, in

class Test {
  a = 123;
}

function demo(x: number | string | Test | Test1) {
  if (typeof x === 'string') {
    console.log(x.substr(0, 1));
  }
  if (typeof x === 'number') {
    console.log(Math.log10(x));
  }
  if (x instanceof Test) {
    console.log(x.a);
  }
}

interface Test1 {
  b: number;
  msg: string;
}

interface Test2 {
  c: number;
}

const testFunc = (x: Test1 | Test2) => {
  if ('b' in x) {
    console.log(x.b);
  }
  if ('c' in x) {
    console.log(x.c);
    // console.log(x.msg);  // Error roperty 'msg' does not exist on type 'Test2'.
  }
}
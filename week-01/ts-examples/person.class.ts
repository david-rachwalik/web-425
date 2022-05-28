/**
 * Title: person.class.ts
 * Author: David Rachwalik
 * Date: 2022/05/28
 * Description: Person class
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstPerson = new Person("David", "Rachwalik");
console.log(`My name is ${firstPerson.firstName} ${firstPerson.lastName}`);

// task_1/js/main.ts

// ===== 1) Base interfaces from earlier tasks =====
interface Teacher {
  readonly firstName: string;   // set only at initialization
  readonly lastName: string;    // set only at initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;   // optional
  location: string;

  // Allow extra string-keyed properties (e.g., contract: boolean)
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.slice(0, 1)}. ${lastName}`;

// ===== 2) StudentClass interfaces + implementation =====
/**
 * Interface that describes the instance shape of StudentClass
 */
interface StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;   // returns "Currently working"
  displayName(): string;      // returns firstName
}

/**
 * Interface that describes the constructor signature for StudentClass
 */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Class implementing StudentClassInterface
 */
class StudentClass implements StudentClassInterface {
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ===== 3) Quick examples (optional) =====
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(printTeacher('John', 'Doe')); // J. Doe

const StudentMaker: StudentClassConstructor = StudentClass;
const student = new StudentMaker('Jane', 'Smith');
console.log(student.displayName());      // "Jane"
console.log(student.workOnHomework());   // "Currently working"

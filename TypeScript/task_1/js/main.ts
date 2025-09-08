// task_1/js/main.ts

// 1) Teacher interface
interface Teacher {
  readonly firstName: string;          // set only at initialization
  readonly lastName: string;           // set only at initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;          // optional
  location: string;

  // Allow any additional string-keyed props (e.g., contract: boolean)
  [propName: string]: any;
}

// 2) Example usage from the spec
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// task_2/js/main.ts

// --- Interfaces ---
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// --- Classes ---
export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// --- Factory function (Task 5) ---
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// --- Type predicate & executor (Task 6) ---
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
}

// --- String literal type & function (Task 7) ---
export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

// --- (Optional) quick demo ---
/*
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
console.log(teachClass("Math"));                 // Teaching Math
console.log(teachClass("History"));              // Teaching History
*/

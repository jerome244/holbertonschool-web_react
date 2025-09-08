// task_0/js/main.ts

// 1) Interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2) Two students + list
const student1: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 22,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bruno",
  lastName: "Martin",
  age: 24,
  location: "Lyon",
};

const studentsList: Student[] = [student1, student2];

// 3) Vanilla JS render: build a table with First name + Location
function buildStudentsTable(students: Student[]): HTMLTableElement {
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  const headerRow: HTMLTableRowElement = document.createElement("tr");
  const headers: string[] = ["First name", "Location"];

  headers.forEach((text: string): void => {
    const th: HTMLTableCellElement = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  students.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  // optional minimal styling for readability (pure DOM/CSS-in-JS, no libs)
  table.style.borderCollapse = "collapse";
  table.style.fontFamily = "sans-serif";
  Array.from(table.querySelectorAll("th, td")).forEach((cell) => {
    (cell as HTMLTableCellElement).style.border = "1px solid #ccc";
    (cell as HTMLTableCellElement).style.padding = "8px 12px";
  });
  (thead.querySelectorAll("th") as NodeListOf<HTMLTableCellElement>).forEach(
    (th) => {
      th.style.textAlign = "left";
      th.style.background = "#f7f7f7";
    }
  );

  return table;
}

// 4) Mount on DOM ready
document.addEventListener("DOMContentLoaded", (): void => {
  const table: HTMLTableElement = buildStudentsTable(studentsList);
  document.body.appendChild(table);
});

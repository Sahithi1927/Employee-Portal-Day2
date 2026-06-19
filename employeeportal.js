// =====================================
// EMPLOYEE PORTAL
// =====================================

// Employee Details
const employeeName = "Sahithi Cherala";
let employeeId = "EMP101";
let department = "Full Stack Development";
let salary = 47400;
let isPermanent = true;
let experience = 0;

console.log("Employee Details");
console.log("----------------");
console.log(`Name       : ${employeeName}`);
console.log(`ID         : ${employeeId}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ₹${salary}`);
console.log(`Permanent  : ${isPermanent}`);


// =====================================
// Employee Skills
// =====================================

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Git",
    "GitHub"
];

console.log("\nEmployee Skills");
console.log("----------------");
console.log(`First Skill  : ${skills[0]}`);
console.log(`Third Skill  : ${skills[2]}`);
console.log(`Last Skill   : ${skills[skills.length - 1]}`);
console.log(`Total Skills : ${skills.length}`);


// =====================================
// Company Object
// =====================================

const company = {
    companyName: "Stackly IT",
    location: "Hyderabad",
    employees: 100,
    technologies: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("\nCompany Details");
console.log("----------------");
console.log(`Company Name      : ${company.companyName}`);
console.log(`Location          : ${company.location}`);
console.log(`Second Technology : ${company.technologies[1]}`);
console.log(`Total Technologies: ${company.technologies.length}`);


// =====================================
// Salary Calculator
// =====================================

let basicSalary = 47400;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("\nSalary Calculator");
console.log("----------------");
console.log(`Basic Salary : ₹${basicSalary}`);
console.log(`Bonus        : ₹${bonus}`);
console.log(`Total Salary : ₹${totalSalary}`);
console.log(`Tax (10%)    : ₹${tax}`);
console.log(`Final Salary : ₹${finalSalary}`);


// =====================================
// Attendance Checker
// =====================================

let attendance = 92;

let examStatus =
attendance >= 75
? "Eligible for Exam"
: "Not Eligible";

console.log("\nAttendance Status");
console.log("----------------");
console.log(`Attendance : ${attendance}%`);
console.log(`Status     : ${examStatus}`);


// =====================================
// Login Verification
// =====================================

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("\nLogin Successful");
} else {
    console.log("\nInvalid Credentials");
}


// =====================================
// Product Billing
// =====================================

let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log("\nProduct Billing");
console.log("----------------");
console.log(`Product  : ${productName}`);
console.log(`Price    : ₹${productPrice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total    : ₹${totalBill}`);


// =====================================
// Increment & Decrement
// =====================================

let visitors = 100;

console.log("\nIncrement & Decrement");
console.log("----------------");

console.log(`Initial Value : ${visitors}`);

console.log(`Pre Increment  : ${++visitors}`);
// Value becomes 101 before printing

console.log(`Post Increment : ${visitors++}`);
// Prints 101 then becomes 102

console.log(`Current Value  : ${visitors}`);

console.log(`Pre Decrement  : ${--visitors}`);
// Value becomes 101 before printing

console.log(`Post Decrement : ${visitors--}`);
// Prints 101 then becomes 100

console.log(`Final Value    : ${visitors}`);


// =====================================
// Comparison Checker
// =====================================

console.log("\nComparison Checker");
console.log("----------------");

console.log(10 == "10");      // true
console.log(10 === "10");     // false
console.log(20 != "20");      // false
console.log(20 !== "20");     // true
console.log(5 < 10);          // true
console.log(15 >= 20);        // false
console.log(100 <= 100);      // true


// =====================================
// User Interaction
// =====================================

let empName = prompt("Enter Employee Name");
let empAge = prompt("Enter Employee Age");

let joinCompany = confirm("Do you want to join our company?");

if (joinCompany) {
    alert(`Welcome ${empName}`);
} else {
    alert("Thank You");
}


// =====================================
// FINAL CHALLENGE
// =====================================

let loginStatus =
(username === "admin" && password === "12345")
? "Success"
: "Failed";

let attendanceStatus =
attendance >= 75
? "Eligible"
: "Not Eligible";

let finalPortalSalary = salary + bonus;

console.log("\n==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================");

console.log(`Employee Name : ${employeeName}`);
console.log(`Employee ID   : ${employeeId}`);
console.log(`Department    : ${department}`);
console.log(`Experience    : ${experience} Years`);
console.log(`Salary        : ₹${salary}`);
console.log(`Bonus         : ₹${bonus}`);
console.log(`Final Salary  : ₹${finalPortalSalary}`);
console.log(`Skills        : ${skills.join(", ")}`);
console.log(`Attendance    : ${attendance}%`);
console.log(`Exam Status   : ${attendanceStatus}`);
console.log(`Login Status  : ${loginStatus}`);
console.log(`Company       : ${company.companyName}`);
console.log(`Location      : ${company.location}`);
// Demonstrating CRUD, iteration, and searching with Objects

const emptyBlankObject = {};

const studentObject = {
    "123": { name: "Aqil", programme: "Computer Science" },
    "456": { name: "Bridget", programme: "Mathematics" },
  };
  
  console.log("Initial object:", studentObject);
  
  // Add a new student
  studentObject["789"] = { name: "Salaah", programme: "History" };
  console.log("After adding Salaah:", studentObject);
  
  // Update Bridget's programme
  studentObject["456"].programme = "Physics";
  console.log("After updating Bridget's programme:", studentObject);
  
  // Remove Aqil
  delete studentObject["123"];
  console.log("After removing Aqil:", studentObject);
  
  // Object size (number of items stored in object)
  const objectSize = Object.keys(studentObject).length;
  console.log("Object size:", objectSize);
  
  // Iterate through the object
  console.log("Iterating through object:");
  for (const key in studentObject) {
    console.log(`${key}:`, studentObject[key]);
  }
  
  // Search for a student by name
  const searchName = "Bridget";
  let foundStudentObject = null;
  for (const key in studentObject) {
    if (studentObject[key].name === searchName) {
      foundStudentObject = studentObject[key];
      break;
    }
  }
  console.log(`Search for ${searchName}:`, foundStudentObject);
// Demonstrating CRUD, iteration, and searching with Map

const emptyBlankMap = new Map([]) // How to define an empty map

const studentMap = new Map([
  ["123", { name: "Aqil", programme: "Computer Science" }],
  ["456", { name: "Bridget", programme: "Mathematics" }],
]);

console.log("Initial map:", studentMap);

// Add a new student
studentMap.set("789", { name: "Salaah", programme: "History" });
console.log("After adding Salaah:", studentMap);

// Get an array of all student IDs
const studentIds = Array.from(studentMap.keys()); 
console.log("Student IDs:", studentIds);

// Get an array of all student objects
const studentObjects = Array.from(studentMap.values());
console.log("Student objects:", studentObjects);

// Update Bridget's programme
const bridget = studentMap.get("456");
bridget.programme = "Physics";
studentMap.set("456", bridget);
console.log("After updating Bridget's programme:", studentMap);

// Remove Aqil
studentMap.delete("123");
console.log("After removing Aqil:", studentMap);

// Map size
console.log("Map size:", studentMap.size);

// Iterate through the map
console.log("Iterating through map:");
for (const [key, value] of studentMap) {
  console.log(`${key}:`, value);
}

// Search for a student by name
const searchName = "Bridget";
let foundStudentMap = null;
for (const [key, value] of studentMap) {
  if (value.name === searchName) {
    foundStudentMap = value;
    break;
  }
}

// Check if a student exists using has(key)
const searchId = "456";
if (studentMap.has(searchId)) {
  console.log(`Student with ID ${searchId} exists`);
} else {
  console.log(`Student with ID ${searchId} not found`);
}

console.log(`Search for ${searchName}:`, foundStudentMap);
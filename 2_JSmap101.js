// Demonstrating CRUD, iteration, and searching with Map

const studentMap = new Map([
    ["123", { name: "Aqil", programme: "Computer Science" }],
    ["456", { name: "Bridget", programme: "Mathematics" }],
  ]);
  
  console.log("Initial map:", studentMap);
  
  // Add a new student
  studentMap.set("789", { name: "Salaah", programme: "History" });
  console.log("After adding Salaah:", studentMap);
  
  // Update Bridget's programme
  const bob = studentMap.get("456");
  bob.programme = "Physics";
  studentMap.set("456", bob); 
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
  console.log(`Search for ${searchName}:`, foundStudentMap);
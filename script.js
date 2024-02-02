const fs = require('fs');

// Function to calculate the average grade for a student
function calculateAverageGrade(student) {
  const grades = student.marks.map(mark => mark.grade);
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

// Read the CSV file
const csvFilePath = './students.csv'; 
const csvData = fs.readFileSync(csvFilePath, 'utf8');

// Parse the CSV data
const lines = csvData.split('\n');
const header = lines[0].split(',');
const students = [];

// Loop through each line (excluding the header)
for (let i = 1; i < lines.length; i++) {
  const currentLine = lines[i].split(',');
  const student = { name: currentLine[0], marks: [] };

  // Assuming columns after the first one are marks
  for (let j = 1; j < currentLine.length; j++) {
    student.marks.push({ subject: header[j], grade: parseFloat(currentLine[j]) });
  }

  students.push(student);
}

// Calculate and log average grades
students.forEach(student => {
  const averageGrade = calculateAverageGrade(student);
  console.log(`${student.name}'s average grade: ${averageGrade.toFixed(2)}`);
});

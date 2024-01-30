//your JS code here. If required.
// Function to fetch data from a CSV file
async function fetchStudents() {
  try {
    const response = await fetch('students.csv');
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}

// Function to parse CSV content and calculate average grades
function calculateAverageGrades(csvContent) {
  const lines = csvContent.split('\n');
  const students = [];

  for (let i = 1; i < lines.length; i++) {
    const [name, subject1, subject2, subject3] = lines[i].split(',');
    const grades = [parseFloat(subject1), parseFloat(subject2), parseFloat(subject3)];

    const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    students.push({ name, averageGrade });
  }

  return students;
}

// Function to log students and their average grades to the console
function logAverageGrades(students) {
  console.log(students);
}

// Main function to orchestrate the process
async function main() {
  try {
    const csvContent = await fetchStudents();
    const students = calculateAverageGrades(csvContent);
    logAverageGrades(students);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the main function
main();

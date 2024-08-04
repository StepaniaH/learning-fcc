// This code is mainly to calculate the students' grades and give the corresponding evaluation information according to the results.

// This function calculates the average of an array of scores.
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// This function returns the grade corresponding to a given score.
function getGrade(score) {
  if (score === 100) {
    /* The `===` operator is know as the **strict equality operator**, and it checks both the **value** and the **type**. */
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// This function determines whether a score is passing.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// This function generates a message containing the student's grade information.
function studentMsg(totalScores, studentScore) {
  let average = getAverage(totalScores);
  let grade = getGrade(studentScore);
  if (studentScore >= 60) {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". You passed the course." /* Do not forget the space. */
    );
  } else {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". You failed the course."
    );
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

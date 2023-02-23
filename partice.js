let data = {
  Sophia: {
  id: 33,
  study: [
  {
  primary:
  [
  { school_name: "ABC primary school" },
  { location: "Peters burg" }
  ]
  },
  {
  secondary:
  [
  { school_name: "ABC secondary school"
  
  },
  
  { location: "St Lorence" }
  ]
  },
  ]
  }
  }
  const arrowFunction = data.Sophia.study.find(item=>item.secondary)
const result = arrowFunction.secondary[0].school_name;
const result1 = arrowFunction.secondary[1].location;
const finalResult = `school name ${result} and school location ${result1}`
console.log(finalResult)







// qus 2

let data2 =
[
{
"pHeroCourses": {
"course-x": "web development"
}
},
{
"pHeroCourses": {
"course-y": "phitron"
}
},
{
"pHeroCourses": {
"course-z": "acc"
}
},
{
"pHeroCourses": {
"course-xyz": "level-2"
},
"locationField": {
"en-US": {
"lat": 19.28563,
"lon": 72.8691
}
}
}
]


const output = data2[3].pHeroCourses["course-xyz"];
const output2 = data2[3].locationField['en-US'].lon;
console.log(output)
console.log(output2)




// qus 5

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
  writer: true,
  favoriteHobbies: ["travelling", "Coding"],
  books: ["programming er bolod to bos", "programming ercoddogosti"],
  moreDetails: {
  favoriteBasketballTeam: "XYZ",
  isYoungest: true,
  hometown: {
  city: "ABC",
  state: "VW",
  },
  countriesLivedIn: ["Bangladesh", "New York"]
  }
  }
  }

  const resultOutput = instructor["additionalData"].books[1];
  const resultOutput2 = instructor["additionalData"].moreDetails["hometown"].state;
  const resultOutput3 = instructor.additionalData.moreDetails.countriesLivedIn[0];
  console.log(resultOutput3)

  

  // qus 6

  const studentData = [
    {
      class: 10,
      details: [
        {
          studentId: '1',
          gradingDetails: [{ grade: 'A' }]
        },
        {
          studentId: '2',
          gradingDetails: [{ grade: 'B' }]
        }
      ]
    },
    {
      class: 11,
      details: [
        {
          studentId: 3,
          gradingDetails: [{ grade: 'B' }]
        },
        {
          studentId: 4,
          gradingDetails: [{ grade: 'D' }]
        }
      ]
    },
  ];
  
  // To get the grade for class 11 student with student ID 3
  const student3 = studentData.find(({ class: cls }) => cls === 11).details.find(({ studentId }) => studentId === 3);
  const gradeForStudent3 = student3.gradingDetails[0].grade;
  console.log(gradeForStudent3); // Output: "B"
  
  // To get the grade for class 10 student with student ID 1
  const student1 = studentData.find(({ class: cls }) => cls === 10).details.find(({ studentId }) => studentId === '1');
  const gradeForStudent1 = student1.gradingDetails[0].grade;
  console.log(gradeForStudent1); // Output: "A"
  
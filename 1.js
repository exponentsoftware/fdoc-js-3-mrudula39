/* -  A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
 Destruction the following array name to name, skills array to skills, scores array to scores, 
 JavaScript score to jsScore and React score to reactScore variable. */


// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// const [fname, skills, scores] = student
// const [ , , jsScore, reactScore] = scores

// console.log(fname, skills, scores)
// console.log(jsScore, reactScore)



// - Write a function called convertArrayToObject which can convert the array to a structured object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(array){
    objectArr = []
   
    for(let i = 0; i < array.length; i++){  
        let [fname, skills, scores] = array[i]
        let obj = {
            name: fname,
            skills: skills,
            scores: scores
                }
        objectArr.push(obj)
        
    }   

    return objectArr
}

// console.log(convertArrayToObject(students))



/*Copy the student object to newStudent without mutating the original object. In the new object add the following ?

	1. Add Bootstrap with level 8 to the front end skill sets
	2. Add Express with level 9 to the back end skill sets
	3. Add SQL with level 8 to the data base skill sets
	4. Add SQL without level to the data science skill sets */


    const student = {
        name: 'David',
        age: 25,
        skills: {
            frontEnd: [
                { skill: 'HTML', level: 10 },
                { skill: 'CSS', level: 8 },
                { skill: 'JS', level: 8 },
                { skill: 'React', level: 9 }
            ],
            backEnd: [
                { skill: 'Node',level: 7 },
                { skill: 'GraphQL', level: 8 },
            ],
            dataBase:[
                { skill: 'MongoDB', level: 7.5 },
            ],
            dataScience:['Python', 'R', 'D3.js']
        }
    }

    const newStudent = {...student}
 
    
  

    newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
    newStudent.skills.backEnd.push({skill: 'Express', level: 9})
    newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
    newStudent.skills.dataScience.push({skill: 'SQL'})

    // console.log(newStudent)



    // Use the student object to solve the following questions:
    // a. Find the length of student object keys
    // b. Find the length of the student object values
    // c. Find the length of skills object keys
    // d. check if the student object has graphicDesign property
    // e. Iterate the keys of the student object
 


    // a
    const keyLength = Object.keys(student).length
    console.log(keyLength)

    //b
    const valuesLength = Object.values(student).length
    console.log(valuesLength)

    //c
    const skillKeysLength = Object.keys(student.skills).length
    console.log(skillKeysLength)

    //d
    const keys = Object.keys(student)
    for(let i = 0; i < keys.length; i++){
        if(keys != 'graphicDesign'){
            console.log('graphic design property does not exist')
            break
        }
    }

    //e
    const Allkeys = Object.keys(student)
    console.log(Allkeys)
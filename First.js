const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '17/05/2019 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '17/05/2019 10:00 AM',
        isLoggedIn: false
    }
  ];
  const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'abccc',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
  ];
  function generateId(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    console.log("\n Create a function called ***signUp*** which allows user to add to the collection.\n")
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  function signUp(newuser) {
    let count = 0;
    for (let user of users) {
        if (user.email == newuser.email) {
            count++
            return "User already exists"
        }
    }
    if (count == 0) {
        users.push(newuser)
        return "The user has been added"
    }
  }
  const newuser = {
    _id: generateId(6),
    username: 'Mrudula',
    email: 'mrudula@mrudula.com',
    password: '123222',
    createdAt: '21/09/2021 16:00',
    isLoggedIn: false
  }
  console.log(signUp(newuser))
  console.log(users)
  function signIn(user_input) {
    for (let user of users) {
        if ((user.email == user_input.email) && (user.password == user_input.password)) {
            user.isLoggedIn = true
            return "Welcome to the application " + user.username
        }
    }
  }
  const user_input = {
    email: 'martha@martha.com',
    password: '123222'
  }
  console.log(signIn(user_input));
  console.log(users)
  console.log("\nCreate a function called ***rateProduct*** which rates the product\n")
  function rateProduct(rating) {
    for (let product of products) {
        if (product._id == rating.pid) {
            const obj = {}
            obj["userId"] = rating.userId;
            obj["rate"] = rating.rate;
            product.ratings.push(obj)
            return product
        }
    }
  }
  rating = {
    pid: 'abccc',
    userId: 'eefamr',
    rate: 6
  }
  console.log(rateProduct(rating))
  rateProduct(rating)
  function averageRating(pid) {
    let total_rating = 0
    let total_users = 0
    console.log("\n Create a function called ***averageRating*** which calculate the average\n")
    for (let product of products) {
        if (product._id == pid) {
            total_users = product.ratings.length;
            for (let pr of product.ratings) {
                total_rating = total_rating + pr.rate
            }
        }
    }
    let avg = total_rating / total_users;
    return avg
  }
  console.log(averageRating("abccc"))
 

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
  console.log(convertArrayToObject(students))
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
      console.log(newStudent)
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
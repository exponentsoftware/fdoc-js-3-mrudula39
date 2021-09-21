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
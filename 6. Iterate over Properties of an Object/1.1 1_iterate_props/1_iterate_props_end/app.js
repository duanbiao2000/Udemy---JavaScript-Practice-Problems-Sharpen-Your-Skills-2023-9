
// Create a function that will iterate over every property in an array. It should include children objects. For this version display the property and value to the console.

const isObject = function(val) {
  return (typeof val === 'object' && val !== null);
};

const objProps = function(obj) {
  for (let val in obj) {
    if (isObject(obj[val])) {
      objProps(obj[val]);
    } else {
      console.log(val, obj[val]);
    }
  }
};



var user = {
  firstName: "John",
  lastName: "Doe",
  email: "sdoe@allthingsjavascript.com",
  type: {
      type1: "admin",
      type2: "user"
  },
  active: 'true',
  address: {
      street: {
          street1: "100 N. Main",
          street2: "Apt. 5"
      },
      city: "Lehi",
      zip: '10001'
  },
  age: '31'
};

var quiz = {
  id: 'quiz1',
  subjPerc: {
    subj1: 20,
    subj2: 0,
    subj3: 50,
    subj4: 10,
    subj5: 20
  },
  scores: ['100', 50, 60, '70', 25, 45, '90', 85]
};

objProps(user);
// "use strict"
// console.log(this);

function x() {
  console.log(this);
}
// x();

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
// obj.x();

const user = {
  name: "Hari",
  printName: function () {
    console.log(`The name of the user is ${this.name}`);
  },
};
// user.printName();

const user2 = {
  name: "HariKrishna",
};

// user.printName.call(user2);

const obj1 = {
  a: 15,
  x: () => {
    console.log(this);
  },
};
obj1.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
// obj2.x();

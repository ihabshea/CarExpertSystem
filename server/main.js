import { Meteor } from 'meteor/meteor';
import RuleReactor from 'rule-reactor';
import Fiber from 'fibers'

class Person{

}
class Car{

}
Meteor.users.allow({
  update: function (userId, doc, fields, modifier) {
    return true;
  }
});
cars = []
var car;
var reactor = new RuleReactor({Person:Person,Car:Car},true);
// function sleep(ms) {
//     var fiber = Fiber.current;
//     setTimeout(function() {
//         fiber.run();
//     }, ms);
//     Fiber.yield();
// }
// reactor.createRule("Rule-1", 0, {p: Person},
//   function(p){
//       return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//       carQuery = Cars.find({automotive_class: "Compact"});
//       cars = [];
//       carQuery.forEach(function(car){
//         // console.log(car);
//         cars.push(car);
//       });
//     }).run();
//     }
// );
// //
// // reactor.createRule("Rule-1", 0, {p: Person},
// //
// // 	function(p){
// //
// // return p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "<60"
// //   },
// //   function(p){
// //     Fiber(function() {
// //
// //
// //    // carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 3000}, automatic: false},);
// //    carQuery = Cars.find();
// //
// //     cars = [];
// //
// //  carQuery.forEach(function(car){
// //
// //    cars.push(car);
// //
// //      });
// //
// //  }).run();
// //
// //     }
// //
// //
// //
// // );
// reactor.createRule("Rule-2", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-3", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-4", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-5", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000 ,$lt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-6", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-7", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "60-120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "full-sized", cc: {$gt: 4000}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-8", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-9", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-10", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == ">120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-11", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == ">120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-12", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == ">120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-13", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-14", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-15", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "<60"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-16", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "60-120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001 ,$lt:3999}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-17", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-18", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-19", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-20", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == ">120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
//
//
//
// );
// reactor.createRule("Rule-21", 0, {p: Person},
//
// 	function(p){
//
// return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
//   },
//   function(p){
//     Fiber(function() {
//
//
//    carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);
//
//     cars = [];
//
//  carQuery.forEach(function(car){
//
// cars.push(car);
//
//      });
//
//  }).run();
//
//     }
// );
reactor.createRule("Rule-1", 0, {p: Person},
/*
0: married.
1: age.
2: salary
3: budget
4: mileage
*/
	function(p){
    return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
  Fiber(function() {
   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 3000}, automatic: false});
    cars = [];
    carQuery.forEach(function(car){
      cars.push(car);
     });
   }).run();

    }

);
reactor.createRule("Rule-2", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-3", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-4", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-5", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000 ,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-6", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-7", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "full-sized", cc: {$gt: 4000}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-8", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-9", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-10", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-11", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-12", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-13", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-14", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-15", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-16", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001 ,$lt:3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-17", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-18", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-19", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-20", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-21", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-22", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 ,$lt:1999}, price: {$lt: 30000}, automatic: false},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-23", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 ,$lt :1999 }, price: {$gt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-24", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 ,$lt : 3999}, price: {$gt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });
 }).run();

    }



);
reactor.createRule("Rule-25", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 999 ,$lt :1999}, price: {$gt: 30000 ,$lt:50000}, automatic: true});

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-26", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 , $lt :1999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-27", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-28", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 , $lt :1999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-29", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-30", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 40000}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-31", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mini", cc: {$gt: 999 , $lt :1999}, price: {$lt: 30000 }, automatic: false},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-32", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mini", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-33", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-34", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 40000}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-35", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-36", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-37", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == ">60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999 , $lt :1999}, price: {$gt: 30000,$lt:50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-38", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 30000,$lt:50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-39", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "30-50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-40", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 999 , $lt :1999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-41", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-42", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }
);
reactor.createRule("Rule-43", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 3000}, automatic: false},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-44", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-45", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-46", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-47", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000 ,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-48", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-49", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "full-sized", cc: {$gt: 4000}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-50", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-51", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-52", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-53", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-54", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-55", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-56", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-57", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-58", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001 ,$lt:3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-59", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-60", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-61", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Mid-size", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-62", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-63", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == false && p.answers[1] == ">45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-64", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 3000}, automatic: false},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-65", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-66", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-67", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-68", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000 ,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-69", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 20001, $lt: 3999}, price: {$gt:30000,$lt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-70", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "full-sized", cc: {$gt: 4000}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-71", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-72", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-73", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 999, $lt: 2001}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-74", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mini-car", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-75", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-76", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-77", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999, $lt: 2001}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-78", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-79", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mini-car", cc: {$gt: 2001 ,$lt:3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-80", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-81", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-82", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Mid-size", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-83", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 2001, $lt: 3999}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-84", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "18-30"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sport", car_size: "Full-sized", cc: {$gt: 4000}, price: {$gt: 50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-85", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 ,$lt:1999}, price: {$lt: 30000}, automatic: false},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-86", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 ,$lt :1999 }, price: {$gt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-87", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 ,$lt : 3999}, price: {$gt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-88", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Hatchback", car_size: "Mid-size", cc: {$gt: 999 , $lt :1999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-89", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 , $lt :1999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-90", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "30-50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-91", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mid-size", cc: {$gt: 999 , $lt :1999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-92", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-93", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 40000}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-94", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mini", cc: {$gt: 999 , $lt :1999}, price: {$lt: 30000 }, automatic: false},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-95", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Mini", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-96", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == "60-120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-97", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 40000}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-98", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-99", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "<30" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$lt: 30000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-100", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == "30-50" && p.answers[4] == ">60"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 999 , $lt :1999}, price: {$gt: 30000,$lt:50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-101", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == "30-50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 30000,$lt:50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-102", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == "30-50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "Sedan", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 30000 ,$lt:50000}, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-103", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "<1" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 999 , $lt :1999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-104", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == "1-2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 1999 , $lt :3999}, price: {$gt: 50000 }, automatic: true},);

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });

 }).run();

    }



);
reactor.createRule("Rule-105", 0, {p: Person},

	function(p){
return p.answers.length == 5 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120"
  },
  function(p){
    Fiber(function() {


   carQuery = Cars.find({automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 3999}, price: {$gt: 50000 }, automatic: true});

    cars = [];

 carQuery.forEach(function(car){

cars.push(car);

     });
     console.log("3429:",cars);
 }).run();

});
reactor.createRule("CRule-1", Infinity, {p: Person},
  function(p){
      return p.answers.length == 12 && p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60" && p.answers[5] == "0"
      && p.answers[6] == false
       && p.answers[7] == false && p.answers[8] == false  && p.answers[9] == false  && p.answers[10] == false
       && p.answers[11] == "MENA"
  },
  function(p){
    Fiber(function() {
      console.log("608", p.answers);
      query = {automotive_class: "Compact"};
      var n = Cars.find(query).count();
      // var r = Math.floor(Math.random() * n);
      carQuery = Cars.findOne(query, {skip: 0, limit:1});
      car = carQuery;
    }).run();
    }
);
reactor.createRule("CRule-105", Infinity, {p: Person},

	function(p){
return p.answers.length == 12 && p.answers[0] == true && p.answers[1] == "30-45"  && p.answers[2] == ">2" && p.answers[3] == ">50" && p.answers[4] == ">120" && p.answers[5] == "0"
 && p.answers[6] == false
 && p.answers[7] == false && p.answers[8] == false  && p.answers[9] == false  && p.answers[10] == false
 && p.answers[11] == "MENA"
  },
  function(p){
    Fiber(function() {

    query = {automotive_class: "RV", car_size: "Full-sized", cc: {$gt: 3999}, price: {$gt: 50000 }, automatic: true};
    var n = Cars.find(query).count();
    // var r = Math.floor(Math.random() * n);
    carQuery = Cars.findOne(query, {skip: 0, limit:1});
    car = carQuery;


 }).run();

});
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.methods({
  'first-try': async function(answers){
    reactor.trace(Infinity);
//    console.log(answers);
    P = new Person();
    P.answers = answers;
    await reactor.assert(P);
    await reactor.run(Infinity);
    //  await console.log("74:",cars);
      return cars;
  },
  'is-admin': async function(userID){
    Fiber(function(){
      adminQuery = Meteor.users.find({_id: userID,  "profile.admin": true});
      console.log(adminQuery.count());
      if(adminQuery.count() > 0){
        return true;
      }
      return false;
    }).run();
  },
  'final-dec': async function(answers, userId){
    reactor.trace(Infinity);
    console.log(answers);
    P = new Person();

    P.answers = answers;
    await reactor.assert(P);
    await reactor.run(Infinity);
      console.log("649:",car);
      ID =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        if(car){
          console.log("2357");
          Sessions.insert({userid: userId, sessionID: ID,
            married: answers[0],
            ageRange: answers[1],
            salary: answers[2],
            budget: answers[3],
            mileage: answers[4],
            children: answers[5],
            leather: answers[6],
            disabled: answers[7],
            suburbs: answers[8],
            across: answers[9],
            camping: answers[10],
            continent: answers[11],
            carMake: car.make,
            carPrice: car.price,
            carAC: car.automotive_class,
            carSize: car.size,
            carAutomation: car.automatic,
            carPicture: car.picture,
            carCC: car.cc,
            date : Date()
          });
        }else{
          console.log("2378");
          Sessions.insert({'userid': userId,
            'sessionID': ID,
            'married': answers[0],
            'ageRange': answers[1],
            'salary': answers[2],
            'budget': answers[3],
            'mileage': answers[4],
            'children': answers[5],
            'leather': answers[6],
            'disabled': answers[7],
            'suburbs': answers[8],
            'across': answers[9],
            'camping': answers[10],
            'continent': answers[11],
            'car': null,
            'date' : Date()
          }, function(error){
            if(error){
              console.log("2395:", error);
            }
          });
        }
        return car;
  },
});

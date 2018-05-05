import { Meteor } from 'meteor/meteor';
import RuleReactor from 'rule-reactor';
import Fiber from 'fibers'
class Person{

}
class Car{

}
cars = []
var reactor = new RuleReactor({Person:Person,Car:Car},true);
function sleep(ms) {
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, ms);
    Fiber.yield();
}
reactor.createRule("Rule-1", 0, {p: Person},
  function(p){
      return p.answers[0] == false && p.answers[1] == "18-30"  && p.answers[2] == "1-2" && p.answers[3] == "<30" && p.answers[4] == "<60"
  },
  function(p){
    Fiber(function() {
      carQuery = Cars.find({automotive_class: "Compact"});
      cars = [];
      carQuery.forEach(function(car){
        // console.log(car);
        cars.push(car);
      });
    }).run();
    }
);

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.methods({
  'first-try': async function(answers){
    reactor.trace(3);
    console.log(answers);
    P = new Person();
    P.answers = answers;
    await reactor.assert(P);

    await reactor.run(Infinity);
      console.log("74:",cars);
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
    });
  }
});

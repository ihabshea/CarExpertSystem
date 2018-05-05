import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

answers = []
answeredCount = 0;
var answeredDep = new Tracker.Dependency();
carsArray = []
var carsArrayDep = new Tracker.Dependency();
Template.home.rendered = function(){
  $(document).ready(function(){
   $('#menu').tapTarget('open');
 });
}
Template.login.events({
  'click #lgnBtn'(event, instance){
    username =  $("#usernameField").val();
    password =  $("#passwordField").val();
    Meteor.loginWithPassword({username: username}, password, function(error){
      if(error){
        $("#incorrectInfo").css("display","block");
      }else{
        Router.go("/");
      }
    });
  }
});
Template.resetpassword.events({
    'click #rstBtn': function(event){
      Meteor.call('resetPasssword', {email: $("#emailField").val()}, (err, res) => {
        //todo
      });
    }
})
Template.home.helpers({
  'sessionCount': function(){
    count = Sessions.find({'userID': Meteor.userId()}).count();
  },
  'progress': function(){
      answeredDep.depend();
      return ((answeredCount/12)* 100);
  },
  'cars': function(){
    carsArrayDep.depend();
    return carsArray;
  }
})
Template.home.events({
  'click #yesMarried': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push(true);
      $("#q1").fadeOut("fast");
      $("#q2").fadeIn("slow");
  },
  'click #noMarried': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push(false);
      $("#q1").fadeOut("fast");
      $("#q2").fadeIn("slow");
  },
  'click #a1830': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("18-30");
      $("#q2").fadeOut("fast");
      $("#q3").fadeIn("slow");
  },
  'click #a3045': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("30-45");
      $("#q2").fadeOut("fast");
      $("#q3").fadeIn("slow");
  },
  'click #ao45': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("45-");
      $("#q2").fadeOut("fast");
      $("#q3").fadeIn("slow");
  },
  'click #sl1': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("<1");
      $("#q3").fadeOut("fast");
      $("#q4").fadeIn("slow");
  },
  'click #s12': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("1-2");
      $("#q3").fadeOut("fast");
      $("#q4").fadeIn("slow");
  },
  'click #sm2': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push(">2");
      $("#q3").fadeOut("fast");
      $("#q4").fadeIn("slow");
  },
  'click #b30': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("<30");
      $("#q4").fadeOut("fast");
      $("#q5").fadeIn("slow");
  },
  'click #b3050': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("30-50");
      $("#q4").fadeOut("fast");
      $("#q5").fadeIn("slow");
  },
  'click #b50': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push(">50");
      $("#q4").fadeOut("fast");
      $("#q5").fadeIn("slow");
  },
  'click #l60': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("<60");
      $("#q5").fadeOut("fast");
      Meteor.call("first-try", answers, function(err, res){
        carsArray = res;
        carsArrayDep.changed();
      });
      $("#suggested-cars").fadeIn("slow");
  },
  'click #mb60120': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("60-120");
      $("#q5").fadeOut("fast");
      Meteor.call("first-try", answers, function(err, res){
        carsArray = res;
        carsArrayDep.changed();
      });
      $("#suggested-cars").fadeIn("slow");
  },
  'click #m120': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push(">120");
      $("#q5").fadeOut("fast");
      Meteor.call("first-try", answers, function(err, res){
        carsArray = res;
        carsArrayDep.changed();
      });
        $("#suggested-cars").fadeIn("slow");
  },
  'click #proceed': function(event){
      $("#suggested-cars").fadeOut("fast");
      $("#q6").fadeIn("slow");
  },
  'click #ch0': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("0");
      $("#q6").fadeOut("fast");
      $("#q7").fadeIn("slow");
  },
  'click #ch1': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("1");
      $("#q6").fadeOut("fast");
      $("#q7").fadeIn("slow");
  },
  'click #ch2': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("2");
      $("#q6").fadeOut("fast");
      $("#q7").fadeIn("slow");
  },
  'click #chm2': function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push(">2");
      $("#q6").fadeOut("fast");
      $("#q7").fadeIn("slow");
  },
  'click #lthno': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(false);
    $("#q7").fadeOut();
    $("#q8").fadeIn();
  },
  'click #lthyes': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(true);
    $("#q7").fadeOut();
    $("#q8").fadeIn();
  },
  'click #disno': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(false);
    $("#q8").fadeOut();
    $("#q9").fadeIn();
  },
  'click #disyes': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(true);
    $("#q8").fadeOut();
    $("#q9").fadeIn();
  },
  'click #subno': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(false);
    $("#q9").fadeOut();
    $("#q10").fadeIn();
  },
  'click #subyes': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(true);
    $("#q9").fadeOut();
    $("#q10").fadeIn();
  },
  'click #acrossno': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(false);
    $("#q10").fadeOut();
    $("#q11").fadeIn();
  },
  'click #acrossyes': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(true);
    $("#q10").fadeOut();
    $("#q11").fadeIn();
  },
  'click #campno': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(false);
    $("#q11").fadeOut();
    $("#q12").fadeIn();
  },
  'click #campyes': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push(true);
    $("#q11").fadeOut();
    $("#q12").fadeIn();
  },
  'click #MENA': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("MENA");
    $("#q12").fadeOut();
    //Logic
  },
  'click #asia': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("asia");
    $("#q10").fadeOut();
    //Logic
  },
  'click #europe': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("europe");
    $("#q11").fadeOut();
    //Logic
  },
  'click #namerica': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("namerica");
    $("#q11").fadeOut();
    //Logic
  },
  'click #samerica': function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("samerica");
    $("#q11").fadeOut();
    //Logic
  }
});
Template.header.events({
  'click #lgtBtn': function(event){
    Meteor.logout();
  }
});
Template.register.events({
//   'click #rgstBtn': function (e) {
//   e.preventDefault();
//   console.log("You pressed the button");
// }
  'click #rgstBtn': function(event){
    email =  $("#emailField").val();
    username =  $("#usernameField").val();
    password =  $("#passwordField").val();
    console.log("test"); //Testing
    Accounts.createUser({username:username, email:email,  password:password, profile: {admin: true}}, function(err, succ){
      if(err) {
        console.log(err);
      }
      else{
              Router.go('/login');
            }
    });
  }
})
Template.admin.helpers({
  'adminloggedin': function(){
    if(Meteor.userId()){
      adminQuery = Meteor.users.find({_id: Meteor.userId(),  "profile.admin": true});
      console.log(adminQuery.count());
      if(adminQuery.count() > 0){
        return true;
      }
      return false;
      // return Meteor.call("is-admin", Meteor.userId());
    }
  }
});

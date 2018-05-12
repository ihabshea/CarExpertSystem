import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { callWithPromise } from '/imports/client/callWithPromise';
import './main.html';

answers = []
answeredCount = 0;
var answeredDep = new Tracker.Dependency();
carsArray = []
var carsArrayDep = new Tracker.Dependency();
var carDep = new Tracker.Dependency();
var userDep = new Tracker.Dependency();
Template.home.rendered = function(){
    $(document).ready(function(){
      $('.tap-target').tapTarget("open");
    });
}
Template.settings.rendered = function(){
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}
Template.settings.helpers({
  'user': function(){
    userDep.depend();
    return Meteor.users.findOne({_id: Meteor.userId()});
  }
});
Template.settings.events({
  'click #updateI': function(){
    first_name = $("first_name").val();
    last_name = $("last_name").val();
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": first_name}});
    userDep.changed();
    }
});
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
    count = Sessions.find({'userid': Meteor.userId()}).count();
    if(count >0) return true;
    return false;
  },
  'progress': function(){
      answeredDep.depend();
      return ((answeredCount/12)* 100);
  },
  'cars': function(){
    carsArrayDep.depend();
    return carsArray;
  },
  'car': function(){
    carDep.depend();
    return carArray;
  }
})
Template.history.helpers({
  'session': function(){
    return Sessions.find({userid: Meteor.userId()});
  }
});
Template.home.events({
  'click #closeSuggestion1': function(event){
    $('.tap-target').tapTarget("close");
  },
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
  'click #l60': async function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("<60");
      $("#q5").fadeOut("fast");
      $("#loading1").css("display","block");
      await Meteor.callPromise("first-try", answers).then(function(res){
        carsArray = res;
        carsArrayDep.changed();
        if(res){
          $("#loading1").css("display","none");
        }
      });
      $("#suggested-cars").fadeIn("slow");
  },
  'click #mb60120': async function(event){
      answeredCount+=1;
      answeredDep.changed();
      answers.push("60-120");
      $("#q5").fadeOut("fast");
      $("#loading1").css("display","block");
      await Meteor.callPromise("first-try", answers).then(function(res){
        carsArray = res;
        carsArrayDep.changed();
        if(res){
          $("#loading1").css("display","none");
        }
      });
      $("#suggested-cars").fadeIn("slow");
  },
  'click #m120': async function(event){
      answeredCount+=1;
      answeredDep.changed();
      $("#loading1").css("display","block");
      answers.push(">120");
      $("#q5").fadeOut("fast");
      await Meteor.callPromise("first-try", answers).then(function(res){
        carsArray = res;
        carsArrayDep.changed();
        if(res){
          $("#loading1").css("display","none");
        }
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
  'click #MENA': async function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("MENA");
    $("#q12").fadeOut();
    // $("#q5").fadeOut("fast");
    await Meteor.callPromise("final-dec", answers, Meteor.userId()).then(function(res){
      // console.log('275');
      carArray = res;
      carDep.changed();
    });
    $("#suggested-car").fadeIn("slow");
  },
  'click #asia': async function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("asia");
    $("#q12").fadeOut();
    //Logic
    await Meteor.callPromise("final-dec", answers, Meteor.userId()).then(function(res){
      // console.log('275');
      carArray = res;
      carDep.changed();
    });
    $("#suggested-car").fadeIn("slow");
  },
  'click #europe': async function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("europe");
    $("#q12").fadeOut();
    //Logic
    await Meteor.callPromise("final-dec", answers, Meteor.userId()).then(function(res){
      // console.log('275');
      carArray = res;
      carDep.changed();
    });
    $("#suggested-car").fadeIn("slow");
  },
  'click #namerica': async function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("namerica");
    $("#q12").fadeOut();
    await Meteor.callPromise("final-dec", answers, Meteor.userId()).then(function(res){
      // console.log('275');
      carArray = res;
      carDep.changed();
    });
        $("#suggested-car").fadeIn("slow");
  },
  'click #samerica': async function(event){
    answeredCount+=1;
    answeredDep.changed();
    answers.push("samerica");
    $("#q12").fadeOut();
    //Logic
    await Meteor.callPromise("final-dec", answers, Meteor.userId()).then(function(res){
      // console.log('275');
      carArray = res;
      carDep.changed();
    });
    $("#suggested-car").fadeIn("slow");
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

Router.route('/', function () {
  this.render('home', {
    data: function () {  }
  });
});
Router.route('/login', function(){
  this.render('login',{
    data: function(){

    }
  })
});

Router.route('/register', function(){
  this.render('register',{
    data: function(){

    }
  })
});

Router.route('/reset-password', function(){
  this.render('resetpassword',{
    data: function(){

    }
  })
});
Router.route('/settings', function(){
  this.render('settings', {
    data: function(){

    }
  })
});
Router.route('/admin', function(){
  this.render('admin',   {
    data: function(){
      
    }
  })
})

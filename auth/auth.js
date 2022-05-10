const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//passport-jwtの引数optsを設定
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.MY_SECRET_KEY;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

//passportのストラテジーを設定
module.exports = () => {

// A named strategy is used since two local strategy are used :
// one for the registration and the other to sign-in
passport.use('Signup', new LocalStrategy({
  // Overriding defaults expected parameters,
  // which are 'username' and 'password'
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the callback    .
},
function(req, email, password, next) {
  // Check in database if user is already registered
  findUserByEmail(email, function(user) {
      // If email already exists, abort registration process and
      // pass 'false' to the callback
      if (user) return next(null, false);
      // Else, we create the user
      else {
          // Password must be hashed !
          let newUser = createUser(email, password);

          newUser.save(function() {
              // Pass the user to the callback
              return next(null, newUser);
          });
      }
  });
}));

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'ユーザーIDが正しくありません。' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'パスワードが正しくありません。' });
        }
        return done(null, user);
      });
    }
  ));
  
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
       }
       if (!user) {
            return done(null, false, { message: 'ユーザーIDが正しくありません。' });
       }
		  	if (!user.validPassword(password)) {
	          return done(null, false, { message: 'パスワードが正しくありません。' });
       } 
        return done(null, false);
    })
  }))

}
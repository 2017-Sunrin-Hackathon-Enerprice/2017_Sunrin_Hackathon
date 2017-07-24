module.exports = facebook;

function facebook(app, db, passport, FacebookStrategy) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done)=>{
        done(null, user);
    });

    passport.deserializeUser((obj, done)=>{
        done(null, obj);
    });

    passport.use(new FacebookStrategy({
        clientID : "1913357585601159",
        clientSecret : "ebd8a8a965ede0dad6ada831c29572c1",
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'verified'],
    }, (accessToken, refreshToken, profile, done)=>{
        console.log('==================== FACEBOOK ====================')
        console.log('======== PROFILE ========')
        console.log(profile)
        done(null, profile)
    }))

    app.get('/auth/facebook/token', passport.authenticate('facebook'), (req, res)=>{
        console.log(req.user);
    });

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            {
                successRedirect: '/login_success',
                failureRedirect: '/'
            }));

}
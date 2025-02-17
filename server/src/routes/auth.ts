import express from 'express';
import passport from 'passport';
import { GoogleStrategy } from 'passport-google-oauth20';

const router = express.Router();

// Configure Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Here you would typically find or create a user in your database
    return done(null, profile);
}));

// Serialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Auth routes
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

export default router;
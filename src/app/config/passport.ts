import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../modules/user/user.model";

module.exports = function (passport: any) {
    passport.use(
        new LocalStrategy(
            { usernameField: "email", passwordField: "password" },
            async (email: string, password: string, done: any) => {
                console.log(email, password);
                try {
                    const user = await User.findOne({ email }).select("+password");

                    if (!user) {
                        return done(null, false, { message: "Invalid crediantial!" });
                    }

                    const isMatch = await user.isPasswordMatched(password, user.password);
                    if (!isMatch) {
                        return done(null, false, { message: "Invalid crediantial!" });
                    }

                    return done(null, user);
                } catch (err) {
                    return done(err);
                }
            }
        )
    );


    passport.serializeUser((user: any, done: any) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id: any, done: any) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};

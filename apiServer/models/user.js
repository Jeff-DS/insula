import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

// This "pre hook" lets us arrange for a function to be called
// before a new document is saved to the db
userSchema.pre("save", async function(next){
    try {
        if (!this.isModified("password")){
            return next();
        }
        let hashedPassword =  await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch(err){
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword, next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        console.log(".comparePasswrod: isMatch = ", isMatch);
        return isMatch;
    } catch(err){
        console.log("error in .comparePassword");
        return next(err);
    }
}

const User = mongoose.model("User", userSchema);

export default User;

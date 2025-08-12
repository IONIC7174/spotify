const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const cors=require("cors");

const User = require("./models/user");
const authRoute = require("./routes/auth");
const songRoute = require("./routes/song");
const playlistRoute=require("./routes/playlist");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize passport
app.use(passport.initialize());

// Connect to MongoDB
mongoose.connect(
  `mongodb+srv://kshitijaya783:u6dQgcKWFArQuOhd@cluster0.9w1utph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  {}
)
.then(() => {
  console.log(" Connected to MongoDB");
})
.catch((err) => {
  console.error(" MongoDB connection error:", err);
});

// Passport JWT strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "your_super_secure_jwt_secret" , // fallback if env not set
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const foundUser = await User.findOne({ _id: jwt_payload.identifier });
      if (foundUser) {
        return done(null, foundUser);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// Routes
app.get("/", (req, res) => {
  res.send(" Server is running");
});

app.use("/auth", authRoute);
app.use("/song", songRoute);
app.use("/playlist",playlistRoute);

// Start server
app.listen(8000, () => {
  console.log(" Server running on port 8000");
});

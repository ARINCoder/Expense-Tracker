const express = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

// const login = async (req, res) => {
//   console.log('body ', req.body)
//   try {
//     const { username, email, password } = req.body;

//     // Validate username presence
//     if (!username && !email) {
//       return res.status(400).json({ message: 'Username or Email is required' });
//     }

//     // Find user by username (case-insensitive)
//     const userExists = await prisma.Users.findFirst({
//       where: {
//         OR: [
//           { username },
//           { email },
//         ],
//       },
//     });
//     console.log("User Exists", userExists);

//     if (!userExists) {
//       // return res.status(401).json({ message: 'User Not Found' });
//       // Validate password using bcrypt
//       const isPasswordMatch = await bcrypt.compare(password, userExists.password);

//       if (!isPasswordMatch) {
//         return res.status(401).json({ message: 'Incorrect Password' });
//       }
//       const token = jwt.sign({ userId: userExists.id }, process.env.SECRET_KEY, {
//         expiresIn: '1h'
//       });
//       //Storing the Token.
//       res.cookie("access_token", token, { httpOnly: true });
//       //
//       req.session.user = userExists;
//       //
//       res.status(200).send(userExists)
//       // Successful login
//       res.status(200).json({
//         message: 'Login successful',
//         user: { username: userExists.username },
//       });


//     } else {
//       return res.status(401).json({ message: 'User Not Found' });
//     }


//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }


const login = async (req, res) => {
  console.log('body ', req.body);
  try {
    const { username, email, password } = req.body;

    // Validate username or email presence
    if (!username && !email) {
      return res.status(400).json({ message: 'Username or Email is required' });
    }

    // Find user by username (case-insensitive)
    const userExists = await prisma.Users.findFirst({
      where: {
        OR: [
          { username },
          { email },
        ],
      },
    });

    console.log("User Exists", userExists);

    if (!userExists) {
      return res.status(401).json({ message: 'Invalid credentials' }); // More generic message
    }

    // Validate password using bcrypt
    const isPasswordMatch = await bcrypt.compare(password, userExists.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate and sign token
    const token = jwt.sign({ userId: userExists.id }, process.env.SECRET_KEY ?? "secret-key", {
      expiresIn: '1h',
    });
    console.log({token})

    // Store the token in a secure cookie with httpOnly flag
    res.cookie("access_token", token, { httpOnly: true });

    // Send a success response with limited user data
    res.status(200).json({
      message: 'Login successful',
      user: { username: userExists.username },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('access_token');
    res.status(200).send('LoggedOut');

  } catch (error) {
    res.status(400).send(error.message)

  }
}

module.exports = { login, logout }

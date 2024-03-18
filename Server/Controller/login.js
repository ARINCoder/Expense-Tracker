const express = require('express');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate username presence
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    // Find user by username (case-insensitive)
    const userExists = await prisma.Users.findUnique({
      where: {
        username:  req.body.username,
        },
    });

    if (!userExists) {
      return res.status(401).json({ message: 'Incorrect Username, check your Username and Try again' });
    }

    // Validate password using bcrypt
    const isPasswordMatch = await bcrypt.compare(password, userExists.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Incorrect Password, check your Password and Try again' }); 
    }

    // Successful login
    res.status(200).json({
      message: 'Login successful',
      user: { username: userExists.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' }); 
  }
};

module.exports = login;

const express = require('express')
const { PrismaClient } = require('@prisma/client')
const {v4 : uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
///
const prisma = new PrismaClient()
//
const register = async (req, res) => {
    console.log(req.body);
    try {
      //check if user already exists
      const ifExists = await prisma.Users.findUnique({
        where: {
          email: req.body.email,
          //  username: req.body.username
        },
      });
      if (!ifExists) {
        // const id = uuidv4()
        const {username, email, password, firstname, lastname } = req.body;
        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = await prisma.Users.create({
          data: {
            username: username,
            email: email,
            password: hash,
            firstname: firstname,
            lastname: lastname,
          },
        });
        res.status(201).send(newUser);
      } else {
        res.status(400).send("User already exists");
      }
    } catch (error) {
      console.error(error)
      res.status(500).send(error.message);
    }
  };

module.exports = register

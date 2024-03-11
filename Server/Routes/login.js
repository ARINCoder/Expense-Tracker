const Router = require('express')
const {checkSchema, matchedData, validationResult} = require('express-validator')

const loginSchema = require('../Model/loginSchema')
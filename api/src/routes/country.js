const { Router } = require('express');
const { Country, Vacation } = require('../db.js')
const axios = require('axios')
const { Op } = require('sequelize');
const router = Router();
const {
  APIKEY
} = process.env;

router.get('/', function (req, res, next) {
  try {
    countryAPI = axios.get('https://restcountries.com/v3.1/all')
  } catch (error) { next(error) }
  // let countryDb = Country.findAll({
  //   include: DietType,
  // })
  res.send([...countryAPI])
})
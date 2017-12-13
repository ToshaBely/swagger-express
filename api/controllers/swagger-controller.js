'use strict';

var util = require('util');
var controller = require('./mongo-controller');

module.exports = {
	getAllProducts,
	addProduct,
	getProductById,
	deleteProductById,
	getProductReviewsById,
	getAllUsers,
	deleteUserById,
	getAllCities,
	addCity,
	updateOrCreateCity,
	deleteCityById
}

function getAllProducts(req, res) {
  controller.getAllProducts()
        .then(products => res.json(products))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function addProduct(req, res) {
	var bodyProduct = req.swagger.params.body.value;

  	controller.addProduct(req.body)
        .then(product => res.json(product))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function getProductById(req, res) {
	var productId = req.swagger.params.productId.value;

	controller.getSingleProduct(productId)
        .then(product => res.json(product))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function deleteProductById(req, res) {
	var productId = req.swagger.params.productId.value;

	controller.deleteProduct(productId)
        .then(data => res.json({success: true}))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function getProductReviewsById(req, res) {
	var productId = req.swagger.params.productId.value;

	controller.getAllProductReviews(productId)
        .then(reviews => res.json(reviews))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function getAllUsers(req, res) {
	controller.getAllUsers()
        .then(users => res.json(users))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function deleteUserById(req, res) {
	var userId = req.swagger.params.userId.value;

	controller.deleteUser(userId)
        .then(data => res.json({success: true}))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function getAllCities(req, res) {
	controller.getAllCities()
        .then(cities => res.json(cities))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function addCity(req, res) {
	var bodyCity = req.swagger.params.body.value;

	controller.addCity(bodyCity)
        .then(city => res.json(city))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function updateOrCreateCity(req, res) {
	var cityId = req.swagger.params.cityId.value;
	var bodyCity = req.swagger.params.body.value;

	controller.updateOrCreateCity(cityId, bodyCity)
        .then(city => res.json({success: true}))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}

function deleteCityById(req, res) {
	var cityId = req.swagger.params.cityId.value;

	controller.deleteCity(cityId)
        .then(data => res.json({success: true}))
        .catch(err => res.status(500).end(JSON.stringify(err)));
}


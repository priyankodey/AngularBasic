/// <reference path="angular.js" />
var myApp = angular
	.module("myModule",[])
    .controller("myController", function ($scope){

	$scope.message = "My First AngularJs Application"

	var companyInfo = {
		companyName: "ABCD",
		companyRegNo: "54218",
		companyType: "Private",
		doi: "01-01-2000"
	};
	$scope.companyDetails = companyInfo;

	var employees = [
		{firstName : "Priyanko", lastName : "Dey", gender : "Male", salary : 50000},
		{firstName : "Puja", lastName : "Dutta", gender : "Female", salary : 40000},
		{firstName : "Tuta", lastName : "Dutta", gender : "Female", salary : 80000},
		{firstName : "Susmita", lastName : "Dey", gender : "Female", salary : 50000},
		{firstName : "Prithwiraj", lastName : "Datta", gender : "Male", salary : 60000}
	];
	$scope.employees = employees;

	var countries = [
		{
			name: "India",
			cities: [
				{name: "Kolkata"},
				{name: "Delhi"},
				{name: "Bangalore"},
			],
			flag: "Images/Flag_of_India.png"
		},
		{
			name: "UK",
			cities: [
				{name: "London"},
				{name: "Manchester"},
				{name: "Birmingham"},
			],
			flag: "Images/Flag_of_UK.png"
		},
		{
			name: "USA",
			cities: [
				{name: "Los Angeles"},
				{name: "Chicago"},
				{name: "Houston"},
			]
		}
	];

	$scope.countries = countries;

});

 const _ = require('lodash');
 const request = require('request');
 const Promise = require('bluebird');
 
 Promise.promisifyAll(request);
 
 function sayHello() {
   console.log('Hello, World');
 }
 
 let addSomeMinutes = function(atime, minutes) {
   let newMinutes = atime.getMinutes() + minutes;
   atime.setMinutes(newMinutes);
   return atime;
   
 };
 
 _.times(5, sayHello);
 let timenow = new Date();
 console.log(timenow);
 console.log(addSomeMinutes(timenow, 70));
 
 
 
 let apromise = Promise.resolve(10);
 apromise.then((mynum) => console.log(mynum));
 
 let mypromise = request.getAsync('https://jsonplaceholder.typicode.com/posts')
 .then(response => {
   // console.log(response);
 });
 
 request.getAsync('https://jsonplaceholder.typicode.com/posts')
 .then(response => {
   let mydata = JSON.parse(response.body);
   let posterids = _.map(mydata, function(post) {
     return post.userId;
   });
   
   
   
   let reduced = _.reduce(posterids, function(result, value, key) {
     if(result[value]) {
       result[value] = result[value] + 1;
     } else {
       result[value] = 1;
     }
     return result;
   }, {});
   console.log(reduced);
 });


let myClass = class {
  
  constructor(sometext) {
    this.blah = sometext;
  };
  
  
  printStuff() {
    console.log(this.blah);
  }
};


let blar = new myClass('yo');


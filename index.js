
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

let testArr= [1, 2, 3, 4]

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr, alert) {
      
      for (let i = 0; i < testArr.length; i++ , alert){

      }
      return testArr
      //jsut iterates over and returns original array
    },

    map: function() {
      fi.map(testArr, function(num){
        return num * 3

      })
      return testArr.length
      //returns a new collection without changing the original. num*3 is the callback function
    },

    reduce: function() {
      //returns single value 
      // [1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
      //   return accumulator + currentValue
      // })
      //acc is the initialValue, -return is 10?

    },

    functions: function() {
      // return names of all function in the fi variable
    },

    find: function() {
      //depending on what the callback function wants, return what it wants
    },

    size: function() {
      //returns 4 for each element in the testArr
      //iterate over and count each element
    },

    first: function() {
        //grabs first element in array. [0]
    },

    last: function() {
      // grabs last element in array.. .length-1 
    },

    compact: function() {
      // find elements whose return value is deeply equal to false
    },

    sortBy: function() {
      // went over in POD group
    },
    
    flatten: function() {
// shallow true can change the original copy of value/variable, deep copy does not 
    },

    uniq: function() {
// .uniq.. or going over each element and only show the the elements that are the same value
    },

    keys: function() {
// just return names of attributes  in a hash

// fi.keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"] 
    },

    values: function() {
      //return the input only 
    },

    filter: function() {
      //return all function names
    },

  }
})()

fi.libraryMethod()

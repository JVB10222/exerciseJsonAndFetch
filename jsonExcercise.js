// 1. Which of the following three code snippets is correct JSON syntax? Why are the other two options incorrect?

//CORRECT OPTION:
// {
//     "type": "dog",
//     "name": "Bernie",
//     "age": 3
//  }
//INCORRECT OPTIONS:

// {
//     type: "dog",
//     name: "Bernie",      THIS ONE IS INCORRECT BECAUSE IT DOES NOT HAVE THE KEYS INSIDE 
//     age: 3                  OF DOUBLE QUOTES FOR JSON SYNTAX
//  }


// {
//     "type": 'dog',
//     "name": 'Bernie',    THIS ONE IS INCORRECT BECAUSE IT SINGLE QUOTES INSTEAD OF DOUBLE QUOTES
//     "age": 3                 WHICH IS NECESSARY FOR IT TO BE CORRECT SYNTAX FOR JSON.
//  }


// 1. Which of the following three code snippets is correct JSON? Why are the other two options incorrect?

//CORRECT OPTION:
// {
//     "animals": [
//        {
//              "type": "dog",
//              "name": "Bernie",       
//              "age": 3
//        },
//        {
//              "type": "cat",
//              "name": "Draco",
//              "age": 2
//        }
//     ]
//  }

//INCORRECT OPTIONS: BOTH OF THESE OPTIONS SHOW BRACKETS INSIDE OF THE CURLY BRACES TO SHOW AN ARRAY BUT WE NEED AN ARRAY A VALUE PAIRED WITH A KEY. IN BOTH EXAMPLES WE ARE MISSING A KEY TO PAIR WITH THE ARRAYS AS SUCH
//     {
//     "KEY":[
//              {},
//              {}
//           ]
//     }

// {
//     [
//        {
//              "type": "dog",
//              "name": "Bernie",
//              "age": 3
//        },
//        {
//              "type": "cat",
//              "name": "Draco",
//              "age": 2
//        }
//     ]
//  }

// [
//     {
//           "type": "dog",
//           "name": "Bernie",
//           "age": 3
//     },
//     {
//           "type": "cat",
//           "name": "Draco",
//           "age": 2
//     }
//  ]
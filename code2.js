function ProcessList(inputList) {
    // Check if input list length is a multiple of 10
    if (inputList.length % 10 !== 0) {
      throw new Error("List length is not a multiple of 10");
    }
  
    // Filter out items at positions that are a multiple of 2 or 3
    const newList = inputList.filter((item, index) => {
      // Adjust index to be 1-based for this calculation
      const position = index + 1;
      return position % 2 !== 0 && position % 3 !== 0;
    });
  
    return newList;
  }
  
  // Testing the function
  function TestProcessList() {
    const TestCases = [
      {
        input: Array.from({length: 10}, (_, i) => i + 1), // all positive numbers
        expected: [1, 5, 7], 
      },
      {
        input: Array.from({length: 20}, (_, i) => i + 1), // bigger list
        expected: [1, 5, 7, 11, 13, 17, 19], 
      },
      {
        input: Array.from({length: 30}, (_, i) => -(i + 1)), // all negative numbers
  expected: [-1, -5, -7, -11, -13, -17, -19, -23, -25, -29],
      },
      {
        input: Array.from({length: 10}, () => 5), // test with repeating numbers
        expected: [5, 5, 5], 
      },
      {
        input: [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000], // test with large numbers
        expected: [100000, 500000, 700000], 
      },
      {
        input: [], // Edge case: empty list (invalid for our requirements)
        expectedError: true,
      },
      {
        input: Array.from({length: 25}, (_, i) => i + 1), // not a multiple of 10
        expectedError: true,
      },
      {
        input: Array.from({length: 10}, (_, i) => i % 2 === 0 ? -(i + 1) : i + 1), // alternate positive and negative numbers
  expected: [-1, -5, -7], 
      },
    ];
  
    TestCases.forEach((testCase, index) => {
      try {
        const result = ProcessList(testCase.input); // calling the function to get the new list(without the positions of multiples 2 and 3 )
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Test Case #${index + 1}: ${passed ? "Passed" : "Failed"}`);
        if (!passed) {
          console.log(`Expected: ${JSON.stringify(testCase.expected)}, Received: ${JSON.stringify(result)}`);
        }
      } catch (error) {
        if (testCase.expectedError) {
          console.log(`Test Case #${index + 1}: Passed (Expected error)`);
        } else {
          console.log(`Test Case #${index + 1}: Failed with error - ${error.message}`);
        }
      }
    });
  }
  
  // call the function to run the tests
  const prompt = require("prompt-sync")();
  console.log("press 1: if you would like to give a custom test case")
  console.log("press 2: if you would like to run all the exsiting test cases");
  const input = prompt("Enter your choice: ");  
  if (input == 1) {
    let len = parseInt(prompt("Enter the length of the array:"), 10);
    if (isNaN(len) || len <= 0) console.error("Please enter a positive integer.");
    else {
        const InputString = prompt("Enter the elements of the array separated by commas: ");
        const InputArray = InputString.split(",").map(function(item) {
            const parsedItem = parseInt(item, 10);
            if (isNaN(parsedItem)) throw new Error(" all elements must be integers.");
            return parsedItem;
        });
        if (InputArray.length !== len)console.error(`length of the array should be match your input: ${len}.`);
            else {
            try {
                const result = ProcessList(InputArray);
                console.log(`Your new list is: ${result}`);
            } catch (error) {
                console.error(error.message);
            }
        }
    }
}
else if (input == 2){
  TestProcessList();
}
else console.log("wrong input");
  
  
function processList(inputList) {
    // Check if input list length is a multiple of 10
    if (inputList.length % 10 !== 0) {
      throw new Error("List length is not a multiple of 10");
    }
  
    // Filter out items at positions that are a multiple of 2 or 3
    const filteredList = inputList.filter((item, index) => {
      // Adjust index to be 1-based for this calculation
      const position = index + 1;
      return position % 2 !== 0 && position % 3 !== 0;
    });
  
    return filteredList;
  }
  
  // Testing the function
  function testProcessList() {
    const testCases = [
      {
        input: Array.from({length: 10}, (_, i) => i + 1),
        expected: [1, 5, 7], // Positions multiple of 2 or 3 are removed
      },
      {
        input: Array.from({length: 20}, (_, i) => i + 1),
        expected: [1, 5, 7, 11, 13, 17, 19], // Ditto, with 20 items
      },
      {
        input: [], // Edge case: empty list (invalid for our requirements)
        expectedError: true,
      },
      {
        input: Array.from({length: 25}, (_, i) => i + 1), // Not a multiple of 10
        expectedError: true,
      },
    ];
  
    testCases.forEach((testCase, index) => {
      try {
        const result = processList(testCase.input);
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
  
  // Run the tests
  testProcessList();
  
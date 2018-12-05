// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------

function findLargestNumber (numArr) {
	let bigNum = numArr[0]
	for (let index = 0; index < numArr.length; index++) {
		if (bigNum < numArr[index]){
			bigNum = numArr[index]
		}
	}
	return bigNum
}

// console.assert(findLargestNumber(numbers) === 101)
// to check work

// ---------------------------
// 2. Find longest string
// ---------------------------

function findLongestString (strArr) {
	let bigWord = strArr[0]
	for (let index = 0; index < strArr.length; index++) {
		if (bigWord.length < strArr[index].length) {
			bigWord = strArr[index]
		}
	}

	return bigWord
}
// console.assert(findLongestString(strings) === 'collection')
// to check work

// ---------------------------
// 3. Find even numbers
// ---------------------------

function findEven (numArr) {
	let evenArray = []
	let arrayPlace = 0
	for (let index = 0; index < numArr.length; index++) {
		if (numArr[index] % 2 == 0) {
			evenArray[arrayPlace] = numArr[index]
			arrayPlace++
		}
	}
	// console.log(evenArray)
	// to check work
}

// findEven(numbers)

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function findOdd (numArr) {
	let oddArray = []
	let arrayPlace = 0
	for (let index = 0; index < numArr.length; index++) {
		if (numArr[index] % 2 > 0) {
			oddArray[arrayPlace] = numArr[index]
			arrayPlace++
		}
	}
	// console.log(oddArray)
	// to check work
}

// findOdd(numbers)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function isFinder (strArr) {
	let containsIs = []
	let arrayPlace = 0
	for (let index = 0; index < strArr.length; index++) {
		for (let ind2 = 0; ind2 < strArr[index].length; ind2++) {
			if (strArr[index].charAt(ind2).toUpperCase() === "I") {
				if (strArr[index].charAt(ind2 + 1).toUpperCase() === "S") {
					containsIs[arrayPlace] = strArr[index]
				}
			}
		}
	}
	// console.log(containsIs)
}

// isFinder(strings)
// currently finds exactly 'is' so the name is accurate?

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function joinArrays (numArr, strArr) {
	let jointArr = []
	for (let numInd = 0; numInd < numArr.length; numInd++) {
		jointArr.push(numArr[numInd])
	}
	for (let strInd = 0; strInd < strArr.length; strInd++) {
		jointArr.push(strArr[strInd])
	}
	// console.log(jointArr)
}

// joinArrays(numbers,strings)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

function sortInstructors (instr) {
	let teachers = []
	let holdingPen = ''
	for (let index = 0; index < instr.length; index++) {
		if (instr[index].teaches === "JavaScript") {
			teachers.push(instr[index])
		}
	}
	for (let alphaInd = 0; alphaInd < teachers.length; alphaInd++){
		let secondAlpha = alphaInd + 1
		if (secondAlpha < teachers.length) {
			if (teachers[alphaInd].firstname.charAt(0).toUpperCase() > teachers[secondAlpha].firstname.charAt(0).toUpperCase()) { //assuming B > A, etc
				holdingPen = teachers[alphaInd]
				teachers[alphaInd] = teachers[secondAlpha]
				teachers[secondAlpha] = holdingPen
			} else if (teachers[alphaInd].firstname.charAt(0).toUpperCase() === teachers[secondAlpha].firstname.charAt(0).toUpperCase()) {
				if (teachers[alphaInd].firstname.charAt(1).toUpperCase() > teachers[secondAlpha].firstname.charAt(1).toUpperCase()) {
					holdingPen = teachers[alphaInd]
					teachers[alphaInd] = teachers[secondAlpha]
					teachers[secondAlpha] = holdingPen
				}
			}
		}
	}
	console.log(teachers)
}

sortInstructors(instructors)
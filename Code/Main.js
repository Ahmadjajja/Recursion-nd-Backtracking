// Recursion
// There are few things that we to need understand
// function
// call by references

let nums = [1, 2, 3];    // -> [1, 3, 6]

function sum(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (index != 0) {
            arr[index] = arr[index] + arr[index - 1];
        }
    }
}

sum(nums);

console.log(nums)


// Memory management -> two things that are as follows
// let nums = [1, 2, 3];  
// let nums2 = nums;
// stack memory & heap memory



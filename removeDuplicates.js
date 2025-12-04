var removeDuplicates = function(nums) { // [1,1,2]
    const temp = []; // [1,]
    for(let i = 0; i < nums.length; i++){
        let isDuplicate = false;
        for(let j = 0; j < temp.length; j++){
            if(nums[i] === temp[j]) {
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            temp.push(nums[i])
        }
    }
    return temp
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
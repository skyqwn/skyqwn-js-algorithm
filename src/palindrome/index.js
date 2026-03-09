// #1. 추가 문자열 활용

function checkPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed === str
}

console.log(checkPalindrome("abba"));
console.log(checkPalindrome("david"));
console.log(checkPalindrome("eye"));
console.log("======================");

// #2. Two Pointer 투포인터 활용

function checkPalindrome2(str) {
    const len = str.length;
    const middle = Math.floor(len/2)
    for(let i = 0; i < middle; i++) {
        if(str.charAt(i) !== str.charAt(len - 1 - i)) {
            return false
        }
    }
    return true
}

console.log(checkPalindrome2("abba"))
console.log(checkPalindrome2("david"))
console.log(checkPalindrome2("eye"))
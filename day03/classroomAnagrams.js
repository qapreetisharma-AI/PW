function checkAnagram(str1, str2) {
    // Convert to lowercase and remove spaces
    str1 = str1.toLowerCase().replaceAll(" ", "");
    str2 = str2.toLowerCase().replaceAll(" ", "");

    // Sort characters and compare
    let sortStr1 = str1.split("").sort().join("");
    let sortStr2 = str2.split("").sort().join("");

    return sortStr1 === sortStr2;
}

console.log(checkAnagram("listen", "silent"))
console.log(checkAnagram("Listen", "Silent"))
console.log(checkAnagram("conversation", "voices rant on"))
console.log(checkAnagram("hello", "world"))
function isPermutation(s1:string, s2:string):boolean {
    if(s1.length != s1.length) return false

    s1 = s1.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
    s2 = s2.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
    
    for(let i:number = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            return false
        }
    }
    
    return true
}

console.log(isPermutation("abc", "bca"))
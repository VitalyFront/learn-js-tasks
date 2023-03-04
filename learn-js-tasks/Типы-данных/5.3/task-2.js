function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if (lowerStr.includes('viagra') || lowerStr.includes('XXX')) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

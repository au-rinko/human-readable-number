module.exports = function toReadable (number) {
    const str = number.toString();
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbers1 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';

    if(number < 100){
        if(number <= 19){
            return result + numbers[number];
        }else{
            if(str[1] === '0'){
                return result + numbers1[+str[0]];
            }else{
                return result + `${numbers1[+str[0]]} ${numbers[+str[1]]}`;
            }
        }
    }else{
        if(str.substring(1) === '00'){
            return `${numbers[+str[0]]} hundred`;
        }else{
            result += `${numbers[+str[0]]} hundred `; 
            return result + toReadable(+str.substring(1));
        }
    }
}

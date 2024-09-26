class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length){
        this.innerLength += Number(length)
    }

    decrease(length){
        this.innerLength -= Number(length)
        if(this.innerLength < 0){
            this.innerLength = 0
        }
    }

    toString(){
        if(this.innerLength >= this.innerString.length){
            const result = this.innerString
            return result
        }else{
            const result = this.innerString.substring(0, this.innerLength)
            return result + '...'
        }
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

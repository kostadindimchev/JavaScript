function solution() {
    let result = '';
    
    let obj = {
      append: (text) => result += text,
      removeStart: (num) => result = result.slice(num),
      removeEnd: (num) => result = result.slice(0, -num),
      print: () => console.log(result)
    };

    return obj;
  }

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// ...rest - a function parameter that makes whatever is passed inside 
//           its obj(args) is compiled and turned into an array

compile('crinkles', 'egg pie', 'brownies'); // elements to be compiled

function compile(...rest){ // rest function
    console.log(...rest);
    let compiledElements = [...rest];
    return compiledElements;
}
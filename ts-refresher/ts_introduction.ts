const num1Element = document.getElementById('num1') as HTMLInputElement; // Type casting 
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; //! tells the Ts ignore the null case
//TS knows when we select a button, what we'll get back os a HTML button element 
//hover over and we can see the infer type 

const numResults:number[] = [] ;
const textResults:string[] = [];

type NumOrString = number | string;



function add(num1:NumOrString,num2:NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + '' + num2;
    }
    return +num1 + +num2;
   
}

function printResult(resultObj: {val:number; timestamp:Date}){
    console.log(resultObj.val);
}


//if the button is null 
if(buttonElement){
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;   //value always return a string 
        const num2 = num2Element.value;
        const result = add(+num1,+num2); //casting coversion 
        numResults.push(result as number);
        const stringResult = add(num1,num2);
        textResults.push(stringResult as string);
        console.log(result);
        console.log(stringResult);
        printResult({val: result as number, timestamp: new Date()});
        console.log(numResults, textResults);
        
     });
     
};

const myPromise = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve('It workde'); //generic type for the outer promise
    }, 1000);
});

myPromise.then((result)=> {
    console.log(result.split('w'));
});


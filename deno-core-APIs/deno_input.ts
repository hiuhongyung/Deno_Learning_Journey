const buffer = new Uint8Array(1024);

//waiting for the user input is the async function since we don't know when the user will input the message 

console.log("Please enter your message");
await Deno.stdin.read(buffer); //read the user input and pass to somewhere
//Deno support tip level await 
//In deno we don't need to wrap into some async function 
const decoder = new TextDecoder();
const input = decoder.decode(buffer);
console.log('User entered' + input);

//reach out the low level api 

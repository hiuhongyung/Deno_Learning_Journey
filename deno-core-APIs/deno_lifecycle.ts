
window.onload= (event) => {
  console.log("Onloaded envent");
  console.log(event);
};
//listener can have multiple function and listen to multiple events
window.addEventListener('load', (event) => {
    console.log('onload event - via listener');
    console.log(event);
});


console.log('MAIN SCRIPT'); 

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

window.onunload= (event) => {
    console.log("Onunloaded envent");
    console.log(event);
  };
  
  window.addEventListener('unload', (event) => {
      console.log('onunload event - via listener');
      console.log(event);
  });
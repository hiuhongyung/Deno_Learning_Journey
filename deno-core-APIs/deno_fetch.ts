console.log("Please enter a valid url");
//waiting for the user's input 
const buffer = new Uint8Array(1024);

await Deno.stdin.read(buffer);
const decoder = new TextDecoder();
const url = decoder.decode(buffer);



const response = await fetch(url);
const content = await response.text();
const encoder = new TextEncoder();
const data = encoder.encode(content);


await Deno.writeFile('website-content.html', data);
console.log('Done');
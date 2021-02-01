//setTimeout core api in Deno 
setTimeout(() => {
  const encoder = new TextEncoder();
  const fileContent = encoder.encode(
    "THis is the first meassfae we save to a file"
  );
  Deno.writeFile("test.txt", fileContent).then(() => {
    console.log("Done");
  });
}, 1000);
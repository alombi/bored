
async function findActivity(resultP){
   var resultP = document.getElementById('activity')
   resultP.innerHTML = "Finding something for you..."
   let request = await fetch('https://www.boredapi.com/api/activity/?participants=1')
   let response = await request.json()
   console.log('Done', response)
   displayResult(response)
}


function displayResult(response, resultP){
   var resultDiv = document.getElementById('result');
   resultDiv.style.display = 'block';
   var resultP = document.getElementById('activity');
   setTimeout(()=>{resultP.innerHTML = `You can try this: ${response.activity}`}, 1000)
}

document.querySelector('.convert').addEventListener('click' , function(){
    const num =Number(document.querySelector('.the-number').value)
    document.querySelector('.result').value= tafqit(num)
})

function copyResult() {
    
    var copyText = document.querySelector('.result')
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
 
  }
     // --------Deposit-----
     document.getElementById("depo-btn").addEventListener("click",function(){
        const depoInpt=document.querySelector("#depo-inpt");
        const depoValueString=depoInpt.value;
        const inptValue=parseFloat(depoValueString);

        const depoInptString=document.getElementById("deposit").innerText;
        const depoValue=parseFloat(depoInptString);
        document.getElementById("deposit").innerText=depoValue+inptValue;

        const blValueString=document.getElementById("balance").innerText;
        const blValue=parseFloat(blValueString);
        document.getElementById("balance").innerText=blValue+inptValue;

        depoInpt.value='';
    })
    // ---------Withdraw---------
    document.getElementById("wid-btn").addEventListener("click",function(){
        const widInpt=document.querySelector("#wid-inpt");
        const widValue=widInpt.value;
        document.getElementById("withdraw").innerText=widValue;
        widInpt.value='';   
    
     
    
    })
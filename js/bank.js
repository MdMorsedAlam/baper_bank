     // --------Deposit-----
     document.getElementById("depo-btn").addEventListener("click",function(){
        const depoInpt=document.querySelector("#depo-inpt");
        const depoValueString=depoInpt.value;
        const depoInptValue=parseFloat(depoValueString);

        const depoInptString=document.getElementById("deposit").innerText;
        const depoValue=parseFloat(depoInptString);
        document.getElementById("deposit").innerText=depoValue+depoInptValue;

        const blValueString=document.getElementById("balance").innerText;
        const blValue=parseFloat(blValueString);
        document.getElementById("balance").innerText=blValue+depoInptValue;

        depoInpt.value='';
    })
    // ---------Withdraw---------
    document.getElementById("wid-btn").addEventListener("click",function(){
        const widInpt=document.querySelector("#wid-inpt");
        const widInptValueString=widInpt.value;
        const widInptValue=parseFloat(widInptValueString);

        const widValueString=document.getElementById("withdraw").innerText;
        const widValue=parseFloat(widValueString);
        document.getElementById("withdraw").innerText=widValue+widInptValue;

        const blString=document.getElementById("balance").innerText;
        const blVal=parseFloat(blString);
        document.getElementById("balance").innerText=blVal-widInptValue;

        widInpt.value='';   
    
     
    
    })
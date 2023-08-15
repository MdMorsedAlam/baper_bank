     // --------Deposit-----
     document.getElementById("depo-btn").addEventListener("click",function(){
        const depoInpt=document.querySelector("#depo-inpt");
        const depoValueString=depoInpt.value;
        const depoInptValue=parseFloat(depoValueString);
        depoInpt.value='';
        if(isNaN(depoInptValue)){
            alert("Please Provide Number");
            return;
        }
        const depoInptString=document.getElementById("deposit").innerText;
        const depoValue=parseFloat(depoInptString);
        document.getElementById("deposit").innerText=depoValue+depoInptValue;
        const blValueString=document.getElementById("balance").innerText;
        const blValue=parseFloat(blValueString);
        document.getElementById("balance").innerText=blValue+depoInptValue; 
    })
    // ---------Withdraw---------
    document.getElementById("wid-btn").addEventListener("click",function(){
        const widInpt=document.querySelector("#wid-inpt");
        const widInptValueString=widInpt.value;
        const widInptValue=parseFloat(widInptValueString);
        widInpt.value=''; 
        if(isNaN(widInptValue)){
            alert("Please Provide Number");
            return;
        }
        const widValueString=document.getElementById("withdraw").innerText;
        const widValue=parseFloat(widValueString);
        const blString=document.getElementById("balance").innerText;
        const blVal=parseFloat(blString);
        
        if(widInptValue>blVal){
            alert("Your Main Balance Is Low");
            return;
        }
        document.getElementById("withdraw").innerText=widValue+widInptValue;
        document.getElementById("balance").innerText=blVal-widInptValue;
    })
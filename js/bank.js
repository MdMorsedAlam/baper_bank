     // --------Deposit-----
     document.getElementById("depo-btn").addEventListener("click",function(){
        const depoInpt=document.querySelector("#depo-inpt").value;
        document.getElementById("deposit").innerText=depoInpt;
    
        let totalBl=document.querySelector("#balance").value;
        console.log(totalBl+20);
    
    })
    // ---------Withdraw---------
    document.getElementById("wid-btn").addEventListener("click",function(){
        const depoInpt=document.querySelector("#wid-inpt").value;
        document.getElementById("withdraw").innerText=depoInpt;
    
        let totalBl=document.querySelector("#balance").value;
        console.log(totalBl+20);
    
    })
const tipcalcy=()=>{
    let amount=document.getElementById('bill_amount').value;
    let tipperc=document.getElementById('tip_perc').value;
    let tps=document.getElementById('tip_total');
    let tap=document.getElementById('total_billed');

    let tp=Number(amount*(tipperc/100));
    let ta=Number(amount)+tp;
    // console.log(a+ta);
    tps.value=tp;
    tap.value=ta;
    

    
}
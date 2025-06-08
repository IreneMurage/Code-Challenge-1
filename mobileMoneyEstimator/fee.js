function estimateTransactionFee(){
    prompt = "Unatuma Ngapi? (KES):";

    const amountToSend = Number;
    const transactionFee = 1.5% * amountToSend;


    if (transactionFee < 10){
        console.log(10);
    }else if(transactionFee > 70){
        console.log(70);
    }

    const amountToDebit = transactionFee + amountToSend;
    const output = ("Sending KES" + amountToSend + " " + "Calculated Transaction Fee: KES" + " " +  transactionFee + "Total amount to be debited: KES" + " " + amountToDebit);
}
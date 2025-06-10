// function estimateTransactionFee(){
//     prompt = "Unatuma Ngapi? (KES):";

//     const amountToSend = Number;
//     const transactionFee = 0.05 * amountToSend;


//     if (transactionFee < 10){
//         console.log(10);
//     }else if(transactionFee > 70){
//         console.log(70);
//     }

//     const amountToDebit = transactionFee + amountToSend;
//     const output = ("Sending KES" + amountToSend + " " + "Calculated Transaction Fee: KES" + " " +  transactionFee + "Total amount to be debited: KES" + " " + amountToDebit);
// }
// console.log(output)



function estimateTransactionFee(){
    const amountStr= window.prompt("How much are you sending")
    //parseInt()
    const amount = parseInt(amountStr);

    if (!amount) {
        console.log("Failed to convert");
        console.log( amountStr);
        return;
    }

    let transactionCost = (amount  * 1.5) / 100;
    //console.log(transactionCost)
    if (transactionCost <= 10) {
        alert (`sending KES $ {amount}
            Transaction cost KES 10
            Total Amount = ${amount + 10}
            `);
            return;
    }

     if (transactionCost >= 70) {
        alert (`sending KES ${amount}
            Transaction cost KES 10
            Total Amount = ${amount + 70}
            `)
    }
    alert (`sending KES ${amount}
        Transaction cost KES 70
        Total Amount = ${parseInt(amount + transactionCost)}
        `);
}
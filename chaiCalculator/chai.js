function calculateChaiIngredients(){
    const numberOfCupsStr = window.prompt =("Karibu! How many cups of Chai Bora would you like to make?");
    const numberOfCups = parseInt (numberOfCupsStr);

    const waterPerCup = 200;
    const milkPerCup = 50;
    const teaLeavesPerCup = 1;
    const sugarPerCup = 2;


    const totalWater = numberOfCups * waterPerCup;
    //console.log (totalWater);

    const totalMilk = numberOfCups * milkPerCup;
    //console.log ( totalMilk);

    const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    //console.log (totalTeaLeaves);

    const totalSugar = numberOfCups * sugarPerCup;
    //console.log (totalSugar);

    //calculateChaiIngredients();
    
}
calculateChaiIngredients();
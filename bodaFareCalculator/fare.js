function calculateBodaFare(){
    const distanceInKmStr = window.prompt = "Unafika wapi Mkubwa? Kilometer ngapi?:"; 
    const distanceInKm = parseInt(distanceInKmStr); 

    const baseFare = 50;
    const chargePerKm = 15;

    const totalFare = baseFare + (distanceInKm * chargePerKm)
    const output = ("uko kwote ni" + distanceInKm + " " + "Ukikalia Pikipiki: KES" + baseFare + " " + "Mpaka Uko: KES" +  totalFare + " " + "Panda Pikipiki!");
    console.log(output)
}
calculateBodaFare(); 
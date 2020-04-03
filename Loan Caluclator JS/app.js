//Listen for Submit
document.getElementById("loan-form").addEventListener("submit",function(e){
    
    //Show Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(caluculateResult,2000);

    e.preventDefault();
});

//Implement caluclateResult
function caluculateResult(e){
    const amount = document.getElementById("amount");
    const intrest = document.getElementById("intrest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalIntrest = document.getElementById("total-intrest");

    const principal = parseFloat(amount.value);
    const caluculatedIntrest = parseFloat(intrest.value)/100/12;
    const caluclatePayment = parseFloat(years.value)*12;
    //Compute Monthly
    const x = Math.pow(1+caluculatedIntrest,caluclatePayment);
    const monthly = (principal*x*caluculatedIntrest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = ((monthly*caluclatePayment) * 12).toFixed(2);
        totalIntrest.value = ((monthly * caluclatePayment)-principal).toFixed(2);
        //show results
        document.getElementById("results").style.display = "block";

        //Hide Spinner
        document.getElementById("loading").style.display = "none";  

    }else{
        showError("Please check your numbers");
            }
            console.log("Check Num");

    
}

//Show Error
function showError(error){
    //Create a Div
    const errorDiv = document.createElement("div");

    //Get Element   
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");


    //Add class
     errorDiv.className = "alert alert-danger";

     //create a text node and appedn it to div
     errorDiv.appendChild(document.createTextNode(error));

     //Insert Error Above Heading 
     card.insertBefore(errorDiv,heading);

     //Clear Error After Some time
     setTimeout(clearError,3000);

     //Hide Spinner
     document.getElementById("loading").style.display = "none";  

}
//clear Error
function clearError(){
    document.querySelector(".alert").remove();
}
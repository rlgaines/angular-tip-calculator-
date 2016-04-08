
app.service("CalcService", [function(){
	var meals = [];
	var totals = {price: 0, tax: 0, tip: 0, tipAvg: 0, subtotal:0};
	var total = 0;
    return {
		getMeals: function () {
			return meals;
		},
		getTotals: function	() {

	     	var totals = {price: 0, tax: 0, tip: 0, tipAvg:0};
	     	totals.count = meals.length;

			meals.forEach(function(obj){
				totals.tip += parseFloat(obj.tip/100);
  			}) 
  			if (meals.length>0) {
  				totals.tipAvg = totals.tip/totals.count;
  			} else {
  				totals.tipAvg = 0;
  			}
			return totals;	
			
		},
		chargeTotal: function () {
			console.log('meals', meals);
			totals.mealCount = meals.length;
	     	meals.forEach(function(obj){

	     		totals.mealTax = parseFloat(obj.price) * (parseFloat(obj.tax)/100);
	       		totals.sub_total = parseFloat(obj.price) + totals.mealTax; 
	       		totals.tip_total = parseFloat(obj.price) * (parseFloat(obj.tip)/100);
	       		totals.finalCost = totals.tip_total + parseFloat(obj.price);

	     	})

	     	return	totals;
		},
		addMeals: function (obj) {
			meals.push(obj);
		},
		resetAll: function () {

			return meals = [];
		},
		getSingleMeal: function () {
			//button bullshit 
		}
	}
}])

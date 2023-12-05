document.addEventListener('DOMContentLoaded', function () {
	
	const mealPlanForm = document.getElementById('mealForm');
	const nameInput = document.getElementById('userName');
	const emailInput = document.getElementById('email');
	const goalInput = document.getElementById('goal');
	
	const breakfast = document.getElementById('breakfast').value.trim();
    const snack1 = document.getElementById('firstSnack').value.trim();
	const snack2 = document.getElementById('secondSnack').value.trim();
    const lunch = document.getElementById('lunch').value.trim();
    const dinner = document.getElementById('dinner').value.trim();
	
	const clearButton = document.getElementById('clearButton');
	const printButton = document.getElementById('printButton');
	
	mealPlanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

      if (isValidEmail(emailInput)) {
      // Update the personal information display
      document.getElementById('name').textContent = name;
      document.getElementById('email').textContent = email;
      document.getElementById('goal').textContent = goal;

      generateMealPlan();
    } else {
      alert('Please enter a valid email address.');
    }
  });

	

	function isValidEmail(emailInput) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailInput);
	}
	
	function generateMealPlan() {
    // Open a new window to display the meal plan
    const mealPlan = window.open('', '_blank');
    mealPlan.document.write('<html><head><title>Your Meal Plan</title>');
    mealPlan.document.write('<style>');
    mealPlan.document.write('/* Styles for the meal plan table */');
    // ... (CSS styles for the table)
    mealPlan.document.write('</style></head><body>');
    mealPlan.document.write('<h1>Here is Your Meal Plan</h1>');
    mealPlan.document.write('<div class="personal-info">');
    mealPlan.document.write('<h2>Personal Information</h2>');
    mealPlan.document.write('<p><strong>Name:</strong> ' + nameInput.value.trim() + '</p>');
    mealPlan.document.write('<p><strong>Email:</strong> ' + emailInput.value.trim() + '</p>');
    mealPlan.document.write('<p><strong>Goal:</strong> ' + goalInput.value.trim() + '</p>');
    mealPlan.document.write('</div>');
	
    mealPlan.document.write('<h2>Meal Plan</h2>');
    mealPlan.document.write('<table>');
    mealPlan.document.write('<tr><th>Meal</th><th>Menu</th></tr>');
	mealPlan.document.write('<tr><td>Breakfast</td></tr>');
	mealPlan.document.write('<td>' + breakfast.value() + '</td>');
	mealPlan.document.write('<td>Snack 1</td>');
	mealPlan.document.write('<td>' + snack1.value() + '</td>');
	mealPlan.document.write('<tr><td>Snack 2</td></tr>');
	mealPlan.document.write('<td>' + snack2.value() + '</td>');
	mealPlan.document.write('<tr><td>Lunch</td></tr>');
	mealPlan.document.write('<td>' + lunch.value() + '</td>');
	mealPlan.document.write('<tr><td>Dinner</td></tr>');
	mealPlan.document.write('<td>' + dinner.value() + '</td>');
	mealPlan.document.write('</tr>');
    mealPlan.document.write('</table>');
	
	mealPlan.document.write('<button type="button" id="printButton">Print Planner</button>');
	/* mealPlan.document.write('<script>');
	mealPlan.document.write('printButton.addEventListener('click', function() {window.print();});');
	mealPlan.document.write('</script>'); */
    mealPlan.document.write('</body></html>');
    mealPlan.document.close();
  }
    
  clearButton.addEventListener('click', function() {
    mealPlanForm.reset();
  });
  printButton.addEventListener('click', function() {
    window.print();
  });
  
});
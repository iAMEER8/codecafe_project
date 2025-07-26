console.log("Starting CodeCafe Management System...");
console.log("=====================================");

console.log("PROBLEM 1: Customer Greeting System");

var customerName = "John Smith";
var preferredBeverage = "coffee";

function generateWelcomeMessage(name, beverage) {
    var cleanName = name.trim();
    var cleanBeverage = beverage.toLowerCase();
    
    var message = "Hello " + cleanName + "! Welcome to CodeCafe. Your " + cleanBeverage + " is ready!";
    return message;
}

console.log(generateWelcomeMessage("John Smith", "coffee"));
console.log(generateWelcomeMessage("Mary Johnson", "Latte"));
console.log(generateWelcomeMessage("  Bob Wilson  ", "ESPRESSO"));

console.log("");

console.log("PROBLEM 2: Weekly Menu Display");

var weeklyMenu = [
    "Sunday: Pancakes and Coffee Special",
    "Monday: Espresso and Muffin Deal", 
    "Tuesday: Latte and Sandwich Combo",
    "Wednesday: Cappuccino and Cookie Special",
    "Thursday: Americano and Bagel Deal",
    "Friday: Mocha and Cake Special",
    "Saturday: Cold Brew and Pastry Combo"
];

function getDailySpecial(dayNumber) {
    if (dayNumber < 0 || dayNumber > 6) {
        return "Sorry, please enter a number between 0 and 6";
    }
    
    var todaysSpecial = weeklyMenu[dayNumber];
    var upperSpecial = todaysSpecial.toUpperCase();
    
    return "Today's Special: " + upperSpecial;
}

console.log(getDailySpecial(0));
console.log(getDailySpecial(3));
console.log(getDailySpecial(6));
console.log(getDailySpecial(8));

console.log("");

console.log("PROBLEM 3: Sales Analytics");

var hourlyOrders = [15, 23, 18, 32, 28, 25, 19, 12];

function calculateSalesAnalytics(orders) {
    var totalOrders = 0;
    var startHour = 9;
    
    console.log("Hourly Sales Report:");
    console.log("-------------------");
    
    for (var i = 0; i < orders.length; i++) {
        var currentHour = startHour + i;
        var ordersThisHour = orders[i];
        totalOrders = totalOrders + ordersThisHour;
        
        console.log("Hour " + currentHour + ":00 - " + (currentHour + 1) + ":00 = " + ordersThisHour + " orders");
    }
    
    var averageOrders = totalOrders / orders.length;
    
    console.log("-------------------");
    console.log("Total Orders Today: " + totalOrders);
    console.log("Average Orders Per Hour: " + averageOrders.toFixed(1));
    
    return totalOrders;
}

var dailyTotal = calculateSalesAnalytics(hourlyOrders);

console.log("");

console.log("PROBLEM 4: Customer Database Management");

var customerDatabase = [];

function registerCustomer(name, email, favoriteDrink) {
    var newCustomer = {
        name: name,
        email: email.toLowerCase(),
        favoriteDrink: favoriteDrink,
        visits: 1,
        membershipLevel: "Bronze"
    };
    
    customerDatabase.push(newCustomer);
    
    console.log("New customer registered: " + name);
    return newCustomer;
}

var findCustomerByEmail = function(email) {
    for (var i = 0; i < customerDatabase.length; i++) {
        if (customerDatabase[i].email === email.toLowerCase()) {
            return customerDatabase[i];
        }
    }
    return null;
};

var updateVisits = (email) => {
    var customer = findCustomerByEmail(email);
    if (customer) {
        customer.visits = customer.visits + 1;
        customer.membershipLevel = getMembershipLevel(customer.visits);
        console.log(customer.name + " now has " + customer.visits + " visits (" + customer.membershipLevel + ")");
        return customer;
    } else {
        console.log("Customer not found!");
        return null;
    }
};

function getMembershipLevel(visitCount) {
    if (visitCount >= 16) {
        return "Gold";
    } else if (visitCount >= 6) {
        return "Silver";  
    } else {
        return "Bronze";
    }
}

var showCustomerInfo = function(email) {
    var customer = findCustomerByEmail(email);
    if (customer) {
        console.log("=== Customer Information ===");
        console.log("Name: " + customer.name.toUpperCase());
        console.log("Email: " + customer.email);
        console.log("Favorite Drink: " + customer.favoriteDrink);
        console.log("Total Visits: " + customer.visits);
        console.log("Membership: " + customer.membershipLevel);
        console.log("============================");
    } else {
        console.log("Customer not found in database");
    }
};

console.log("Testing Customer Management System:");
console.log("----------------------------------");

registerCustomer("Alice Johnson", "alice@email.com", "Latte");
registerCustomer("Bob Smith", "bob@email.com", "Espresso");
registerCustomer("Carol Davis", "carol@email.com", "Cappuccino");

console.log("");

updateVisits("alice@email.com");
updateVisits("alice@email.com");
updateVisits("alice@email.com");
updateVisits("alice@email.com");
updateVisits("alice@email.com");

for (var i = 0; i < 16; i++) {
    updateVisits("bob@email.com");
}

console.log("");

showCustomerInfo("alice@email.com");
showCustomerInfo("bob@email.com");
showCustomerInfo("carol@email.com");

console.log("All Customers Summary:");
console.log("---------------------");
for (var i = 0; i < customerDatabase.length; i++) {
    var customer = customerDatabase[i];
    console.log((i + 1) + ". " + customer.name + " - " + customer.visits + " visits - " + customer.membershipLevel);
}

console.log("");
console.log("CodeCafe Management System Complete!");
console.log("===================================");
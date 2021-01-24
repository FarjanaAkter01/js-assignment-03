//https://github.com/FarjanaAkter01/js-assignment-03

//kilometerToMeter

/* function kilometerToMeter(n) {
    var total = n * 1000;
    return total;
}
var result = kilometerToMeter(10);
console.log(result); */

// budgetCalculator

/* function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop) {
    var priceofWatch = noOfWatch * 50;
    var priceofPhone = noOfPhone * 100;
    var priceofLaptop = noOfLaptop * 500;
    var sum = priceofWatch + priceofPhone + priceofLaptop;
    return sum;
}
var result = budgetCalculator(2, 2, 2);
console.log(result); */

// hotelCost

/* function hotelCost(days) {
    if (days <= 10) {
        var sum10Days = days * 100;
        return sum10Days;
    }
    else if (days <= 20) {
        var sumNext10Days = 1000 + (days - 10) * 80;
        return sumNext10Days;
    }
    else {
        var costMoreDaysUp = 1800 + (days - 20) * 50;
        return costMoreDaysUp;
    }

}
var sum = hotelCost(40);
console.log(sum); */

// megaFriend

function megaFriend(input_string_arr) {
    var lgth = 0; 
    var longestString;
    for (var i = 0; i < input_string_arr.length; i++) {
        if (input_string_arr[i].length >= lgth) {
            var lgth = input_string_arr[i].length;
            longestString = input_string_arr[i];
        }
    }
    return longestString;
}
var arr = megaFriend(['Hitlar Himel', 'Tumpa', 'Riyad Hossen', 'Abrar Yeasir Rifat', 'Shamim Ahammed', 'Shirulla Khan']);
console.log(arr);

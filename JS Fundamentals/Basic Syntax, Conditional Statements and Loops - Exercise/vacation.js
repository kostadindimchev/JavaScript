function vacation(groupOf, type, day) {
    let price = 0

    if(groupOf >= 100 && type === 'Business') {
        groupOf -= 10
    }

    if(type === 'Students' && day === 'Friday') {
        price = 8.45 
    }else if(type === 'Students' && day === 'Saturday') {
        price = 9.80
    }else if(type === 'Students' && day === 'Sunday') {
        price = 10.46
    }else if(type === 'Business' && day === 'Friday') {
        price = 10.90
    }else if(type === 'Business' && day === 'Saturday') {
        price = 15.60
    }else if(type === 'Business' && day === 'Sunday') {
        price = 16
    }else if(type === 'Regular' && day === 'Friday') {
        price = 15
    }else if(type === 'Regular' && day === 'Saturday') {
        price = 20
    }else if(type === 'Regular' && day === 'Sunday') {
        price = 22.50
    }

    if(type === 'Students' && groupOf >= 30) {
        price -= 0.15 * price
    }else if(type === 'Regular' && groupOf >= 10 && groupOf <= 20) {
        price -= 0.05 * price
    }

    console.log(`Total price: ${(price * groupOf).toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
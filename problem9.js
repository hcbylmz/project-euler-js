const isPythagoreanTriplet = (a, b, c) => {
    if (a + b + c !== 1000) {
        return false;
    }
    return a*a + b*b === c*c;
}
let a, b, c;
for (a = 1; a < 1000; a++) {
    for (b = a + 1; b < 1000; b++) {
        for (c = b + 1; c < 1000; c++) {
            if (isPythagoreanTriplet(a, b, c)) {
                console.log(a, b, c, a * b * c);
                return;
            }   
        }
    }
}

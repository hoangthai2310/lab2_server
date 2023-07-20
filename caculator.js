exports.phepCong = function(a,b){
    return a+b;
}

exports.phepTru = function(a,b){
    return a-b;
}

exports.phepNhan = function(a,b){
    return a*b;
}

exports.phepChia = function(a,b){
    if (b == 0) {
        return NaN;
    }
    
    return (a / b);
}
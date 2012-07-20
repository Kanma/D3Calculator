Diablo3 = new Object();
Diablo3.views = new Object();


Diablo3.parse_json = function(data) {
    return JSON.parse(data, function(key, value)
            {
                if (value && (typeof(value) === 'object') && (value.__classname__ !== undefined) &&
                    (typeof(Diablo3[value.__classname__]) === 'function'))
                {
                    return new Diablo3[value.__classname__](value);
                }

                return value;
            });
}


Diablo3.round = function(number, precision) {
    var multiplier = Math.pow(10, precision);
    return Math.round(number * multiplier) / multiplier;
}
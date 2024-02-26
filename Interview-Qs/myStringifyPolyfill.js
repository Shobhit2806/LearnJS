if (!JSON.stringify) {
    JSON.stringify = function (obj) {
        var type = typeof obj;
        if (type !== 'object' || obj === null) {
            // If the value is not an object, or is null, stringify as usual
            return String(obj);
        } else {
            // If the value is an object, recursively stringify its properties
            var props = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    // Stringify the key and value and push them into the props array
                    var keyStr = JSON.stringify(key);
                    var valStr = JSON.stringify(obj[key]);
                    props.push(keyStr + ':' + valStr);
                }
            }
            // Join the props array with commas and wrap it with curly braces
            return '{' + props.join(',') + '}';
        }
    };
}

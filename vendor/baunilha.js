/**
 * Return the length of JSON String Object
 * @param lengthJStrObj
 */
function lengthJStrObj(jsonStrObj){
    return Object.keys(JSON.parse(jsonStrObj)).length
}

/**
 * String prototype function to replace format string
 * Ex:
 * "/api/company/{}/user/{}/".format(43, "luan_computacao")
 * Out: /api/company/43/user/luan_computacao/
 */
String.prototype.format = function() {
    var atrArguments = Array.prototype.slice.call(arguments);
    var formatedA = [];
    var occurrences = this.match(/{}/g).length;
    var strArray = this.split('{}');

    atrArguments.splice(occurrences);
    if(strArray[strArray.length - 1] === "") strArray.splice(-1, 1);

    if(strArray.length === atrArguments.length) {
        formatedA = strArray.map(function(x, i) {
            return x + '' + atrArguments[i]
        });
    }
    else {
        strArray.forEach(function(v, i) {
            formatedA = formatedA.concat(v, atrArguments[i]);
        });
    }
    return formatedA.join('');
};

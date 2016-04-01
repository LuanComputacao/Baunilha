/**
 * Created by luan on 29/03/16.
 */
/**
 * Return the length of JSON String Object
 * @param lengthJStrObj
 */
function lengthJStrObj(jsonStrObj){
    return Object.keys(JSON.parse(jsonStrObj)).length
}


var pvc = {}

/**
 *
 *  Utility function for logging messages to the console
 *
 */

pvc.log = function(m){

  if (typeof console != "undefined"){
    console.log("[pvChart]: " + m);
  }
};

/**
 *
 * Evaluates x if it's a function or returns the value otherwise
 *
 */

pvc.ev = function(x){
  return typeof x == "function"?x():x;
};

pvc.sumOrSet = function(v1,v2){
  return typeof v1 == "undefined"?v2:v1+v2;
}

pvc.nonEmpty = function(d){
  return typeof d != "undefined"
  }


/**
 *
 * Implements filter property if not implemented yet
 *
 */
if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun, thisp)
  {
    var len = this.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }

    return res;
  };
}
let x;

function detectType(x) {
    switch(typeof x){
      case "string":
        return "str";
      case "number":
        return "num";
      case "boolean":
        return "boolean";
      default:
        return "other";
    }
  }
detectType(x);
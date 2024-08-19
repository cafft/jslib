var geTime = () => new Date().getTime(),
    parse = x => JSON.parse(x),
    encode = x => encodeURIComponent(x);

function log(x) { 
  this.java.log(x); 
  return x; 
}
function t2s(x) { 
  return String(this.java.t2s(x));
}
function s2t(x) { 
  return String(this.java.s2t(x));
}
function setVar(x) { 
  this.source.setVariable(String(x));
}
function getVar() { 
  return String(this.source.getVariable()); 
}
function toast(x) { 
  this.java.toast(x); 
}
function logToast(x) { 
  this.java.log(x); 
  this.java.toast(x); 
}
function getLoginMap(x) { 
  try {
     return String(this.source.getLoginInfoMap().get(x)); 
  } catch {
     return '';
  }
} 

// 計算 n! (階乘)
function Factorial(n) {
    var fact = 1;
    for (var i = 2; i <= n; i++)
      fact *= i;
    return fact;
  }
  
  // 計算排列數 P(n, r) = n!/(n-r)!
  function Perm(n, r) {
    n = parseInt(n);
    r = parseInt(r);
    var perm = 1;
    for (var i = n; i > n - r; i--)
      perm *= i;
    return perm;
  }
  
  // 計算組合數 C(n, r) = P(n, r)/r! = n!/(r!(n-r)!)
  function Comb(n, r) {
    n = parseInt(n);
    r = parseInt(r);
    return Perm(n, r) / Factorial(r);
  }
  
  // 檢查輸入值 n, r 是否有效
  function invalid(n, r) {
    if (parseInt(n) < 0 || isNaN(parseInt(n))) {
      document.getElementById("n").focus();
      return true;
    } else if (parseInt(r) < 0 || isNaN(parseInt(r))) {
      document.getElementById("r").focus();
      return true;
    }
    return false;
  }
  
  // 全部計算
  function computeAll() {
    document.getElementById("resPermutation").innerHTML = "";
    document.getElementById("resCombination").innerHTML = "";
    document.getElementById("resArrangement").innerHTML = "";
    document.getElementById("resSelectrofn").innerHTML = "";
  
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
  
    if (invalid(n, r)) return;
  
    clickPerm();
    clickComb();
    clickArra();
    clickSele();
  }
  
  // 計算 P(n, r)
  function clickPerm() {
    document.getElementById("resPermutation").innerHTML = "";
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resPermutation").innerHTML = Perm(n, r);
  }
  
  // 計算 C(n, r)
  function clickComb() {
    document.getElementById("resCombination").innerHTML = "";
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resCombination").innerHTML = Comb(n, r);
  }
  
  // 計算 n^r (有重複)
  function clickArra() {
    document.getElementById("resArrangement").innerHTML = "";
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resArrangement").innerHTML = Math.pow(n, r);
  }
  
  // 計算 C(r+n-1, r) (帶重複的組合數)
  function clickSele() {
    document.getElementById("resSelectrofn").innerHTML = "";
    var n = parseInt(document.getElementById("n").value);
    var r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resSelectrofn").innerHTML = Comb(n + r - 1, r);
  }
  
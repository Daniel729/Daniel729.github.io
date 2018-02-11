/*jshint esversion:6*/
function des() {
  let str = document.getElementById("text").value;
  let dash = [];
  let oldStr = str;
  let regex = /oi|ui|ei|iu|io|ii|ea|eo/i;
  str = str.replace(/[ăîâaeiou]/gi, "a").replace(/[șțb-z]/gi, "c").replace(/a/gi, "v");

  for (let i=0; i<str.length-2; i++) {
    let l1 = str[i], l2=str[i+1], l3=str[i+2];
    if (l1+l2+l3 == "vcv") {
      // if (/[gc]/.test(oldStr[i]) && /[ei]/.test(oldStr[i+2]) && oldStr[i+1] == 'h');
      dash.push(i);
    }
    if (l1+l2+l3 == "cvv" && !regex.test(oldStr[i+1]+oldStr[i+2])) {
      dash.push(i+1);
    }
  }

  for (let i=0; i<str.length-3; i++) {
    let l1 = str[i], l2=str[i+1], l3=str[i+2], l4=str[i+3];
    if (l1+l2+l3+l4 == "vccv") {
      if (/[cg]/.test(oldStr[i+1]) && /h/.test(oldStr[i+2]) && /[ei]/.test(oldStr[i+3])) {
      } else if (/[bcdfghptvl]/i.test(oldStr[i+1]) && /[lr]/i.test(oldStr[i+2])) {
        dash.push(i);
      } else if (/l/i.test(oldStr[i+1]) && /ț/i.test(oldStr[i+2])) {
      } else {
        dash.push(i+1);
      }
    }

    if (l1+l2+l3 == "cvv" && (l4 == "c" || l4 == " ") && !regex.test(oldStr[i+1]+oldStr[i+2])) {
      dash.push(i+1);
    }
  }

  for (let i=0; i<str.length-4; i++) {
    let l1 = str[i], l2=str[i+1], l3=str[i+2], l4=str[i+3], l5=str[i+4];
    if (l1+l2+oldStr[i+2]+l4 == "vchvv" && !/eo/i.test(oldStr[i+3]+oldStr[i+4])) {
      dash.push(i);
    }

    if (l1+l2+l3+l4+l5 == "vcccv" && oldStr[i+3] && /lpt|mpt|nct|ncs|ndv|rct|rtf|stm/i.test(l2+l3+l4)) {
      dash.push(i+3);
    } else if (l1+l2+l3+l4+l5 == "vcccv" && oldStr[i+3]) {
      dash.push(i+1);
    }
  }

  for (let i=0; i<str.length-5; i++) {
    let l1 = str[i], l2=str[i+1], l3=str[i+2], l4=str[i+3], l5=str[i+4],  l6=str[i+5];
    if (l1+l2+l3+l4+l5+l6 == "vccccv") {
      dash.push(i+1);
    }
  }
  dash = dash.sort((a, b) => a-b);
  dash = dash.unique();
  oldStr = oldStr.split("");
  for (let i=0; i<dash.length; i++) {
    oldStr.splice(dash[i]+i+1, 0, "-");
  }
  document.getElementById("result").innerHTML = oldStr.join("");
}

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

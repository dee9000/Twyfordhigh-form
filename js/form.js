

/*javascript for other family relative*/
function showDiv(divId, element)
{
    document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';
}



/*JavaScript for current school details

        function selectFunction() {
          var current_school_details = document.getElementById("current_school_details");
          if (document.querySelector(".form-check-input").checked === true) {
            current_school_details.style.display = "Block";
            current_school_details_two.style.display = "none";
          } else {
            current_school_details.style.display = "none";
            current_school_details_two.style.display = "Block";
          }
        }

/*test*/
        function selectFunction() {
          var current_school_details = document.getElementById("current_school_details");
          if (document.querySelector(".form-check-input1").checked === true) {
            current_school_details.style.display = "Block";
            current_school_details_two.style.display = "none";
          } else {
            current_school_details.style.display = "none";
            current_school_details_two.style.display = "Block";
          }
        }

/*javascript to duplicate add another*/

var i = 0;
var original = document.getElementById('repeatTHIS');

function repeat() {
  var clone = original.cloneNode(true);
  clone.id = "repeatTHIS1" + ++i;
  original.parentNode.appendChild(clone);
}


/*javascript to duplicate add another predicted grade*/

var x = 0;
var original2 = document.getElementById('repeatTHIStwo');

function repeat2() {
  var clone = original2.cloneNode(true);
  clone.id = "repeatTHIStwo1" + ++x;
  original2.parentNode.appendChild(clone);
}


/*JavaScript for data protection tray*/

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

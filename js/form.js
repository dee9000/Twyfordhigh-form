

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
  document.getElementById("statement").innerHTML = "The Twyford CofE Academies Trust is the Data Controller for the purposes of the Data Protection Act. Trust staff collect information from you and may receive information about you from your previous school and the Learning Records Service. We hold this personal data and use it to: Support your teaching and learning; Monitor and report on your progress; Provide appropriate pastoral care, and assess how well your school is doing. This information includes your contact details, national curriculum assessment results, attendance information and personal characteristics such as your ethnic group, any special educational needs and relevant medical information. If you are enrolling for post 14 qualifications, we will be provided with your unique learner number (ULN) by the Learning Records Service and may also obtain from them details of any learning or qualifications you have undertaken. Once you are aged 13 or over, we are required by law to pass on certain information to providers of youth support services in your area. This is the local authority support service for young people aged 13 to 19 in England. We must provide both your and your parent’s/s’ name(s) and address, and any further information relevant to the support services’ role. However, if you are over 16, you (or your parent(s)) can ask that no information beyond names, address and your date of birth be passed to the support service. This right transfers to you on your 16th birthday. Please inform the school administration if you wish to opt-out of this arrangement. For more information about young peoples’ services, please go to the the LA website. We will not give information about you to anyone outside the school without your consent unless the law and our rules allow us to. We are required by law to pass some information about you to the Local Authority and the Department for Education (DfE).";
}



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



/*JAVASCRIPT FOR SUBJECT CHOICES*/

/*ENGINE TO RESET FORM DATA, AS WELL AS DROP DOWN DIV AND RESET*/
 function clear_reset(){
   document.getElementById("subject_choice").reset();
   document.getElementById("exampleFormControlSelect1").disabled=false;
   document.getElementById("exampleFormControlSelect2").disabled=false;
   document.getElementById("exampleFormControlSelect3").disabled=false;
   document.getElementById("exampleFormControlSelect4").disabled=false;

   document.getElementById("block_a").disabled=false;
   document.getElementByClassName('subj-bloc-req').style.display = "none";/*show div*/


 }




function Reset() {
    document.getElementById("subject_choice").reset();
    document.getElementById("subj-bloc-req").style.display = "none";/*show div*/
    document.getElementById("exampleFormControlSelect1").disabled=false;/*disable dropdown*/


}

// Please do not use inline event handlers, use this instead:
document.getElementById("resetBtn").onclick = function () {
    Reset();
}


function fieldValidation() {

var name = document.forms['TwyForm']['fname'].value;

if (name === '') {
  alert('Please enter your name.');
  return false;
}
}








/*CHOICE 1*/
function showDivA(select){
  /*ART*/
   if(select.value=='art-block-j'){
    document.getElementById('subj-bloc-req').style.display = "block";/*show div*/
    document.getElementById("exampleFormControlSelect1").disabled=true;/*disable dropdown*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
   }
   /*BUSINESS STUDIES*/
    if(select.value=='business_studies-block-j'){
    document.getElementById('subj-bloc-req-0').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;/*disable dropdown*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/


   }

   /*CHEMISTRY*/
     if(select.value=='chemistry-language-block-j'){
    document.getElementById('subj-bloc-req-1').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

   /*ENGLISH LITERATURE*/
     if(select.value=='english_lit-block-j'){
    document.getElementById('subj-bloc-req-3').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

   /*MUSIC*/
     if(select.value=='music-block-j'){
    document.getElementById('subj-bloc-req-3').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

   /*PSYCHOLOGY*/
     if(select.value=='psychology-block-j'){
    document.getElementById('subj-bloc-req-4').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

   /*SOCIOLOGY*/
     if(select.value=='sociology-block-j'){
    document.getElementById('subj-bloc-req-5').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

   /*BLOCK K SUBJECTS IN CHOICE 1*/
   /*CHEMISTRY*/
     if(select.value=='chemistry-block-k'){
    document.getElementById('subj-bloc-req-6').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/





    /*disable group*/
   }
   /*computer science*/
     if(select.value=='computer-science-block-k'){
    document.getElementById('subj-bloc-req-7').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/


    /*disable group*/
   }
   /*french*/
     if(select.value=='french-block-k'){
    document.getElementById('subj-bloc-req-8').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
   }

   /*german*/
     if(select.value=='german-block-k'){
    document.getElementById('subj-bloc-req-9').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
   }

   /*history*/
     if(select.value=='history-block-k'){
    document.getElementById('subj-bloc-req-10').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
   }

   /*physics*/
     if(select.value=='physics-block-k'){
    document.getElementById('subj-bloc-req-11').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
   }

   /*sociology*/
     if(select.value=='sociology-block-k'){
    document.getElementById('subj-bloc-req-12').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
   }
   /*BLOCK L SUBJECTS IN CHOICE 1*/
   /*Biology*/
    if(select.value=='biology-block-l'){
    document.getElementById('subj-bloc-leq-13').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/


    /*disable group*/
    }

    if(select.value=='further_mathematics-block-l'){
    document.getElementById('subj-bloc-req-14').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
     }


     if(select.value=='geography-block-l'){
    document.getElementById('subj-bloc-req-15').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }


    if(select.value=='Graphics-block-l'){
    document.getElementById('subj-bloc-req-16').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }


    if(select.value=='history-block-l'){
    document.getElementById('subj-bloc-req-17').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }


    if(select.value=='mathematics-block-l'){
    document.getElementById('subj-bloc-req-18').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }



    /*BLOCK M SUBJECTS IN CHOICE 1*/

    /*Biology*/
    if(select.value=='biology-block-m'){
    document.getElementById('subj-bloc-req-21').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/


    /*disable group*/
    }

    if(select.value=='economics-block-m'){
    document.getElementById('subj-bloc-req-22').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }

    if(select.value=='english_lit-block-m'){
    document.getElementById('subj-bloc-req-23').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }

    if(select.value=='Film-studies-block-m'){
    document.getElementById('subj-bloc-req-24').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }

    if(select.value=='geography-block-m'){
    document.getElementById('subj-bloc-req-25').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }

    if(select.value=='music_technology-block-m'){
    document.getElementById('subj-bloc-req-26').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }

    if(select.value=='physics-block-m'){
    document.getElementById('subj-bloc-req-27').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }


    if(select.value=='psychology-block-m'){
    document.getElementById('subj-bloc-req-28').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }
    if(select.value=='religious-studies-block-m'){
    document.getElementById('subj-bloc-req-27').style.display = "block";
    document.getElementById("exampleFormControlSelect1").disabled=true;
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/

    /*disable group*/
    }

    /*BLOCK N IN CHOICE 1*/

        if(select.value=='drama-block-n'){
        document.getElementById('subj-bloc-req-22').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }

        if(select.value=='economics-block-n'){
        document.getElementById('subj-bloc-req-23').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }

        if(select.value=='further_mathematics-block-n'){
        document.getElementById('subj-bloc-req-24').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }

        if(select.value=='mathematics-block-n'){
        document.getElementById('subj-bloc-req-25').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }

        if(select.value=='Photography-block-n'){
        document.getElementById('subj-bloc-req-26').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }

        if(select.value=='politics-block-n'){
        document.getElementById('subj-bloc-req-27').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }


        if(select.value=='psychology-block-n'){
        document.getElementById('subj-bloc-req-28').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }
        if(select.value=='spanish-block-n'){
        document.getElementById('subj-bloc-req-27').style.display = "block";
        document.getElementById("exampleFormControlSelect1").disabled=true;
        document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/

        /*disable group*/
        }



  }


function showDivB(select){

   /*BLOCK j SUBJECTS IN CHOICE 2*/
    if(select.value=='art-block-j'){
     document.getElementById('subj-bloc-req-bl-j').style.display = "block";/*show div*/
     document.getElementById("exampleFormControlSelect2x").disabled=true;/*disable dropdown*/
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

    }

     if(select.value=='business_studies-block-j'){
     document.getElementById('subj-bloc-req-0-bl-j').style.display = "block";
     document.getElementById("exampleFormControlSelect2x").disabled=true;/*disable dropdown*/
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

    }

      if(select.value=='chemistry-language-block-j'){
     document.getElementById('subj-bloc-req-1-bl-j').style.display = "block";
     document.getElementById("exampleFormControlSelect2x").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
    }

      if(select.value=='english_lit-block-j'){
     document.getElementById('subj-bloc-req-2-bl-j').style.display = "block";
     document.getElementById("exampleFormControlSelect2x").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='music-block-j'){
     document.getElementById('subj-bloc-req-bl-3-j').style.display = "block";
     document.getElementById("exampleFormControlSelect2x").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='psychology-block-j'){
     document.getElementById('subj-bloc-req-4-bl-j').style.display = "block";
     document.getElementById("exampleFormControlSelect2x").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='sociology-block-j'){
     document.getElementById('subj-bloc-req-5-bl-j').style.display = "block";
     document.getElementById("exampleFormControlSelect2x").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }


    /*BLOCK k SUBJECTS IN CHOICE 2*/
     if(select.value=='chemistry-block-k'){
    document.getElementById('subj-bloc-req-6-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   }

     if(select.value=='computer-science-block-k'){
    document.getElementById('subj-bloc-req-7-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }
     if(select.value=='french-block-k'){
    document.getElementById('subj-bloc-req-8-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='german-block-k'){
    document.getElementById('subj-bloc-req-9-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='history-block-k'){
    document.getElementById('subj-bloc-req-10-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='physics-block-k'){
    document.getElementById('subj-bloc-req-11-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='sociology-block-k'){
    document.getElementById('subj-bloc-req-12-bl-k').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }


   /*BLOCK l SUBJECTS IN CHOICE 2*/
   /*Biology*/
    if(select.value=='biology-block-l'){
    document.getElementById('subj-bloc-req-13-bl-l').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='further_mathematics-block-l'){
    document.getElementById('subj-bloc-req-14-bl-l').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
     }


     if(select.value=='geography-block-l'){
    document.getElementById('subj-bloc-req-15-bl-l').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }


    if(select.value=='Graphics-block-l'){
    document.getElementById('subj-bloc-req-16-bl-l').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='history-block-l'){
    document.getElementById('subj-bloc-req-17-bl-l').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }


    if(select.value=='mathematics-block-l'){
    document.getElementById('subj-bloc-req-18-bl-l').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }



    /*BLOCK m SUBJECTS IN CHOICE 2*/

    /*Biology*/
    if(select.value=='biology-block-m'){
    document.getElementById('subj-bloc-req-19-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='economics-block-m'){
    document.getElementById('subj-bloc-req-20-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='english_lit-block-m'){
    document.getElementById('subj-bloc-req-21-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='Film-studies-block-m'){
    document.getElementById('subj-bloc-req-22-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='geography-block-m'){
    document.getElementById('subj-bloc-req-23-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='music_technology-block-m'){
    document.getElementById('subj-bloc-req-24-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='physics-block-m'){
    document.getElementById('subj-bloc-req-25-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='psychology-block-m'){
    document.getElementById('subj-bloc-req-26-bl-m').style.display = "block";
    document.getElementById("exampleFormControlSelect2x").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

/* BLOCK N CHOICE 2*/

        if(select.value=='drama-block-n'){
        document.getElementById('subj-bloc-req-20-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }

        if(select.value=='economics-block-n'){
        document.getElementById('subj-bloc-req-21-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }

        if(select.value=='further_mathematics-block-n'){
        document.getElementById('subj-bloc-req-22-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }

        if(select.value=='mathematics-block-n'){
        document.getElementById('subj-bloc-req-23-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }

        if(select.value=='Photography-block-n'){
        document.getElementById('subj-bloc-req-24-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }

        if(select.value=='politics-block-n'){
        document.getElementById('subj-bloc-req-25-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }

        if(select.value=='psychology-block-n'){
        document.getElementById('subj-bloc-req-26-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }
        if(select.value=='spanish-block-n'){
        document.getElementById('subj-bloc-req-26-bl-m').style.display = "block";
        document.getElementById("exampleFormControlSelect2x").disabled=true;
        document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
        document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
        /*disable group*/
        }






}

function showDivC(select){

   /*BLOCK J SUBJECTS IN CHOICE 3*/
   if(select.value=='art-block-j'){
    document.getElementById('subj-bloc-req-bl-j1').style.display = "block";/*show div*/
    document.getElementById("exampleFormControlSelect3").disabled=true;/*disable dropdown*/
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

    if(select.value=='business_studies-block-j'){
    document.getElementById('subj-bloc-req-0-bl-j1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;/*disable dropdown*/
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/

   }

     if(select.value=='chemistry-language-block-j'){
    document.getElementById('subj-bloc-req-1-bl-j1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
   }

     if(select.value=='english_lit-block-j'){
    document.getElementById('subj-bloc-req-2-bl-j1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='music-block-j'){
    document.getElementById('subj-bloc-req-bl-3-j1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='psychology-block-j'){
    document.getElementById('subj-bloc-req-4-bl-j1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

     if(select.value=='sociology-block-j'){
    document.getElementById('subj-bloc-req-5-bl-j1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_j_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
   }

/*BLOCK K CHOICE 3*/
    if(select.value=='chemistry-block-k'){
   document.getElementById('subj-bloc-req-6-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
  }

    if(select.value=='computer-science-block-k'){
   document.getElementById('subj-bloc-req-7-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   /*disable group*/
  }
    if(select.value=='french-block-k'){
   document.getElementById('subj-bloc-req-8-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   /*disable group*/
  }

    if(select.value=='german-block-k'){
   document.getElementById('subj-bloc-req-9-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   /*disable group*/
  }

    if(select.value=='history-block-k'){
   document.getElementById('subj-bloc-req-10-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   /*disable group*/
  }

    if(select.value=='physics-block-k'){
   document.getElementById('subj-bloc-req-11-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   /*disable group*/
  }

    if(select.value=='sociology-block-k'){
   document.getElementById('subj-bloc-req-12-bl-k1').style.display = "block";
   document.getElementById("exampleFormControlSelect3").disabled=true;
   document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
   document.getElementById("block_k_3").disabled=true;/*disables options in other fields too*/
   /*disable group*/
  }


  /*CHOICE 3 BLOCK l */
    if(select.value=='biology-block-l'){
    document.getElementById('subj-bloc-req-13-bl-l1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='further_mathematics-block-l'){
    document.getElementById('subj-bloc-req-14-bl-l1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
     }

     if(select.value=='geography-block-l'){
    document.getElementById('subj-bloc-req-15-bl-l1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='Graphics-block-l'){
    document.getElementById('subj-bloc-req-16-bl-l1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='history-block-l'){
    document.getElementById('subj-bloc-req-17-bl-l1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='mathematics-block-l'){
    document.getElementById('subj-bloc-req-18-bl-l1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_l_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }


    /*BLOCK M SUBJECTS IN CHOICE 3*/

    if(select.value=='biology-block-m'){
    document.getElementById('subj-bloc-req-19-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='economics-block-m'){
    document.getElementById('subj-bloc-req-20-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='english_lit-block-m'){
    document.getElementById('subj-bloc-req-21-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='Film-studies-block-m'){
    document.getElementById('subj-bloc-req-22-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='geography-block-m'){
    document.getElementById('subj-bloc-req-23-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='music_technology-block-m'){
    document.getElementById('subj-bloc-req-24-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='physics-block-m'){
    document.getElementById('subj-bloc-req-25-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }


    if(select.value=='psychology-block-m'){
    document.getElementById('subj-bloc-req-26-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='religious-studies-block-m'){
    document.getElementById('subj-bloc-req-27-bl-m1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    /*BLOCK N CHOICE 3*/
    if(select.value=='drama-block-n'){
    document.getElementById('subj-bloc-req-28-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='economics-block-n'){
    document.getElementById('subj-bloc-req-29-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='further_mathematics-block-n'){
    document.getElementById('subj-bloc-req-30-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='mathematics-block-n'){
    document.getElementById('subj-bloc-req-31-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='Photography-block-n'){
    document.getElementById('subj-bloc-req-32-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='politics-block-n'){
    document.getElementById('subj-bloc-req-33-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='psychology-block-n'){
    document.getElementById('subj-bloc-req-34-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='spanish-block-n'){
    document.getElementById('subj-bloc-req-35-bl-n1').style.display = "block";
    document.getElementById("exampleFormControlSelect3").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_3").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }



}


function showDivD(select){
    /*CHOICE 4 SUBJECTS BLOCK J*/
    if(select.value=='art-block-j'){
     document.getElementById('subj-bloc-req-bl-j3').style.display = "block";/*show div*/
     document.getElementById("exampleFormControlSelect4").disabled=true;/*disable dropdown*/
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/

    }

     if(select.value=='business_studies-block-j'){
     document.getElementById('subj-bloc-req-0-bl-j3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;/*disable dropdown*/
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/

    }

      if(select.value=='chemistry-language-block-j'){
     document.getElementById('subj-bloc-req-1-bl-j3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
    }

      if(select.value=='english_lit-block-j'){
     document.getElementById('subj-bloc-req-2-bl-j3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='music-block-j'){
     document.getElementById('subj-bloc-req-bl-3-j3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='psychology-block-j'){
     document.getElementById('subj-bloc-req-4-bl-j3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='sociology-block-j'){
     document.getElementById('subj-bloc-req-5-bl-j3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_j_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_j_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

    /*BLOCK k SUBECTS IN CHOICE 4*/

      if(select.value=='chemistry-block-k'){
     document.getElementById('subj-bloc-req-6-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
    }

      if(select.value=='computer-science-block-k'){
     document.getElementById('subj-bloc-req-7-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }
      if(select.value=='french-block-k'){
     document.getElementById('subj-bloc-req-8-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='german-block-k'){
     document.getElementById('subj-bloc-req-9-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='history-block-k'){
     document.getElementById('subj-bloc-req-10-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='physics-block-k'){
     document.getElementById('subj-bloc-req-11-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

      if(select.value=='sociology-block-k'){
     document.getElementById('subj-bloc-req-12-bl-k3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_k_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_k_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
    }

    /*BLOCK l SUBJECTS IN CHOICE 4*/
    /*Biology*/
     if(select.value=='biology-block-l'){
     document.getElementById('subj-bloc-req-13-bl-l3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
     }

     if(select.value=='further_mathematics-block-l'){
     document.getElementById('subj-bloc-req-14-bl-l3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
      }

      if(select.value=='geography-block-l'){
     document.getElementById('subj-bloc-req-15-bl-l3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
     }

     if(select.value=='Graphics-block-l'){
     document.getElementById('subj-bloc-req-16-bl-l3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
     }

     if(select.value=='history-block-l'){
     document.getElementById('subj-bloc-req-17-bl-l3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
     }

     if(select.value=='mathematics-block-l'){
     document.getElementById('subj-bloc-req-18-bl-l3').style.display = "block";
     document.getElementById("exampleFormControlSelect4").disabled=true;
     document.getElementById("block_l_0").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_1").disabled=true;/*disables options in other fields too*/
     document.getElementById("block_l_2").disabled=true;/*disables options in other fields too*/
     /*disable group*/
     }



    /*BLOCK M SUBJECTS IN CHOICE 4*/
    /*Biology*/
    if(select.value=='biology-block-m'){
    document.getElementById('subj-bloc-req-19-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='economics-block-m'){
    document.getElementById('subj-bloc-req-20-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='english_lit-block-m'){
    document.getElementById('subj-bloc-req-21-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='Film-studies-block-m'){
    document.getElementById('subj-bloc-req-22-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='geography-block-m'){
    document.getElementById('subj-bloc-req-23-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='music_technology-block-m'){
    document.getElementById('subj-bloc-req-24-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='physics-block-m'){
    document.getElementById('subj-bloc-req-25-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='psychology-block-m'){
    document.getElementById('subj-bloc-req-26-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='religious-studies-block-m'){
    document.getElementById('subj-bloc-req-27-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_m_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_m_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    /*BLOCK n*/
    if(select.value=='drama-block-n'){
    document.getElementById('subj-bloc-req-28-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }

    if(select.value=='economics-block-n'){
    document.getElementById('subj-bloc-req-29-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='further_mathematics-block-n'){
    document.getElementById('subj-bloc-req-30-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='mathematics-block-n'){
    document.getElementById('subj-bloc-req-31-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='Photography-block-n'){
    document.getElementById('subj-bloc-req-32-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='politics-block-n'){
    document.getElementById('subj-bloc-req-33-bl-m3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='psychology-block-n'){
    document.getElementById('subj-bloc-req-34-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }
    if(select.value=='spanish-block-n'){
    document.getElementById('subj-bloc-req-35-bl-n3').style.display = "block";
    document.getElementById("exampleFormControlSelect4").disabled=true;
    document.getElementById("block_n_0").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_1").disabled=true;/*disables options in other fields too*/
    document.getElementById("block_n_2").disabled=true;/*disables options in other fields too*/
    /*disable group*/
    }




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

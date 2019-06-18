$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  /*$("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });*/
 
  $(document).on('click touchend',function(event) {console.log("oh");
  if (event.clientY > 325) {
      $("#collapsable-nav").collapse('hide');
    }});
});

/*$("body").mousemove(function (event) {
    if (event.clientY > 325) {
      $("#collapsable-nav").collapse('hide');
    }
  });*/
  
(function (global) {

var dc = {};
var homeHtml = "snip/homePage.html";
var birthdayPage="snip/birthdayPage.html";
var classPage="snip/classPage.html";
var aboutPage="snip/aboutPage.html";
var writeUsPage="snip/writeUsPage.html";
var galleryPage="snip/galleryPage.html";
 var modal = document.getElementById("myModal");
 var check=false; 

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='image/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};
var switchToActive = function (Id) {
  // Remove 'active' from home button
  var classes = document.getElementById("navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.getElementById("navHomeButton").className = classes;

  classes = document.getElementById("birthday").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.getElementById("birthday").className = classes;

   classes = document.getElementById("clas").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.getElementById("clas").className = classes;

   classes = document.getElementById("about").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.getElementById("about").className = classes;

classes = document.getElementById("call-btn").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.getElementById("call-btn").className = classes;

  classes = document.getElementById("gallery").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.getElementById("gallery").className = classes;
 
  // Add 'active' to menu button if not already there
  classes = document.getElementById(Id).className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.getElementById(Id).className = classes;
  }
};


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
if(!check){
check=true;
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
console.log(check);
}
});

dc.loadHome = function () {
  showLoading("#main-content");
switchToActive("navHomeButton");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadBirthday = function () {
  showLoading("#main-content");
switchToActive("birthday");
  $ajaxUtils.sendGetRequest(
    birthdayPage,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadClass=function(){
 showLoading("#main-content");
switchToActive("clas");
  $ajaxUtils.sendGetRequest(
    classPage,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};
dc.loadWriteUs=function(){
 showLoading("#main-content");
 switchToActive("about");
  $ajaxUtils.sendGetRequest(
    writeUsPage,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadGallery=function(){
 showLoading("#main-content");
 switchToActive("gallery");
  $ajaxUtils.sendGetRequest(
    galleryPage,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadAbout=function(){
 showLoading("#main-content");
switchToActive("about");
  $ajaxUtils.sendGetRequest(
    aboutPage,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};
function Alert (num){
  var modal = document.getElementById("myModal");
  switch(num){
    case 1:
    document.querySelector(".modal-content h3")
      .innerHTML = "בשם צריך להיות אותיות";
    break;
     case 2:
    document.querySelector(".modal-content h3")
      .innerHTML = "הטלפון אינו תקין - צריך להכיל 10 ספרות";
    break;
     case 3:
    document.querySelector(".modal-content h3")
      .innerHTML = "מייל לא תקין";
    break;
     case 4:
    document.querySelector(".modal-content h3")
      .innerHTML = "נכשל , העמוד בעידכון - השיגו אותנו בטלפון" ;
      document.querySelector(".modal-content h3").style.color="red";    break;
  }
  modal.style.display = "block";
  return true ; 
}
global.onclick = function(event) {
  var modal = document.getElementById("myModal");
  var span=document.getElementById("close");
  console.log(event.target);
  if (event.target == modal||event.target==span) {
    modal.style.display = "none";
    }
  };
 
dc.validateForm=function(){
  var name=document.forms["myForm"]["name"].value;
  if((jQuery.trim( name )).length==0){
       Alert(1);
      return false;
    }
  else 
      {
        var phone=document.forms["myForm"]["phone"].value;
        if((jQuery.trim( phone )).length!=10){
            Alert(2);
           return false;
        }
        else{
            var email=document.forms["myForm"]["email"].value;
           const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

           if(! expression.test(String(email).toLowerCase()))
             Alert(3);
          }
        }Alert(4);return false; 
      };

global.$dc = dc;

})(window);

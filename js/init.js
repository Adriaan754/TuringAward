(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

    var date = new Date(2000, 05, 28);
    var date_jannick = new Date(1999, 04, 22);

    function _calculateAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    try {
      document.getElementById("age-adriaan").innerHTML = "Leeftijd: " + _calculateAge(date);
      document.getElementById("age-jannick").innerHTML = "Leeftijd: " + _calculateAge(date_jannick);
    } catch (err) {

    }



  }); // end of document ready
})(jQuery); // end of jQuery name space

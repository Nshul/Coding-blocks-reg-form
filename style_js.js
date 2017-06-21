/**
 * Created by anshu on 6/20/2017.
 */
window.onload=function () {


    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });
    $(document).ready(function () {
        $('select').material_select();
    });
    $("#Reset_button").on("click", function() {
        $(window).scrollTop(0);
    });
}
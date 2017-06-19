$(document).ready(function() {
    var sm = new SimpleMarkdown();

    $('#convertBtn').click(function() {
        var input = $('#inputTxt').val();
        var output = sm.render(input);
        $('#outputTxt').val(output);
    });
});
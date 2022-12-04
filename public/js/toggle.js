function getParameter(p) {
    let url = window.location.search.substring(1);
    let varUrl = url.split('&');
    for (var i = 0; i < varUrl.length; i++)
    {
        let parameter = varUrl[i].split('=');
        if (parameter[0] == p) {
            return parseInt(parameter[1]);
        }
    }

    return 0;
}

$('window').ready(() => {
    console.log('ready');
    $('img').hide();

    let week = 0;
    presetWeek = getParameter('week');

    if (Number.isInteger(presetWeek)) {
        week = presetWeek;
    }

    $('img').hide();
    $('#img' + week.toString()).show();

    $('body').click(function () {
        console.log('toggle');

        week += 1;
        $('img').hide();
        $('#img' + week.toString()).show();

        if (week >= 5) {
            week = 0;
        }
    });
});

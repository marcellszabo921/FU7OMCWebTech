$(document).ready(function () {
    $("#start").click(function () {
        $("div").animate({ left: '300px', width: '300px' }, 1000);
        $("div").animate({ top: '100px', height: '+=50px', fontSize: '30pt' }, 2000);
        $("div").animate({ left: '0px', width: '0.4px' }, 1000);
        $("div").animate({ left: '0px', height: '150px', opacity: '1', fontSize: '10pt' }, 1000, function () {
            alert('VÉGE');
        });
    });

    $("#eltuntet").click(function () {
        $("#p1").hide(2000);
        $("#p2").hide(2000, function () {
            $("#p3").hide(2000, function () {
                alert('A bekezdések elrejtése.');
            });
        });
    });
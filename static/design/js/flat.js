$(document).ready(function () {
    let keyupTimer;

    $(".flat_dis").hide();
    $(".dis_check").hide();
    $("#discount").hide();
    $(".flat_discount_price").hide();



    $(".radio_button").click(function () {
        var radioValue = $("input[name='radio_']:checked").val();

        if(radioValue==0) {
            $(".flat_dis").hide();
        }
        else { 
            $(".flat_dis").show();
        }

    });

    $(".flat_price").keyup(function () {
        var flat_price = $(".flat_price").val()
        if (flat_price == '') {
            $(".flat_dis").hide()
            $(".dis_check").hide()
            clearTimeout(keyupTimer);
            keyupTimer = setTimeout(function () {
                $(".dis_check")
                    .fadeOut("fast")
                    .delay(1000)
            }, 800);
        }

    else {
        $(".dis_check").show()
        clearTimeout(keyupTimer);
        keyupTimer = setTimeout(function () {
            $(".dis_check")
                .fadeIn("fast")
                .delay(1000)
        }, 800);

    }

});

$("#discount").keyup(function () {
    var flat_price = $(".flat_price").val()
    var discount = $("#discount").val()
    var Flat_Price_After_Discount = flat_price - (parseInt(flat_price) * parseInt(discount)) / 100

    if (discount == '') {
        clearTimeout(keyupTimer);
        keyupTimer = setTimeout(function () {
            $(".flat_dis_price")
                .fadeOut("fast")
                .delay(1000)
        }, 800);
        $("#discount_price").prop('disabled', true);
    }
    else {
        clearTimeout(keyupTimer);
        keyupTimer = setTimeout(function () {
            $(".flat_dis_price")
                .fadeIn("fast")
                .delay(100)
        }, 800);
        clearTimeout(keyupTimer);
        keyupTimer = setTimeout(function () {
            $("#discount_price")
                .fadeIn("fast")
                .delay(100)
        }, 800);

        $("#discount_price").prop('disabled', true);
        $("#discount_price").val(Flat_Price_After_Discount)


    }

});
});

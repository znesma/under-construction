/* global $ ,alert , console */
$ (function () {

    //Navbar hovering

    $('.header .menu li').hover( function () {
        
        $(this).find('span').eq(0).animate ({

            height: '70%'
        },500)

        $(this).find('span').eq(1).animate ({

            width: '12%'
        },500)

    }, function () {

        $(this).find('span').eq(0).animate ({

            height: 0
        },500)

        $(this).find('span').eq(1).animate ({

            width: 0

    },500)

});


});
/* eslint-disable indent */
/* eslint-disable strict */
/* global $ */


function main () {
    $('.thumbnail').on('click', function (event) {
        const imgSrc = $(this).find('img').attr('src');
        const imgAlt = $(this).find('img').attr('alt');
        
        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

        // $('hero img').attr({'src' : imgSrc}, {'alt' : imgAlt});
    });
}
 $(main);



// function fizzBuzzer(num){
//     if (num % 25 === 0) return 'fizzbuzz';
//     if (num % 5 === 0) return '';
//     if (num % 3 === 0) return '';
// }

// function buzzTo(count)



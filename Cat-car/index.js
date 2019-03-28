/* eslint-disable indent */
/* eslint-disable strict */
/* global $ */
function main () {
    $('.thumbnails').on('click', event => {
        const targetCat = $(event.currentTarget);
        $('hero').html(targetCat.html());
        console.log(targetCat.html());
       
    });
}
 $(main);



// function fizzBuzzer(num){
//     if (num % 25 === 0) return 'fizzbuzz';
//     if (num % 5 === 0) return '';
//     if (num % 3 === 0) return '';
// }

// function buzzTo(count)



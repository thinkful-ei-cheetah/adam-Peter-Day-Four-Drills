'use strict';

// Notes for fizzBuzz problem
function fizzBuzzer(num){
if (num % 15 === 0) return 'fizzbuzz';
if (num % 5 === 0) return 'buzz';
if (num % 3 === 0) return 'fizz';
return num;
}

function fizzBuzzUpTo(countTo){
    const results = [];
    for (let i =1; i <= countTo; i++){
        results.push(fizzBuzzer(i));
    }
    return results;
}

function generateDiv(fizzbuzzElement){
    let fizzbuzzClass = '';
    if(typeof fizzbuzzElement !== 'number') {
        fizzbuzzClass = fizzbuzzElement;
    }
    return `
        <div class="fizz-buzz-item">
            <span>${fizzbuzzElement}</span>
        </div>
    `;
}

// const fizzbuzzedResults = fizzBuzzUpTo(60);
// const fizzbuzzElements = fizzbuzzedResults.map(result => generateDiv(result));
// $(`.js-results`).append(fizzbuzzElements);
function outputFizzbuzzHtml(num){
    //$('.js-results').html(generateDiv(fizzBuzzUpTo()));
    $('.js-results').html(generateDiv(num));
}

function main() {
    $('#number-chooser').on('submit', event => {
       event.preventDefault();
       const countTo = $('#number-choice').val();
       outputFizzbuzzHtml(countTo);
    });
}

$(main);
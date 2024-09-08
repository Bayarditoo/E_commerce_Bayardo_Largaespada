let card_js = document.querySelector(`.card-title-js`);
card_js.innerHTML = `JavaScript`;
console.log(card_js);

let card_html = document.querySelector(`.card-title-html`);
card_html.innerHTML = `HTML`;
console.log(card_html);

let card_css = document.querySelector(`.card-title-css`);
card_css.innerHTML = `Css`;
console.log(card_css);

    /* Break en For */

    for (i = 0; i < 10; i++) {
        if (i === 4) {
            break;
        }
        console.log(i);
    }
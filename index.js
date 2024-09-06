let card_js = document.querySelector(`.card-title-js`);
card_js.innerHTML = `JavaScript`;
console.log(card_js);

let card_html = document.querySelector(`.card-title-html`);
card_html.innerHTML = `HTML`;
console.log(card_html);

let card_css = document.querySelector(`.card-title-css`);
card_css.innerHTML = `Css`;
console.log(card_css);

let calificacion = Number(`Elige un numero del 1 al 6`);

switch (calificacion) {
    case 1:
        console.log(`Ni a rastra pasas`);
            break;
        case 2 :
            console.log(`Sacaste 2`);
            break;
            case 3 :
                console.log(`Sacaste 3`);
                break;
                case 4 :
                    console.log(`Sacaste 4`);
                    break;
                    case 5 :
                        console.log(`Sacaste 5`);
                        break;
                        case 6 :
                            console.log(`Sacaste 6`);
                            break;
                            default:
                                console.log(`Dato invalido`);
}
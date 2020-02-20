import './styles.css';

const inputBillAmount = document.getElementById('inputBillAmount') as HTMLInputElement;
const displayBillAmount = document.getElementById('displayBillAmount') as HTMLSpanElement ;
const displayTipPercent = document.getElementById('displayTipPercent') as HTMLSpanElement;
const displayTipAmount = document.getElementById('displayTipAmount') as HTMLSpanElement;
const displayTotal = document.getElementById('displayTotal') as HTMLSpanElement;
const buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
const tenButton = document.getElementById('tenButton') as HTMLButtonElement;
const fifteenButton = document.getElementById('fifteenButton') as HTMLButtonElement;
const twentyButton = document.getElementById('twentyButton') as HTMLButtonElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;

tenButton.addEventListener('click', handleClick);
fifteenButton.addEventListener('click', handleClick);
twentyButton.addEventListener('click', handleClick);

function handleClick() {
    displayBillAmount.innerText = (parseFloat(inputBillAmount.value).toFixed(2).toString());
    displayTipPercent.innerText = this.innerText;
    tipPercent.innerText = this.innerText;
    const percent = parseInt(displayTipPercent.innerText);
    let bill = parseFloat(inputBillAmount.value);
    let tip = bill * (percent/100);
    let total = tip + bill;
    displayTipAmount.innerText = tip.toFixed(2).toString();
    displayTotal.innerText = total.toFixed(2).toString();
}




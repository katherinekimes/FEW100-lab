import './styles.css';

const inputBillAmount = document.getElementById('inputBillAmount') as HTMLInputElement;
const displayBillAmount = document.getElementById('displayBillAmount') as HTMLSpanElement ;
const displayTipPercent = document.getElementById('displayTipPercent') as HTMLSpanElement;
const displayTipAmount = document.getElementById('displayTipAmount') as HTMLSpanElement;
const displayTotal = document.getElementById('displayTotal') as HTMLSpanElement;
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const tenButton = document.getElementById('tenButton') as HTMLButtonElement;
const fifteenButton = document.getElementById('fifteenButton') as HTMLButtonElement;
const twentyButton = document.getElementById('twentyButton') as HTMLButtonElement;
const tipPercent = document.getElementById('tipPercent') as HTMLSpanElement;

tenButton.addEventListener('click', handleClick);
fifteenButton.addEventListener('click', handleClick);
twentyButton.addEventListener('click', handleClick);

function handleClick() {

    // Converts all inputs to numbers; performs calculations
    const percent = parseInt(displayTipPercent.innerText);
    const bill = parseFloat(inputBillAmount.value);
    const tip = bill * (percent / 100);
    const total = tip + bill;

    // Prevents bill amounts less than 0 from being entered
    if (parseFloat(inputBillAmount.value) < 0)
    {
        inputBillAmount.classList.add('error');
        inputBillAmount.value = '';
        return;
    }
    else 
    {
        inputBillAmount.classList.remove('error');
    }

    // Converts amounts back to strings for display onscreen
    displayBillAmount.innerText = (parseFloat(inputBillAmount.value).toFixed(2).toString());
    displayTipPercent.innerText = this.innerText;
    tipPercent.innerText = this.innerText;
    displayTipAmount.innerText = tip.toFixed(2).toString();
    displayTotal.innerText = total.toFixed(2).toString();

    // Toggles highlight on selected tip button
    const that = this as HTMLButtonElement;
        that.classList.add('selected');
        buttons.forEach(btn => {
            if (btn !== that) {
                btn.classList.remove('selected');
            }
        });
    }



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

tenButton.addEventListener('click', handleClick);
fifteenButton.addEventListener('click', handleClick);
twentyButton.addEventListener('click', handleClick);

function handleClick() {
    console.log('Hello');
    displayTipPercent.innerText = this.innerText;
}
   // const that = this as HTMLButtonElement;
    //let percent: number = parseInt(that.innerText.toString());
    //displayTipPercent.innerText = percent.toString();
   // that.classList.add('selected');
   // that.removeEventListener('click', handleClick);

   // buttons.forEach(btn => {
   //     if (btn !== that) {
   //         btn.classList.add('deselected');
      //  }
     //   else {
       //     that.classList.add('deselected');
       //     that.removeEventListener('click', handleClick);
     //   }
    //});
//}

function updateAmounts() {
    displayBillAmount.innerText = inputBillAmount.innerText;
}

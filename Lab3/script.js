const total_bill = document.getElementById("total_bill");
const calc_tip = document.getElementById("calc_tip");
const final_amount = document.getElementById("final_amount");
const slider = document.getElementById("slider");
const select = document.getElementById("select");
const percentage = document.getElementById("percentage");

const error_msg = document.getElementById("errormsg");

total_bill.addEventListener("input", calculate);
slider.addEventListener("input", calculate);
select.addEventListener("input", calculate)

let rate = 1;
let bill1 = 0;

function calculate() {

    let bill = parseFloat(total_bill.value);
    if (total_bill.value.trim() === "" || bill < 0 || isNaN(bill)) {
        error_msg.textContent = 'Enter a valid number';
        slider.disabled = true;
        percentage.value = 0;
        final_amount.value = 0;
        calc_tip.value = 0;
        return;
    }
    select.disabled = false;
    switch (select.value) {
        case "dollars":
            rate = 1;
            document.getElementById("tip_amount_label").textContent = "Tip Amount($):"
            document.getElementById("totbill").textContent = "Total Bill With Tip($):"
            break;
        case "rupees":
            rate = 84.07;
            document.getElementById("tip_amount_label").textContent = "Tip Amount(₹):"
            document.getElementById("totbill").textContent = "Total Bill With Tip(₹):"
            break;
        case "yen":
            rate = 149.34;
            document.getElementById("tip_amount_label").textContent = "Tip Amount(¥):"
            document.getElementById("totbill").textContent = "Total Bill With Tip(¥):"
            break;
    }
    error_msg.textContent = ''

    bill1 = bill * rate;

    slider.disabled = false;


    let percent = parseFloat(slider.value);

    percentage.value = percent;


    let total_tip = parseFloat(((percent * bill1) / 100).toFixed(2));
    calc_tip.value = total_tip;

    final_amount.value = parseFloat(bill1 + total_tip).toFixed(2);
}
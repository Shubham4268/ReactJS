import React, { useId } from "react";

function InputBox({
    label,                            // can choose between 'to' or 'from'
    amount = 0,                       // amount to be converted, default = 0
    onAmountChange,                   // this is a method that will be called when the amount is changed by user from the input field. onamountChange is like a helper method for the the useState that will be used in app.jsx to set the amount
    onCurrencyChange,                 // this is a method that will be called when the currency is changed by user from the select field. onCurrencyChange is a helper method for the the useState that will be used in app.jsx to set the amount again when currency is changed.
    displayCurrency = "inr",          // This decides what to display when nothing is selected and after some currency is selected.
    amountDisabled = false,           // this will not allow user to change amount from converted amount field
    currencyDisabled = false,         // Just in case you need to stop currency from changing
    currencyOptions = [],             // this array will have all the currencies from api object that will be looped to display all the currencies in option input field
    className = "",                   // to change the css if needed.  

}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black mb-2 inline-block ">{label}</label>
                <input
                    className="outline-none w-full bg-slate-200 py-1.5 text-center "
                    type="number"
                    placeholder="Amount"
                    id={amountInputId}
                    value={amount}
                    disabled={amountDisabled} // checks weather input firld is disabled or not
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    } //  onAmountChange && onAmountChange(...) checks if onAmountChange is defined before calling it.. If onAmountChange is not defined, nothing happens. This is a way to conditionally call a function only if it exists, which helps to avoid errors.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={displayCurrency}
                    disabled={currencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (        // whenever a loop is used in a jsx key should be passed to improve the performance
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

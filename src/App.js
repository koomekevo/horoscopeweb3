import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";


function App() {
  // state to keep track whether the user has installed wallet or not.
const [isWalletInstalled, setIsWalletInstalled] = useState(false);
const [date, setDate] = useState("1970-01-01");

// state for zodiacSign derived from date.
const [zodiacSign, setZodiacSign] = useState(null);

// state for keeping track of current connected account.
const [account, setAccount] = useState(null);

// state for whether app is minting or not.
const [isMinting, setIsMinting] = useState(false);

const [NFTContract, setNFTContract] = useState(null);

useEffect(() => {
	calculateZodiacSign(date);
}, [date]);

useEffect(() => {
	if (window.ethereum) {
		setIsWalletInstalled(true);
	}
}, []);

async function connectWallet() {
	window.ethereum
		.request({
			method: "eth_requestAccounts",
		})
		.then((accounts) => {
			setAccount(accounts[0]);
		})
		.catch((error) => {
			alert("Something went wrong");
		});
}

function handleDateInput({ target }) {
	setDate(target.value);
}

function calculateZodiacSign(date) {
	let dateObject = new Date(date);
	let day = dateObject.getDate();
	let month = dateObject.getMonth();
	if (month == 0) {
		if (day >= 20) {
			setZodiacSign("Aquarius");
		} else {
			setZodiacSign("Capricorn");
		}
	} else if (month == 1) {
		if (day >= 19) {
			setZodiacSign("Pisces");
		} else {
			setZodiacSign("Aquarius");
		}
	} else if (month == 2) {
		if (day >= 21) {
			setZodiacSign("Aries");
		} else {
			setZodiacSign("Pisces");
		}
	} else if (month == 3) {
		if (day >= 20) {
			setZodiacSign("Taurus");
		} else {
			setZodiacSign("Aries");
		}
	} else if (month == 4) {
		if (day >= 21) {
			setZodiacSign("Gemini");
		} else {
			setZodiacSign("Taurus");
		}
	} else if (month == 5) {
		if (day >= 21) {
			setZodiacSign("Cancer");
		} else {
			setZodiacSign("Gemini");
		}
	} else if (month == 6) {
		if (day >= 23) {
			setZodiacSign("Leo");
		} else {
			setZodiacSign("Cancer");
		}
	} else if (month == 7) {
		if (day >= 23) {
			setZodiacSign("Virgo");
		} else {
			setZodiacSign("Leo");
		}
	} else if (month == 8) {
		if (day >= 23) {
			setZodiacSign("Libra");
		} else {
			setZodiacSign("Virgo");
		}
	} else if (month == 9) {
		if (day >= 23) {
			setZodiacSign("Scorpio");
		} else {
			setZodiacSign("Libra");
		}
	} else if (month == 10) {
		if (day >= 22) {
			setZodiacSign("Sagittarius");
		} else {
			setZodiacSign("Scorpio");
		}
	} else if (month == 11) {
		if (day >= 22) {
			setZodiacSign("Capricorn");
		} else {
			setZodiacSign("Sagittarius");
		}
	}
}
}
 
export default App;
import tpbankLogo from "../assets/tpbank.png";

interface DebitCard {
  Amount: number;
  CardNumber: string;
  BankName: string;
  AccountOwner: string;
  BankLogoUrl: string;
  color: string;
}

export const DebitCard: DebitCard[] = [
  {
    Amount: 12300,
    CardNumber: "**** **** **** 1233",
    BankName: "TP Bank",
    AccountOwner: "Hoang Van Tam",
    BankLogoUrl: tpbankLogo,
    color: "#30164f",
  },
  {
    Amount: 12300,
    CardNumber: "**** **** **** 1233",
    BankName: "TP Bank",
    AccountOwner: "Hoang Van Tam",
    BankLogoUrl: tpbankLogo,
    color: "#30164f",
  },
];

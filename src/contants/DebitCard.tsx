import tpbankLogo from "../assets/tpbank.jpg";
import veitcombankLogo from "../assets/vietcombank-logo.webp";

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
    color: "#512f7c",
  },
  {
    Amount: 12300,
    CardNumber: "**** **** **** 1233",
    BankName: "TP Bank",
    AccountOwner: "Hoang Van Tam",
    BankLogoUrl: veitcombankLogo,
    color: "#0a4622",
  },
];

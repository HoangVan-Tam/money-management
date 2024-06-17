import { IoFastFood } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa6";
import { MdDirectionsTransit } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

export const currencyFormat = (num: number) => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const getIconOfCategory = (category: string) => {
  switch (category) {
    case 'F&B':
      return <IoFastFood />;
    case 'Gasoline':
      return <FaGasPump />;
    case 'Transport':
      return <MdDirectionsTransit />;
    case 'Loan':
      return <GiPayMoney />;
    case 'App Service':
      return <FaCcAmazonPay />;
    case 'Shopping':
      return <RiShoppingBag4Fill />;
    case 'Income':
      return <GiReceiveMoney />;
    default:
      break;
    // code block
  }
}

export const datetimeFormat = (UNIX_timestamp: number) => {

  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  return date + ' ' + month + ' ' + year;
}
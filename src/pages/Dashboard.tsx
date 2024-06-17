import React from "react";
import Devider from "../components/Devider";
import Container from "../components/Container";
import { DebitCard } from "../contants/DebitCard";
import { currencyFormat, getIconOfCategory } from "../common/Helper";
import { Transactions } from "../contants/Transaction";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <>
      <Container>
        <div className="grid gap-x-10 grid-cols-8">
          <div className="col-span-2">
            <h2>Balance</h2>
            <div className="bg-gray-400/30 rounded-xl grid p-5 gap-5 mt-5">
              {DebitCard.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl text-color-4 p-5`}
                    style={{ backgroundColor: item.color }}
                  >
                    <p className="text-4xl">
                      {currencyFormat(item.Amount)} VNĐ
                    </p>
                    <p className="my-5 text-xl">{item.CardNumber}</p>
                    <p className="text-sm">{item.BankName}</p>
                    <p>{item.AccountOwner}</p>
                    <div className="absolute w-20 bottom-5 right-5">
                      <img src={item.BankLogoUrl} alt={item.BankName} />
                    </div>
                  </div>
                );
              })}
              <div>note</div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex justify-between">
              <h2>Transaction history</h2>
              <Button href="/">View all</Button>
            </div>

            <div className="mt-5">
              {Transactions.map((item, index) => {
                return (
                  <div key={index} className="flex items-center justify-between bg-gray-400/30 px-3 py-2 rounded-xl text-color-1 mt-3 hover:bg-gray-500/50">
                    <div className="flex items-center">
                      <div className="text-xl p-3 bg-color-2 text-color-4 rounded-xl">
                        {getIconOfCategory(item.Categories)}
                      </div>
                      <div className="ml-3">
                        <p className="font-bold">{item.TransactionInfo}</p>
                        <p className="text-sm">{item.Categories}</p>
                      </div>
                    </div>
                    <div>
                      <p className={`text-right text-xl font-bold ${item.Income == 0 && 'text-red-600'} ${item.Spending == 0 && 'text-green-700'} `}>
                        {item.Income != 0 || ('-' + currencyFormat(item.Spending))} {item.Income != 0 && ('+' + currencyFormat(item.Income))}
                      </p>
                      <p className="text-sm text-right">{item.Date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;

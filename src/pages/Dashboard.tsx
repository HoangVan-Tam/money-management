import React from "react";
import Devider from "../components/Devider";
import Container from "../components/Container";
import { DebitCard } from "../contants/DebitCard";
import { currencyFormat } from "../common/Helper";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Devider />
      <Container>
        <div className="grid grid-cols-3 gap-x-10">
          <div className="col-span-1">
            <h2>Balance</h2>
            <div className="bg-color-1/20 rounded-xl grid p-5 gap-5 mt-5">
              {DebitCard.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`bg-[${item.color}] relative rounded-2xl text-color-4 p-5`}
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
          <div className="col-span-2">
            <h2>Summary</h2>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;

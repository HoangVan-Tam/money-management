import React from "react";
import DropDownList from "../components/DropDownList";
import Container from "../components/Container";

const Savings = () => {
  const monthDDL: DropDownList = {
    id: "Month",
    items: [
      { text: "Select Month", value: "" },
      { text: "July", value: "" },
    ],
    label: "Select Month",
  };
  return (
    <Container>
      <div className="grid grid-cols-3 gap-10">
        <DropDownList
          id={monthDDL.id}
          items={monthDDL.items}
          label={monthDDL.label}
        ></DropDownList>
        <DropDownList
          id={monthDDL.id}
          items={monthDDL.items}
          label={monthDDL.label}
        ></DropDownList>
        <DropDownList
          id={monthDDL.id}
          items={monthDDL.items}
          label={monthDDL.label}
        ></DropDownList>
      </div>
    </Container>
  );
};

export default Savings;

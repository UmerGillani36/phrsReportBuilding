import React, { useEffect, useState } from "react";
import classes from "./InvoiceRegister.module.css";
import { payload } from "../../payload/InvoiceRegister";
const InvoiceRegister = () => {
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    if (payload) {
      let temp = [];
      temp = Object.keys(payload.data);
      setBanks(temp);
    }
  }, []);
  const excerpt = (str) => {
    let substr = "";

    if (str?.length > 50) {
      substr = str.substring(0, 50);
    }
    return substr;
  };
  return (
    <>
      <page size="A4" layout="landscape" className={classes.Page}>
        <div className={classes.Header}>
          <div className={classes.HeaderContent}>
            <h3 className={classes.MainHeading}>
              Prime Human Resource Services {`(Private) Limited`}
            </h3>
            <p className={classes.SubHeading}>Invoice Register</p>
            <p className={classes.ReportDate}>
              FROM 01 Oct,2022 TO 25 Oct, 2022
            </p>
          </div>
        </div>
        <div className={classes.MainContent}>
          <div className={classes.InvoiceDateDiv}>
            <p className={classes.InvoiceDate}>Tuesday, October 25, 2022</p>
          </div>
          <table>
            <tr className={classes.tableHeadingRow}>
              <th>Sr. #</th>
              <th>Date</th>
              <th>For Month</th>
              <th>Invoice #</th>
              <th style={{ width: "480px" }}>Description</th>
              <th># of Staff</th>
              <th>Invoice Amount</th>
              <th>Invoice Credited</th>
              <th>Pay Out</th>
              <th>Balance</th>
              <th>Service Charges</th>
              <th>WHT</th>
              <th>Income Tax</th>
              <th>DraftRecieve Date</th>
              <th>Status</th>
            </tr>
          </table>
          {banks &&
            banks.map((bank) => {
              let TotalStaff = 0;
              let TotalAmount = 0;
              let TotalCredited = 0;
              let TotalPayOut = 0;
              let TotalBalance = 0;
              let TotalServiceCharges = 0;
              let TotalWHT = 0;
              let TotalIncomeTax = 0;

              console.log("TotalStaff", TotalStaff);

              return (
                <>
                  <div className={classes.BankHeadingDiv}>
                    <h3 className={classes.BankHeading}>{bank}</h3>
                  </div>
                  {[...payload?.data[bank], 1].map((ele, index) => {
                    TotalStaff =
                      TotalStaff +
                      (ele["# of Staff"] !== undefined
                        ? Number(ele["# of Staff"])
                        : 0);
                    TotalAmount +=
                      ele["Invoice Amount"] !== undefined
                        ? Number(ele["Invoice Amount"])
                        : 0;
                    TotalCredited +=
                      ele["Invoice Credited"] !== undefined
                        ? Number(ele["Invoice Credited"])
                        : 0;
                    TotalPayOut +=
                      ele?.Payout !== undefined ? Number(ele?.Payout) : 0;
                    TotalBalance +=
                      ele?.Balance !== undefined ? Number(ele?.Balance) : 0;
                    TotalServiceCharges +=
                      ele["Service Charges"] !== undefined
                        ? Number(ele["Service Charges"])
                        : 0;
                    TotalIncomeTax +=
                      ele["Income Tax"] !== undefined
                        ? Number(ele["Income Tax"])
                        : 0;

                    if (index === payload?.data[bank].length) {
                      return (
                        <div className={classes.TotalRowContainer}>
                          <p className={classes.TotalCol}>-</p>
                          <p className={classes.TotalCol}>-</p>
                          <p className={classes.TotalCol}>-</p>
                          <p className={classes.TotalCol}>-</p>
                          <p
                            className={classes.TotalCol}
                            style={{ width: "350px", fontWeight: "bold" }}
                          >
                            {bank}
                          </p>
                          <p className={classes.TotalCol}>{TotalStaff}</p>
                          <p className={classes.TotalCol}>{TotalAmount}</p>
                          <p className={classes.TotalCol}>{TotalCredited}</p>
                          <p className={classes.TotalCol}>{TotalPayOut}</p>
                          <p className={classes.TotalCol}>{TotalBalance}</p>
                          <p className={classes.TotalCol}>
                            {TotalServiceCharges}
                          </p>
                          <p className={classes.TotalCol}>{TotalWHT}</p>
                          <p className={classes.TotalCol}>{TotalIncomeTax}</p>
                          <p className={classes.TotalCol}>-</p>
                          <p className={classes.TotalCol}>-</p>
                        </div>
                      );
                    }
                    return (
                      <div className={classes.Row}>
                        <p className={classes.Col}>{ele["sr#"]}</p>
                        <p className={classes.Col}>{ele?.Date}</p>
                        <p className={classes.Col}>{ele["For Month"]}</p>
                        <p className={classes.Col}>{ele["Invoice#"]}</p>
                        <p className={classes.Col} style={{ width: "350px" }}>
                          {excerpt(ele?.Description)}
                        </p>
                        <p className={classes.Col}>{ele["# of Staff"]}</p>
                        <p className={classes.Col}>{ele["Invoice Amount"]}</p>
                        <p className={classes.Col}>{ele["Invoice Credited"]}</p>
                        <p className={classes.Col}>{ele?.Payout}</p>
                        <p className={classes.Col}>{ele?.Balance}</p>
                        <p className={classes.Col}>{ele["Service Charges"]}</p>
                        <p className={classes.Col}>{`-`}</p>
                        <p className={classes.Col}>{ele["Income Tax"]}</p>
                        <p className={classes.Col}>{`-`}</p>
                        <p className={classes.Col}>{ele?.Status}</p>
                      </div>
                    );
                  })}
                </>
              );
            })}
        </div>
      </page>
    </>
  );
};

export default InvoiceRegister;

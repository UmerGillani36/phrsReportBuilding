import React from "react";
import classes from "./GratuitySummary.module.css";
import { payload } from "../../payload/Gratitude";

const GratuitySummary = () => {
  //   console.log(payload.data);
  Object.keys(payload?.data).map((val) => {
    console.log(val);
    payload?.data[val].map((ele) => {
      console.log("ele", ele);
    });
    // console.log("val", val);
  });
  return (
    <>
      {Object.keys(payload?.data).map((val) => {
        return (
          <page size="A4" className={classes.Page}>
            <div className={classes.header}>
              <p className={classes.headerText}>October 25, 2022</p>
              <p className={classes.headerText}>Ref: Primehr/CONT/{`${val}`}</p>
            </div>
            <div className={classes.SecondQoute}>
              <p className={classes.SecondText}>To Whom it may concern :</p>
            </div>
            <div className={classes.MainCertifyDiv}>
              <p className={classes.certifyText}>
                This is to certify that {`${payload?.data[`${val}`][0]?.Name}`}{" "}
                bearing CNIC # {`${payload?.data[`${val}`][0]?.CNIC}`} was
                associated with Prime Human Resource Services {`Private`}{" "}
                Limited and his services were delegated to our Client{" "}
                {`${payload?.data[`${val}`][0]?.Organization}`}, From
                {` ${payload?.data[`${val}`][0]?.DOJ}`} till designated as{" "}
                <span className={classes.Bold}>{`${
                  payload?.data[`${val}`][0]?.Designation
                }`}</span>
                , It is also certified that we have submitted his contribution
                in EOBI to from his date of joining till , details are as given
                below;
              </p>
            </div>
            <div className={classes.EmployeeDetail}>
              <div className={classes.LeftDetails}>
                <p className={classes.EmpText}>Employe</p>
                <p className={classes.EmpText}>{`${val}`}</p>
                <p className={classes.EmpText}>{`${
                  payload?.data[`${val}`][0]?.Name
                }`}</p>
              </div>
              <div className={classes.RightDetails}>
                <p className={classes.EmpText}>Bank Account #</p>
              </div>
            </div>
            <div className={classes.Seperator}>
              <div className={classes.Table}>
                <table>
                  <tr>
                    <th>Sr.#</th>
                    <th>Pay Date</th>
                    <th>Salary</th>
                    <th>Expenses</th>
                    <th>Other Allowance</th>
                    <th>Gross Pay</th>
                    <th>EOBI.</th>
                    <th>Other Deduction</th>
                    <th>NetPay</th>
                  </tr>
                  {payload?.data[val].map((ele, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{ele["Pay Date"]}</td>
                        <td>{ele?.Salary}</td>
                        <td>{ele?.Expense}</td>
                        <td>{ele["Other Allowances"]}</td>
                        <td>{ele["Gross Pay"]}</td>
                        <td>{ele?.EOBI}</td>
                        <td>{ele["Other Deduction"]}</td>
                        <td>{ele["Net Pay"]}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <div className={classes.BottomDiv}>
                <p className={classes.BotomText}>
                  Yearly Employee Gratuity Summary , Invoice Reference # / ,
                </p>
              </div>
            </div>
          </page>
        );
      })}
    </>
  );
};

export default GratuitySummary;

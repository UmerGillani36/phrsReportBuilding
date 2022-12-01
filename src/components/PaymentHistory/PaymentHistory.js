import React, { useEffect, useState } from "react";
import classes from "./PaymentHistory.module.css";
import { payload } from "../../payload/PaymentHistory";
const PaymentHistory = () => {
  const [allowanceCount, setAllowanceCount] = useState(0);
  const [allowance, setAllowance] = useState([]);
  const [deductionCount, setDeductionCount] = useState(0);
  const [deduction, setDeduction] = useState([]);

  useEffect(() => {
    let allowance = [];
    let allLengths = [];
    let deduction = [];
    let dedLength = [];
    payload[0].details?.map((val) => {
      allowance.push(Object.keys(val?.Allowance));
      deduction.push(Object.keys(val?.Deduction));
    });
    if (allowance) {
      allowance.map((val) => {
        allLengths.push(val.length);
      });
    }
    if (dedLength) {
      deduction.map((val) => {
        dedLength.push(val.length);
      });
    }
    let al = Math.max(...allLengths);
    let de = Math.max(...dedLength);
    setAllowanceCount(al);
    setDeductionCount(de);

    let allowanceIndex = allLengths.indexOf(al);
    let deductionIndex = dedLength.indexOf(de);

    let allowanceToShow = allowance[allowanceIndex];
    let deductionToShow = deduction[deductionIndex];
    setAllowance(allowanceToShow);
    setDeduction(deductionToShow);
  }, []);
  const Assign = (totalAllowance, totalDeduction) => {
    if (allowanceCount !== 0) {
      for (let i = 0; i < allowanceCount; i++) {
        totalAllowance.push(0);
      }
    }
    if (deductionCount !== 0) {
      for (let i = 0; i < deductionCount; i++) {
        totalDeduction.push(0);
      }
    }
  };
  return (
    <>
      {payload &&
        payload.map((val) => {
          let totalAllowance = [];
          let totalDeduction = [];
          let netPayment = 0;
          Assign(totalAllowance, totalDeduction);
          return (
            <page size="A4" className={classes.Page}>
              <div className={classes.Header}>
                <div>
                  <h3 className={classes.MainHeading}>
                    Prime Human Resource Services {`(Private) Limited`}
                  </h3>
                </div>
                <div>
                  <p className={classes.SubHeading}>
                    Employee Detailed Payment History
                  </p>
                </div>
                <div>
                  <p className={classes.SubHeading}>
                    From Processing Date : {`From Date`} To Date : {`To Date`}
                  </p>
                </div>
              </div>
              <div className={classes.CurrentDateDiv}>
                <p className={classes.CurrentDate}>{`Current Date`}</p>
              </div>
              <div className={classes.EmployeeDetails}>
                <div className={classes.Col}>
                  <p className={classes.Head}>Employee :</p>
                  <p className={classes.Data}>
                    {val["Employee Data"]["Emp Name"]}
                  </p>
                </div>
                <div className={classes.Col}>
                  <p className={classes.Head}>City :</p>
                  <p className={classes.Data}>{val["Employee Data"]?.City}</p>
                </div>
                <div className={classes.Col}>
                  <p className={classes.Head}>Bank Account #</p>
                  <p className={classes.Data}>
                    {val["Employee Data"]["Bank Account No"]}
                  </p>
                </div>
                <div className={classes.Col}>
                  <p className={classes.Head}>Join Date :</p>
                  <p className={classes.Data}>
                    {val["Employee Data"]["Join Date"]}
                  </p>
                </div>
                <div className={classes.Col}>
                  <p className={classes.Head}>CNIC #</p>
                  <p className={classes.Data}>{val["Employee Data"]?.CNIC}</p>
                </div>
                <div className={classes.Col}>
                  <p className={classes.Head}>Birth Date :</p>
                  <p className={classes.Data}>
                    {val["Employee Data"]["Birth Date"]}
                  </p>
                </div>
                <div className={classes.Col}>
                  <p className={classes.Head}>Designation :</p>
                  <p className={classes.Data}>
                    {val["Employee Data"]?.Designation}
                  </p>
                </div>
              </div>
              <div className={classes.DetailsContainer}>
                <table>
                  <thead>
                    <tr>
                      <th colSpan={5}>PAYMENT INFORMATION</th>
                      <th colSpan={allowanceCount}>ALLOWANCES</th>
                      <th colSpan={deductionCount}>DEDUCTIONS</th>
                      <th>PAYMENT</th>
                    </tr>
                    <tr>
                      <th>Sr. #</th>
                      <th>Pay Date</th>
                      <th>Invoice #</th>
                      <th>*Emp Base</th>
                      <th>Pay Through {`(Cheque/Bank)`}</th>
                      {/* Allowance */}
                      {allowance?.map((val) => (
                        <th>{val}</th>
                      ))}

                      {/* Deduction */}
                      {deduction?.map((val) => (
                        <th>{val}</th>
                      ))}
                      {/* Payment */}
                      <th>Net Payable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {val?.details.map((ele, i) => (
                      <tr>
                        <td>{i + 1}</td>
                        {Object.values(ele["Payment Information"]).map((py) => {
                          return <td>{py}</td>;
                        })}
                        {Object.values(ele?.Allowance).map((all, ind) => {
                          let val = 0;
                          val = totalAllowance[ind];
                          console.log("val", val);
                          totalAllowance[ind] = val + all;
                          console.log("totalAllowance", totalAllowance);
                          return <td>{all}</td>;
                        })}
                        {Object.values(ele?.Deduction).map((de, ind) => {
                          let val = totalDeduction[ind];
                          totalDeduction[ind] = val + de;
                          console.log("totalDeduction", totalDeduction);
                          return <td>{de}</td>;
                        })}
                        {Object.values(ele?.Payment).map((p) => {
                          netPayment = netPayment + p;
                          return <td>{p}</td>;
                        })}
                      </tr>
                    ))}
                    <tr>
                      <td className={classes.Head} colSpan={5}>
                        Sub Total for {val["Employee Data"]["Emp Name"]}
                      </td>
                      {totalAllowance?.map((val) => (
                        <td>{val}</td>
                      ))}
                      {totalDeduction?.map((val) => (
                        <td>{val}</td>
                      ))}
                      <td>{netPayment}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </page>
          );
        })}
    </>
  );
};

export default PaymentHistory;

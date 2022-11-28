import React, { useEffect, useState } from "react";
import classes from "./PaySlip.module.css";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { testing } from "../../payload/payslip";

const PaySlip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  console.log("dataaaaaaa", data);

  let keys = testing?.data;
  let years = Object.keys(keys);
  let months = Object.keys(keys[years[0]]);

  useEffect(() => {
    let temp = [];
    years.map((year) => {
      months.map((month) => {
        for (let i = 0; i < keys[year][month].length; i++) {
          temp.push({ ...keys[year][month][i], duration: `${year}-${month}` });
          console.log("i", temp);
        }
      });
    });
    setData([...temp]);
  }, []);

  const TotalAllowances = (d) => {
    let result = 0;
    if (d) {
      Object.entries(d["PayrollData"]["allowance"]).map((val) => {
        result += val[1];
      });
    }
    return result;
  };
  const TotalDeduction = (d) => {
    let result = 0;
    if (d) {
      Object.entries(d["PayrollData"]["deduction"]).map((val) => {
        result += val[1];
      });
    }
    return result;
  };
  const NetPayment = (d) => {
    let num1 = TotalAllowances(d);
    let num2 = TotalDeduction(d);

    let result = num1 - num2;

    return result;
  };
  return (
    <>
      {data?.length > 0 &&
        data.map((d, index) => (
          <page
            size="A4"
            className={classes.Page}
            id={String(index)}
            style={{
              display: index === 0 ? "block" : "none",
              visibility: index !== 0 ? "hidden" : "visible",
            }}
          >
            <div className={classes.HeadingSection}>
              <h2 className={classes.LeftHeading}>
                Prime Human Resource Services(Private)
              </h2>
              <div className={classes.RightHeadingSection}>
                <h4 className={classes.PaySlipHeading}>PAY SLIP</h4>
                {data.length > 0 && (
                  <h6 className={classes.PaySlipDate}>
                    for the month of {d["duration"]}
                  </h6>
                )}
              </div>
            </div>
            <div className={classes.MainTableContainer}>
              <div className={classes.LeftContainer}>
                <table className={classes.EmployeeDetails}>
                  <tr className={classes.EDTableHeading}>
                    <th className={classes.EDHeading}>Particulars</th>
                    <th className={classes.EDHeading}>
                      Deputed in Engro Polymer & Chemicals Ltd.
                    </th>
                  </tr>
                  {Object.entries(d["EmployeeMaster"]).map((val) => (
                    <tr className={classes.EDTableData}>
                      <td className={classes.EDFiData}>{val[0]}</td>
                      <td className={classes.EDData}>{val[1]}</td>
                    </tr>
                  ))}
                  <tr className={classes.EDTableData}>
                    <td className={classes.EDFiData}>Account / Cheque #</td>
                    <td className={classes.EDData}>LKSJADLKASJDI123132423</td>
                  </tr>

                  <tr className={classes.EDTableData}>
                    <td className={classes.EDFiData}>Other Info.</td>
                    <td className={classes.EDData}></td>
                  </tr>
                  <tr className={classes.EDTableData}>
                    <td className={classes.EDFiData}>4230126254578954-2</td>
                    <td className={classes.EDData}></td>
                  </tr>
                </table>
                <div className={classes.NoteContianer}>
                  <h5 className={classes.Note}>
                    Now you can view your pay slip online, please visit our
                    website http://prime-hr.com/emp_login.aspx and login with
                    your CNIC # & employee code.
                  </h5>
                </div>
              </div>
              <div className={classes.EmployeePaymentTables}>
                <table className={classes.EmployeeAllowances}>
                  <tr className={classes.EATableHeading}>
                    <th className={classes.EAHeading}>Allowances</th>
                    <th className={classes.EAHeading}>(PKR)</th>
                  </tr>
                  {Object.entries(d["PayrollData"]["allowance"]).map((val) => (
                    <tr className={classes.EATableData}>
                      <td className={classes.EDFirstData}>{val[0]}</td>
                      <td className={classes.EAData}>{val[1]}</td>
                    </tr>
                  ))}
                  <tr className={classes.Total}>
                    <td className={classes.EDFirstData}>Total Allowances</td>
                    <td className={classes.EAData}>{TotalAllowances(d)}</td>
                  </tr>
                  {/* <tr className={classes.blank}>
<td className={classes.EDFirstData}></td>
<td className={classes.EAData}></td>
</tr> */}
                </table>
                <table className={classes.EmployeeDeductions}>
                  <tr className={classes.EATableHeading}>
                    <th className={classes.EAHeading}>Deductions</th>
                    <th className={classes.EAHeading}>(PKR)</th>
                  </tr>
                  {Object.entries(d["PayrollData"]["deduction"]).map((val) => (
                    <tr className={classes.EATableData}>
                      <td className={classes.EDFirstData}>{val[0]}</td>
                      <td className={classes.EAData}>{val[1]}</td>
                    </tr>
                  ))}
                  <tr className={classes.Total}>
                    <td className={classes.EDFirstData}>Total Deductions</td>
                    <td className={classes.EAData}>{TotalDeduction(d)}</td>
                  </tr>
                  <tr className={classes.Total}>
                    <td className={classes.EDFirstData}>Net Payment</td>
                    <td className={classes.EAData}>{NetPayment(d)}</td>
                  </tr>
                </table>
              </div>
            </div>
          </page>
        ))}
    </>
  );
};

export default PaySlip;

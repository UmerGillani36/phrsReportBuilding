import React from "react";
import classes from "./BankCheque.module.css";
import { payload } from "../../payload/BankCheque";
const BankCheque = () => {
  Object.keys(payload).map((val) => {
    console.log(val);
  });
  const excerpt = (str) => {
    let substr = "";
    console.log("str", str);
    if (str?.length > 30) {
      substr = str.substring(0, 30) + "...";
    }
    return substr;
  };
  return (
    <page size="A4" className={classes.Page}>
      <div className={classes.Header}>
        <div className={classes.MainHeadingDiv}>
          <h3 className={classes.MainHeading}>
            {" "}
            Prime Human Resource Services {`(Private) Limited`}
          </h3>
        </div>
        <div className={classes.SubHeadingDiv}>
          <p className={classes.SubHeading}>Bank Cheque Numbers</p>
        </div>
      </div>
      <div className={classes.Table}>
        <table>
          <tr>
            <th style={{ width: "20px" }}>Sr. #</th>
            <th>Emp. Code</th>
            <th>Employee Name</th>
            <th>Join Date</th>
            <th>City</th>
            <th>Inv #</th>
            <th> Cheque Amount</th>
            <th>Cheque #</th>
            <th>Pay Date</th>
            <th>Last Date</th>
            <th>Remarks</th>
            <th style={{ width: "350px" }}>InWords</th>
          </tr>
        </table>
        {Object.keys(payload).map((val) => (
          <>
            <div className={classes.BankHeadingDiv}>
              <h4 className={classes.BankHeading}>{val}</h4>
            </div>
            <table className={classes.BankData}>
              {payload[val].map((value, i) => (
                <tr style={{ height: "26px" }}>
                  <td style={{ width: "20px" }}>{i + 1}</td>
                  {Object.values(payload[val][i]).map((ele, index) => {
                    return (
                      <td
                        style={{
                          width: index >= 10 && "350px",
                          fontSize: index === 9 && "8px",
                        }}
                      >
                        {index === 9 ? excerpt(ele) : ele}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </table>
          </>
        ))}
      </div>
    </page>
  );
};

export default BankCheque;

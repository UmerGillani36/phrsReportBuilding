import React from "react";
import classes from "./HeadCount.module.css";
import { payload } from "../../payload/HeadCount";
const HeadCount = () => {
  return (
    <page size="A4" className={classes.Page}>
      <div className={classes.Header}>
        <p className={classes.MainHeading}>
          Prime Human Resource Services {`(Private) Limited`}
        </p>
        <p className={classes.SubHeading}>Head Count List</p>
        <div className={classes.DateDiv}>
          <p className={classes.Text}>30-Sep-2022</p>
          <p className={classes.Text}>Tuesday, October 25, 2022</p>
        </div>
      </div>
      <div className={classes.Table}>
        <table>
          <thead>
            <tr>
              <th style={{ width: "30px" }}>Sr. #</th>
              {payload && Object.keys(payload[0]).map((val) => <th>{val}</th>)}
            </tr>
          </thead>
          <tbody>
            {payload &&
              payload.map((value, i) => (
                <tr>
                  <td style={{ width: "30px" }}>{i + 1}</td>
                  {Object.values(value).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </page>
  );
};

export default HeadCount;

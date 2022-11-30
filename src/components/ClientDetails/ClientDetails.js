import React, { useEffect } from "react";
import classes from "./ClientDetails.module.css";
import { payload } from "../../payload/ClientDetails";

const ClientDetails = () => {
  console.log(payload.data);
  return (
    <page size="A4" className={classes.Page}>
      <div className={classes.Header}>
        <div className={classes.LeftContainer}>
          <h3 className={classes.Heading}>
            {" "}
            Prime Human Resource Services {`(Private) Limited`}
          </h3>
          <p className={classes.SubHeading}>EOBI Contribution List</p>
          <div className={classes.RightContainer}>
            <p className={classes.Date}>30-Sep-2022</p>
            <p className={classes.Date}>Tuesday, October 25, 2022</p>
          </div>
        </div>
      </div>
      <div className={classes.Table}>
        <table>
          <tr>
            <th>Sr. #</th>
            {Object.keys(payload?.data[0]).map((val) => {
              return <th>{val}</th>;
            })}
          </tr>
          {payload &&
            payload?.data.map((ele, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  {Object.values(payload?.data[i]).map((val) => {
                    return <td>{val}</td>;
                  })}
                </tr>
              );
            })}
        </table>
      </div>
    </page>
  );
};

export default ClientDetails;

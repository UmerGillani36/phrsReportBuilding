import React from "react";
import { testing } from "../../payload/payslip";

const Testing = () => {
  let keys = testing?.data;
  let years = Object.keys(keys);
  let months = Object.keys(keys[years[0]]);
  //   let EmployeeMaster = keys[years[0]][months[0]][0].EmployeeMaster;
  years.forEach((year, indexY) => {
    months.forEach((month, indexM) => {
      for (let i = 0; i < keys[year][month].length; i++) {
        for (let val in keys[year][month][i].EmployeeMaster) {
          console.log(keys[year][month][i].EmployeeMaster[val]);
        }
      }
    });
  });
  //   console.log(EmployeeMaster);
  return (
    <></>
    // <div>
    //   {years.forEach((indexY, year) => {
    //     months.forEach((indexM, month) => {
    //       for (let i = 0; i < month.length; i++) {
    //         console.log(
    //           "aaaaaaaaaaa",
    //           keys[years[indexY]][months[indexM]][i].EmployeeMaster
    //         );
    //       }
    //     });
    //   })}
    // </div>
  );
};

export default Testing;

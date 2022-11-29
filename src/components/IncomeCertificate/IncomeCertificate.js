import React, { useEffect, useState } from "react";
import classes from "./IncomeCertificate.module.css";
import { payload } from "../../payload/IncomeCertificatePayload";

const IncomeCertificate = () => {
  const [data, setData] = useState([]);
  //   payload.data.map((val) => {
  //     Object.entries(val).map((ele) => {
  //       se
  //     });
  //   });
  useEffect(() => {
    if (payload) {
      setData(payload?.data);
    }
  }, []);
  return (
    <>
      {data &&
        data.map((d) => (
          <page size="A4" className={classes.Page}>
            <div className={classes.MainContainer}>
              <div className={classes.Header}>
                <div className={classes.LeftHeading}>
                  <p className={classes.Text}>S No.</p>
                  <h6
                    className={classes.Input}
                    style={{ margin: "0px 40px 0px 0px" }}
                  >
                    0000
                  </h6>
                  <p className={classes.Text}>Original/Duplicate</p>
                </div>
                <div>
                  <div className={classes.RightHeading}>
                    <p className={classes.Text}>Date of issue</p>
                    <h6 className={classes.Input}>25-Oct-2022</h6>
                  </div>
                  <p
                    className={classes.Optional}
                  >{`(Amount of tax collected / deducted in figures)`}</p>
                </div>
              </div>
              <div className={classes.Second}>
                <p className={classes.TextCert}>
                  Certified that the sum of Rupees
                </p>
                <h6 className={classes.Input}>0</h6>
              </div>
              <div className={classes.FigureAmountDiv}>
                <div className={classes.FigureMainContain}>
                  <div className={classes.AlignVertical}>
                    <div className={classes.FigureAmount}>
                      <p className={classes.Figure}>Zero</p>
                    </div>
                    <div className={classes.FigureAmount}>
                      <p className={classes.Figure}>-</p>
                    </div>
                  </div>
                  <div className={classes.OptionalWordDiv}>
                    <p
                      className={classes.OptionalWords}
                    >{`(amount in words)`}</p>
                  </div>
                </div>
              </div>
              <div className={classes.UserInfo}>
                <div className={classes.LeftUserInfoHeading}>
                  <p className={classes.LeftUserInfoContent}>
                    on account of income tax has been deducted/collected from
                    {`(Name & Address of the person)`}
                  </p>
                </div>
                <div className={classes.RightInfoDiv}>
                  <div className={classes.UserInputDiv}>
                    <p className={classes.UserInput}>{d["Employee Name"]}</p>
                  </div>
                  <div className={classes.UserInputDiv}>
                    <p className={classes.UserInput}>{d["Employee Address"]}</p>
                  </div>
                  {/* <div className={classes.UserInputDiv}>
                    <p className={classes.UserInput}>gillani</p>
                  </div> */}
                  <p className={classes.UserBottomText}>
                    in case of an individual, his/her name in full and in case
                    of an association of persons / company, name and style of
                    the association of persons/company
                  </p>
                </div>
              </div>
              <div className={classes.UserAccountInfoDiv}>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>
                    having National Tax Number
                  </p>
                  <p className={classes.UserAccountInput}>-----</p>
                  <p className={classes.UserAccountNote}> {`(if any)`}</p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>
                    holder of CNIC No.
                  </p>
                  <p className={classes.UserAccountInput}>{d["CNIC No"]}</p>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(In case of an individual)`}
                  </p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>on</p>
                  <p className={classes.UserAccountInput}>---</p>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(Date of collection / deduction)`}
                  </p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>
                    Or during the period
                  </p>
                  <div className={classes.UserAccoutTimePeriodDiv}>
                    <div className={classes.DateDiv}>
                      <p className={classes.Date}>From</p>
                      <p className={classes.DateInput}>---</p>
                    </div>
                    <div className={classes.DateDiv}>
                      <p className={classes.Date}>To</p>
                      <p className={classes.DateInput}>---</p>
                    </div>
                  </div>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(Period of collection / deduction)`}
                  </p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>under section</p>
                  <p className={classes.UserAccountInput}>149</p>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(specify the section of income Tax Ordinance,2001)`}
                  </p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>On account of </p>
                  <p className={classes.UserAccountInput}>
                    Income Tax on Salary
                  </p>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(spacify nature)`}
                  </p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>vide</p>
                  <p className={classes.UserAccountInput}>-</p>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(particulars of LC, Contract etc)`}
                  </p>
                </div>
                <div className={classes.UserAccountInfo}>
                  <p className={classes.UserAccountHeading}>
                    on the value/amount of Rupee
                  </p>
                  <p className={classes.UserAccountInput}>
                    {d["Gross Salary"]}
                  </p>
                  <p className={classes.UserAccountNote}>
                    {" "}
                    {`(Gross amount on which are deducted/collected in figures)`}
                  </p>
                </div>
                <p className={classes.UserInfoBottomText}>
                  This is to further certify that the tax collected/deducted has
                  been deposited in the Federal Government Account as per the
                  following details:
                </p>
              </div>
              <div className={classes.TableContainer}>
                <table>
                  <tr>
                    <th>Date of deposit</th>
                    <th>SBP/NBP/Treasury.</th>
                    <th>Branch/City.</th>
                    <th>Account{`(Rupees)`}</th>
                    <th>Challan/Treasury No/OPR NO.</th>
                  </tr>
                  <tr>
                    <td style={{ marginRight: "20px" }}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div className={classes.CompanyTextDiv}>
                <p className={classes.CompanyText}>
                  Company / office etc. collecting/deducting the tax:
                </p>
              </div>
              <div className={classes.CompanyOverviewDiv}>
                <div className={classes.LeftDiv}>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Name</p>
                    <p className={classes.COInput}>
                      Prime Human Resource Services Pvt. Ltd
                    </p>
                  </div>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Address</p>
                    <p className={classes.COInput}>
                      Office # 111, 1st Floor, Park Towers Block 5, Clifton,
                      Karachi
                    </p>
                  </div>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>NTN{`(if any)`}</p>
                    <p className={classes.COInput}>2923579-7</p>
                  </div>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Date</p>
                    <p className={classes.COInput}>25-Oct-2022</p>
                  </div>
                </div>
                <div className={classes.RightDiv}>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Signature</p>
                    <p className={classes.COInput}>--</p>
                  </div>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Name</p>
                    <p className={classes.COInput}>Navaid Ahmed Siddiqui</p>
                  </div>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Designation</p>
                    <p className={classes.COInput}>
                      General Manager - HR Operations
                    </p>
                  </div>
                  <div className={classes.CompanyOverview}>
                    <p className={classes.COHeading}>Seal</p>
                    <p className={classes.COInput}>--</p>
                  </div>
                </div>
              </div>
              <div className={classes.LastDiv}>
                <p className={classes.LastQoute}>
                  System Generated Document, EN004 - S -Building and General
                  Maintenance {"( 22 ) - Karachi ."}
                </p>
              </div>
            </div>
          </page>
        ))}
    </>
  );
};

export default IncomeCertificate;

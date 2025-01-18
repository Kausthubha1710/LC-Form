"use client";

import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    lcNumber: "",
    dateOfIssue: "",
    expiryDate: "",
    beneficiaryDetails: "",
    currency: "",
    amount: "",
    variations: "",
    bankName: "",
    deferredPayment: "",
    reimbursingBank: "",
    shipmentsFrom: [],
    portOfLoading: [],
    portOfDischarge: "",
    placeOfFinalDestination: "",
    latestShipmentDate: "",
    descriptionOfGoods: "",
    sizeAndQuantity: "",
    specification: "",
    tolerance: "",
    quantity: "",
    quantityTolerance: "",
    pricePerMT: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (Array.isArray(formData[name])) {
      if (e.target.checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <style>
        {`
          input::placeholder,
          textarea::placeholder {
            color: black !important;
            opacity: 1 !important;
          }
        `}
      </style>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Draft LC Format as per MT 700 of UCP Latest Version
        </h1>
        <p style={styles.instructions}>
          Fill/Select appropriate fields in line with the tender terms and
          conditions.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={styles.wrapper}>
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td style={styles.cell}>27</td>
                  <td style={styles.cell}>Sequence of Total</td>
                  <td style={styles.cell}>
                    <select style={styles.select} name="sequence" onChange={handleChange}>
                      <option value="1/1">1/1</option>
                      <option value="2/2">2/2</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>40A</td>
                  <td style={styles.cell}>Type of L/C</td>
                  <td style={styles.cell}>
                    <label>
                      <input type="radio" name="type_of_lc" value="Irrevocable" onChange={handleChange} />
                      Irrevocable
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="type_of_lc"
                        value="Irrevocable & Transferable"
                        onChange={handleChange}
                      />
                      Irrevocable & Transferable
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>20</td>
                  <td style={styles.cell}>Letter of Credit Number</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="lcNumber"
                      placeholder="Enter L/C Number"
                      style={styles.input}
                      value={formData.lcNumber}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>31C</td>
                  <td style={styles.cell}>Date of Issue</td>
                  <td style={styles.cell}>
                    <input
                      type="date"
                      name="dateOfIssue"
                      style={styles.input}
                      value={formData.dateOfIssue}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>40E</td>
                  <td style={styles.cell}>Applicable Rules</td>
                  <td style={styles.cell}>
                    <textarea
                      name="applicableRules"
                      placeholder="Enter applicable rules (e.g., UCP)"
                      style={styles.textarea}
                      value={formData.applicableRules}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>31D</td>
                  <td style={styles.cell}>Date and Place of Expiry</td>
                  <td style={styles.cell}>
                    <input
                      type="date"
                      name="expiryDate"
                      style={styles.input}
                      value={formData.expiryDate}
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="text"
                      name="expiryPlace"
                      placeholder="Enter Place"
                      style={styles.input}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>50</td>
                  <td style={styles.cell}>Name and Address of the Applicant</td>
                  <td style={styles.cell}>
                    MISHRA DHATU NIGAM LIMITED <br />
                    (A Govt. Of India Enterprise)
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>59</td>
                  <td style={styles.cell}>Name and Address of the Beneficiary</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="beneficiaryDetails"
                      placeholder="Enter Beneficiary Details"
                      style={styles.input}
                      value={formData.beneficiaryDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>32B</td>
                  <td style={styles.cell}>Currency & Amount of L/C</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="currency"
                      placeholder="Enter Currency"
                      style={styles.input}
                      value={formData.currency}
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter Amount"
                      style={styles.input}
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>39A</td>
                  <td style={styles.cell}>Variations in L/C Amount or Additional Amounts Permitted</td>
                  <td style={styles.cell}>
                    <textarea
                      name="variations"
                      placeholder="Enter variations or additional amounts"
                      style={styles.textarea}
                      value={formData.variations}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>41A</td>
                  <td style={styles.cell}>Credit Available with</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="bankName"
                      placeholder="Name and Address of the Bank"
                      style={styles.input}
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Credit available by</td>
                  <td style={styles.cell}>
                    <label>
                      <input type="checkbox" name="creditAvailableBy" value="Payment" onChange={handleChange} /> Payment
                    </label>
                    <br />
                    <label>
                      <input type="checkbox" name="creditAvailableBy" value="Negotiation" onChange={handleChange} /> Negotiation
                    </label>
                    <br />
                    <label>
                      <input type="checkbox" name="creditAvailableBy" value="Acceptance" onChange={handleChange} /> Acceptance
                    </label>
                    <br />
                    <label>
                      <input type="checkbox" name="creditAvailableBy" value="Deferred Payment" onChange={handleChange} /> By Deferred Payment
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>42C</td>
                  <td style={styles.cell}>Usance of Drafts</td>
                  <td style={styles.cell}>
                    <label>
                      <input type="checkbox" name="usanceOfDrafts" value="at Sight" onChange={handleChange} /> at Sight
                    </label>
                    <br />
                    <label>
                      <input type="checkbox" name="usanceOfDrafts" value="specify" onChange={handleChange} /> (specify)
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>42B</td>
                  <td style={styles.cell}>Drafts to be drawn on</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      placeholder="Enter Bank 1"
                      style={styles.input}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Bank 2"
                      style={styles.input}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Address for Bank 1"
                      style={styles.input}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Address for Bank 2"
                      style={styles.input}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>42P</td>
                  <td style={styles.cell}>Deferred Payment, if any</td>
                  <td style={styles.cell}>
                    <textarea
                      name="deferredPayment"
                      placeholder="Enter deferred payment details"
                      style={styles.textarea}
                      value={formData.deferredPayment}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>43P</td>
                  <td style={styles.cell}>Partial Shipments</td>
                  <td style={styles.cell}>
                    <label>
                      <input
                        type="radio"
                        name="partial_shipments"
                        value="Permitted"
                        defaultChecked
                        onChange={handleChange}
                      />
                      Permitted
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="partial_shipments" value="Prohibited" onChange={handleChange} />
                      Prohibited
                    </label>
                  </td>
                </tr>

                {/* New fields added here */}
                <tr>
                  <td style={styles.cell}>44A</td>
                  <td style={styles.cell}>Shipments from</td>
                  <td style={styles.cell}>
                    <label>
                      <input
                        type="checkbox"
                        name="shipmentsFrom"
                        value="Option1"
                        onChange={handleChange}
                      />
                      Option 1
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="shipmentsFrom"
                        value="Option2"
                        onChange={handleChange}
                      />
                      Option 2
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="shipmentsFrom"
                        value="Option3"
                        onChange={handleChange}
                      />
                      Option 3
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>44E</td>
                  <td style={styles.cell}>Port of Loading / Airport of Departure</td>
                  <td style={styles.cell}>
                    <label>
                      <input
                        type="checkbox"
                        name="portOfLoading"
                        value="Nhavasheva"
                        onChange={handleChange}
                      />
                      Nhavasheva
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="portOfLoading"
                        value="Chennai"
                        onChange={handleChange}
                      />
                      Chennai
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="portOfLoading"
                        value="Hyderabad Airport, India"
                        onChange={handleChange}
                      />
                      Hyderabad Airport, India
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>44B</td>
                  <td style={styles.cell}>Place of Final Destination / For Transport</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="placeOfFinalDestination"
                      placeholder="Hyderabad, India"
                      style={styles.input}
                      value={formData.placeOfFinalDestination}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>44C</td>
                  <td style={styles.cell}>Latest Shipment Date</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="latestShipmentDate"
                      placeholder="(Shall be filled in as per the PO/Contract inline with Tender delivery condition)"
                      style={styles.input}
                      value={formData.latestShipmentDate}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>45A</td>
                  <td style={styles.cell}>Description of Goods</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="descriptionOfGoods"
                      placeholder="Description of Materials"
                      style={styles.input}
                      value={formData.descriptionOfGoods}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Size (in mm) and Quantity (in MT)</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="sizeAndQuantity"
                      placeholder="Size (in mm) and Quantity (in MT)"
                      style={styles.input}
                      value={formData.sizeAndQuantity}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Specification</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="specification"
                      placeholder="Specification"
                      style={styles.input}
                      value={formData.specification}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Tolerance</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="tolerance"
                      placeholder="Tolerance"
                      style={styles.input}
                      value={formData.tolerance}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Quantity</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Quantity"
                      style={styles.input}
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Quantity Tolerance</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="quantityTolerance"
                      placeholder="Quantity Tolerance"
                      style={styles.input}
                      value={formData.quantityTolerance}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}></td>
                  <td style={styles.cell}>Price per MT (in USD)</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="pricePerMT"
                      placeholder="Price per MT (in USD)"
                      style={styles.input}
                      value={formData.pricePerMT}
                      onChange={handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <td style={styles.cell}>71B</td>
                  <td style={styles.cell}>Charges</td>
                  <td style={styles.cell}>
                    All Bank charges incurred outside India including payment Cable charges, reimbursement charges, etc. shall be borne and paid for by the opener. All Bank charges incurred in India shall be borne and paid for by the beneficiary.
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>48</td>
                  <td style={styles.cell}>Period of Presentation</td>
                  <td style={styles.cell}>
                    Within 30 days from the date of Railway Receipt (RR)/Road consignment note/truck receipt.
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>49</td>
                  <td style={styles.cell}>Confirmation Instructions</td>
                  <td style={styles.cell}>
                    Paying Bank may add their confirmation to this Letter of Credit at the request and expense of the beneficiary and such confirmation shall also apply to any amendment(s) to this credit.
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>53A</td>
                  <td style={styles.cell}>Reimbursing Bank</td>
                  <td style={styles.cell}>
                    <input
                      type="text"
                      name="reimbursingBank"
                      placeholder="Enter Reimbursing Bank Details"
                      style={styles.input}
                      value={formData.reimbursingBank}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={styles.cell}>78</td>
                  <td style={styles.cell}>Instructions to the Paying/Accepting/Negotiating Bank</td>
                  <td style={styles.cell}>
                    Upon presentation of documents complying in all respects with the terms and conditions of this Letter of Credit, the negotiating bank is authorized to claim reimbursement from the reimbursing bank (located in New York/Europe) via SWIFT. The negotiating bank must certify that all terms and conditions have been met and that the related documents have been forwarded to us (the opening bank in Nepal) via Registered Airmail or Courier.
                    <br />
                    <br />
                    The reimbursing bank shall remit the payment in US Dollars, Euro, or any other freely exchangeable currency, as per the instructions within three working days after receipt of the SWIFT claim.
                    <br />
                    <br />
                    This Letter of Credit is subject to the Uniform Customs and Practice for Documentary Credits (2007 Revision), ICC Brochure No. 600. This telex or SWIFT message may be treated as the operative instrument.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#d2b48c",
    borderRadius: "8px",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
  },
  instructions: {
    textAlign: "center",
    fontSize: "16px",
    marginBottom: "20px",
  },
  wrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  cell: {
    padding: "8px",
    border: "1px solid #ddd",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "8px",
    background: "#b59a6e",
    borderRadius: "4px",
    color: "black",
    border: "1px solid #ddd",
  },
  select: {
    width: "100%",
    background: "#b59a6e",
    padding: "8px",
    borderRadius: "4px",
    color: "black",
    border: "1px solid #ddd",
  },
  textarea: {
    width: "100%",
    background: "#b59a6e",
    padding: "8px",
    color: "black",
    borderRadius: "4px",
    height: "80px",
    border: "1px solid #ddd",
  },
  submitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};
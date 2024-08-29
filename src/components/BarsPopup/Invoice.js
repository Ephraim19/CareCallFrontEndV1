import React, { useRef } from "react";
import "./Invoice.css";
import logo from "../Images/public/group@2x.png";
import jsPDF from "jspdf";

// Create Document Component

const Invoice = () => {
  
  const generate = () => {
    console.log("Generating PDF");
  };

  return (
    <div>
      <div className="page-1">
        <section className="group">
          <div className="content-element-parent">
            {/* <img className="content-element-icon" alt="" />

            <img className="content-element-icon1" alt="" />

            <img className="content-element-icon2" alt="" />

            <img className="content-element-icon3" alt="" /> */}

            {/* <but
              className="clip-path-group"
              loading="lazy"
              alt=""
              src="./public/clip-path-group.svg"
            /> */}

            <button className="content-element-icon4" onClick={generate} >Generate</button>
            {/* 

          <img
            class="clip-path-group1"
            alt=""
            src="./public/clip-path-group-1.svg"
          />

          <img className="content-element-icon5" alt="" />

          <img
            className="clip-path-group2"
            alt=""
            src="./public/clip-path-group-2.svg"
          />

          <img className="content-element-icon6" alt="" />

          <div className="clip-path-group3">
            <img className="group-icon" alt="" src={logo} />
          </div>
          <img className="content-element-icon7" alt="" />
        </div>
        <div className="content-element-parent">
          <img
            className="clip-path-group4"
            alt=""
            src="./public/clip-path-group-3.svg"
          />

          <img
            className="clip-path-group5"
            alt=""
            src="./public/clip-path-group-4.svg"
          />

          <img
            className="clip-path-group6"
            alt=""
            src="./public/clip-path-group-5.svg"
          />

          <img
            className="clip-path-group7"
            alt=""
            src="./public/clip-path-group-6.svg"
          />

          <img
            className="clip-path-group8"
            alt=""
            src="./public/clip-path-group-7.svg"
          />

          <img
            className="clip-path-group9"
            alt=""
            src="./public/clip-path-group-8.svg"
          />

          <img
            className="clip-path-group10"
            alt=""
            src="./public/clip-path-group-9.svg"
          />

          <img
            className="clip-path-group11"
            alt=""
            src="./public/clip-path-group-10.svg"
          />

          <img
            className="clip-path-group12"
            alt=""
            src="./public/clip-path-group-11.svg"
          />

          <img
            className="clip-path-group13"
            alt=""
            src="./public/clip-path-group-12.svg"
          />

          <img
            className="clip-path-group14"
            alt=""
            src="./public/clip-path-group-13.svg"
          />

          <img
            className="clip-path-group15"
            alt=""
            src="./public/clip-path-group-14.svg"
          />
           */}
          </div>
          <div className="invoice-header">
            <div className="i-n-v">I N V O I C E</div>
            <div className="invoice-no">Invoice No : VC360-24-986</div>
          </div>
          <div className="patient-details">
            <div className="patient-info-parent">
              <div className="patient-info">
                <div className="patient-data">
                  <div className="contact-wrapper">
                    <div className="invoice-to">Invoice To</div>
                    <div className="contact-content">
                      <div className="name-patient-name-container">
                        <span className="name">Name: </span>
                        <span className="patient-name">Patient Name</span>
                      </div>
                      <div class="name-patient-name-container">
                        <span className="name">Member No: </span>
                        <span className="patient-name">VC360018</span>
                      </div>
                      <div class="name-patient-name-container">
                        <b>Email: </b>
                        <span className="patient-name">email@gmail.com</span>
                      </div>
                      <div className="name-patient-name-container">
                        <b>Phone: </b>
                        <span className="patient-name">0712345678</span>
                      </div>
                    </div>
                  </div>
                  <div className="service-description">
                    <div className="service">Service</div>
                    <div className="description">Description</div>
                  </div>
                </div>
                <div className="invoice-details">
                  <div className="invoice-date-wrapper">
                    <div className="name-patient-name-container">
                      Invoice Date: August 28, 2024
                    </div>
                  </div>
                  <div className="company-details">
                    <div className="company-info">
                      <div className="company-fields">
                        <div className="carecall-limited">
                          Carecall Limited,
                        </div>
                      </div>
                      <div className="company-fields1">
                        <div className="th-ngong-ave">
                          5th Ngong Ave Suites,
                        </div>
                      </div>
                      <div className="th-ngong-ave">
                        Email: info@carecall.co.ke
                      </div>
                      <div className="company-fields">
                        <div className="th-ngong-ave">Phone: 0765 050 313</div>
                      </div>
                    </div>
                    <div className="company-fields">
                      <div className="amount">Amount</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-summary">
                <div className="vitalcare360">VitalCare360</div>
                <div className="subtotal-total">
                  <div className="subscription-details">
                    <div className="name-patient-name-container">
                      Annual Subscription for CDMP
                    </div>
                    <div className="health-navigation">health navigation</div>
                  </div>
                  <div className="summary-labels">
                    <div className="subtotal">Subtotal</div>
                  </div>
                  <div className="summary-labels1">
                    <div className="total">Total</div>
                  </div>
                </div>
                <div className="total-amount">
                  <div className="subtotal-value">
                    <div className="kshs-15-000">Kshs 15, 000</div>
                  </div>
                  <div className="total-value-wrapper">
                    <div className="kshs-15-000-wrapper">
                      <div className="kshs-15-0001">Kshs 15, 000</div>
                    </div>
                    <div className="kshs-15-0002">Kshs 15, 000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-method-details-parent">
              <div className="payment-method-details">
                <div className="i-n-v">Payment method :</div>
              </div>
              <div className="account-information">
                <div className="paybillacc-no">Paybill/Acc No.</div>
                <div className="account-name">Account Name</div>
              </div>
              <div className="mobile-payment">
                <div className="m-pesa-buy-goods">M-Pesa Buy Goods</div>
                <div className="payment-confirmation">
                  <div className="confirmation-message">
                    <div className="confirmation-placeholder">
                      123 - 456 - 7890
                    </div>
                  </div>
                  <div className="i-r-e">I r e n e S i m i y u</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Invoice;

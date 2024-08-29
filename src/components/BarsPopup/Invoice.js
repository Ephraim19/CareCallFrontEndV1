import React from "react";
import './Invoice.css';
// Create Document Component
const Invoice = () => (
  <body>
    <div class="page-1">
      <section class="group">
        <div class="content-element-parent">
          {/* <img class="content-element-icon" alt="" />

          <img class="content-element-icon1" alt="" />

          <img class="content-element-icon2" alt="" />

          <img class="content-element-icon3" alt="" />

          <img
            class="clip-path-group"
            loading="lazy"
            alt=""
            src="./public/clip-path-group.svg"
          />

          <img class="content-element-icon4" alt="" />

          <img
            class="clip-path-group1"
            alt=""
            src="./public/clip-path-group-1.svg"
          />

          <img class="content-element-icon5" alt="" />

          <img
            class="clip-path-group2"
            alt=""
            src="./public/clip-path-group-2.svg"
          />

          <img class="content-element-icon6" alt="" />

          <div class="clip-path-group3">
            <img class="group-icon" alt="" src="./public/group@2x.png" />
          </div>
          <img class="content-element-icon7" alt="" />
        </div>
        <div class="content-element-parent">
          <img
            class="clip-path-group4"
            alt=""
            src="./public/clip-path-group-3.svg"
          />

          <img
            class="clip-path-group5"
            alt=""
            src="./public/clip-path-group-4.svg"
          />

          <img
            class="clip-path-group6"
            alt=""
            src="./public/clip-path-group-5.svg"
          />

          <img
            class="clip-path-group7"
            alt=""
            src="./public/clip-path-group-6.svg"
          />

          <img
            class="clip-path-group8"
            alt=""
            src="./public/clip-path-group-7.svg"
          />

          <img
            class="clip-path-group9"
            alt=""
            src="./public/clip-path-group-8.svg"
          />

          <img
            class="clip-path-group10"
            alt=""
            src="./public/clip-path-group-9.svg"
          />

          <img
            class="clip-path-group11"
            alt=""
            src="./public/clip-path-group-10.svg"
          />

          <img
            class="clip-path-group12"
            alt=""
            src="./public/clip-path-group-11.svg"
          />

          <img
            class="clip-path-group13"
            alt=""
            src="./public/clip-path-group-12.svg"
          />

          <img
            class="clip-path-group14"
            alt=""
            src="./public/clip-path-group-13.svg"
          />

          <img
            class="clip-path-group15"
            alt=""
            src="./public/clip-path-group-14.svg"
          /> */}
        </div>
        <div class="invoice-header">
          <div class="i-n-v">I N V O I C E</div>
          <div class="invoice-no">Invoice No : VC360-24-986</div>
        </div>
        <div class="patient-details">
          <div class="patient-info-parent">
            <div class="patient-info">
              <div class="patient-data">
                <div class="contact-wrapper">
                  <div class="invoice-to">Invoice To</div>
                  <div class="contact-content">
                    <div class="name-patient-name-container">
                      <span class="name">Name: </span>
                      <span class="patient-name">Patient Name</span>
                    </div>
                    <div class="name-patient-name-container">
                      <span class="name">Member No: </span>
                      <span class="patient-name">VC360018</span>
                    </div>
                    <div class="name-patient-name-container">
                      <b>Email: </b>
                      <span class="patient-name">email@gmail.com</span>
                    </div>
                    <div class="name-patient-name-container">
                      <b>Phone: </b>
                      <span class="patient-name">0712345678</span>
                    </div>
                  </div>
                </div>
                <div class="service-description">
                  <div class="service">Service</div>
                  <div class="description">Description</div>
                </div>
              </div>
              <div class="invoice-details">
                <div class="invoice-date-wrapper">
                  <div class="name-patient-name-container">
                    Invoice Date: August 28, 2024
                  </div>
                </div>
                <div class="company-details">
                  <div class="company-info">
                    <div class="company-fields">
                      <div class="carecall-limited">Carecall Limited,</div>
                    </div>
                    <div class="company-fields1">
                      <div class="th-ngong-ave">5th Ngong Ave Suites,</div>
                    </div>
                    <div class="th-ngong-ave">Email: info@carecall.co.ke</div>
                    <div class="company-fields">
                      <div class="th-ngong-ave">Phone: 0765 050 313</div>
                    </div>
                  </div>
                  <div class="company-fields">
                    <div class="amount">Amount</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-summary">
              <div class="vitalcare360">VitalCare360</div>
              <div class="subtotal-total">
                <div class="subscription-details">
                  <div class="name-patient-name-container">
                    Annual Subscription for CDMP
                  </div>
                  <div class="health-navigation">health navigation</div>
                </div>
                <div class="summary-labels">
                  <div class="subtotal">Subtotal</div>
                </div>
                <div class="summary-labels1">
                  <div class="total">Total</div>
                </div>
              </div>
              <div class="total-amount">
                <div class="subtotal-value">
                  <div class="kshs-15-000">Kshs 15, 000</div>
                </div>
                <div class="total-value-wrapper">
                  <div class="kshs-15-000-wrapper">
                    <div class="kshs-15-0001">Kshs 15, 000</div>
                  </div>
                  <div class="kshs-15-0002">Kshs 15, 000</div>
                </div>
              </div>
            </div>
          </div>
          <div class="payment-method-details-parent">
            <div class="payment-method-details">
              <div class="i-n-v">Payment method :</div>
            </div>
            <div class="account-information">
              <div class="paybillacc-no">Paybill/Acc No.</div>
              <div class="account-name">Account Name</div>
            </div>
            <div class="mobile-payment">
              <div class="m-pesa-buy-goods">M-Pesa Buy Goods</div>
              <div class="payment-confirmation">
                <div class="confirmation-message">
                  <div class="confirmation-placeholder">123 - 456 - 7890</div>
                </div>
                <div class="i-r-e">I r e n e S i m i y u</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
);

export default Invoice;

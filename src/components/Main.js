import React from 'react';
import globeimage from '../capture_decran_20240318_a_14532.png';
import calendaricon from '../vector_x2.svg';

export default function Main() {
    return (
<div className='container-fluid-custom'>
  <div className="container-fluid">
    <div className="bd-placeholder-img custom-jumbotron jumbotron p-6 mt-3 p-md-3 text-white rounded mb-2 d-flex flex-column justify-content-end m-4">
      <div className="row bottom-row ml-2 mr-2">
        <div className="col-12 col-md-8 p-2 px-0 bg-light rounded mb-5 mb-md-0 ">
          <div className="content">
            <h6>
              <strong>Click here to modify the event</strong>
            </h6>
            <p>
              <strong>
                <img src={calendaricon} />
                Event date: TBD
              </strong>
            </p>
            <p>Status</p>
            <div className="breadcrumb btn-group btn-breadcrumb rounded">
              <a
                href="#"
                className="btn-custom btn btn-default selectbreadcrumb"
              >
                Draft
              </a>
              <a href="#" className="btn-custom btn btn-default">
                Under Review
              </a>
              <a href="#" className="btn-custom btn btn-default">
                Open Event
              </a>
              <a href="#" className="btn-custom btn btn-default">
                Attendance confirmed
              </a>
              <a href="#" className="btn-custom btn btn-default">
                Pending documentation
              </a>
              <a href="#" className="btn-custom btn btn-default">
                Completed
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 px-0 position-relative">
          <div className=" p-3 position-relative" style={{ height: "100%" }}>
            <div className="bg-white rounded p-3 position-absolute bottom-0 end-0">
              <button
                type="button"
                className="btn-custom btn btn-outline-primary "
              >
                <strong>UPLOAD COVER IMAGE</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row m-2 mb-5">
      <div className="col-md-3">
        <ul className="nav nav-custom flex-column">
          <li className="nav-item">
            <a
              className=" nav-custom nav-link active"
              aria-current="page"
              href="#"
            >
              EVENT DETAILS
            </a>
          </li>
          <li className="nav-item">
            <a className=" nav-custom nav-link" href="#">
              SCHEDULE &amp; ITINERARY
            </a>
          </li>
          <li className="nav-item">
            <a className=" nav-custom nav-link" href="#">
              GUESTS
            </a>
          </li>
          <li className="nav-item">
            <a className=" nav-custom nav-link" href="#">
              HISTORY &amp; COMMENTS
            </a>
          </li>
          <li className="nav-item">
            <a className=" nav-custom nav-link" href="#">
              POST EVENT SUMMARY
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-5">
        <div className=" bg-light rounded p-3 ">
          <form>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                REQUESTED BY
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  readOnly=""
                  className="custom-font-lt form-control-plaintext"
                  id="staticEmail"
                  placeholder="Jason RIPPER"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                TITLE
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  readOnly=""
                  className="custom-font-lt form-control-plaintext"
                  id="staticEmail"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                ASSOCIATE'S SEGMENT
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  readOnly=""
                  className="custom-font-lt form-control disabled"
                  id="staticEmail"
                  placeholder="Mars Global Services"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                E-MAIL
              </label>
              <div className="col-sm-8 ">
                <u>
                  <input
                    type="text"
                    readOnly=""
                    className="custom-font-lt form-control-plaintext"
                    id="staticEmail"
                    placeholder="jason.ripper@effem.com"
                  />
                </u>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                PHONE
              </label>
              <div className="col-sm-8 ">
                <div className="row">
                  <div className="col-3">
                    <select className="custom-font-lt form-control">
                      <option aria-placeholder={+91}>+91</option>
                      <option>+1</option>
                      <option>+41</option>
                    </select>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="custom-font-lt form-control"
                      id="staticEmail"
                      placeholder="Insert Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                EVENT CO-HOST NAME <embed />
                Optional
                <embed />
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control"
                  id="staticEmail"
                  placeholder="Insert a name"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                EVENT CO-HOST EMAIL <embed />
                Optional
                <embed />
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control disabled"
                  id="staticEmail"
                  placeholder="Insert an email"
                />
              </div>
            </div>
          </form>
        </div>
        <div className=" bg-light rounded p-3 mt-3">
          {/* <div class="icons-calendar-1">
  <img class="vector-1" src="../assets/vectors/vector_x2.svg" />
</div> */}
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT DATE
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control"
                id="staticEmail"
                placeholder="Pick event dates"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              IS THE EVENT DATE FLEXIBLE
            </label>
            <div className="col-sm-8 ">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="switch1"
                  name="example"
                />
                <label className="custom-control-label" htmlFor="switch1" />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-light rounded p-3 mt-3">
          <form>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                AFFILIATED SITE CODE
              </label>
              <div className="col-sm-8 ">
                <select
                  className="custom-font-lt form-control form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="" selected="" disabled="" hidden="">
                    Select a site code
                  </option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                <div className="vr-custom vr" /> PLEASE SPECIFY
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control"
                  id="staticEmail"
                  placeholder="Type something"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                COUNTRY
              </label>
              <div className="col-sm-8 ">
                <select
                  className="custom-font-lt form-control form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="" selected="" disabled="" hidden="">
                    Select a country
                  </option>
                  <option value={1}>India</option>
                  <option value={2}>United States</option>
                  <option value={3}>China</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                CITY
              </label>
              <div className="col-sm-8 ">
                <div className="row">
                  <div className="col-sm-6">
                    <select
                      className="custom-font-lt form-control form-select form-select-sm"
                      aria-label="Small select example"
                    >
                      <option value="" selected="" disabled="" hidden="">
                        Select a state
                      </option>
                      <option value={1}>Andhra Pradesh</option>
                      <option value={2}>Telangana</option>
                      <option value={3}>Delhi</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <select
                      className="custom-font-lt form-control form-select form-select-sm"
                      aria-label="Small select example"
                    >
                      <option value="" selected="" disabled="" hidden="">
                        Select a city
                      </option>
                      <option value={1}>Hyderabad</option>
                      <option value={2}>Bengaluru</option>
                      <option value={3}>Delhi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                EVENT VENUE NAME
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control"
                  id="staticEmail"
                  placeholder="Type something"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                EVENT VENUE ADDRESS
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control disabled"
                  id="staticEmail"
                  placeholder="Type something"
                />
              </div>
            </div>
          </form>
        </div>
        <div className=" bg-light rounded p-3 mt-3">
          <form>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                EVENT TYPE
              </label>
              <div className="col-sm-8 ">
                <select
                  className="custom-font-lt form-control form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="" selected="" disabled="" hidden="">
                    Select a type
                  </option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                EVENT FORMAT
              </label>
              <div className="col-sm-8 ">
                <select
                  className="custom-font-lt form-control form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="" selected="" disabled="" hidden="">
                    Select a format
                  </option>
                  <option value={1}>India</option>
                  <option value={2}>United States</option>
                  <option value={3}>China</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                <div className="vr-custom vr" />
                PLEASE SPECIFY
              </label>
              <div className="col-sm-8  ">
                <select
                  className="custom-font-lt form-control form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="" selected="" disabled="" hidden="">
                    Type something
                  </option>
                  <option value={1}>India</option>
                  <option value={2}>United States</option>
                  <option value={3}>China</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                LAST FAMILY MEMBER VISIT
              </label>
              <div className="col-sm-8 ">
                <select
                  className="custom-font-lt form-control form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option value="" selected="" disabled="" hidden="">
                    Select a range
                  </option>
                  <option value={1}>India</option>
                  <option value={2}>United States</option>
                  <option value={3}>China</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className=" bg-light rounded p-3 mt-3 mb-3">
          <form>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                ASSOCIATE(S) EXPECTED AT EVENT
              </label>
              <div className="col-sm-8">
                <div className="form-check form-check-custom rounded">
                  <div className="p-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Corporate
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Food &amp; Nutrition
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Global Services
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Multisales
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Snacking
                    </label>
                    <br />
                    <input
                      className="form-check-input-custom form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Petcare
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label-custom form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MARS Veterineray Health
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                ESTIMATED TOTAL NUMBER OF ATTENDEES
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control disabled"
                  id="staticEmail"
                  placeholder="Type an estimation"
                />
              </div>
            </div>
            <div className="form-group row mb-2">
              <label
                htmlFor="staticEmail"
                className="custom-font col-sm-4 col-form-label"
              >
                ESTIMATED MARS PETCARE ATTENDEES
              </label>
              <div className="col-sm-8 ">
                <input
                  type="text"
                  className="custom-font-lt form-control disabled"
                  defaultValue={999}
                  id="staticEmail"
                  placeholder="Type an estimation"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-4 rounded">
        {/* <div class="image-globe">

          </div> */}
        <img
          className="rounded img-fluid"
          src={globeimage}
          alt="Image description"
        />
      </div>
    </div>
  </div>
</div>

    );
}
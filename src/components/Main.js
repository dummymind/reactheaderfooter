import React from 'react';

export default function Main() {
    return (
      <div className="container-fluid">
        <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
        <div className="bd-placeholder-img custom-jumbotron jumbotron p-6 mt-3 p-md-3 text-white rounded mb-2 d-flex flex-column justify-content-end">
  <div className="row bottom-row">
    <div className="col-12 col-md-7 px-0 bg-light rounded mb-5 mb-md-0 ">
      <div className="content">
        <h6>
          <strong>Click here to modify the event</strong>
        </h6>
        <p>
          <strong>Event date: TBD</strong>
        </p>
        <p>Status</p>
        <div className="breadcrumb btn-group btn-breadcrumb rounded">
          <a href="#" className="btn btn-default selectbreadcrumb">
            Draft
          </a>
          <a href="#" className="btn btn-default">
            Under Review
          </a>
          <a href="#" className="btn btn-default">
            Open Event
          </a>
          <a href="#" className="btn btn-default">
            Attendance confirmed
          </a>
          <a href="#" className="btn btn-default">
            Pending documentation
          </a>
          <a href="#" className="btn btn-default">
            Completed
          </a>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-5 px-0 position-relative">
      <div className=" p-3 position-relative" style={{ height: "100%" }}>
        <div className="bg-white rounded p-3 position-absolute bottom-0 end-0">
          <button type="button" className="btn btn-custom btn-outline-primary ">
            <strong>UPLOAD COVER IMAGE</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    );
}
import React from 'react'

function Hero() {
  return (
    <div className=" my-5 pt-5">
    <div className="row pb-0 pe-lg-0 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-6 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
        <p className="lead fs-6">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div className="col-lg-6 py-2 px-2 overflow-hidden shadow-lg">
          <img className="rounded-3 img-fluid" src="https://picsum.photos/id/1025/600/400" alt="" width="720"/>
      </div>
    </div>
  </div>
  )
}

export default Hero
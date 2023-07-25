//start here by default

export default function About() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Lauren Miller is a designer, creator, developer, and artist. She enjoys programming primarily on the front-end, but is also in training to become a full-stack developer! Lauren sees herself becoming a UX/UI designer one day, or something at the convergence of design and technology.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/*  
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              */}
            </div>
          </div>
        </div>
      </div>

    )
 }

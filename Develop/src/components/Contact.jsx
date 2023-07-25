const Contact = () => {
    return (
        <div>
        <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Contact Me!</h2>
    
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"/></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Email</h3>
              <p>laurenmiller389@gmail.com</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"/></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Phone</h3>
              <p>203-535-9789</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"/></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Address</h3>
              <p>I ain't giving that to you !!!!</p>
            </div>
          </div>
          
          </div>
        </div>
      
      

            <div className="container mt-5">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
           
        </div>

           
          );
        };

  export default Contact;
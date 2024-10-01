export default function Home() {
  return (
    <main className="container home">
      <section className="banner section">
        <h1>WHERE INNOVATION MEETS CODE</h1>
        <p>Turning ideas into reality, one line at a time. Embrace creativity, drive technology
          and shape the future with us.
        </p>
        <button className="btn btn-primary">
          Get in touch
        </button>
      </section>

      <section className="section">
        <h2>CREATING DIGITAL SOLUTIONS TO HELP YOU GROW</h2>
        <p>Crafting Innovative and Tailored Digital Solutions Designed to Empower Your Business and Drive Sustainable Growth</p>

        <div className="row px-5">
          <div className="col-md-4 ">
            <div className="menu-box"></div>
          </div>
          <div className="col-md-4">
            <div className="menu-box"></div>
          </div>
          <div className="col-md-4">
            <div className="menu-box"></div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>CONTACT US</h2>
        <p>
          I'd love to hear from you! Whether you have a project in mind, need help with developer or
          just want to connect, feel to reach out by filling up the form below.
        </p>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <div className="col-md-12 mb-3">
                <textarea className="form-control" placeholder="Enter you message here...">
                </textarea>
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary">
                  SEND YOUR MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

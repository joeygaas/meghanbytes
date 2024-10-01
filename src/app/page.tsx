import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container home">
      <section className="banner section">
        <div className="section__content">
          <h1 className="section__heading">WHERE INNOVATION MEETS CODE</h1>
          <p className="section__sub-heading">Turning ideas into reality, one line at a time. Embrace creativity, drive technology
            and shape the future with us.
          </p>
          <button className="btn btn-primary">
            Get in touch
          </button>

          <div className="scroll-down">
            <a href='#section-1' className="scroll-down__btn">
              <p className='scroll-down__btn__text'>scroll down</p>
              <FontAwesomeIcon icon={faDownLong} />
            </a>
          </div>
        </div>
      </section>

      <section id="section-1" className="section">
        <div className="section__content">
          <h2 className="section__heading">OUR SERVICES</h2>
          <p className="section__sub-heading">Crafting Innovative and Tailored Digital Solutions Designed to Empower Your Business and Drive Sustainable Growth</p>

          <div className="row px-5">
            <div className="col-md-4 ">
              <Link href="">
                <div className="menu-box"></div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="">
                <div className="menu-box"></div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="">
                <div className="menu-box"></div>
              </Link>
            </div>
          </div>

          <div className="scroll-down">
            <a href='#section-2' className="scroll-down__btn">
              <p className='scroll-down__btn__text'>scroll down</p>
              <FontAwesomeIcon icon={faDownLong} />
            </a>
          </div>
        </div>
      </section>

      <section id="section-2" className="section">
        <div className="section__content">
          <h2 className="section__heading">CONTACT US</h2>
          <p className="section__sub-heading">
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
        </div>
      </section>
    </main>
  );
}

import { faDownLong } from "@fortawesome/free-solid-svg-icons/faDownLong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
    return (
        <main className="container about-us">
            <section className="section banner">
                <div className="section__content">
                    <h1 className="section__heading">ABOUT US</h1>
                    <p className="section__sub-heading">
                        We Empower Business with Innovation, Expertise, and a Commitment to Excellence.
                    </p>

                    <div className="scroll-down">
                        <a href='#section-1' className="scroll-down__btn">
                            <p className='scroll-down__btn__text'>scroll down</p>
                            <FontAwesomeIcon icon={faDownLong} />
                        </a>
                    </div>
                </div>
            </section>

            <section>
                {/* todo: need to make this working here */}
            </section>
        </main>
    );
}
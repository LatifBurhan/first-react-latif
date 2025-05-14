import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";

import parse from "html-react-parser";
import { tutorSection, tutorsList } from "../data/TutorsSection";
import Tutors from "../components/Tutors";
import Contact from "../components/Contact";

import { partnersSection, partnerList } from "../data/PartnersSection";
import Partners from "../components/Partners";
function Home() {
  return (
    <>
      <Navbar />
      {/* Home */}
      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
      </div>

      {/* Courses */}

      <section id="courses">
        <div className="kolom">{parse(coursesSection.content)}</div>
        <img src={coursesSection.image} />
      </section>

      {/* Tutors */}
      <section id="tutors">
        <div className="tengah">
          <div className="kolom">{parse(tutorSection.content)}</div>
          <Tutors tutorList={tutorsList} />
        </div>
      </section>

      {/* Partner */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">{parse(partnersSection.content)}</div>
          <Partners partnerList={partnerList} />
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

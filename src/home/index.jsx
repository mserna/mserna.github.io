import React, { useEffect, useState } from 'react';

// local imports
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  // States used to detect scrolling pagination
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  },[]);

  // This will handle list being updated due to pagination
  useEffect(() => {
    var offset = scrollTop;
    var windowHeight = window.innerHeight;
    var body = document.body;
    let padding = 0.75;
    let pages = ['1', '2', '3', '4'];

    pages.map((page) => {
      // console.log(offset+" > " + `( ${windowHeight} * (${page-2} + ${padding})`);
      if(offset > (windowHeight * (page - 2 + padding))) { 
        // console.log(body.classList);
        body.className = "";
        body.classList.add("page-" + page);
      }
    });
  }, [scrollTop]);
    
  return(
    <>
      <div className="main">
        <section className="page" id="page1">
          <Banner></Banner>
        </section>

        <section className="page" id="page2">
          <h1>Page 2</h1>
          <Experience></Experience>
        </section>

        <section className="page" id="page3">
          <Projects></Projects>
        </section>

        <section className="page" id="page4">
          <Contact></Contact>
        </section>
      </div>

      <ul id="pagination">
        <li><a href="#page1"></a></li>
        <li><a href="#page2"></a></li>
        <li><a href="#page3"></a></li>
        <li><a href="#page4"></a></li>
      </ul>
    </>
  )
}

export { Home };
import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

import { AppWrap, MotionWrap } from "../../wrapper";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "i am a Web Developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Frontend Development",
//     description: "i am a Frontend Developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "3D-model",
//     description: "adding 3D experience of application",
//     imgUrl: images.about03,
//   },
//   {
//     title: "web Animations",
//     description: "adding Web Animation to make experience awesome",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

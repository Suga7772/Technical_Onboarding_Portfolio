/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/goose.jpg";

const imageAltText = "a close up of a goose with yellow beak being shown from right side";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Iris Classification using KNN Algorithm",
    description:
      "Machine learning project using K- nearest neighbour algorithm to classify the iris flower species. The model is trained and tested on the Iris dataset and the accuracy of the model is calculated using the confusion matrix.",
    url: "https://github.com/Suga7772/Iris-Classification-using-KNN",
  },
  {
    title: "Fraud-Detection-using-RandomForestClassifier",
    description:
      "Created a card fraud detection model that using random forest classfiier. The model is trained and tested on a csv dataset comprising of 1200 records and the accuracy of the model is calculated using the confusion matrix and a heatmap",
    url: "https://github.com/Suga7772/Fraud-Detection-using-RandomForestClassifier",
  },
  {
    title: "Wine Quality Classification",
    description:
      "Deployed a successful numerous model based on the wine quality dataset. The model is trained and tested with various Regression, XGB classification methods with further visualisation being done using matplotlib.",
    url: "https://github.com/Suga7772/Wine_Quality_Classification",
  },
  {
    title: "Virtual Mouse using Computer Vision",
    description:
      "Implemented a virtual mouse that works on human gestures being observed using a camera and performing drag and drop, click operations on the screen.",
    url: "https://github.com/Suga7772/cv-virtual.mouse",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

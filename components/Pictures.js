import React, { Component } from "react";
import PICTURES from "../data/pictures";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { motion } from "framer-motion";

const Picture = (props) => {
  const { title, image, description, link } = props.picture;

  return (
    <Container
      style={{
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        width: 300,
        display: "inline-block",
        marginTop: -25,
        padding: 0,
      }}
    >
      <h2>{title}</h2>
      <img
        src={image}
        alt="image"
        style={{
          width: 200,
          borderRadius: 20,
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: 4,
        }}
      ></img>
      <p>{description}</p>
      <Button style={{ color: "white" }} href={link}>
        {link}
      </Button>
    </Container>
  );
};

const Pictures = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 1, duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { delay: 0.5, duration: 0.5 },
      }}
    >
      <h1 style={{ marginTop: 20 }}>Picture Gallery</h1>
      <div>
        {PICTURES.map((PICTURE) => {
          return <Picture key={PICTURE.id} picture={PICTURE} />;
        })}
      </div>
    </motion.div>
  );
};

export default Pictures;

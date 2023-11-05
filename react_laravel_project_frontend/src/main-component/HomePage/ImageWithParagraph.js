import React from "react";

function ImageWithParagraph() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1, marginRight: "30px", marginLeft: "100px" }}>
        <h1 style={{ fontWeight: "bold" }}>What is a drone?</h1>
        <br></br>
        <p>
          In simple terms, a drone is like a cool flying robot that you can
          control from the ground. It's got no pilot inside; it's all
          remote-controlled. People use drones for taking awesome aerial photos
          and videos, spying (like in the movies), delivering stuff (yes, even
          pizza!), and even helping out in emergencies. Drones are like the
          flying superheroes of the tech world!
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src="https://dji-official-fe.djicdn.com/dps/f387dfa413e61d07b729f8aaebd2e46f.png"
          alt="Sample Image"
          style={{
            //maxWidth: "100%",
            marginTop: "50px",
            height: "450px", // Adjusted image height
            width: "650px", // Adjusted image width
            animation: "bounce 2s infinite", // Slower animation
          }}
          className="bounce"
        />
      </div>
    </div>
  );
}

export default ImageWithParagraph;
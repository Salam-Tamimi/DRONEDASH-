import React, { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
    }
  }, []);

  // Inline CSS styles for the text and button
  const overlayStyles = {
    position: "absolute",
    top: "50%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  const textStyles = {
    fontSize: "28px",
    color: "white",
    // background: "rgba(0, 0, 0, 0.5)",
    // padding: "10px 20px",
    // borderRadius: "5px",
    marginBottom: "10px",
  };


  return (
    <section style={{ position: "relative" }}>
      <video ref={videoRef} width="100%" height="30%">
        <source
          src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/a86ba760-3f8c-42b4-bbd6-c7c31d79c248.webm"
          type="video/webm"
        />
      </video>
      <div style={overlayStyles}>
        <p style={textStyles}>Explore the world of drones and their uses on the <strong style={{ color:'#ff7400' }}>DroneDash</strong></p>
        <button className="theme-btn">About Us</button>
      </div>
    </section>
  );
};

export default Hero;

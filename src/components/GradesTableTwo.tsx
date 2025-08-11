import React from "react";

const ComingSoonResults = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        color: "white",
        fontFamily: "'Cairo', sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>إعلان النتائج</h1>
      <p style={{ fontSize: "1.5rem", opacity: 0.8 }}>
        قريبًا سيتم الإعلان عن النتائج، ترقبوا!
      </p>
    </div>
  );
};

export default ComingSoonResults;

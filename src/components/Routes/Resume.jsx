import { useState } from "react";

export default function Resume() {
  const [format, setFormat] = useState("standard");

  const formats = {
    standard: {
      png: "/SarahReed_resume_2025_04_10.png",
      pdf: "/SarahReed_resume_2025_04_10.pdf",
      alt: "Sarah Reed Resume - Standard Format",
    },
    fun: {
      png: "/2024_08_29_SReed_Resume.png",
      pdf: "/2024_08_29_SReed_Resume.pdf",
      alt: "Sarah Reed Resume - Fun Format",
    },
  };

  const current = formats[format];

  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="resume-buttons">
          <button onClick={() => setFormat("standard")}>Standard Format</button>
          <button onClick={() => setFormat("fun")}>Fun Format</button>
        </div>
        <a href={current.pdf} download>
          <button className="download-button">Download PDF</button>
        </a>
      </div>
      <div className="resume-image-wrapper">
        <img className="resume-image" src={current.png} alt={current.alt} />
      </div>
    </div>
  );
}

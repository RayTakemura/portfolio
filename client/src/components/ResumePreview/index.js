import "./index.css";

import React, { useState } from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import pdfFile from "../../assets/pdf/Ray Takemura 07022022.pdf";

function ResumePreview() {
  const [defaultPdfFile] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="container disappear">
      <div className="row d-flex justify-content-center">
        <div className="col-6 ">
          <div className="pdf-container">
            {defaultPdfFile && (
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={defaultPdfFile}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            )}
          </div>
          <a className="pdf-link" href={defaultPdfFile} download>
            Download the pdf
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;

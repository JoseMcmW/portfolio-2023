import React, { useState, ReactDOM } from "react";
import { saveAs } from "file-saver";
import CVFile from "../../assets/doc/cv-jose.pdf";

const CVModal = ({ onClose }) => {

  const handleDownload = () => {
    // Lógica para descargar el CV
    saveAs(
      CVFile,
      "Full Stack Web Developer Jose Centeno.pdf"
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-pharagrap">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">If you wish to download the CV please click on the download button.</h2>
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg w-22 bg-red text-white"
          >
            Download
          </button>
        </div>

        <button onClick={onClose} className="mt-4 text-sm text-gray-500 bg-red text-white w-16 h-7">
          Close
        </button>
      </div>
    </div>
  );
};

export default CVModal;

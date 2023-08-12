import React, { useState, ReactDOM } from "react";
import { saveAs } from "file-saver";

const CVModal = ({ onClose }) => {

  const handleDownload = () => {
    // Lógica para descargar el CV
    saveAs(
      "../../../public/doc/cv-jose.pdf",
      "Full Stack Web Developer Jose Centeno.pdf"
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">If you wish to download the CV please click on the download button.</h2>
        <div className="flex justify-end">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-gray-300 text-gray-700 font-pharagrap rounded-lg"
          >
            Download
          </button>
        </div>

        <button onClick={onClose} className="mt-4 text-sm text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default CVModal;

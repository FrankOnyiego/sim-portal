import React, { useEffect } from "react";

const FileViewer = ({ fileUrl, fileType }) => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const renderViewer = () => {
    switch (fileType) {
      case "pdf":
        return (
          <iframe
            src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            title="PDF Viewer"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            sandbox="allow-scripts allow-same-origin"
          />
        );
      case "image":
        return (
          <img
            src={fileUrl}
            alt="Image Preview"
            style={{ maxWidth: "100%", maxHeight: "600px", pointerEvents: "none" }}
            draggable="false"
          />
        );
      case "text":
        return (
          <iframe
            src={fileUrl}
            title="Text Viewer"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            sandbox="allow-scripts allow-same-origin"
          />
        );
      case "docx":
        return (
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`}
            title="DOCX Viewer"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        );
      default:
        return <p>Unsupported file type</p>;
    }
  };

  return (
    <div>
      <h2>Read-Only File Viewer</h2>
      {renderViewer()}
    </div>
  );
};

export default FileViewer;
import React from 'react';
import '../index.css';
const DownloadResumeButton = () => {
  const handleDownload = () => {
    const downloadUrl =
      'https://drive.google.com/file/d/1IX6sAaYUzN7diFbltiBQzYzcy4A-nh2n/view?usp=drivesdk';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'kunalresume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;

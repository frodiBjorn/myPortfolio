import styles from './DownloadBtn.module.css';

const DownloadBtn = () => {
  const handleDownload = () => {
    const fileUrl = './downloads/CV.pdf';
    console.log(fileUrl);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'CV_Fedotovsky.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles.btn} onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadBtn;

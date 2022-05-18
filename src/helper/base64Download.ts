const downloadFile = (fileName: string, fileData: string, fileFormat: string): void => {
    // todo : fileFormat 코드로 변경처리 필요
    const linkSource = `data:${fileFormat === 'pdf' ? 'application/pdf' : 'image/png'};base64,${fileData}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
    downloadLink.remove();
};

export default downloadFile;

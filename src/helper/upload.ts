import XLSX from 'xlsx';

const {
    read,
    // eslint-disable-next-line camelcase
    utils: { sheet_to_json }
} = XLSX;

const readFirstSheet = (data: any, options: XLSX.ParsingOptions): any[][] => {
    const wb: XLSX.WorkBook = read(data, options);
    const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
    return sheet_to_json(ws, { header: 1, raw: true });
};

const getHeaderRow = (sheet: { [key: string]: any }) => {
    const headers: string[] = [];
    const range = XLSX.utils.decode_range(sheet['!ref']);
    const R = range.s.r;
    // start in the first row
    for (let C = range.s.c; C <= range.e.c; C += 1) {
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        let hdr = '';
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        if (hdr !== '') {
            headers.push(hdr);
        }
    }
    return headers;
};

export const excelReaderData = (rawFile: File): FileReader => {
    // EXCEL Parser
    const reader = new FileReader();
    reader.onload = e => {
        const data = (e.target as FileReader).result;
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const header = getHeaderRow(worksheet);
        const results = XLSX.utils.sheet_to_json(worksheet);
    };
    reader.readAsArrayBuffer(rawFile);

    return reader;
};

export const uploadData = (fileName: string, rawFile: File): FormData => {
    // File Upload

    const formData: any = new FormData();

    formData.append(fileName, rawFile);

    for (const value of formData.values()) {
        // console.log('value', value);
    }

    return formData;
};

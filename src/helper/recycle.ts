import { ValueFormatterParams } from 'ag-grid-community';
import { CommonOptionType } from 'api/common/commonType';
import moment, { Moment } from 'moment';

export const numberWithCommas = (arg: number): string => {
    return arg !== undefined && arg ? arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
};
export const numberDecimal = (arg: number, rule: number): number => {
    if (arg.toString().indexOf('.') !== -1) {
        return Number(arg.toFixed(rule));
    }
    return arg;
};
export const toUnderCase = (arg: string): string => {
    const result = arg.replace(/[A-Z]/g, (upp, i, st) => {
        if (i === 0) {
            return upp.toLowerCase();
        }
        return `_${upp.toLowerCase()}`;
    });
    return result;
};
export const defaultDateFormat = (arg: string): string => {
    return arg !== undefined && arg ? moment(arg).format('YYYY.MM.DD') : '';
};

export const formatDate = (date: Moment | string): string =>
    (typeof date === 'string' ? moment(date) : date).format('yyyy-MM-DD');

export const isUsedFormatter = (params: ValueFormatterParams): string => (params.value ? '사용' : '사용안함');

export const dateFormatter = (params: ValueFormatterParams): string => formatDate(params.value);

export const enumToOptions = (arg: any): { label: string; value: any }[] => {
    const rsOptions = [];
    Object.keys(arg).map(name => {
        return rsOptions.push({ label: name, value: arg[name] });
    });
    return rsOptions;
};

export const getOptionValue = (arg, value) => {
    return arg.filter(item => item.value === value).length > 0 ? arg.filter(item => item.value === value)[0].label : '';
};

export const emptyString = arg => {
    return arg === undefined || arg === null ? '' : arg;
};

export const mapDatesToRange = (sources: string[], target: string) => item => {
    const start = item[sources[0]] || moment();
    const end = item[sources[1]] || moment();
    return { ...item, [target]: [moment(start), moment(end)] };
};

export const dataToOptions = (arg: any[], labelKey: string, valueKey: string): CommonOptionType[] => {
    const rsOptions = [];
    arg.map(item => {
        return rsOptions.push({ label: item[labelKey], value: item[valueKey] });
    });
    return rsOptions;
};

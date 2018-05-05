import {excelPath} from '../../config/consts.js';
import excelData from '../../datareading.js';

export const INCREASED_COUNTER = 'INCREASED_COUNTER';
export const AVAILABLE_DATA = 'AVAILABLE_DATA';

const dataReader = new excelData(excelPath);

export function increaseCounter() {
    return ({
        type: INCREASED_COUNTER,
        payload: ''
    });
}

export function fetchAvailableData() {
    return ({
        type: AVAILABLE_DATA,
        payload: dataReader.getSheets()
    });
}
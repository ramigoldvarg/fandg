const xlsx = require("xlsx");

function excelData(excelName) {
    this.datasource = excelName;
    this.startFrom = 1;
}

/**
 * Returns a graph of the relations, when the prop is the students and the list is everybody
 * that said him as positive
 * 
 * @param {String} wantedData F or G sheet
 * @param {hashmap} rowcolDict Dictionary for waht each col and row mean
 */
excelData.prototype.getData = function (wantedData, rowcolDict) {
    let excel = xlsx.readFile(this.datasource)
    const worksheet = excel.Sheets[wantedData];
    let graph = {};

    for (let cell in worksheet) {
        if ((worksheet[cell].v !== undefined) && (worksheet[cell].v.toUpperCase() == 'V')) {
            let coordinates = [cell.split(/\d/)[0], cell.split(/^\D*/)[1]];

            if (graph[rowcolDict.col[coordinates[0]]] === undefined) {
                graph[rowcolDict.col[coordinates[0]]] = [];
            }

            graph[rowcolDict.col[coordinates[0]]].push(rowcolDict.row[coordinates[1]]);
        }
    }

    return graph;
}

excelData.prototype.getDictionary = function(sheet) {
    let hashmap = {};
    const workbook = xlsx.readFile(this.datasource).Sheets[sheet];
    const range = xlsx.utils.decode_range(workbook["!ref"]);
    hashmap["row"] = {};
    hashmap["col"] = {};

    for (let row = this.startFrom; row <= range.e.r; row++) {
        hashmap["row"][xlsx.utils.encode_row(row)] = workbook[xlsx.utils.encode_cell({r: row, c:0})].v;
    }

    for (let col = this.startFrom; col <= range.e.c; col++) {
        hashmap["col"][xlsx.utils.encode_col(col)] = workbook[xlsx.utils.encode_cell({r: 0, c:col})].v;
    }

    return hashmap
}

excelData.prototype.getSheets = function() {
    return xlsx.readFile(this.datasource).SheetNames;
}

module.exports = excelData;
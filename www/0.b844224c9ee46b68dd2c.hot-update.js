exports.id = 0;
exports.modules = {

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar xlsx = __webpack_require__(230);\n\nfunction excelData(excelName) {\n    this.datasource = excelName;\n    this.startFrom = 1;\n}\n\n/**\r\n * Returns a graph of the relations, when the prop is the students and the list is everybody\r\n * that said him as positive\r\n * \r\n * @param {String} wantedData F or G sheet\r\n * @param {hashmap} rowcolDict Dictionary for waht each col and row mean\r\n */\nexcelData.prototype.getData = function (wantedData, rowcolDict) {\n    var excel = xlsx.readFile(this.datasource);\n    var worksheet = excel.Sheets[wantedData];\n    var graph = {};\n\n    for (var cell in worksheet) {\n        if (worksheet[cell].v !== undefined && worksheet[cell].v.toUpperCase() == 'V') {\n            var coordinates = [cell.split(/\\d/)[0], cell.split(/^\\D*/)[1]];\n\n            if (graph[rowcolDict.col[coordinates[0]]] === undefined) {\n                graph[rowcolDict.col[coordinates[0]]] = [];\n            }\n\n            graph[rowcolDict.col[coordinates[0]]].push(rowcolDict.row[coordinates[1]]);\n        }\n    }\n\n    return graph;\n};\n\nexcelData.prototype.getDictionary = function (sheet) {\n    var hashmap = {};\n    var workbook = xlsx.readFile(this.datasource).Sheets[sheet];\n    var range = xlsx.utils.decode_range(workbook[\"!ref\"]);\n    hashmap[\"row\"] = {};\n    hashmap[\"col\"] = {};\n\n    for (var row = this.startFrom; row <= range.e.r; row++) {\n        hashmap[\"row\"][xlsx.utils.encode_row(row)] = workbook[xlsx.utils.encode_cell({ r: row, c: 0 })].v;\n    }\n\n    for (var col = this.startFrom; col <= range.e.c; col++) {\n        hashmap[\"col\"][xlsx.utils.encode_col(col)] = workbook[xlsx.utils.encode_cell({ r: 0, c: col })].v;\n    }\n\n    return hashmap;\n};\n\nexcelData.prototype.getSheets = function () {\n    return xlsx.readFile(this.datasource).SheetNames;\n};\n\nmodule.exports = excelData;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZGF0YXJlYWRpbmcuanM/ZWYyMCJdLCJuYW1lcyI6WyJ4bHN4IiwicmVxdWlyZSIsImV4Y2VsRGF0YSIsImV4Y2VsTmFtZSIsImRhdGFzb3VyY2UiLCJzdGFydEZyb20iLCJwcm90b3R5cGUiLCJnZXREYXRhIiwid2FudGVkRGF0YSIsInJvd2NvbERpY3QiLCJleGNlbCIsInJlYWRGaWxlIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiZ3JhcGgiLCJjZWxsIiwidiIsInVuZGVmaW5lZCIsInRvVXBwZXJDYXNlIiwiY29vcmRpbmF0ZXMiLCJzcGxpdCIsImNvbCIsInB1c2giLCJyb3ciLCJnZXREaWN0aW9uYXJ5Iiwic2hlZXQiLCJoYXNobWFwIiwid29ya2Jvb2siLCJyYW5nZSIsInV0aWxzIiwiZGVjb2RlX3JhbmdlIiwiZSIsInIiLCJlbmNvZGVfcm93IiwiZW5jb2RlX2NlbGwiLCJjIiwiZW5jb2RlX2NvbCIsImdldFNoZWV0cyIsIlNoZWV0TmFtZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sbUJBQUFDLENBQVEsR0FBUixDQUFiOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQzFCLFNBQUtDLFVBQUwsR0FBa0JELFNBQWxCO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixDQUFqQjtBQUNIOztBQUVEOzs7Ozs7O0FBT0FILFVBQVVJLFNBQVYsQ0FBb0JDLE9BQXBCLEdBQThCLFVBQVVDLFVBQVYsRUFBc0JDLFVBQXRCLEVBQWtDO0FBQzVELFFBQUlDLFFBQVFWLEtBQUtXLFFBQUwsQ0FBYyxLQUFLUCxVQUFuQixDQUFaO0FBQ0EsUUFBTVEsWUFBWUYsTUFBTUcsTUFBTixDQUFhTCxVQUFiLENBQWxCO0FBQ0EsUUFBSU0sUUFBUSxFQUFaOztBQUVBLFNBQUssSUFBSUMsSUFBVCxJQUFpQkgsU0FBakIsRUFBNEI7QUFDeEIsWUFBS0EsVUFBVUcsSUFBVixFQUFnQkMsQ0FBaEIsS0FBc0JDLFNBQXZCLElBQXNDTCxVQUFVRyxJQUFWLEVBQWdCQyxDQUFoQixDQUFrQkUsV0FBbEIsTUFBbUMsR0FBN0UsRUFBbUY7QUFDL0UsZ0JBQUlDLGNBQWMsQ0FBQ0osS0FBS0ssS0FBTCxDQUFXLElBQVgsRUFBaUIsQ0FBakIsQ0FBRCxFQUFzQkwsS0FBS0ssS0FBTCxDQUFXLE1BQVgsRUFBbUIsQ0FBbkIsQ0FBdEIsQ0FBbEI7O0FBRUEsZ0JBQUlOLE1BQU1MLFdBQVdZLEdBQVgsQ0FBZUYsWUFBWSxDQUFaLENBQWYsQ0FBTixNQUEwQ0YsU0FBOUMsRUFBeUQ7QUFDckRILHNCQUFNTCxXQUFXWSxHQUFYLENBQWVGLFlBQVksQ0FBWixDQUFmLENBQU4sSUFBd0MsRUFBeEM7QUFDSDs7QUFFREwsa0JBQU1MLFdBQVdZLEdBQVgsQ0FBZUYsWUFBWSxDQUFaLENBQWYsQ0FBTixFQUFzQ0csSUFBdEMsQ0FBMkNiLFdBQVdjLEdBQVgsQ0FBZUosWUFBWSxDQUFaLENBQWYsQ0FBM0M7QUFDSDtBQUNKOztBQUVELFdBQU9MLEtBQVA7QUFDSCxDQWxCRDs7QUFvQkFaLFVBQVVJLFNBQVYsQ0FBb0JrQixhQUFwQixHQUFvQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2hELFFBQUlDLFVBQVUsRUFBZDtBQUNBLFFBQU1DLFdBQVczQixLQUFLVyxRQUFMLENBQWMsS0FBS1AsVUFBbkIsRUFBK0JTLE1BQS9CLENBQXNDWSxLQUF0QyxDQUFqQjtBQUNBLFFBQU1HLFFBQVE1QixLQUFLNkIsS0FBTCxDQUFXQyxZQUFYLENBQXdCSCxTQUFTLE1BQVQsQ0FBeEIsQ0FBZDtBQUNBRCxZQUFRLEtBQVIsSUFBaUIsRUFBakI7QUFDQUEsWUFBUSxLQUFSLElBQWlCLEVBQWpCOztBQUVBLFNBQUssSUFBSUgsTUFBTSxLQUFLbEIsU0FBcEIsRUFBK0JrQixPQUFPSyxNQUFNRyxDQUFOLENBQVFDLENBQTlDLEVBQWlEVCxLQUFqRCxFQUF3RDtBQUNwREcsZ0JBQVEsS0FBUixFQUFlMUIsS0FBSzZCLEtBQUwsQ0FBV0ksVUFBWCxDQUFzQlYsR0FBdEIsQ0FBZixJQUE2Q0ksU0FBUzNCLEtBQUs2QixLQUFMLENBQVdLLFdBQVgsQ0FBdUIsRUFBQ0YsR0FBR1QsR0FBSixFQUFTWSxHQUFFLENBQVgsRUFBdkIsQ0FBVCxFQUFnRG5CLENBQTdGO0FBQ0g7O0FBRUQsU0FBSyxJQUFJSyxNQUFNLEtBQUtoQixTQUFwQixFQUErQmdCLE9BQU9PLE1BQU1HLENBQU4sQ0FBUUksQ0FBOUMsRUFBaURkLEtBQWpELEVBQXdEO0FBQ3BESyxnQkFBUSxLQUFSLEVBQWUxQixLQUFLNkIsS0FBTCxDQUFXTyxVQUFYLENBQXNCZixHQUF0QixDQUFmLElBQTZDTSxTQUFTM0IsS0FBSzZCLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QixFQUFDRixHQUFHLENBQUosRUFBT0csR0FBRWQsR0FBVCxFQUF2QixDQUFULEVBQWdETCxDQUE3RjtBQUNIOztBQUVELFdBQU9VLE9BQVA7QUFDSCxDQWhCRDs7QUFrQkF4QixVQUFVSSxTQUFWLENBQW9CK0IsU0FBcEIsR0FBZ0MsWUFBVztBQUN2QyxXQUFPckMsS0FBS1csUUFBTCxDQUFjLEtBQUtQLFVBQW5CLEVBQStCa0MsVUFBdEM7QUFDSCxDQUZEOztBQUlBQyxPQUFPQyxPQUFQLEdBQWlCdEMsU0FBakIiLCJmaWxlIjoiMjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeGxzeCA9IHJlcXVpcmUoXCJ4bHN4XCIpO1xyXG5cclxuZnVuY3Rpb24gZXhjZWxEYXRhKGV4Y2VsTmFtZSkge1xyXG4gICAgdGhpcy5kYXRhc291cmNlID0gZXhjZWxOYW1lO1xyXG4gICAgdGhpcy5zdGFydEZyb20gPSAxO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGdyYXBoIG9mIHRoZSByZWxhdGlvbnMsIHdoZW4gdGhlIHByb3AgaXMgdGhlIHN0dWRlbnRzIGFuZCB0aGUgbGlzdCBpcyBldmVyeWJvZHlcclxuICogdGhhdCBzYWlkIGhpbSBhcyBwb3NpdGl2ZVxyXG4gKiBcclxuICogQHBhcmFtIHtTdHJpbmd9IHdhbnRlZERhdGEgRiBvciBHIHNoZWV0XHJcbiAqIEBwYXJhbSB7aGFzaG1hcH0gcm93Y29sRGljdCBEaWN0aW9uYXJ5IGZvciB3YWh0IGVhY2ggY29sIGFuZCByb3cgbWVhblxyXG4gKi9cclxuZXhjZWxEYXRhLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKHdhbnRlZERhdGEsIHJvd2NvbERpY3QpIHtcclxuICAgIGxldCBleGNlbCA9IHhsc3gucmVhZEZpbGUodGhpcy5kYXRhc291cmNlKVxyXG4gICAgY29uc3Qgd29ya3NoZWV0ID0gZXhjZWwuU2hlZXRzW3dhbnRlZERhdGFdO1xyXG4gICAgbGV0IGdyYXBoID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgY2VsbCBpbiB3b3Jrc2hlZXQpIHtcclxuICAgICAgICBpZiAoKHdvcmtzaGVldFtjZWxsXS52ICE9PSB1bmRlZmluZWQpICYmICh3b3Jrc2hlZXRbY2VsbF0udi50b1VwcGVyQ2FzZSgpID09ICdWJykpIHtcclxuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW2NlbGwuc3BsaXQoL1xcZC8pWzBdLCBjZWxsLnNwbGl0KC9eXFxEKi8pWzFdXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncmFwaFtyb3djb2xEaWN0LmNvbFtjb29yZGluYXRlc1swXV1dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGdyYXBoW3Jvd2NvbERpY3QuY29sW2Nvb3JkaW5hdGVzWzBdXV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ3JhcGhbcm93Y29sRGljdC5jb2xbY29vcmRpbmF0ZXNbMF1dXS5wdXNoKHJvd2NvbERpY3Qucm93W2Nvb3JkaW5hdGVzWzFdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncmFwaDtcclxufVxyXG5cclxuZXhjZWxEYXRhLnByb3RvdHlwZS5nZXREaWN0aW9uYXJ5ID0gZnVuY3Rpb24oc2hlZXQpIHtcclxuICAgIGxldCBoYXNobWFwID0ge307XHJcbiAgICBjb25zdCB3b3JrYm9vayA9IHhsc3gucmVhZEZpbGUodGhpcy5kYXRhc291cmNlKS5TaGVldHNbc2hlZXRdO1xyXG4gICAgY29uc3QgcmFuZ2UgPSB4bHN4LnV0aWxzLmRlY29kZV9yYW5nZSh3b3JrYm9va1tcIiFyZWZcIl0pO1xyXG4gICAgaGFzaG1hcFtcInJvd1wiXSA9IHt9O1xyXG4gICAgaGFzaG1hcFtcImNvbFwiXSA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IHJvdyA9IHRoaXMuc3RhcnRGcm9tOyByb3cgPD0gcmFuZ2UuZS5yOyByb3crKykge1xyXG4gICAgICAgIGhhc2htYXBbXCJyb3dcIl1beGxzeC51dGlscy5lbmNvZGVfcm93KHJvdyldID0gd29ya2Jvb2tbeGxzeC51dGlscy5lbmNvZGVfY2VsbCh7cjogcm93LCBjOjB9KV0udjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjb2wgPSB0aGlzLnN0YXJ0RnJvbTsgY29sIDw9IHJhbmdlLmUuYzsgY29sKyspIHtcclxuICAgICAgICBoYXNobWFwW1wiY29sXCJdW3hsc3gudXRpbHMuZW5jb2RlX2NvbChjb2wpXSA9IHdvcmtib29rW3hsc3gudXRpbHMuZW5jb2RlX2NlbGwoe3I6IDAsIGM6Y29sfSldLnY7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc2htYXBcclxufVxyXG5cclxuZXhjZWxEYXRhLnByb3RvdHlwZS5nZXRTaGVldHMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB4bHN4LnJlYWRGaWxlKHRoaXMuZGF0YXNvdXJjZSkuU2hlZXROYW1lcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleGNlbERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2RhdGFyZWFkaW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///229\n");

/***/ })

};
import ExcelJS from "exceljs";
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import jspdf-autotable

const convertToXLSX = async (ReportName, extension) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");
  const element = document.getElementsByClassName("mainconts")[0];
  worksheet.properties.defaultRowHeight = 25;
  

  const headerRow = [];
  const tableHeaderCells = element.querySelectorAll("thead tr th");
  tableHeaderCells.forEach((cell) => {
    headerRow.push(cell.textContent.trim());
  });

  let headerRowObject = worksheet.addRow(headerRow);
  headerRowObject.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFF" } };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "2F75B5" },
    };
    cell.border = { top: { style: "thin" }, bottom: { style: "thin" } };
  });

  const tableRows = element.querySelectorAll("tbody tr");
  tableRows.forEach((htmlRow) => {
    const rowData = [];
    const tableCells = htmlRow.querySelectorAll("td");
    tableCells.forEach((cell) => {
      rowData.push(cell.textContent.trim());
    });
    worksheet.addRow(rowData);
  });

  const columnMaxContentLengths = Array.from(
    { length: headerRow.length },
    () => 0
  );

  worksheet.eachRow((row, rowNumber) => {
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      cell.alignment = { horizontal: "center", vertical: "middle" };
      const contentLength = cell.value ? cell.value.toString().length : 0;
      columnMaxContentLengths[colNumber - 1] = Math.max(
        columnMaxContentLengths[colNumber - 1],
        contentLength
      );
    });
  });

  columnMaxContentLengths.forEach((maxContentLength, colNumber) => {
    worksheet.getColumn(colNumber + 1).width = maxContentLength + 2;
  });

  await workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, extension === 'xlsx' ? `${ReportName}.xlsx` : `${ReportName}.csv`);
  });
};

const convertToPDF = async (ReportName) => {
  // const element = document.getElementsByClassName("mainconts")[0];
  const pdf = new jsPDF();
//   const contentDiv = element.querySelector(".content-report");
//   const contentHTML = contentDiv.innerText;
//   pdf.text(contentHTML, 20, 20);
//   const margin = 0;
//   const tableStartY = margin + contentDiv.clientHeight - 10;
  pdf.autoTable({ html: "#xtable", startY: 20 });
  pdf.save(`${ReportName}.pdf`);
};

const saveAs = (blob, filename) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};
export { convertToXLSX, convertToPDF };

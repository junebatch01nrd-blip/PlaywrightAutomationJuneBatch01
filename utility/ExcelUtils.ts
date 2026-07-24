import XLSX from 'xlsx';


export class ExelUtils{


static getData(filepath:string, sheetname:string, rownumber:number){

const workbook = XLSX.readFile(filepath);
const worksheet= workbook.Sheets[sheetname];

const data: any = XLSX.utils.sheet_to_json(worksheet);

return data[rownumber];


}  

 // Reusable write method - caller decides the file path and sheet name
  static writeEmployeeData(
    filepath: string,
    sheetname: string,
    firstName: string,
    lastName: string,
    employeeId: string
  ) {
    const workbook = XLSX.readFile(filepath);
    const worksheet = workbook.Sheets[sheetname];

    const data: any[] = XLSX.utils.sheet_to_json(worksheet);

    data.push({
      FirstName: firstName,
      LastName: lastName,
      EmployeeId: employeeId
    });

    const updatedSheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets[sheetname] = updatedSheet;

    XLSX.writeFile(workbook, filepath);
  }

}
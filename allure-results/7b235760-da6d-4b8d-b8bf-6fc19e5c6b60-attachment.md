# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> inValid login
- Location: tests\login.spec.ts:23:1

# Error details

```
TypeError: XLSX.readFile is not a function
```

# Test source

```ts
  1  | import * as XLSX from 'xlsx';
  2  | 
  3  | 
  4  | export class ExcelUtils{
  5  | 
  6  | 
  7  | static getData(filepath:string, sheetname:string, rownumber:number){
  8  | 
> 9  |     const workbook = XLSX.readFile(filepath);
     |                           ^ TypeError: XLSX.readFile is not a function
  10 |     const worksheet = workbook.Sheets[sheetname];
  11 | 
  12 |     const data:any = XLSX.utils.sheet_to_json(worksheet);
  13 | 
  14 |     return data[rownumber]; 
  15 | 
  16 | 
  17 | }
  18 | 
  19 | 
  20 | }
```
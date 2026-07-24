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
  3  | console.log("XLSX =", XLSX);
  4  | console.log("Keys =", Object.keys(XLSX));
  5  | console.log("readFile =", XLSX.readFile);
  6  | console.log("typeof readFile =", typeof XLSX.readFile);
  7  | 
  8  | export class ExcelUtils {
  9  | 
  10 |     static getData(filepath: string, sheetname: string, rownumber: number) {
  11 | 
> 12 |         const workbook = XLSX.readFile(filepath);
     |                               ^ TypeError: XLSX.readFile is not a function
  13 | 
  14 |         const worksheet = workbook.Sheets[sheetname];
  15 | 
  16 |         const data: any[] = XLSX.utils.sheet_to_json(worksheet);
  17 | 
  18 |         return data[rownumber];
  19 |     }
  20 | 
  21 | }
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> inValid login
- Location: tests\login.spec.ts:23:5

# Error details

```
Error: ENOENT: no such file or directory, open 'D:\PlaywrightSetup\PlaywrightAutomation_1June2026_Batch\Playwright_Automation\testData\credentials.xlsx'
```

# Test source

```ts
  1  | import * as XLSX from 'xlsx';
  2  | 
  3  | 
  4  | export class ExcelUtils {
  5  | 
  6  |     static getData(filepath: string, sheetname: string, rownumber: number) {
  7  | 
> 8  |         const workbook = XLSX.readFile(filepath);
     |                               ^ Error: ENOENT: no such file or directory, open 'D:\PlaywrightSetup\PlaywrightAutomation_1June2026_Batch\Playwright_Automation\testData\credentials.xlsx'
  9  | 
  10 |         const worksheet = workbook.Sheets[sheetname];
  11 | 
  12 |         const data: any[] = XLSX.utils.sheet_to_json(worksheet);
  13 | 
  14 |         return data[rownumber];
  15 |     }
  16 | 
  17 | }
```
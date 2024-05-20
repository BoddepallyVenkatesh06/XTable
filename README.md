# XTable

XTable is a powerful and flexible data table library for web applications. It is designed to handle large datasets efficiently while providing a user-friendly interface with a wide range of customization options.

## Table of Contents 📚

- [Introduction](#introduction)
- [Features](#features)
- [Screenshot](#screenshot)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Introduction🚀

XTable is designed to simplify the process of displaying and managing data in web applications. With features like sorting, filtering, pagination, and more, it is an essential tool for developers who need to present large amounts of data in an organized and efficient manner.

## Features🛠️

- **Sorting**: Easily sort data by any column.
- **Filtering**: Apply filters to columns to find specific data.
- **Pagination**: Handle large datasets with built-in pagination.
- **Customizable**: Highly customizable to fit your application's design.
- **Responsive Design**: Works seamlessly on all devices.
- **Editable Cells**: Allow inline editing of table data.
- **Export Data**: Export table data to CSV or Excel.

## Screenshot📷

![XTable App](https://github.com/BoddepallyVenkatesh06/XTable/blob/main/Screenshot_XTable.png)

## Getting Started🎯

### Prerequisites📋

Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)

### Installation⚙️

1. Clone the repository:

```bash
git clone https://github.com/BoddepallyVenkatesh06/XTable.git
cd xtable
```

2. Install dependencies:

```bash
npm install
```

## Usage📈

To start the development server, run:

```bash
npm start
```

This will start the application in development mode at `http://localhost:3000`.

## API Reference🔌

### Initialize Table

- **Method:** `initializeTable`
- **Parameters:**
  - `columns` (array, required): Array of column definitions.
  - `data` (array, required): Array of data objects.

- **Example:**

```javascript
import { initializeTable } from 'xtable';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'Email', accessor: 'email' },
];

const data = [
  { name: 'John Doe', age: 28, email: 'john@example.com' },
  { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
];

initializeTable(columns, data);
```

### Sort Data

- **Method:** `sortData`
- **Parameters:**
  - `column` (string, required): Column accessor to sort by.
  - `order` (string, optional): Sort order, either 'asc' or 'desc'.

- **Example:**

```javascript
sortData('name', 'asc');
```

### Filter Data

- **Method:** `filterData`
- **Parameters:**
  - `column` (string, required): Column accessor to filter by.
  - `value` (string, required): Value to filter for.

- **Example:**

```javascript
filterData('email', 'example.com');
```

### Paginate Data

- **Method:** `paginateData`
- **Parameters:**
  - `page` (number, required): Page number to display.
  - `pageSize` (number, required): Number of rows per page.

- **Example:**

```javascript
paginateData(1, 10);
```

## Contributing❤️

Contributions are welcome! If you'd like to contribute to the XTable project, please follow these steps:

1. Fork the project.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License📝

```
MIT License

© 2024 Venky Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

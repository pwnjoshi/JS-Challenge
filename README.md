# JS-Challenge

[![Node.js CI](https://github.com/pwnjoshi/JS-Challenge/actions/workflows/nodejs.yml/badge.svg)](https://github.com/pwnjoshi/JS-Challenge/actions/workflows/nodejs.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A curated collection of small JavaScript exercises and examples designed to help learners practice core JavaScript concepts. The repository contains bite-sized files covering variables, data types, string operations, and other fundamental topics.

---

## Table of Contents

- [About](#about)
- [Highlights](#highlights)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

This repo is aimed at beginners and intermediate developers who want to practice JavaScript fundamentals through small, focused examples. Each file demonstrates a single idea or language feature with commented explanations.

## Highlights

- Clear, focused examples (one concept per file)
- Lightweight: no external dependencies required
- Good for self-study, workshops, or pairing sessions

## Getting Started

1. Clone the repository

	```bash
	git clone https://github.com/pwnjoshi/JS-Challenge.git
	cd JS-Challenge
	```

2. Open the folder in your editor (VS Code recommended).
3. Run examples with Node.js (recommended v14+):

	```bash
	node 01_basics/05_strings.js
	```

Note: These are plain JavaScript files — no build step required.

## Project Structure

```
README.md
01_basics/
  01_variables.js
  02_dataTypes.js
  03_conversionOperation.js
  04_comparision.js
  05_strings.js
  datatypes-summary.js
```

Files are organized by chapters (folders) and each file is a standalone example.

## Usage

Open any file and run it with Node.js as shown above. Example:

```bash
node 01_basics/05_strings.js
```

Read comments inside files for explanations and suggested modifications to try.

## Development

This repository intentionally avoids extra tooling so learners can focus on language features. If you'd like to add automated checks or a linter, consider adding:

- a `package.json`
- an ESLint configuration
- GitHub Actions for CI

## Testing

No automated tests are included by default. To add tests, initialize a `package.json` and add a test runner (e.g., Jest) and create a `tests/` folder.

## Contributing

Contributions are welcome. If you want to add examples or improve explanations:

1. Fork the repository
2. Create a branch for your change
3. Make clear, focused commits (one concept per file)
4. Open a pull request describing the change

Please keep examples small and well-commented.

## License

This repository is provided under the MIT License. See the `LICENSE` file for details (if present).

## Contact

For questions or suggestions, open an issue or contact the repository owner.

# Changelog

Headlines: Added, Changed, Deprecated, Removed, Fixed, Security

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.4] - 2025-10-28

### Changed

- Improved plain text pipeline to operate on final HTML
- Migrated from pnpm to bun as package manager
- Migrated from husky to simple-git-hooks for pre-commit hooks
- Improved Vite configuration
- Improved pre-commit hook setup
- Updated GitHub Actions workflow
- Added missing tests
- General maintenance & improvements

### Fixed

- Fixed local image/icon paths issue during development
- Fixed deprecated `base` usage, now using `resolve` instead
- Fixed OWA attribute handling to only pass valid values

## [0.3.3] - 2025-06-18

### Changed

- SailKit now lives in the official [SailKit organization on GitHub](https://github.com/sailkit)
- Documentation website was extracted from the package project and now lives [in a separate repository](https://github.com/sailkit/sailkit.xyz)

### Added

- Pre-commit linting & testing (lint-staged, husky)
- CI/CD pipeline (GitHub Actions)

## [0.3.2] - 2025-06-17

### Changed

- Updated dependencies

## [0.3.1] - 2025-06-17

### Changed

- General maintenance & improvements

## [0.3.0] - 2025-04-25

### Added

- New object-based `Head` styles API for better readability, flexibility and type safety
- Custom error handling infrastructure
- Custom logging for better DX and debugging
- Formatting utilities for MJML validation errors

### Changed

- Updated and improved documentation
- Improved tests
- Updated dependencies

## [0.2.3] - 2025-04-19

### Added

- Documentation website application is now part of the package repository

## [0.2.2] - 2025-02-23

### Fixed

- Fixed local image/icon paths issue during development

### Changed

- General maintenance

## [0.2.0] - 2025-02-08

### Added

- new theming API 🎨:
  - `createTheme` utility for defining reusable themes
  - `theme` prop for applying themes to the `Head` component

### Changed

- `Head` styles prop got a new structure for better readability, flexibility and type safety
- Improved internal code structure and formatting consistency
- General maintenance & improvements

## [0.1.12] - 2025-02-03

### Changed

- Linting & formatting

## [0.1.11] - 2025-02-03

### Added

- `Head` component now accepts a `Raw` component as a child (useful for injecting custom meta tags)

### Changed

- General maintenance & improvements

## [0.1.10] - 2024-12-27

### Changed

- Updated README to include a link to the new SailKit documentation website
- Updated homepage URL

### Removed

- Removed detailed documentation from README in favor of the new SailKit documentation website

## [0.1.9] - 2024-12-27

### Added

- Component props conversion tests

### Changed

- Refactored JSDoc annotations

## [0.1.8] - 2024-12-25

### Added

- HTML output minification API

### Changed

- Updated dependencies
- Refactored dev/prod dependencies
- Updated documentation

## [0.1.7] - 2024-12-24

### Removed

- Removed HTML output minification API

## [0.1.5] - 2024-12-24

## [0.1.6] - 2024-12-24

### Changed

- Infrastructure: htmlnano instead of html-minifier

## [0.1.5] - 2024-12-24

### Changed

- Infrastructure: added `mjml` & `html-minifier` as peer dependecies (temp)

## [0.1.4] - 2024-12-24

### Fixed

- Fixed ESM Compatibility issues

## [0.1.3] - 2024-12-23

### Changed

- Reverted dynamic import for pretty

### Fixed

- Dynamically importing html-beautifier for ESM compatibility

## [0.1.2] - 2024-12-23

### Fixed

- Dynamically importing pretty for ESM compatibility

## [0.1.1] - 2024-12-23

### Added

- It's Alive ✨

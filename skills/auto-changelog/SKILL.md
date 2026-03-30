---
name: auto-changelog
description: "Generates a professional CHANGELOG.md from all commits grouped by version and type"
allowed-tools: Bash Read Write
---

# Auto Changelog

## Instructions

Read all commits and generate a professional CHANGELOG.md file.

Group by:
- Version tags if they exist, otherwise by month
- Within each group: Added, Changed, Fixed, Removed, Security

Follow Keep a Changelog format (keepachangelog.com)

Format:
# Changelog

## [Unreleased]
### Added
### Fixed
### Changed

## [older versions...]

Be specific — translate raw commits into user-facing language.
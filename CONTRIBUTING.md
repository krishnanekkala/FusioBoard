# Contributing to FusioBoard

## Branch Naming Convention

To maintain consistency and clarity in our Git workflow, all branches in the FusioBoard project must follow this naming convention:

**Format**: `<type>/<issue-id>-<short-description>[-<optional-timestamp>]`

- **`<type>`** (Required): The type of work. Must be one of:
  - `feature`: New features or enhancements.
  - `bugfix`: Bug fixes.
  - `hotfix`: Urgent fixes.
  - `chore`: Maintenance tasks, refactoring, or updates.
  - `docs`: Documentation changes.
  - `test`: Test additions or updates.
- **`<issue-id>`** (Required): The issue or ticket number, prefixed with `FB-` (e.g., `FB-123`).
- **`<short-description>`** (Required): A concise, lowercase description in kebab-case (e.g., `add-login-validation`).
- **`<optional-timestamp>`** (Optional): The date in `YYYYMMDD` format (e.g., `20250607`).

### Examples
- `feature/FB-118-add-user-profile`
- `bugfix/FB-119-fix-login-error`
- `chore/FB-120-update-dependencies-20250607`
- `docs/FB-121-update-readme`
- `hotfix/FB-122-fix-payment-bug`

### Workflow
1. Create a branch following the naming convention:  
   ```bash
   git checkout -b feature/FB-118-add-user-profile

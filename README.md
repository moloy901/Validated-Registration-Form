# Registration Form with Validation and Dialog Confirmation

A simple user registration form built with HTML, CSS, and JavaScript.

## Technologies Used

- **HTML5**: Form structure and the native `<dialog>` element.
- **CSS3**: Custom styling and responsive layout.
- **JavaScript (ES6)**: Client-side validation logic and DOM interaction.

## Features

- Collects `Name`, `Email Address`, `Age`, and `Password`
- Client-side validation with specific alert messages
- Success confirmation using a styled HTML `<dialog>`
- Professional form UI with responsive layout

## Validation Requirements

| Field | Rule |
| :--- | :--- |
| **Name** | Required (cannot be empty) |
| **Email** | Required |
| **Age** | Must be a number between `18` and `60` |
| **Password** | Minimum of `6` characters |

## Project Structure

- `index.html`: Form layout and dialog markup
- `styles.css`: Styling (typography, layout, buttons, dialog)
- `script.js`: Validation and dialog logic

## How to Run

1. Open `index.html` in your browser
2. Or use VS Code Live Server for auto-reload while editing

## Future Enhancements

- [ ] Implement RegEx for stricter email format validation.
- [ ] Add a "Show/Hide Password" toggle.
- [ ] Persist data temporarily using `localStorage`.

## Current Form Actions

- `Complete Registration`: validates fields and shows success dialog
- `Cancel`: resets all form fields

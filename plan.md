# Plan: Change "Plug and Trade" color to Green

The user wants to change the color of the text "Plug and Trade" to green throughout the application. I will use the existing `text-emerald-500` class to maintain consistency with the brand's green highlights.

## Proposed Changes:

### 1. src/App.tsx
- Update the footer description: wrap "Plug and Trade" in a green span.
- Update the hero section description: wrap "Plug and Trade" in a green span.
- Update the reach metric in the pedigree card: wrap "Plug and Trade" in a green span.

### 2. src/components/ModelsPage.tsx
- Update the "Processor" business model summary: wrap "Plug and Trade" in a green span.

## Verification:
- Run `validate_build` to ensure no syntax or JSX errors.
- Verify the visual change in the rendered output.

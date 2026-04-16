# Kit (ConvertKit) Form Integration Guide

## Overview

This integration allows you to use Kit's embed forms in your React application **without modifying your existing HTML structure**.

## Files Created

1. **`src/components/KitForm.tsx`** - Core Kit form component
   - Dynamically loads Kit's JavaScript
   - Initializes the form programmatically
   - No HTML modification required

2. **`src/components/StyledKitForm.tsx`** - Styled wrapper
   - Customizes Kit form to match your design
   - Preserves your existing visual style
   - Responsive design included

3. **`src/components/HeroWithKit.tsx`** - Example Hero component
   - Shows how to use Kit form in your page
   - Drop-in replacement for existing Hero

## How to Use

### Option 1: Replace Your Hero Component

1. Open `src/App.tsx`
2. Change the import:
   ```tsx
   // Before
   import { Hero } from "./components/Hero";

   // After
   import { HeroWithKit } from "./components/HeroWithKit";
   ```
3. Update the component usage:
   ```tsx
   // Before
   <Hero />

   // After
   <HeroWithKit />
   ```

### Option 2: Use Kit Form in Existing Hero

1. Open `src/components/Hero.tsx`
2. Replace the form section (lines 66-101) with:
   ```tsx
   <div className="w-full max-w-[503px]">
     <StyledKitForm />
   </div>
   ```
3. Add the import at the top:
   ```tsx
   import { StyledKitForm } from "./StyledKitForm";
   ```
4. Remove the unused state and handler:
   - Remove `FormEvent, useState` import
   - Remove `SubmitState` type
   - Remove `email`, `submitState`, `message` state
   - Remove `handleSubmit` function

## Customization

### Change Kit Form ID

If you need to use a different Kit form:

```tsx
<KitForm formId="YOUR_FORM_ID" uid="YOUR_UID" />
```

### Adjust Styles

Edit the styles in `StyledKitForm.tsx` to match your design:

```tsx
.kit-form-container .formkit-input {
  color: #YOUR_COLOR !important;
  /* ... other styles */
}
```

### Show/Hide Kit Branding

To show "Built with Kit":
```tsx
/* Remove this line from StyledKitForm.tsx */
.kit-form-container .formkit-powered-by-convertkit-container {
  /* display: none !important; */  /* Comment this out */
}
```

## Benefits of This Approach

✅ **No HTML modification** - Works with your existing structure
✅ **Dynamic loading** - Script loads only when needed
✅ **Full styling control** - Match your design exactly
✅ **TypeScript support** - Fully typed components
✅ **Responsive** - Works on mobile and desktop
✅ **Easy to revert** - Can switch back to original form anytime

## How It Works

1. **Script Loading**: Component loads Kit's JavaScript (`ck.5.js`) dynamically
2. **Form Creation**: Creates form element programmatically (no HTML needed)
3. **Style Injection**: Custom styles override Kit's defaults
4. **Submission**: Form submits directly to Kit's servers

## Troubleshooting

### Form not appearing
- Check browser console for script loading errors
- Verify `formId` and `uid` are correct
- Ensure container div has dimensions

### Styles not applying
- Check CSS specificity (use `!important` as needed)
- Verify styles are loaded after Kit's styles
- Use browser DevTools to inspect element

### Form not submitting
- Check Kit form is active in your Kit dashboard
- Verify form action URL is correct
- Check browser network tab for submission errors

## Original Form (For Reference)

Your original form submitted to `/api/waitlist`. The Kit form submits directly to Kit's servers:
- URL: `https://app.kit.com/forms/8899105/subscriptions`
- Method: POST
- No backend API needed

## Next Steps

1. Test the integration in development
2. Verify form submissions appear in Kit dashboard
3. Adjust styling as needed
4. Deploy to production

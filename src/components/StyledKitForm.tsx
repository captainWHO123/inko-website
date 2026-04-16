import { KitForm } from "./KitForm";

/**
 * Styled Kit Form Wrapper
 *
 * This component wraps the Kit form with custom styling to match
 * your existing Hero component design.
 */
export const StyledKitForm = () => {
  return (
    <div className="relative">
      <style>{`
        /* Override Kit form styles to match your design */
        .kit-form-container .formkit-form {
          max-width: 100% !important;
          margin: 0 !important;
        }

        .kit-form-container .formkit-fields {
          gap: 0 !important;
          margin: 0 !important;
          display: grid !important;
          grid-template-columns: 48.91% 51.09% !important;
          height: 66px !important;
          background: white !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          box-shadow: 0 0 0 1px rgba(22, 110, 178, 0.2) !important;
          transition: box-shadow 0.2s ease !important;
        }

        .kit-form-container .formkit-fields:focus-within {
          box-shadow: 0 0 0 2px rgba(22, 110, 178, 0.5) !important;
        }

        .kit-form-container .formkit-field {
          margin: 0 !important;
          flex: unset !important;
        }

        .kit-form-container .formkit-input {
          height: 66px !important;
          border: none !important;
          padding: 0 17px !important;
          font-size: 18px !important;
          font-weight: 500 !important;
          color: #166EB1 !important;
          background: transparent !important;
          border-radius: 0 !important;
        }

        .kit-form-container .formkit-input::placeholder {
          color: #C2D9EB !important;
          opacity: 1 !important;
        }

        .kit-form-container .formkit-input:focus {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }

        .kit-form-container .formkit-submit {
          margin: 0 !important;
          flex: unset !important;
          height: 66px !important;
          background: #4ACBEC !important;
          color: white !important;
          font-size: 18px !important;
          font-weight: 500 !important;
          border-radius: 0 !important;
          border: none !important;
          cursor: pointer !important;
          transition: background-color 0.2s ease !important;
        }

        .kit-form-container .formkit-submit:hover {
          background: #3ec3e6 !important;
        }

        .kit-form-container .formkit-submit:disabled {
          background: #8fdff1 !important;
          cursor: not-allowed !important;
        }

        .kit-form-container .formkit-submit span {
          padding: 0 !important;
        }

        /* Hide the "Built with Kit" branding if desired */
        .kit-form-container .formkit-powered-by-convertkit-container {
          display: none !important;
        }

        /* Hide error alert container if not needed */
        .kit-form-container .formkit-alert {
          display: none !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .kit-form-container .formkit-fields {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }

          .kit-form-container .formkit-input,
          .kit-form-container .formkit-submit {
            height: 56px !important;
          }
        }
      `}</style>

      <KitForm formId="8899105" uid="607eb344a1" />

      {/* Custom message area to match your original design */}
      <p className="mt-4 text-base text-[var(--text-on-dark-muted)]">
        Priority to open App version for internal testing.
      </p>
    </div>
  );
};

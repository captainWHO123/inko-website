import { useEffect, useRef } from "react";

/**
 * Kit (ConvertKit) Form Component
 *
 * This component loads the Kit form script and initializes the form
 * without modifying your existing HTML structure.
 *
 * @param formId - The Kit form ID (default: 8899105)
 * @param uid - The Kit form UID (default: 607eb344a1)
 */
export const KitForm = ({
  formId = "8899105",
  uid = "607eb344a1",
}: {
  formId?: string;
  uid?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    // Load Kit script
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    script.onload = () => {
      console.log("Kit form script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load Kit form script");
    };
    document.body.appendChild(script);

    // Create form element
    if (containerRef.current) {
      const form = document.createElement("form");
      form.action = `https://app.kit.com/forms/${formId}/subscriptions`;
      form.className = "seva-form formkit-form";
      form.method = "post";
      form.setAttribute("data-sv-form", formId);
      form.setAttribute("data-uid", uid);
      form.setAttribute("data-format", "inline");
      form.setAttribute("data-version", "5");
      form.setAttribute(
        "data-options",
        JSON.stringify({
          settings: {
            after_subscribe: {
              action: "message",
              success_message:
                "Success! Now check your email to confirm your subscription.",
              redirect_url: "",
            },
            analytics: {
              google: null,
              fathom: null,
              facebook: null,
              segment: null,
              pinterest: null,
              sparkloop: null,
              googletagmanager: null,
            },
            modal: {
              trigger: "timer",
              scroll_percentage: null,
              timer: 5,
              devices: "all",
              show_once_every: 15,
            },
            powered_by: {
              show: true,
              url:
                "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic",
            },
            recaptcha: { enabled: false },
            return_visitor: { action: "show", custom_content: "" },
            slide_in: {
              display_in: "bottom_right",
              trigger: "timer",
              scroll_percentage: null,
              timer: 5,
              devices: "all",
              show_once_every: 15,
            },
            sticky_bar: {
              display_in: "top",
              trigger: "timer",
              scroll_percentage: null,
              timer: 5,
              devices: "all",
              show_once_every: 15,
            },
          },
          version: "5",
        })
      );
      form.setAttribute("min-width", "400 500 600 700 800");

      // Create form inner content
      form.innerHTML = `
        <div data-style="clean">
          <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
            <div class="formkit-field">
              <input
                class="formkit-input"
                name="email_address"
                aria-label="Email Address"
                placeholder="Email Address"
                required=""
                type="email"
                style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"
              />
            </div>
            <button
              data-element="submit"
              class="formkit-submit formkit-submit"
              style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"
            >
              <div class="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span class="">Subscribe</span>
            </button>
          </div>
          <div class="formkit-powered-by-convertkit-container">
            <a
              href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
              data-element="powered-by"
              class="formkit-powered-by-convertkit"
              data-variant="dark"
              target="_blank"
              rel="nofollow"
            >
              Built with Kit
            </a>
          </div>
        </div>
      `;

      containerRef.current.appendChild(form);
    }

    return () => {
      // Cleanup: Remove script if component unmounts
      const scripts = document.querySelectorAll(
        `script[src="https://f.convertkit.com/ckjs/ck.5.js"]`
      );
      scripts.forEach((s) => s.remove());
    };
  }, [formId, uid]);

  return (
    <div
      ref={containerRef}
      className="kit-form-container"
      style={{ width: "100%", maxWidth: "700px" }}
    />
  );
};

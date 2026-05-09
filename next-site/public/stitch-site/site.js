(function () {
  const supportEmail = "hello@get-inko.com";

  const routeMap = {
    "How it Works": "/",
    Pricing: "/pricing",
    Proof: "/proof",
    FAQ: "/faq",
    "Book Demo": "/book-demo",
    "Book a Demo": "/book-demo",
    "Book a Live Demo": "/book-demo",
    "Book a Demo for your firm": "/book-demo",
    "View Workspace Outputs": "/proof",
    "Contact Support": "/contact",
    Hardware: "/pricing",
    "Starter Kit": "/pricing",
    Features: "/proof",
    Security: "/privacy-policy",
    "Help Center": "/faq",
    Documentation: "/faq",
    Status: "/updates",
    Privacy: "/privacy-policy",
    "Privacy Policy": "/privacy-policy",
    Terms: "/terms",
    "Terms of Service": "/terms",
    Compliance: "/consent-recording-notice",
    Contact: "/contact",
    "Contact Us": "/contact",
    Legal: "/terms",
    Roadmap: "/updates",
    Enterprise: "/team-plan-interest",
    Partners: "/contact",
    "API Docs": "/faq",
    Twitter: "/contact",
    LinkedIn: "/contact",
  };

  const preorderLabels = new Set(["Pre-order Inko Starter", "Pre-order Now"]);

  function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function currentPath() {
    const path = window.location.pathname.replace(/\/+$/, "");
    return path === "" ? "/" : path;
  }

  function navigate(target) {
    if (!target) return;
    if (target.startsWith("mailto:")) {
      window.location.href = target;
      return;
    }
    window.location.assign(target);
  }

  function makeMailto(subject, body) {
    return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function showInlineNote(container, message) {
    if (!container) return;

    let note = container.querySelector("[data-stitch-note]");
    if (!note) {
      note = document.createElement("p");
      note.setAttribute("data-stitch-note", "true");
      note.style.marginTop = "14px";
      note.style.fontSize = "12px";
      note.style.lineHeight = "1.6";
      note.style.color = "#486179";
      container.appendChild(note);
    }

    note.textContent = message;
  }

  function wirePlaceholderLinks() {
    document.querySelectorAll('a[href="#"]').forEach((link) => {
      const label = normalizeText(link.textContent || "");
      const target = routeMap[label];

      if (!target) return;

      link.setAttribute("href", target);
      link.addEventListener("click", (event) => {
        event.preventDefault();
        navigate(target);
      });
    });
  }

  function wireBrandLinks() {
    document.querySelectorAll("nav").forEach((nav) => {
      const brand = nav.querySelector("div");
      if (!brand) return;

      if (normalizeText(brand.textContent || "") !== "Inko") return;

      brand.style.cursor = "pointer";
      brand.setAttribute("role", "link");
      brand.setAttribute("tabindex", "0");
      brand.addEventListener("click", () => navigate("/"));
      brand.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate("/");
        }
      });
    });
  }

  function wireButtons() {
    document.querySelectorAll("button").forEach((button) => {
      const label = normalizeText(button.textContent || "");
      if (!label) return;

      if (button.closest("form")) return;

      if (label === "Subscribe") {
        button.addEventListener("click", () => {
          const container = button.parentElement;
          const emailInput = container?.querySelector('input[type="email"]');
          const email = (emailInput?.value || "").trim();
          const body = email
            ? `Please add this email to the Inko waitlist:\n\n${email}`
            : "Please add me to the Inko waitlist.";

          navigate(makeMailto("Join Inko Waitlist", body));
          showInlineNote(
            container,
            "Your email client should open with a prefilled waitlist request. If it does not, email hello@get-inko.com.",
          );
        });
        return;
      }

      if (preorderLabels.has(label)) {
        button.addEventListener("click", () => {
          if (currentPath() === "/pricing") {
            navigate(
              makeMailto(
                "Pre-order Inko Starter",
                "I want to pre-order Inko Starter. Please send me the next step.",
              ),
            );
            showInlineNote(
              button.parentElement,
              "Your email client should open with a prefilled pre-order request. If it does not, email hello@get-inko.com.",
            );
            return;
          }

          navigate("/pricing");
        });
        return;
      }

      const target = routeMap[label];
      if (!target) return;

      button.addEventListener("click", () => navigate(target));
    });
  }

  function wireDemoForm() {
    const form = document.querySelector("form");
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"], button');
    if (!submitButton) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const lines = Array.from(form.querySelectorAll(".space-y-2"))
        .map((group) => {
          const label = normalizeText(group.querySelector("label")?.textContent || "");
          const field = group.querySelector("input, select, textarea");
          const value = (field && "value" in field ? field.value : "") || "";

          if (!label) return null;

          return `${label}: ${value.trim() || "Not provided"}`;
        })
        .filter(Boolean);

      navigate(
        makeMailto(
          "Inko Demo Request",
          `Please book a demo for the following request:\n\n${lines.join("\n")}`,
        ),
      );

      showInlineNote(
        form.lastElementChild || form,
        "Your email client should open with a prefilled demo request. If it does not, email hello@get-inko.com.",
      );
    });
  }

  wirePlaceholderLinks();
  wireBrandLinks();
  wireButtons();
  wireDemoForm();
})();

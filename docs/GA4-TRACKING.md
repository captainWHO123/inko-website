# GA4 Event Tracking Guide

## Setup

### GA4 Measurement ID

Replace `G-XXXXXXXXXX` with your real ID in **3 places** within `src/layouts/Layout.astro`:

- Line 21: `src="...gtag/js?id=G-XXXXXXXXXX"`
- Line 26: `gtag('config', 'G-XXXXXXXXXX')`

### How to get your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Admin > Create Property > Web > Enter `get-inko.com`
3. Copy the Measurement ID (format: `G-XXXXXXX`)

---

## Events Reference

### Conversion Events

| Event | Trigger | File | Parameters |
|-------|---------|------|------------|
| `waitlist_signup` | Email submitted successfully | `Hero.astro`, `FinalCTA.astro` | `form_location`: see below |

**form_location values:**

| Value | Meaning |
|-------|---------|
| `hero` | Hero section form (page top) |
| `header_desktop` | Header nav bar form (desktop) |
| `header_mobile` | Mobile menu form |
| `final_cta` | Bottom CTA section form |

### Navigation Events

| Event | Trigger | File | Parameters |
|-------|---------|------|------------|
| `nav_link_click` | Click nav link (Features/How to Use/Security/FAQ) | `Header.astro` | `link_text`, `source` (mobile only) |
| `mobile_menu_open` | Open mobile hamburger menu | `Header.astro` | — |
| `mobile_menu_close` | Close mobile hamburger menu | `Header.astro` | — |

### Engagement Events

| Event | Trigger | File | Parameters |
|-------|---------|------|------------|
| `section_view` | Section enters viewport (20% visible, fires once per section) | `Layout.astro` | `section_name` |
| `scroll_depth` | User scrolls past 25%/50%/75%/90% of page | `Layout.astro` | `percent` |
| `faq_expand` | Click to expand a FAQ question | `FAQ.astro` | `question` |

**section_name values:** `hero`, `features`, `how-to-use`, `security`, `faq`, `final-cta`

---

## GA4 Auto-collected Events (no code needed)

These are collected automatically by GA4:

- `page_view` — page load
- `session_start` — first interaction in a session
- `first_visit` — first time user
- `user_engagement` — time spent on page

---

## Where to Find Data in GA4

### Basic Metrics

- **Page views / Users / Sessions:** Reports > Engagement > Pages and screens
- **Time on page:** Reports > Engagement > Events > `user_engagement`

### Custom Events (need 24-48h to appear)

- **All events:** Explore > Free form > Dimension = Event name
- **Filter specific event:** Add filter > Event name = `waitlist_signup`

### Recommended: Set Up Conversion

1. Admin > Events > find `waitlist_signup`
2. Toggle "Mark as conversion"
3. After 24h, it appears in Reports > Engagements > Conversions

### Recommended: Build a Funnel

Explore > Funnel exploration:

```
1. page_view
2. scroll_depth (percent = 50)
3. section_view (section_name = final-cta)
4. waitlist_signup
```

This shows the full journey: visit > scroll > reach CTA > submit email.

---

## Debugging

### Chrome DevTools

1. Open DevTools > Network tab
2. Filter: `google-analytics` or `collect`
3. Click around the page, watch for outgoing requests
4. Check `en` (event name) and `ep.*` (event parameters) in the payload

### GA Debugger Extension

Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna), turn it on, check Console for detailed event logs.

### Realtime Report (instant verification)

GA4 > Reports > Realtime — events show up here within seconds.

---

## File Map

| File | What it tracks |
|------|---------------|
| `src/layouts/Layout.astro` | GA4 base script, section_view, scroll_depth |
| `src/components/Hero.astro` | waitlist_signup (hero) |
| `src/components/Header.astro` | nav_link_click, mobile_menu_open/close |
| `src/components/FinalCTA.astro` | waitlist_signup (final_cta, header_desktop, header_mobile) |
| `src/components/FAQ.astro` | faq_expand |

---

## Adding New Events

Follow this pattern in any component `<script>`:

```typescript
if (typeof (window as any).gtag === 'function') {
  (window as any).gtag('event', 'your_event_name', {
    param1: 'value1',
    param2: 'value2',
  });
}
```

For global tracking (all pages), add to the `is:inline` script block in `Layout.astro`.

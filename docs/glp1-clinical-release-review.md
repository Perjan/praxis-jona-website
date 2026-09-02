# GLP-1 intake clinical release review

Status: **Release blocked pending Dr. Gjolli's approval**

The implementation intentionally supports intake and manual physician review only. It does not determine eligibility, recommend a dose, approve treatment, or generate a prescription.

## Approval checklist

Dr. Gjolli must approve the following in both German and English before production release:

- new-patient questions and answer choices;
- follow-up questions, including free-text medicine and dose fields;
- under-18 stop behavior;
- coded physician-review flags and BMI threshold behavior;
- health-data consent wording and consent version;
- localized PDF wording, field labels, flags, signature, and reference number;
- privacy-notice wording and stated workflow/retention basis;
- pending-review confirmation language.

## Review-flag behavior

Flags are derived only on the server and are not shown dynamically to the patient. A flagged response remains submittable for manual physician review. The current codes are defined in `app/glp1/intake-definition.ts` and cover BMI below the service threshold, pregnancy or breastfeeding, relevant histories and medication, requested dose changes, moderate/severe side effects, missed doses, and new diagnoses or medication.

## Clinical sources for wording review

- [EMA: Mounjaro](https://www.ema.europa.eu/en/medicines/human/EPAR/mounjaro)
- [EMA: Wegovy product information](https://www.ema.europa.eu/en/documents/product-information/wegovy-epar-product-information_en.pdf)
- [EMA: Saxenda](https://www.ema.europa.eu/en/medicines/human/EPAR/saxenda)

Approval should be recorded with the reviewer name, date, consent text version, and schema version used for release.

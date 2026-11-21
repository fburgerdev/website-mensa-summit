/*
 * Everything that is still open lives here, so the page itself never needs touching.
 * Set a URL (form, Google/Tally/Cryptpad form, etc.) to replace the mail fallback.
 * Leave a value as "" to fall back to a prepared mail to `contactMail`.
 */
window.SUMMIT_CONFIG = {
  // Contact address for everything.
  contactMail: "info@mensarevolution.de",

  // Orga meetings. The page shows the first one that has not ended yet; add new ones here.
  orgaMeetings: [
    { date: "2026-12-07T19:00:00+01:00", label: "07. Dezember 2026 · 19 Uhr · online" },
  ],
  orgaMeetingFallback: "Nächster Termin folgt auf Instagram",

  // Registration form. Empty = "Interesse anmelden" opens a prepared mail.
  registration: "",
  registrationLabel: "Interesse anmelden",
  registrationNote: "Die Anmeldung öffnet bald. Schreib uns kurz, dann sagen wir dir Bescheid, sobald es losgeht.",
  // Once the form is live, for example:
  // registration: "https://…",
  // registrationLabel: "Jetzt anmelden",
  // registrationNote: "Die Anmeldung ist offen. Die Plätze sind begrenzt.",

  // Forms for the other buttons. Empty = prepared mail.
  submit: "",
  helpers: "",
  partners: "",
  homestaySeek: "",
  homestayOffer: "",
};

// Subject and body of the prepared mails used as fallback.
window.SUMMIT_MAILS = {
  registration: ["Mensa Summit 2027: Ich möchte dabei sein", "Hallo,\n\nich möchte beim Mensa Summit 2027 in Konstanz dabei sein. Bitte sagt mir Bescheid, sobald die Anmeldung offen ist.\n\nName:\nHochschule / Stadt:\nGruppe (falls vorhanden):\n\nViele Grüße"],
  submit: ["Mensa Summit 2027: Idee für einen Beitrag", "Hallo,\n\nich hätte eine Idee für einen Input oder Workshop beim Mensa Summit 2027.\n\nThema:\nWorum es geht (2–3 Sätze):\nFormat (Input / Workshop / anderes):\nWer ich bin:\n\nViele Grüße"],
  helpers: ["Mensa Summit 2027: Ich helfe mit", "Hallo,\n\nich möchte beim Mensa Summit 2027 vor Ort helfen.\n\nName:\nWobei ich gern helfe:\nWann ich Zeit habe (13.–16.05.):\n\nViele Grüße"],
  partners: ["Mensa Summit 2027: Unterstützung", "Hallo,\n\nwir würden den Mensa Summit 2027 gern unterstützen.\n\nOrganisation:\nWie wir unterstützen möchten:\nAnsprechperson:\n\nViele Grüße"],
  homestaySeek: ["Mensa Summit 2027: Ich suche einen Schlafplatz", "Hallo,\n\nich suche für den Mensa Summit 2027 einen Homestay-Schlafplatz in Konstanz.\n\nName:\nNächte (13.–16.05.):\nIsomatte und Schlafsack bringe ich mit: ja / nein\n\nViele Grüße"],
  homestayOffer: ["Mensa Summit 2027: Ich biete einen Schlafplatz", "Hallo,\n\nich wohne in Konstanz und kann beim Mensa Summit 2027 Teilnehmende aufnehmen.\n\nName:\nAnzahl Plätze:\nNächte (13.–16.05.):\nBett / Sofa / Platz für Isomatte:\n\nViele Grüße"],
  contactMail: ["Mensa Summit 2027", ""],
};

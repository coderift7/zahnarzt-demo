import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
        <Link
          href="/"
          className="text-sm text-accent hover:underline"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-primary">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              Zahnarztpraxis Dr. med. dent. Sarah Weber
              <br />
              Schönhauser Allee 128, 10437 Berlin
              <br />
              E-Mail: praxis@dr-weber-zahnarzt.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              2. Erhebung und Verarbeitung von Daten
            </h2>
            <p className="mt-2">
              Beim Besuch unserer Webseite werden automatisch Informationen
              allgemeiner Natur erfasst (z.B. IP-Adresse, Browsertyp,
              Betriebssystem). Diese Daten lassen keine Rückschlüsse auf Ihre
              Person zu und werden ausschließlich zur Sicherstellung eines
              störungsfreien Betriebs ausgewertet.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              3. Kontaktformular / Terminbuchung
            </h2>
            <p className="mt-2">
              Wenn Sie uns über das Terminformular kontaktieren, werden die von
              Ihnen angegebenen Daten (Name, E-Mail, Telefon, gewünschte
              Behandlung) zwecks Bearbeitung Ihrer Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              4. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Bei
              Fragen wenden Sie sich an: praxis@dr-weber-zahnarzt.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Hinweis
            </h2>
            <p className="mt-2">
              Dies ist eine Demo-Webseite zu Präsentationszwecken. Es werden
              keine echten Daten erhoben oder verarbeitet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

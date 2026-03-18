import Link from "next/link";

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2">
              Zahnarztpraxis Dr. med. dent. Sarah Weber
              <br />
              Schönhauser Allee 128
              <br />
              10437 Berlin
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Kontakt
            </h2>
            <p className="mt-2">
              Telefon: +49 30 987 654 32
              <br />
              E-Mail: praxis@dr-weber-zahnarzt.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Berufsbezeichnung
            </h2>
            <p className="mt-2">
              Zahnärztin (verliehen in der Bundesrepublik Deutschland)
              <br />
              Zuständige Kammer: Zahnärztekammer Berlin
              <br />
              Zuständige Aufsichtsbehörde: Kassenzahnärztliche Vereinigung Berlin
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-primary">
              Hinweis
            </h2>
            <p className="mt-2">
              Dies ist eine Demo-Webseite zu Präsentationszwecken. Die genannten
              Personen und die Praxis sind fiktiv.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

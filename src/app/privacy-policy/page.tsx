import styles from "./page.module.css";
import translations from "@/translations/nl.json";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function AlgemeneVoorwaarde() {
  return (
    <main>
      <Header
        title="Privacy policy"
        backgroundImageSrc="/images/tarieven_hero.jpg"
      />

      <section className="container">
        <h2>Privacyverklaring</h2>
        <p>
          Wrap-Xperience, gevestigd aan Eekhoorn 74, 5508SG Veldhoven, is verantwoordelijk voor de
          verwerking van persoonsgegevens zoals weergegeven in deze
          privacyverklaring.
        </p>

        <h2>Persoonsgegevens die wij verwerken</h2>
        <p>
          Wrap-Xperience verwerkt uw persoonsgegevens doordat u gebruikmaakt van
          onze diensten en/of omdat u deze gegevens zelf aan ons verstrekt.
        </p>
        <p>
          Hieronder vindt u een overzicht van de persoonsgegevens die wij kunnen
          verwerken:
        </p>
        <p>- Voor- en achternaam</p>
        <p>- Adresgegevens</p>
        <p>- Telefoonnummer</p>
        <p>- E-mailadres</p>
        <p>- Bedrijfsnaam (indien van toepassing)</p>
        <p>- BTW-nummer (indien van toepassing)</p>
        <p>- Bankrekeningnummer</p>
        <p>
          - Overige persoonsgegevens die u actief verstrekt, bijvoorbeeld via
          correspondentie of telefonisch
        </p>

        <h2>Bijzondere en/of gevoelige persoonsgegevens</h2>
        <p>
          Onze website en/of dienst heeft niet de intentie gegevens te
          verzamelen over websitebezoekers die jonger zijn dan 16 jaar, tenzij
          zij toestemming hebben van ouders of voogd. Wij kunnen echter niet
          controleren of een bezoeker ouder dan 16 is.
        </p>

        <h2>
          Met welk doel en op basis van welke grondslag wij persoonsgegevens
          verwerken
        </h2>
        <p>Wrap-Xperience verwerkt persoonsgegevens voor de volgende doelen:</p>
        <p>- Het afhandelen van uw betaling</p>
        <p>
          - Contact met u op te nemen indien dit nodig is om onze
          dienstverlening uit te voeren
        </p>
        <p>- U te informeren over wijzigingen van onze diensten en producten</p>
        <p>- Het uitvoeren van een overeenkomst</p>
        <p>
          - Het voldoen aan wettelijke verplichtingen, zoals administratie- en
          belastingverplichtingen
        </p>

        <h2>Geautomatiseerde besluitvorming</h2>
        <p>
          Wrap-Xperience neemt geen besluiten op basis van geautomatiseerde
          verwerkingen die (aanzienlijke) gevolgen kunnen hebben voor personen.
        </p>

        <h2>Hoe lang wij persoonsgegevens bewaren</h2>
        <p>
          Wrap-Xperience bewaart uw persoonsgegevens niet langer dan strikt
          noodzakelijk is om de doelen te realiseren waarvoor uw gegevens worden
          verzameld. In sommige gevallen zijn wij wettelijk verplicht gegevens
          langer te bewaren, zoals voor de belastingdienst.
        </p>

        <h2>Delen van persoonsgegevens met derden</h2>
        <p>
          Wrap-Xperience verstrekt persoonsgegevens uitsluitend aan derden
          indien dit nodig is voor de uitvoering van onze overeenkomst met u of
          om te voldoen aan een wettelijke verplichting.
        </p>

        <h2>Cookies, of vergelijkbare technieken</h2>
        <p>
          Wrap-Xperience gebruikt alleen technische en functionele cookies en
          analytische cookies die geen inbreuk maken op uw privacy.
        </p>

        <h2>Gegevens inzien, aanpassen of verwijderen</h2>
        <p>
          U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of
          te verwijderen. Daarnaast heeft u het recht om uw eventuele
          toestemming voor de gegevensverwerking in te trekken of bezwaar te
          maken tegen de verwerking van uw persoonsgegevens.
        </p>
        <p>
          U kunt een verzoek tot inzage, correctie, verwijdering of overdracht
          van uw persoonsgegevens sturen naar info@wrap-xperience.nl.
        </p>

        <h2>Hoe wij persoonsgegevens beveiligen</h2>
        <p>
          Wrap-Xperience neemt de bescherming van uw gegevens serieus en neemt
          passende maatregelen om misbruik, verlies, onbevoegde toegang,
          ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
        </p>

        <h2>Contactgegevens</h2>
        <p>Wrap-Xperience</p>
        <p>Eekhoorn 74</p>
        <p>5508SG Veldhoven</p>
        <p>96086394</p>
        <p>info@wrap-xperience.nl</p>
      </section>

      <Footer />
    </main>
  );
}

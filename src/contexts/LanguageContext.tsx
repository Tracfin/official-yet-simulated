import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'de' | 'da';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const getTranslations = (lang: Language): Record<string, string> => {
  const translations = {
    fr: {
      'header.republic': 'République Française',
      'header.ministry': 'Ministère de l\'Économie et des Finances',
      'title.main': 'NOTIFICATION DE SUSPENSION TEMPORAIRE D\'UN ORDRE DE VIREMENT',
      'reference': 'Référence',
      'sender.title': 'INFORMATIONS ÉMETTEUR',
      'sender.bank': 'Banque émettrice:',
      'sender.account': 'Compte émetteur:',
      'beneficiary.title': 'INFORMATIONS BÉNÉFICIAIRE',
      'beneficiary.name': 'Nom:',
      'beneficiary.address': 'Adresse:',
      'beneficiary.bank': 'Banque bénéficiaire:',
      'suspension.title': 'MOTIF DE LA SUSPENSION ET FRAIS AML',
      'suspension.text1': 'Cette mesure est prise dans le cadre des obligations de vigilance et de contrôle. Pour des raisons légales liées à la confidentialité des procédures, nous ne sommes pas en mesure de fournir davantage de détails à ce stade.',
      'suspension.text2': 'Conformément aux régulations européennes en matière de lutte contre le blanchiment de capitaux et le financement du terrorisme (Directive (UE) 2015/849 – AMLD), un frais administratif de vérification et de traitement de',
      'suspension.text3': 'peut être appliqué pour couvrir les opérations de contrôle et de suivi des transactions financières.',
      'suspension.covers': 'Ce frais couvre notamment :',
      'suspension.item1': 'La vérification de l\'identité du bénéficiaire et de l\'émetteur du virement',
      'suspension.item2': 'L\'examen des documents justificatifs relatifs à l\'origine des fonds',
      'suspension.item3': 'Le traitement administratif des alertes et anomalies détectées',
      'suspension.item4': 'La mise en conformité avec les obligations nationales et européennes de vigilance financière',
      'suspension.final': 'Sans régularisation ou fourniture des justificatifs demandés, le traitement complet de la transaction ne peut être finalisé.',
      'instructions.title': 'INSTRUCTIONS',
      'instructions.text': 'Pour toute demande d\'information complémentaire ou contestation, veuillez contacter le service TRACFIN par les voies officielles uniquement.',
      'footer.tracfin': 'TRACFIN - Traitement du Renseignement et Action contre les Circuits FINanciers clandestins',
      'footer.document': 'Document généré à titre informatif uniquement.',
      'footer.confidential': 'Les informations contenues dans ce document sont confidentielles et protégées par le secret professionnel.',
      'footer.ministry': 'Ministère de l\'Économie et des Finances | République Française'
    },
    en: {
      'header.republic': 'French Republic',
      'header.ministry': 'Ministry of Economy and Finance',
      'title.main': 'NOTIFICATION OF TEMPORARY SUSPENSION OF A WIRE TRANSFER ORDER',
      'reference': 'Reference',
      'sender.title': 'SENDER INFORMATION',
      'sender.bank': 'Issuing bank:',
      'sender.account': 'Sender account:',
      'beneficiary.title': 'BENEFICIARY INFORMATION',
      'beneficiary.name': 'Name:',
      'beneficiary.address': 'Address:',
      'beneficiary.bank': 'Beneficiary bank:',
      'suspension.title': 'REASON FOR SUSPENSION AND AML FEES',
      'suspension.text1': 'This measure is taken within the framework of due diligence and control obligations. For legal reasons related to the confidentiality of procedures, we are not able to provide further details at this stage.',
      'suspension.text2': 'In accordance with European regulations on anti-money laundering and terrorist financing (Directive (EU) 2015/849 – AMLD), an administrative verification and processing fee of',
      'suspension.text3': 'may be applied to cover control operations and monitoring of financial transactions.',
      'suspension.covers': 'This fee covers in particular:',
      'suspension.item1': 'Verification of the identity of the beneficiary and sender of the transfer',
      'suspension.item2': 'Examination of supporting documents relating to the origin of funds',
      'suspension.item3': 'Administrative processing of alerts and anomalies detected',
      'suspension.item4': 'Compliance with national and European financial vigilance obligations',
      'suspension.final': 'Without regularization or provision of the requested supporting documents, the complete processing of the transaction cannot be finalized.',
      'instructions.title': 'INSTRUCTIONS',
      'instructions.text': 'For any request for additional information or dispute, please contact the TRACFIN service through official channels only.',
      'footer.tracfin': 'TRACFIN - Intelligence Processing and Action against Clandestine Financial Circuits',
      'footer.document': 'Document generated for informational purposes only.',
      'footer.confidential': 'The information contained in this document is confidential and protected by professional secrecy.',
      'footer.ministry': 'Ministry of Economy and Finance | French Republic'
    },
    de: {
      'header.republic': 'Französische Republik',
      'header.ministry': 'Ministerium für Wirtschaft und Finanzen',
      'title.main': 'BENACHRICHTIGUNG ÜBER VORÜBERGEHENDE AUSSETZUNG EINER ÜBERWEISUNGSANWEISUNG',
      'reference': 'Referenz',
      'sender.title': 'ABSENDER-INFORMATIONEN',
      'sender.bank': 'Ausstellende Bank:',
      'sender.account': 'Absenderkonto:',
      'beneficiary.title': 'EMPFÄNGER-INFORMATIONEN',
      'beneficiary.name': 'Name:',
      'beneficiary.address': 'Adresse:',
      'beneficiary.bank': 'Empfängerbank:',
      'suspension.title': 'GRUND FÜR DIE AUSSETZUNG UND AML-GEBÜHREN',
      'suspension.text1': 'Diese Maßnahme wird im Rahmen der Sorgfalts- und Kontrollpflichten ergriffen. Aus rechtlichen Gründen im Zusammenhang mit der Vertraulichkeit der Verfahren können wir zu diesem Zeitpunkt keine weiteren Details mitteilen.',
      'suspension.text2': 'Gemäß den europäischen Vorschriften zur Geldwäschebekämpfung und Terrorismusfinanzierung (Richtlinie (EU) 2015/849 – AMLD) kann eine administrative Überprüfungs- und Bearbeitungsgebühr von',
      'suspension.text3': 'erhoben werden, um Kontrollvorgänge und Überwachung von Finanztransaktionen abzudecken.',
      'suspension.covers': 'Diese Gebühr deckt insbesondere ab:',
      'suspension.item1': 'Überprüfung der Identität des Empfängers und Absenders der Überweisung',
      'suspension.item2': 'Prüfung von Belegen bezüglich der Herkunft der Gelder',
      'suspension.item3': 'Administrative Bearbeitung von Warnungen und erkannten Anomalien',
      'suspension.item4': 'Einhaltung nationaler und europäischer Finanzüberwachungspflichten',
      'suspension.final': 'Ohne Regularisierung oder Vorlage der angeforderten Belege kann die vollständige Bearbeitung der Transaktion nicht abgeschlossen werden.',
      'instructions.title': 'ANWEISUNGEN',
      'instructions.text': 'Bei Anfragen für zusätzliche Informationen oder Einsprüchen wenden Sie sich bitte ausschließlich über offizielle Kanäle an den TRACFIN-Service.',
      'footer.tracfin': 'TRACFIN - Nachrichtenverarbeitung und Aktion gegen klandestine Finanzkreisläufe',
      'footer.document': 'Dokument nur zu Informationszwecken erstellt.',
      'footer.confidential': 'Die in diesem Dokument enthaltenen Informationen sind vertraulich und durch das Berufsgeheimnis geschützt.',
      'footer.ministry': 'Ministerium für Wirtschaft und Finanzen | Französische Republik'
    },
    da: {
      'header.republic': 'Den Franske Republik',
      'header.ministry': 'Ministeriet for Økonomi og Finanser',
      'title.main': 'MEDDELELSE OM MIDLERTIDIG SUSPENSION AF EN BANKOVERFØRSELSORDRE',
      'reference': 'Reference',
      'sender.title': 'AFSENDER INFORMATION',
      'sender.bank': 'Udstedende bank:',
      'sender.account': 'Afsenderkonto:',
      'beneficiary.title': 'MODTAGER INFORMATION',
      'beneficiary.name': 'Navn:',
      'beneficiary.address': 'Adresse:',
      'beneficiary.bank': 'Modtagerbank:',
      'suspension.title': 'ÅRSAG TIL SUSPENSION OG AML-GEBYRER',
      'suspension.text1': 'Denne foranstaltning træffes inden for rammerne af due diligence og kontrolforpligtelser. Af juridiske årsager relateret til fortroligheden af procedurerne er vi ikke i stand til at give yderligere detaljer på dette tidspunkt.',
      'suspension.text2': 'I overensstemmelse med europæiske regler om bekæmpelse af hvidvaskning af penge og finansiering af terrorisme (Direktiv (EU) 2015/849 – AMLD), kan et administrativt verifikations- og behandlingsgebyr på',
      'suspension.text3': 'anvendes til at dække kontroloperationer og overvågning af finansielle transaktioner.',
      'suspension.covers': 'Dette gebyr dækker især:',
      'suspension.item1': 'Verifikation af identiteten på modtageren og afsenderen af overførslen',
      'suspension.item2': 'Undersøgelse af støttedokumenter vedrørende oprindelsen af midler',
      'suspension.item3': 'Administrativ behandling af advarsler og opdagede anomalier',
      'suspension.item4': 'Overholdelse af nationale og europæiske finansielle årvågenheds forpligtelser',
      'suspension.final': 'Uden regularisering eller levering af de anmodede støttedokumenter kan den komplette behandling af transaktionen ikke afsluttes.',
      'instructions.title': 'INSTRUKTIONER',
      'instructions.text': 'For enhver anmodning om yderligere oplysninger eller tvist, kontakt venligst TRACFIN-tjenesten kun gennem officielle kanaler.',
      'footer.tracfin': 'TRACFIN - Efterretningsbehandling og Aktion mod Hemmelige Finansielle Kredsløb',
      'footer.document': 'Dokument genereret kun til informationsformål.',
      'footer.confidential': 'Informationen indeholdt i dette dokument er fortrolig og beskyttet af erhvervshemmelighed.',
      'footer.ministry': 'Ministeriet for Økonomi og Finanser | Den Franske Republik'
    }
  };

  return translations[lang] || translations.fr;
};
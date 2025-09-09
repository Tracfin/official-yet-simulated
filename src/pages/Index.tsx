import { Building2, Users, AlertTriangle, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import tracfinLogo from "@/assets/tracfin-logo-circular.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-document-bg">
      {/* En-tête officiel */}
      <header className="bg-official-blue text-white py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <img src={tracfinLogo} alt="TRACFIN" className="h-20 mb-4" />
          <div>
            <h2 className="text-xl font-semibold">République Française</h2>
            <p className="text-sm opacity-90">Ministère de l'Économie et des Finances</p>
          </div>
        </div>
      </header>

      {/* Document principal */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Card className="bg-white shadow-lg border-l-4 border-l-official-blue">
          <div className="p-8">
            {/* Titre principal */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-text-formal mb-2">
                NOTIFICATION DE SUSPENSION TEMPORAIRE D'UN ORDRE DE VIREMENT
              </h1>
              <div className="text-sm text-muted-foreground">
                Référence: TRACFIN-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Section Émetteur */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-official-blue" />
                <h2 className="text-lg font-semibold text-text-formal">INFORMATIONS ÉMETTEUR</h2>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">Banque émettrice:</span>
                    <p className="text-text-formal">COGNI PAY</p>
                  </div>
                  <div>
                    <span className="font-semibold">Compte émetteur:</span>
                    <p className="text-text-formal font-mono">EUR – 0172080430</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Bénéficiaire */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-official-blue" />
                <h2 className="text-lg font-semibold text-text-formal">INFORMATIONS BÉNÉFICIAIRE</h2>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">Nom:</span>
                    <p className="text-text-formal">PETTERSSON KJELD VERNER</p>
                  </div>
                  <div>
                    <span className="font-semibold">Adresse:</span>
                    <p className="text-text-formal">Karlebyvej 6, 4894 Oester-Ulslev, Danemark</p>
                  </div>
                  <div>
                    <span className="font-semibold">Banque bénéficiaire:</span>
                    <p className="text-text-formal">LUNAR BANK A/S</p>
                  </div>
                  <div>
                    <span className="font-semibold">IBAN:</span>
                    <p className="text-text-formal font-mono">DK9266951000302631</p>
                  </div>
                  <div>
                    <span className="font-semibold">BIC:</span>
                    <p className="text-text-formal font-mono">LUNADK22</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Motif */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <h2 className="text-lg font-semibold text-text-formal">MOTIF DE LA SUSPENSION ET FRAIS AML</h2>
              </div>
              <div className="bg-orange-50 border-l-4 border-l-orange-400 p-6 rounded-r-lg">
                <p className="text-text-formal mb-4">
                  Cette mesure est prise dans le cadre des obligations de vigilance et de contrôle. 
                  Pour des raisons légales liées à la confidentialité des procédures, nous ne sommes 
                  pas en mesure de fournir davantage de détails à ce stade.
                </p>
                
                <p className="text-text-formal mb-4">
                  Conformément aux régulations européennes en matière de lutte contre le blanchiment 
                  de capitaux et le financement du terrorisme (Directive (UE) 2015/849 – AMLD), un 
                  frais administratif de vérification et de traitement de <strong>928 € (≈ 7 000 DKK)</strong> peut 
                  être appliqué pour couvrir les opérations de contrôle et de suivi des transactions financières.
                </p>

                <div className="mb-4">
                  <p className="font-semibold text-text-formal mb-2">Ce frais couvre notamment :</p>
                  <ul className="list-disc list-inside text-text-formal space-y-1 ml-4">
                    <li>La vérification de l'identité du bénéficiaire et de l'émetteur du virement</li>
                    <li>L'examen des documents justificatifs relatifs à l'origine des fonds</li>
                    <li>Le traitement administratif des alertes et anomalies détectées</li>
                    <li>La mise en conformité avec les obligations nationales et européennes de vigilance financière</li>
                  </ul>
                </div>

                <p className="text-text-formal font-medium">
                  Sans régularisation ou fourniture des justificatifs demandés, le traitement 
                  complet de la transaction ne peut être finalisé.
                </p>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Instructions */}
            <div className="bg-official-blue/5 p-6 rounded-lg">
              <h3 className="font-semibold text-text-formal mb-3">INSTRUCTIONS</h3>
              <div className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-official-blue mt-0.5" />
                <p className="text-text-formal">
                  Pour toute demande d'information complémentaire ou contestation, 
                  veuillez contacter le service TRACFIN par les voies officielles uniquement.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Pied de page */}
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <Separator className="mb-4" />
          <p className="mb-2">
            TRACFIN - Traitement du Renseignement et Action contre les Circuits FINanciers clandestins
          </p>
          <p>
            <strong>Document généré à titre informatif uniquement.</strong> Les informations contenues 
            dans ce document sont confidentielles et protégées par le secret professionnel.
          </p>
          <div className="mt-4 text-xs">
            Ministère de l'Économie et des Finances | République Française | {new Date().getFullYear()}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

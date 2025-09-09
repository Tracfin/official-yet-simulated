import { Building2, Users, AlertTriangle, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import tracfinLogo from "@/assets/tracfin-logo-circular.png";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-document-bg">
      {/* En-tête officiel */}
      <header className="bg-official-blue text-white py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={tracfinLogo} alt="TRACFIN" className="h-20 mb-4" />
            <div>
              <h2 className="text-xl font-semibold">{t('header.republic')}</h2>
              <p className="text-sm opacity-90">{t('header.ministry')}</p>
            </div>
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
                {t('title.main')}
              </h1>
              <div className="text-sm text-muted-foreground">
                {t('reference')}: TRACFIN-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 10000)).padStart(4, '0')}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Section Transaction */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-official-blue" />
                <h2 className="text-lg font-semibold text-text-formal">{t('transaction.title')}</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-l-official-blue p-4 rounded-r-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">{t('transaction.date')}</span>
                    <p className="text-text-formal">09 Septembre 2025</p>
                  </div>
                  <div>
                    <span className="font-semibold">{t('transaction.amount')}</span>
                    <p className="text-text-formal font-mono text-lg">46 950 €</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Émetteur */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-official-blue" />
                <h2 className="text-lg font-semibold text-text-formal">{t('sender.title')}</h2>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">{t('sender.bank')}</span>
                    <p className="text-text-formal">COGNI PAY</p>
                  </div>
                  <div>
                    <span className="font-semibold">{t('sender.account')}</span>
                    <p className="text-text-formal font-mono">EUR – 0172080430</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Bénéficiaire */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-official-blue" />
                <h2 className="text-lg font-semibold text-text-formal">{t('beneficiary.title')}</h2>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">{t('beneficiary.name')}</span>
                    <p className="text-text-formal">PETTERSSON KJELD VERNER</p>
                  </div>
                  <div>
                    <span className="font-semibold">{t('beneficiary.address')}</span>
                    <p className="text-text-formal">Karlebyvej 6, 4894 Oester-Ulslev, Danemark</p>
                  </div>
                  <div>
                    <span className="font-semibold">{t('beneficiary.bank')}</span>
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
                <h2 className="text-lg font-semibold text-text-formal">{t('suspension.title')}</h2>
              </div>
              <div className="bg-orange-50 border-l-4 border-l-orange-400 p-6 rounded-r-lg">
                <p className="text-text-formal mb-4">
                  {t('suspension.text1')}
                </p>
                
                <p className="text-text-formal mb-4">
                  {t('suspension.text2')} <strong>928 € (≈ 7 000 DKK)</strong> {t('suspension.text3')}
                </p>

                <div className="mb-4">
                  <p className="font-semibold text-text-formal mb-2">{t('suspension.covers')}</p>
                  <ul className="list-disc list-inside text-text-formal space-y-1 ml-4">
                    <li>{t('suspension.item1')}</li>
                    <li>{t('suspension.item2')}</li>
                    <li>{t('suspension.item3')}</li>
                    <li>{t('suspension.item4')}</li>
                  </ul>
                </div>

                <p className="text-text-formal font-medium">
                  {t('suspension.final')}
                </p>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Instructions */}
            <div className="bg-official-blue/5 p-6 rounded-lg">
              <h3 className="font-semibold text-text-formal mb-3">{t('instructions.title')}</h3>
              <div className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-official-blue mt-0.5" />
                <p className="text-text-formal">
                  {t('instructions.text')}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Pied de page */}
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <Separator className="mb-4" />
          <p className="mb-2">
            {t('footer.tracfin')}
          </p>
          <p>
            <strong>{t('footer.document')}</strong> {t('footer.confidential')}
          </p>
          <div className="mt-4 text-xs">
            {t('footer.ministry')} | {new Date().getFullYear()}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

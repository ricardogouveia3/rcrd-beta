import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";

export default function PhraseSection() {
  const { t } = useTranslation();
  const gridClassNames = `lg:col-start-9 md:col-start-5 md:col-span-2 lg:col-span-4 md:row-start-2 md:row-span-2`;

  return (
    <Card classNames={`${gridClassNames}`}>
      <p className="smooth-text-color text-sm lg:text-lg">
        {t("phrase.first")}
      </p>
      <br />
      <p className="default-text-color font-medium text-base lg:text-xl">
        {t("phrase.second")}
      </p>
    </Card>
  );
}

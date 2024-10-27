import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import gridClassNames from "@layout/grid";

export default function PhraseSection() {
  const { t } = useTranslation();

  return (
    <Card classNames={`${gridClassNames.phrase}`}>
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

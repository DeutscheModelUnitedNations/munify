import React from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import Button from "../button";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";

type TextSectionProps = {
  title: string;
  text: string;
  button?: {
    lable: string;
    link: string;
    faIcon?: IconDefinition;
  };
};

export default function TextSection({ title, text, button }: TextSectionProps) {
  const { LL } = useI18nContext();
  const Router = useRouter();

  return (
    <>
      <h1
        className="text-4xl font-bold lg:text-right text-slate-900 leading-tight"
        style={{ fontFamily: "Vollkorn" }}
      >
        {title}
      </h1>
      <div className="pb-10 lg:pb-0">
        <p className="text-lg text-left text-slate-900 leading-normal">
          {text}
        </p>
        {button && (
          <div className="pt-4">
          <Button
            label={button.lable}
            onClick={() => {
              Router.push(button.link);
            }}
            faIcon={button.faIcon}
            className="mt-4"
          />
          </div>
        )}
      </div>
    </>
  );
}

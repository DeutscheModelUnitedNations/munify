import React from "react";
import { Card } from "primereact/card";
import { LiteralExpression } from "typescript";

interface WidgetTemplateProps {
  children: React.ReactNode;
  cardTitle: string;
  styles?: string;
}

export default function WidgetTemplate({
  children,
  cardTitle,
  styles,
}: WidgetTemplateProps) {

  const widgetClassNames = () => {
    const classNames = ["flex flex-col bg-gray-light rounded-lg p-3"];

    if (styles) {
      classNames.push(styles);
    }

    return classNames.join(" ");
  }

  return (
    <>
      <div className={widgetClassNames()}>
        {cardTitle ? (<div className=" font-bold mb-2 text-lg">{cardTitle}</div>) : null}
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
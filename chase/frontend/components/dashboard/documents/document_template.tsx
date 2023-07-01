import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons/faShareNodes";
import WidgetBoxTemplate from "@/components/widget_box_template";
import { SmallFlag } from "@/components/flag_templates";
import { CountryCode } from "@/custom_types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useI18nContext } from "@/i18n/i18n-react";

interface DocumentProps {
  documentId: string;
  introducedBy?: CountryCode;
  sponsors?: string[];
  shared?: boolean;
  icon: IconDefinition;
  topic?: string;
}

/**
 * This Component is used in the Documents Widget on the Dashboard.
 * It creates Boxes, each containing a document's ID, its sponsors,
 * its topic, and a flag of the country. It is not used directly,
 * but rather through the individual document components "paper",
 * "draft" and "resolution".
 */

export default function Document({
  documentId,
  introducedBy,
  sponsors,
  shared,
  icon,
  topic,
}: DocumentProps) {
  const { LL } = useI18nContext();

  return (
    <WidgetBoxTemplate>
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-icon dark:text-primary-500 text-2xl"
      />
      <div className="flex-1 flex-col justify-start items-center">
        <div className="text-sm font-semibold text-gray-text dark:text-primary-800">
          {documentId}
        </div>
        {sponsors && (
          <div className="text-xs text-gray-icon dark:text-primary-800">
            {`${
              sponsors.length
            } ${LL.participants.dashboard.documentsWidget.SPONSORS()}`}
          </div>
        )}
        {topic && (
          <div className="text-xs text-gray-icon dark:text-primary-800">
            {topic}
          </div>
        )}
      </div>
      {shared && (
        <FontAwesomeIcon
          icon={faShareNodes}
          className="text-gray-icon dark:text-primary-800"
        />
      )}
      {introducedBy && <SmallFlag countryCode={introducedBy} />}
    </WidgetBoxTemplate>
  );
}

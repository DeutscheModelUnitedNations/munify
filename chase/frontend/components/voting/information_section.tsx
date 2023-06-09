import { CountryCode, Voting } from "@/custom_types";
import getCountryNameByCode from "@/misc/get_country_name_by_code";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faGavel } from "@fortawesome/free-solid-svg-icons/faGavel";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LargeFlag } from "@components/flag_templates";
import { faPieChart } from "@fortawesome/free-solid-svg-icons";
import { useI18nContext } from "@/i18n/i18n-react";

/**
 * This Component is used in the Voting Component.
 * It displays the information about the voting.
 * It includes the title, description, introducedBy, substantiveVote and majority.
 */

export default function InformationSection({
  title,
  description,
  introducedBy,
  substantiveVote,
  majority,
}: Voting) {
  const { LL, locale } = useI18nContext();

  const getFlag = (countryCode: CountryCode = "uno"): CountryCode => {
    return countryCode;
  };

  const neededMajority = () => {
    switch (majority) {
      case "simple":
        return LL.participants.voting.votingInfo.majorityMode.SIMPLE();
      case "two-thirds":
        return LL.participants.voting.votingInfo.majorityMode.TWO_THIRDS();
      case "three-quarters":
        return LL.participants.voting.votingInfo.majorityMode.THREE_QUARTERS();
      case "consensus":
        return LL.participants.voting.votingInfo.majorityMode.CONSENSUS();
      case "security-council":
        return LL.participants.voting.votingInfo.majorityMode.SECURITY_COUNCIL();
      default:
        return LL.participants.voting.votingInfo.majorityMode.SIMPLE();
    }
  };

  return (
    <div className="flex flex-row justify-between gap-2 mb-5">
      <div
        className="flex-1 grid items-center gap-3"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        <div className="text-lg font-bold col-span-2">{title}</div>
        {description && (
          <>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-lg justify-self-center ml-2"
            />
            <div className="text-sm">{description}</div>
          </>
        )}
        {introducedBy && (
          <>
            <FontAwesomeIcon
              icon={faFlag}
              className="text-lg justify-self-center ml-2"
            />
            <div className="text-sm">
              {LL.participants.voting.votingInfo.INTRODUCED_BY()}{" "}
              {getCountryNameByCode(introducedBy, locale)}
            </div>
          </>
        )}
        <FontAwesomeIcon
          icon={faGavel}
          className="text-xl justify-self-center ml-2"
        />
        {substantiveVote ? (
          <div className="text-sm">
            {LL.participants.voting.votingInfo.votingMode.SUBSTANTIAL_VOTING()}
          </div>
        ) : (
          <div className="text-sm">
            {LL.participants.voting.votingInfo.votingMode.PROCEDURAL_VOTING()}
          </div>
        )}
        <FontAwesomeIcon
          icon={faPieChart}
          className="text-xl justify-self-center ml-2"
        />
        <div className="text-sm">{neededMajority()}</div>
      </div>
      <div className="flex flex-col justify-start items-center">
        <LargeFlag countryCode={getFlag(introducedBy)} className="ml-4" />
      </div>
    </div>
  );
}

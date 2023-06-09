import { CountryCode } from "@/custom_types";

/**
 * This function is used to get the path to the flag image for a given country code.
 */

export default function getFlagPathByCode(countryCode: CountryCode): string {
  let path = "";

  if (countryCode.startsWith("nsa_")) {
    path = `/nsa_logos/${countryCode}.png`;
  } else if (["unm", "unw", "gsm", "gsw", "uno"].includes(countryCode)) {
    path = "/flags/uno.svg";
  } else if (countryCode === "xxx") {
    path = "/flags/xxx.svg";
  } else {
    path = `/flags/${countryCode}.svg`;
  }

  return path;
}

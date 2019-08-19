import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Medal } from "../../assets/icons/medal.svg";
import { ReactComponent as People } from "../../assets/icons/people.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as ArrowRoundDown } from "../../assets/icons/arrow-round-down.svg";

import camelcase from "camelcase";

export const iconDict = {
  person: Person,
  medal: Medal,
  people: People,
  mail: Mail,
  arrowRoundDown: ArrowRoundDown
};

export const getIconSVG = name => {
  return iconDict[camelcase(name)];
};

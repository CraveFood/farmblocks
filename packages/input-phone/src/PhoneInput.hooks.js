import { useRef, useEffect, useMemo } from "react";
import Fuse from "fuse.js";

const options = {
  shouldSort: true,
  keys: ["name", "nativeNames", "altSpellings", "flag", "callingCode"],
};

// eslint-disable-next-line import/prefer-default-export
export const useCountrySearch = (data, query, priority) => {
  const fuse = useRef(new Fuse(data, options));

  const allCountries = useMemo(() => {
    const codes = priority?.split(",");

    const topCountries = data?.filter(country => codes?.includes(country.code));

    const indexedTopCountries = topCountries?.reduce(
      (acc, country) => ({ ...acc, [country.code]: country }),
      {},
    );

    const orderedTopCountries =
      codes?.map(code => indexedTopCountries[code]) || [];

    return [...orderedTopCountries, ...data];
  }, [data, priority]);

  useEffect(() => {
    fuse.current = new Fuse(data, options);
  }, [data]);

  if (!query) {
    return allCountries;
  }

  return fuse.current.search(query);
};

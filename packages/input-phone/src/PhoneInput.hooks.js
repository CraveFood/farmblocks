import { useRef, useEffect } from "react";
import Fuse from "fuse.js";

const options = {
  shouldSort: true,
  keys: ["name", "nativeNames", "altSpellings", "flag", "callingCode"],
};

// eslint-disable-next-line import/prefer-default-export
export const useCountrySearch = (data, query) => {
  const fuse = useRef(new Fuse(data, options));

  useEffect(() => {
    fuse.current = new Fuse(data, options);
  }, [data]);

  if (!query) return data;
  return fuse.current.search(query);
};

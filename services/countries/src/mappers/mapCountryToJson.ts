import type { MapCountryToJson } from '@/abstracts/mappers';

const mapCountryToJson: MapCountryToJson = (country) => {
  return {
    id: country.id,
    name: country.name,
  };
};

export default mapCountryToJson;

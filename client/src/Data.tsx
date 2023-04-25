import type { CSSProperties } from 'react';

import { EMPTY_STRING } from '@/common/primitives';

const formatData = (response: unknown) => JSON.stringify(response, null, 2);

interface DataProps {
  data: unknown;
  style?: CSSProperties;
}

export default function Data({ data, style }: DataProps) {
  return <pre style={style}>{data ? formatData(data) : EMPTY_STRING}</pre>;
}

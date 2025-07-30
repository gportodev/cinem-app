import React, { JSX } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

type LoaderProps = ActivityIndicatorProps;

function Loader({ ...rest }: LoaderProps): JSX.Element {
  return <ActivityIndicator {...rest} />;
}

export { Loader };

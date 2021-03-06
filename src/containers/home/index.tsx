import React from 'react';
import Loading from '../../components/Loading';
import loadable from '../../utils/loadable';

export default loadable(() => import('./Home'), {
  fallback: <Loading />,
});

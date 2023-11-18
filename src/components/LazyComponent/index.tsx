// LazyComponent.js
import React, { lazy, startTransition, Suspense } from 'react';

function LazyComponent({ componentName }: { componentName: string | null }) {
  console.log(`@/pages/${componentName}`);

  const Component = lazy(() => startTransition(() => import(`@/pages/${componentName}`)));
  return <Suspense fallback={<div>Loading...</div>}>
    {Component ? <Component /> : <div>Component is undefined</div>}
  </Suspense>

}

export default LazyComponent;

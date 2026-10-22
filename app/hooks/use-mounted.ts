import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

// Returns false on the server and during hydration, and true after the client renders.
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

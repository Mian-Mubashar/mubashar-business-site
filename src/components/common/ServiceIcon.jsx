import React from 'react';
export function ServiceIcon({ index = 0 }) {
  const paths = [
    'M4 4h6v6H4z M14 14h6v6h-6z M14 4h6v6h-6z M7 10v7h7 M10 7h4',
    'M9 3h6v6h6v6h-6v6H9v-6H3V9h6z',
    'M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z M9 12l2 2 4-4',
    'M4 3h16v7H4z M4 14h16v7H4z M7 6h1 M7 17h1 M12 6h5 M12 17h5',
    'M3 8a14 14 0 0 1 18 0 M6 12a9 9 0 0 1 12 0 M9 16a4 4 0 0 1 6 0 M12 20h.01',
    'M4 13v-2a8 8 0 0 1 16 0v2 M4 12h3v7H4z M17 12h3v7h-3z M17 19c0 2-3 2-5 2',
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index % paths.length]} /></svg>;
}

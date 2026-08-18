// Os tipos do react-scripts declaram apenas `*.module.css` (CSS Modules).
// Folhas de estilo comuns importadas por efeito colateral (`import './App.css'`)
// ficam sem declaracao, e o TypeScript 6+ acusa TS2882 nelas.
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

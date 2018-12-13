import mjs from './transpile-mjs'
import nd from './nd'

window.mjs = mjs
window.nd = nd

window.mjs.evalMjs = (code) => {
  eval(mjs.transpile(code))
}



// const loadResource = url => new Promise((resolve) => {
//   const head = document.getElementsByTagName('head')[0];
//   const theScript = document.createElement('script');
//   theScript.src = url;
//   theScript.onload = () => {
//     resolve();
//   };
//   head.appendChild(theScript);
// })

// Promise.all([loadResource(REACT), loadResource(REACT_DOM), loadResource(BABEL_STANDALONE)])
//   .then(() => {
//     window.jsx = {}
//     window.jsx.transpile = input => window.Babel.transform(input, {
//       presets: [['es2015', { loose: true, modules: false }], 'react'],
//     }).code
//     window.jsx.evaluateJSX = input => eval(window.jsx.transpile(input))  // eslint-disable-line
//     window.iodide.exportJSX = (variableName, variable) => {
//       const out = variable
//       window[variableName] = out;
//     }
//     window.iodide.addOutputHandler({
//       shouldHandle: val => window.React.isValidElement(val),
//       render: (val) => {
//         const elem = document.createElement('div')
//         window.ReactDOM.render(val, elem)
//         return elem
//       },
//     });
//   })

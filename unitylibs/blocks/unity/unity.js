export default async function init(el) {
  const unitylib = 'http://localhost:3000'
  const { default: init } = await import(`${unitylib}/unitylibs/core/workflow/workflow.js`);
  init(el);
}

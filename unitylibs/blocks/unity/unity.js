export default async function init(el) {
  const unitylib = 'https://blockpoc--unity--adobecom.hlx.page'
  const { default: init } = await import(`${unitylib}/unitylibs/core/workflow/workflow.js`);
  init(el);
  
}

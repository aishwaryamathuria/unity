/* eslint-disable eqeqeq */
/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */

import {
  unityConfig,
  getUnityLibs,
  loadImg,
  loadStyle,
  createTag,
  loadSvgs,
  loadScript,
} from '../../../scripts/utils.js';

var ccEverywhere;

const productIcons = {
  "photoshop": ["Continue in app", `<svg id="Photoshop_40" data-name="Photoshop 40" xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39">
  <path id="Path_99550" data-name="Path 99550" d="M7.125,0H33a7.005,7.005,0,0,1,7,7.1V31.9A7.11,7.11,0,0,1,32.875,39H7.125A7.11,7.11,0,0,1,0,31.9V7.1A7.032,7.032,0,0,1,7.125,0Z" fill="#001e36"></path>
  <path id="Path_99551" data-name="Path 99551" d="M7.2,25.375V8.25c0-.125,0-.25.125-.25h5.25a8.738,8.738,0,0,1,3.375.5A6.555,6.555,0,0,1,18.2,9.75a4.945,4.945,0,0,1,1.25,1.875,6.349,6.349,0,0,1,.375,2.125,6.1,6.1,0,0,1-1,3.5,5.926,5.926,0,0,1-2.625,2,11.784,11.784,0,0,1-3.75.625H10.825V25.25a.436.436,0,0,1-.125.25H7.45C7.325,25.625,7.2,25.5,7.2,25.375ZM10.825,11.25v5.625h1.5a9.649,9.649,0,0,0,1.875-.25,3.236,3.236,0,0,0,1.375-.875,2.444,2.444,0,0,0,.5-1.75,3.328,3.328,0,0,0-.375-1.5,4.313,4.313,0,0,0-1.125-1,5.182,5.182,0,0,0-2-.375H11.45A2.543,2.543,0,0,0,10.825,11.25Z" transform="translate(1.8 1.942)" fill="#31a8ff"></path>
  <path id="Path_99552" data-name="Path 99552" d="M27.35,14.95a6.279,6.279,0,0,0-1.625-.625,9.649,9.649,0,0,0-1.875-.25,2.752,2.752,0,0,0-1,.125c-.25,0-.375.125-.5.375-.125.125-.125.25-.125.5a.459.459,0,0,0,.125.375,2.727,2.727,0,0,0,.625.5,4.44,4.44,0,0,0,1.125.5,9.369,9.369,0,0,1,2.5,1.25,7.163,7.163,0,0,1,1.375,1.375,3.993,3.993,0,0,1,.375,1.75,5.093,5.093,0,0,1-.625,2.25,5.535,5.535,0,0,1-1.875,1.5,7.564,7.564,0,0,1-3,.5,13.774,13.774,0,0,1-2.25-.25,9.207,9.207,0,0,1-1.75-.5c-.125,0-.25-.25-.25-.375V21.075l.125-.125h.125a10.814,10.814,0,0,0,2.125.875,9.715,9.715,0,0,0,2,.25,3.345,3.345,0,0,0,1.375-.25.844.844,0,0,0,.5-.75.687.687,0,0,0-.375-.625,4.954,4.954,0,0,0-1.625-.75,8.644,8.644,0,0,1-2.375-1.25,4.324,4.324,0,0,1-1.25-1.375,3.992,3.992,0,0,1-.375-1.75,3.777,3.777,0,0,1,.625-2,3.448,3.448,0,0,1,1.75-1.5,6.694,6.694,0,0,1,3-.625,12.127,12.127,0,0,1,2.125.125,6.593,6.593,0,0,1,1.5.375l.125.125v3l-.125.125Z" transform="translate(4.65 2.731)" fill="#31a8ff"></path>
</svg>`],
  "lightroom": ["Continue in app", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 54"><defs><style>.cls-1{fill:#001e36;}.cls-2{fill:#31a8ff;}</style></defs><title>Asset 127</title><g id="Layer_2" data-name="Layer 2"><g id="Surfaces"><g id="Photo_Surface" data-name="Photo Surface"><g id="Outline_no_shadow" data-name="Outline no shadow"><rect class="cls-1" width="56" height="54" rx="9.91383"/></g></g></g><g id="Outlined_Mnemonics_Logos" data-name="Outlined Mnemonics &amp; Logos"><g id="Lr"><path class="cls-2" d="M28.95007,37.999H14.372q-.36987,0-.36963-.407L14.01965,14.374a.29411.29411,0,0,1,.333-.333h4.28875a.22914.22914,0,0,1,.25879.259l.06,18.78h10.72q.33326,0,.25879.333l-.61929,4.253a.35273.35273,0,0,1-.14746.27759A.49653.49653,0,0,1,28.95007,37.999Z"/><path class="cls-2" d="M33.05,19.61328h4.03321a.50356.50356,0,0,1,.481.36987,1.80244,1.80244,0,0,1,.18506.51807,6.06171,6.06171,0,0,1,.11084.72144q.03663.38854.03711.83252a8.64361,8.64361,0,0,1,2.46045-1.9795,6.25119,6.25119,0,0,1,3.24258-.83252.29451.29451,0,0,1,.333.333v4.477c0,.17285-.124.259-.37012.259a7.79955,7.79955,0,0,0-2.24355.1665,9.111,9.111,0,0,0-1.92383.61035,5.51208,5.51208,0,0,0-1.49912.85108V37.6601q0,.3329-.29639.333H33.383a.32707.32707,0,0,1-.37011-.37012V24.9043q0-.81372-.01856-1.72071-.019-.906-.05518-1.79443a11.69837,11.69837,0,0,0-.14794-1.51685.21258.21258,0,0,1,.25878-.259Z"/></g></g></g></svg>`],
  "acrobat": ["Continue in app", `<svg id="Acrobat_64" data-name="Acrobat 64" xmlns="http://www.w3.org/2000/svg" width="64" height="62" viewBox="0 0 64 62">
  <path id="Path_102649" data-name="Path 102649" d="M11.364.4H52.636A11.323,11.323,0,0,1,64,11.691V51.109A11.322,11.322,0,0,1,52.636,62.4H11.364A11.323,11.323,0,0,1,0,51.109V11.691A11.2,11.2,0,0,1,11.364.4Z" transform="translate(0 -0.4)" fill="#b30b00"></path>
  <path id="Path_102650" data-name="Path 102650" d="M45.131,30.262c-2.993-3.143-11.173-1.768-13.168-1.571a43.955,43.955,0,0,1-5.587-7.071,30.388,30.388,0,0,0,1.8-9.428c0-2.946-1.2-5.892-4.389-5.892a3.194,3.194,0,0,0-2.793,1.571c-1.4,2.357-.8,7.071,1.4,11.981A76.62,76.62,0,0,1,16.8,32.816c-3.192,1.178-10.175,4.321-10.774,7.856a2.862,2.862,0,0,0,1,2.75,3.77,3.77,0,0,0,2.793.982c4.19,0,8.38-5.7,11.373-10.8a65.381,65.381,0,0,1,9.976-2.553c4.389,3.928,8.38,4.517,10.375,4.517,2.793,0,3.791-1.178,4.19-2.161A2.685,2.685,0,0,0,45.131,30.262Zm-2.793,1.964c-.2.786-1.2,1.571-2.993,1.178a14.638,14.638,0,0,1-5.786-2.946,27.751,27.751,0,0,1,7.183-.2C41.54,30.459,42.537,31.048,42.338,32.226ZM22.984,8.657a1.1,1.1,0,0,1,1-.589c1,0,1.2,1.178,1.2,2.161a27.809,27.809,0,0,1-1.4,7.071C22.186,12.978,22.386,9.835,22.984,8.657Zm-.2,22.194a46.63,46.63,0,0,0,2.594-6.285A36.611,36.611,0,0,0,28.97,29.28,28.884,28.884,0,0,0,22.785,30.851ZM16,35.369c-2.793,4.321-5.387,7.071-6.983,7.071a1.214,1.214,0,0,1-.8-.2c-.2-.393-.4-.786-.2-1.178C8.22,39.493,11.412,37.333,16,35.369Z" transform="translate(6.023 5.548)" fill="#fff"></path>
</svg>`],
"express": ["Continue in app", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Group_310552" data-name="Group 310552" width="27.7" height="27" viewBox="0 0 27.7 27">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_607345" data-name="Path 607345" d="M0,0H27.7V27H0Z" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <path id="Path_358736" data-name="Path 358736" d="M17.862,13.87l-3.956,9.421A1.952,1.952,0,0,0,15.7,26H20.11a1.963,1.963,0,0,0-.006-3.926l-.753.005a.445.445,0,0,1-.41-.619l1.4-3.347a.433.433,0,0,1,.805,0l2.865,6.7A1.9,1.9,0,0,0,25.818,26a1.952,1.952,0,0,0,1.8-2.714l-3.982-9.423a3.134,3.134,0,0,0-5.773.006" transform="translate(-13.75 -11.954)" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Path_607346" data-name="Path 607346" d="M0,0H14.8V14.048H0Z" fill="none"/>
    </clipPath>
  </defs>
  <g id="Group_307248" data-name="Group 307248">
    <g id="Mask_Group_189494" data-name="Mask Group 189494" clip-path="url(#clip-path)">
      <path id="Path_358735" data-name="Path 358735" d="M22.8,0H4.9A4.908,4.908,0,0,0,0,4.9V22.1A4.908,4.908,0,0,0,4.9,27H22.8a4.908,4.908,0,0,0,4.9-4.9V4.9A4.908,4.908,0,0,0,22.8,0" fill="#000b1d"/>
    </g>
  </g>
  <g id="Group_307253" data-name="Group 307253" transform="translate(6.875 5.977)">
    <g id="Group_307252" data-name="Group 307252" clip-path="url(#clip-path-2)">
      <g id="Group_307251" data-name="Group 307251" transform="translate(-0.387 0)">
        <g id="Group_307250" data-name="Group 307250">
          <g id="Mask_Group_189495" data-name="Mask Group 189495" clip-path="url(#clip-path-3)">
            <image id="Rectangle_223339" data-name="Rectangle 223339" width="14.88" height="14.16" transform="translate(-0.009 -0.097)" xlink:href="data:image/png;base64,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"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>`],
}

const featureIcons = {
  "removebg": ["Remove Background", "/unity/assets/test/removebg.svg"],
  "changebg": ["Change Background", "/unity/assets/test/changebg.svg"],
  "fillsign": ["Fill and Sign", "/unity/assets/test/fillsign.svg"],
  "slider": ["Edit Hue/Sat", "/unity/assets/test/slider.svg"],
  "colorize": ["Colorize Image", "/unity/assets/test/colorize.svg"],
  "upload": ["Upload Asset", "/unity/assets/test/upload.svg"],
  "app": ["Continue in app", "/unity/assets/product-icons/photoshop.svg"],
}

export default class ActionBinder {
  constructor(unityEl, workflowCfg, wfblock, canvasArea, actionMap = {}, limits = {}) {
    this.el = unityEl;
    this.workflowCfg = workflowCfg;
    this.block = wfblock;
    this.actionMap = actionMap;
    this.canvasArea = canvasArea;
    this.operations = [];
    this.progressCircleEl = null;
    this.errorToastEl = null;
    this.psApiConfig = this.getPsApiConfig();
    this.serviceHandler = null;
    this.promiseStack = [];
  }

  getPsApiConfig() {
    unityConfig.psEndPoint = {
      assetUpload: `${unityConfig.apiEndPoint}/asset`,
      acmpCheck: `${unityConfig.apiEndPoint}/asset/finalize`,
      removeBackground: `${unityConfig.apiEndPoint}/providers/PhotoshopRemoveBackground`,
      changeBackground: `${unityConfig.apiEndPoint}/providers/PhotoshopChangeBackground`,
    };
    return unityConfig;
  }

  hideElement(item, b) {
    if (typeof item === 'string') b?.querySelector(item)?.classList.remove('show');
    else item?.classList.remove('show');
  }

  showElement(item, b) {
    if (typeof item === 'string') b?.querySelector(item)?.classList.add('show');
    else item?.classList.add('show');
  }

  toggleElement(item, b) {
    if (typeof item === 'string') {
      if (b?.querySelector(item)?.classList.contains('show')) b?.querySelector(item)?.classList.remove('show');
      else b?.querySelector(item)?.classList.add('show');
      return;
    }
    if (item?.classList.contains('show')) item?.classList.remove('show');
    else item?.classList.add('show');
  }

  styleElement(itemSelector, propertyName, propertyValue) {
    const item = this.block.querySelector(itemSelector);
    item.style[propertyName] = propertyValue;
  }

  async psActionMaps(values, e) {
    const { default: ServiceHandler } = await import(`${getUnityLibs()}/core/workflow/${this.workflowCfg.name}/service-handler.js`);
    this.serviceHandler = new ServiceHandler(
      this.workflowCfg.targetCfg.renderWidget,
      this.canvasArea,
    );
    if (this.workflowCfg.targetCfg.renderWidget) {
      const svgs = this.canvasArea.querySelectorAll('.unity-widget img[src*=".svg"');
      await loadSvgs(svgs);
      if (!this.progressCircleEl) {
        this.progressCircleEl = await this.createSpectrumProgress();
        this.canvasArea.append(this.progressCircleEl);
      }
    }
    for (const value of values) {
      switch (true) {
        case value.actionType == 'hide':
          value.targets.forEach((t) => this.hideElement(t, this.block));
          break;
        case value.actionType == 'setCssStyle':
          value.targets.forEach((t) => { this.styleElement(t, value.propertyName, value.propertyValue) });
          break;
        case value.actionType == 'show':
          value.targets.forEach((t) => this.showElement(t, this.block));
          break;
        case value.actionType == 'toggle':
          value.targets.forEach((t) => this.toggleElement(t, this.block));
          break;
        case value.actionType == 'removebg':
          await this.removeBackground(value);
          break;
        case value.actionType == 'changebg':
          await this.changeBackground(value);
          break;
        case value.actionType == 'imageAdjustment':
          this.changeAdjustments(e.target.value, value);
          break;
        case value.actionType == 'upload':
          this.userImgUpload(value, e);
          break;
        case value.actionType == 'fillsign':
          this.fillsign(value, e);
          break;
        case value.actionType == 'resize':
          this.resize(value, e);
          break;
        case value.actionType == 'continueInApp':
          this.continueInApp(value, e);
          break;
        case value.actionType == 'refresh':
          value.target.src = value.sourceSrc;
          this.operations = [];
          break;
        default:
          break;
      }
    }
    // if (this.workflowCfg.targetCfg.renderWidget && this.operations.length) {
    //   this.canvasArea.querySelector('.widget-product-icon')?.classList.remove('show');
    //   [...this.canvasArea.querySelectorAll('.widget-refresh-button')].forEach((w) => w.classList.add('show'));
    // }
  }

  initActionListeners() {
    for (const [key, values] of Object.entries(this.actionMap)) {
      const el = this.block.querySelector(key);
      if (!el) return;
      switch (true) {
        case el.nodeName === 'A':
          el.href = '#';
          el.addEventListener('click', async (e) => {
            e.preventDefault();
            await this.psActionMaps(values, e);
          });
          break;
        case el.nodeName === 'INPUT':
          el.addEventListener('change', async (e) => {
            await this.psActionMaps(values, e);
          });
          break;
        default:
          break;
      }
    }
  }

  getImageBlobData(url) {
    return new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) res(xhr.response);
        else rej(xhr.status);
      };
      xhr.send();
    });
  }

  async uploadImgToUnity(storageUrl, id, blobData, fileType) {
    const uploadOptions = {
      method: 'PUT',
      headers: { 'Content-Type': fileType },
      body: blobData,
    };
    const response = await fetch(storageUrl, uploadOptions);
    if (response.status != 200) return '';
    return id;
  }

  getFileType() {
    if (this.operations.length) {
      const lastOperation = this.operations[this.operations.length - 1];
      if (lastOperation.operationType == 'upload') return lastOperation.fileType;
    }
    return 'image/jpeg';
  }

  async scanImgForSafety(assetId) {
    const assetData = { assetId, targetProduct: this.workflowCfg.productName };
    const optionsBody = { body: JSON.stringify(assetData) };
    try {
      this.serviceHandler.postCallToService(
        this.psApiConfig.psEndPoint.acmpCheck,
        optionsBody,
      );
    }
    catch(e) {
      // Finalize Api call
    }
  }

  async uploadAsset(imgUrl) {
    const resJson = await this.serviceHandler.postCallToService(
      this.psApiConfig.psEndPoint.assetUpload,
      {},
    );
    const { id, href } = resJson;
    const blobData = await this.getImageBlobData(imgUrl);
    const fileType = this.getFileType();
    const assetId = await this.uploadImgToUnity(href, id, blobData, fileType);
    const { origin } = new URL(imgUrl);
    if ((imgUrl.startsWith('blob:')) || (origin != window.location.origin)) this.scanImgForSafety(assetId);
    return assetId;
  }

  // userImgUpload(params, e) {
  //   this.canvasArea.querySelector('img').style.filter = '';
  //   this.operations = [];
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   const objUrl = URL.createObjectURL(file);
  //   const { target } = params;
  //   target.src = objUrl;
  // }


  isImageGrayscale(imageSrc) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous'; // Enable CORS if needed
      img.src = imageSrc;
      img.onload = function() {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          canvas.width = img.width;
          canvas.height = img.height;
          
          ctx.drawImage(img, 0, 0);
          
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
  
          let isGrayscale = true;
  
          for (let i = 0; i < data.length; i += 4) {
              const r = data[i];     // Red
              const g = data[i + 1]; // Green
              const b = data[i + 2]; // Blue
  
              if (r !== g || g !== b) {
                  isGrayscale = false;
                  break;
              }
          }
          resolve(isGrayscale);
      };
    });
  }

  async distillBert(inputs) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://dev-spectra.creativecloud.adobe.com',
        'x-api-key': 'CCHomeMLRepo1'
      },
      body: `{"endpoint":"dp-protips-dbert","contentType":"application/json","payload":{"data":{"inputs":"${inputs}"}}}`
    };
    const res = await fetch('https://cchome-dev.adobe.io/int/v1/models', options);
    const resjson = await res.json();
    const a = resjson.data[0][0].label;
    switch(a) {
      case 'removeBackgroundTalent':
        return 'removebg';
      case 'enhanceImageTalent':
        return 'slider'
      case 'colorizeTalent':
        return 'colorize'
      default:
        break;
    }
  }

  async userImgUpload(params, e) {
    this.canvasArea.querySelector('img').style.filter = '';
    this.operations = [];
    const file = e.target.files[0];
    if (!file) return;
    if (file.type.startsWith('image')) {
      const objUrl = URL.createObjectURL(file);
      const img = new Image;
      img.src = objUrl;
      await loadImg(img);
      if (img.width < 100) {
        this.workflowCfg.productName = 'express';
        this.canvasArea.querySelector(`.resize-button`)?.classList.add('show');
        [...this.canvasArea.querySelectorAll('.acrobat-action.show, .lightroom-action.show, .photoshop-action.show')].forEach((b) => b.classList.remove('show'));
        this.canvasArea.querySelector('.photoshop-action').classList.add('show');
      } else {
        this.workflowCfg.productName = 'photoshop'
        const { target } = params;
        target.src = objUrl;
        let inputs = "rgbcolor jpeg medium sixteen";
        const isGrayScale = await this.isImageGrayscale(target.src);
        if (isGrayScale)inputs = "grayscale jpeg medium eight";
        const res = await this.distillBert(inputs);
        this.canvasArea.querySelector(`.${res}-button`)?.classList.add('show'); 
        [...this.canvasArea.querySelectorAll('.acrobat-action.show, .lightroom-action.show, .express-action.show')].forEach((b) => b.classList.remove('show'));
        this.canvasArea.querySelector('.photoshop-action').classList.add('show');
      }
    } else if (file.type == 'application/pdf') {
      this.workflowCfg.productName = 'acrobat';
      await this.singleFileUpload(file);
      [...this.canvasArea.querySelectorAll('.photoshop-action.show, .lightroom-action.show, .express-action.show')].forEach((b) => b.classList.remove('show'));
      this.canvasArea.querySelector('.fillsign-button')?.classList.add('show');
      const { target } = params;
      target.src = this.el.querySelector('p img').src;
    }
    this.canvasArea.querySelector('.unity-option-area .show')?.classList.remove('show');
    const b = this.canvasArea.querySelector(".continue-in-app-button .btn-icon");
    b.innerHTML = productIcons[this.workflowCfg.productName][1];
    const c = this.canvasArea.querySelector(".widget-product-icon");
    c.append(createTag('img', { src: productIcons[this.workflowCfg.productName][1]}));
    c.innerHTML = productIcons[this.workflowCfg.productName][1];
  }

  async removeBackground(params) {
    const optype = 'removeBackground';
    let { source, target } = params;
    if (typeof(source) == 'string') source = this.block.querySelector(source);
    if (typeof(target) == 'string') target = this.block.querySelector(target);
    const operationItem = {
      operationType: optype,
      sourceAssetId: null,
      sourceSrc: source.src,
      assetId: null,
      assetUrl: null,
    };
    let assetId = null;
    if (this.operations.length) assetId = this.operations[this.operations - 1].assetId;
    else assetId = await this.uploadAsset(source.src);
    operationItem.sourceAssetId = assetId;
    const removeBgOptions = { body: `{"surfaceId":"Unity","assets":[{"id": "${assetId}"}]}` };
    const resJson = await this.serviceHandler.postCallToService(
      this.psApiConfig.psEndPoint[optype],
      removeBgOptions,
    );
    const opId = resJson.assetId;
    operationItem.assetId = opId;
    operationItem.assetUrl = resJson.outputUrl;
    target.src = resJson.outputUrl;
    await loadImg(target);
    this.operations.push(operationItem);
  }

  async changeBackground(params) {
    const opType = 'changeBackground';
    let { source, target, backgroundSrc} = params;
    if (typeof(source) == 'string') source = this.block.querySelector(source);
    if (typeof(target) == 'string') target = this.block.querySelector(target);
    if (typeof(backgroundSrc) == 'string' && !backgroundSrc.startsWith("http")) backgroundSrc = this.block.querySelector(backgroundSrc);
    const operationItem = {
      operationType: opType,
      sourceSrc: source.src,
      backgroundSrc: backgroundSrc.src,
      assetId: null,
      assetUrl: null,
      fgId: null,
      bgId: null,
    };
    const fgId = this.operations[this.operations.length - 1].assetId;
    const bgId = await this.uploadAsset(backgroundSrc);
    const changeBgOptions = {
      body: `{
              "assets": [{ "id": "${fgId}" },{ "id": "${bgId}" }],
              "metadata": {
                "foregroundImageId": "${fgId}",
                "backgroundImageId": "${bgId}"
              }
            }`,
    };
    const resJson = await this.serviceHandler.postCallToService(
      this.psApiConfig.psEndPoint[opType],
      changeBgOptions,
    );
    const changeBgId = resJson.assetId;
    operationItem.assetId = changeBgId;
    operationItem.assetUrl = resJson.outputUrl;
    operationItem.fgId = fgId;
    operationItem.bgId = bgId;
    target.src = resJson.outputUrl;
    await loadImg(target);
    this.operations.push(operationItem);
  }

  getFilterAttrValue(currFilter, filterName, value) {
    if (!currFilter) return value;
    const filterVals = currFilter.split(' ');
    let hasFilter = false;
    filterVals.forEach((f, i) => {
      if (f.match(filterName)) {
        hasFilter = true;
        filterVals[i] = value;
      }
    });
    if (!hasFilter) filterVals.push(value);
    return filterVals.join(' ');
  }

  changeAdjustments(value, params) {
    const { filterType, target } = params;
    const operationItem = {
      operationType: 'imageAdjustment',
      adjustmentType: filterType,
      filterValue: params,
    };
    const currFilter = target.style.filter;
    switch (filterType) {
      case 'hue':
        target.style.filter = this.getFilterAttrValue(currFilter, 'hue-rotate', `hue-rotate(${value}deg)`);
        break;
      case 'saturation':
        target.style.filter = this.getFilterAttrValue(currFilter, 'saturate', `saturate(${value}%)`);
        break;
      default:
        break;
    }
    this.operations.push(operationItem);
  }

  async continueInApp() {
    if (this.workflowCfg.productName == 'photoshop') {
      const cOpts = {
        assetId: null,
        targetProduct: this.workflowCfg.productName,
        payload: {
          finalAssetId: null,
          operations: [],
        },
      };
      debugger;
      if (this.operations.length == 0) {
        const assetId = await this.uploadAsset(this.canvasArea.querySelector('img').src);
        cOpts.assetId = assetId;
        cOpts.payload.finalAssetId = assetId;
        const x = await this.serviceHandler.postCallToService(
          this.psApiConfig.connectorApiEndPoint,
          { body: JSON.stringify(cOpts) },
        );
        window.location.href = x.url;
        return;
      }
      this.operations.forEach((op, i) => {
        const idx = cOpts.payload.operations.length;
        if ((i > 0) && (this.operations[i - 1].operationType == op.operationType)) {
          cOpts.payload.operations[idx - 1][op.adjustmentType] = parseInt(op.filterValue.sliderElem.value, 10);
        } else {
          cOpts.payload.operations.push({ name: op.operationType });
          if (op.sourceAssetId && !cOpts.assetId) cOpts.assetId = op.sourceAssetId;
          if (op.assetId) cOpts.payload.finalAssetId = op.assetId;
          if (op.operationType == 'changeBackground') cOpts.payload.operations[idx].assetIds = [op.assetId];
          if (op.adjustmentType && op.filterValue) {
            cOpts.payload.operations[idx][op.adjustmentType] = parseInt(op.filterValue.sliderElem.value, 10);
          }
        }
      });
      const x = await this.serviceHandler.postCallToService(
        this.psApiConfig.connectorApiEndPoint,
        { body: JSON.stringify(cOpts) },
      );
      window.location.href = x.url;
    }
    else if (this.workflowCfg.productName == 'acrobat') {
      this.fillsign('', '')
    }
  }

  async createSpectrumProgress() {
    await new Promise((resolve) => {
      loadStyle(`${getUnityLibs()}/core/features/progress-circle/progress-circle.css`, resolve);
    });
    const pdom = `<div class="spectrum-ProgressCircle-track"></div>
    <div class="spectrum-ProgressCircle-fills">
      <div class="spectrum-ProgressCircle-fillMask1">
        <div class="spectrum-ProgressCircle-fillSubMask1">
          <div class="spectrum-ProgressCircle-fill"></div>
        </div>
      </div>
      <div class="spectrum-ProgressCircle-fillMask2">
        <div class="spectrum-ProgressCircle-fillSubMask2">
          <div class="spectrum-ProgressCircle-fill"></div>
        </div>
      </div>
    </div>`;
    const loader = createTag(
      'div',
      { class: 'progress-circle' },
      createTag('div', { class: 'spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate' }, pdom),
    );
    return loader;
  }

  async uploadFileToUnity(storageUrl, blobData, fileType) {
    const uploadOptions = {
      method: 'PUT',
      headers: { 'Content-Type': fileType },
      body: blobData,
    };
    const response = await fetch(storageUrl, uploadOptions);
    return response;
  }

  async chunkPdf(assetData, blobData, filetype) {
    const totalChunks = Math.ceil(blobData.size / assetData.blocksize);
    if (assetData.uploadUrls.length !== totalChunks) return;
    const uploadPromises = Array.from({ length: totalChunks }, (_, i) => {
      const start = i * assetData.blocksize;
      const end = Math.min(start + assetData.blocksize, blobData.size);
      const chunk = blobData.slice(start, end);
      const url = assetData.uploadUrls[i];
      return this.uploadFileToUnity(url.href, chunk, filetype);
    });
    this.promiseStack.push(...uploadPromises);
    await Promise.all(this.promiseStack);
  }

  async getBlobData(file) {
    const objUrl = URL.createObjectURL(file);
    const response = await fetch(objUrl);
    if (!response.ok) {
      const error = new Error();
      error.status = response.status;
      throw error;
    }
    const blob = await response.blob();
    URL.revokeObjectURL(objUrl);
    return blob;
  }

  async singleFileUpload(file) {
    const fileData = {
      type: file.type,
      size: file.size,
      count: 1,
    };
    let assetData = null;
    try {
      const blobData = await this.getBlobData(file);
      const data = {
        surfaceId: unityConfig.surfaceId,
        targetProduct: this.workflowCfg.productName,
        name: file.name,
        size: file.size,
        format: file.type,
      };
      assetData = await this.serviceHandler.postCallToService(
        `${unityConfig.apiEndPoint}/asset`,
        { body: JSON.stringify(data) },
      );
      await this.chunkPdf(assetData, blobData, file.type);
      const operationItem = {
        assetId: assetData.id,
        filename: file.name,
        filesize: file.size,
        filetype: file.type,
      };
      this.operations.push(operationItem);
    } catch (e) {
        console.log(e);
    }
  }

  async fillsign(value, e) {
    if (!this.operations.length) return;
    const { assetId, filename, filesize, filetype } = this.operations[this.operations.length - 1];
    const cOpts = {
      assetId,
      targetProduct: this.workflowCfg.productName,
      payload: {
        languageRegion: this.workflowCfg.langRegion,
        languageCode: this.workflowCfg.langCode,
        verb: this.workflowCfg.enabledFeatures[0],
        assetMetadata: {
          [assetId]: {
            name: filename,
            size: filesize,
            type: filetype,
          },
        },
      },
    };
    this.promiseStack.push(
      this.serviceHandler.postCallToService(
        this.psApiConfig.connectorApiEndPoint,
        { body: JSON.stringify(cOpts) },
      ),
    );
    await Promise.all(this.promiseStack)
      .then((resArr) => {
        const response = resArr[resArr.length - 1];
        if (!response?.url) throw new Error('Error connecting to App');
        window.location.href = response.url;
      })
      .catch(async (e) => {
        console.log(e);
      });
  }


  async resize() {
    this.addtoIframe();
  }

  async fetchAndConvertToBase64(url, callback) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        
        const base64String = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
  
        callback(base64String);
    } catch (error) {
        console.error('Error:', error);
    }
  }
  
  
  addtoIframe(fetchAndConvert=true, localBase64String='') {
  }
}

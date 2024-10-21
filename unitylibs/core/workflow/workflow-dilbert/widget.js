import {
  createTag,
  decorateDefaultLinkAnalytics,
  loadSvgs,
} from '../../../scripts/utils.js';

const productIcons = {
  "photoshop": ["Download in app", "/unity/assets/product-icons/photoshop.svg"],
  "lightroom": ["Download in app", "/unity/assets/product-icons/lightroom-64.svg"],
  "acrobat": ["Download in app", "/unity/assets/product-icons/acrobat-pro-64.svg"],
  "express": ["Download in app", "/unity/assets/product-icons/acrobat-pro-64.svg"],
}

const featureIcons = {
  "removebg": ["Remove Background", "/unity/assets/test/removebg.svg"],
  "changebg": ["Change Background", "/unity/assets/test/changebg.svg"],
  "colorize": ["Colorize Image", "/unity/assets/test/colorize.svg"],
  "resize": ["Resize Image", "/unity/assets/test/ps-resize-image-how-tos-92x92.svg"],
  "converttojpg": ["Convert Image to JPG", "/unity/assets/test/colorize.svg"],
  "fillsign": ["Fill and Sign", "/unity/assets/test/fillsign.svg"],
  "slider": ["Edit Hue/Sat", "/unity/assets/test/slider.svg"],
  "upload": ["Upload Asset", "/unity/assets/test/upload.svg"],
  "app": ["Download in app", "/unity/assets/product-icons/photoshop.svg"],
}

function intersection (a, b) {
  const setA = new Set(a);
  return b.filter(value => setA.has(value));
}

export default class UnityWidget {
  constructor(target, el, workflowCfg) {
    this.el = el;
    this.target = target;
    this.workflowCfg = workflowCfg;
    this.widget = null;
    this.actionMap = {};
    this.workflowCfg.enabledFeatures = this.workflowCfg.enabledFeatures.filter((i) => !['upload', 'app'].includes(i));
    this.psList = ['removebg', 'changebg', 'colorize'];
    this.expressList = ['resize', 'converttojpg'];
    this.acrobatList = ['fillsign', 'chatpdf'];
    this.lrList = ['slider'];
    if (intersection(this.psList, this.workflowCfg.enabledFeatures)) this.workflowCfg.productName = 'photoshop';
    else if (intersection(this.expressList, this.workflowCfg.enabledFeatures)) this.workflowCfg.productName = 'express';
    else if (intersection(this.acrobatList, this.workflowCfg.enabledFeatures)) this.workflowCfg.productName = 'acrobat';
    else if (intersection(this.lrList, this.workflowCfg.enabledFeatures)) this.workflowCfg.productName = 'lightroom';
  }

  async initWidget() {
    const iWidget = createTag('div', { class: 'unity-widget' });
    const unityaa = createTag('div', { class: 'unity-action-area' });
    const unityoa = createTag('div', { class: 'unity-option-area' });
    iWidget.append(unityoa, unityaa);
    await this.addRestartOption(unityaa);
    this.workflowCfg.enabledFeatures.forEach((f, idx) => {
      let addClasses = 'dbert-action-btn';
      if (this.el.querySelector(`.icon-${f}`)) addClasses = 'dbert-action-btn show'
      this.addFeatureButtons(
        f,
        this.workflowCfg.featureCfg[idx],
        unityaa,
        unityoa,
        addClasses,
      );
    });
    const uploadCfg = this.el.querySelector('.icon-upload');
    if (uploadCfg) this.addFeatureButtons('upload', uploadCfg.closest('li'), unityaa, unityoa, 'show');
    const continueInApp = this.el.querySelector('.icon-app-connector');
    if (continueInApp) this.addFeatureButtons('continue-in-app', continueInApp.closest('li'), unityaa, unityoa, '');
    this.widget = iWidget;
    const svgs = iWidget.querySelectorAll('.show img[src*=".svg"');
    await loadSvgs(svgs);
    this.target.append(iWidget);
    decorateDefaultLinkAnalytics(iWidget);
    return this.actionMap;
  }

  createActionBtn(btnCfg, btnClass, fname) {
    let txt = null
    let img = null;
    if (btnClass.trim() == 'continue-in-app-button') {
      txt = productIcons[this.workflowCfg.productName][0];
      img = createTag('img', { src: productIcons[this.workflowCfg.productName][1] });
      btnClass += ' continue-in-app'
    } else {
      txt = featureIcons[fname][0];
      img = createTag('img', { src: featureIcons[fname][1] });
    }
    const actionBtn = createTag('a', { href: '#', class: `unity-action-btn ${btnClass}` });
    if (this.psList.includes(fname)) actionBtn.classList.add('photoshop-action');
    else if (this.expressList.includes(fname)) actionBtn.classList.add('express-action');
    else if (this.acrobatList.includes(fname)) actionBtn.classList.add('acrobat-action');
    else if (this.lrList.includes(fname)) actionBtn.classList.add('lightroom-action');
    const btnTxt = createTag('div', { class: 'btn-text' }, txt.split('\n')[0].trim());
    actionBtn.append(createTag('div', { class: 'btn-icon' }, img));
    actionBtn.append(btnTxt);
    return actionBtn;
  }

  initRefreshActionMap(w) {
    this.actionMap[w] = [
      {
        actionType: 'hide',
        targets: ['.dbert-action-btn.show', '.unity-option-area .show', '.continue-in-app-button'],
      }, {
        actionType: 'show',
        targets: ['.dbert-action-btn'],
      }, {
        actionType: 'refresh',
        sourceSrc: this.el.querySelector('img').src,
        target: this.target.querySelector('img'),
      },
    ];
  }

  async addRestartOption(unityaa) {
    const img = createTag('img', { src: productIcons[this.workflowCfg.productName][1] });
    const iconHolder = createTag('div', { class: 'widget-product-icon show' }, img);
    unityaa.append(iconHolder);
  }

  addFeatureButtons(featName, authCfg, actionArea, optionArea, addClasses) {
    const btn = this.createActionBtn(authCfg, `${featName}-button ${addClasses}`, featName);
    actionArea.append(btn);
    switch (featName) {
      case 'removebg':
        this.initRemoveBgActions(featName, btn);
        break;
      case 'resize':
        this.initResizeActions(featName, btn);
        break;
      case 'fillsign':
        this.initFillSignActions(featName, btn);
        break;
      case 'colorize':
        this.initContinueInAppActions(featName);
        break;
      case 'upload':
        const inpel = createTag('input', { class: 'file-upload', type: 'file', tabIndex: -1 });
        btn.append(inpel);
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') inpel.click();
        });
        this.initUploadActions(featName);
        break;
      case 'continue-in-app':
        this.initContinueInAppActions(featName);
        break;
      default:
        break;
    }
    if (this.el.querySelector('ul ul')) this.addFeatureTray(featName, this.el.querySelector('ul'), optionArea, btn, addClasses);
  }

  initRemoveBgActions(featName, btn) {
    this.actionMap[`.${featName}-button`] = [
      {
        actionType: 'show',
        targets: ['.progress-circle'],
      }, {
        itemType: 'button',
        actionType: featName,
        source: this.target.querySelector('img'),
        target: this.target.querySelector('img'),
      }, {
        actionType: 'show',
        targets: ['.continue-in-app-button'],
      }, {
        actionType: 'hide',
        targets: ['.progress-circle'],
      },
    ];
  }

  initFillSignActions(featName, btn) {
    this.actionMap[`.${featName}-button`] = [
      {
        actionType: 'show',
        targets: ['.progress-circle'],
      }, {
        itemType: 'button',
        actionType: "fillsign"
      }, {
        actionType: 'show',
        targets: ['.continue-in-app-button'],
      }, {
        actionType: 'hide',
        targets: ['.progress-circle'],
      },
    ];
  }

  initResizeActions(featName, btn) {
    this.actionMap[`.${featName}-button`] = [
      {
        actionType: 'show',
        targets: ['.progress-circle'],
      }, {
        itemType: 'button',
        actionType: "resize"
      }, {
        actionType: 'show',
        targets: ['.continue-in-app-button'],
      }, {
        actionType: 'hide',
        targets: ['.progress-circle'],
      },
    ];
  }

  initChangeBgActions(key, btn, bgImg, bgSelectorTray) {
    this.actionMap[key] = [
      {
        actionType: 'show',
        targets: ['.progress-circle'],
      }, {
        itemType: 'button',
        actionType: 'changebg',
        backgroundSrc: bgImg.src,
        source: this.target.querySelector('img'),
        target: this.target.querySelector('img'),
      }, {
        actionType: 'show',
        targets: ['.dbert-action-btn.show + .dbert-action-btn', '.adjustment-options-tray', '.continue-in-app-button'],
      }, {
        actionType: 'hide',
        targets: [bgSelectorTray, '.progress-circle'],
      },
    ];
  }

  initUploadActions(featName) {
    this.actionMap[`.${featName}-button .file-upload`] = [
      {
        actionType: 'show',
        targets: ['.progress-circle'],
      }, {
        itemType: 'button',
        actionType: 'upload',
        assetType: 'img',
        target: this.target.querySelector('img'),
      }, {
        actionType: 'show',
        targets: ['.continue-in-app-button'],
      }, {
        actionType: 'hide',
        targets: ['.progress-circle'],
      },
    ];
  }

  initContinueInAppActions(featName) {
    this.actionMap[`.${featName}-button`] = [
      {
        actionType: 'show',
        targets: ['.progress-circle'],
      },  {
        itemType: 'button',
        actionType: 'continueInApp',
        appName: 'Photoshop',
      },
    ];
  }

  addFeatureTray(featName, authCfg, optionArea, btn, addClasses) {
    switch (featName) {
      case 'changebg': {
        const tray = this.addChangeBgTray(btn, authCfg, optionArea, addClasses.indexOf('show') > -1);
        this.actionMap[`.${featName}-button`] = [
          {
            actionType: 'toggle',
            targets: [tray],
          },
        ];
        break;
      }
      case 'slider': {
        const tray = this.addAdjustmentTray(btn, authCfg, optionArea, addClasses.indexOf('show') > -1);
        this.actionMap[`.${featName}-button`] = [
          {
            actionType: 'toggle',
            targets: [tray],
          },
        ];
        break;
      }
      default:
        break;
    }
  }

  addChangeBgTray(btn, authCfg, optionArea, isVisible) {
    const bgSelectorTray = createTag('div', { class: `changebg-options-tray ${isVisible ? 'show' : ''}` });
    const bgOptions = authCfg.querySelectorAll(':scope ul li');
    [...bgOptions].forEach((o, num) => {
      let thumbnail = null;
      let bgImg = null;
      [thumbnail, bgImg] = o.querySelectorAll('img');
      if (!bgImg) bgImg = thumbnail;
      thumbnail.dataset.backgroundImg = bgImg.src;
      const optionSelector = `changebg-option option-${num}`;
      const a = createTag('a', { href: '#', class: optionSelector }, thumbnail);
      bgSelectorTray.append(a);
      this.initChangeBgActions(`.changebg-option.option-${num}`, btn, bgImg, bgSelectorTray);
      a.addEventListener('click', (e) => { e.preventDefault(); });
    });
    optionArea.append(bgSelectorTray);
    return bgSelectorTray;
  }

  addAdjustmentTray(btn, authCfg, optionArea, isVisible) {
    const sliderTray = createTag('div', { class: `adjustment-options-tray  ${isVisible ? 'show' : ''}` });
    const sliderOptions = authCfg.querySelectorAll(':scope > ul li');
    [...sliderOptions].forEach((o) => {
      let iconName = null;
      const psAction = o.querySelector(':scope > .icon');
      [...psAction.classList].forEach((cn) => { if (cn.match('icon-')) iconName = cn; });
      const [, actionName] = iconName.split('-');
      switch (actionName) {
        case 'hue':
          this.createSlider(sliderTray, 'hue', o.innerText, -180, 180);
          break;
        case 'saturation':
          this.createSlider(sliderTray, 'saturation', o.innerText, 0, 300);
          break;
        default:
          break;
      }
    });
    optionArea.append(sliderTray);
    return sliderTray;
  }

  createSlider(tray, propertyName, label, minVal, maxVal) {
    const actionDiv = createTag('div', { class: 'adjustment-option' });
    const actionLabel = createTag('label', { class: 'adjustment-label' }, label);
    const actionSliderDiv = createTag('div', { class: `adjustment-container ${propertyName}` });
    const actionSliderInput = createTag('input', {
      type: 'range',
      min: minVal,
      max: maxVal,
      value: (minVal + maxVal) / 2,
      class: `adjustment-slider ${propertyName}`,
    });
    const actionAnalytics = createTag('div', { class: 'analytics-content' }, `Adjust ${label} slider`);
    const actionSliderCircle = createTag('a', { href: '#', class: `adjustment-circle ${propertyName}` }, actionAnalytics);
    actionSliderDiv.append(actionSliderInput, actionSliderCircle);
    actionDiv.append(actionLabel, actionSliderDiv);
    this.actionMap[`.adjustment-slider.${propertyName}`] = [
      {
        actionType: 'show',
        targets: ['.continue-in-app-button'],
      }, {
        itemType: 'slider',
        actionType: 'imageAdjustment',
        filterType: propertyName,
        sliderElem: actionSliderInput,
        target: this.target.querySelector('img'),
      },
    ];
    actionSliderInput.addEventListener('input', () => {
      const { value } = actionSliderInput;
      const centerOffset = (value - minVal) / (maxVal - minVal);
      const moveCircle = 3 + (centerOffset * 94);
      actionSliderCircle.style.left = `${moveCircle}%`;
    });
    actionSliderInput.addEventListener('change', () => {
      actionSliderCircle.click();
    });
    actionSliderCircle.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
    tray.append(actionDiv);
  }
}

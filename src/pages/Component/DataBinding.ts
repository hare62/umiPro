class ComponentData {
  public component: any = null;
  public isFirstSet: boolean = true;
  [_key: string]: any;

  set key(val: any) {
    this._key = val;

    if (!this.isFirstSet) {
      // this.component.render();
    }
  }
}

export default class DataBinding {
  private static _instance: DataBinding = null;
  /**
   * 单例
   * @returns
   */
  public static getInstance() {
    if (!this._instance) {
      this._instance = new DataBinding();
    }

    return this._instance;
  }

  private componentDataArray: Array<ComponentData> = new Array<ComponentData>();

  bindComponent(component, data) {
    if (!component || !data) {
      return;
    }

    let componentData: ComponentData = new ComponentData();
    componentData.component = component;

    let dataKeys = Object.keys(data);
    for (let i = 0; i < dataKeys.length; i++) {
      let key = dataKeys[i];
      componentData[key] = data[key];
    }

    componentData.isFirstSet = false;

    this.componentDataArray.push(componentData);
  }

  setData(component, key, value) {
    for (let i = 0; i < this.componentDataArray.length; i++) {
      let data = this.componentDataArray[i];
      if (data.component === component) {
        if (!!data[key]) {
          data[key] = value;
          data.component.forceUpdate();
        }

        return;
      }
    }
  }

  getData(component, key) {
    for (let i = 0; i < this.componentDataArray.length; i++) {
      let data = this.componentDataArray[i];
      if (data.component === component) {
        if (!!data[key]) {
          return data[key];
        }
      }
    }

    return null;
  }
}

class Plugins 
{

    constructor(component) 
    {
        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }

}

export { Plugins };
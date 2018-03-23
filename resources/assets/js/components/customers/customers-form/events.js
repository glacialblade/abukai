class Events 
{

    constructor(component) 
    {
        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }
    
    /**
     * jQuery Events Collection
     */
    jQueryEvents()
    {
        var component = this.component;
    }
    
}

export { Events };
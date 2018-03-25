import { FormHelper } from './form-helper';

export class Helpers
{
    constructor(component, type)
    {
        this.component = component;
        this.type = type;
    }

    getClass()
    {
        switch(this.type)
        {
            case 'form':
                return new FormHelper(this.component);
                break;
        }
    }
}
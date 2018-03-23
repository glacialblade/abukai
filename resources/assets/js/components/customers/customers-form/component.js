import { CommonComponent } from 'components/common-component';

import { state } from './state';
import { Events }  from './events';
import { Plugins } from './plugins';
import { Requests }  from './requests';
import { TemplateController }  from './template-controller';

class CustomersForm extends CommonComponent
{

    constructor(props) 
    {
        super(props);
        this.state = state;
        this.defaultState = _.cloneDeep(this.state); // For Data Form Reset
        utils.REACT.bindClassToMethods(this, ['handleChange']);
    }

    /**
     * Before Component Mounts
     */
    componentWillMount() 
    {
        this.requests           = new Requests(this);
        this.events             = new Events(this);
        this.plugins            = new Plugins(this);
        this.templateController = new TemplateController(this);
    }

    /**
     * After Component Mounts
     */
    componentDidMount() 
    {
        // Elements Configuration
        this.el = {};
        this.el.selector = $('#'+this.props.component_id);

        this.events.jQueryEvents();
    }

}

utils.REACT.domrender(CustomersForm, $('[component=CustomersForm]'));
export { CustomersForm };
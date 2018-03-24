<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ReactComponentInitialize extends Command
{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'react-component:initialize {component} {location}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Initialize a React Component';

    /**
     * Create a new command instance.
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle() {
        $path = base_path().'/resources/assets/js/'.$this->argument('location');

        if(!file_exists($path)) {
            mkdir($path, 0755, true);
            foreach(['component', 'events', 'plugins', 'template-controller', 'state', 'requests'] as $item) {
                $function = ($item != 'template-controller' ? $item : 'templateController')."Content";

                $file = fopen("$path/$item.js", 'w');
                fwrite($file, $this->$function());
                fclose($file);
            }
            
        }
        else {
            echo 'This component already exists.';
        }
    }

    /**
     * Returns Content of the Component File
     */
    public function componentContent() {
        $component = $this->argument('component');

        return <<<EOF
import { CommonComponent } from 'components/common-component';

import { state } from './state';
import { Events }  from './events';
import { Plugins } from './plugins';
import { Requests }  from './requests';
import { TemplateController }  from './template-controller';

class $component extends CommonComponent
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

utils.REACT.domrender($component, $('[component=$component]'));
export { $component };
EOF;
    }

    /**
     * Returns Content of the Events File
     */
    public function eventsContent() {
        return <<<EOF
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
EOF;
    }

    /**
     * Returns Content of the Plugins File
     */
    public function pluginsContent() {
        return <<<EOF
class Plugins 
{

    constructor(component) 
    {
        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }

}

export { Plugins };
EOF;
    }

    /**
     * Returns Content of the Template Controller File
     */
    public function templateControllerContent() {
                return <<<EOF
class TemplateController 
{
    
    default(component) 
    {
        return (
            <div id={ component.props.component_id }>
                
            </div>
        );
    }
}

export { TemplateController };
EOF;
    }

    /**
     * Returns Content of the Template Controller File
     */
    public function stateContent() {
        return <<<EOF
var state = {

};

export { state };
EOF;
    }

    /**
     * Returns Content of the Template Controller File
     */
    public function requestsContent() {
        return <<<EOF
class Requests 
{
    
    constructor(component) 
    {
        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }

}

export { Requests };
EOF;
    }

}

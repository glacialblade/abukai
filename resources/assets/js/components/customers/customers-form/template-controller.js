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
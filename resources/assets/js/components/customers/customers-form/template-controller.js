import { Config } from 'config';

class TemplateController 
{
    
    default(component) 
    {
        return (
            <div id={ component.props.component_id }>
				<div id="customers-modal" className="modal fade" tabIndex="-1" role="dialog" data-backdrop="static" data-keyboard={ false }>
					<div className="modal-dialog modal-lg" role="document">
						<form onSubmit={ component.events.submit }>
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title">{ component.state.form.id ? 'Edit '+component.state.form.first_name+' '+component.state.form.last_name : 'Add Customer' }</h4>
								</div>
								<div className="modal-body">
									<div className="row">
										<div className="col-md-3">
											{
												component.state.loadingUpload ? 'Uploading your picture please wait...'
												: <img src={ component.state.form.picture_uri ? component.state.form.picture_uri : '/images/default-profile.png' } style={{ width: '100%' }} />
											}

											{ component.helpers('form').formError('picture') }
											<button disabled={ component.state.loadingUpload || component.state.loading } type="button" className="btn btn-warning" style={{ width: '100%' }} onClick={ component.events.activatePictureInput }>Choose a Picture</button>
											<input type="file" name="picture" ref="picture" onChange={ component.events.changePicture } style={{ marginTop: '-30px', opacity: 0 }} />
											<div className="text-success" style={{ wordWrap: 'break-word', marginTop: '15px' }}>{ component.state.pictureFileName }</div>
										</div>
										<div className="col-md-9">
											<div className="alert alert-info">Automatic Picture Upload will only work on Edit Customer.</div>
											<div className="row">
												<div className="col-md-6">
													<strong>Email</strong>
													<input type="text" className="form-control" data-name="form.email" value={ component.state.form.email } onChange={ component.handleChange }/>
													{ component.helpers('form').formError('email') }
													<br/>
													<strong>First Name</strong>
													<input type="text" className="form-control" data-name="form.first_name" value={ component.state.form.first_name } onChange={ component.handleChange }/>
													{ component.helpers('form').formError('first_name') }
													<br/>
													<strong>Last Name</strong>
													<input type="text" className="form-control" data-name="form.last_name" value={ component.state.form.last_name } onChange={ component.handleChange }/>
													{ component.helpers('form').formError('last_name') }
												</div>
												<div className="col-md-6">
													<strong>City</strong>
													<input type="text" className="form-control" data-name="form.city" value={ component.state.form.city } onChange={ component.handleChange } />
													{ component.helpers('form').formError('city') }
													<br/>
													<strong>Country</strong>
													<select className="form-control" data-name="form.country" value={ component.state.form.country } onChange={ component.handleChange }>
														<option value="">Please select a country</option>
														{ component.helpers('form').arrayToOptions(Config.countries) }
													</select>
													{ component.helpers('form').formError('country') }
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button disabled={ component.state.loading } type="button" className="btn btn-default" data-dismiss="modal">Close</button>
									<button disabled={ component.state.loading } className="btn btn-primary">{ component.state.loading ? 'Saving please wait...' : 'Save Changes' }</button>
								</div>
							</div>
						</form>
					</div>
				</div>
            </div>
        );
    }
}

export { TemplateController };
frappe.pages['pricing_page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Pricing Page',
		single_column: true
	});
	
	$(wrapper).find(".layout-main-section").empty().append(frappe.render_template("pricing_page"));
}

//import '/assets/frappe/AdminLTE/plugins/chart.js/Chart.min.js'; //Cannot import it in js. It should be import in html


frappe.pages['dashboard_page1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Dashboard Page1',
		single_column: true
	});
	$(wrapper).find(".layout-main-section").empty().append(frappe.render_template("dashboard_page1"));
}

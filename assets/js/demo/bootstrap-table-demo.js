$(document).ready(function(){
   $('#exampleTableEvents').bootstrapTable({
      url: "js/demo/bootstrap_table_test.json",
      search: false,
      pagination: true,
      showRefresh: true,
      showToggle: false,
      showColumns: true,
      iconSize: 'outline',
      toolbar: '#exampleTableEventsToolbar',
      icons: {
        refresh: 'glyphicon-repeat',
        toggle: 'glyphicon-list-alt',
        columns: 'glyphicon-list'
      }
    });
});

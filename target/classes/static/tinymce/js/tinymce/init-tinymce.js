tinymce.init({
	selector: 'textarea#content-area',
	height: 500,
	menubar: ['file', 'edit', 'view', 'insert', 'format', 'table'],
	plugins: [
		'advlist', 'anchor', 'autolink', 'autosave', 'charmap', 'code', 'colorpicker',
		'directionality', 'emoticons', 'fullpage', 'fullscreen', 'help',
		'hr', 'image', 'imagetools', 'insertdatetime', 'link', 'lists', 'media',
		'pagebreak', 'paste', 'preview', 'print', 'save', 'searchreplace',
		'table', 'template', 'textcolor', 'visualblocks', 'visualchars', 'wordcount'
	],
	toolbar: 'undo redo cut copy paste| formatselect | ' +
		'bold italic backcolor |fontselect fontsizeselect| alignleft aligncenter ' +
		'alignright alignjustify ltr rtl| bullist numlist outdent indent| ' +
		'removeformat fullscreen| help',
	contextmenu: 'link image imagetools table lists',
	content_style: 'body { font-family:Arial; font-size:14px }'
});
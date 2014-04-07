/*!@license
* Infragistics.Web.ClientUI data source localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.DataSourceLocale) {
	$.ig.DataSourceLocale = {};

	$.extend($.ig.DataSourceLocale, {

		locale: {
			invalidDataSource: "The supplied data source is invalid. It happens to be a scalar.",
			unknownDataSource: "Cannot determine the data source type. Please specify if it is JSON or XML data.",
			errorParsingArrays: "There was an error parsing the array data and applying the defined data schema: ",
			errorParsingJson: "There was an error parsing the JSON data and applying the defined data schema: ",
			errorParsingXml: "There was an error parsing the XML data and applying the defined data schema: ",
			errorParsingHtmlTable: "There was an error extracting the data from the HTML Table and applying the schema : ",
			errorExpectedTbodyParameter: "Expected a tbody or a table as a parameter.",
			errorTableWithIdNotFound: "The HTML Table with the following ID was not found: ",
			errorParsingHtmlTableNoSchema: "There was an error parsing the Table DOM: ",
			errorParsingJsonNoSchema: "There was an error parsing/evaluating the JSON string: ",
			errorParsingXmlNoSchema: "There was an error parsing the XML string: ",
			errorXmlSourceWithoutSchema: "The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",
			errorUnrecognizedFilterCondition: " The filter condition that was passed was not recognized: ",
			errorRemoteRequest: "The remote request to fetch data has failed: ",
			errorSchemaMismatch: "The input data doesn't match the schema, the following field couldn't be mapped: ",
			errorSchemaFieldCountMismatch: "The input data doesn't match the schema in terms of number of fields. ",
			errorUnrecognizedResponseType: "The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",
			hierarchicalTablesNotSupported: "Tables are not supported for HierarchicalSchema",
			cannotBuildTemplate: "The jQuery template could not be built. There are no records present in the data source, and no columns defined.",
			unrecognizedCondition: "Unrecognized filtering condition in the following expression: ",
			fieldMismatch: "The following expression contains an invalid field or filtering condition: ",
			noSortingFields: "There are no fields specified. You need to specify at least one field to sort by, when calling sort().",
			filteringNoSchema: "There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source."
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Chart) {
	$.ig.Chart = {};

	$.extend($.ig.Chart, {

		locale: {
			seriesName: "must specify series name option when setting options.",
			axisName: "must specify axis name option when setting options.",
			close: "Close",
			overview: "Overview",
			zoomOut: "Zoom Out",
			zoomIn: "Zoom In",
			resetZoom: "Reset Zoom"
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI shared localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*jQuery must be defined before this. If it is not the $ variable is created*/
$ = $ || {};

$.ig = $.ig || {};

if (!$.ig.SharedLocale) {
	$.ig.SharedLocale = {};

	$.extend($.ig.SharedLocale, {

		locale: {
			popoverOptionChangeNotSupported: "Changing the following option after igPopover has been initialized is not supported:"
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI templating localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Templating) {
	$.ig.Templating = {};

	$.extend($.ig.Templating, {
		locale: {
			undefinedArgument: 'An error has occurred while trying to retrieve data source property: '
		}
	});
}

/*!@license
* Infragistics.Web.ClientUI Combo localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Combo) {
	$.ig.Combo = {
		locale: {
			noMatchFoundText: 'No Results',
			dropDownButtonTitle: 'Show drop-down',
			clearButtonTitle: 'Clear value'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Dialog) {
	$.ig.Dialog = {
		locale: {
			closeButtonTitle: "Close",
			minimizeButtonTitle: "Minimize",
			maximizeButtonTitle: "Maximize",
			pinButtonTitle: "Pin",
			unpinButtonTitle: "Unpin",
			restoreButtonTitle: "Restore"
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Editors localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Editor) {
	$.ig.Editor = {
		locale: {
			spinUpperTitle: 'Increment',
			spinLowerTitle: 'Decrement',
			buttonTitle: 'Show list',
			clearTitle: 'Clear value',
			datePickerButtonTitle: 'Show calendar',
			updateModeUnsupportedValue: 'The updateMode option supports two possible values - "onChange" and "immediate"'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Grid localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "No such widget loaded: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns is enabled, but there are no records in the data source in order to determine the columns",
			optionChangeNotSupported: "Changing the following option after the igGrid has been created is not supported:",
			optionChangeNotScrollingGrid: "The following option cannot be changed after the grid is created because your initial grid is not scrolling and full re-rendering is required:",
			noPrimaryKeyDefined: "There is no primary key defined for the grid. In order to use features such as Grid Editing, you will need to define a primary key.",
			indexOutOfRange: "The row index you have specified is out of range.",
			noSuchColumnDefined: "The specified column key does not match any of the defined grid columns.",
			columnIndexOutOfRange: "The specified column index is out of range.",
			recordNotFound: "The record with the specified id could not be found in the data view:",
			columnNotFound: "No column was found matching key:",
			colPrefix: "Column ",
			columnVirtualizationRequiresWidth: "You have virtualization / columnVirtualization set to true, but no width could be inferred for grid columns. You should set one of a) grid width, b) defaultColumnWidth, c) define width for each column",
			virtualizationRequiresHeight: "You have virtualization set to true which requires grid height to be set too.",
            colVirtualizationDenied: "columnVirtualization is applicable for fixed virtualization only",
			noColumnsButAutoGenerateTrue: "You have autoGenerateColumns set to false, but there are no columns defined in the grid. Please set autoGenerateColumns to true, or specify columns manually",
			noPrimaryKey: "the igHierarchicalGrid widget requires a primary key to be defined.",
			templatingEnabledButNoTemplate: "You have jQueryTemplating set to true, but there is no rowTemplate defined.",
			expandTooltip: "Expand Row",
			collapseTooltip: "Collapse Row",
			movingNotAllowedOrIncompatible: "Moving of the requested column could not be completed. The column was not found or the result was not compatible with the column layout."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Starts with...",
			endsWithNullText: "Ends with...",
			containsNullText: "Contains...",
			doesNotContainNullText: "Does not contain...",
			equalsNullText: "Equals...",
			doesNotEqualNullText: "Does not equal...",
			greaterThanNullText: "Greater than...",
			lessThanNullText: "Less than...",
			greaterThanOrEqualToNullText: "Greater than or equal to...",
			lessThanOrEqualToNullText: "Less than or equal to...",
			onNullText: "On...",
			notOnNullText: "Not on...",
			emptyNullText: "Empty",
			notEmptyNullText: "Not empty",
			nullNullText: "Null",
			notNullNullText: "Not null",
			startsWithLabel: "Starts with",
			endsWithLabel: "Ends with",
			containsLabel: "Contains",
			doesNotContainLabel: "Does not contain",
			equalsLabel: "Equals",
			doesNotEqualLabel: "Does not equal",
			greaterThanLabel: "Greater than",
			lessThanLabel: "Less than",
			greaterThanOrEqualToLabel: "Greater than or equal to",
			lessThanOrEqualToLabel: "Less than or equal to",
			trueLabel: "True",
			falseLabel: "False",
			afterLabel: "After",
			beforeLabel: "Before",
			todayLabel: "Today",
			yesterdayLabel: "Yesterday",
			thisMonthLabel: "This month",
			lastMonthLabel: "Last month",
			nextMonthLabel: "Next month",
			thisYearLabel: "This year",
			lastYearLabel: "Last year",
			nextYearLabel: "Next year",
			clearLabel: "Clear Filter",
			noFilterLabel: "No",
			onLabel: "On",
			notOnLabel: "Not on",
			advancedButtonLabel: "Advanced",
			filterDialogCaptionLabel: "ADVANCED SEARCH",
			filterDialogConditionLabel1: "Show records matching ",
			filterDialogConditionLabel2: " of the following criteria",
			filterDialogOkLabel: "Search",
			filterDialogCancelLabel: "Cancel",
			filterDialogAnyLabel: "ANY",
			filterDialogAllLabel: "ALL",
			filterDialogAddLabel: "Add",
			filterDialogErrorLabel: "Maximum filters count exceeded.",
			filterSummaryTitleLabel: "Search results",
			filterSummaryTemplate: "${matches} matching records",
			filterDialogClearAllLabel: "Clear ALL",
			tooltipTemplate: "${condition} filter applied",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Hide Filter",
			featureChooserTextHide: "Show Filter",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Advanced Filter",
			virtualizationSimpleFilteringNotAllowed: "When horizontal virtualization is enabled, simple filtering (filter row) is not supported. Please set mode to 'advanced' and/or do not enable advancedModeEditorsVisible",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use loader or use one of the combined script files."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
			emptyGroupByAreaContent: "Drag a column here or {0} to Group By",
			emptyGroupByAreaContentSelectColumns: "select columns",
			emptyGroupByAreaContentSelectColumnsCaption: "select columns",
			expandTooltip: "Expand Grouped Row",
			collapseTooltip: "Collapse Grouped Row",
			removeButtonTooltip: "Remove Grouped Column",
			featureChooserText: "Ungroup By",
			featureChooserTextHide: "Group By",
			modalDialogCaptionButtonDesc: "Click to sort ascending",
			modalDialogCaptionButtonAsc: "Click to sort descending",
			modalDialogCaptionButtonUngroup: "Click to ungroup",
			modalDialogGroupByButtonText: "Group By",
			modalDialogCaptionText: 'Add to Group By',
			modalDialogDropDownLabel: 'Showing:',
			modalDialogClearAllButtonLabel: 'clear all',
			modalDialogRootLevelHierarchicalGrid: 'root',
			modalDialogDropDownButtonCaption: "Click to show/hide",
			modalDialogButtonApplyText: 'Apply',
			modalDialogButtonCancelText: 'Cancel'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Column Chooser",
			hiddenColumnIndicatorTooltipText: "Hidden Column(s)",
			columnHideText: "Hide",
			columnChooserCaptionLabel: "Column Chooser",
			columnChooserCheckboxesHeader: "view",
			columnChooserColumnsHeader: "column",
			columnChooserCloseButtonTooltip: "Close",
			hideColumnIconTooltip: "Hide",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.",
			columnChooserShowText: "Show",
			columnChooserHideText: "Hide",
			columnChooserResetButtonLabel: "reset",
			columnChooserButtonApplyText: 'Apply',
			columnChooserButtonCancelText: 'Cancel'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Show ",
			pageSizeDropDownTrailingLabel: "records",
			//pageSizeDropDownTemplate: "Show ${dropdown} records",
			nextPageLabelText: "next",
			prevPageLabelText: "prev",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pg",
			currentPageDropDownTrailingLabel: "of ${count}",
			//currentPageDropDownTemplate: "Pg ${dropdown} of ${count}",
			currentPageDropDownTooltip: "Choose page index",
			pageSizeDropDownTooltip: "Choose number of records per page",
			pagerRecordsLabelTooltip: "Current records range",
			prevPageTooltip: "go to the previous page",
			nextPageTooltip: "go to the next page",
			firstPageTooltip: "go to the first page",
			lastPageTooltip: "go to the last page",
			pageTooltipFormat: "page ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} of ${recordCount} records"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection is not initialized. To avoid receiving this error message please enable the Selection feature for the grid or set the requireSelection property of the Row Selectors feature to false."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'sorted ${direction}',
			unsortedColumnTooltip: 'click to sort column',
			ascending: 'ascending',
			descending: 'descending',
			modalDialogSortByButtonText: 'sort by',
			modalDialogResetButton: "reset",
			modalDialogCaptionButtonDesc: "Click to sort descending",
			modalDialogCaptionButtonAsc: "Click to sort ascending",
			modalDialogCaptionButtonUnsort: "Click to remove sorting",
			featureChooserText: "Sort on Multiple",
			modalDialogCaptionText: "Sort Multiple",
			modalDialogButtonApplyText: 'Apply',
			modalDialogButtonCancelText: 'Cancel',
            sortingHiddenColumnNotSupport: 'Sorting hidden column is not supported'
			//modalDialogButtonSlideCaption: "Click to show/hide sorted columns"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Hide Summaries",
			featureChooserTextHide: "Show Summaries",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'Cancel',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Show/hide summaries',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Count',
			defaultSummaryRowDisplayLabelMin: 'Min',
			defaultSummaryRowDisplayLabelMax: 'Max',
			defaultSummaryRowDisplayLabelSum: 'Sum',
			defaultSummaryRowDisplayLabelAvg: 'Avg',
			defaultSummaryRowDisplayLabelCustom: 'Custom',
			calculateSummaryColumnKeyNotSpecified: "Please specify column key to calculate summary",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Done',
			doneTooltip: 'Stop editing and update',
			cancelLabel: 'Cancel',
			cancelTooltip: 'Stop editing and do not update',
			addRowLabel: 'Add new row',
			addRowTooltip: 'Click to start adding new row',
			deleteRowLabel: '',
			deleteRowTooltip: 'Delete row',
			igEditorException: 'The updating for ui.igGrid requires ui.igEditor to be loaded',
			igComboException: 'In order to use the combo type for ui.igGrid, the ui.igCombo should be loaded',
			igRatingException: 'In order to use the igRating as editor for ui.igGrid, the ui.igRating should be loaded',
			igValidatorException: 'Validation options defined in igGridUpdating require ui.igValidator to be loaded',
			noPrimaryKeyException: 'In order to support update operations after a row was deleted, application should define "primaryKey" in options of igGrid.',
			hiddenColumnValidationException: 'Cannot edit row which has a hidden column with enabled validation.',
			dataDirtyException: 'Grid has pending transactions which may affect rendering of data. To prevent exception, application may enable "autoCommit" option of igGrid, or it should process "dataDirty" event of igGridUpdating and return false. While processing that event, application also may do "commit()" data in igGrid.',
            rowEditDialogCaptionLabel: 'Edit row data'
		}
	});

	$.ig.ColumnMoving = $.ig.ColumnMoving || {};
	
	$.extend($.ig.ColumnMoving, {
		locale: {
		    movingDialogButtonApplyText: 'Apply',
            movingDialogButtonCancelText: 'Cancel',
            movingDialogCaptionButtonDesc: 'Move Down',
            movingDialogCaptionButtonAsc: 'Move Up',
            movingDialogCaptionText: 'Move Columns',
			movingDialogDisplayText: 'Move Columns',
			dropDownMoveLeftText: 'Move Left',
			dropDownMoveRightText: 'Move Right',
			dropDownMoveFirstText: 'Move First',
			dropDownMoveLastText: 'Move Last',
			featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.',
			movingToolTipMove: 'Move'
		}
	});

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};
	
	$.extend($.ig.ColumnFixing, {
		locale: {
		    headerFixButtonText: 'Click to fix this column',
            headerUnfixButtonText: 'Click to unfix this column'
		}
	});
}

/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Bold',
			italicButtonTitle: 'Italic',
			underlineButtonTitle: 'Underline',
			strikethroughButtonTitle: 'Strikethrough',
			increaseFontSizeButtonTitle: 'Increase Font Size',
			decreaseFontSizeButtonTitle: 'Decrease Font Size',
			alignTextLeftButtonTitle: 'Align Text Left',
			alignTextRightButtonTitle: 'Align Text Right',
			alignTextCenterButtonTitle: 'Center',
			justifyButtonTitle: 'Justify',
			bulletsButtonTitle: 'Bullets',
			numberingButtonTitle: 'Numbering',
			decreaseIndentButtonTitle: 'Decrease Indent',
			increaseIndentButtonTitle: 'Increase Indent',
			insertPictureButtonTitle: 'Insert Picture',
			fontColorButtonTitle: 'Font Color',
			textHighlightButtonTitle: 'Text Highlight Color',
			insertLinkButtonTitle: 'Insert Hyperlink',
			insertTableButtonTitle: 'Table',
			addRowButtonTitle: 'Add Row',
			removeRowButtonTitle: 'Remove Row',
			addColumnButtonTitle: 'Add Column',
			removeColumnButtonTitle: 'Remove Column',
			inserHRButtonTitle: 'Insert Horizontal Rule',
			viewSourceButtonTitle: 'View Source',
			cutButtonTitle: 'Cut',
			copyButtonTitle: 'Copy',
			pasteButtonTitle: 'Paste',
			undoButtonTitle: 'Undo',
			redoButtonTitle: 'Redo',
			imageUrlDialogText: 'Image URL:',
			imageAlternativeTextDialogText: 'Alternative Text:',
			imageWidthDialogText: 'Image Width:',
			imageHeihgtDialogText: 'Image Height:',
			linkNavigateToUrlDialogText: 'Navigate to URL:',
			linkDisplayTextDialogText: 'Display Text:',
			linkOpenInDialogText: 'Open In:',
			linkTargetNewWindowDialogText: 'New Window',
			linkTargetSameWindowDialogText: 'Same Window',
			linkTargetParentWindowDialogText: 'Parent Window',
			linkTargetTopmostWindowDialogText: 'Topmost Window',
			applyButtonTitle: 'Apply',
			cancelButtonTitle: 'Cancel',
			collapseButtonTitle: 'Collapse',
			expandButtonTitle: 'Expand',
            defaultToolbars: {
                textToolbar: "text manipulation toolbar",
                formattingToolbar: "text formatting toolbar",
                insertObjectToolbar: "objects insertion toolbar",
                copyPasteToolbar: "copy/paste toolbar"
            },
			fontNames: {
				win: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Lucida Console", value: "Lucida Console" },
						{ text: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
						{ text: "Palatino Linotype", value: "Palatino Linotype" },
						{ text: "Tahoma", value: "Tahoma" },
						{ text: "Trebuchet MS", value: "Trebuchet MS" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Wingdings", value: "Wingdings" },
						{ text: "MS Sans Serif", value: "MS Sans Serif" },
						{ text: "MS Serif", value: "MS Serif" }
					],
				mac: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Monaco", value: "Monaco" },
						{ text: "Lucida Grande", value: "Lucida Grande" },
						{ text: "Book Antiqua", value: "Book Antiqua" },
						{ text: "Geneva", value: "Geneva" },
						{ text: "Trebuchet MS", value: "Trebuchet" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Zapf Dingbats", value: "Zapf Dingbats" },
						{ text: "New York", value: "New York" }
					]
			},
			fontSizes: [
				{ text: "1", value: "1 (8pt)", style: "xx-small"},
				{ text: "2", value: "2 (9pt)", style: "x-small" },
				{ text: "3", value: "3 (10pt)", style: "small" },
				{ text: "4", value: "4 (12pt)", style: "medium" },
				{ text: "5", value: "5 (14pt)", style: "large" },
				{ text: "6", value: "6 (16pt)", style: "x-large" },
				{ text: "7", value: "7 (18pt)", style: "xx-large" }
			],
			formatsList: [
					{ text: "h1", value: "Heading 1" },
					{ text: "h2", value: "Heading 2" },
					{ text: "h3", value: "Heading 3" },
					{ text: "h4", value: "Heading 4" },
					{ text: "h5", value: "Heading 5" },
					{ text: "h6", value: "Heading 6" }
				]
		}

	});
}
/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotShared) {
    $.ig.PivotShared = {};

    $.extend($.ig.PivotShared, {
        locale: {
            invalidDataSource: "The passed data source either null or not supported.",
            measureList: "Measures",
            ok: "OK",
            cancel: "Cancel",
            addToMeasures: "Add to Measures",
            addToFilters: "Add to Filters",
            addToColumns: "Add to Columns",
            addToRows: "Add to Rows"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotDataSelector) {
    $.ig.PivotDataSelector = {};

    $.extend($.ig.PivotDataSelector, {
        locale: {
            invalidBaseElement: " is not supported as base element. Use DIV instead.",
            catalog: "Catalog",
            cube: "Cube",
            measureGroup: "Measure Group",
            measureGroupAll: "(All)",
            rows: "Rows",
            columns: "Columns",
            measures: "Measures",
            filters: "Filters",
            deferUpdate: "Defer Update",
            updateLayout: "Update Layout",
            selectAll: "Select All"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotGrid) {
    $.ig.PivotGrid = {};

    $.extend($.ig.PivotGrid, {
        locale: {
            filtersHeader: "Drop Filter Fields Here",
            measuresHeader: "Drop Data Items Here",
            rowsHeader: "Drop Row Fields Here",
            columnsHeader: "Drop Column Fields Here",
            disabledFiltersHeader: "Filter Fields",
            disabledMeasuresHeader: "Data Items",
            disabledRowsHeader: "Row Fields",
            disabledColumnsHeader: "Column Fields",
            noSuchAxis: "No such axis"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Splitter) {
	$.ig.Splitter = {};

	$.extend($.ig.Splitter, {
		locale: {
			errorPanels: 'The number of panels have to be no more than two.'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.TileManager) {
	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
			renderDataError: "Data was not successfully retrieved or parsed.",
			columnWidthUnitError: "The provided column width is not a recognized unit. Use px, % or provide a number: ",
			columnHeightUnitError: "The provided column height is not a recognized unit. Use px, % or provide a number: "
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Tree localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Tree) {
	$.ig.Tree = {};

	$.extend($.ig.Tree, {
		locale: {
			invalidArgumentType: 'Invalid argument type provided.',
			errorOnRequest: 'An error has occurred while retrieving data: ',
			noDataSourceUrl: 'The igTree control requires a dataSourceUrl provided in order to initiate a request for data to that URL.',
			incorrectPath: 'A node was not found at the provided path: ',
			incorrectNodeObject: 'The provided argument is not a jQuery node element.',
			setOptionError: 'Runtime changes are not allowed for the following option: ',
			moveTo: '<strong>Move to</strong> {0}',
			moveBetween: '<strong>Move between</strong> {0} and {1}',
			moveAfter: '<strong>Move after</strong> {0}',
			moveBefore: '<strong>Move before</strong> {0}',
			copyTo: '<strong>Copy to</strong> {0}',
			copyBetween: '<strong>Copy between</strong> {0} and {1}',
			copyAfter: '<strong>Copy after</strong> {0}',
			copyBefore: '<strong>Copy before</strong> {0}',
			and: 'and'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Upload localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Upload) {
	$.ig.Upload = {};

	$.extend($.ig.Upload, {

		locale: {
			labelUploadButton: "Upload File",
			labelAddButton: "Add",
			labelClearAllButton: "Clear Uploaded",
			// M.H. 13 May 2011 - fix bug 75042
			labelSummaryTemplate: "{0} of {1} uploaded",
			labelSummaryProgressBarTemplate: "{0}/{1}",
			labelShowDetails: "Show Details",
			labelHideDetails: "Hide Details",
			labelSummaryProgressButtonCancel: "Cancel",
			// M.H. 1 June 2011 Fix bug #77532
			labelSummaryProgressButtonContinue: "Upload",
			labelSummaryProgressButtonDone: "Done",
			labelProgressBarFileNameContinue: "...",

			//error messages
			errorMessageFileSizeExceeded: "Max file size exceeded.",
			errorMessageGetFileStatus: "Could not get your current file status! Probably connection dropped.",
			errorMessageCancelUpload: "Could not send to server command to cancel upload! Probably connection dropped.",
			errorMessageNoSuchFile: "The file you requested could not be found. Probably this file is too big.",
			errorMessageOther: "There is internal error uploading file. Error code: {0}.",
			errorMessageValidatingFileExtension: "File extension validation failed.",
			errorMessageAJAXRequestFileSize: "AJAX error while trying to get file size.",
			errorMessageMaxUploadedFiles: "Maximum count of uploading files exceeded.",
			errorMessageMaxSimultaneousFiles: "Value of maxSimultaneousFilesUploads is incorrect. It should be more than 0 or null.",
			errorMessageTryToRemoveNonExistingFile: "You are trying to remove non-existing file with id {0}.",
			errorMessageTryToStartNonExistingFile: "You are trying to start non-existing file with id {0}.",

			// M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			// title attributes            
			titleUploadFileButtonInit: "Upload File",
			titleAddFileButton: "Add",
			titleCancelUploadButton: "Cancel",
			// M.H. 1 June 2011 Fix bug #77532
			titleSummaryProgressButtonContinue: "Upload",
			titleClearUploaded: "Clear Uploaded",
			titleShowDetailsButton: "Show Details",
			titleHideDetailsButton: "Hide Details",
			titleSummaryProgressButtonCancel: "Cancel",
			titleSummaryProgressButtonDone: "Done",
			// M.H. 1 June 2011 Fix bug #77532
			titleSingleUploadButtonContinue: "Upload",
			titleClearAllButton: "Clear Uploaded"
		}
	});

}


/*!@license
* Infragistics.Web.ClientUI Validator localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Validator) {
	$.ig.Validator = {
		locale: {
			defaultMessage: 'Please fix this field',
			selectMessage: 'Please select a value',
			rangeSelectMessage: 'Please select no more than {0} and not less than {1} items',
			minSelectMessage: 'Please select at least {0} items',
			maxSelectMessage: 'Please select no more than {0} items',
			rangeLengthMessage: 'Please enter a value between {0} and {1} characters long',
			minLengthMessage: 'Please enter at least {0} characters',
			maxLengthMessage: 'Please enter no more than {0} characters',
			requiredMessage: 'This field is required',
			maskMessage: 'Please fill all required positions',
			dateFieldsMessage: 'Please enter values in date fields',
			invalidDayMessage: 'Invalid day of month. Please enter correct day',
			dateMessage: 'Please enter a valid date',
			numberMessage: 'Please enter a valid number',
			rangeMessage: 'Please enter a value between {0} and {1}',
			minMessage: 'Please enter a value greater than or equal to {0}',
			maxMessage: 'Please enter a value less than or equal to {0}'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.VideoPlayer) {
	$.ig.VideoPlayer = {};

	$.extend($.ig.VideoPlayer, {

		locale: {
			liveStream: "Live video",
			live: "Live",
			paused: "Paused",
			playing: "Playing",
			play: 'Play',
			volume: "Volume",
			unsupportedVideoSource: "The current video sources does not contain a format that is supported by your browser.",
			missingVideoSource: "No compatible video source.",
			progressLabelLongFormat: "$currentTime$ / $duration$",
			progressLabelShortFormat: "$currentTime$",
			enterFullscreen: "Go Fullscreen",
			exitFullscreen: "Exit Fullscreen",
			skipTo: "SKIP TO",
			unsupportedBrowser: "The current browser does not support HTML5 video. <br/>Try upgrading to any of the following versions:",
			currentBrowser: "Current browser: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/",
			buffering: 'Buffering...',
			adMessage: 'Ad: Video will resume in $duration$ seconds.',
			adMessageLong: 'Ad: Video will resume in $duration$.',
			adMessageNoDuration: 'Ad: Video will resume after the commercial.',
			adNewWindowTip: 'Ad: Click to open ad content in a new window.',
			nonDivException: 'The Infragistics HTML5 Video Player can be instantiated only on a DIV tag.',
			relatedVideos: 'RELATED VIDEOS',
			replayButton: 'Replay',
			replayTooltip: 'Click to replay last video.'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.util) {
	$.ig.util = {};

	$.extend($.ig.util, {

		locale: {
			unsupportedBrowser: "The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",
			currentBrowser: "Current browser: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/"
		}
	});

}



/*!@license
 * Infragistics.Web.ClientUI Util functions 13.1.20131.2039
 *
 * Copyright (c) 2011-2013 Infragistics Inc.
 * 
 * util functions that extend the jQuery  namespace 
 * if something is not already available in jQuery, please add it here. 
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.4.4.js
 *
 */

 /* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed. 
 */
// Inspired by base2 and Prototype
/*global xyz */
/*global Class */
/*global define*/
/*global jQuery,$*/
(function () {

    var initializing = false, fnTest = /xyz/.test(function () { xyz(); }) ? /\b_super\b/ : /.*/;
    // The base Class implementation (does nothing)
    this.Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop, doAugment) {
        var doSuper = true,
			_super = this.prototype,
			prototype,
			name;

		if (doAugment) {
            doSuper = false;
        }

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        prototype = new this();
        initializing = false;

        function makeFn(name, fn) {
            return function () {
                var tmp = this._super,
					ret;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
            };
        }

        // Copy the properties over onto the new prototype
        for (name in prop) {
            if (prop.hasOwnProperty(name)) {
                // Check if we're overwriting an existing function
                prototype[name] = doSuper && typeof prop[name] === "function" &&
					typeof _super[name] === "function" && fnTest.test(prop[name]) ?
							makeFn(name, prop[name]) : prop[name];
            }
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        if (doAugment) {
            Class.typeName = function () {
                return this.prototype.$type;
            };

            Class.baseType = function () {
                return this.$type.baseType;
            };

            Class.prototype.getType = function () {
                return this.$type;
            };

            Class.prototype.getHashCode = function () {
                if (this.$hashCode !== undefined) {
                    return this.$hashCode;
                }
                this.$hashCode = $.ig.nextHashCode++;
                return this.$hashCode;
            };
        }

        return Class;
    };

	// Expose util as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase ig.util is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.util", [], function () { return Class; });
	}

}());

$.fn.startsWith = function (str) {
	return this[0].innerHTML.indexOf(str) === 0;
};

$.ig = $.ig || {};
$.ig.util = $.ig.util || {};

$.ig.util.browserVersion = "";
$.ig.util.isIE = window.navigator.userAgent.indexOf("MSIE") > -1;
$.ig.util.isIEOld = $.ig.util.isIE && !window.HTMLElement ? true : false;
if ($.ig.util.isIE) {
	$.ig.util.browserVersion = parseInt(window.navigator.userAgent.substr(window.navigator.userAgent.indexOf("MSIE ") + 4), 10);
	$.ig.util.isIE7 = $.ig.util.browserVersion <= 7;
	$.ig.util.isIE8 = $.ig.util.browserVersion === 8;
	$.ig.util.isIE9 = $.ig.util.browserVersion === 9;
	$.ig.util.isIE10 = $.ig.util.browserVersion >= 10;
}
$.ig.util.isChrome = window.chrome;
$.ig.util.isFF = window.mozInnerScreenX !== undefined;
$.ig.util.isOpera = !!window.opera;
$.ig.util.isSafari = !!(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0);
$.ig.util.isWebKit = !!window.webkitURL;

$.ajaxQueue = function (queueName, options) {
    var callback;
//        var s = $('#status');
//        s.html(options.url + '<br />' + s.html());

    if (typeof document.ajaxQueue === "undefined") {
        document.ajaxQueue = { queue: {} };
	}
    if (typeof document.ajaxQueue.queue[queueName] === "undefined") {
        document.ajaxQueue.queue[queueName] = [];
	}

    if (typeof options === "undefined") {
        return;
	}

    callback = options.complete; //original callback

    //overwrite complete
    options.complete = function (request, status) {
        document.ajaxQueue.queue[queueName].shift(); //remove the first element from the array
        //we should check if original callbak is defined in options
        if (typeof callback !== "undefined") {
            callback(request, status);
		}

        if (document.ajaxQueue.queue[queueName].length > 0) {
            $.ajax(document.ajaxQueue.queue[queueName][0]);
		}
    };
    
    document.ajaxQueue.queue[queueName].push(options);
    if (document.ajaxQueue.queue[queueName].length === 1) {
        $.ajax(document.ajaxQueue.queue[queueName][0]);
	}
};

//A.T. 29 Nov 2012 - Fix for bug #119896
if (typeof $.ig.useDefineProperty === "undefined") { $.ig.useDefineProperty = true; }

$.ig.extendNativePrototype = function (proto, propName, val) {
	if ($.ig.useDefineProperty) {
		try {
			Object.defineProperty(proto, propName, {
				  value: val,
				  enumerable: false,
					configurable: true,
					writable: true
			});
		} catch (e) { // IE8 has defineProperty defined, but doesn't support setting enumerable to false
			proto[propName] = val;
		}
	} else {
		proto[propName] = val;
	}
};

Date.prototype.stdTimezoneOffset = function () {
	var jan, jul, janOffset, julOffset;
	jan = new Date(this.getFullYear(), 0, 1);
	jul = new Date(this.getFullYear(), 6, 1);
	julOffset = jul.getTimezoneOffset();
	janOffset = jan.getTimezoneOffset();
	if (janOffset > 0 && julOffset > 0) {
		return Math.max(janOffset, julOffset);
	} else {
		return Math.min(janOffset, julOffset);
	}
};

Date.prototype.dst = function () {
	return this.getTimezoneOffset() < this.stdTimezoneOffset();
};

$.ig.findPath = function (dsObj, resKey) {
		var resPath, ds = dsObj;
		resPath = resKey.split(".");
		if (resPath.length > 0) {
			for (i = 0; i < resPath.length; i++) {
				if (ds) {
					ds = ds[resPath[i]];
				} else {
					break;
				}
			}
		}
		return ds;
},

$.ig.formatter = function (val, type, format, notTemplate, enableUTCDates, displayStyle) {
	var min, y, h, m, s, ms, am, e, pattern, len, n, dot, gr, gr0, grps, curS, percS, cur, perc, prefix, i, d = val && val.getTime, reg = $.ig.regional.defaults, pow,
	// L.A. 17 October 2012 - Fixing bug #123215 The group rows of a grouped checkbox column are too large
	display = displayStyle || 'inline-block';
	if (format === 'checkbox' && notTemplate) {
		s = '<span style="width:100%;display:' + display + ';overflow:hidden;text-align:center;">';
		s += '<span class="ui-state-default ui-corner-all ui-igcheckbox-small" style="display:inline-block">';
		s += '<span style="display:block" class="' + (val ? '' : 'ui-igcheckbox-small-off ');
		return s + 'ui-icon ui-icon-check ui-igcheckbox-small-on"></span></span></span>';
	}
	if (!val && val !== 0 && val !== false) {
		return '&nbsp;';
	}
	if (type === 'date' || d) {
		if (!val) {
			return '&nbsp;';
		}
		if (!d) {
			return val;
		}
		pattern = reg[(format && format !== 'null' && format !== 'undefined') ? format + 'Pattern' : 'datePattern'] || format;
		if (enableUTCDates) {
			y = val.getUTCFullYear();
			m = val.getUTCMonth() + 1;
			d = val.getUTCDate();
			h = val.getUTCHours();
			min = val.getUTCMinutes();
			s = val.getUTCSeconds();
			ms = val.getUTCMilliseconds();
		} else {
			y = val.getFullYear();
			m = val.getMonth() + 1;
			d = val.getDate();
			h = val.getHours();
			min = val.getMinutes();
			s = val.getSeconds();
			ms = val.getMilliseconds();
		}
		// remove MMMM, MMM, dddd, ddd, tt, t
		pattern = pattern.replace('MMMM', '\x01').replace('MMM', '\x02').replace('dddd', '\x03').replace('ddd', '\x04');
		if (pattern.indexOf('t') >= 0) {
			am = (h >= 12) ? reg.pm : reg.am;
			am = am || ' ';
			if (pattern.indexOf('tt') >= 0) {
				pattern = pattern.replace('tt', 't');
			} else if (am.length > 1) {
				am = am.substring(0, 1);
			}
			pattern = pattern.replace('t', '\x05');
		}
		if (pattern.indexOf('h') >= 0 && h > 12) {
			h -= 12;
		}
		pattern = pattern.replace(/H/g, 'h');
		// L.A. 23 October 2012 - Fixing bug #125273 Missing leading zeros when using format MM/dd/yyyy for dates before 1000
		pattern = pattern.replace('yyyy', y < 10 ? '000' + y : y < 100 ? '00' + y : y < 1000 ? '0' + y : y).replace('yy', ((y = y % 100) < 10) ? '0' + y : y).replace('y', y % 100).replace('MM', (m < 10) ? '0' + m : m).replace('M', m);
		pattern = pattern.replace('dd', (d < 10) ? '0' + d : d).replace('d', d);
		pattern = pattern.replace('hh', (h < 10) ? '0' + h : h).replace('h', h).replace('mm', (min < 10) ? '0' + min : min).replace('m', min).replace('ss', (s < 10) ? '0' + s : s).replace('s', s);
		pattern = pattern.replace('fff', (ms < 10) ? '00' + ms : ((ms < 100) ? '0' + ms : ms)).replace('ff', ((ms = Math.round(ms / 10)) < 10) ? '0' + ms : ms).replace('f', Math.round(ms / 100));
		pattern = pattern.replace('\x01', reg.monthNames[m - 1]).replace('\x02', reg.monthNamesShort[m - 1]).replace('\x05', am);
		pattern = pattern.replace('\x03', reg.dayNames[val.getDay()]).replace('\x04', reg.dayNamesShort[val.getDay()]);
		return pattern;
	}
	d = format === 'double';
	if (!d) {
		cur = format === (curS = 'currency');
		if (!cur) {
			perc = format === (percS = 'percent');
			if (!perc) {
				i = format === 'int';
			}
		}
	}
	n = typeof val === 'number';
	if (d || n || i || cur || perc || type === 'number') {
		if (!n) {
			// keep only e, E, -, +, . and digits
			val = parseFloat(val.replace('(', '-').replace(/[^0-9\-eE\.\+]/gm, ''));
		}
		if (isNaN(val)) {
			return '&nbsp;';
		}
		prefix = cur ? curS : (perc ? percS : 'numeric');
		pattern = reg[prefix + ((val < 0) ? 'Negative' : 'Positive') + 'Pattern'] || 'n';
		len = format ? format.length : 0;
		// calculate maximum number of decimals
		if (len > 0 && ((s = format.charAt(0)) === '0' || s === '#')) {
			min = m = 0;
			dot = format.indexOf('.');
			if (dot > 0) {
				m = len - 1 - dot;
				while (++dot < len) {
					if (format.charAt(dot) !== '0') {
						break;
					}
					min++;
				}
			}
		} else {
			min = reg[prefix + 'MinDecimals'] || 0;
			if (d) {
				m = 999;
			} else {
				m = reg[prefix + 'MaxDecimals'];
				m = (m && !i) ? m : 0;
			}
		}
		if (val < 0) {
			val = -val;
		}
		// S.S. March 26, 2013 Bug #137025. IE8 and below do not round numbers in toFixed() so we need to round
		// them first before passing them to toFixed()
		// val = (m === 999) ? val.toString(10) : val.toFixed(m);
		if (m === 999) {
			val = val.toString(10);
		} else {
			if ($.ig.util.isIE && $.ig.util.browserVersion <= 8) {
				pow = Math.pow(10, m);
				val = (Math.round(pow * val) / pow).toFixed(m);
			} else {
				val = val.toFixed(m);
			}
		}
		if ((i = val.indexOf('E')) < 0) {
			i = val.indexOf('e');
		}
		// cut-off E-power (e)
		e = '';
		if (i > 0) {
			e = val.substring(i);
			val = val.substring(0, i);
		}
		dot = val.indexOf('.');
		len = val.length;
		i = 0;
		// remove trailing 0s
		while (dot > 0 && m > min + i && val.charAt(len - 1 - i) === '0') {
			i++;
		}
		if (i > 0) {
			val = val.substring(0, len -= i);
		}
		// remove trailing .
		if (dot === len - 1) {
			val = val.substring(0, dot);
		}
		if (dot > 0) {
			len = dot;
		}
		// replace decimal separator
		s = reg[prefix + 'DecimalSeparator'];
		if (s) {
			val = val.replace('.', s);
		}
		// insert group separators
		s = reg[prefix + 'GroupSeparator'];
		grps = s ? reg[prefix + 'Groups'] : '';
		gr = gr0 = (grps.length > 0) ? grps[i = 0] : 0;
		while (gr > 0 && --len > 0) {
			if (--gr === 0) {
				val = val.substring(0, len) + s + val.substring(len);
				gr = grps[++i];
				if (!gr || gr < 1) {
					gr = gr0;
				} else {
					gr0 = gr;
				}
			}
		}
		// replace 'n' by number, '$' by symbol and '-' by negative sign
		s = reg[prefix + 'Symbol'] || '';
		return pattern.replace('-', reg.negativeSign).replace('n', val + e).replace('$', s);
	}
	if (format) {
		if (format.indexOf(s = '{0}') >= 0) {
			return format.replace(s, val);
		}
		if (format.indexOf(s = '[0]') >= 0) {
			return format.replace(s, val);
		}
	}
	return (val || val === 0) ? val : '&nbsp;';
};
$.ig._regional = {
	monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	am: 'AM',
	pm: 'PM',
	datePattern: 'M/d/yyyy',
	dateLongPattern: 'dddd, MMMM dd, yyyy',
	dateTimePattern: 'M/d/yyyy h:mm tt',
	timePattern: 'h:mm tt',
	timeLongPattern: 'h:mm:ss tt',
	negativeSign: '-',
	numericNegativePattern: '-$n',
	numericDecimalSeparator: '.',
	numericGroupSeparator: ',',
	numericGroups: [3],
	numericMaxDecimals: 2,
	numericMinDecimals: 0,
	currencyPositivePattern: '$n',
	currencyNegativePattern: '$(n)',
	currencySymbol: '$',
	currencyDecimalSeparator: '.',
	currencyGroupSeparator: ',',
	currencyGroups: [3],
	currencyMaxDecimals: 2,
	currencyMinDecimals: 2,
	percentPositivePattern: 'n$',
	percentNegativePattern: '-n$',
	percentSymbol: '%',
	percentDecimalSeparator: '.',
	percentGroupSeparator: ',',
	percentGroups: [3],
	percentDisplayFactor: 100,
	percentMaxDecimals: 2,
	percentMinDecimals: 2
};
$.ig.regional = $.ig.regional || {};
$.ig.regional.defaults = $.ig._regional;
$.ig.setRegionalDefault = function (regional) {
	if ($.ui && $.ui.igEditor) {
		$.ui.igEditor.setDefaultCulture(regional);
	} else {
		$.ig.regional.defaults = $.extend($.ig._regional, (typeof regional === 'string') ? $.ig.regional[regional] : regional);
	}
};
$.ig.calcSummaries = function (summaryFunction, data, caller, dataType) {
	var sum = function (data) {
		var sum = 0,
			i;
		for (i = 0; i < data.length; i++) {
			sum += data[i];
		}
		return sum;
	};

	// M.H. 16 Nov. 2011 Fix for bug 97886
	summaryFunction = summaryFunction.toLowerCase();
	if (summaryFunction.startsWith('custom')) {
		summaryFunction = 'custom';
	}

	switch (summaryFunction) {
	case "min":
		if (data.length === 0) {
			if (dataType === 'date') {
				return null;
			}
			return 0;
		}
		return Math.min.apply(Math, data);
	case "max":
		if (data.length === 0) {
			if (dataType === 'date') {
				return null;
			}
			return 0;
		}
		return Math.max.apply(Math, data);
	case "sum":
		return sum(data);
	case "avg":
		if (data.length === 0) {
			return 0;
		}
		return sum(data) / data.length;
	case "count":
		return data.length;
	case "custom":
		// M.H. 30 Sept. 2011 Fix for bug #88717 - fix when caller is string
		if (caller !== undefined && caller !== null) {
			if ($.type(caller) === 'function') {
				return caller(data);
			}
			if ($.type(caller) === 'string') {
				caller = eval(caller);
				return caller(data);
			}
		} else {
			return null;
		}
		break;
	}
};
// get max zIndex of ui-dialogs - method is usually called by feautures for configuring zIndex of modal dialogs(like filtering, feature chooser, hiding, etc.)
$.ig.getMaxZIndex = function (id) {
	var maxZ = 10000, thisZ;
	$('.ui-dialog').each(function () {
		if (!id || $(this)[0].id !== id) {
			thisZ = $(this).css('z-index');
			if (!isNaN(thisZ)) {
				maxZ = Math.max(maxZ, thisZ);
			}
		}
	});
	return maxZ;
};
// generate unique identifiers 
$.ig.uid = function () {
	return ((1 + Math.random()) * parseInt('10000', 16)).toString(16).substring(1, 5);
};

$.ig.nextHashCode = 0;
$.ig.util.ensureUniqueId = function (obj) {
	if (!obj.getHashCode) {
		var code = $.ig.nextHashCode++;
		obj.getHashCode = function () {
			return code;
		};
	}
};

$.ig.getColType = function (o) {
	var t = typeof o;
	if (t === "undefined") {
		return "string";
	} else if (t === "object" && o instanceof Date) {
		return "date";
	} else if (t === "boolean") {
		return "bool";
	} else if (t === "number") {
		return t;
	} else if (t === "object") {
		return "object";
	} else {
		return "string";
	}

};

$.ig.typeIdentifierCache = {};
$.ig.nextTypeIdentifier = 0;
$.ig.Type = Class.extend({
    init: function (identifier, baseType, interfaces) {
        this.specializationCache = {};
        this.name = identifier; 
        this.typeArguments = null;
        this.baseType = null;
        this.interfaces = null;
        if (baseType) {
            this.baseType = baseType;
        }
        if (interfaces) {
            this.interfaces = interfaces;
        }

        if ($.ig.typeIdentifierCache[identifier]) {
            this.identifier = $.ig.typeIdentifierCache[identifier];
        } else {
            this.identifier = $.ig.nextTypeIdentifier++;
            $.ig.typeIdentifierCache[identifier] = this.identifier;
        }
    },
    typeName: function() {
        return this.name;
    },
    getSpecId: function(types) {
        if (types.length === 1) {
            if (!types[0]) {
                return "undef";
            } else if (!types[0].typeName) {
                return types[0].toString();
            } else if (types[0].stringId) {
                return types[0].stringId;
            } else {
                return types[0].identifier.toString();
            }
        }

        var ret = "";
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            if (!types[0]) {
                ret += "undef";
            } else if (!types[0].typeName) {
                ret += types[0].toString();
            } else if (types[0].stringId) {
                ret += types[0].stringId;
            } else {
                ret += types[0].identifier.toString();
            }
        }
        return ret;
    },
    specializationCache: null,
    specialize: function () {
        var specId = this.getSpecId(arguments);
        var ret = this.specializationCache[specId];
        if (ret) {
            return ret;
        }
        ret = new $.ig.Type(this.name, this.baseType, this.interfaces);
            
        var placeholders = this.typeArguments;
        var hasPlaceholders = false;
        if (placeholders) {
            hasPlaceholders = true;
        }

        ret.typeArguments = [];
        if (hasPlaceholders) {
            for (var i = 0; i < placeholders.length; i++) {
                ret.typeArguments[i] = arguments[placeholders[i]];
            }
        } 
        else {
            for (var i = 0; i < arguments.length; i++) {
                ret.typeArguments[i] = arguments[i];
            }
        }

        if (this.baseType && this.baseType.typeArguments) {
            ret.baseType = this.baseType.specialize(arguments);
        }

        if (this.interfaces) {
            for (var i = 0; i < this.interfaces.length; i++) {
                ret.interfaces[i] = this.interfaces[i].specialize(arguments);
            }
        }

        this.specializationCache[specId] = ret;
        ret.stringId = ret.generateString();
        return ret;
    },
    equals: function (other) {
        if (!(other instanceof $.ig.Type)) {
            return false;
        }
        if (this.identifier !== other.identifier) {
            return false;
        }
        if (this.typeArguments === null && other.typeArguments === null) {
            return true;
        }
        if (this.typeArguments === null && other.typeArguments !== null) {
            return false;
        }
        if (this.typeArguments !== null && other.typeArguments === null) {
            return false;
        }
        if (this.typeArguments.length !== other.typeArguments.length) {
            return false;
        }
        for (var i = 0; i < this.typeArguments.Length; i++) {
            if (!(this.typeArguments[i].equals(other.typeArguements[i]))) {
                return false;
            }
        }

        return true;
    },
    checkEquals: function (type1, type2) {
        if (type1 instanceof $.ig.Type) {
            return type1.equals(type2);
        } else if (type2 instanceof $.ig.Type) {
            return type2.equals(type1);
        } else {
            return type1 == type2;
        }
    },
    op_Equality: function (type1, type2) {
        return type1.equals(other);
    },
    op_Inequality: function (type1, type2) {
        return !type1.equals(type2);
    },
    generateString: function() {
        if (!this.typeArguments || this.typeArguments.length == 0) {
            return this.identifier.toString();
        } else {
            var ret = this.identifier.toString() + "[";
            var first = true;
            for (var i = 0; i < this.typeArguments.count; i++) {
                if (first) { first = false; } else { ret += ","; }
                ret += this.typeArguments[i].toString();
            }
            ret += "]";
            return ret;
        }
    }   
}, true);

$.ig.Object = Class.extend({
    init: function () {

    },
    $type: new $.ig.Type('Object')
}, true);

$.ig.Enum = Class.extend({
	$type: new $.ig.Type('Enum', $.ig.Object.prototype.$type)
}, true);

$.ig.ValueType = Class.extend({
	init: function () {

    },
	$type: new $.ig.Type('ValueType', $.ig.Object.prototype.$type)
}, true);

$.ig.INotifyPropertyChanged = Class.extend({
    init: function () {

    },
    _PropertyChanged: function () {

    },
    $type: new $.ig.Type('INotifyPropertyChanged')
}, true);

$.ig.PropertyChangedEventArgs = $.ig.Object.extend({
    init: function(propertyName) {
        this._propertyName = propertyName;
    },
    _propertyName: null,
    propertyName: function (value) {
        if (arguments.length === 0) {
            return this._propertyName;
        }
        else {
            this._propertyName = value;
        }
    },
    $type: new $.ig.Type('PropertyChangedEventArgs', $.ig.Object.$type)
}, true);

$.ig.XmlNodeType = Class.extend({
    _Attribute:2,
    _CDATA:4,
    _Comment:8,
    _Document:9,
    _DocumentFragment:11,
    _DocumentType:10,
    _Element:1,
    _Entity:6,
    _EntityReference:5,
    _Notation:12,
    _ProcessingInstruction:7,
    _Text:3,

    element: 1,
    attribute: 2,
    text: 3,
    cDATA: 4,
    entityReference: 5,
    entity: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12

}, true);

$.ig.XmlDocumentParser = Class.extend({
	parse: function (markup) {
		if (!window.DOMParser) {
			var parsers = [ 'Msxml2.DOMDocument.3.0', 'Msxml2.DOMDocument' ];

			for (var i = 0; i < parsers.length; i++) {
				try {
					var xmlDOM = new ActiveXObject(progIDs[i]);
					xmlDOM.async = false;
					xmlDOM.loadXML(markup);
					xmlDOM.setProperty('SelectionLanguage', 'XPath');
						
					return xmlDOM;
				}
				catch (ex) {
				}
			}
		} else {
			try {
				var domParser = new DOMParser();
				return domParser.parseFromString(markup, 'text/xml');
			}
			catch (ex) {
			}
		}
		return null;
	}
}, true);

$.ig.Array = Array;
/*
$.ig.Array.prototype.add = function (item) {
    this[this.length] = item;
};

$.ig.Array.prototype.indexOf = function (item) {
	for (var i=0; i<this.length; i++)
	{
		if (this[i] == item)
			return i;			
	}
	return -1;
};

$.ig.Array.prototype.copy = function (source, sourceIndex, dest, destIndex, count) {
    for (i = 0; i < count; i++) {
        dest[destIndex + i] = source[sourceIndex + i];
    }
};
*/
$.ig.extendNativePrototype(Array.prototype, "add", function (item) {
	this[this.length] = item;
});

$.ig.addToArray = function (arr, item) {
	arr[arr.length] = item;
};

$.ig.indexInArray = function (arr, item) {
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] == item)
			return i;			
	}
	return -1;
};

$.ig.arrayContains = function (arr, item) {
    var index = arr.indexOf(item);
    return (index >= 0);
};

$.ig.extendNativePrototype(Array.prototype, "indexOf", function (item) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == item)
			return i;			
	}
	return -1;
});

$.ig.extendNativePrototype(Array.prototype, "copy", function (source, sourceIndex, dest, destIndex, count) {
    for (i = 0; i < count; i++) {
        dest[destIndex + i] = source[sourceIndex + i];
    }
});

$.ig.removeFromArray = function (arr, from, to) {
	var rest = arr.slice((to || from) + 1 || arr.length);
	arr.length = from < 0 ? arr.length + from : from;
	return arr.push.apply(arr, rest);
};
/*
$.ig.Array.prototype.contains =  function (item) {
    var index = this.indexOf(item);
    return (index >= 0);
};

$.ig.Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

$.ig.Array.prototype.removeAt = function (i) {
    this.splice(i, 1);
};

$.ig.Array.prototype.removeItem = function (item) {
    var index = this.indexOf(item);
    if (index >= 0) {
        this.splice(index, 1);
        return true;
    }
    return false;
};

$.ig.Array.prototype.getEnumerator = function () {
        return new $.ig.ArrayEnumerator(this);
};

$.ig.Array.prototype.count = function () {
    return this.length;
};

$.ig.Array.prototype.item = function (index, value) {
    if (arguments.length === 2) {
        this[index] = value;
        return value;
    } else {
        return this[index];
    }
};

$.ig.Array.prototype.getLength = function (dimension) {
	if (dimension === 0) {
		return this.length;
	}
	else {
		return this.dimensionLength[dimension - 1];
	}
};

$.ig.Array.prototype.clear = function () {
    this.length = 0;
};
*/
$.ig.extendNativePrototype(Array.prototype, "contains", function (item) {
    var index = this.indexOf(item);
    return (index >= 0);
});

$.ig.extendNativePrototype(Array.prototype, "insert", function (index, item) {
    this.splice(index, 0, item);
});

$.ig.extendNativePrototype(Array.prototype, "removeAt", function (i) {
   this.splice(i, 1);
});

$.ig.extendNativePrototype(Array.prototype, "removeItem", function (item) {
    var index = this.indexOf(item);
    if (index >= 0) {
        this.splice(index, 1);
        return true;
    }
    return false;
});

$.ig.extendNativePrototype(Array.prototype, "getEnumerator", function () {
	return new $.ig.ArrayEnumerator(this);
});

$.ig.extendNativePrototype(Array.prototype, "count", function () {
    return this.length;
});

$.ig.extendNativePrototype(Array.prototype, "item", function (index, value) {
    if (arguments.length === 2) {
        this[index] = value;
        return value;
    } else {
        return this[index];
    }
});

$.ig.extendNativePrototype(Array.prototype, "getLength", function (dimension) {
	if (dimension === 0) {
		return this.length;
	}
	else {
		return this.dimensionLength[dimension - 1];
	}
});

$.ig.extendNativePrototype(Array.prototype, "clear", function () {
    this.length = 0;
});

$.ig.extendNativePrototype(Array.prototype, "resize", function () {
    this.length = 0;
});

$.ig.ArrayEnumerator = Class.extend({
 
    init: function (array) {
        this._array = array;
        this._index = -1;
    },
    current: function() {
        return this._array[this._index];
    },
    moveNext: function() {
        this._index++;
        return (this._index < this._array.length);
    },
    reset: function() {
        this._index = -1;
    }
}, true);

$.ig.Date = Class.extend({init: function () {

    },
    $type: new $.ig.Type('Date', $.ig.Object.$type)
}, true);
$.ig.Date.prototype.now = function () {
	return new Date();
};
$.ig.Date.prototype.fromMilliseconds = function (value) {
	return value;
};

// implement casting
$.ig.util.canAssign = function(targetType, type) {
    if ($.ig.Type.prototype.checkEquals(targetType, type)) {
        return true;
    }
    if (type.interfaces) {
        for (var i = 0; i < type.interfaces.length; i++) {
            if ($.ig.util.canAssign(targetType, type.interfaces[i])) {
                return true;
            }
        }
    }
    if (type.baseType) {
        return $.ig.util.canAssign(targetType, type.baseType);
    }

    return false;
};

$.ig.util.cast = function (targetType, obj) {
    if (obj == null) {
        return null;
    }
       
    var type = obj;
        
    if (obj.$type) {
        type = obj.$type;
    }
       
    if ($.ig.util.canAssign(targetType, type)) {
        return obj;
    } else {
        return null;
    }
};

$.ig.Dictionary = Class.extend({
    init: function () {
        this.proxy = {};
        this.keysHolder = this.proxy;
        this._count = 0;
    },
    $type: new $.ig.Type('Dictionary', $.ig.Object.prototype.$type),
    proxy: null
}, true);

$.ig.Dictionary.prototype.getDictionary = function (o) {
    var dict = new $.ig.Dictionary();
    dict.proxy = o;
    dict.keysHolder = o;
    return dict;
};

$.ig.Dictionary.prototype.containsKey = function (key) {
	return this.proxy[key] !== undefined;
};

$.ig.Dictionary.prototype.count = function () {
	return this._count;
};

$.ig.Dictionary.prototype.item = function (key, value) {
	if (arguments.length === 1) {
		return this.proxy[key];
	}
	else {
		if (!this.proxy[key]) {
			this._count++;
		}
		this.proxy[key] = value;
	}
};

$.ig.Dictionary.prototype.add = function (key, value) {
	if (!this.proxy[key]) {
		this._count++;
	}
	this.proxy[key] = value;
};

$.ig.Dictionary.prototype.remove = function (key) {
	delete this.proxy[key];
	this._count--;
};

$.ig.Dictionary.prototype.keys = function () {
	return new $.ig.KeyEnumerator(this);
};

$.ig.Dictionary.prototype.values = function () {
	return new $.ig.ValueEnumerator(this);
};

$.ig.Dictionary.prototype.clear = function () {
	this.proxy = {};
	this.keysHolder = this.proxy;
	this._count = 0;
};

$.ig.EventArgs  = $.ig.Object.extend({
    init: function () {

    }
}, true);

$.ig.Number = Class.extend({
    $type: new $.ig.Type('Number', $.ig.Object.prototype.$type)
}, true);

$.ig.Number.prototype.parseInt = function (a,b) {
    return parseInt(a,b);
};

$.ig.Number.prototype.log10 = function (x) {
	return Math.log(x) / Math.log(10);
};

$.ig.Single = Class.extend({

}, true);

$.ig.Single.prototype.parseFloat = function (s) {
    return parseFloat(s);
};

$.ig.Single.prototype.isInfinity = function (s) {
    return s === Infinity || s === -Infinity;
};

$.ig.Int32 = Class.extend({
    $type: new $.ig.Type('Int32', $.ig.Object.prototype.$type)
}, true);

$.ig.Double = Class.extend({
    $type: new $.ig.Type('Double', $.ig.Object.prototype.$type)
}, true);

$.ig.Delegate = Class.extend({
    $type: new $.ig.Type('Delegate', $.ig.Object.prototype.$type)
}, true);

$.ig.Delegate.prototype.combine = function (del1, del2) {
	if (!del1) {
		return del2;
	}

	if (!del2) {
		return del1;
	}

	var ret = function () {
		del1.apply(null, arguments);
		return del2.apply(null, arguments);
	}
	ret.enumerate = function (arr) {
		if (del1) {
			if (del1.enumerate) {
				del1.enumerate(arr);
			} else {
				arr.push(del1);
			}
		}
		if (del2) {
			if (del2.enumerate) {
				del2.enumerate(arr);
			} else {
				arr.push(del2);
			}
		}
	}

	return ret;
};

$.ig.Delegate.prototype.remove = function (del1, del2) {
	if (!del1) {
		return null;
	}
	if (!del2) {
		return del1;
	}

	var arr = [];
	var del = null;
	if (del1.enumerate) {
		del1.enumerate(arr);
	} else {
		arr.push(del1);
	}

	for (var i = 0; i < arr.length; i++) {
		if (del2.original) {
			if (arr[i].original == del2.original &&
                arr[i].target == del2.target) {
				continue;
			}
		}

		if (arr[i] == del2) {
			continue;
		}

		del = $.ig.Delegate.prototype.combine(del, arr[i]);
	}

	return del;
};

$.ig.ReflectionUtil = Class.extend({
    $type: new $.ig.Type('ReflectionUtil', $.ig.Object.prototype.$type)
}, true);

$.ig.ReflectionUtil.prototype.getPropertyGetter = function (type, propertyName) {
	if (typeof type.prototype[propertyName] === "function") {
		return function (instance) {
			return type.prototype[propertyName].apply(instance, arguments);
		};
	}

	return function (instance) {
		return instance[propertyName];
	}
};

$.ig.IEnumerable = Class.extend({
	$type: new $.ig.Type('IEnumerable', null)
}, true);

$.ig.IEnumerator = Class.extend({
	$type: new $.ig.Type('IEnumerator', null)
}, true);

$.ig.IEqualityComparer$1 = Class.extend({
    $type: new $.ig.Type('IEqualityComparer', $.ig.Object.prototype.$type)
}, true);

$.ig.IList = Class.extend({
	$type: new $.ig.Type('IList', null, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.Error = Class.extend({
	init: function (initNumber) {
		if (initNumber > 0) {
			switch (initNumber) {
				case 1:
					this.init1.apply(this, arguments);
					break;
				case 2:
					this.init2.apply(this, arguments);
					break;
			}
			return;
		}
		this.__message = null;
		this.__innerException = null;
	},
	init1: function (initNumber, message) {
		this.__message = message;
	},
	init2: function (initNumber, message, innerException) {
		this.__message = message;
		this.__innerException = innerException;
	},
    $type: new $.ig.Type('Error', $.ig.Object.prototype.$type)
}, true);

$.ig.Error.prototype.message = function () {
	return this.__message;
};

$.ig.Error.prototype.innerException = function () {
	return this.__innerException;
};

$.ig.IDictionary = Class.extend({
    $type: new $.ig.Type('IDictionary', null)
}, true);

$.ig.ValueEnumerator = Class.extend({
    init: function (dict) {
        this._dict = dict;
        this._index = -1;
        this._count = 0;
        this._values = [];
        for (var item in this._dict.proxy) {
            this._values[this._count] = this._dict.proxy[item];
            this._count++;
        }
    },
    current: function() {
        return this._values[this._index];
    },
    moveNext: function() {
        this._index++;
        return (this._index < this._count);
    },
    reset: function() {
        this._index = -1;
    },
    getEnumerator: function() {
        this.reset();
        return this;
    },
    $type: new $.ig.Type('ValueEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.KeyEnumerator = Class.extend({
 
    init: function (dict) {
        this._dict = dict;
        this._index = -1;
        this._count = 0;
        this._keys = [];
        for (var item in this._dict.proxy) {
            this._keys[this._count] = item;
            this._count++;
        }
    },
    current: function() {
        return this._keys[this._index];
    },
    moveNext: function() {
        this._index++;
        return (this._index < this._count);
    },
    reset: function() {
        this._index = -1;
    },
    getEnumerator: function() {
        this.reset();
        return this;
    },
    $type: new $.ig.Type('KeyEnumerator', $.ig.Object.prototype.$type, [$.ig.IEnumerable.prototype.$type])
}, true);

$.ig.intDivide = function (int1, int2) {
	var result = int1 / int2;
	if (result >= 0) {
		return Math.floor(result);
	} else {
		return Math.ceil(result)
	}
};

$.ig.Nullable$1 = Class.extend({
    $t: null,
    init: function($t, value) {
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        $.ig.Object.prototype.init.call(this);

        this._value = value;
    },
    hasValue: function() {
        return this._value !== null;
    },
    _value: null,
    value: function(value) {
        if (arguments.length === 1) {
            this._value = value;
        } else {
            return this._value;
        }
    },
    getValueOrDefault: function() {
        if (this.hasValue()) {
            return this._value;
        } else {
            return getDefaultValue();
        }
    },
    getDefaultValue: function() { 
        if ($.ig.util.canAssign($.ig.Number.prototype.$type, $t)) {
            return 0;
        } else if ($.ig.util.canAssign($.ig.Boolean.prototype.$type, $t)) {
            return false;
        } else {
            return null;
        }
    },
    getValueOrDefault1: function(defaultValue) {
        if (this.hasValue()) {
            return this._value;
        } else {
            return defaultValue;
        }
    },
    isNullable: true,
    $type: new $.ig.Type('Nullable$1', $.ig.Object.prototype.$type)
}, true);

$.ig.util.toNullable = function (t, value) {
	if (value && value.isNullable) {
		return value;
	}

	var ret = new $.ig.Nullable$1(t, value);
	return ret;
};

$.ig.util.nullableAdd = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 + val2);
};

$.ig.util.nullableSubtract = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 - val2);
};

$.ig.util.nullableMultiply = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 * val2);
};

$.ig.util.nullableDivide = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 / val2);
};

$.ig.util.nullableModulus = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return null;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return null;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return $.ig.util.toNullable($.ig.Number.prototype.$type, val1 % val2);
};

$.ig.util.nullableGreaterThan = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 > val2;
};

$.ig.util.nullableGreaterThanOrEqual = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 >= val2;
};

$.ig.util.nullableLessThan = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 < val2;
};

$.ig.util.nullableLessThanOrEqual = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 <= val2;
};

$.ig.util.nullableEquals = function (v1, v2) {
	var v1IsNull = (v1 == null) || (v1.IsNullable && !v1.hasValue());
	var v2IsNull = (v2 == null) || (v2.IsNullable && !v2.hasValue());

	if (v1IsNull && v2IsNull) {
		return true;
	}
	if (v1IsNull != v2IsNull) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 == val2;
};

$.ig.util.nullableNotEquals = function (v1, v2) {
	if (v1.isNullable && !v1.hasValue()) {
		return false;
	}
	if (v2.isNullable && !v2.hasValue()) {
		return false;
	}

	var val1 = v1;
	var val2 = v2;
	if (v1.isNullable) {
		val1 = v1.value();
	}
	if (v2.isNullable) {
		val2 = v2.value();
	}

	return val1 != val2;
};

$.ig.util.wellKnownColors = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred : 'cd5c5c',
    indigo : '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32'
};

$.ig.util.stringToColor = function (str) {
    var ret = {
        a: 255,
        r: 0,
        g: 0,
        b: 0
    }

    var asColorName = str.replace(' ', '').toLowerCase();
	
	if (asColorName === 'transparent') {
		return { a: 0, r: 0, g: 0, b: 0 };
	}
	
    if ($.ig.util.wellKnownColors[asColorName] !== undefined) {
        str = $.ig.util.wellKnownColors[asColorName];
    }

	if (str.lastIndexOf("rgba", 0) === 0) {
        str = str.replace('rgba', '').replace(' ', '').replace('(', '').replace(')', '');
        var parts = str.split(',');
        ret.r = parseInt(parts[0]);
        ret.g = parseInt(parts[1]);
        ret.b = parseInt(parts[2]);
        ret.a = parseFloat(parts[3]) * 255.0;
	} else if (str.lastIndexOf("rgb", 0) === 0) {
        str = str.replace('rgb', '').replace(' ', '').replace('(', '').replace(')', '');
        var parts = str.split(',');
        ret.r = parseInt(parts[0]);
        ret.g = parseInt(parts[1]);
        ret.b = parseInt(parts[2]);
    } else {
        str = str.replace('#', '').replace(' ', '');
        if (str.length === 6) {
            ret.r = parseInt(str.substr(0, 2), 16);
            ret.g = parseInt(str.substr(2, 2), 16);
            ret.b = parseInt(str.substr(4, 2), 16);
        } else if (str.length === 3) {
            ret.r = parseInt(str.substr(0, 1) + str.substr(0, 1), 16);
            ret.g = parseInt(str.substr(1, 1) + str.substr(1, 1), 16);
            ret.b = parseInt(str.substr(2, 1) + str.substr(2, 1), 16);
        } 
    }
    return ret;
};

$.ig.util.getBinary = function (url, callback, error) {
	var data, ret, req, useVbArray = false;

	if (typeof XMLHttpRequest == "undefined") {
		try { req = ActiveXObject("Msxml2.XMLHTTP.6.0"); }
		catch (e) { }
		try { req = ActiveXObject("Msxml2.XMLHTTP.3.0"); }
		catch (e) { }
		req = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		req = new XMLHttpRequest();
	}

	if (req.overrideMimeType) {
		req.overrideMimeType('text/plain; charset=x-user-defined');
	} else {
		if (typeof VBArray != "undefined") {
			useVbArray = true;
		}
	}

	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
				if (useVbArray) {
					data = new VBArray(req.responseBody).toArray();
					for (var i = 0; i < data.length; i++) {
						data[i] = String.fromCharCode(data[i]);
					}
					ret = data.join('');
					callback(ret);
				} else {
					callback(req.responseText);
				}
			} else {
				error(req.error);
			}
		}
	}

	req.open('GET', url, true);
	req.send(null);
};

$.ig.util.extCopy = function (source, bindings) {
	var i, j, k;
	for (j = 0; j < bindings.length; j++) {
		var dests = bindings[j][0];
		var meths = bindings[j][1];
		for (k = 0; k < dests.length; k++) {
			for (i = 0; i < meths.length; i++) {
				//A.T. make sure the translated code uses a similar approach to using defineProperty
				//dests[k].prototype[meths[i]] = source.prototype[meths[i]];
				$.ig.extendNativePrototype(dests[k].prototype, meths[i], source.prototype[meths[i]]);
			}
		}
	}
};

$.ig.util.bulkDefine = function (toDefine) {
	var i = 0, curr = null, els = null;
	for (i = 0; i < toDefine.length; i++) {
		curr = toDefine[i];
		els = curr.split(':');
		$.ig[curr] = $.ig[curr] || Class.extend({ $type: new $.ig.Type(curr, $.ig.Object.prototype.$type), $placeholder: true }, true);
	}
};

$.ig.util.defType = function (name, baseName, definition) {
	var define = true;
	if ($.ig[name] && !$.ig[name].prototype.$placeholder) {
		define = false;
	}
	if (define) {
		$.ig[name] = $.ig[baseName].extend(definition);
	}
};

$.ig.util.getClassCount = function (classNamePrefix, isPrefix) {
	var styleSheets = document.styleSheets, numFound = 0, count = 0, currSheet, rules, currSelector, currVal;
	classNamePrefix = classNamePrefix.toLowerCase();
	if (!styleSheets) {
		return 0;
	}
	for (var i = 0; i < styleSheets.length; i++) {
        try {
			currSheet = styleSheets[i];
			rules = currSheet.rules ? currSheet.rules : currSheet.cssRules;
			if (!rules) {
				continue;
			}
			for (var j = 0; j < rules.length; j++) {
				currSelector = rules[j].selectorText;
				if (currSelector) {
					currSelector = currSelector.toLowerCase();
					if (isPrefix) {
						if (currSelector.indexOf(classNamePrefix) == 0) {
							currVal = parseInt(currSelector.replace(classNamePrefix, ""));
							if (isNaN(currVal)) {
								count++;
							} else {
							numFound = Math.max(numFound, currVal);
						}
						}
					} else {
						if (currSelector == classNamePrefix) {
							numFound++;
						}
					}
				}
			}
        } catch (e) {
            //ignore cross domain sheets.
        }
	}
	return Math.max(numFound, count);
};
$.ig.util._isCanvasSupported = function () {
	var canvas = document.createElement('canvas');
	return !!(canvas.getContext && canvas.getContext('2d'));
};

$.ig.util._renderUnsupportedBrowser = function (widget, locale) {
	if (!widget.events || !widget.events.browserNotSupported || widget._trigger(widget.events.browserNotSupported)) {
		var elem = widget.element, o = widget.options, locale = locale || $.ig.util.locale, container = $('<div></div>').css("overflow", "auto").addClass(widget.css.unsupportedBrowserClass).appendTo(elem), ul, browserUnsupported;
		if ($.ig.util.isIE) {
			browserUnsupported = 'Internet Explorer ' + $.ig.util.browserVersion;
		} else if ($.ig.util.isOpera) {
			browserUnsupported = 'Opera ' + $.ig.util.browserVersion;
		} else if ($.ig.util.isWebKit) {
			browserUnsupported = 'Webkit ' + $.ig.util.browserVersion;
		} else if ($.ig.util.isFF) {
			browserUnsupported = 'Mozilla Firefox ' + $.ig.util.browserVersion;
		} else {
			browserUnsupported = $.ig.util.browserVersion;
		}

		$('<div></div>').addClass('ui-html5-current-browser-label').html(locale.currentBrowser.replace('{0}', browserUnsupported)).appendTo(container);
		$('<div></div>').addClass('ui-html5-non-html5-text').html(locale.unsupportedBrowser).appendTo(container);
		ul = $('<ul></ul>').addClass('ui-html5-browsers-list').appendTo(container);
		$('<a></a>').attr('href', locale.chromeDownload).attr('target', '_blank').addClass('ui-html5-chrome-icon').html(locale.chrome8).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
		$('<a></a>').attr('href', locale.firefoxDownload).attr('target', '_blank').addClass('ui-html5-firefox-icon').html(locale.firefox36).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
		$('<a></a>').attr('href', locale.operaDownload).attr('target', '_blank').addClass('ui-html5-Opera-icon').html(locale.opera11).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
		$('<a></a>').attr('href', locale.safariDownload).attr('target', '_blank').addClass('ui-html5-safari-icon').html(locale.safari5).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
		$('<a></a>').attr('href', locale.ieDownload).attr('target', '_blank').addClass('ui-html5-ie-icon').html(locale.ie9).appendTo($('<li></li>').addClass('ui-corner-all').appendTo(ul));
		if (widget.css.unsupportedBrowserClass.indexOf(" ui-html5-non-html5") === -1) {
			elem.addClass('ui-html5-non-html5');
		}
		if (o.width) {
			elem.css("width", o.width);
		}
		if (o.height) {
			elem.css("height", o.height);
		}
	}
};

(function ($) {

    $.ig.util.profiler = {};
    
    var methods = {};
    
    $.ig.util.profiler.recordTime = function(methodName, time) {
        var key = "meth: " + methodName;
        if (!methods[key]) {
            methods[key] = [];
        }
        methods[key][methods[key].length] = time;
    }

    $.ig.util.profiler.reset = function () {
        methods = {};
    }

    $.ig.util.profiler.logReport = function () {
        var meths = [];
        var j = 0;
        var sum = 0;
        var avg = 0;
        for (var prop in methods) {
            if (prop.indexOf('meth:') === 0) {
                var meth = {};
                meth.name = prop.substr(5);

                sum = 0;
                for (var i = 0; i < methods[prop].length; i++) {
                    sum = sum + methods[prop][i];
                }
                var avg = sum / methods[prop].length;
                meth.avg = avg;
                meth.callCount = methods[prop].length;
                meths[j] = meth;
                j++;
            }
        }

        meths.sort(function (m1, m2) {
            if (m1.avg < m2.avg) {
                return 1;
            }
            if (m1.avg > m2.avg) {
                return -1;
            }
            if (m1.avg == m2.avg) {
                return 0;
            }
        });

        for (var k = 0; k < Math.min(200, meths.length); k++) {
            console.log(meths[k].name + " avg: " + meths[k].avg + " callCount: " + meths[k].callCount);
        }
    }
}(jQuery));

/*
Function.prototype.invoke = function () {
	return this.apply(null, arguments);
};

Function.prototype.on = function (target) {
	var self = this;
	var ret = function () {
		return self.apply(target, arguments);
	};
	ret.original = this;
	ret.target = target;
	return ret;
};
*/

$.ig.extendNativePrototype(Function.prototype, "invoke", function () {
	return this.apply(null, arguments);
});

$.ig.extendNativePrototype(Function.prototype, "on", function (target) {
	var self = this;
	var ret = function () {
		return self.apply(target, arguments);
	};
	ret.original = this;
	ret.target = target;
	return ret;
});

String.prototype.startsWith = function (s) {
	return this.indexOf(s) === 0;
};

String.prototype.endsWith = function (s) {
	var offset = this.length - s.length;
	return offset >= 0 && this.lastIndexOf(s) === offset;
};

String.prototype.remove = function (index, count) {
	if (!count || ((index + count) > this.length)) {
		return this.substr(0, index);
	}
	return this.substr(0, index) + this.substr(index + count);
};

String.prototype.compareTo = function (other) {
	if (this == other) {
		return 0;
	}
	if (this < other) {
		return -1;
	}
	return 1;
};

if (!String.prototype.trim)  {
	//String.trim() was added natively in JavaScript 1.8.1 / ECMAScript 5
	//supported in: Firefox 3.5+, Chrome/Safari 5+, IE9+ (in Standards mode only!)
	String.prototype.trim = function () {
		return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	};
}

String.prototype.fullTrim = function () {
	return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
};

String.getHashCode = function () { return this; }
String.isNullOrEmpty = function (s) { return !s || s.length < 1; }
String.empty = function () { return ""; };
String.concat = function () { return [].join.call(arguments, ""); };
String.concat1 = function (o1, o2) { return [].join.call(arguments, ""); };
String.concat2 = function (s1, s2) { return [].join.call(arguments, ""); };
String.concat3 = function () { return [].join.call(arguments, ""); };
String.concat4 = function (o1, o2, o3) { return [].join.call(arguments, ""); };
String.concat5 = function (s1, s2, s3) { return [].join.call(arguments, ""); };
String.concat6 = function (o1, o2, o3, o4) { return [].join.call(arguments, ""); };
String.concat7 = function (s1, s2, s3, s4) { return [].join.call(arguments, ""); };

String.prototype.equals = function (other) {
	return this == other;
};

/*
Array.prototype.insertRange = function (index, items) {
	var i = 0;
	if (this.length == 0) {
		for (i = 0; i < items.length; i++) {
			this[index++] = items[i];
		}
	} else {
		for (i = 0; i < items.length; i++) {
			this.splice(index++, 0, items[i]);
		}
	}
};

Array.prototype.clone = function () {
	return $.extend(true, [], this);
};

Array.prototype.clear = function () {
	this.length = 0;
};
*/

/* S.S. March 12, 2013 - Bug #134399 Adding filter for older browsers */
if (!Array.prototype.filter) {
	Array.prototype.filter = function(fun/*, thisp */) {
		var t, len, res, thisp, val, i;
		if (this == null) {
			throw new TypeError();
		}
		t = Object(this);
		len = t.length >>> 0;
		if (typeof fun != "function") {
			throw new TypeError();
		}
		res = [];
		thisp = arguments[1];
		for (i = 0; i < len; i++) {
			if (i in t) {
				val = t[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, t)) {
					res.push(val);
				}
			}
		}
		return res;
	};
}

$.ig.extendNativePrototype(Array.prototype, "insertRange", function (index, items) {
	var i = 0;
	if (this.length == 0) {
		for (i = 0; i < items.length; i++) {
			this[index++] = items[i];
		}
	} else {
		for (i = 0; i < items.length; i++) {
			this.splice(index++, 0, items[i]);
		}
	}
});

$.ig.extendNativePrototype(Array.prototype, "clone", function () {
	return $.extend(true, [], this);
});

$.ig.extendNativePrototype(Array.prototype, "clear", function () {
	this.length = 0;
});

Math.log10 = function (n) {
	return Math.log(n) / Math.log(10);
};

Math.logBase = function (n, n2) {
	return Math.log(n) / Math.log(n2);
};

Math.sign = function (n) {
	if (n < 0) {
		return -1;
	} else if (n > 0) {
		return 1;
	}
	else {
		return 0;
	}
};

Number.getHashCode = function () { return this; };
//Number.isNaN = function(n) { return isNaN(n); }
Number.isInfinity = function(n) { return n === Infinity || n === -Infinity; };

/*
// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
*/

// K.D. Fix for WinJS dynamic content exceptions.
window.toStaticHTML = window.toStaticHTML || function (s) { return s; };
window.MSApp = window.MSApp || {};
window.MSApp.execUnsafeLocalFunction = window.MSApp.execUnsafeLocalFunction || function (fn) { fn.apply() };

//A CommonJS Promises/A implementation that will be used with jquery versions prior to 1.5
//that do not have a $.Deferred implementation

// String to Object flags format cache
$.ig.util.jqueryFlagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
$.ig.util.jqueryCreateFlags = function ( flags ) {
	var object = $.ig.util.jqueryFlagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
$.ig.util.jqueryCallbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( $.ig.util.jqueryFlagsCache[ flags ] || $.ig.util.jqueryCreateFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			fired = true;
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

$.ig.util.jqueryDeferred = function( func ) {
    var doneList = $.ig.util.jqueryCallbacks( "once memory" ),
        failList = $.ig.util.jqueryCallbacks( "once memory" ),
        progressList = $.ig.util.jqueryCallbacks( "memory" ),
        state = "pending",
        lists = {
            resolve: doneList,
            reject: failList,
            notify: progressList
        },
        promise = {
            done: doneList.add,
            fail: failList.add,
            progress: progressList.add,

            state: function() {
                return state;
            },

            // Deprecated
            isResolved: doneList.fired,
            isRejected: failList.fired,

            then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
                deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
                return this;
            },
            always: function() {
                deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
                return this;
            },
            pipe: function( fnDone, fnFail, fnProgress ) {
                return $.ig.util.jqueryDeferred(function( newDefer ) {
                    jQuery.each( {
                        done: [ fnDone, "resolve" ],
                        fail: [ fnFail, "reject" ],
                        progress: [ fnProgress, "notify" ]
                    }, function( handler, data ) {
                        var fn = data[ 0 ],
                            action = data[ 1 ],
                            returned;
                        if ( jQuery.isFunction( fn ) ) {
                            deferred[ handler ](function() {
                                returned = fn.apply( this, arguments );
                                if ( returned && jQuery.isFunction( returned.promise ) ) {
                                    returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
                                } else {
                                    newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
                                }
                            });
                        } else {
                            deferred[ handler ]( newDefer[ action ] );
                        }
                    });
                }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function( obj ) {
                if ( obj == null ) {
                    obj = promise;
                } else {
                    for ( var key in promise ) {
                        obj[ key ] = promise[ key ];
                    }
                }
                return obj;
            }
        },
        deferred = promise.promise({}),
        key;

    for ( key in lists ) {
        deferred[ key ] = lists[ key ].fire;
        deferred[ key + "With" ] = lists[ key ].fireWith;
    }

    // Handle state
    deferred.done( function() {
        state = "resolved";
    }, failList.disable, progressList.lock ).fail( function() {
        state = "rejected";
    }, doneList.disable, progressList.lock );

    // Call given func if any
    if ( func ) {
        func.call( deferred, deferred );
    }

    // All done!
    return deferred;
};

$.ig.util.deferred = function () {
    if ($.Deferred !== undefined) {
        return $.Deferred();
    } else {
        return $.ig.util.jqueryDeferred();
    }
};

$.ig.util.ajax = function (url, contentType, data, method, requestOptions) {
    //return $.ig.util.corsRequest(url, contentType, data, method, requestOptions);

    var deferred = $.ig.util.deferred();
    var isCrossDomain;
    if (requestOptions && "isCrossDomain" in requestOptions) {
        isCrossDomain = requestOptions.isCrossDomain
    } else {
        isCrossDomain = $.support.cors;
    }

    var xhrObj = (function (rOptions) {
        var xhr = new XMLHttpRequest();

        // do not use XDomainRequest for IE8/IE9 if the user has specifed withCredentials in request options
        // which is interpreted as XmlHttpRequest to be used against trusted domain
        // since XDomainRequest does not support withCredentials
        if (isCrossDomain == true &&
            !(("withCredentials" in xhr) || (rOptions && "withCredentials" in rOptions && rOptions.withCredentials == true)) &&
            typeof XDomainRequest != "undefined") {

            // handle IE8/IE9 with anonymous authentication
            xhr = new XDomainRequest();

            // fix for jQuery.ajax() callback is expecting some methods and props are defined
            // PP 12/05/2012 jQuery 1.4.4 fix
            xhr.getResponseHeader = function () {
                return null;
            }

            xhr.onload = function () {
                xhr.readyState = 4;
                xhr.status = 200;
                xhr.statusText = "success";
                xhr.getAllResponseHeaders = function () {
                };
                xhr.onreadystatechange();
            };

            xhr.onerror = function () {
                xhr.readyState = 4;
                xhr.status = 0;
                xhr.statusText = "error";
                xhr.getAllResponseHeaders = function () {
                };
                xhr.onreadystatechange();
            };

            xhr.ontimeout = function () {
                xhr.readyState = 4;
                xhr.status = 0;
                xhr.statusText = "timeout";
                xhr.getAllResponseHeaders = function () {
                };
                xhr.onreadystatechange();
            };

            // keep this callback because otherwise XDomainRequest is aborted
            // it's a bug in XDomainRequest
            xhr.onprogress = function () {
            };
        }

        return xhr;
    })(requestOptions);

    var xhrFields;
    // when credentials are specified that will work with Chrome/FireFox/IE10
    if ("withCredentials" in xhrObj &&
        requestOptions && "withCredentials" in requestOptions &&
        requestOptions.withCredentials == true) {

        xhrFields = {
            withCredentials: true
        };
    }

    var beforeSend = function (jqXHR, options) {
        if (requestOptions) {

            // some jQuery versions are not aware about xhrFields
            if (xhrFields && xhrFields.withCredentials && xhrFields.withCredentials == true) {
                xhrObj.withCredentials = true;
            }

            if ($.isFunction(requestOptions.beforeSend)) {
                jqXHR.setRequestHeader("Content-Type", contentType);
                requestOptions.beforeSend.call(this, jqXHR, options, requestOptions);
            }
        }
    }

    $.ajax({
        crossDomain: isCrossDomain == true,
        isLocal: false,
        url: url,
        contentType: contentType,
        data: data,
        type: method,
        dataType: 'text',
        xhrFields: xhrFields,
        beforeSend: beforeSend,
        xhr: function () {
            return xhrObj;
        },
        success: function (responce, textStatus, jqXHR) {
            deferred.resolve(responce);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            deferred.reject(errorThrown);
        }
    });

    return deferred.promise();
};

// adjust jquery.offset for zoom in IE10
// e: jquery object/element
// xy: optional precalculated e.offset or existing position/point with members left/top
$.ig.util.offset = function (e, xy) {
	xy = xy || e.offset();
	e = e ? e[0].ownerDocument : document;
	e = e ? e.documentElement : null;
	var z = e ? e.msContentZoomFactor : null;
	if (z && z > 1) {
		xy.left += e.scrollLeft - window.pageXOffset;
		xy.top += e.scrollTop - window.pageYOffset;
	}
	return xy;
};

// Synchronize width/height of widget with its chart/dv controller
// elem - jquery object which represents widget.element
// prop - string "width" or "height".
//   Notes: If it is missing, then a call from destroy is assumed and object/timer is deleted.
//   A widget must call that method within destroy passing only 1st this.element parameter.
// val - new value for width or height. It can be any html unit or number: 200, "200", "200px", "50%", "10cm", etc.
//   Note: if widget was created without explicit width/height and relies on size of target-html element, then null can be used.
//   In this case if html element was hidden on start, then that method catches first rendering, sets chart.width/height(values) and notifies resized.
// chart - reference to xam/chart object which controls widgit
// notifyResized - name of method which should be called when widget was resized
//
// Example for codes within create():
//   if (this.options.width)
//       $.ig.util.setSize(this.element, "width", this.options.width, this._chart, "notifyResized");
// Example for codes within create() when no width or height is specified (support for initially hidden element):
//   if (!this.options.width && !this.options.width)
//       $.ig.util.setSize(this.element, "width", null, this._chart, "notifyResized");
// Example for codes within _setOption(key, val):
//   if (key === "width" || key === "height")
//       $.ig.util.setSize(this.element, key, val, this._chart, "notifyResized");
// Example for codes within destroy():
//   $.ig.util.setSize(this.element);
$.ig.util.setSize = function (elem, prop, val, chart, notifyResized) {
	if (!elem || !elem[0]) {
		return;
	}
	var timer, px,
		obj = elem[0]._w_s_f = elem[0]._w_s_f || {},
		// width/height flags which trigger timer and adjustments of width/height on ticks
		perc = obj.perc;
	if (!prop) {
		if (obj.tickID) {
			obj.onTick(true);
		}
		delete obj.elem;
		delete obj.chart;
		elem[0]._w_s_f = null;
		return;
	}
	if (!val) {
		val = elem[prop]();
	}
	if (perc && perc.indexOf(prop) >= 0) {
		perc = perc.replace(prop, "");
	}
	if (val) {
		elem[prop](val);
		if (typeof val !== "number") {
			// possible cases to process:
			// if(##===##px) then use same logic as for number
			// ##% - start timer
			// ##xxx - use elem.offsetWidth/Height for _xam.width/height
			// if elem.offsetWidth or elem.offsetHeight is 0, then start timer
			val = val.toString();
			if (val.indexOf("%") > 0) {
				perc = perc || "";
				if (perc.indexOf(prop) < 0) {
					// start timer
					timer = perc += prop;
				}
			}
			px = val.indexOf("px");
			if (px > 0) {
				val = val.substring(0, px);
			}
			px = parseFloat(val);
			// use same logic as for number
			if (px.toString() === val) {
				val = px;
			} else {
				val = elem[prop]();
				if (!val) {
					// width/height flags which trigger timer and adjustments of width/height on ticks
					obj.wait = obj.wait || "";
					if (obj.wait.indexOf(prop) < 0) {
						obj.wait += prop;
					}
					// start timer
					timer = prop;
				}
			}
		}
		obj.perc = perc;
		if (val && chart) {
			if (chart[prop]) {
				chart[prop](val);
			}
			if (notifyResized) {
				chart[notifyResized]();
			}
		}
	}
	if (!timer && !elem[0].offsetWidth) {
		timer = obj.wait = "width";
	}
	if (timer) {
		obj.elem = elem;
		obj.chart = chart;
		obj.notify = notifyResized;
		// stop: stop timer: coming from destroy
		obj.onTick = obj.onTick || function (stop) {
			// request to call notifyResized
			var resize,
				obj = this,
				chart = obj.chart,
				elem = obj.elem,
				perc = obj.perc || "",
				wait = obj.wait || "",
				stop = stop === true || (!perc && !wait),
				width = stop || elem[0].offsetWidth,
				height = stop || elem[0].offsetHeight,
				oldWidth = obj.oldWidth || 0,
				oldHeight = obj.oldHeight || 0;
			if (stop) {
				if (obj.tickID) {
					clearInterval(obj.tickID);
				}
				delete obj.tickID;
				return;
			}
			if (!obj.tickID && (!width || !height || perc)) {
				obj.tickID = setInterval(function () {
					obj.onTick();
				}, 200);
			}
			if (!width || !height) {
				return;
			}
			// width/height was adjusted
			delete obj.wait;
			// current instant width/height
			obj.oldWidth = width;
			obj.oldHeight = height;
			if (!chart) {
				return;
			}
			if (chart.width && ((perc.indexOf("width") >= 0 && width !== oldWidth) || wait.indexOf("width") >= 0)) {
				chart.width(resize = width);
			}
			if (chart.height && ((perc.indexOf("height") >= 0 && height !== oldHeight) || wait.indexOf("height") >= 0)) {
				chart.height(resize = height);
			}
			if (resize && obj.notify) {
				chart[obj.notify]();
			}
		};
		obj.onTick();
	}
};
// M.H. 5 Mar 2013 Fix for bug #134982: When you instantiate dataSource object and there isn't reference to jQueryUI js error is thrown.
if ($.Widget) {
    // M.H. 1 Mar 2013 Fix for bug #134534: Updating the jQuery`s version breaks most of the samples in the new samples browser
    // In jquery-ui 1.9.2+ it is used only full name - we fix this breaking change as adding also widgetName(it is used in older versions)
    (function (createWidget) {
	    $.Widget.prototype._createWidget = function (options, element) {
		    var el = $(element || this.defaultElement || this)[0];
		    if (el !== this) {
			    $.data(el, this.widgetName, this);
		    }
		    return createWidget.apply(this, arguments);
	    };
    })($.Widget.prototype._createWidget);
}
/*!@license
 * Infragistics.Web.ClientUI Data Binding Plugin 13.1.20131.2039
 *
 * Copyright (c) 2011-2013 Infragistics Inc.
 * 
 * igDataSource provides the following functionality:
 * - read and parse local XML , JSON , and HTML data
 * - normalize / transform the above data according to a schema
 * - data type conversion (date, string, number, etc.)
 * - define relationships between two and more flat data sources - with primary/foreign keys, etc
 * - build URL params for requests that get remote data 
 * - in case of scenarios such as paging, understand and prase the response - expect that it's in a predefined format that can be additionall configured by the developer
 * - get data from WCF services  
 * - ability to combine local with remote functionality  
 * - queueing AJAX requests
 *	paging,filtering (searching), and sorting functionality that are control-independent are also implemented here
 *	the idea of this code is to serve as a data-source abstraction layer (client-side data source control)
 *	that may well be used by all other client-side controls , such as dropdown, tree, menu, etc. 
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.4.js
 *	infragistics.util.js
 *
 */
/*global jQuery, Class, window, ActiveXObject, DOMParser, XPathResult, define */
(function ($) {

	$.ig = $.ig || {};
	/* A.T. 7 Feb 2011 - Usability review changes */
	/*
	$.ig.Constants = $.ig.Constants || {};
	
	$.ig.Constants.SortDirection = {
	None: 'none',
	Ascending: 'asc',
	Descending: 'desc'
	};

	$.ig.Constants.OpType = {
	Remote: 0,
	Local: 1
	};

	$.ig.Constants.SortMode = {
	Single: 0,
	Multi: 1
	};
	
	$.ig.Constants.FilterCondition = {
	StartsWith: "StartsWith",
	EndsWith: "EndsWith",
	Contains: "Contains",
	DoesNotContain: "DoesNotContain",
	Equals: "Equals",
	DoesNotEqual: "DoesNotEqual",
	GreaterThan: "GreaterThan",
	LessThan: "LessThan",
	GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
	LessThanOrEqualTo: "LessThanOrEqualTo",
	True: "True",
	False: "False",
	After: "After",
	Before: "Before",
	Today: "Today",
	Yesterday: "Yesterday",
	ThisMonth: "ThisMonth",
	LastMonth: "LastMonth",
	NextMonth: "NextMonth",
	ThisYear: "ThisYear",
	LastYear: "LastYear",
	NextYear: "NextYear",
	On: "On",
	NotOn: "NotOn",
	Null: "Null",
	NotNull: "NotNull",
	Empty: "Empty",
	NotEmpty: "NotEmpty"
	//ThisQuarter: "ThisQuarter",
	//LastQuarter: "LastQuarter",
	//NextQuarter: "NextQuarter"
	};

	$.ig.Constants.DataSourceType = {
	Function : 0,
	Array : 1,
	HtmlTableString: 2, // the data source could be either the id of the element, a string starting with <table>, or a DOM object that is of nodeType== "TABLE" 
	HtmlTableId: 3,
	HtmlTableDOM: 4,
	JSON : 5, // json data, could be string or object 
	XML : 6, // xml data - could be string or object 
	Invalid: 7, // when data source is se to a boolean, number or date
	Unknown: 8, // when data source is a string or object 
	RemoteUrl: 9,
	Empty: 10
	};
	*/
	$.ig.DataSource = $.ig.DataSource || Class.extend({
		/* The Infragistics Data Source client-side component is implemented as a class, and has support for paging, sorting, and filtering
		it supports binding to various types of data sources including JSON, XML, HTML Table, WCF/REST services, JSONP, JSONP and OData combined, etc. 
		*/
		settings: {
			/* type="string" setting this is only necessary when the data source is set to a table in string format. we need to create an invisible dummy data container in the body and append the table data to it */
			id: 'ds',
			/* type="string" this is the property in the dataView where actual resulting records will be put. (So the dataView will not be array but an object if this is defined), after the potential data source transformation */
			outputResultsName: null,
			/* type="function" callback function to call when data binding is complete */
			callback: null,
			/* type="object" object on which to invoke the callback function */
			callee: null,
			/* type="array" this is the normalized (transformed) resulting data, after it's fetched from the data source */
			data: [],
			/* type="object" this is the source of data - non normalized. Can be an array, can be reference to some JSON object, can be a DOM element for a HTML TABLE, or a function */
			dataSource: null,
			//dataSourceUrl: null, // we don't even need the dataSourceUrl, it can be set in the dataSource
			/* type="object" client-side dataBinding event. Can be a string pointing to a function name, or an object pointing to a function */
			dataBinding: null,
			/* type="object" client-side dataBound event. Can be a string pointing to a function name, or an object pointing to a function */
			dataBound: null,
			/* type="string" specifies the HTTP verb to be used to issue the request */
			requestType: 'GET',
			/* type="json|xml|unknown|array|function|htmlTableString|htmlTableId|htmlTableDom|invalid|remoteUrl|empty" Type of the data source 
			json type="string" Specifies that the data source is an already evaluated JSON (JavaScript object/array) or a string that can be evaluated to JSON
			xml type="string" Specifies that the data source is a XML Document object or a string that can be evaluated to XML
			unknown type="string" Specifies that the data source is of unknown type. In that case it will be analyzed and automatically detected if possible
			array type="string" Specifies that the data source is a simple array of objects.
			function type="string" Specifies that the data source points to a function. During data binding the function will be called and the result will be assumed to be an array of objects
			htmlTableString type="string" Specifies that the data source points to a string that represents a HTML table
			htmlTableId type="string" Specifies that the data source points to an ID of a HTML Table element that's loaded on the page
			htmlTableDom type="string" The data source points to a DOM object that is of TABLE type
			invalid type="string" Set whenever data source is analyzed (in case its type is unknown) and the type cannot be detected
			remoteUrl type="string" Specifies that the data source points to a remote URL, from which data will be retrieved using an AJAX call ($.ajax)
			htmlListDom type="string" The data source points to a DOM object that is of UL/OL type
			empty type="string"
			*/
			type: "unknown",
			/* type="object" a schema object that defines which fields from the data to bind to */
			schema: null,
			/* type="string" the unique field identifier */
			primaryKey: null,
			/* type="string" property in the response which specifies the total number of records in the backend (this is needed for paging) */
			responseTotalRecCountKey: null,
			/* type="string" property in the response which specifies where the data records array will be held (if the response is wrapped) */
			responseDataKey: null,
			/* 
			type="json|xml|html|script|jsonp|text" Response type when a URL is set as the data source. See http://api.jquery.com/jQuery.ajax/ => dataType 
			json type="string"
			xml type="string"
			html type="string"
			script type="string"
			jsonp type="string"
			text type="string"
			*/
			responseDataType: null,
			/* type="string" content type of the response. See http://api.jquery.com/jQuery.ajax/ => contentType */
			responseContentType: null,
			/* type="bool" if set to false will disable transformations on schema, even if it is defined locally in the javascript code */
			localSchemaTransform: true,
			/* type="object" event that is fired before URL parameters are encoded. Can point to a function name or the function object itself */
			urlParamsEncoding: null,
			/* type="object" event that is fired after URL parameters are encoded (When a remote request is done). Can point to a function name or the function object itself */
			urlParamsEncoded: null,
			/* Settings related to built-in paging functionality */
			paging: {
				/* type="bool" Paging is not enabled by default */
				enabled: false,
				/* type="remote|local" Type for the paging operation 
				local type="string" Data is paged client-side.
				remote type="string" A remote request is done and URL params encoded 
				*/
				type: "remote",
				/* type="number" number of records on each page */
				pageSize: 5,
				/* type="string" denotes the name of the encoded URL parameter that will state what is the currently requested page size */
				pageSizeUrlKey: null,
				/* type="string" denotes the name of the encoded URL parameter that will state what is the currently requested page index */
				pageIndexUrlKey: null,
				/* type="number" current page index */
				pageIndex: 0,
				/* type="bool" Whether when a new page of data is requested we should append the new data to the existing data */
				appendPage: false
			},
			/* Settings related to built-in filtering functionality */
			filtering: {
				/* type="remote|local" Filtering type.
				remote type="string" Parameters will be encoded and it's up to the backend to interpred them from the response.
				local type="string" The data will be filtered automatically client-side
				*/
				type: "remote",
				/* type="bool" enables or disables case sensitive filtering on the data. Works only for local filtering */
				caseSensitive: false,
				/* type="bool" if the type of paging/sorting/filtering is local and applyToAllData is true, filtering will be performed on the whole data source that's present locally, otherwise only on the current dataView. if type is remote, this setting doesn't have any effect. */
				applyToAllData: true,
				/* type="object" Can point to either a string or a function object. The parameters that are passed are 1) the data array to be filtered, 2) the filtering expression definitions. Should return an array of the filtered data */
				customFunc: null,
				/* type="string" url key that will be encoded in the request if remote filtering is performed. Default value of null implies OData-style URL encoding. Please see http://www.odata.org/developers/protocols/uri-conventions for details */
				filterExprUrlKey: null,
				/* type="string" url key that will be encoded in the request, specifying if the filtering logic will be AND or OR */
				filterLogicUrlKey: "filterLogic",
				/* type="array" a list of expression objects, containing the following key-value pairs: fieldName, expression (search string), condition , and logic (AND/OR) */
				expressions: [],
				/* type="string" an "SQL-like' encoded expressions string. Takes precedence over "expressions". Example: col2 > 100; col2 LIKE %test% */
				exprString: ''
			},
			/* Settings related to built-in sorting functionality */
			sorting: {
				/* type="none|asc|desc" Sorting direction 
				none type="string"
				asc type="string"
				desc type="string"
				*/
				defaultDirection: "none",
				/* type="array" when defaultDirection is different than "none", and defaultFields is specified, data will be initially sorted accordingly, directly after dataBind() */
				defaultFields: [],
				/* type="bool" If the sorting type is local and applyToAllData is true, sorting will be performed on the whole data source that's present locally, otherwise only on the current dataView. If sorting type is remote, this setting doesn't have any effect. */
				applyToAllData: true,
				/* type="object"  Custom sorting function that can point to either a string or a function object. When the function is called, the following arguments are passed: data array, fields (array of field definitions) , direction ("asc" or "desc"). The function should return a sorted data array */
				customFunc: null,
				/* type="object" Custom comparison sorting function. Accepts two values and returns a value 0 indicating that values are equal, 1 indicating that val1 > val2 and -1 indicating that val1 < val2 */
				compareFunc: null,
				/* type="object" Custom data value conversion function. Accepts a value and should return the converted value */
				customConvertFunc: null,
				/* type="remote|local" Specifies whether sorting will be applied locally or remotely (via a remote request) 
				remote type="string"
				local type="string"
				*/
				type: "remote",
				/* type="bool" Specifies if sorting will be case sensitive or not. Works only for local sorting */
				caseSensitive: false,
				/* type="string" URL param name which specifies how sorting expressions will be encoded in the URL. Default is null and uses OData conventions */
				sortUrlKey: null,
				/* type="string" URL param value for ascending type of sorting. Default is null and uses OData conventions */
				sortUrlAscValueKey: null,
				/* type="string" URL param value for descending type of sorting. Default is null and uses OData conventions */
				sortUrlDescValueKey: null,
				/* type="array" a list of sorting expressions , consisting of the following keys (and their respective values): fieldName and direction */
				expressions: [],
				/* type="string" takes precedence over experssions, an "SQL-like" encoded expressions string  : see sort(). Example col2 > 100 ORDER BY asc */
				exprString: ''
			},
			// M.H. add summaries support
			/* Settings related to built-in summaries functionality */
			summaries: {
				/* type="remote|local" Specifies whether summaries will be applied locally or remotely (via a remote request) 
				remote type="string" A remote request is done and URL params encoded
				local type="string" Data is paged client-side.
				*/
				type: "remote",
				/* type="string" Url key for retrieving data from response - used only when summaries are remote*/
				summaryExprUrlKey: "summaries",
				/* type="string" Key for retrieving data from the summaries response - used only when summaries are remote*/
				summariesResponseKey: "summaries",
				/* type="priortofilteringandpaging|afterfilteringbeforepaging|afterfilteringandpaging" Determines when the summary values are calculated  
				priortofilteringandpaging type="string"
				afterfilteringbeforepaging type="string"
				afterfilteringandpaging type="string"
				*/
				summaryExecution: 'afterfilteringandpaging',
				/* type="array" a list of column settings that specifies custom summaries options per column basis */
				columnSettings: [
				/* {key: '', summaryOperands: []}*/
				]
			},
			/* type="array" A list of field definitions specifying the schema of the data source. 
			Field objects description: {fieldName, [fieldDataType], [fieldXPath]}
			*/
			fields: [],
			/* type="bool" if true, will serialize the transaction log of updated values - if any - whenever commit is performed via a remote request. */
			serializeTransactionLog: true,
			/* type="bool" if set to true, the following behavior will take place:
			if a new row is added, and then deleted, there will be no transaction added to the log 
			if an edit is made to a row or cell, then the value is brought back to its original value, the transaction should be removed
			*/
			aggregateTransactions: false,
			/* type="bool" if auto commit is true, data will be automatically commited to the data source, once a value or a batch of values are updated via saveChanges() */
			autoCommit: false,
			/* type="string" specifies an update remote URL, to which an AJAX request will be made as soon as saveChages() is called. */
			updateUrl: null,
			/* type="function" A function to call when row is added.
			Function takes first argument item and second argument dataSource.
			Use item.row to obtain reference to the added row.
			Use item.rowId to get the row ID.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowAdded: null,
			/* type="function" A function to call when row is updated (edited). 
			Function takes first argument item and second argument dataSource.
			Use item.rowIndex to get the row index.
			Use item.newRow to obtain reference to the updated row.
			Use item.oldRow to obtain reference to the row that was updated.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowUpdated: null,
			/* type="function" a function to call when row is inserted.
			Function takes first argument item and second argument dataSource.
			Use item.row to obtain reference to the inserted row.
			Use item.rowId to get the row ID.
			Use item.rowIndex to get the row index.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowInserted: null,
			/* type="function" a function to call when row is deleted.
			Use item.row to obtain reference to the deleted row.
			Use item.rowId to get the row ID.
			Use item.rowIndex to get the row index.
			Use dataSource to obtain reference to $.ig.DataSource. */
			rowDeleted: null
		},
		init: function (options) {
			var tempSource, tempCallee, arrayAlready = false, metadata;
			// merge defaults with passed-in values 
			if (options) {
				tempSource = options.dataSource;
				if (tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
					// L.A. 28 August 2012 Fixing bug #119626 When the hierarchical grid is bound to remote data (without load on demand),
					// expanding a root grid row causes an error and no child layouts are shown
					if (($.type(tempSource) === "object") && options.responseDataKey && options.type !== "json") {
						// M.H. 14 Sep 2012 Fix for bug #121209: we should preserve metadata
						metadata = tempSource.Metadata;
						options.dataSource = $.ig.findPath(tempSource, options.responseDataKey);
						if (metadata && options.dataSource.Metadata === undefined) {
							options.dataSource.Metadata =  metadata;
						}
						this.settings.type = "array";
						arrayAlready = true;
					} else {
						options.dataSource = null;
					}
				}
				// M.H. 12 Nov 2012 Fix for bug #122201
				if (options.callee) {
					tempCallee = options.callee;
					options.callee = null;
				}
				this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
				if (!arrayAlready && tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
					options.dataSource = tempSource;
					this.settings.dataSource = tempSource;
				}
				// M.H. 12 Nov 2012 Fix for bug #122201
				if (tempCallee) {
					this.settings.callee = tempCallee;
					tempCallee = null;
				}
			}
			// initialize local vars
			//this._pageIndex = 0;
			this.settings.paging.pageIndex = 0;
			this._isBound = false;
			this._url = null;
			this._dsCallback = null;
			this._data = []; // _data may be different than _dataView only when the whole data source is present locally, but we are performing sorting or filtering or paging on it, 
			this._dataView = []; // therefore the dataView will contain only a subset of the *local* data. 
			// Same applies when data is parsed from a table. With remote fetching, everything is in _data
			if (this.settings.type === "unknown") {
				this._runtimeType = this.analyzeDataSource();
			} else {
				this._runtimeType = this.settings.type;
			}

			this._parser = new $.ig.TypeParser();
			this._schema = null;
			// used only when doing remote paging, sorting and filtering, 
			// to determine the request type in order to know whether to parse metadata fields
			// such as total record count - from the response
			this._isSortingReq = false;
			this._isFilteringReq = false;
			this._isPagingReq = false;
			this._isSummariesReq = false;
			this._dataSummaries = [];
			this._recCount = 0;
			this._hasCount = false;
			this._initSchema();
			this._filteredDataView = [];
			this._transactionLog = []; // transactions support & batch updating 
			this._accumulatedTransactionLog = []; // this is the transaction log that will be serialized and posted to the server, if the option "serializeTransactionLog" is true (MVC scenarios!)
			return this;
		},
		_initSchema: function () {
			// performance optimization
			//if (this.settings.schema && this.settings.localSchemaTransform) {
			if (this.settings.schema) {
				if (this.settings.schema instanceof $.ig.DataSchema) {
					this._schema = this.settings.schema;
				} else {
					// two cases: the developer has explicitly set a type, and 2) he didn't - which means we need to analyze the data source at runtime 
					if (this.settings.type !== "unknown") {
						this._schema = new $.ig.DataSchema(this.settings.type, this.settings.schema);
					} else {
						this._schema = new $.ig.DataSchema(this._runtimeType, this.settings.schema);
					}
					this._schema._pk = this.settings.primaryKey;
				}
			}
		},
		fields: function (fields) {
			/* Sets a list of fields to the data source. If no parameter is specified, just returns the already existing list of fields
			paramType="object" optional="true" a field has the following format: {key: 'fieldKey', dataType: 'string/number/date' }
			returnType="object" if no parameters are specified, returns the existing list of fields
			*/
			if (fields === undefined || fields === null) {
				return this.settings.fields;
			}
			this.settings.fields = fields;
			return this;
		},
		analyzeDataSource: function () {
			/* analyzes the dataSource setting to automatically determine the type of the data source. Returns the data source type. See settings.type 
			returnType="string"
			*/
			var ds = this.dataSource(), dc;
			if (ds === undefined || ds === null) {
				return "empty";
			}
			if ($.type(ds) === "function") {
				// function
				return "function";
			}
			if ($.type(ds) === "array") {
				// string, assume JSON by default and eval it
				return "array";
			}
			if ($.type(ds) === "number" || $.type(ds) === "boolean" || $.type(ds) === "date") {
				// data source is either boolean, number date, etc. 
				return "invalid";
			}
			if ($.type(ds) === "string") { //string or object
				ds = $.trim(ds);
				if (ds.startsWith("/")) {
					return "remoteUrl";
				}
				// already passed through this code, we don't need to do the same thing again 
				if ($('#' + this.settings.id).length > 0 && ds.toLowerCase().startsWith("<table")) {
					return "htmlTableString";
				}
				// was: $(ds.toLowerCase())

				if (ds.toLowerCase().startsWith("<table")) {
					// store the contents in this._data:
					// for that purpose we create a dummy div "data container", append it to the body, set display none and visibility hidden, and append our table there.
					dc = "<div id='" + this.settings.id + "' style='display:none;visibility:hidden;'>" + ds + "</div>";
					//this._data = $(dc).appendTo($("body"));
					$(dc).appendTo($("body"));
					return "htmlTableString";
				}
				if (!ds.startsWith("[") && !ds.startsWith("{") && !ds.startsWith("<")) { // object, array or xml
					// try to see if it's not a table:
					if (!ds.startsWith("http://") && $('#' + ds).length > 0 && $('#' + ds)[0].nodeName.toLowerCase() === "table") {
						return "htmlTableId";
					}
					this._url = ds;
					return "remoteUrl";
				}
				return "unknown";
			}
			if (ds.nodeName && ds.nodeName.toLowerCase() === "table") {
				return "htmlTableDom";
			}
			if (ds.nodeName && (ds.nodeName.toLowerCase() === "ul" || ds.nodeName.toLowerCase() === "ol")) {
				return "htmlListDom";
			}
			return "unknown";
		},
		dataView: function () {
			/* returns the current normalized/transformed and paged/filtered/sorted data, i.e. the dataView
			returnType="object"
			*/
			return this._dataView;
		},
		data: function () {
			/* returns all of the bound data, without taking into account local paging, sorting, filtering, etc. 
			returnType="object"
			*/
			return this._data;
		},
		transformedData: function (transformedExecution) {
			/*	returns transformed data according to transformed execution:
			1. Before paging and filtering
			2. After filtering before paging
			3. After filtering and paging

			returnType="object"
			*/
			switch (transformedExecution) {
			case 'priortofilteringandpaging':
				this._transformedData = this._data;
				break;
			// this is populated in populateDataSummaries method 
			case 'afterfilteringbeforepaging':
				break;
			case 'afterfilteringandpaging':
				this._transformedData = this.dataView();
				break;
			default:
				this._transformedData = this._dataView;
				break;
			}
			return this._transformedData;
		},
		dataSummaries: function () {
			/*	returns summaries data
			 * returnType="object"
			*/
			var s = this.settings.summaries, type = s.type;
			if (type === 'local') {
				this._dataSummaries = this.transformedData(s.summaryExecution);
			}
			return this._dataSummaries;
		},
		schema: function (s, t) {
			/* Gets/sets the schema definition. 
			paramType="object" optional="true" a schema object 
			paramType="string" optional="true" type of the data source. See settings.type
			*/
			// data source schema definition 
			if (s === undefined || s === null) {
				return this._schema;
			}
			if (s instanceof $.ig.DataSchema) {
				this._schema = s;
			} else {
				if (t === null || t === undefined) {
					this._schema = new $.ig.DataSchema(s.type, s);
				} else {
					this._schema = new $.ig.DataSchema(t, s);
				}
				this._schema._pk = this.settings.primaryKey;
			}
			return this;
		},
		pagingSettings: function (p) {
			/* gets/sets a list of paging settings 
			paramType="object" optional="true" object holding all paging settings. See settings.paging
			*/
			if (p === undefined || p === null) {
				return this.settings.paging;
			}
			this.settings.paging = p;
			return this;
		},
		filterSettings: function (f) {
			/* gets/sets a list of filtering settings 
			paramType="object" optional="true" object holding all filtering settings. See settings.filtering
			*/
			if (f === undefined || f === null) {
				return this.settings.filtering;
			}
			this.settings.filtering = f;
			return this;
		},
		sortSettings: function (s) {
			/* gets/sets a list of paging settings 
			paramType="object" optional="true" object holding all sorting settings. See settings.sorting
			*/
			if (s === undefined || s === null) {
				return this.settings.sorting;
			}
			this.settings.sorting = s;
			return this;
		},
		summariesSettings: function (s) {
			/* Gets/sets a list of summaries settings. 
			paramType="object" optional="true" object holding all summaries settings. See settings.summaries
			*/
			if (s === undefined || s === null) {
				return this.settings.summaries;
			}
			this.settings.summaries = s;
			return this;
		},
		dataSource: function (ds) {
			/* gets/sets the dataSource setting. If no parameter is specified, returns settings.dataSource
			paramType="object" optional="true"
			returnType="object"
			*/
			if (ds === undefined || ds === null) {
				return this.settings.dataSource;
			}
			this.settings.dataSource = ds;
			this.analyzeDataSource();
			return this;
		},
		type: function (t) {
			/* gets/sets the type of the dataSource. If no parameter is specified, returns settings.type
			paramType="json|xml|unknown|array|function|htmlTableString|htmlTableId|htmlTableDom|invalid|remoteUrl|empty" optional="true"
			returnType="json|xml|unknown|array|function|htmlTableString|htmlTableId|htmlTableDom|invalid|remoteUrl|empty"
			*/
			if (t === undefined || t === null) {
				//return this.settings.dataSourceType;
				return this._runtimeType;
			}
			this.settings.type = t;
			return this;
		},
		findRecordByKey: function (key, ds) {
			/* returns a record by a specified key (requires that primaryKey is set in the settings)
			paramType="string" Primary key of the record
			returnType="object" a JavaScript object specifying the found record, or null if no record is found
			*/
			//A.T 2 Feb 2011 for now i am going to traverse all records until the one specified by key is found. 
			// additional great optimization is to index all records so that they are in the form <key>: { <javascript object> } 
			var i;
			if (!ds) {
				for (i = 0; i < this._data.length; i++) {
					if (this._data[i][this.settings.primaryKey] === key) {
						return this._data[i];
					}
				}
			} else {
				for (i = 0; i < ds.length; i++) {
					if (ds[i][this.settings.primaryKey] === key) {
						return ds[i];
					}
				}
			}
			return null;
		},
		removeRecordByKey: function (key, origDs) {
			/* removes a specific record denoted by the primaryKey of the passed key parameter from the data source 
			paramType="string" primary key of the record 
			*/
			var i, len, data, count = 0,
				all = [this._data, this._dataView, this._filteredData, origDs],
				prime = this.settings.primaryKey;
			while (count < 4) {
				data = all[count++];
				len = data ? data.length : 0;
				for (i = 0; i < len; i++) {
					if (data[i] && data[i][prime] === key) {
						//A.T. 8 March 2012 - Fix for bug #104244 
						//data.remove(i);
						$.ig.removeFromArray(data, i);
						break;
					}
				}
				// if next data is same, then skip it
				if (data === all[count]) {
					count++;
				}
			}
		},
		removeRecordByIndex: function (index, origDs) {
			/* Removes a record from the data source at specific index.
			paramType="number" index of record 
			*/
			var i, len, record, data = this._data, view = this._dataView, filter = this._filteredData;
			if (!data || isNaN(index) || index < 0 || index >= data.length) {
				return;
			}
			record = data[index];
			//A.T. 8 March 2012 - Fix for bug #104244 
			//data.remove(index);
			$.ig.removeFromArray(data, index);
			if (origDs) {
				$.ig.removeFromArray(origDs, index);
			}
			// if _dataView equals to _data, then skip it
			data = (data === view) ? filter : view;
			// if record is null, then it is not possible to find it in dataView
			while (record) {
				len = data ? data.length : 0;
				for (i = 0; i < len; i++) {
					if (data[i] === record) {
						//A.T. 8 March 2012 - Fix for bug #104244 
						//data.remove(i);
						$.ig.removeFromArray(data, i);
						break;
					}
				}
				if (data === filter) {
					return;
				}
				data = filter;
			}
		},
		setCellValue: function (rowId, colId, val, autoCommit) {
			/*  sets a cell value for the cell denoted by rowId and colId. Creates a transaction for the update operation and returns it
			paramType="object" the rowId - row key (string) or index (number)
			paramType="object" the column id - column key (string) or index (number)
			paramType="object" The new value 
			paramType="bool" if autoCommit is true, it updates the datasource automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			// create transaction
			var t = this._createCellTransaction(rowId, colId, val);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			return t;
		},
		updateRow: function (rowId, rowObject, autoCommit) {
			/* updates a record in the datasource. Creates a transaction that can be committed / rolled back 
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="object" the record object containing the key/value pairs we want to update. It doesn't have to include key/value pairs for all fields defined in the schema or in the data source (if no schema is defined)
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created  
			*/
			// create transaction
			var t = this._createRowTransaction(rowId, rowObject), oldRow = (this.settings.primaryKey === null) ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = (this.settings.primaryKey === null) ? rowId : $.ig.indexInArray(this._data, oldRow);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			if ($.type(this.settings.rowUpdated) === "function") {
				if (this.settings.callee) {
					this.settings.rowUpdated.apply(this.settings.callee, [{ rowIndex: rowIndex, newRow: rowObject, oldRow: oldRow }, this]);
				} else {
					this.settings.rowUpdated({ rowIndex: rowIndex, newRow: rowObject, oldRow: oldRow }, this);
				}
			}
			return t;
		},
		addRow: function (rowId, rowObject, autoCommit) {
			/* adds a new row to the data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="object" the new record data. 
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			var t = this._createNewRowTransaction(rowId, rowObject);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			if ($.type(this.settings.rowAdded) === "function") {
				if (this.settings.callee) {
					this.settings.rowAdded.apply(this.settings.callee, [{ rowId: rowId, row: rowObject }, this]);
				} else {
					this.settings.rowAdded({ rowId: rowId, row: rowObject }, this);
				}
			}
			return t;
		},
		insertRow: function (rowId, rowObject, rowIndex, autoCommit) {
			/* adds a new row to the data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="object" the new record data. 
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			var t = this._createInsertRowTransaction(rowId, rowObject, rowIndex);
			this._addTransaction(t);
			// commit
			if (autoCommit === true) {
				this.commit(rowId);
			}
			if ($.type(this.settings.rowInserted) === "function") {
				if (this.settings.callee) {
					this.settings.rowInserted.apply(this.settings.callee, [{ rowId: rowId, row: rowObject, rowIndex: rowIndex }, this]);
				} else {
					this.settings.rowInserted({ rowId: rowId, row: rowObject, rowIndex: rowIndex }, this);
				}
			}
			return t;
		},
		deleteRow: function (rowId, autoCommit) {
			/* deletes a row from the data source.
			paramType="object" the record key - primaryKey (string) or index (number)
			paramType="bool" if autoCommit is true, the datasource will be updated automatically and the transaction is still stored in the accumulated transaction log
			returnType="object". The transaction object that was created 
			*/
			var t = this._createDeleteRowTransaction(rowId), row = (this.settings.primaryKey === null) ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = (this.settings.primaryKey === null) ? rowId : $.ig.indexInArray(this._data, row), isNewRow = false, i, j;
			for (i = 0; this.settings.aggregateTransactions && i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].type === "newrow" && this._transactionLog[i].rowId === rowId) {
					isNewRow = true;
					// delete the new row transaction 
					rowId = this._transactionLog[i].rowId;
					this._removeTransactionByTransactionId(this._transactionLog[i].tid);
					// sync the global transaction log !
					//A.T. 23 March fix for #105958
					for (j = 0; j < this._accumulatedTransactionLog.length; j++) {
						if (this._accumulatedTransactionLog[j].rowId === rowId) {
							$.ig.removeFromArray(this._accumulatedTransactionLog, j);
						}
					}
					break;
				}
			}
			//A.T. 17 Jan 2012
			// check if we don't have an "add" transaction already
			if (!(this.settings.aggregateTransactions && isNewRow)) {
				this._addTransaction(t);
				if (autoCommit === true) {
					this.commit(rowId);
				}
				if ($.type(this.settings.rowDeleted) === "function") {
					if (this.settings.callee) {
						this.settings.rowDeleted.apply(this.settings.callee, [{ rowId: rowId, row: row, rowIndex: rowIndex }, this]);
					} else {
						this.settings.rowDeleted({ rowId: rowId, row: row, rowIndex: rowIndex }, this);
					}
				}
			}
		},
		/* Transactions for igTree */
		addNode: function (data) {
			/* adds a new node to the tree data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the transaction data
			*/
			var t = this._createAddNodeTransaction(data);
			this._addTransaction(t);
		},
		removeNode: function (data) {
			/* removes a node from the tree data source. Creates a transaction that can be committed / rolled back 
			paramType="object" the transaction data
			*/
			var t = this._createRemoveNodeTransaction(data);
			this._addTransaction(t);
		},
		/* END Transactions for igTree */
		getDetachedRecord: function (t) {
			/* returns a standalone object (copy) that represents the commited transactions, but detached from the data source 
			paramType="object" a transaction object
			returnType="object" a copy of a record from the data source
			*/
			var o = $.type(this._data[0]) === "array" ? [] : {}, i, originalRec;

			if (this.settings.primaryKey === null) {
				originalRec = this._data[parseInt(t.rowId, 10)];
			} else {
				originalRec = this.findRecordByKey(t.rowId);
			}
			//o = $.extend(true, {}, originalRec);
			if (this._data[0] !== "array") {
				for (i in originalRec) {
					if (originalRec.hasOwnProperty(i)) {
						o[i] = originalRec[i];
					}
				}
			} else {
				for (i = 0; i < originalRec.length; i++) {
					o[i] = originalRec[i];
				}
			}
			if (t.type === 'cell') {
				o[t.col] = t.value;
				return o;
			}
			// merge objects or arrays
			//return $.extend(true, {}, o, t.row);
			if (o !== "array") {
				for (i in t.row) {
					if (t.row.hasOwnProperty(i)) {
						o[i] = t.row[i];
					}
				}
			} else {
				// if it's array, t.row is expected to have the same number of cells (elements) as the original record. It cannot contain partial data only for the updated cells 
				for (i = 0; i < t.row.length; i++) {
					o[i] = t.row[i];
				}
			}
			return o;
		},
		commit: function (id) {
			/* update the data source with every transaction from the log
			paramType="number" optional="true" Id of the transaction to commit. If no id is specified, will commit all transactions to the data source. 
			*/
			// if "id" is defined, commit only the transaction with the specified id
			if (id !== null && id !== undefined) {
				this._commitTransactionsByRowId(id);
			} else {
				// commit all
				// always reverse if we call pop. That's because we may have a row editing first, then row deleting,
				// if we call pop(), it will delete the row first, and then try to edit it, which is wrong. 
				// this is much easier and cleaner compared to implementing Queues 
				this._transactionLog.reverse();
				while (this._transactionLog.length > 0) {
					this._commitTransaction(this._transactionLog.pop());
				}
			}
		},
		rollback: function (id) {
			/* clears the transaction log without updating anything in the data source 
			paramType="number" optional="true" Id of the transaction to rollback. If no id is specified, will rollback all transactions to the data source. 
			*/
			var i;

			if (id !== null && id !== undefined) {
				this._rollbackTransactionsByRowId(id);
			} else {
				// exclude the current transaction log from the accumulated transaction log. 
				// rollback all
				i = this._transactionLog.length;
				while (i-- > 0) {
					this._rollbackTransaction(this._transactionLog[i]);
				}
			}
		},
		pendingTransactions: function () {
			/* returns a list of all transaction objects that are pending to be committed or rolled back to the data source 
			returnType="array"
			*/
			return this._transactionLog;
		},
		allTransactions: function () {
			/* returns a list of all transaction objects that are either pending, or have been committed in the data source. 
			returnType="array"
			*/
			return this._accumulatedTransactionLog;
		},
		_createCellTransaction: function (rowId, colId, val) {
			return { type: 'cell', rowId: rowId, tid: this._generateTransactionId(), col: colId, value: val };
		},
		_createRowTransaction: function (rowId, rowObject) {
			return { type: 'row', tid: this._generateTransactionId(), row: rowObject, rowId: rowId };
		},
		_createNewRowTransaction: function (rowId, rowObject) {
			return { type: 'newrow', tid: this._generateTransactionId(), row: rowObject, rowId: rowId };
		},
		_createInsertRowTransaction: function (rowId, rowObject, rowIndex) {
			return { type: 'insertrow', tid: this._generateTransactionId(), row: rowObject, rowId: rowId, rowIndex: rowIndex };
		},
		_createDeleteRowTransaction: function (rowId) {
			return { type: 'deleterow', tid: this._generateTransactionId(), rowId: rowId };
		},
		/* Transactions for igTree */
		_createAddNodeTransaction: function (data) {
			return { type: 'addnode', tid: this._generateTransactionId(), tdata: data };
		},
		_createRemoveNodeTransaction: function (data) {
			return { type: 'removenode', tid: this._generateTransactionId(), tdata: data };
		},
		/* END Transactions for igTree */
		_addTransaction: function (t) {
			var exists = false, i = 0, prop, globalt, j, dirty = true, k;
			if (t.type === "cell") {
				// check if we don't have an existing transaction and if we do, overwrite it
				for (i = 0; i < this._transactionLog.length; i++) {
					if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].col === t.col) {
						exists = true;
						// add extra check to see if the "new" value isn't the same as the original one, in that case remove the existing transaction
						if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
							// we need to find the data source row corresponding to rowId
							for (j = 0; j < this.dataView().length; j++) {
								if (this.dataView()[j][this.settings.primaryKey] === t.rowId && this.dataView()[j][t.col] === t.value) {
									for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
										if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
											$.ig.removeFromArray(this._accumulatedTransactionLog, k);
										}
									}
									// remove the transaction because the last entered value is the same as the first one
									this._removeTransactionByTransactionId(this._transactionLog[i].tid);
									dirty = false;
								}
							}
						}
						if (dirty) {
							this._transactionLog[i].value = t.value;
							this._syncGlobalTransaction(this._transactionLog[i]);
						}
					}
				}
				// ensure we check the newly added rows as well
				for (j = 0; j < this._transactionLog.length; j++) {
					if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
						// copy the t.row into newrow's row
						if (t.type === "row") {
							this._transactionLog[j].value = t.value;
						} else {
							this._transactionLog[j].row[t.col] = t.value;
						}
						this._syncGlobalTransaction(this._transactionLog[j]);
						// don't add "t"
						return;
					}
				}
			} else if (t.type === "row") {
				for (i = 0; i < this._transactionLog.length; i++) {
					if (this._transactionLog[i].rowId === t.rowId) {
						exists = true;
						if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
							dirty = false;
							for (j = 0; j < this.dataView().length; j++) {
								if (this.dataView()[j][this.settings.primaryKey] === t.rowId) {
									// now verify all values in the row correspond to the original ones
									for (prop in t.row) {
										if (t.row.hasOwnProperty(prop) && t.row[prop] !== this.dataView()[j][prop]) {
											dirty = true;
											break;
										}
									}
									break;
								}
							}
							// ensure we check the newly added rows as well
							for (j = 0, !dirty; j < this._transactionLog.length; j++) {
								if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
									// copy the t.row into newrow's row
									this._transactionLog[j].row = t.row;
									// we need to find and sync the global transaction
									this._syncGlobalTransaction(this._transactionLog[j]);
									// don't add "t"
									return;
								}
							}
						}
						if (dirty) {
							this._transactionLog[i].row = t.row;
							this._syncGlobalTransaction(this._transactionLog[i]);
						} else {
							// remove the transaction because the last entered value is the same as the first one
							for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
								if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
									$.ig.removeFromArray(this._accumulatedTransactionLog, k);
								}
							}
							this._removeTransactionByTransactionId(this._transactionLog[i].tid);
						}
					}
				}
			}
			if (!exists) {
				this._transactionLog.push(t);
				// A.T. 27 Sept. we need this change only for the global transaction log, since it's the one that will go to the server
				// for the local transaction log, we need to keep the Date "as is", because it won't get serialized/deserialized
				globalt = $.extend(true, {}, t);
				// Date fix. We need to encode it using \/Date(ticks)\/
				if (globalt.type === "cell" && $.type(globalt.value) === "date") {
					globalt.value = "\/Date(" + globalt.value.getTime() + ")\/";
				} else if (globalt.type === "row" || globalt.type === "insertrow" || globalt.type === "newrow") {
					for (prop in globalt.row) {
						if (globalt.row.hasOwnProperty(prop) && $.type(globalt.row[prop]) === "date") {
							globalt.row[prop] = "\/Date(" + globalt.row[prop].getTime() + ")\/";
						}
					}
				}
				this._accumulatedTransactionLog.push(globalt);
			}
		},
		_syncGlobalTransaction: function (t) {
			var i, prop;
			if (!t) {
				return;
			}
			if (t.type === "cell") {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
						if ($.type(t.value) === "date") {
							this._accumulatedTransactionLog[i].value = "\/Date(" + t.value.getTime() + ")\/";
						} else {
							this._accumulatedTransactionLog[i].value = t.value;
						}
						break;
					}
				}
			} else if (t.type === "row" || t.type === "insertrow" || t.type === "newrow") {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
						for (prop in t.row) {
							if (t.row.hasOwnProperty(prop)) {
								if ($.type(t.row[prop]) === "date") {
									this._accumulatedTransactionLog[i].row[prop] = "\/Date(" + t.row[prop].getTime() + ")\/";
								} else {
									this._accumulatedTransactionLog[i].row[prop] = t.row[prop];
								}
							}
						}
					}
				}
			}
		},
		_removeTransactionByTransactionId: function (tid, removeFromAll) {
			// removes a transaction by a transaction ID
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].tid === tid) {
					//A.T. 8 March 2012 - Fix for bug #104244 
					//this._transactionLog.remove(i);
					$.ig.removeFromArray(this._transactionLog, i);
					break;
				}
			}
			if (removeFromAll === true) {
				for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
					if (this._accumulatedTransactionLog[i].tid === tid) {
						//A.T. 8 March 2012 - Fix for bug #104244 
						//this._accumulatedTransactionLog.remove(i);
						$.ig.removeFromArray(this._accumulatedTransactionLog, i);
						break;
					}
				}
			}
		},
		_removeTransactionsByRecordId: function (id) {
			// removes all transactions matching a specific row id (index or primary key)
			var i;
			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					//A.T. 8 March 2012 - Fix for bug #104244 
					//this._transactionLog.remove(i);
					$.ig.removeFromArray(this._transactionLog, i);
					break;
				}
			}
		},
		_addRow: function (row, index, origDs) {
			var data, key, count = 0,
				all = [this._data, this._dataView, /*this._filteredData, */origDs],
				rec = origDs ? origDs[0] : null;
			if (rec) {
				for (key in rec) {
					if (rec.hasOwnProperty(key) && !row.hasOwnProperty(key)) {
						row[key] = null;
					}
				}
			}
			while (count < 4) {
				data = all[count++];
				if (data) {
					if (index >= 0 && index < data.length) {
						data.splice(index, 0, row);
					} else {
						data.push(row);
					}
				}
				// if data same, then skip it
				if (data === all[count]) {
					count++;
				}
			}
		},
		_commitTransaction: function (t) {
			// commit, then remove from the transaction log
			var i, prop, rec, origRec, origDs = this.settings.localSchemaTransform ? this._origDs : null;
			if (origDs === this._data) {
				origDs = null;
			}
			if (this.settings.primaryKey === null) {
				rec = this._data[parseInt(t.rowId, 10)];
				if (origDs) {
					origRec = origDs[parseInt(t.rowId, 10)];
				}
			} else {
				rec = this.findRecordByKey(t.rowId);
				if (origDs) {
					origRec = this.findRecordByKey(t.rowId, origDs);
				}
			}

			if (t.type === 'cell') {
				rec[t.col] = t.value;
				if (origRec) {
					origRec[t.col] = t.value;
				}
			} else if (t.type === 'row') {
				if ($.type(t.row) === "array") {
					for (i = 0; i < t.row.length; i++) {
						rec[i] = t.row[i];
						if (origRec) {
							origRec[i] = t.row[i];
						}
					}
				} else {
					for (prop in t.row) {
						if (t.row.hasOwnProperty(prop)) {
							rec[prop] = t.row[prop];
							if (origRec) {
								origRec[prop] = t.row[prop];
							}
						}
					}
				}
			} else if (t.type === 'deleterow') {
				if (this.settings.primaryKey === null) {
					this.removeRecordByIndex(parseInt(t.rowId, 10), origDs);
				} else {
					this.removeRecordByKey(t.rowId, origDs);
				}
			} else if (t.type === 'newrow') {
				this._addRow(t.row, -1, origDs);
			} else if (t.type === 'insertrow') {
				this._addRow(t.row, t.rowIndex, origDs);
			}
			// finally remove from the log, since the transaction is already committed and shouldn't be pending
			this._removeTransactionByTransactionId(t.tid);
		},
		_rollbackTransaction: function (t) {
			this._removeTransactionByTransactionId(t.tid, true);
		},
		_commitTransactionsByRowId: function (id) {
			var i;

			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					this._commitTransaction(this._transactionLog[i]);
				}
			}
		},
		_rollbackTransactionsByRowId: function (id) {
			var i;

			for (i = 0; i < this._transactionLog.length; i++) {
				if (this._transactionLog[i].rowId === id) {
					this._rollbackTransaction(this._transactionLog[i]);
				}
			}
		},
		transactionsAsString: function () {
			/* returns the accumulated transaction log as a string. The purpose of this is to be passed to URLs or used conveniently
			returnType="string"
			*/
			return JSON.stringify(this._accumulatedTransactionLog);
		},
		_generateTransactionId: function () {
			return ((1 + Math.random()) * parseInt('10000', 16)).toString(16).substring(1, 5);
		},
		saveChanges: function () {
			/* posts to the settings.updateUrl using $.ajax, by serializing the changes as url params */
			if (this.settings.updateUrl !== null) {
				// post to the Url using $.ajax, by serializing the changes as url params 
				var me = this;
				$.post(this.settings.updateUrl, { 'ig_transactions': JSON.stringify(this._accumulatedTransactionLog) },
					function (data, textStatus, jqXHR) {
						me._saveChangesSuccess(data, textStatus, jqXHR);
					});
			}
		},
		_saveChangesSuccess: function (data, textStatus, jqXHR) {
			if (data.Success) {
				this.commit();
				this._transactionLog = [];
				this._accumulatedTransactionLog = [];
			}
			var schs = this._saveChangesHandlers, i = schs ? schs.length : 0;
			while (i-- > 0) {
				schs[i](data, textStatus, jqXHR);
			}
		},
		_addChangesSuccessHandler: function (functionDelegate) {
			if (this._saveChangesHandlers === undefined) {
				this._saveChangesHandlers = [];
			}
			this._saveChangesHandlers[this._saveChangesHandlers.length] = functionDelegate;
		},
		_removeChangesSuccessHandler: function (functionDelegate) {
			if (this._saveChangesHandlers !== undefined) {
				var index = $.ig.indexInArray(this._saveChangesHandlers, functionDelegate);
				if (index > -1) {
					this._saveChangesHandlers = this._saveChangesHandlers.slice(0, index).concat(this._saveChangesHandlers.slice(index + 1, this._saveChangesHandlers.length));
				}
			}
		},
		// callback is the function to call when databinding is async (remote)
		// callee is the object on which to call the callback function
		dataBind: function (callback, callee) {
			/* data binds to the current data source  data source
			databinding works using the following workflow:
			1. fire the databinding event
			2. based on the data source type (see analyzeDataSource()), do the following:
			3. if type is HtmlTable, parse the table and set the data and dataView respectively. 
			if the type is Function, call it, apply Paging/Filtering/Sorting, and set this._dataView . If the developer wants to do his own paging, filtering or sorting
			in that case, then he should handle the PageIndexChanging and/or DataFiltering, and/or ColumnSorting client-side events, and cancel them. 
			if no paging/sorting/filtering are enabled, use just this._data to save space
			if the data source is of type RemoteUrl, use jQuery's $.ajax API to trigger a remote request to the service. Use the param() API to encode the URL
			if the data source is invalid, throw an exception 
			if the analyzed runtime data source type , that is, the result of analyzeDataSource(), is Unknown, check if 
			the value of settings.type is set to XML or JSON. If string, eval for JSON, and parse for the XML to build the object ree
			4. now normalize/transform the data, if a schema is supplied. This inplies any additional data type  conversion
			5. next, if OpType is Local, apply paging, sorting, and/or filtering to the data, and store the result in this._dataView
			6. fire the databound event 
				
			paramType="string" optional="true" callback function 
			paramType="object" optional="true" callee object on which the callback will be executed. If none is specified, will assume global execution context 
			*/
			// think about when would this._data be different than null at all? in which scenarios ?  
			var table, tableObj, dsObj, s, p = this.settings, args, ds, resKey, noCancel = true;
			this._transactionLog = [];
			this._accumulatedTransactionLog = [];

			if (!callback) {
				callback = p.callback;
			}

			// fire the data binding event
			args = { cancel: false };

			if ($.isFunction(p.dataBinding)) {
				noCancel = p.dataBinding(this, args);
				if (noCancel === undefined) {
					noCancel = true;
				}
			}
			//A.T. 18 Jan 2011 - Fix for bug #61623 - igDataSource dataBinding handler cannot cancel data binding
			//if (!args.cancel) {
			if (noCancel) {
				if (this.settings.type === "unknown" && (this._runtimeType === null || this._runtimeType === undefined)) {
					this._runtimeType = this.analyzeDataSource();
				} //else if (this.type !== $.ig.Constants.DataSourceType.Unknown) {
				//	this._runtimeType = this.settings.type;
				//}
				switch (this._runtimeType) {
				case "function":
					// determine context and pass parameters 
					this._data = p.dataSource(); // this.dataSource is a function
					if (this.schema()) {
						this._data = this.schema().transform(this._data); // Q: do we store the normalized data in this._data, or in this._dataView ? 
					}
					break;
				case "array":
					if (this.schema() && this.settings.localSchemaTransform) {
						this._data = this.schema().transform(this.dataSource());
						if (this.dataSource().Metadata) {
						    this._metadata = this.dataSource().Metadata;
						    // M.H. 18 Feb 2013 Fix for bug #133286: When the HGrid is bound to remote data, remote summaries are enabled and loadOnDemand is FALSE the summaries for child layouts are not rendered.
						    this.summariesResponse(this.settings.summaries.summariesResponseKey, this.dataSource());
						}
						this._origDs = this.dataSource();
					} else {
						this._data = this.dataSource(); // no schema
					}
					break;
				case "htmlTableDom":
				case "htmlTableId":
				case "htmlTableString":
					//A.T. 10 April Fix for bug #108547 - we shouldn't re-analyze the HTML table and rebind more than once. 
					if (this._tableBound) {
						break;
					}
					//A.T. 18 Jan 2011 - Fix for bug #62123 - igDataSource HTMLTableString binding problem
					this._runtimeType = this.analyzeDataSource();
					if (this._runtimeType === "htmlTableId") {
						tableObj = $('#' + this.dataSource());
						table = this._validateTable(tableObj);
					} else if (this._runtimeType === "htmlTableString") {
						// the analyzeDataSource() call has already done most of the work to parse the string and attach to the DOM for us
						tableObj = $('#' + this.settings.id + ' > table');
						table = this._validateTable(tableObj);
					} else {
						table = this.dataSource();
					}
					if (this.schema() && this.settings.localSchemaTransform) {
						this._data = this.schema().transform(table);
					} else {
						this._data = this.tableToObject(table); // no schema
					}
					this._tableBound = true;
					break;
				case "htmlListDom":
					this._data = this.schema().transform(this.dataSource());
					break;
				case "invalid":
					throw new Error($.ig.DataSourceLocale.locale.invalidDataSource);
					//break;
				case "unknown":
				case "json":
				case "xml":
					if (this.settings.type !== "json" && p.type !== "xml") {
						//throw new Error("Cannot determine the data source type. Please specify if it is JSON or XML data. ");
						throw new Error($.ig.DataSourceLocale.locale.unknownDataSource);
					} else {
						resKey = this.settings.responseDataKey;
						// there are two cases:
						// 1. string which is either JSON objects or XML string
						// 2. object - already parsed, or XML document element
						if ($.type(this.dataSource()) === "string") {
							if (p.type === "json") {
								dsObj = this.stringToJSONObject(this.dataSource());
							} else {
								dsObj = this.stringToXmlObject(this.dataSource());
							}
						} else {
							dsObj = this.dataSource();
						}
						// now check if there is schema defined
						if (this.schema() && this.settings.localSchemaTransform === true) {
							this._data = this.schema().transform(dsObj);
							// reference to the original data source
							if (resKey !== null && resKey !== undefined) {
								this._origDs = $.ig.findPath(dsObj, resKey);
							} else {
								this._origDs = dsObj;
							}
						} else if ((!this.schema() || this.settings.localSchemaTransform === false) && p.type === "json") {
							if (resKey !== null && resKey !== undefined) {
								this._data = this._origDs = $.ig.findPath(dsObj, resKey);
							} else {
								this._data = dsObj;
							}
							// reference to the original data source
							this._origDs = dsObj;
						} else if (!this.schema() && p.type === "xml") {
							// XML: we have an XML document but have no schema associated to it 
							// for future: think about automating this a bit, i.e. even if there is no schema defined, assume a predefined structure and fallback to it
							// when a control like the client grid is bound to the data source, the column definitions automatically translate to a data schema ! 
							// in fact when the igGrid is bound to the igDataSource, and there is no explicit schema defined, we can assume a predefined schema, something like:
							// <row> <cell></cell> ... </row> and so on. The initial schema comes from the column definitions, and 1) => if we cannot find the XPath, fallback
							// to the default schema, or 2) => if no columns are defined, assume the default xml schema again. 
							throw new Error($.ig.DataSourceLocale.locale.errorXmlSourceWithoutSchema);
						}
						// make sure to read the responseTotalRecCountKey no matter if localSchemaTransform = true or false
						this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, dsObj, this);

						if (dsObj.Metadata) {
							this._metadata = dsObj.Metadata;
						}

						this.summariesResponse(this.settings.summaries.summariesResponseKey, dsObj);
					}
					break;
				case "remoteUrl":
					// when the response arrives, we still need to additionally analyze it and apply schema, if it is present
					// Note that the schema may have already been applied directly on the server-side 
					//1. encode the parameters for sorting, paging and filtering 
					this._remoteData(callback, callee);
					break;
				case "empty":
					this._data = [];
					this._dataView = [];
					this._dataSummaries = [];
					break;
				default:
					break;
				}
				// describe the algorithm when dataView should be the same as data and when not
				this._dataView = this._data;
				this._filter = false;
				// apply initial sorting, if set, and if OpType is local.
				s = p.sorting;
				//if (s.type === $.ig.Constants.OpType.Local && s.defaultDirection !== $.ig.Constants.SortDirection.None && this._runtimeType !== $.ig.Constants.DataSourceType.RemoteUrl) {
				// A.T. fix for igGridSorting local sorting
				if (s.type === "local" && this._runtimeType !== "remoteUrl" && s.defaultFields.length > 0) {
					this.sort(s.defaultFields, s.defaultDirection, false);
				}
				// Check if paging is configured, and if so, 
				// if OpType === $.ig.Constants.OpType.Local => apply local paging
				if (p.paging.enabled && p.paging.type === "local" && this._runtimeType !== "remoteUrl") {
					this._page();
					// this is necessary
				}
				ds = this;
				this._populateTransformedData();
				// invoke the callback if present:
				if (this._runtimeType !== "remoteUrl") {
					this._invokeCallback(callee, callback);
				}
				// fire the data bound event 
				if ($.isFunction(p.dataBound) && !args.cancel) {
					p.dataBound(this);
				}
			}
			return this;
		},
		summariesResponse: function (key, dsObj) {
			/* Get summaries calculation data from remote response */
			var rec, resPath, i;

			if (key !== null && key !== '') {
				rec = dsObj;
				resPath = key.split(".");
				if (key.length > 0) {
				    for (i = 0; i < resPath.length; i++) {
				        // M.H. 18 Feb 2013 Fix for bug #133286: When the HGrid is bound to remote data, remote summaries are enabled and loadOnDemand is FALSE the summaries for child layouts are not rendered.
				        if (rec === null || rec === undefined) {
				            break;
				        }
						rec = rec[resPath[i]];
					}
					this._dataSummaries = rec;
				} else {
					this._dataSummaries = dsObj;
				}
				if (this._dataSummaries === undefined || this._dataSummaries === null) {
					this._dataSummaries = [];
				}
			}
		},

		_populateTransformedData: function (data) {
			// M.H. populate summaries data
			// when datasource is local and we want to get summaries when summaryExecution is afterfilteringbeforepaging
			// we need to get filtered data BUT when all filter conditions are cleared then it is not called filter method(in datasource) from filter widget
			// but it is called dataBind and in this case we should not get this._filteredData but this._data
			if (data !== null && data !== undefined) {
				this._transformedData = data;
			} else {
				this._transformedData = this._data;
			}
		},

		_invokeCallback: function (callee, callback) {
			var cbResolved, calleeResolved;

			cbResolved = callback || this.settings.callback;
			calleeResolved = callee || this.settings.callee;

			if (cbResolved) {
				if (calleeResolved) {
					cbResolved.apply(calleeResolved, [true, "", this]);
				} else {
					cbResolved(true, "", this);
				}
			}
		},
		_remoteData: function (callback, callee) {
			var params, url = this.settings.dataSource, dataType = this.settings.responseDataType, contentType = this.settings.responseContentType, options, verb = this.settings.requestType;
			//1. encode URL params
			params = this._encodeUrl();
			if (callback) {
				this._customCallback = callback;
			} else {
				this._customCallback = null;
			}
			this._callee = callee;
			// finally invoke the call to $.ajax. This can be easily "overriden" in an extension of the $.ig.DataSource 
			options = {
				url: url,
				//params: params,
				data: verb === "GET" ? params : JSON.stringify(params),
				type: verb,
				dataType: dataType,
				async: true,
				context: this,
				contentType: contentType,
				cache: false,
				dataFilter: this._dataFilter,
				success: this._successCallback,
				complete: this._completeCallback,
				converters: {
					"text json": function (value) {
						return value;
					}
				},
				error: this._errorCallback
			};
			this._processRequest(options);
		},
		_dataFilter: function (data, type) {
			var ds, schema = this.context.schema(), rawData, t = this.context.settings.type, ver, returnString = false;
			// fall back
			//A.T. 21 Oct. Extra fix for 120718
			if (type === undefined || type === null) {
				if (typeof data === "object" && data && typeof data.charAt !== "function") {
					// L.A. Fixing bug #129413 - [igDataSource] Error is thrown when opening Stock Quotes sample
					if ($.isXMLDoc(data)) {
						type = "xml";
					} else {
						type = "json";
					}
				} else {
					type = "text";
				}
			}
			if (type === "xml") {
				schema._type = "xml";
				ds = this.context._processXmlResponse(data, true, this.context);
			} else if (type === "json") {
				if (schema) {
					schema._type = "json";
				}
				// data may be already a parsed JSON object
				if ($.type(data) === "string") {
					rawData = JSON.parse(data);
				} else {
					rawData = data;
				}
				returnString = true;
				ds = this.context._processJsonResponse(rawData, this.context);
				// should we really bother about this for now ? HTML data coming from the server ? 
				//} else if (type === "html") {
			} else { // "text"
				//A.T. workaround for jQuery's 1.5 and above bug related to dataFilter and success callback. We need to explicitly set the dataType to "text" when manually parsing it
				// get jquery version
				if (jQuery.fn.jquery) {
					ver = jQuery.fn.jquery.split('.');
				}
				if (ver && ver.length >= 2) {
					// if jQuery is 1.5 and greater or if the first major version is greater than 1 (when jQuery 2 comes out)
					// As of jQuery 1.5, using this dataFilter approach for manually controlling deserialization will no longer work if the request's dataType is set to "json" or even omitted.
					// another way of fixing this is using converters
					// http://api.jquery.com/extending-ajax/#Converters
					if (parseInt(ver[1], 10) > 4 || parseInt(ver[0], 10) > 1) {
						this.dataTypes = [];
						this.dataTypes.push("text");
						returnString = true;
					}
				}
				// try to analyze and detect automatically 
				data = $.type(data) === "string" ? $.trim(data) : data;
				if ((data && $.type(data) === "string" && (data.startsWith("<?xml") ||
					data.startsWith("<"))) || t === "xml") {
					// assume XML
					if (schema) {
						schema._type = "xml";
					}
					// we must convert the string to a document first
					ds = this.context._processXmlResponse(this.context.stringToXmlObject(data), false, this.context);
				} else if ((data && $.type(data) === "string" && data.startsWith("[")) ||
						(t === "json" || t === "array")) {
					if (schema) {
						schema._type = "json";
					}
					//ds = this.context._processJsonResponse(eval(data), this.context);
					//A.T. 20 Jan 2011 - fix for bug #62124 - igDataSource JSON string binding error
					ds = this.context._processJsonResponse(JSON.parse(data), this.context);
				} else if ((data && $.type(data) === "string" && data.startsWith("{")) ||
						t === "json") {
					if (schema) {
						schema._type = "json";
					}
					ds = this.context._processJsonResponse(JSON.parse(data), this.context);
				} else if ($.isXMLDoc(data)) {
					if (schema) {
						schema._type = "xml";
					}
					ds = this.context._processXmlResponse(data, true, this.context);
				} else if (data !== "" && data !== null) {
					throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedResponseType);
				}
			}
			/*
			resKey = this.context.settings.responseDataKey;
			if (resKey && resKey !== "") {
			ds = rawData[resKey];
			} else {
			ds = rawData;
			}
			
			if (this.context._isPagingReq || this.context._isFilteringReq) {
			key = this.context.settings.responseTotalRecCountKey;
			if (rawData && rawData[key]) {
			if ($.type(rawData[key]) === "number") {
			this.context.totalRecordsCount(rawData[key]);
			} else {
			// try parse
			this.context.totalRecordsCount(parseInt(rawData[key], 10));
			}
			}
			}
			*/
			//if (returnString) {
			//	return JSON.stringify(ds);
			//}
			if (returnString) {
				if (!(this.context.settings.paging && this.context.settings.paging.enabled && this.context.settings.paging.appendPage)) {
					this.context._data = ds;
				}
				this.context._alreadySet = true;
			}
			return ds;
		},
		_successCallback: function (data) {
			// set the data & dataView
			//if the response doesn't hold the list of records directly in the root of the response, should we 
			// set the data to the list of records, or only the dataView? 
			// meaning , should the "_data" contain the raw response , in this case, an object, if the resKey is set ?
			var x, len = data ? data.length : 0;
			if ((data === undefined || data === null) && !this._alreadySet) {
				this._data = [];
				this._dataView = [];
			} else {
				if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
					for (x = 0; x < len; ++x) {
						this._data[this._data.length] = data[x];
					}
				} else {
					if (this._alreadySet) {
						this._dataView = this._data;
					} else {
						this._data = data;
						this._dataView = data;
					}
				}
			}
			this._alreadySet = false;
			this._populateTransformedData();
			this._isPagingReq = false;
			this._isFilteringReq = false;
			this._isSortingReq = false;
			this._isSummariesReq = false;
		},
		_errorCallback: function (req, status, error) {
			// first parameter denotes whether the request has been successful or not, second param is the error msg
			var f = this._customCallback || this.settings.callback, errmsg, statusMsg;
			this._isPagingReq = false;
			this._isFilteringReq = false;
			this._isSortingReq = false;
			this._isSummariesReq = false;
			statusMsg = status === null ? " " : " (" + status + ") ";
			errmsg = $.ig.DataSourceLocale.locale.errorRemoteRequest + statusMsg + (error !== undefined ? error.message : req && req.statusText ? req.statusText : "");
			if (f && this._callee) {
				f.apply(this._callee, [false, errmsg, this]);
			} else if (f) {
				f(false, errmsg, this);
			}
		},
		_completeCallback: function (req, status) {
			var f, callee, s = this.settings.sorting, p = this.settings.paging;

			if (s.type === "local" && s.defaultFields.length > 0) {
				this.sort(s.defaultFields, s.defaultDirection, false);
			}
			// Check if paging is configured, and if so, 
			// if OpType === $.ig.Constants.OpType.Local => apply local paging
			if (p.enabled && p.type === "local") {
				this._page();
			}

			f = this._customCallback || this.settings.callback;
			callee = this._callee || this.settings.callee;
			if (f && callee) {
				f.apply(callee, [true, "", this]);
			} else if (f) {
				f(true, "", this);
			}
		},
		_processRequest: function (options) {
			// trigger the call
			if (this.settings.responseDataType === 'jsonp') {
				$.getJSON(options.url, options.data, $.proxy(this._jsonpFilter, this));
			} else {
				$.ajax(options);
				/*
				$.ajax({
				url: url,
				// do not specify a dataType, let jQuery detect the response type, and filter the data later on. 
				dataType: dataType,
				async: true,
				context: this,
				data: params,
				contentType: contentType,
				cache: false,
				dataFilter: dataFilterFunction,
				success: successCallback,
				complete: completeCallback,
				error: errorCallback
				});
				*/
			}
		},
		_jsonpFilter: function (data, type) {
			var resp, x;
			this.context = this;
			resp = this._dataFilter(data, "json");
			if (!resp.length && $.type(resp) === "object") {
				resp = [resp];
			}
			if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
				for (x = 0; x < resp.length; ++x) {
					this._data[this._data.length] = resp[x];
				}
			} else {
				this._data = resp;
				this._dataView = resp;
			}
			this._populateTransformedData();
			this._completeCallback();
		},
		_processJsonResponse: function (data, context) {
			var ds, schema = context.schema(), resKey, resPath, i;
			// support for remote custom loadOnDemand
			if (this._response_data) {
				this._response_data(data);
			}
			if (schema && schema.fields && schema.fields().length > 0 && this.settings.localSchemaTransform) {
				ds = schema.transform(data);
			} else {
				resKey = context.settings.responseDataKey;
				if (resKey !== null && resKey !== undefined) {
					//we are not using eval() here, merge implementations with the schema code 
					//consider arrays here as well 
					resPath = resKey.split(".");

					//if (resKey && resKey !== "") {
					if (resPath.length > 0) {
						//	ds = data[resKey];
						ds = data;
						for (i = 0; i < resPath.length; i++) {
							ds = ds[resPath[i]];
						}
						if (typeof ds === 'string') {
							ds = JSON.parse(ds);
						}
					} else {
						ds = data;
					}
				} else {
					ds = data;
				}
			}

			if (context._isPagingReq || context._isFilteringReq) {
				this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, data, context);
			}
			if (data.Metadata) {
				this._metadata = data.Metadata;
			}

			this.summariesResponse(this.settings.summaries.summariesResponseKey, data);
			return ds;
		},
		// think about how to combine both searchField in the schema and responseDataKey, if defined in the root settings of the data source 
		_processXmlResponse: function (data, isParsed, context) {

			var ds, schema = context.schema(), tmpSchema, resKey;

			//make sure it's also possible to just define a searchfield without schema. currently the search field is in the schema? 
			if (schema && schema.fields && schema.fields().length > 0) {
				ds = this.settings.localSchemaTransform ? schema.transform(data) : data;
			} else {
				// convert the XML document to an array of JSON objects
				resKey = context.settings.responseDataKey;
				if (resKey && resKey !== "") {
					tmpSchema = new $.ig.DataSchema();
					ds = context._xmlToArray(tmpSchema._findXmlRecordsRoot(data, resKey));
				} else {
					ds = context._xmlToArray(data);
				}
			}
			return ds;
		},
		_xmlToArray: function (data) {
			// the assumptions here are several:
			// - the data that comes as a parameter is a XML document
			// - we are only going to traverse the children of the first root element - this is the default response type
			// for WCF services declared with BodyStyle = WebMessageBodyStyle.Wrapped attribute
			// we will also check of the root contains more than 1 node, and then assume the response is of type WebMessageBodyStyle.Bare
			// all other cases need to be handled by the developer - either specify schema or make sure the response has the format
			//  <root>
			//		< child> </child>
			//		....
			//  </root>
			var ds = [], root = data, i, r, j, name, val, o;
			o = window.ActiveXObject;
			if (data && data.childNodes && data.childNodes.length === 1) {
				// parse children of first root
				root = data.childNodes[0];
			}
			for (i = 0; i < root.childNodes.length; i++) {
				r = root.childNodes[i];
				ds[i] = [];
				for (j = 0; j < r.childNodes.length; j++) {
					name = o === undefined ? r.childNodes[j].localName : r.childNodes[j].baseName;
					val = o === undefined ? r.childNodes[j].textContent : r.childNodes[j].text;
					ds[i][name] = val;
				}
			}
			return ds;
		},
		_encodeUrl: function () {
			var props = this.settings, sParams = {}, fParams = {}, pParams = {},
				params, args, selParams = {}, sumParams = {}, extraParams = {}, pkParams = {}, noCancel = true;
			// if the schema is defined on the client, but we have RemoteUrl data source type, 
			// in the oData protocol it's possible to list fields that will be included in the response
			// so let's read that from the schema and encode it in the URL, in case the server-side
			// supports it. Example:
			// http://www.odata.org/developers/protocols/uri-conventions#SelectSystemQueryOption
			args = { cancel: false };
			params = { "sortingParams": sParams, "filteringParams": fParams, "pagingParams": pParams, "selectParams": selParams,
					"summariesParams": sumParams, "extraParams": extraParams, "pkParams": pkParams
				};
			if ($.isFunction(props.urlParamsEncoding)) {
				//args = props.urlParamsEncoding(this, params);
				noCancel = props.urlParamsEncoding(this, params);
			}
			//A.T. 18 Jan. 2011 - fix for bug #62309 - igDataSource unclear cancelability of urlParamsEncoding
			//if (!args.cancel) {
			if (noCancel) {
				this._encodeSelectParams(params);
				this._encodeSortingParams(params);
				this._encodeFilteringParams(params);
				this._encodePagingParams(params);
				this._encodeSummariesParams(params);
				// L.A. 10 August 2012 Fixing bugs #118643, #117764
				this._encodePkParams(params);
				// this should be implemented by any external features that are not direclly mapped as data source features
				// such as group by summaries
				if ($.isFunction(this.settings.encodeExtraParams)) {
					this.settings.encodeExtraParams(this, params);
				}

				if ($.isFunction(props.urlParamsEncoded)) {
					props.urlParamsEncoded(this, params);
				}
			}
			return $.extend(true, {}, params.sortingParams, params.filteringParams, params.pagingParams, params.selectParams, params.summariesParams,
				params.extraParams, params.pkParams);
		},
		// L.A. 10 August 2012 Fixing bugs #118643, #117764
		_encodePkParams: function (params) {
			var p = this.settings.paging, s = this.settings.sorting, f = this.settings.filtering,
				sm = this.settings.summaries, pk = this._schema ? this._schema._pk : null;
			// S.S. December 19, 2012 Bug #129394 this._metadata is always undefined on the first call because the dataSource
			// uses the first ajax response to set it. Therefore we shouldn't check for metadata availability
			if (pk && ((p.enabled && p.type === "remote") || (s.type === "remote"  || f.type === "remote" || sm.type === 'remote'))) {
				params.pkParams.pk = pk;
			}
		},
		_encodeSelectParams: function (params) {
			var selParams = params.selectParams, i;

			if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length > 0) {
				// encode fields using oData $select
				// http://www.odata.org/developers/protocols/uri-conventions#SelectSystemQueryOption
				// example: http://services.odata.org/OData/OData.svc/Products?$select=Price,Name
				selParams.$select = "";
				for (i = 0; i < this.schema().fields().length; i++) {
					if (i !== 0) {
						selParams.$select += ",";
					}
					selParams.$select += this.schema().fields()[i].name;
				}
			} else if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length === 0) {
				// include all fields
				// http://services.odata.org/OData/OData.svc/Products?$select=*
				selParams.$select = "*";
			}
		},
		_encodePagingParams: function (params) {
			var p = this.settings.paging;
			if (p.enabled && p.type === "remote") {
				//if (p.enabled) {
				// handle paging URL params
				// is also paging request
				this._isPagingReq = true;
				if (p.pageIndexUrlKey !== null && p.pageSizeUrlKey !== null) {
					params.pagingParams[p.pageIndexUrlKey] = this.pageIndex();
					params.pagingParams[p.pageSizeUrlKey] = this.pageSize();
				} else {
					// OData
					// $skip is the start index and $top is the end index 
					params.pagingParams.$skip = this.pageIndex() * this.pageSize();
					//params.pagingParams.$top = params.pagingParams.$skip + this.pageSize();
					params.pagingParams.$top = this.pageSize();

					// encode $inlinecount
					params.pagingParams.$inlinecount = "allpages";
					// set response key for total number of pages
					if (this.settings.responseTotalRecCountKey === null) {
						// http://www.odata.org/developers/protocols/uri-conventions#InlinecountSystemQueryOption
						this.settings.responseTotalRecCountKey = "d.__count"; // this is the default OData conventions
					}
				}
			}
		},
		_encodeSortingParams: function (params) {
			var s = this.settings.sorting, tmpdir, i, sfields, hlayout = null;
			if (s.type === "remote") {
				// handle sorting params
				if (s.exprString) {
					sfields = this._parseSortExpressions(s.exprString);
				} else {
					// handle expressions array
					sfields = s.expressions;
				}
				this._isSortingReq = true;
				// now encode
				for (i = 0; i < sfields.length; i++) {
					if (sfields[i].layout) {
						hlayout = sfields[i].layout;
					}
					// it's a sorting request
					if (s.sortUrlAscValueKey !== null && s.sortUrlDescValueKey !== null && s.sortUrlKey !== null) {
						tmpdir = (sfields[i].dir && sfields[i].dir.toLowerCase().startsWith("asc")) ? s.sortUrlAscValueKey : s.sortUrlDescValueKey;
						params.sortingParams[s.sortUrlKey + '(' + sfields[i].fieldName + ')'] = tmpdir;
					} else {
						// OData style encoding (the default)
						if (params.sortingParams.$orderby === undefined) {
							params.sortingParams.$orderby = "";
						}
						params.sortingParams.$orderby = params.sortingParams.$orderby + sfields[i].fieldName + " " + sfields[i].dir.toLowerCase();
						if (i < sfields.length - 1) {
							params.sortingParams.$orderby += ",";
						}
						//params.sortingParams.$orderby = encodeURIComponent(params.sortingParams.$orderby);
					}
				}
				if (hlayout) {
					params.sortingParams.layout = hlayout;
				}
			}
		},
		_encodeFilteringParams: function (params) {
			var f = this.settings.filtering, ffields, i, key, exprNotReq, cond, d;
			if (f.type === "remote") {
				// handle filtering params
				if (f.exprString) {
					ffields = this._parseFilterExprString(f.exprString);
				} else {
					ffields = f.expressions;
				}
				for (i = 0; i < ffields.length; i++) {
					// is a filtering request
					this._isFilteringReq = true;
					cond = ffields[i].cond;

					exprNotReq = cond === "false" || cond === "true" ||
						cond === "today" ||
						cond === "yesterday" || cond === "thisMonth" ||
						cond === "lastMonth" || cond === "nextMonth" ||
						cond === "thisYear" || cond === "lastYear" ||
						cond === "nextYear" || cond === "null" ||
						cond === "notNull" || cond === "empty" ||
						cond === "notEmpty";
					// if the filtering url key is explicitly defined, use this encoding: 
					// example something.php?filter(Name)=Contains(NY)
					// otherwise we use OData as the default
					if (f.filterExprUrlKey !== null) {
						// check if a filtering condition for the column already exists
						key = f.filterExprUrlKey + '(' + ffields[i].fieldName + ')';
						if ($.type(ffields[i].expr) === "date") {
							d = Date.UTC(ffields[i].expr.getFullYear(), ffields[i].expr.getMonth(), ffields[i].expr.getDate(), ffields[i].expr.getHours(), ffields[i].expr.getMinutes());
							//d = ffields[i].expr.getTime();
						} else {
							d = ffields[i].expr;
						}
						if (params.filteringParams[key] === undefined) {
							params.filteringParams[key] = ffields[i].cond + '(' + (exprNotReq ? '' : d) + ')';
						} else {
							params.filteringParams[key] = params.filteringParams[key] + ',' + ffields[i].cond + '(' + (exprNotReq ? '' : d) + ')';
						}
					} else {
						// OData:
						// http://www.odata.org/developers/protocols/uri-conventions#FilterSystemQueryOption
						// we support the following out of the box:
						// Eq, Ne, Gt, Ge, Lt, Le, And, Or, Not
						// as well as the following functions:
						// endswith, startswith, indexof
						if (params.filteringParams.$filter === undefined) {
							params.filteringParams.$filter = "";
						}
						if (ffields[i].cond === "startsWith") {

							params.filteringParams.$filter += "startswith(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') eq true";

						} else if (ffields[i].cond === "endsWith") {

							params.filteringParams.$filter += "endswith(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') eq true";

						} else if (ffields[i].cond === "contains") {

							params.filteringParams.$filter += "indexof(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') ge 0";

						} else if (ffields[i].cond === "doesNotContain") {

							params.filteringParams.$filter += "indexof(" + ffields[i].fieldName + "," + "'" + ffields[i].expr + "') eq -1";

						} else if (ffields[i].cond === "equals") {

							if ($.type(ffields[i].expr) === "string") {
								params.filteringParams.$filter += ffields[i].fieldName + " eq " + "'" + ffields[i].expr + "'";
							} else {
								params.filteringParams.$filter += ffields[i].fieldName + " eq " + ffields[i].expr;
							}
						} else if (ffields[i].cond === "true") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq true";
						} else if (ffields[i].cond === "false") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq false";
						} else if (ffields[i].cond === "doesNotEqual") {

							if ($.type(ffields[i].expr) === "string") {
								params.filteringParams.$filter += ffields[i].fieldName + " ne " + "'" + ffields[i].expr + "'";
							} else {
								params.filteringParams.$filter += ffields[i].fieldName + " ne " + ffields[i].expr;
							}

						} else if (ffields[i].cond === "greaterThan") {

							params.filteringParams.$filter += ffields[i].fieldName + " gt " + ffields[i].expr;

						} else if (ffields[i].cond === "lessThan") {

							params.filteringParams.$filter += ffields[i].fieldName + " lt " + ffields[i].expr;

						} else if (ffields[i].cond === "greaterThanOrEqualTo") {

							params.filteringParams.$filter += ffields[i].fieldName + " ge " + ffields[i].expr;

						} else if (ffields[i].cond === "lessThanOrEqualTo") {

							params.filteringParams.$filter += ffields[i].fieldName + " le " + ffields[i].expr;
						} else if (ffields[i].cond === "null") {
							params.filteringParams.$filter += ffields[i].fieldName + " eq null";
						} else if (ffields[i].cond === "notNull") {
							params.filteringParams.$filter += ffields[i].fieldName + " ne null";
						} else if (ffields[i].cond === "empty") {
							params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") eq 0";
						} else if (ffields[i].cond === "notEmpty") {
							params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") gt 0";
						}

						if (i < ffields.length - 1) {
							params.filteringParams.$filter += " and ";
						}
						//params.filteringParams.$filter = encodeURIComponent(params.filteringParams.$filter);
						// Before, After, Today, Yesterday, and so on - are not supported by OData, only by our custom filtering 
					}
				}
				// now encode the filtering logic, if defined
				if (f.filterLogicUrlKey !== null && ffields.length > 0) {
					// takes the first field's logic prop
					params.filteringParams[f.filterLogicUrlKey] = ffields[0].logic;
				}
			}
		},
		_encodeSummariesParams: function (params) {
			var i, j, s = this.settings.summaries, cs = s.columnSettings,
				methodsStr,
				csLength = cs.length;

			if (s.type === 'remote') {
				for (i = 0; i < csLength; i++) {
					methodsStr = '';
					// check if methods are defined
					if (cs[i].summaryOperands === undefined || cs[i].summaryOperands === null) {
						continue;
					}
					for (j = 0; j < cs[i].summaryOperands.length; j++) {
						if (cs[i].summaryOperands[j].active === true || cs[i].summaryOperands[j].active === 1) {
							methodsStr += cs[i].summaryOperands[j].type + ',';
						}
					}
					if (methodsStr !== '') {
						params.summariesParams[s.summaryExprUrlKey + '(' + cs[i].columnKey + ')'] = methodsStr.slice(0, -1);
					}
				}
			}
		},

		_page: function (keepRecords) {
			var count = 0, startIndex, endIndex, i = 0;
			if (keepRecords === undefined) {
				keepRecords = false;
			}
			//this._filteredDataView = [];
			// reset the dataView:
			if (keepRecords) {
				count = this._dataView.length;
			} else {
				this._dataView = [];
			}
			if (!this._filter) {
				// this._dataView should contain only the number of records specified by pageSize. 
				// load the data for the current page only , in the DataView
				startIndex = this.pageIndex() * this.pageSize();
				endIndex = startIndex + this.pageSize() >= this._data.length ? this._data.length : startIndex + this.pageSize();
				for (i = startIndex; i < endIndex; i++) {
					this._dataView[count++] = this._data[i];
				}
			} else {
				startIndex = this.pageIndex() * this.pageSize();
				endIndex = startIndex + this.pageSize() >= this._filteredData.length ? this._filteredData.length : startIndex + this.pageSize();
				for (i = startIndex; i < endIndex; i++) {
					this._dataView[count++] = this._filteredData[i];
				}
			}
		},
		// multi-column sorting  (third column - whether sorting should be preserved or cleared ) 
		// field can be a schema field, or an index of the column 
		// fields => an array of fields object definitions: 
		// example: [{fieldName : "firstName"}, {fieldName : "lastName"}]
		// example 2: [{fieldIndex : 1} , {fieldIndex : 2}]
		sort: function (fields, direction, keepSortState) {
			/* Sorts the data source locally. The result (filtered data) can be obtained by calling dataView(). Remote filtering can be performed by just calling dataBind() and setting the settings.filtering.expressions
			multi-column sorting can be enabled by setting keepSortState to true. 
			fields => an array of fields object definitions: 
			example: [{fieldName : "firstName"}, {fieldName : "lastName"}]
			example 2: [{fieldIndex : 1} , {fieldIndex : 2}]
				
			paramType="object" an array of fields object definitions
			paramType="string" asc / desc direction
			paramType="bool" if set to true, enables multi-column sorting, and the previous sorting state is not cleared
			*/
			// check if there is a custom function defined
			var s = this.settings.sorting, schema, sortF, convertFunc, p = this.settings.paging, data, resetPaging = false, settings = this.settings;
			if (fields === undefined || fields === null) {
				throw new Error($.ig.DataSourceLocale.locale.noSortingFields);
			}
			// default sort function
			sortF = function (grid, fields, schema, reverse, convertf) {
				reverse = reverse ? -1 : 1;
				function compareVals(format, enableUTCDates, rowTemplate, x, y) {
					if (format) {
						// L.A. 11 January 2013 - Fixing bug #130576 
						// L.A. 09 August 2012 - Fixing bug #118640 When the grid is bound to UTC dates 
						// (remote or local data), grouping a time-formatted date column produces incorrect groups
						if ($.type(x) === "date" && $.type(y) === "date") {
							if (format === "time" || format === "timeLong" || format === "h:mm:ss tt") {
								// Create date objects with fake year
								x = new Date("01 01 2000 " + $.ig.formatter(x, "date", format, rowTemplate, enableUTCDates));
								y = new Date("01 01 2000 " + $.ig.formatter(y, "date", format, rowTemplate, enableUTCDates));
							}
						}
					}
					if ((x === null || x === undefined) && (y === null || y === undefined)) {
						return 0;
					}
					if ((x === null || x === undefined) && y !== null && y !== undefined) {
						return -1;
					}
					if (x !== null && x !== undefined && (y === null || y === undefined)) {
						return 1;
					}
					return x > y ? 1 : x < y ? -1 : 0;
				}
				return function (obj1, obj2) {
					var i, f, arr1 = [], arr2 = [], a, b, key, col, format, o, enableUTCDates,
						rowTemplate;
					if (grid) {
						o = grid.options;
						enableUTCDates = o.enableUTCDates;
						rowTemplate = (!o.rowTemplate || o.rowTemplate.length <= 0);
					}
					for (i = 0; i < fields.length; i++) {
						key = fields[i].fieldName;
						if (grid && grid.columnByKey) {
							col = grid.columnByKey(key);
							if (col !== undefined && col !== null) {
								format = col.format;
							}
						}
						if (fields[i].layout && ((settings.key && settings.key !== fields[i].layout) || !settings.key)) {
							continue;
						}
						f = fields[i];
						if (f.fieldIndex >= 0) {
							f.fieldName = f.fieldIndex;
						}
						a = obj1[f.fieldName];
						b = obj2[f.fieldName];
						if (convertf !== undefined) {

							// this is assumed to be a custom-defined function, that will override the default data source type conversion logic
							a = convertf(a, f.fieldName);
							b = convertf(b, f.fieldName);
						}
						//A.T. 19 Jan 2011 - Fix for bug #62963 - igDataSource - case sensitivity is not applied to sorting
						if (s.caseSensitive === false) {
							if (a !== undefined && a !== null && a.toLowerCase) {
								a = a.toLowerCase();
							}
							if (b !== undefined && b !== null && b.toLowerCase) {
								b = b.toLowerCase();
							}
						}
						// support a different direction for every separate column
						if (f.dir !== undefined && f.dir !== null) {
							reverse = f.dir.toLowerCase().startsWith("desc");
							reverse = reverse ? -1 : 1;
						} else if (direction !== undefined && direction !== null && direction !== "") {
							reverse = direction.toLowerCase().startsWith("desc");
							reverse = reverse ? -1 : 1;
						}
						// differentiate between single and multi-col sorting (for performance reasons)
						if (fields.length === 1) {
							arr1 = reverse * compareVals(format, enableUTCDates, rowTemplate, a, b);
							arr2 = reverse * compareVals(format, enableUTCDates, rowTemplate, b, a);
						} else {
							if (reverse === -1) {
								arr1.push(-compareVals(format, enableUTCDates, rowTemplate, a, b));
								arr2.push(-compareVals(format, enableUTCDates, rowTemplate, b, a));
							} else {
								arr1.push(compareVals(format, enableUTCDates, rowTemplate, a, b));
								arr2.push(compareVals(format, enableUTCDates, rowTemplate, b, a));
							}
						}
					}
					if (arr1 < arr2) {
						return -1;
					}
					if (arr1 > arr2) {
						return 1;
					}
					return 0;
				};
			};
			if (s.applyToAllData && s.type === "local") {
				// M.H. 11 Mar 2013 Fix for bug #135542: When filtering is applied and then sort any column and there is remote paging, all of the records for the current page are sorted and rendered, no matter the applied filter
				if (this._filter && ((p.type === "local" && p.enabled === true) || p.enabled === false
                        || (p.type === "remote" && p.enabled === true && this.settings.filtering.type === 'local'))) {
					data = this._filteredData;
				} else {
					data = this.data();
				}
				resetPaging = true;
			} else {
				data = this.dataView();
			}
			if ($.type(s.customFunc) === 'function') {
				// call the function, passing the data to be sorted, the fields, and the direction
				data = s.customFunc(data, fields, direction);
			} else {
				schema = this.settings.schema;
				/*
				for (i = 0; i < schema.fields.length; i++) {
				if (schema.fields[i].name === fields[0].fieldName) {
				type = schema.fields[i].type;
				}
				}
				*/
				if (!direction) {
					direction = "";
				}
				// check if a custom compare function is set
				if ($.type(s.compareFunc) === "function") {
					sortF = s.compareFunc;
				}
				// check if a custom conversion function is set
				if ($.isFunction(s.customConvertFunc)) {
					convertFunc = s.customConvertFunc;
				}
				//else {
				// we do not want to reset the default data source type conversion logic
				// convertFunc returns a function 
				//convertFunc = this._convertf;
				//}

				// we allow the developer to provide a single string of sort expressions, in the following format:
				// "col1 asc, col2 desc, col3 asc" ... 
				if ($.type(fields) === "string") {
					fields = this._parseSortExpressions(fields);
				}
				// A.T. 21 Jan Fix for bug #63146 - reversing of sorting should be the other way around if "direction" is specified as parameter in sort()
				// M.H. 16 March 2012 Fix for bug #105043 - when fields.length is 0 then sortF returns 0. But in Chrome when there are empty values the issues is represented
				if (fields.length > 0) {
					data = data.sort(sortF(this.settings.callee, fields, schema, direction.toLowerCase().startsWith("asc") ? false : true, convertFunc));
				}
			}
			// now if paging is enabled, and "applyToAllData" is true, we need to re-initialize the dataView
			if (resetPaging && p.type === "local") {
				/* DAY 2/15/12 101818- when filtering, need to set the filtered data, not _data */
				if (!this._filter) {
					this._data = data;
				} else {
					this._filteredData = data;
				}
				this._page();
			} else {
				// A.T. 14 Feb 2011 - fix for bug #66214
				this._dataView = data;
			}
			// M.H. 17 April 2012 Fix for bug #109475
			this._populateTransformedData(data);
			return this; // preserve chaining
		},
		clearLocalSorting: function () {
			/* This clears local sorting applied to the data view by resetting it to the original data and applying any paging */
			var s = this.settings.sorting, p = this.settings.paging, data, resetPaging = false;

			if (s.applyToAllData && s.type === "local") {
				if (this._filter && ((p.type === "local" && p.enabled === true) || p.enabled === false)) {
					data = this._filteredData;
				} else {
					data = this.data();
				}
				resetPaging = true;
			} else {
				data = this.dataView();
			}
			// now if paging is enabled, and "applyToAllData" is true, we need to re-initialize the dataView
			if (resetPaging && p.type === "local") {
				/* DAY 2/15/12 101818- when filtering, need to set the filtered data, not _data */
				if (!this._filter) {
					this._data = data;
				} else {
					this._filteredData = data;
				}
				this._page();
			} else {
				this._dataView = data;
			}
			this._populateTransformedData();
			return this; // preserve chaining
		},
		// expected format is "col1 ASC, col2 DESC, col3 ASC" ... and so on 
		_parseSortExpressions: function (s) {

			var fields = [], tmp, tmp2, i;
			tmp = s.split(",");

			for (i = 0; i < tmp.length; i++) {
				fields[i] = {};
				tmp2 = $.trim(tmp[i]).split(" ");
				fields[i].fieldName = tmp2[0];
				fields[i].dir = tmp2[1];
			}

			return fields;
		},
		// this is used when sorting data
		// type can be "string", "number", "boolean", "date". 
		//Other values are ignored and default conversion is used 
		_convertf: function (val, type) {
			// not necessary for now. default type conversion happens in the data source directly 
		},
		// same regarding multi-col. filtering: rowFilter (ref: DataTable). 
		// example: [{fieldName : "firstName", expr: "abc", cond: "StartsWith"}, {fieldName : "lastName"}]
		// example 2: [{fieldIndex : 1} , {fieldIndex : 2, expr: "a", cond : "Contains"}]
		// expr is the filter expression text , such as "abc", or a regular expression such as *test*
		// cond is the filtering condition such as StartsWith, EndsWith, Contains, Equals, DoesNotEqual, DoesNotContain
		// if expr is detected to be a regular expression, the "cond" part is skipped 
		filter: function (fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
			/* filters the data source locally. Remote filtering can be performed by just calling dataBind() and setting the settings.filtering.expressions. The result (filtered data) can be obtained by calling dataView() 
			example: [{fieldName : "firstName", expr: "abc", cond: "StartsWith"}, {fieldName : "lastName"}]
			example 2: [{fieldIndex : 1} , {fieldIndex : 2, expr: "a", cond : "contains"}]
			expr is the filter expression text , such as "abc", or a regular expression such as *test*
			cond is the filtering condition such as startsWith, endsWith, contains, equals, doesNotEqual, doesNotContain
			if expr is detected to be a regular expression, the "cond" part is skipped 
			
			paramType="object" a list of field expression definitions
			paramType="AND|OR" boolean logic. Accepted values are AND and OR. 
			paramType="bool" if keepFilterState is set to true, it will not discard previous filtering expressions
			*/
			var i, j, expr = null, count = 0, skipRec = false, f = this.settings.filtering, p = this.settings.paging, data, t, k, schema, fields, tmpbool, resetPaging, allFieldsExpr, stringVal;
			schema = this.schema();
			if (schema === null || schema === undefined) {
				throw new Error($.ig.DataSourceLocale.locale.filteringNoSchema);
			}
			if ($.type(fieldExpressions) === "string") {
				expr = fieldExpressions;
			}
			if ($.type(fieldExpressionsOnStrings) === "string") {
				allFieldsExpr = fieldExpressionsOnStrings;
			} else if ($.type(fieldExpressionsOnStrings) === "undefined") {
				fieldExpressionsOnStrings = [];
			}
			if ($.type(fieldExpressions) === "array" && fieldExpressions.length === 0 && $.type(fieldExpressionsOnStrings) === "array" && fieldExpressionsOnStrings.length === 0) {
				return;
			}
			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true;
			} else {
				// cache the original dataView 
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					//data = this.dataView();
					data = this._cachedDataView;
				} else {
					// COPY the this.dataView() in this._cachedDataView; this is necessary because we want to restore it later on 
					//this._cachedDataView = $.extend(true, {}, this.dataView());
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView;
				}
			}
			if ($.type(f.customFunc) === 'function') {
				// call the function, passing the filterExpression object which contains field names/indices, the current expression for the field, as well as condition for the field
				data = f.customFunc(fieldExpressions, data);
				//A.T. fix for bug #77646
				this._filteredData = data;
				//A.T. 20 Dec. 2011 Fix for bug #96819 - igDataSource filtering feature with own defined custom function does not filtering data
				this._dataView = [];
			} else {
				// re-initialize the dataView. We can do that safely, since data will either be cached, or will be stored in this.data(), meaning that will be the whole ds
				this._dataView = [];
				this._filteredData = [];
				// filter "data"
				// we will store all results in tmpData, and then assign it to the dataView. please ensure that 
				for (i = 0; i < data.length; i++) {
					skipRec = false;
					if (expr) {
						fieldExpressions = this._parseFilterExprString(expr);
					}
					if (allFieldsExpr) {
						fieldExpressionsOnStrings = this._parseFilterExprString(allFieldsExpr);
					}
					for (j = 0; j < fieldExpressions.length; j++) {
						// if there is no match, break, we aren't going to add the record to the resulting data view. 
						// the default boolean logic is to "AND" the fields 
						fields = schema.fields();
						if (fieldExpressions[j].fieldIndex) {
							if (fieldExpressions[j].fieldIndex < fields.length) {
								t = fields[fieldExpressions[j].fieldIndex].type;
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldIndex], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond);
						} else {
							// M.H. 10 Sep 2012 Fix for bug #120759
							if (fieldExpressions[j].dataType !== undefined && fieldExpressions[j].dataType !== null) {
								t = fieldExpressions[j].dataType;
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressions[j].fieldName) {
										t = fields[k].type;
										break;
									}
								}
							}
							skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldName], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond);
						}
						tmpbool = (fieldExpressions[j].logic !== null && fieldExpressions[j].logic !== undefined && (fieldExpressions[j].logic.toLowerCase() === "or" ||
							fieldExpressions[j].logic.toLowerCase() === "and")) ? fieldExpressions[j].logic : boolLogic;
						//A.T. 18 Jan. 2011 fix for bug 62126 - igDataSource local filtering expressions: the OR operator does not work
						if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
							tmpbool = "and";
						}
						if (skipRec && tmpbool.toLowerCase() === "and") {
							break;
						} else if (!skipRec && tmpbool.toLowerCase() === "or") {
							break;
						}
					}
					if (!skipRec) {
						for (j = 0; j < fieldExpressionsOnStrings.length; j++) {
							// if there is no match, break, we aren't going to add the record to the resulting data view. 
							// the default boolean logic is to "AND" the fields 
							fields = schema.fields();
							if (fieldExpressionsOnStrings[j].fieldIndex) {
								if (fieldExpressionsOnStrings[j].fieldIndex < fields.length) {
									t = fields[fieldExpressionsOnStrings[j].fieldIndex].type;
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldIndex] ? data[i][fieldExpressionsOnStrings[j].fieldIndex].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond);
							} else {
								for (k = 0; k < fields.length; k++) {
									if (fields[k].name === fieldExpressionsOnStrings[j].fieldName) {
										t = fields[k].type;
										break;
									}
								}
								stringVal = data[i][fieldExpressionsOnStrings[j].fieldName] !== null && data[i][fieldExpressionsOnStrings[j].fieldName] !== undefined ? data[i][fieldExpressionsOnStrings[j].fieldName].toString() : "";
								skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond);
							}
							tmpbool = (fieldExpressionsOnStrings[j].logic !== null && fieldExpressionsOnStrings[j].logic !== undefined && (fieldExpressionsOnStrings[j].logic.toLowerCase() === "or" ||
								fieldExpressionsOnStrings[j].logic.toLowerCase() === "and")) ? fieldExpressionsOnStrings[j].logic : boolLogic;
							//A.T. 18 Jan. 2011 fix for bug 62126 - igDataSource local filtering expressions: the OR operator does not work
							if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
								tmpbool = "and";
							}
							if (skipRec && tmpbool.toLowerCase() === "and") {
								break;
							} else if (!skipRec && tmpbool.toLowerCase() === "or") {
								break;
							}
						}
					}
					if (!skipRec) {
						//this._dataView[count++] = data[i];
						this._filteredData[count++] = data[i];
					}
				}
			}
			this._filter = true;
			if (resetPaging && p.type === "local" && p.enabled === true) {
				// reset paging
				this.settings.paging.pageIndex = 0;
				this.pageSizeDirty(true);
				this._page();
			} else {
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i];
				}
			}
			this._populateTransformedData(this._filteredData);
			return this; // preserve chaining
		},
		clearLocalFilter: function () {
			/* This clears local filtering applied to the data view by resetting it to the original data and applying any paging */
			var i, f = this.settings.filtering, p = this.settings.paging, data, resetPaging;

			if (f.applyToAllData && f.type === "local") {
				data = this.data();
				resetPaging = true;
			} else {
				// cache the original dataView 
				if (this._cachedDataView && this._cachedDataView.length > 0) {
					//data = this.dataView();
					data = this._cachedDataView;
				} else {
					// COPY the this.dataView() in this._cachedDataView; this is necessary because we want to restore it later on 
					//this._cachedDataView = $.extend(true, {}, this.dataView());
					this._cachedDataView = $.merge([], this.dataView());
					data = this._cachedDataView;
				}
			}
			this._dataView = [];
			this._filteredData = data;
			if (resetPaging && p.type === "local" && p.enabled === true) {
				this._filter = true;
				// reset paging
				this.settings.paging.pageIndex = 0;
				this.pageSizeDirty(true);
				this._page();
			} else {
				if (p.enabled === false) {
					this._filter = true;
				}
				for (i = 0; i < this._filteredData.length; i++) {
					this._dataView[i] = this._filteredData[i];
				}
			}
			this._populateTransformedData(this._filteredData);
			return this; // preserve chaining
		},
		_parseFilterExprString: function (expr) {
			//A.T. 18 Jan 2011 - fix for bug #62418 
			var exprs = $.trim(expr).split(/(?=AND+)|(?=OR+)/i), i, j, fields = [], tmp, tmp2, isInvalid = true;
			for (i = 0; i < exprs.length; i++) {
				fields[i] = {};
				//A.T. 18 Jan 2011 -  Fix for bug #62415 - equality sign (=) is not parsed when in a filtering expression string
				//A.T. 19 Jan 2011 - removing (IN) operator. (bug #62365)
				tmp = $.trim(exprs[i]).split(/(?= \=+)|(?=<>+)|(?=>+)|(?=<+)|(?=LIKE+)|(?=NOT\WLIKE)+|(?=>\=+)|(?=<\=+)/);
				if ($.trim(exprs[i]).toLowerCase().startsWith("and")) {
					fields[i].logic = "AND";
					// strip AND 
					//tmp[0] = tmp[0].substring(tmp.indexOf(3));
				} else if ($.trim(exprs[i]).toLowerCase().startsWith("or")) {
					fields[i].logic = "OR";
					// strip OR
					//tmp[0] = tmp[0].substring(tmp.indexOf(2));
				}
				// the current logic field is always for the previous term 
				if (i > 0 && (fields[i].logic === "AND" || fields[i].logic === "OR")) {
					fields[i - 1].logic = fields[i].logic;
				}
				if (tmp[0].toLowerCase().startsWith("and") || tmp[0].toLowerCase().startsWith("or")) {
					fields[i].fieldName = $.trim(tmp[0].split(" ")[1]);
				} else {
					fields[i].fieldName = $.trim(tmp[0]);
				}
				tmp2 = $.trim(tmp[1]).split(" ");
				// fix ambiguous matching between <, >, and <>
				if (exprs[i].indexOf("<>") !== -1) {
					tmp2[0] = "<>";
					tmp2[1] = tmp[2].replace(">", "");
				}
				//A.T. 19 Jan 2011 - Fix for bug #62368 - igDataSource - Space character handling in filtering string expressions
				if (tmp2.length > 2) {
					// merge all entries from index one to the end into a single string 
					for (j = 2; j < tmp2.length; j++) {
						tmp2[1] = tmp2[1] + ' ' + tmp2[j];
					}
					tmp2 = [tmp2[0], tmp2[1]];
				}
				if (tmp[1].startsWith("NOT")) {
					fields[i].expr = $.trim(tmp[2].replace("LIKE", ""));
				} else {
					fields[i].expr = tmp2[1];
				}
				// validate field
				for (j = 0; j < this.schema().schema.fields.length; j++) {
					if (this.schema().schema.fields[j].name === fields[i].fieldName) {
						isInvalid = false;
						break;
					}
				}
				if (isInvalid) {
					//A.T. 18 Jan 2011 - fix for bug 62406 - filtering expression string fallback scenario should return an error
					throw new Error($.ig.DataSourceLocale.locale.fieldMismatch + fields[i].fieldName);
				}
				isInvalid = true;
				if (tmp2[0] === ">") {
					fields[i].cond = "greaterThan";
				} else if (tmp2[0] === "LIKE") {
					if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
						fields[i].cond = "contains";
					} else if (fields[i].expr.endsWith("%")) {
						fields[i].cond = "startsWith";
					} else if (fields[i].expr.startsWith("%")) {
						fields[i].cond = "endsWith";
					} else {
						fields[i].cond = "equals";
					}
					//A.T. 18 Jan 2011 - Fix for bug #62355 the LIKE operator does not work as substitute for the Contains local filtering condition
					fields[i].expr = fields[i].expr.replace(/%/g, '');
				} else if (tmp2[0] === "NOT LIKE" || tmp2[0] === "NOT") {

					if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
						fields[i].cond = "doesNotContain";
						//} else if (fields[i].expr.endsWith("%")) {
						//	fields[i].cond = "startsWith";
						//} else if (fields[i].expr.startsWith("%")) {
						//	fields[i].cond = "endsWith";
					} else {
						fields[i].cond = "doesNotEqual";
					}
					fields[i].expr = fields[i].expr.replace(/%/g, '');
				} else if (tmp2[0] === "=") {
					fields[i].cond = "equals";
				} else if (tmp2[0] === "<>") {
					fields[i].cond = "doesNotEqual";
				} else if (tmp2[0] === "<") {
					fields[i].cond = "lessThan";
				} else if (tmp2[0] === "<=") {
					fields[i].cond = "lessThanOrEqualTo";
				} else if (tmp2[0] === ">=") {
					fields[i].cond = "greaterThanOrEqualTo";
				} else {
					//A.T. 18 Jan 2011 - fix for bug 62406 - filtering expression string fallback scenario should return an error
					throw new Error($.ig.DataSourceLocale.locale.unrecognizedCondition + expr);
					// fallback
					//fields[i].cond = "Contains";
				}
			}
			return fields;
		},
		// think about passing the type directly as parameter, to avoid performance parsing overhead 
		_findMatch: function (val, expr, t, ignoreCase, cond) {
			// if the filter condition is one of the below ones, we do not require a filter expression to be set
			var tmpExpr, exprNotReq = cond === "false" || cond === "true" ||
				cond === "today" ||
				cond === "yesterday" || cond === "thisMonth" ||
				cond === "lastMonth" || cond === "nextMonth" ||
				cond === "thisYear" || cond === "lastYear" ||
				cond === "nextYear" || cond === "null" ||
				cond === "notNull" || cond === "empty" ||
				cond === "notEmpty";
			// no filter, therefore everything matches OK 
			if (expr === "" && !exprNotReq) {
				return true;
			}
			tmpExpr = $.trim(expr);
			//if (t === null || t === undefined) {
			//	t = $.type(expr);
			//}
			if (t === "regexp" || (t === "string" && tmpExpr.startsWith("/") && tmpExpr.endsWith("/"))) {
				if (t === "regexp") {
					return this._findRegExpMatch(val, expr, false);
				}
				return this._findRegExpMatch(val, tmpExpr.substring(1, tmpExpr.length - 1), true);
			}
			if (($.type(val) === "date" && (t === undefined || t === null)) || t === "date") {
				// parse expr
				try {
					expr = this._parser.toDate(expr);
				} catch (e) {
					// log error that expr could not be converted 
				}
				return this._findDateMatch(val, expr, cond);
			}
			if (($.type(val) === "boolean" && (t === undefined || t === null)) || (t === "boolean" || t === "bool")) {
				return this._findBoolMatch(val, cond);
			}
			if (($.type(val) === "number" && (t === undefined || t === null)) || t === "number") {
				return this._findNumericMatch(val, expr, cond);
			}
			return this._findStringMatch(val, expr, ignoreCase, cond);
		},
		_findStringMatch: function (val, expr, ignoreCase, cond) {
			var localVal;
			if (val !== null && val !== undefined) {
				localVal = ignoreCase ? val.toLowerCase() : val || "";
			} else {
				localVal = val;
			}
			if (expr !== null && expr !== undefined) {
				// VS 09/15/2012 Bug 120973 val can be null and type-detection in _findMatch fails
				expr = ignoreCase ? expr.toString().toLowerCase() : expr.toString();
			}
			// check if expr is a regular expression
			if (cond === "startsWith") {
				return localVal !== null && localVal !== undefined && localVal.startsWith(expr);
			}
			if (cond === "endsWith") {
				return localVal !== null && localVal !== undefined && localVal.endsWith(expr);
			}
			if (cond === "contains") {
				return localVal !== null && localVal !== undefined && localVal.indexOf(expr) !== -1;
			}
			if (cond === "doesNotContain") {
				return localVal !== null && localVal !== undefined && localVal.indexOf(expr) === -1;
			}
			if (cond === "equals") {
				return localVal !== null && localVal !== undefined && localVal === expr;
			}
			if (cond === "doesNotEqual") {
				return localVal !== null && localVal !== undefined && localVal !== expr;
			}
			if (cond === "null") {
				return localVal === null;
			}
			if (cond === "notNull") {
				return localVal !== null;
			}
			if (cond === "empty") {
				return localVal === null || localVal === undefined || localVal.length === 0;
			}
			if (cond === "notEmpty") {
				return localVal === null || localVal === undefined || localVal.length !== 0;
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
			//return false;
		},
		_findRegExpMatch: function (val, expr, str) {
			if (str) {
				return (new RegExp(expr)).test(val);
			}
			return val.match(expr);
		},
		// Equals, DoesNotEqual, GreaterThan, LessThan, GreaterThanOrEqualTo, LEssThanOrEqualTo
		_findNumericMatch: function (val, expr, cond) {
			// if expr is not numeric, convert it
			if ($.type(expr) !== "number") {
				expr = this._parser.toNumber(expr);
			}
			if (cond === "equals") {
				return val === expr;
			}
			if (cond === "doesNotEqual") {
				return val !== expr;
			}
			if (cond === "greaterThan") {
				return val > expr;
			}
			if (cond === "lessThan") {
				return val < expr;
			}
			if (cond === "greaterThanOrEqualTo") {
				return val >= expr;
			}
			if (cond === "lessThanOrEqualTo") {
				return val <= expr;
			}
			if (cond === "null") {
				return val === null;
			}
			if (cond === "notNull") {
				return val !== null;
				// A.T. 14 Feb 2011 - Fix for bug #64156
			}
			if (cond === "empty") {
				return (val === null || val === undefined || isNaN(val));
			}
			if (cond === "notEmpty") {
				return (val !== null && val !== undefined && !isNaN(val));
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
		},
		// True or False
		_findBoolMatch: function (val, cond) {
			if (cond === "true") {
				return val;
			}
			if (cond === "false") {
				return !val;
			}
			if (cond === "null") {
				return val === null;
			}
			if (cond === "notNull") {
				return val !== null;
			}
			if (cond === "empty") {
				return (val === null || val === undefined);
			}
			if (cond === "notEmpty") {
				return (val !== null && val !== undefined);
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
		},
		// Equals, DoesNotEqual, Before, After, Today, Yesterday, ThisMonth, LastMonth, NextMonth, ThisYear, LastYear, NextYear, ThisQuarter, LastQuarter, NextQuarter
		// the expected types are both Date for both val and expr.
		_findDateMatch: function (val, expr, cond) {
			var day1, mins1, secs1, hs1, ms1, yrs1, day2, mins2, secs2, hs2, ms2, yrs2, month1, month2, eq, cur,
				day3, mins3, secs3, hs3, ms3, yrs3, month3, mday1, mday2, mday3, yesterday;
			// 1. get the "expr" date and divide it into year, month, quarter, day, week, etc.
			if (val !== null && val !== undefined) {
				day1 = val.getDay();
				mday1 = val.getDate();
				mins1 = val.getMinutes();
				secs1 = val.getSeconds();
				hs1 = val.getHours();
				ms1 = val.getMilliseconds();
				yrs1 = val.getYear();
				month1 = val.getMonth();
				//w1 = val.getWeek();
			}
			if ($.type(expr) === "date") {
				day2 = expr.getDay();
				mday2 = expr.getDate();
				mins2 = expr.getMinutes();
				secs2 = expr.getSeconds();
				hs2 = expr.getHours();
				ms2 = expr.getMilliseconds();
				yrs2 = expr.getYear();
				month2 = expr.getMonth();
			} else {
				expr = new Date(expr);
			}
			// current time
			cur = new Date();
			yesterday = new Date(cur.getTime());
			yesterday.setDate(yesterday.getDate() - 1);
			day3 = cur.getDay();
			mday3 = cur.getDate();
			mins3 = cur.getMinutes();
			secs3 = cur.getSeconds();
			hs3 = cur.getHours();
			ms3 = cur.getMilliseconds();
			yrs3 = cur.getYear();
			month3 = cur.getMonth();
			eq = day1 === day2 && mins1 === mins2 && hs1 === hs2 && yrs1 === yrs2 && month1 === month2;
			// now compare
			if (cond === "equals") {
				return eq;
			}
			if (cond === "doesNotEqual") {
				return !eq;
			}
			if (cond === "before") {
				return val < expr;
			}
			if (cond === "after") {
				return val > expr;
			}
			if (cond === "today") {
				return mday1 === mday3 && month1 === month3 && yrs1 === yrs3;
			}
			if (cond === "yesterday") {
				// L.A. 29 January 2013 - Fixing bug #131649
				// Filtering condition yesterday is not working correctly
				// handle month and year boundaries 
				return yesterday.getDay() === val.getDay() && yesterday.getMonth() === val.getMonth() && yesterday.getFullYear() === val.getFullYear();
			}
			if (cond === "thisMonth") {
				return month1 === month3 && yrs1 === yrs3;
			}
			if (cond === "lastMonth") {
				//A.T. 18 Jan 2011 - Fix for bug #62354 - igDataSource LastMonth and NextMonth local filtering doesn't work properly
				// first month of the year special case
				if (month3 === 0) {
					return month1 === 11 && yrs1 === yrs3 - 1;
				}
				return month1 === month3 - 1 && yrs1 === yrs3;
			}
			if (cond === "nextMonth") {
				//A.T. 18 Jan 2011 - Fix for bug #62354 - igDataSource LastMonth and NextMonth local filtering doesn't work properly
				// last month of the year special case
				if (month3 === 11) {
					return month1 === 0 && yrs1 === yrs3 + 1;
				}
				return month1 === month3 + 1 && yrs1 === yrs3;
			}
			if (cond === "thisYear") {
				return yrs1 === yrs3;
			}
			if (cond === "lastYear") {
				return yrs1 === yrs3 - 1;
			}
			if (cond === "nextYear") {
				return yrs1 === yrs3 + 1;
			}
			if (cond === "on") {
				return yrs1 === yrs2 && month1 === month2 && mday1 === mday2;
			}
			if (cond === "notOn") {
				return !(yrs1 === yrs2 && month1 === month2 && mday1 === mday2);
				//else if (cond === "ThisQuarter") {
				//
				//} else if (cond === "LastQuarter") {
				//
				//} else if (cond === "NextQuarter") {
				//
			}
			if (cond === "null") {
				return val === null;
			}
			if (cond === "notNull") {
				return val !== null;
				// A.T. 14 Feb 2011 - fix for bug #64465
			}
			if (cond === "empty") {
				return (val === null || val === undefined);
			}
			if (cond === "notEmpty") {
				return (val !== null && val !== undefined);
			}
			throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond);
		},
		/*
		clearFilter: function (fields) {
		// clears the filters, and rebinds the data so that there is no filtering applied on the dataView instance
		return this; // preserve chaining 
		},
		clearFilters: function () {	
		// clears all filters
		},
		*/
		// return 1 even if records count is 0.
		totalRecordsCount: function (count, key, dsObj, context) {
			/* Applicable only when the data source is bound to remote data. Gets / sets the total number of records in the data source. If data binding is remote, and there's paging or filtering enabled, the actual total number of records may not 
			match the number of records that exists on the client 
			paramType="number" optional="true" the total number of records 
			*/
			var rec, totalRecPath, i;
			if (context !== undefined && context !== null) {
				if (key) {
					totalRecPath = key.split(".");
					rec = dsObj;
					for (i = 0; i < totalRecPath.length; i++) {
						rec = rec[totalRecPath[i]];
					}
					if (dsObj && rec !== undefined && rec !== null) {
						if ($.type(rec) === "number") {
							this._recCount = rec;
						} else {
							// try parse
							this._recCount = parseInt(rec, 10);
						}
						this.hasTotalRecordsCount(true);
					} else {
						this.hasTotalRecordsCount(false);
					}
				} else {
					this.hasTotalRecordsCount(false);
				}
			} else if (count !== undefined && count !== null) {
				this._recCount = count;
			}
			return this._recCount;
		},
		hasTotalRecordsCount: function (hasCount) {
			/* gets / sets if the response from the server contains a property which specifies the total number of records in the server-side backend 
			paramType="bool" specifies if the data source contains a property that denotes the total number of records in the server-side backend
			*/
			if (hasCount === undefined || hasCount === null) {
				return this._hasCount;
			}
			this._hasCount = hasCount;
		},
		metadata: function (key) {
			/* returns metadata object for the specified key
			paramType="string" Primary key of the record
			returnType="object" metadata object
			*/

			// M.H. 24 Nov. 2011 Fix for bug 96603 - when metadata is undefined or null it should be returned otherwise it will be returned js error
			if (key === null || key === undefined || key === ''
					|| this._metadata === null || this._metadata === undefined) {
				return this._metadata;
			}

			return this._metadata[key];
		},
		totalLocalRecordsCount: function () {
			/* returns the total number of records in the local data source
			returnType="number" the number of records that are bound / exist locally 
			*/
			if (!this._filter) {
				return this._data.length;
			}
			return this._dataView.length;
		},
		pageCount: function () {
			/* returns the total number of pages 
			returnType="number" total number fo pages
			*/
			var c, realCount;
			if (!this._filter) {
				realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._data.length;
			} else {
				realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._filteredData.length;
			}
			c = Math.ceil(realCount / this.settings.paging.pageSize);
			return c === 0 ? 1 : c;
		},
		pageIndex: function (index) {
			/* gets /sets the current page index. If an index is passed as a parameter, the data source is re-bound. 
			paramType="number" optional="true" the page index. If none is specified, returns the current page index.
			returnType="number" the current page index 
			
			*/
			if (index === undefined || index === null) {
				//return this._pageIndex;
				return this.settings.paging.pageIndex === undefined ? 0 : this.settings.paging.pageIndex;
			}
			//this._pageIndex = index;
			// A.T. 18 Jan 2011 - Fix for bug #63149 - igDataSource - page content is erratic after changing page size
			this.settings.paging.pageIndex = parseInt(index, 10);
			this._cachedDataView = null;
			if (this.settings.paging.type === "local") {
				this._page(this.settings.paging.appendPage);
				this._invokeCallback();
			} else {
				this.dataBind();
			}
			return this;
		},
		// utility paging functions
		prevPage: function () {
			/* sets the page index to be equal to the previous page index and rebinds the data source */
			this.pageIndex(this.pageIndex() === 0 ? 0 : this.pageIndex() - 1);
			return this;
		},
		nextPage: function () {
			/* sets the page index to be equal to the next page index and rebinds the data source */
			if (this.pageIndex() >= this.pageCount() - 1) {
				return this;
			}
			this.pageIndex(this.pageIndex() + 1);
			return this;
		},
		pageSize: function (s) {
			/* gets /sets the page size and rebinds the data source if a parameter is specified. If no parameter is passed, returns the current page size
			paramType="number" optional="true" the page size. 
			*/
			if (s === undefined || s === null) {
				return this.settings.paging.pageSize;
			}
			// A.T. 18 Jan 2011 - Fix for bug #63149 - igDataSource - page content is erratic after changing page size
			this.settings.paging.pageSize = parseInt(s, 10);
			if (this.settings.paging.appendPage) {
				this.settings.paging.pageIndex = 0;
				this._cachedDataView = null;
			}
			if (this.settings.paging.type === "local") {
				this._page();
				this._invokeCallback();
			} else {
				this.dataBind();
			}
			return this;
		},
		pageSizeDirty: function (dirty) {
			/* for internal use
			paramType="object" excluded="true" 
			*/
			if (dirty === undefined || dirty === null) {
				return this._dirty;
			}
			this._dirty = dirty;
		},
		recordsForPage: function (p) {
			/* returns a list of records for the specified page. Implies that paging is enabled. 
			paramType="number" optional="false" the page index for which records will be returned 
			
			*/
			var d = [], si, ps, ei, i, c = 0;
			ps = this.pageSize();
			si = p * ps;
			ei = si + ps >= this._data.length ? this._data.length : si + ps;
			for (i = si; i < ei; i++) {
				d[c++] = this._data[i];
			}
			return d;
		},
		tableToObject: function (tableDOM) {
			/* converts a HTML TABLE dom element to a JavaScript array of objects that contain the records data 
			paramType="dom" TABLE dom element to transform
			returnType="object" 
			*/
			try {
				// no schema, just parse the table and store t in arrays
				var rows = $(tableDOM).children("tbody").children(), len, data, i, j;
				len = rows.length > 0 ? rows[0].cells.length : 0;
				data = [];
				for (i = 0; i < rows.length; i++) {
					data[i] = [];
					for (j = 0; j < len; j++) {
						data[i][j] = rows[i].cells[j].innerHTML;
					}
				}
				return data;
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTableNoSchema + e.message);
			}
		},
		_validateTable: function (obj) {
			if (obj.length === 0) {
				throw new Error($.ig.DataSourceLocale.locale.errorTableWithIdNotFound + this.dataSource());
			} else {
				return obj[0];
			}
		},
		stringToJSONObject: function (s) {
			/* parses the string and returns an evaluated JSON object
			paramType="string" the JSON as string. 
			*/
			var data = {};
			try {
				//data = eval(s);
				//A.T. 20 Jan 2011 Fix for bug #62124 - igDataSource JSON string binding error
				data = JSON.parse(s);
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingJsonNoSchema + e.message);
			}
			return data;
		},
		stringToXmlObject: function (s) {
			/* parses a string and returns a XML Document 
			paramType="string" the XML represented as a string
			*/
			var doc, parser;
			try {
				if (window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);
				} else {
					parser = new DOMParser();
					doc = parser.parseFromString(s, 'text/xml');
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingXmlNoSchema + e.message);
			}
			return doc;
		}
		// this function is not currently used
		/*
		_filterData: function (data) {
		
		if (this.settings.pageSize > 0)
		{
		var filteredData = [], count = 0, i = 0;
		for (i = this._pageIndex * this.settings.pageSize; i < this._pageIndex * this.settings.pageSize + this.settings.pageSize; i++) {
		filteredData[count++] = data[i];
		}
		return filteredData;
		}
		return data;
		}
		*/
	});
	$.ig.TypeParser = $.ig.TypeParser || Class.extend({
		toStr: function (obj) {
			return this.isNullOrUndefined(obj) ? "" : obj + this.empty();
		},
		toDate: function (obj, pk, key) {
            // L.A. 18 June 2012 Fixing bug #113265 Column 'date' shows empty values as 'NaN'
			if (this.isNullOrUndefined(obj) || obj === '' || $.type(obj) === 'function') {
				return null;
			}
			if ($.type(obj) === 'date') {
				return obj;
			}
			// OData & MS
			if (obj.length && obj.indexOf('/Date(') !== -1) {
				/*
				// account for timezone offset
				if (this._tzo === undefined) {
					this._tzo = new Date().getTimezoneOffset() * 60000;
				}
				if (this._dst === undefined) {
					this._dst = new Date().dst();
					if (this._dst) {
						this._tzo = new Date().stdTimezoneOffset() * 60000;
					}
				}
				*/
				// we need to get the local daylight offset on the client
				if (this._serverOffsets === undefined || this._serverOffsets[pk] === undefined) {
					return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10)  + this._serverOffset);
				}
				if (this._serverOffsets[pk][key] !== undefined && this._serverOffsets[pk][key] !== null) {
					return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10)  + this._serverOffsets[pk][key]);
				}
				return new Date(parseInt(obj.replace('/Date(', '').replace(')/', ''), 10));
			}
			return new Date(obj);
		},
		toNumber: function (obj) {
			return (this.isNullOrUndefined(obj) || $.type(obj) === 'function') ? null : obj * this.num();
		},
		toBool: function (obj) {
			if ($.type(obj) === 'boolean') {
				return obj;
			}
			if (this.isNullOrUndefined(obj) || $.type(obj) === 'function') {
				return false;
			}
			if (obj === "1" || obj.toLowerCase() === "true" || obj === 1) {
				return true;
			}
			return false;
		},
		isNullOrUndefined: function (obj) {
			return obj === null || obj === undefined;
		},
		empty: function () {
			return "";
		},
		num: function () {
			return 1;
		}
	});
	/* the $.ig.DataSchema handles transformations for Array, JSON and Xml data objects.
	if your data is in any other format and/or needs to be additionally worked on, please pass it through $.ig.DataSource first
	Eg: when you need to fetch the data remotely, or when it is stored in a string and needs to be evaluated first 
	*/
	$.ig.DataSchema = $.ig.DataSchema || Class.extend({
		/* The $.ig.DataSchema handles transformations for Array, JSON and Xml data objects.
		If your data is in any other format and/or needs to be additionally worked on, please pass it through $.ig.DataSource first.
		Eg: When you need to fetch the data remotely, or when it is stored in a string and needs to be evaluated first 
		*/
		schema: {
			/* type="array" A list of field definitions specifying the schema of the data source. Field objects description: {fieldName, [fieldDataType], [fieldXPath]} */
			fields: [
			],
			/* type="string" this is the property (path) in the data source where the records are located. */
			searchField: null,
			/* type="string" this is the property in the resulting object where actual resulting records will be put. (So the result will not be array but an object if this is defined), after the potential data source transformation */
			outputResultsName: null
		},
		init: function (type, options) {
			if (options) {
				this.schema = $.extend(true, {}, $.ig.DataSchema.prototype.schema, options);
			}
			this._type = type;
			this._parser = new $.ig.TypeParser();
			this._parser._serverOffset = 0;
		},
		transform: function (data) {
			/* performs a transformation on the schema so that the resulting data matches the schema 
			paramType="object" the data to transform
			returnType="object" the transformed data
			*/
			var ndata = []; // the resulting normalized data 
			// transform data according to the fields
			switch (this._type) {
			case "array":
				ndata = this._arrays(data);
				break;
			case "json":
				ndata = this._json(data);
				break;
			case "xml":
				ndata = this._xml(data);
				break;
			case "htmlTableDom":
				ndata = this._table(data);
				break;
			case "htmlListDom":
				ndata = this._list(data);
				break;
			default:
				throw new Error('unknown data source type: ' + this._type);
				//break;
			}
			return ndata;
		},
		_setResKey: function (resKey, out) {
			if (!this.isEmpty(resKey)) {
				out[resKey] = []; // was {}
				return out[resKey];
			}
			return out;
		},
		_convertType: function (t, obj, pk, key) {
			if (t === "string") {
				return this._parser.toStr(obj);
			}
			if (t === "date") {
				return this._parser.toDate(obj, pk, key);
			}
			if (t === "number") {
				return this._parser.toNumber(obj);
			}
			if (t === "boolean" || t === "bool") {
				return this._parser.toBool(obj);
			}
			// no type conversion / unknown type
			return obj;
		},
		//_val: function (field, val, results, i, j, rec) {
		_val: function (field, val, results, i, rec) {
			// return this to the state before 28 Nov
			var t = field.type, j;
			if (!this.isEmpty(t)) {
				if (this.isEmpty(field.name)) {
					results[i][j] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name);
				} else {
					results[i][field.name] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name);
				}
			} else {
				if (this.isEmpty(field.name)) {
					//results[i][j] = val;
					if (rec) {
						results[i][j] = rec[i][j];
					} else {
						results[i][j] = val;
					}
				} else {
					//results[i][field.name] = val;
					if (rec) {
						// we must copy the whole object refrence, in order to get "by reference" types. 
						results[i][field.name] = rec[i][field.name];
					} else {
						results[i][field.name] = val;
					}
				}
			}
		},
		isEmpty: function (o) {
			/* specifies if the object is null, undefined, or an empty string 
			paramType="object" the object to check for being empty
			returnType="boolean"
			*/
			return o === undefined || o === null || o === "";
		},
		_arrays: function (data) {
			var i, j, tmp, hasArrays, resKey = this.schema.outputResultsName, out = {}, results;
			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			// object is empty and is not an array
			if (this.isObjEmpty(results) && $.type(results) !== "array") {
				results = [];
				out = results;
			}
			try {
				//A.T. 12 July 2011
				/*
				if (!this.isEmpty(this.schema.searchField)) {
				//data = eval("data." + this.schema.searchField);
				path = this.schema.searchField.split(".");
				if (path.length > 0) {
				for (i = 0; i < path.length; i++) {
				data = data[path[i]];
				}
				}
				}
				*/

				if (data.length > 0) {
					hasArrays = $.type(data[0]) === 'array';
				}
				for (i = 0; i < data.length; i++) {
                    // L.A. 23 May 2012 - Fixed bug #112518 The grid cannot bind to an associative JavaScript array (which has one or more undefined items)
                    if (data[i] === undefined) {
                        continue;
                    }
					results.push({});
					for (j = 0; j < this.schema.fields.length; j++) {
						if (hasArrays) {
							tmp = data[i][j];
						} else {
							tmp = data[i][this.schema.fields[j].name];
						}
                        // L.A. 23 May 2012 - Fixed bug #112518 The grid cannot bind to an associative JavaScript array (which has one or more undefined items)
						this._val(this.schema.fields[j], tmp, results, results.length - 1);
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingArrays + e.message);
			}
			return out;
		},
		// the data that comes is expected to be already evaluated 
		_json: function (data) {
			var i, j, root, resKey = this.schema.outputResultsName, out = {}, results, pkObj = {};
			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results;
			}
			try {
				if (data.Metadata && data.Metadata.timezoneOffset !== undefined && !isNaN(data.Metadata.timezoneOffset)) {
					this._serverOffset = data.Metadata.timezoneOffset;
					this._parser._serverOffset = this._serverOffset;
					// we need the offsets for every particular date
					if (data.Metadata.timezoneOffsets) {
						this._serverOffsets = data.Metadata.timezoneOffsets;
						this._parser._serverOffsets = data.Metadata.timezoneOffsets;
					}
				} else {
					this._parser._serverOffset = 0;
				}
				// find the object holding the data
				if (!this.isEmpty(this.schema.searchField)) {
					root = eval("data." + this.schema.searchField);
					// L.A. 14 January 2013 - Fixing bug #130634 - JS errors when having a second child layout and using knockout.
					if (!root && $.type(data) === "array") {
						root = data;
					}
				}
				// L.A. 02 October 2012 - Fixing bug #123398 
				// [Hierarchical Grid Knockoutjs Integration] Expanding a row in the hierarchical grid causes a JS error
				if (root === undefined || this.isEmpty(this.schema.searchField)) {
					root = data;
				}
				if (!root.length && $.type(root) === "object") {
					root = [root];
				}
				// traverse root
				if (root && root.length && root.length > 0) {
					// L.A. 14 January 2013 - Fixing bug #130603 
					// When the PK column is not the first defined and enableUTCDates is true the dates columns are not correct.
					if (this._pk) {
						for (j = 0; j < this.schema.fields.length; j++) {
							if (this.schema.fields[j].name === this._pk) {
								pkObj = this.schema.fields[j];
								break;
							}
						}
					}
					for (i = 0; i < root.length; i++) {
						results[i] = {};
						// L.A. 14 January 2013 - Fixing bug #130603 
						// When the PK column is not the first defined and enableUTCDates is true the dates columns are not correct.
						if (this._pk) {
							this._val(pkObj, root[i][pkObj.name], results, i, root);
						}
						for (j = 0; j < this.schema.fields.length; j++) {
							// L.A. 14 January 2013 - Fixing bug #130603 
							// When the PK column is not the first defined and enableUTCDates is true the dates columns are not correct.
							if (this.schema.fields[j].name !== "ig_pk" && (this.schema.fields[j].name !== this._pk)) {
								if (root[i][this.schema.fields[j].name] === undefined) {
									// the input data doesn't match the schema
									throw new Error($.ig.DataSourceLocale.locale.errorSchemaMismatch + this.schema.fields[j].name);
								}
								this._val(this.schema.fields[j], root[i][this.schema.fields[j].name], results, i, root);
							}
						}
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingJson + e.message);
			}
			return out;
		},
		// the data that comes is already expected to be a parsed XML document object 
		_xml: function (data, recursiveSF) {
			var i, j, root, resNode, item, resKey = this.schema.outputResultsName, out = {}, results, namespaced, sf, k, r, rc, len1, len2, o, carrysf, ireal = 0;
			o = window.ActiveXObject;
			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results;
			}
			try {
				// find the searchField, if set
				// data is assumed to be a XML document 
				if (!this.isEmpty(this.schema.searchField)) {

					// it makes a big difference if the XML has namespace declarations (xmlns) or not
					// in the first case, we cannot use XPath expressions reliably directly, because 
					// they won't return any matches. Therefore if the XML is namespaced, we are going to 
					// manually traverse it and find matches by parsing the xpath expression (search field)
					// which will also sacrifice performance a bit
					namespaced = this._xmlHasNamespaces(data);
					if (!namespaced) {
						if (window.ActiveXObject === undefined) {
							if (!recursiveSF || recursiveSF.length <= 0) {
								root = data.evaluate(this.schema.searchField, data, null, XPathResult.ANY_TYPE, null);
							} else {
								root = data.evaluate(recursiveSF, data, null, XPathResult.ANY_TYPE, null);
							}
						} else {
                            // M.H. 12 Mar 2013 Fix for bug #135224: [igDataSource] Exception is thrown  when opening Stock Quotes sample in IE10
                            if (typeof(data.selectNodes) === "undefined") {
                                var s = new XMLSerializer().serializeToString(data);
                                data = new window.ActiveXObject("Microsoft.XMLDOM");
                                data.async = false;
                                data.loadXML(s);
                            }
							root = data.selectNodes(this.schema.searchField);
						}
					} else {
						// find the elements list manually
						if (this.schema.searchField.startsWith("//")) {
							sf = this.schema.searchField.substring(2, this.schema.searchField.length);
						} else {
							sf = this.schema.searchField;
						}
						// find *the first* instance, and assume it's parent will hold them all ! 
						root = this._findXmlRecordsRoot(data, sf);
					}
				} else {
					root = data;
				}
				// IEs
				if (!namespaced) {
					if (root && window.ActiveXObject !== undefined) {
						for (i = 0; i < root.length; i++) {
							item = root.item(i);
							results[i] = {};
							for (j = 0; j < this.schema.fields.length; j++) {
								// evaluate the xpath for the field, for the current item, if it is present
								resNode = item.selectSingleNode(this.schema.fields[j].xpath);
								if (resNode) {
									// If the node is an element then recursively go through the elements
									if (resNode.nodeType === 1 && this.schema.childDataProperty && resNode.nodeName === this.schema.childDataProperty) {
										this.schema.searchField = this.schema.childDataProperty;
										results[i][resNode.nodeName] = this._xml(item);
									} else {
										this._val(this.schema.fields[j], resNode.text, results, i);
									}
								} else {
									results[i][this.schema.fields[j].name] = "";
								}
							}
						}
					} else if (root) { // FF, Opera, Safari, Chrome etc. 
						i = 0;
						item = root.iterateNext();
						while (item) {
							results[i] = {};
							for (j = 0; j < this.schema.fields.length; j++) {
								// evaluate the xpath for the field, for the current item, if it is present
								resNode = data.evaluate(this.schema.fields[j].xpath, item, null, XPathResult.ANY_TYPE, null).iterateNext();
								if (resNode) {
									// If the node is an element then recursively go through the elements
									if (resNode.nodeType === 1 && this.schema.childDataProperty && (resNode.nodeName === this.schema.childDataProperty || resNode.nodeName === this.schema.seachField)) {
										if (!recursiveSF || recursiveSF.length <= 0) {
											carrysf = this.schema.searchField + '[' + (i + 1) + ']/' + this.schema.childDataProperty;
										} else {
											carrysf = recursiveSF + '[' + (i + 1) + ']/' + this.schema.childDataProperty;
										}
										results[i][this.schema.childDataProperty] = this._xml(data, carrysf);
									} else {
										this._val(this.schema.fields[j], resNode.textContent, results, i);
									}
								} else {
									results[i][this.schema.fields[j].name] = "";
								}
							}
							i++;
							item = root.iterateNext();
						}
					}
				} else {
					// list a list of records accessible by the childNodes prop
					len1 = root.childNodes.length;
					ireal = 0;
					for (i = 0; i < len1; i++) {
						r = root.childNodes[i];
						results.push({});
						for (j = 0; j < this.schema.fields.length; j++) {
							// think about how to optimize this, like that it could be awfully slow for bigger data sets ... 
							len2 = r.childNodes.length;
							for (k = 0; k < len2; k++) {
								rc = r.childNodes[k];
								if (this.schema.fields[j].name === (o === undefined ? rc.localName : rc.baseName)) {
									this._val(this.schema.fields[j], o === undefined ? rc.textContent : rc.text, results, ireal);
									break;
								}
							}
						}
						// check for empty object
						if ($.isEmptyObject(results[ireal])) {
							results.pop();
						} else {
							ireal++;
						}
					}
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingXml + e.message);
			}
			return out;
		},
		// recursively find the parent root record holding the children
		_findXmlRecordsRoot: function (data, field) {
			var i, len, r, o, ret;
			o = window.ActiveXObject;
			if ((o === undefined ? data.localName : data.baseName) === field) {
				ret = data.parentNode;
			} else if (data && data.childNodes && data.childNodes.length > 0) {
				len = data.childNodes.length;
				for (i = 0; i < len; i++) {
					r = data.childNodes[i];
					//if ((o === undefined ? r.localName : r.baseName) === field) {
					//	ret = data;
					//}
					if (r.childNodes && r.childNodes.length > 0) {
						ret = this._findXmlRecordsRoot(r, field);
					}
				}
			}
			return ret;
		},
		_xmlHasNamespaces: function (data) {
			// in order not to introduce big performance hits, we are going to only to check the root elements, and the first child of the root, for 
			// "xmlns" attributes
			var i, ns, r, len, fc;
			if (data.childNodes && data.childNodes.length && data.childNodes.length > 0) {
				len = data.childNodes.length;
				for (i = 0; i < len; i++) {
					r = data.childNodes[i];
					if (!r) {
						return false;
					}
					ns = r.namespaceURI;
					if (ns !== "" && ns !== undefined && ns !== null) {
						return true;
					}
				}
				// if we still haven't found a namespace, try the first child element
				if (r && r.childNodes && r.childNodes.length > 0) {
					fc = r.childNodes[0];
					if (!fc) {
						return false;
					}
					ns = fc.namespaceURI;
					return (ns !== "" && ns !== undefined && ns !== null);
				}
			}
			return false;
		},
		_table: function (data) {
			// the assumption is that "data" contains the table DOM element. 
			var i, j, r, tbody, rows, resKey = this.schema.outputResultsName, out = {}, results;
			tbody = $(data).find("tbody")[0];

			// if there are headers, remove them. the grid will create its own. 
			// L.A. 15 August 2012 Fixing bugs #118934, #74552
			//$(data).find('thead').remove();

			// optionally, a developer may decide to set all contents directly in the output object 
			results = this._setResKey(resKey, out);
			if (this.isObjEmpty(results)) {
				results = [];
				out = results;
			}
			try {
				if (tbody && tbody.nodeName && tbody.nodeName === "TBODY") {
					rows = tbody.rows;
					for (i = 0; i < rows.length; i++) {
						r = rows[i];
						results[i] = {};
						// iterate through the fields
						for (j = 0; j < this.schema.fields.length; j++) {
							this._val(this.schema.fields[j], r.cells[j].innerHTML, results, i);
						}
					}
				} else {
					throw new Error($.ig.DataSourceLocale.locale.errorExpectedTbodyParameter);
				}
			} catch (e) {
				throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTable + e.message);
			}
			return out;
		},
		_list: function (data) {
			var parsedData, img, anchor, id, li, ul, self = this, d = $(data), text, i, header, descriptions, counts, jqmNS = "data-";
			if ($.mobile && $.mobile.ns) {
				jqmNS += $.mobile.ns;
			}

			parsedData = [];

			// Text: text
			// Value: value
			// ImageUrl: imageUrl
			// NavigateUrl: navigateUrl
			// ChildDataProperty: childData
			// Anchor Target: target
			// H1, H2, H3, H4, H5, H6: header (taken out of text)
			// p, dd: description (taken out of text)
			// Span with ui-li-count class: count
			// li has jqm data role of list divider sets isDivider
			// Index of li will become a primary key
			// Include any additional identifiers here and before extracting them, make a check for hasOwnProperty
			if (d && (d.is('ul') || d.is('ol')) && d.children().length > 0) {
				d.children('li:not([' + jqmNS + 'role="itemTemplate"], [' + jqmNS + 'role="detailsTemplate"], [' + jqmNS + 'role="dividerTemplate"])').each(function (index) {
					li = $(this);
					img = li.children('img');
					// Init the parsed data parts
					parsedData[index] = {};
					// Parse logic
					if (self.schema.hasOwnProperty('primaryKey')) {
						self._val(self.schema.primaryKey, li.index(), parsedData, index);
					}
					if (self.schema.hasOwnProperty('isDivider')) {
						self._val(self.schema.isDivider, li.attr(jqmNS + "role") === "list-divider", parsedData, index);
					}
					if (img.length > 0 && img.attr('src')) {
						if (self.schema.hasOwnProperty('imageUrl')) {
							self._val(self.schema.imageUrl, img.attr('src'), parsedData, index);
						}
					}
					anchor = li.children('a');
					if (anchor.length > 0) {
						// K.D. February 20th, 2012 Bug #101873 Switching from extracting text only to extracting
						// all of the contents of the anchor. This feature was requested by PG.
						text = anchor.html();
						if (anchor.attr('href')) {
							if (self.schema.hasOwnProperty('navigateUrl')) {
								self._val(self.schema.navigateUrl, anchor.attr('href'), parsedData, index);
							}
						}
						if (anchor.attr('target')) {
							if (self.schema.hasOwnProperty('target')) {
								self._val(self.schema.target, anchor.attr('target'), parsedData, index);
							}
						}
						if (img.length === 0) {
							img = anchor.children('img');
							if (img.length > 0) {
								img.each(function () {
									if (this.outerHTML) {
										text = text.replace(this.outerHTML, '');
									} else {
										text = text.replace($("<div>").append(this).html(), '');
									}
								});
								/* text = text.replace($("<div>").append(img[0]).html(), ''); // remove just first image from the text */
							}
							if (img.length > 0 && img.attr('src')) {
								if (self.schema.hasOwnProperty('imageUrl')) {
									self._val(self.schema.imageUrl, img.attr('src'), parsedData, index);
								}
							}
						}
					} else {
						text = '';
						for (i = 0; i < li[0].childNodes.length; i++) {
							if (li[0].childNodes[i].nodeType === 3 && li[0].childNodes[i].data) {
								text += $.trim(li[0].childNodes[i].data);
							}
						}

					}
					if (self.schema.hasOwnProperty('header')) {
						header = li.children('h1, h2, h3, h4, h5, h6');
						if (header.length === 0 && anchor.length > 0) {
							header = anchor.children('h1, h2, h3, h4, h5, h6');
						}
						if (header.length > 0) {
							self._val(self.schema.header, header.text(), parsedData, index);
							header.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, '');
								} else {
									text = text.replace($("<div>").append(this).html(), '');
								}
							});
						}
					}
					if (self.schema.hasOwnProperty('description')) {
						descriptions = li.children('p, dd');
						if (descriptions.length === 0 && anchor.length > 0) {
							descriptions = anchor.children('p, dd');
						}
						if (descriptions.length > 0) {
							self._val(self.schema.description, descriptions.text(), parsedData, index);
							descriptions.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, '');
								} else {
									text = text.replace($("<div>").append(this).html(), '');
								}
							});
						}
					}
					if (self.schema.hasOwnProperty('count')) {
						counts = li.children('span.ui-li-count');
						if (counts.length === 0 && anchor.length > 0) {
							counts = anchor.children('span.ui-li-count');
						}
						if (counts.length > 0) {
							self._val(self.schema.count, parseInt(counts.text(), 10), parsedData, index);
							counts.each(function () {
								if (this.outerHTML) {
									text = text.replace(this.outerHTML, '');
								} else {
									text = text.replace($("<div>").append(this).html(), '');
								}
							});
						}
					}
					if (self.schema.hasOwnProperty('text')) {
						self._val(self.schema.text, text, parsedData, index);
					}
					id = li.attr('id');
					if (id) {
						if (self.schema.hasOwnProperty('value')) {
							self._val(self.schema.value, id, parsedData, index);
						}
					}
					ul = li.children('ul, ol');
					if (ul.length > 0) {
						if (self.schema.hasOwnProperty('childData') && self.schema.childData.hasOwnProperty('name')) {
							parsedData[index][self.schema.childData.name] = self._list(ul);
						}
					}
				});
			}
			return parsedData;
		},
		isObjEmpty: function (obj) {
			/* specifies if the object has custom properties or not 
			paramType="object" the object to check for presence or lack of custom properties
			returnType="boolean" 
			*/
			var prop;
			for (prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					return false;
				}
			}
			return true;
		},
		fields: function () {
			/* type="array" A list of field definitions specifying the schema of the data source. Field objects description: {fieldName, [fieldDataType], [fieldXPath]} */
			return this.schema.fields;
		}
	});
	// Helper/wrapper classes for $.ig.DataSource 
	$.ig.RemoteDataSource = $.ig.RemoteDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "remoteUrl";
			this._super(options);
			return this;
		}
	});
	$.ig.JSONDataSource = $.ig.JSONDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "json";
			this._super(options);
			return this;
		}
	});
	$.ig.RESTDataSource = $.ig.RESTDataSource || $.ig.DataSource.extend({
		settings: {
			/* Settings related to REST compliant update routine */
			restSettings: {
				/* Settings for create requests */
				create: {
					/* type="string" specifies a remote URL to which create requests will be sent. This will be used for both batch and non-batch, however if template is also set, this URL will only be used for batch requests. */
					url: null,
					/* type="string" specifies a remote URL template. Use ${id} in place of the resource id. */
					template: null,
					/* type="bool" specifies whether create requests will be sent in batches */
					batch: false
				},
				/* Settings for update requests */
				update: {
					/* type="string" specifies a remote URL to which update requests will be sent. This will be used for both batch and non-batch, however if template is also set, this URL will only be used for batch requests. */
					url: null,
					/* type="string" specifies a remote URL template. Use ${id} in place of the resource id. */
					template: null,
					/* type="bool" specifies whether update requests will be sent in batches */
					batch: false
				},
				/* Settings for remove requests */
				remove: {
					/* type="string" specifies a remote URL to which remove requests will be sent. This will be used for both batch and non-batch, however if template is also set, this URL will only be used for batch requests. */
					url: null,
					/* type="string" specifies a remote URL template. Use ${id} in place of the resource id. */
					template: null,
					/* type="bool" specifies whether update requests will be sent in batches */
					batch: false
				},
				/* type="bool" specifies whether the ids of the removed resources are send through the request URI */
				encodeRemoveInRequestUri: true,
				/* type="function" specifies a custom function to serialize content sent to the server. It should accept a single object or an array of objects and return a string. If not specified, JSON.stringify() will be used. */
				contentSerializer: null,
				/* type="string" specifies the content type of the request */
				contentType: 'application/json; charset=utf-8'
			}
		},
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.restSettings = $.extend(true, this.settings.restSettings, options.restSettings);
			this._createHttpHandlers();
			this._createLogVerbMapping();
			this._setLazyUrls();
			this._super(options);
			return this;
		},
		saveChanges: function () {
			// use $.ajax with the HTTP verb for every type of CRUD operation on the specified URL
			// for each entry in the transaction log create a new request
			// if batching is enabled create seperate arrays and send together
			var log, verb, batchOps = { "POST" : [], "PUT" : [], "DELETE" : [], "CELL" : []}, i;
			// set new callback count
			this._asyncCallbackCount = 0;
			for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
				log = this._accumulatedTransactionLog[i];
				verb = this._logVerbMap[log.type];
				if (log.type === "cell") {
					batchOps.CELL.push(log);
				} else if (this._isBatch(verb) === true) {
					batchOps[verb].push(log);
				} else {
					this._asyncCallbackCount++;
					this._saveSingleChange(verb, log);
				}
			}
			if (batchOps.CELL.length > 0) {
				this._saveAllCellChanges(batchOps.CELL);
			}
			if (batchOps.POST.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllCreateChanges(batchOps.POST);
			}
			if (batchOps.PUT.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllUpdateChanges(batchOps.PUT);
			}
			if (batchOps.DELETE.length > 0) {
				this._asyncCallbackCount++;
				this._saveAllDeleteChanges(batchOps.DELETE);
			}
		},
		_saveSingleChange: function (verb, change) {
			/* saves a single (nonbatch) transaction */
			var data, url;
			data = (verb === "POST" || verb === "PUT") ? change.row : null;
			url = this._getProperUrl(verb, false, (verb === "DELETE" || verb === "PUT") ? change.rowId : undefined);
			this._call(verb, url, data);
		},
		_saveAllCellChanges: function (cellLogs) {
			var i, combined = {}, rowLogs = [], cl;
			for (i = 0; i < cellLogs.length; i++) {
				cl = cellLogs[i];
				if (combined[cl.rowId] === undefined) {
					combined[cl.rowId] = {};
					combined[cl.rowId].row = this.findRecordByKey(cl.rowId);
				}
				combined[cl.rowId].row[cl.col] = cl.value;
			}
			// normalize
			$.each(combined, function (key, value) {
				value.rowId = key;
				rowLogs.push(value);
			});
			if (this._isBatch('PUT') === true) {
				this._asyncCallbackCount++;
				this._saveAllUpdateChanges(rowLogs);
			} else {
				for (i = 0; i < rowLogs.length; i++) {
					this._asyncCallbackCount++;
					this._saveSingleChange('PUT', rowLogs[i]);
				}
			}
		},
		_saveAllCreateChanges: function (createLogs) {
			var data = [], i;
			for (i = 0; i < createLogs.length; i++) {
				data.push(createLogs[i].row);
			}
			this._call('POST', this._getProperUrl('POST', true), data);
		},
		_saveAllUpdateChanges: function (updateLogs) {
			var data = [], urlParams = "?", i;
			for (i = 0; i < updateLogs.length; i++) {
				data.push(updateLogs[i].row);
				urlParams += "index=" + updateLogs[i].rowId + (i !== updateLogs.length - 1 ? "&" : "");
			}
			this._call('PUT', this._getProperUrl('PUT', true) + urlParams, data);
		},
		_saveAllDeleteChanges: function (deleteLogs) {
			var urlParams = "", i, data = null;
			if (this.settings.restSettings.encodeRemoveInRequestUri === true) {
				urlParams = "?";
				for (i = 0; i < deleteLogs.length; i++) {
					urlParams += "index=" + deleteLogs[i].rowId + (i !== deleteLogs.length - 1 ? "&" : "");
				}
			} else {
				data = [];
				for (i = 0; i < deleteLogs.length; i++) {
					data.push(deleteLogs[i].rowId);
				}
			}
			this._call('DELETE', this._getProperUrl('DELETE', true) + urlParams, data);
		},
		_createHttpHandlers: function () {
			// Adding only success related handlers
			//  handle errors accurately
			this._okHandler = $.proxy(this._responseOk, this);
			this._createdHandler = $.proxy(this._responseCreated, this);
			this._noContentHandler = $.proxy(this._responseNoContent, this);
			this._httpHandlers = {
				"POST" : {
					"201": this._createdHandler
				},
				"PUT" : {
					"200": this._okHandler,
					"201": this._createdHandler,
					"204": this._noContentHandler
				},
				"DELETE" : {
					"200": this._okHandler,
					"204": this._noContentHandler
				}
			};
		},
		_createLogVerbMapping: function () {
			this._logVerbMap = {
				"newrow": "POST",
				"row": "PUT",
				"deleterow": "DELETE",
				"cell": "PUT"
			};
		},
		_setLazyUrls: function () {
			var rs = this.settings.restSettings, tempUrl = null, tempTmpl = null;
			// get a single set value
			$.each(rs, function (key, value) {
				if (value) {
					if (value.url) {
						tempUrl = value.url;
					}
					if (value.template) {
						tempTmpl = value.template;
					}
				}
			});
			// use temp value on null options
			$.each(rs, function (key, value) {
				if (value) {
					if (value.url !== undefined && value.url === null) {
						value.url = tempUrl;
					}
					if (value.template !== undefined && value.template === null) {
						value.template = tempTmpl;
					}
				}
			});
			// set private urls
			this._putUrl = rs.update.url;
			this._putTmpl = rs.update.template;
			this._postUrl = rs.create.url;
			this._postTmpl = rs.create.template;
			this._deleteUrl = rs.remove.url;
			this._deleteTmpl = rs.remove.template;
		},
		_getProperUrl: function (verb, batch, id) {
			var vL = verb.toLowerCase(), url = this["_" + vL + "Url"];
			if (url && url.length > 0 && url.substr(url.length - 1) !== "/") {
				url += "/";
			}
			if (!batch || batch === false) {
				if (this["_" + vL + "Tmpl"] !== null) {
					url = this["_" + vL + "Tmpl"];
					if (id) {
						url = url.replace("${id}", id);
					}
				} else {
					if (id) {
						url += id;
					}
				}
			}
			return url;
		},
		// All success codes are currently doing the same thing - decreasing the async callback count and checking if
		// all async operations completed. If a more sophisticated status handling is required in the future these can be
		// changed accordingly.
		_responseOk: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({ Success: textStatus === "success" }, textStatus, jqXHR);
			}
		},
		_responseCreated: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({ Success: textStatus === "success" }, textStatus, jqXHR);
			}
		},
		_responseNoContent: function (data, textStatus, jqXHR) {
			this._asyncCallbackCount--;
			if (this._asyncCallbackCount === 0) {
				this._saveChangesSuccess({ Success: textStatus === "success" }, textStatus, jqXHR);
			}
		},
		_isBatch: function (verb) {
			switch (verb) {
			case "POST":
				return this.settings.restSettings.create.batch;
			case "PUT":
				return this.settings.restSettings.update.batch;
			case "DELETE":
				return this.settings.restSettings.remove.batch;
			default:
				return false;
			}
		},
		_call: function (verb, url, data) {
			var dataString, serializer = this.settings.restSettings.contentSerializer;
			if (serializer !== null) {
				// we can set the serializer as a string when initializing 
				// the widget from an MVC wrapper
				if (typeof serializer === "string") {
					serializer = window[serializer];
				}
			}
			dataString = serializer !== null ? serializer(data) : JSON.stringify(data);
			$.ajax({
				type: verb,
				url: url,
				data: dataString,
				statusCode: this._httpHandlers[verb],
				contentType: this.settings.restSettings.contentType,
				cache: false,
				processData: true
			});
		}
	});
	$.ig.JSONPDataSource = $.ig.JSONPDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.responseDataType = 'jsonp';
			this._super(options);
			return this;
		}
	});
	$.ig.XmlDataSource = $.ig.XmlDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "xml";
			this._super(options);
			return this;
		}
	});
	$.ig.FunctionDataSource = $.ig.FunctionDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "function";
			this._super(options);
			return this;
		}
	});
	// the dataSource should be a reference to a DOM element
	$.ig.HtmlTableDataSource = $.ig.HtmlTableDataSource || $.ig.DataSource.extend({
		init: function (options) {

			if (!options) {
				options = {};
			}
			options.type = "htmlTableDom";
			this._super(options);
			return this;
		}
	});
	$.ig.ArrayDataSource = $.ig.ArrayDataSource || $.ig.DataSource.extend({
		init: function (options) {
			if (!options) {
				options = {};
			}
			options.type = "array";
			this._super(options);
			return this;
		}
	});
	// the idea of the mashup data source is to combine several flat data sources from different locations into a single one
	// primary key matching is performed if keys are defined in the respective flat DataSource instances
	// after the mashup is processed, a combined data view and data instances are created and paging / sorting / filtering can work *locally* on the mashup
	// when some of the mashup sources is remote, callbacks are executed in order, and the final data binding part to combine the mashup
	// is called only when all of the individual data sources are data bound 
	$.ig.MashupDataSource = $.ig.MashupDataSource || $.ig.DataSource.extend({
		// the mashup data source is an array of flat data sources, which could be anything: local / remote / XML / JSON, etc. 
		// if an element in the dataSource array is not of type $.ig.DataSource, then it is assumed to be in the following format:
		// {options } 
		// where options will be used to create an $.ig.DataSource instance , example:
		//	var sources = [
		//		{dataSource: namedData, primaryKey: "ProductID"}, 
		//		{dataSource: "/demos/server/proxy.php?url=http://services.odata.org/OData/OData.svc/Products?$format=json", primaryKey: "ID"}
		//	];
		//	
		//	var ds = new $.ig.MashupDataSource({callback:render, dataSource: sources});
		//	ds.dataBind();
		//
		/* type="object" Defines the configuration setting for the mashup data source. */
		mashupSettings: {
			/* type="bool" Indicates whether to ignore records that have no corresponding data in all of the provided data sources. */
			ignorePartialRecords: false,
			/* type="array" An array of $.ig.DataSource instances holding the disperse data. */
			dataSource: []
		},
		init: function (options) {
			// initialize $.ig.DataSource
			this._super(options);
			if (options) {
				this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
				this.settings = $.extend(true, {}, $.ig.MashupDataSource.prototype.mashupSettings, this.settings);
			}
			// a list of flat data sources from which the mashup will be created 
			this._sources = [];
			this._dataBindingComplete = false;
			this._sourcesStatus = [];
			this._hashedDataViews = [];

			return this;
		},
		_checkDataBindingComplete: function (status, msg, ownerDs) {
			// once this is done, set it as dataSource of the actual mashup data source, and call super's dataBind()
			var i, j, k, hasPrimaryKeys = true, totalLength = 0, data = [], d, rindex, keyVal, prop;

			this._dataBindingComplete = true;

			for (i = 0; i < this._sources.length; i++) {
				if (this._sources[i] === ownerDs) {
					this._sourcesStatus[i] = 1;
				}

				if (this._sourcesStatus[i] === 0) {
					this._dataBindingComplete = false; // still expecting some data source 
				}
			}
			// now that we have all separate data sources bound individually, and their dataViews filled with data 
			// we start assembling the mashup data source, by doing indexing on the primary keys (if defined)
			if (this._dataBindingComplete) {
				// check if there are primary keys defined for every individual data source 
				for (i = 0; i < this._sources.length; i++) {
					if (this._sources[i].settings.primaryKey === "" || this._sources[i].settings.primaryKey === null || this._sources[i].settings.primaryKey === undefined) {
						hasPrimaryKeys = false;
						break;
					}
				}
				// 1. determine the number of rows = max ( data source length) , also depending on the value of ignorePartialRecords
				// the data source with the largest number of records defines the mashup data source length 
				totalLength = this._sources[0].dataView().length;
				for (i = 0; i < this._sources.length; i++) {
					totalLength = this.settings.ignorePartialRecords ?
							(this._sources[i].dataView().length < totalLength ? this._sources[i].dataView().length : totalLength) :
							(this._sources[i].dataView().length > totalLength ? this._sources[i].dataView().length : totalLength);
				}
				// this also implies that there is schema present 
				if (hasPrimaryKeys) {
					// perform indexing based on the primary keys
					// for each data source, create hashes 
					for (i = 0; i < this._sources.length; i++) {
						this._hashedDataViews[i] = {};
						//consider the scenario where "primaryKey" is set to more than one field 
						// now iterate the records of the respective data source
						for (j = 0; j < this._sources[i].dataView().length; j++) {
							this._hashedDataViews[i][this._sources[i].dataView()[j][this._sources[i].settings.primaryKey]] = this._sources[i].dataView()[j];
						}
					}
					// now fill-in the "data":
					for (i = 0; i < totalLength; i++) {
						data[i] = {};
						// merge the objects
						for (j = 0; j < this._sources.length; j++) {
							if (this._sources[j].dataView().length > i) {
								keyVal = this._sources[j].dataView()[i][this._sources[j].settings.primaryKey];
								data[i] = $.extend(true, {}, data[i], this._hashedDataViews[j][keyVal]);
								//this._sources[j].dataView().length > i ? this._hashedDataViews[j][keyVal] : {});
							} else {
								data[i] = $.extend(true, {}, data[i], {});
							}
						}
					}
				} else {
					// the easiest - no primary keys, process sequentially record by record 
					for (i = 0; i < totalLength; i++) {
						data[i] = {};
						for (j = 0; j < this._sources.length; j++) {
							d = this._sources[j];
							if (d.dataView()[0].length) {
								for (k = 0; k < d.dataView()[0].length; k++) {
									// check if there is schema defined or not 
									rindex += k;
									if (d.schema() && d.schema().fields().length > 0) {
										data[i][d.schema().fields()[k]] = i >= d.dataView().length ? '' : d.dataView()[i][d.schema().fields()[k]];
									} else {
										data[i][rindex] = i >= d.dataView().length ? '' : d.dataView()[i][k];
									}
								}
							} else {
								for (prop in d.dataView()[i]) {
									if (d.dataView()[i].hasOwnProperty(prop)) {
										//if (d.schema() && d.schema().fields().length > 0) {
										//	data[i][d.schema().fields().prop] = i >= d.dataView().length ? '' : d.dataView()[i][d.schema().fields().prop];
										//} else {
										data[i][prop] = i >= d.dataView().length ? '' : d.dataView()[i][prop];
										//}
									}
								}
							}
						}
						rindex = 0;
					}
				}
				this.settings.dataSource = data;
				this.settings.type = "array";
				this._runtimeType = this.analyzeDataSource();
				// finally call the data binding of the mashup 
				this.dataBind();
			}
		},
		dataBind: function () {
			var i, ds = this.settings.dataSource;
			if (this._dataBindingComplete) {
				// we can proceed to data binding the mashup 
				this._dataBindingComplete = false; // reset 
				this._super();
			} else {
				// setup the mashup for binding its individual data sources 
				this._dataBindingComplete = false;
				// traverse the sources and instantiate a data source object, if not already passed as parameter 
				for (i = 0; i < ds.length; i++) {
					if (ds[i] instanceof $.ig.DataSource) {
						this._sources[i] = ds[i];
					} else if (ds[i].hasOwnProperty('dataSource') && ds[i].dataSource instanceof $.ig.DataSource) {
						// K.D. November 17th, 2011 Bug #83399 There are cases where the dataSource property of the 
						// individual member is set to an $.ig.DataSource
						this._sources[i] = ds[i].dataSource;
					} else {
						this._sources[i] = new $.ig.DataSource(ds[i]);
					}
					// now data bind
					// attach a callback that will keep track of the data binding progress of all individual data sources
					this._sources[i].settings.callee = this;
					this._sources[i].settings.callback = this._checkDataBindingComplete;
					this._sourcesStatus[i] = 0; // mark the data source as not bound yet 
				}
				for (i = 0; i < ds.length; i++) {
					this._sources[i].dataBind();
				}
			}
			return this;
		}
	});
	//$.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || $.ig.DataSource.extend({
	// the hierarchical data source won't extend the flat one
	// as long as there is no paging or sorting or filtering, we don't need to create objects for flat ds'es
	$.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || Class.extend({
		settings: {
			// autogenerate will have limited support, since we cannot automatically infer which are the primary keys, therefore scenarios such as cascade delete or 
			// hierarchies when multiple flat sources are combined will not work correctly. 
			autogenerate: false, // if this property is true, the contents of "childbands" is ignored. 
			// load on demand support: always load only the top level
			// think about how to 'tell' the server that we do not want children to be loaded 
			initialDataBindDepth: 0,
			maxDataBindDepth: -1, // bind all levels by default
			defaultChildrenDataProperty: "children", // identifies the default property name in the data source where child nodes will be stored relative to their parent node/record
			//childbands: null, // a list of schemas and options, one for every level that we want to bind. Note that schemas here is different than relations. 
			// two defined schemas may have more than one relation defined. 
			//these two properties define if we want to do lazy loading based on virtualization, too. 
			// if virtualization is enabled, we may want to cache/load the data views for those records
			//startRecord: -1,
			//endRecord: -1
			callback: null,
			callee: null,
			data: [],
			dataSource: null,
			dataBinding: null,
			dataBound: null,
			// other options
			type: "unknown", // delegates to the flat data sources 
			responseDataType: null,
			responseContentType: null,
			localSchemaTransform: true,
			urlParamsEncoding: null,
			urlParamsEncoded: null,
			requestType: "GET",
			odata: false,
			paging: {

			},
			sorting: {

			},
			filtering: {

			},
			// all of the rest - paging, sorting, filtering, can be defined in the layouts definition, which will "override" the parent defs
			//IMPORTANT:  if there is no paging, sorting or filtering, an instance of $.ig.DataSource won't be created for child row islands 
			schema: [
			/* defined like this:
			{name: "someKey", type: "string", layouts: [
			{
			paging: { },
			sorting: { },
			filtering: { },
			childrenDataProperty: "children",
			foreignKey: "fk",
			// other flat grid specific props
			schema: [ ]
			}
			]},
			{name: "anotherKey", type: "string"}
				
			*/
			]
		},
		init: function (options) {
			// merge defaults with passed-in values 
			if (options) {
				this.__ds = options.dataSource;
				options.dataSource = null;
				this.settings = $.extend(true, {}, $.ig.HierarchicalDataSource.prototype.settings, options);
				this.settings.dataSource = this.__ds;
			}
			this._rootopts = this.settings;
			// necessary to push all of the layout children props 
			//this._rootopts.schema.fields.push({name: this.settings.defaultChildrenDataProperty});
			// depending on the value of initialDataBindDepth, we need to encode the URL so that load on demand works
			this._rootopts.urlParamsEncoded = $.proxy(this._encodeHierarchicalUrlParams, this);
			if (this._rootopts.dataSource instanceof $.ig.DataSource) {
				this._rootds = this._rootopts.dataSource;
				this._rootds.settings.urlParamsEncoded = this.settings.urlParamsEncoded;
				this._rootds.settings.odata = this.settings.odata;
				if (!this._rootds.settings.schema) {
					this._rootds.settings.schema = {};
				}
				this._rootds.settings.schema.layouts = this.settings.schema.layouts;
			} else {
				if ($.type(this._rootopts.dataSource) === "string" && this._rootopts.dataSource.indexOf("$callback=?") !== -1) {
					this._rootds = new $.ig.JSONPDataSource(this._rootopts);
				} else if (this._rootopts.restSettings &&
							(this._rootopts.restSettings.update.url !== null || this._rootopts.restSettings.update.template !== null ||
							this._rootopts.restSettings.create.url !== null || this._rootopts.restSettings.create.template !== null ||
							this._rootopts.restSettings.remove.url !== null || this._rootopts.restSettings.remove.template !== null)) {
					this._rootds = new $.ig.RESTDataSource(this._rootopts);
				} else {
					this._rootds = new $.ig.DataSource(this._rootopts);
				}
			}
		},
		dataBind: function (callback, callee) {
			// scenario -> paging on the top level, and then paging on a child level with different page size 
			// if it is local, there shouldn't be any problem
			// if it is remote, we need to additionally "craft" the URL of the root data source
			// additionally, when there is remote sorting, paging, or filtering on a child level, we must always pass the 
			// path in the child flat source

			//1. create a flat data source by creating its options first

			//2. check if the request is remote or local, if remote, "inject" the necessary additional URL parts (paging/sorting/filtering) so that the
			// correct data gets pulled out 
			// make sure the property marked with defaultChildrenDataProperty is part of he schema
			// also add all custom children data properties defined in custom layouts
			this._rootds.dataBind(callback, callee);
		},
		root: function () {
			if (!this._rootds) {
				this._rootds = new $.ig.DataSource(this._rootopts);
			}
			return this._rootds;
		},
		dataAt: function (path, keyspath) {
			// search the data. the data source must be indexed to speed up this access.
			var data = this.root().data(), paths = path.split("/"), kp = keyspath.split("/"), k, i, searchField = "Records",
				j, cd = null, ckey = this.settings.primaryKey, ckeyval = "", ckeys = [], ckeyvals = [], match = false;
			for (i = 0; i < paths.length; i++) {
				ckey = paths[i].split(":")[0];
				ckeyval = paths[i].split(":")[1];
				// NOTE: composite keys are keys whose values are separated by a comma. if ckey or ckeyval contain commas,
				// then the key is assumed to be composite and will be split based on ","
				if (paths[i] !== "") {
					for (j = 0; data && j < data.length; j++) {
						if (ckey && ckey.indexOf(",") !== -1) {
							ckeys = ckey.split(",");
							ckeyvals = ckeyval.split(",");
							for (k = 0; k < ckeys.length; k++) {
								if (!data[j][ckeys[k]].charAt && ckeyvals[k].charAt) {
									ckeyvals[k] = parseInt(ckeyvals[k], 10);
								}
								match = (data[j][ckeys[k]] === ckeyvals[k]);
								if (!match) {
									break;
								}
							}
						} else {
							if (data[j][ckey] !== undefined && !data[j][ckey].charAt && ckeyval.charAt) {
								ckeyval = parseInt(ckeyval, 10);
							}
							match = (data[j][ckey] === ckeyval);
						}
						// special case when we have responseDataKey / search fields defined for every children data instance
						if (match) {
							// get the children
							cd = data[j][kp[i]];
							// L.A. 14 January 2013 - Fixing bug #130634 - JS errors when having a second child layout and using knockout.
							searchField = this.root().schema && this.root().schema() && this.root().schema().schema ?
									this.root().schema().schema.searchField : searchField;
							if (paths.length > 1 && i < paths.length - 1 && $.type(cd) !== "array" && cd[searchField]) {
								cd = cd[searchField];
							}
							break;
						}
					}
					data = cd;
				}
			}
			return cd;
		},
		/*
		populate: function (path, callback, params) {
		// after data is populated, call "callback" with "args" as arguments
		var url, o;
		// 1. get the url of the root ds (this._rootopts.dataSource)
		url = this._rootopts.dataSource;
		// construct params based on opts
		o = {
		url: url,
		dataType: this._rootopts.responseDataType,
		async: true,
		context: this,
		cache: false,
		data: params,
		success: this._hierarchicalProcessResponse
		};
		$.ajax(o);
		},
		_hierarchicalProcessResponse: function (data) {
		// data must be an object that contains data sources for each respective layout, as well as a "path"
		// property which specifies the location if the parent row
			
		//1. get the path from the response and locate the additional data from the queue
		// XML? 
		},
		*/
		_encodeUrlPath: function (rowid, name) {
			// we need to encode the current parent record path, when child records have their data sources set
			return "path=" + rowid + "&layout=" + name;
		},
		_encodeHierarchicalUrlParams: function (owner, args) {
			var expand = "", layouts = this.settings.schema.layouts, i, j, tmp, name, lc = 0;
			if (this.settings.odata && this.settings.initialDataBindDepth !== 0) {
				// use the OData $expand API
				// http://www.odata.org/developers/protocols/uri-conventions#ExpandSystemQueryOption
				// parse the root layouts in order to construct the expand statement
				i = j = 0;
				for (name in layouts) {
					if (layouts.hasOwnProperty(name)) {
						lc++;
					}
				}
				lc++;
				/*
				for (name in layouts) {
				if (layouts.hasOwnProperty(name) && $.type(layouts[name]) !== "function") {
				tmp = layouts[name].key;
				currentLayout = layouts[name];
				while (currentLayout.columnLayouts) {
				for (child in currentLayout.columnLayouts) {
				if (currentLayout.columnLayouts.hasOwnProperty(child)) {
				currentLayout = currentLayout.columnLayouts[child];
				break;
				}
				// OData supports only one band (one relationship)
				}
				tmp += "/" + currentLayout.key;
				}
				if (i !== 0 && i !== lc - 1) {
				expand += ",";
				}
				expand += tmp;
				i++;
				}
				}
				*/
				for (name in layouts) {
					if (layouts.hasOwnProperty(name)) {
						if ($.type(layouts[name]) !== "function") {
							if (name.startsWith("/")) {
								name = name.substring(1, name.length - 1);
							}
							tmp = name.split("/");
							for (i = 0; i < tmp.length; i++) {
								tmp[i] = tmp[i].substring(0, tmp[i].indexOf(":"));
							}
							tmp = tmp.join("/");
							if (j !== 0 && j !== lc - 1) {
								expand += ",";
							}
							expand += tmp;
							j++;
						}
					}
				}
				args.selectParams.$expand = expand;
			} else {
				// encode the initialDataBindDepth in the args
				// use args.selectParams to encode the initialDataBindDepth
				args.selectParams.dbdepth = this.settings.initialDataBindDepth;
				// we need to encode initial URL params in case paging / sorting / filtering are enabled on child layouts 
				// and their type is set to remote ! 
			}
		}
	});
	// Expose dataSource as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase ig.datasource is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.datasource", ["ig.util"], function () { return $.ig.DataSource; });
	}
}(jQuery));

/*!@license
 * Infragistics.Web.ClientUI Templating Engine 13.1.20131.2039
 *
 * Copyright (c) 2011-2013 Infragistics Inc.
 * 
 * Engine used for data templating
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *
 */

 /*
	1. comment RegExp matches comments in the template string in the form # My comment #. 
		Unterminated comments would not be matched
	2. sub (substitute) RegExp matches templated data items to be replaced in the form of ${DataItem}.
	3. block RegExp matches terminated block statements
		e.g. {{if condition}} do something {{else}} do something else {{/if}}
		limitation: Regular expressions are equivalent to finite automatons as described by theory of computation and more precisely the formal languages and automata computability theory. This means that they are limited to recognizing languages of the type AB^nC but noy languages of the type [AB]^n which are recognized by context-free grammars (Regular expressions are still a subset of context-free grammars). However the A^nB^n is recognized due to the fact that we can use greedy regular expressions allowing us to match the last existing token of a type. Thus nested if-statements would not be recognized without stack-tokenizing the block statement.
	4. TO DO: Find a way to encorporate ? conditionals
 */
/*global jQuery */
(function ($) {

	$.ig = $.ig || {};

	$.extend($.ig, {
	/* pluginName="igTemplating" */
		tmpl: function (template, data, args) {
			/*  Templates the given template with the provided data. If data is a function that requires arguments, the arguments need to be provided as an array following the data. tmpl(template, data[, args])
				paramType="string" optional="false" Specifies the template string
				paramType="object|array|function" optional="false" Specifies the data to be templated in the template. If function is provided, then it has to be object or array returning function, possible receiving arguments array which can be specified as the third parameter
				paramType="array" optional="true" If function is provided as the second parameter, then this parameter is the arguments for the function.
				returnType="string" Returns the templated data as a string. Returns the original template if nothing is to be templated. */
			var tmpl = template, cacheConst;
			// K.D. May 28th, 2012 Bug #112490 Removing linebreaks in the template before rendering it.
			tmpl = tmpl.replace(this.regExp.lineBreak, '');
			// Removing comments
			tmpl = tmpl.replace(this.regExp.comment, '');
			if (typeof data === 'function') {
				if (args) {
					data = data.apply(this, args);
				} else {
					data = data.call();
				}
			}
			if (this._internalTmplCache && this._internalTmplCache.hasOwnProperty(tmpl)) {
				this.tokens = this._internalTmplCache[tmpl].tokens;
				this.args = this._internalTmplCache[tmpl].args;
				this.i = this._internalTmplCache[tmpl].i;
				this._hasBlock = this._internalTmplCache[tmpl]._hasBlock;
				tmpl = this._internalTmplCache[tmpl].tmpl;
			} else {
				this.tokens = [];
				this.args = [];
				this.i = 0;
				this._tokenizeTemplate(tmpl);
				cacheConst = tmpl;
				this._internalTmplCache[cacheConst] = {};
				this._internalTmplCache[cacheConst].tokens = this.tokens;
				if (this.regExp.block.test(tmpl)) {
					this._hasBlock = true;
					tmpl = this._tokenizeDirectives(tmpl);
				} else {
					this._hasBlock = false;
				}
				this._internalTmplCache[cacheConst].args = this.args;
				this._internalTmplCache[cacheConst].i = this.i;
				this._internalTmplCache[cacheConst]._hasBlock = this._hasBlock;
				this._internalTmplCache[cacheConst].tmpl = tmpl;
			}
			if (!this.tokens) {
				// Nothing got tokenized
				return tmpl; // An exception can be thrown here
			}
			if (this._hasBlock) {
				tmpl = this._compileTemplate(tmpl, data);
			} else {
				tmpl = this._populateTemplate(tmpl, data);
			}
			delete this.args;
			delete this.tokens;
			delete this._hasBlock;
			delete this.i;
			return tmpl;
		},
		clearTmplCache: function () {
			delete this._internalTmplCache;
			this._internalTmplCache = {};
		},
		encode: function (value) {
			/* Encoding < > ' and "
				paramType="string" The string to be encoded.
				returnType="string" Returns the encoded string.
			 */
			return value !== null && value !== undefined ? value.toString().replace(this.regExp.lt, "&lt;").replace(this.regExp.gt, "&gt;").replace(this.regExp.ap, "&#39;").replace(this.regExp.ic, "&#34;") : '';
		},
		/* type="RegExp" Used to tokenize the template string. */
		regExp: {
			/* type="RegExp" Matches any comment in the template
				Use tmpl.replace($.ig.regExp.comment, '') in order to remove comments from the tmpl string
			*/
			comment: /(?!\"|\')#[^#]*#(?!\"|\')/g,
			/* type="RegExp" Matches any substitution element in the template that is to be encoded before rendering
				Use $.ig.regExp.sub.exec(tmpl) in order to get the substitution element in the tmpl string
			*/
			sub: /\$\{(([\w\$]+\.?[\w\$]*)+)\}/,
			/* type="RegExp" Matches any substitution element in the template that is to be rendered as it is
				Use $.ig.regExp.sub.exec(tmpl) in order to get the substitution element in the tmpl string
			*/
			nonEncodeSub: /\{\{html\s+([\w\$]+\.?[\w\$]*)+\}\}/,
			forSub: /\$\{(([\w\$]+\.[\w\$]*)+)\}/,
			arg: /args\[\d+\](?!.*\+)/,
			/* type="RegExp" Matches any block directive in the template
				Use $.ig.regExp.block.exec(tmpl) in order to get the block directive in the tmpl string
			*/
			block: /\{\{(\w+).*?\}\}+(.*)(\{\{\/\1\}\})/,
			/* type="RegExp" Matches any continuation inside a block directive in the template
				Use $.ig.regExp.blockCont.exec(tmpl) in order to get the directive within a block in the tmpl string
			*/
			blockCont: /\{\{(?!\/)(\S+)(.*)\}\}(.*)/,
			/* type="RegExp" Matches any continuation inside a block directive in the template
				Use $.ig.regExp.blockCont.exec(tmpl) in order to get the directive within a block in the tmpl string
			*/
			blockDirective: /\{\{\S+.*?\}\}/,
			/* type="RegExp" Matches index substitution $i
				Use $.ig.regExp.index.test(tmpl) in order to test for index variable in the tmpl string
			*/
			index: /\$i/g,
			/* type="RegExp" Matches linebreaks and carriages */
			lineBreak: /(\r\n|\n|\r)/gm,
			/* Characters to encode */
			lt: /</g,
			gt: />/g,
			ap: /'/g,
			ic: /"/g
		},
		/* Used to compile template directives. */
		_directives: {
			'if': {
				start: 'if (',
				close: ') {',
				end: ' }'
			},
			'elseif': {
				start: ' } else if (',
				close: ') {',
				end: ''
			},
			'else': {
				start: ' } else {',
				close: '',
				end: ''
			},
			'each': {
				start: 'for (var i = 0; i < $data.length; i++) {',
				close: '',
				end: ' }'
			}
		},
		_internalTmplCache: {},
		_tokenizeTemplate: function (template) {
			var tempToken, splitName;
			if (this.regExp.sub.test(template)) {
				tempToken = this.regExp.sub.exec(template);
				while (tempToken !== null) {
					splitName = tempToken[1].split('.');
					// K.D. September 25th, 2012 Bug #122463 The property can contain $ in its name.
					template = template.replace(new RegExp('\\$\\{' + tempToken[1].replace(/\$/g, '\\$') + '\\}', 'g'), '');
					tempToken[3] = new RegExp('\\$\\{' + tempToken[1].replace(/\$/g, '\\$')  + '\\}', 'g');
					tempToken[1] = splitName;
					tempToken[2] = true;
					this.tokens.push(tempToken);
					tempToken = this.regExp.sub.exec(template);
				}
			}
			if (this.regExp.nonEncodeSub.test(template)) {
				tempToken = this.regExp.nonEncodeSub.exec(template);
				while (tempToken !== null) {
					splitName = tempToken[1].split('.');
					// K.D. September 25th, 2012 Bug #122463 The property can contain $ in its name.
					template = template.replace(new RegExp('\\{\\{html\\s+' + tempToken[1].replace(/\$/g, '\\$') + '\\}\\}', 'g'), '');
					tempToken[3] = new RegExp('\\{\\{html\\s+' + tempToken[1].replace(/\$/g, '\\$') + '\\}\\}', 'g');
					tempToken[1] = splitName;
					tempToken[2] = false;
					this.tokens.push(tempToken);
					tempToken = this.regExp.nonEncodeSub.exec(template);
				}
			}
		},
		_tokenizeDirectives: function (template) {
			var tmpl = 'var result = "";', tokens = this.regExp.block.exec(template), temp;
			// Begin handling of directives tokenization
			if (template.indexOf(tokens[0]) > 0 || template.length !== tokens[0].length) {
				temp = template.split(tokens[0]);
				if (temp[0] && temp[0].length > 0) {
					this.args.push(temp[0]);
					tmpl += 'result += args[' + this.i++ + '];';
				}
			}
			tmpl += this._handleCompleteBlock(tokens);
			if (temp && temp.length > 0 && temp[1].length > 0) {
				this.args.push(temp[1]);
				tmpl += 'result += args[' + this.i++ + '];';
			}
			tmpl += 'return result;';
			// Stack population is complete
			return tmpl;
		},
		_handleCompleteBlock: function (tokens) {
			var tmpl = tokens[0];
			// Remove the start and end tokens of the completed block
			tmpl = tmpl.replace('{{' + tokens[1], this._directives[tokens[1]].start);
			if (tokens[1] === 'each') {
				tmpl = this._handleEach(tmpl, tokens);
			} else if (tokens[1] === 'if') {
				tmpl = this._handleIfElse(tmpl, tokens);
			}
			return tmpl;
		},
		_handleEach: function (template, tokens) {
			var tmpl = template, eachVar, body, forSub, sub, expr, inner;
			eachVar = this.regExp.sub.exec(tmpl);
			tmpl = tmpl.replace(eachVar[0], '');
			tmpl = tmpl.replace('$data', eachVar[0]);
			body = tokens[2];
			if (/\$data/.test(body)) {
				body = body.replace(/\$data/g, '" + ' + eachVar[0] + '[i] + "');
				this.args.push(eachVar[0]);
				this.i++;
			}
			forSub = this.regExp.forSub.exec(body);
			while (forSub) {
				body = body.replace(new RegExp('\\$\\{' + forSub[1] + '\\}', 'g'), '" + ' + eachVar[0] + '[i]' + forSub[1].substr(forSub[1].indexOf('.')) + ' + "');
				forSub = this.regExp.forSub.exec(body);
			}
			body = body.replace(/\$index/g, '" + i + "');
			tmpl = tmpl.replace(tokens[2], 'result += "' + body + '"');
			tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
			tmpl = tmpl.replace(tokens[3], this._directives[tokens[1]].end);
			// Check for a nested blocks and recursively handle them
			if (this.regExp.block.test(tmpl)) {
				inner = this.regExp.block.exec(tmpl);
				tmpl = tmpl.replace(inner[0], this._handleCompleteBlock(inner));
			}
			// Parse the contents of the block
			// Put all data members on the stack
			sub = this.regExp.sub.exec(tmpl);
			while (sub) {
				expr = new RegExp('\\$\\{' + sub[1] + '\\}', 'g');
				tmpl = tmpl.replace(expr, 'args[' + this.i++ + ']');
				this.args.push(sub[0]);
				sub = this.regExp.sub.exec(tmpl);
			}
			return tmpl;
		},
		_handleIfElse: function (template, tokens) {
			var tmpl = template, i = 0, htmlStrings, sub, inner, index, tmplArr = [];
			// Remove the start and end tokens of the completed block
			tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
			index = tmpl.lastIndexOf(tokens[3]);
			tmpl = tmpl.substr(0, index) + tmpl.slice(index + tokens[3].length - 1);
			// Check for a nested blocks and recursively handle them
			if (this.regExp.block.test(tmpl)) {
				inner = this.regExp.block.exec(tmpl);
				tmpl = tmpl.replace(inner[0], this._handleCompleteBlock(inner));
			}
			// Parse the contents of the block
			htmlStrings = tokens[2].split(this.regExp.blockDirective);
			// We need to make sure that we're not replacing a substitute inside the if condition with result +=...
			tmplArr.push(tmpl.slice(0, tmpl.indexOf(') {') + 3));
			tmplArr.push(tmpl.slice(tmpl.indexOf(') {') + 3));
			for (i; i < htmlStrings.length; i++) {
				if (htmlStrings[i] && htmlStrings[i].length && htmlStrings[i].length > 0) {
					tmplArr[1] = tmplArr[1].replace(htmlStrings[i], 'result += args[' + this.i++ + '];');
					this.args.push(htmlStrings[i]);
				}
			}
			tmpl = tmplArr.join('');
			// End Parse
			// Parse block continuations such as {{else}}
			tokens = this.regExp.blockCont.exec(tmpl);
			while (tokens) {
				tmpl = tmpl.replace('{{' + tokens[1], this._directives[tokens[1]].start);
				tmpl = tmpl.replace(/\}\}/, this._directives[tokens[1]].close);
				tokens = this.regExp.blockCont.exec(tmpl);
			}
			// Put all data members on the stack as well
			sub = this.regExp.sub.exec(tmpl);
			while (sub) {
				tmpl = tmpl.replace(new RegExp('\\$\\{' + sub[1] + '\\}', 'g'), 'args[' + this.i++ + ']');
				this.args.push(sub[0]);
				sub = this.regExp.sub.exec(tmpl);
			}
			// Stack population is complete
			return tmpl;
		},
		_populateTemplate: function (template, data) {
			var i, j, result = '', temp;
			if (!data.length) {
				for (i = 0; i < this.tokens.length; i++) {
					template = this._populateArgumentValue(data, this.tokens[i], template);
				}
				result = template;
			} else if (data.length) {
				for (j = 0; j < data.length; j++) {
					temp = template;
					for (i = 0; i < this.tokens.length; i++) {
						temp = this._populateArgumentValue(data[j], this.tokens[i], temp);
					}
					temp = temp.replace(this.regExp.index, j);
					result += temp;
				}
			}
			return result;
		},
		_compileTemplate: function (template, data) {
			var i, j, k, result = '', temp, tempArgs = [], arg = '', f;
			if (!data.length) {
				for (j = 0; j < this.args.length; j++) {
					arg = this.args[j];
					for (i = 0; i < this.tokens.length; i++) {
						if (arg === this.tokens[i][0]) {
							arg = this._getArgumentValue(data, this.tokens[i], arg);
							break;
						} else if (typeof arg === 'string') {
							arg = this._populateArgumentValue(data, this.tokens[i], arg);
						}
					}
					if (arg === undefined) {
						throw new Error($.ig.Templating.locale.undefinedArgument + this.tokens[i][0]);
					}
					if (typeof arg === 'string') {
						arg = arg.replace(this.regExp.index, 0);
					}
					tempArgs.push(arg);
				}
				template = template.replace(/\$i/g, 0);
				result = new Function("args", template).call(this, tempArgs) || '';
			} else if (data.length) {
				temp = template.replace(this.regExp.index, 'args[' + this.args.length + ']');
				f = new Function("args", temp);
				for (j = 0; j < data.length; j++) {
					tempArgs = [];
					for (k = 0; k < this.args.length; k++) {
						arg = this.args[k];
						for (i = 0; i < this.tokens.length; i++) {
							if (arg === this.tokens[i][0]) {
								arg = this._getArgumentValue(data[j], this.tokens[i], arg);
								break;
							} else if (typeof arg === 'string') {
								arg = this._populateArgumentValue(data[j], this.tokens[i], arg);
							}
						}
						if (arg === undefined) {
							throw new Error($.ig.Templating.locale.undefinedArgument + this.tokens[i][0]);
						}
						if (typeof arg === 'string') {
							arg = arg.replace(this.regExp.index, j);
						}
						tempArgs.push(arg);
					}
					tempArgs.push(j);
					result += f.call(this, tempArgs) || '';
				}
			}
			return result;
		},
		_getArgumentValue: function (data, token, arg) {
			var tempData, l;
			if (token[1].length && token[1].length > 1) {
				tempData = data;
				for (l = 0; l < token[1].length; l++) {
					// K.D. August 14th, 2012 Bug #118861 When a prop is undefined/null we should not try to evaluate a prop
					if (tempData && tempData.hasOwnProperty(token[1][l])) {
						tempData = tempData[token[1][l]];
					} else {
						tempData = '';
						break;
					}
				}
				if (token[2] && typeof tempData === 'string') {
					arg = this.encode(tempData);
				} else {
					arg = tempData;
				}
			} else {
				if (token[2] && typeof data[token[1]] === 'string') {
					arg = this.encode(data[token[1]]);
				} else {
					arg = data[token[1]];
				}
			}
			return arg;
		},
		_populateArgumentValue: function (data, token, arg) {
			var tempData, l, self = this;
			if (token[1].length && token[1].length > 1) {
				tempData = data;
				for (l = 0; l < token[1].length; l++) {
					// K.D. August 14th, 2012 Bug #118861 When a prop is undefined/null we should not try to evaluate a prop
					if (tempData && tempData.hasOwnProperty(token[1][l])) {
						tempData = tempData[token[1][l]];
					} else {
						tempData = '';
						break;
					}
				}
				if (token[2] && typeof tempData === 'string') {
					// K.D. June 14th, 2012 Bug #114536 Switching to a function to ignore flag parameters
					// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace
					arg = arg.replace(token[3], function () {
						return self.encode(tempData);
					});
				} else {
					// K.D. June 14th, 2012 Bug #114536 Switching to a function to ignore flag parameters
					// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace
					arg = arg.replace(token[3], function () {
						return tempData;
					});
				}
			} else {
				if (token[2]) {
					// K.D. June 14th, 2012 Bug #114536 Switching to a function to ignore flag parameters
					// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace
					arg = arg.replace(token[3], function () {
						return self.encode(data[token[1]]);
					});
				} else {
					// K.D. June 14th, 2012 Bug #114536 Switching to a function to ignore flag parameters
					// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace
					arg = arg.replace(token[3], function () {
						return data[token[1]];
					});
				}
			}
			return arg;
		}
	});

}(jQuery));

/*!@license
 * Infragistics.Web.ClientUI jQuery Shared 13.1.20131.2039
 *
 * Copyright (c) 2011-2013 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.2.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.util.js
 */

/*global window */
/*global jQuery */
/*global Class */
/*global HTMLElement */
/*global define */
(function ($) {
	// Loading indicator widget 
    $.widget("ui.igLoading", {
		options: {
			cssClass: null,
			// K.D. December 19th, 2011 Bug #98217 Adding an option to calculate additional vertical offset
			includeVerticalOffset: true
		},
		_indicator: null,
		_create: function () {
			// M.H. 13 May 2011 fix bug 75501
			var offset, css;

			css = this.options.cssClass === null ? "ui-igloadingmsg" : this.options.cssClass;
			this._hgrid = this.element.closest('.ui-iggrid-root').closest('.ui-iggrid');
			if (this.element.children('.' + css).length === 0) {
				this._indicator = $('<span></span>').appendTo("body").attr('id', this.element[0].id + '_loading').addClass(css);
				// calculate position
				//op = this.element.offsetParent();
				//if (op.is('body')) {
				offset = this.element.offset();
				//} else {
				//	offset = op.position();
				//}
				//this._indicator.css('left', offset.left + this.element.innerWidth() / 2).css('top', offset.top + this.element.innerHeight() / 2);
				this.refreshPos();
			}
			// VS 06/25/2012. When target has small height (like editor), then indicator is not at the middle
			this._yShift = this._indicator ? Math.round(this._indicator.height() / 2) : 0;
		},
		indicatorElement: function () {
			return this._indicator;
		},
		indicator: function () {
			return this;
		},
		show: function (refresh) {
			if (refresh !== false) {
				this.refreshPos();
			}
			// M.H. 29 Oct 2012 Fix for bug #120642
			if (this._resId) {
				clearInterval(this._resId);
			}
			this._resId = setInterval($.proxy(this._resizeContainer, this), 300);
			this._indicator.css("display", "").css("visibility", "visible");
		},
		hide: function () {
			this._indicator.css("display", "none").css("visibility", "hidden");
			clearInterval(this._resId);
			// M.H. 29 Oct 2012 Fix for bug #120642
			this._resId = null;
		},
		_resizeContainer: function () {
			var offset = this.element.offset();
			if (offset.top + this.element.innerHeight() / 2 - this._yShift !== this._indicator.css('top')) {
				this.refreshPos();
			}
		},
		refreshPos: function () {
			var offset = this.element.offset(), top = offset.top + this.element.innerHeight() / 2 - this._yShift,
				left = offset.left + this.element.innerWidth() / 2, verticalOffset; // special offset in case the grid is taller than the browser window
			if (this._hgrid.length > 0 && top > this._hgrid.offset().top + this._hgrid.height()) {
				// we don't want to show the loading indicator of child grids out of the area of their parent grids
				return;
			}
			if (this._hgrid.length > 0 && left > this._hgrid.offset().left + this._hgrid.width()) {
				return;
			}
			// account for top going out of the visible browser window
			// A.T. 22 Nov 2011 - fix for #76784
			// K.D. December 19th, 2011 Bug #98217 No additional offset is required if the indicator is in a tree
			if (this.options.includeVerticalOffset && top > $(window).height()) {
				verticalOffset = ($(window).height() - offset.top - $(window).scrollTop()) / 2;
				// position the loading indicator above the end of the browser window
				top = $(window).height() - verticalOffset < offset.top ? offset.top + verticalOffset : $(window).height() - verticalOffset;
			}
			this._indicator.css('left', left).css('top', top);
		},
		destroy: function () {
			clearInterval(this._resId);
			this._indicator.remove();
		}
    });
    $.extend($.ui.igLoading, {version: '13.1.20131.2039'});

	$.widget("ui.igSlider", $.ui.mouse, {
		options: {
			/* type="bool" Get or set whether the slide handle will animate when it is moved. */
			animate: false,
			/* type="number" Get or set the slider range maximum value. */
			max: 100,
			/* type="number" Get or set the slider range minimum value. */
			min: 0,
			/* type="horizontal|vertical" Get or set the slider orientation. */
			orientation: 'horizontal',
			/* type="number" Get or set the step with which the value is increased. */
			step: 1,
			/* type="number" Get or set the slider value. */
			value: 0,
			/* Get or set the bookmarks array. */
			bookmarks: [{
				/* type="number" Get or set the bookmark value. Should be between slider min and max values. */
				value: 0,
				/* type="string" Get or set the bookmark title. Show in tooltip on hover. */
				title: '',
				/* type="bool" Get or set whether the bookmark is disabled or not. */
				disabled: false,
				/* type="string" Get or set a custom css class to be applied to the bookmark anchor element. */
				css: ''
		    }],
			/* type="bool" Get or set the whether to show bookmarks title on bookmark hover or not. */
			showBookmarkTitle: true,
			/* type="bool" Get or set whether the handle will be moved to the bookmark position when a bookmark is clicked. */
			syncHandleWithBookmark: true
		},

		css: {
			/* Get or set the widget base CSS classes. */
			"baseClasses" : "ui-igslider ui-widget ui-widget-content ui-corner-all",
			/* Get or set the CSS class applied to the widget when orientation is horizontal. */
			"horizontalOrientationClass" : "ui-igslider-horizontal",
			/* Get or set the CSS class applied to the widget when orientation is vertical. */
			"verticalOrientationClass" : "ui-igslider-vertical",
			/* Get or set the CSS class applied when the widget is disabled. */
			"sliderDisabledClass" : "ui-igslider-disabled ui-disabled",
			/* Get or set the CSS class applied on the slider handle. */
			"handleClass" : "ui-igslider-handle",
			/* Get or set the CSS class applied on the bookmark anchors. */
			"bookmarkClass" : "ui-igslider-bookmark",
			/* Get or set the CSS class applied on the bookmarks when they are disabled. */
			"bookmarkDisabledClass" : "ui-igslider-bookmark-disabled",
			/* Get or set the CSS class applied on the bookmark tooltips. */
			"bookmarkTooltipClass" : "ui-igslider-bookmark-tooltip"
		},

		events: {
			/* cancel="true" Defines the slide start event. */
			start: "start",
			/* cancel="true" Defines the slide event. Fired when the user is sliding with mouse. */
			slide: "slide",
			/* Defines the slide stop event. Fired to mark the end of a sliding action. */
			stop: "stop",
			/* Defines the slider value change event. Fired when the value of the slider changes. It fires after the slide event. */
			change: "change",
			/* Defines the slider bookmark hit event. Fired when the slider handle passes after the bookmark value. */
			bookmarkHit: "bookmarkhit",
			/* cancel="true" Defines the slider bookmark click event. Fired when a bookmark is clicked. */
			bookmarkClick: "bookmarkclick"
		},

		_numpages : 5,

		widget: function () {
		    return this.element;
	    },

		_createWidget: function (options, element) {
			/* !Strip dummy objects from options, because they are defined for documentation purposes only! */
			this.options.bookmarks = [];
			$.Widget.prototype._createWidget.apply(this, arguments);
		},

		_create: function () {
			var o = this.options,
				self = this,
				css = this.css;
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();

			this.element.addClass(css.baseClasses);

			if (o.disabled) {
				this.element.addClass(css.sliderDisabledClass);
			}

			if ($(".ui-igslider-handle", this.element).length === 0) {
				$("<a href='#'></a>").appendTo(this.element).addClass(css.handleClass);
			}

			// TODO we should think of a different way to find the handle as the class can be changed by the user
			// and it may not be just one class
			this.handles = $(".ui-igslider-handle", this.element).addClass("ui-state-default" + " ui-corner-all").bind({
				click: function (event) {
					event.preventDefault();
				},
				mouseover: function () {
					if (!o.disabled) {
						$(this).addClass("ui-state-hover");
					}
				},
				mouseout: function () {
					$(this).removeClass("ui-state-hover");
				},
				focus: function () {
					if (!o.disabled) {
						$(".ui-igslider .ui-state-focus").removeClass("ui-state-focus");
						$(this).addClass("ui-state-focus");
					} else {
						$(this).blur();
					}
				},
				blur: function () {
					$(this).removeClass("ui-state-focus");
				},
				keydown: function (event) {
					var ret = true,
						index = $(this).data("index.ui-igslider-handle"),
						allowed,
						curVal,
						newVal,
						step;

					if (self.options.disabled) {
						return;
					}

					switch (event.keyCode) {
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						ret = false;
						if (!self._keySliding) {
							self._keySliding = true;
							$(this).addClass("ui-state-active");
							allowed = self._start(event, index);
							if (allowed === false) {
								return;
							}
						}
						break;
					}

					step = self.options.step;
					curVal = newVal = self.value();

					switch (event.keyCode) {
					case $.ui.keyCode.HOME:
						newVal = self.options.min;
						break;
					case $.ui.keyCode.END:
						newVal = self.options.max;
						break;
					case $.ui.keyCode.PAGE_UP:
						newVal = self._trimValue(curVal + ((self.options.max - self.options.min) / this._numpages));
						break;
					case $.ui.keyCode.PAGE_DOWN:
						newVal = self._trimValue(curVal - ((self.options.max - self.options.min) / this._numpages));
						break;
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
						if (curVal === self.options.max) {
							return;
						}
						newVal = self._trimValue(curVal + step);
						break;
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						if (curVal === self.options.min) {
							return;
						}
						newVal = self._trimValue(curVal - step);
						break;
					}

					self._slide(event, index, newVal);

					return ret;
				},
				keyup: function (event) {
					var index = $(this).data("index.ui-igslider-handle");

					if (self._keySliding) {
						self._keySliding = false;
						self._stop(event, index);
						self._change(event, index);
						$(this).removeClass("ui-state-active");
					}
				}
			}).each(function (i) {
				$(this).data("index.ui-igslider-handle", i);
			});

			this.handle = this.handles.eq(0);

			this._renderBookmarks();

			this._refreshValue();

			this._animateOff = false;
		},

		_renderBookmarks: function () {
			if (this.options.bookmarks && this.options.bookmarks.length > 0) {
				var len = this.options.bookmarks.length,
					i = 0,
					o = this.options,
					css = this.css,
					mark,
					self = this;

				for (i; i < len; i++) {
					mark = o.bookmarks[i];
					$("<a href='#'></a>").appendTo(this.element).data("index.ui-igslider-bookmark", i).addClass(mark.disabled ? css.bookmarkDisabledClass : css.bookmarkClass).addClass(mark.css && mark.css.length > 0 ? mark.css : '').css('left', (o.min !== o.max) ? ((mark.value - o.min) / (o.max - o.min) * 100) + '%' : '0%');
				}

				this.bookmarks = $(".ui-igslider-bookmark", this.element).addClass("ui-state-default").bind({
					mousedown: function (event) {
						var noCancel = true,
							bookmarkIndex = $(this).data("index.ui-igslider-bookmark");
						event.preventDefault();
						event.stopPropagation();
						noCancel = self._bookmarkClicked(event, bookmarkIndex);
						if (self.options.syncHandleWithBookmark && noCancel) {
							self._slide(event, 0, self.options.bookmarks[bookmarkIndex].value);
						}
					},
					// K.D. May 28, 2011 Bug #68785 we need the browser event to position the tooltip
					mouseover: function (event) {
						if (!o.disabled) {
							$(this).addClass("ui-state-hover");
							if (self.options.showBookmarkTitle) {
								self._showBookmarkTitle($(this), event);
							}
						}
					},
					mouseout: function () {
						if (!o.disabled) {
							$(this).removeClass("ui-state-hover");
							if (self.options.showBookmarkTitle) {
								self._hideBookmarkTitle($(this));
							}
						}
					},
					// K.D. May 27, 2011 Bug #73417 The browser window jumps if we don't prevent the default action of the
					// bookmark click
					click: function (event) {
						event.preventDefault();
					}
				});
				this._createBookmarkTooltip();
				this._buildBookmarkHit();
			}
		},

		destroy: function () {
			this.handles.remove();
			this.clearBookmarks();

			this.element
				.removeClass(this.css.baseClasses +
					" ui-igslider-horizontal" +
					" ui-igslider-vertical" +
					" ui-igslider-disabled")
				.removeData("slider")
				.unbind(".slider");

			this._mouseDestroy();

			return this;
		},

		_id: function (suffix) {
			return this.element[0].id + suffix;
		},

		_showBookmarkTitle: function (bookmark, browserEvent) {
			var tooltip = $('#' + this._id('_tooltip')),
				title = this.options.bookmarks[bookmark.data("index.ui-igslider-bookmark")].title;
			if (title && title.length > 0) {
				tooltip.igTooltip('option', 'text', title);
				// K.D. May 28, 2011 Bug #68785 we need the browser event to position the tooltip
				tooltip.css('top', browserEvent.pageY - tooltip.outerHeight() - 5)
					.css('left', browserEvent.pageX - (tooltip.width() / 2) + (bookmark.width() / 2)).show();
			}
		},

		_hideBookmarkTitle: function (bookmark) {
			$('#' + this._id('_tooltip')).hide();
		},

		_createBookmarkTooltip: function () {
			var html = '<div id="' + this._id("_tooltip") + '" class="' + this.css.bookmarkTooltipClass + '"></div>';
			// K.D. May 28, 2011 Bug #68785 we beed the tooltip attached to the body to position it correctly when needed
			$(html).appendTo($(document.body)).igTooltip({
				arrowLocation: 'bottom'
			}).hide();
		},

		clearBookmarks: function () {
			if (this.bookmarks) {
				this.bookmarks.remove();
			}
		},

		_mouseCapture: function (event) {
			var o = this.options,
				position,
				normValue,
				index = 0,
				handle = this.handles.eq(index),
				self = this,
				offset,
				mouseOverHandle;

			if (o.disabled) {
				return false;
			}

			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();

			position = { x: event.pageX, y: event.pageY };
			normValue = this._normValueFromMouse(position);

			this._mouseSliding = true;

			self._handleIndex = index;

			handle.addClass("ui-state-active");
			if (!$.ig.util.isOpera) {
				handle.focus();
			}

			offset = handle.offset();
			mouseOverHandle = !$(event.target).parents().andSelf().is(".ui-igslider-handle");
			this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
				left: event.pageX - offset.left - (handle.width() / 2),
				top: event.pageY - offset.top -
					(handle.height() / 2) -
					(parseInt(handle.css("borderTopWidth"), 10) || 0) -
					(parseInt(handle.css("borderBottomWidth"), 10) || 0) +
					(parseInt(handle.css("marginTop"), 10) || 0)
			};

			this._slide(event, index, normValue);
			this._animateOff = true;

			this._mouseUpHandler = function (event) {
				return self._mouseStop(event);
			};

			// A.Y. June 6, 2011 Bug# 73864 - the ui.mouse plugin that we extend is not firing _mouseStop unless there is a slide
			// in which case it fires _mouseStart and then _mouseStop, so we should handle the mouseUp event 
			// unless _mouseStart is fired before that
			$(document).bind('mouseup.' + this.widgetName, this._mouseUpHandler);

			return true;
		},

		_mouseStart: function (event) {
			// A.Y. June 6, 2011 Bug# 73864 - _mouseStart is fired so we can unbind our mauseUp handler 
			// as we know now that _mouseStop will be fired
			$(document).unbind('mouseup.' + this.widgetName, this._mouseUpHandler);

			return this._start(event, this._handleIndex);
		},

		_mouseDrag: function (event) {
			var position = { x: event.pageX, y: event.pageY },
				normValue = this._normValueFromMouse(position);

			this._slide(event, this._handleIndex, normValue);

			return false;
		},

		_mouseStop: function (event) {
			var self = this;
			this.handles.removeClass("ui-state-active");
			// S.S. November 22, 2011, Bug #76208 If mouseSliding is set to false right away a sync issue appears because the 
			// VideoPlayer is not forbidden from progressing through the video and updates the position before the new sliding 
			// one is applied making the slider jump between the old and the new position.
			setTimeout(function () { self._mouseSliding = false; }, 1000);

			this._stop(event, this._handleIndex);
			this._change(event, this._handleIndex);

			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;
			return false;
		},

		_detectOrientation: function () {
			var o = this.options,
				css = this.css;
			if (o.orientation === "vertical") {
				this.orientation = "vertical";
				this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass);
			} else {
				this.orientation = "horizontal";
				this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass);
			}
		},

		_normValueFromMouse: function (position) {
			var pixelTotal,
				pixelMouse,
				percentMouse,
				valueTotal,
				valueMouse;

			if (this.orientation === "horizontal") {
				pixelTotal = this.elementSize.width;
				pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
			} else {
				pixelTotal = this.elementSize.height;
				pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
			}

			percentMouse = (pixelMouse / pixelTotal);
			if (percentMouse > 1) {
				percentMouse = 1;
			}
			if (percentMouse < 0) {
				percentMouse = 0;
			}
			if (this.orientation === "vertical") {
				percentMouse = 1 - percentMouse;
			}

			valueTotal = this.options.max - this.options.min;
			valueMouse = this.options.min + percentMouse * valueTotal;

			return this._trimValue(valueMouse);
		},

		_start: function (event, index) {
			var uiHash = {
				handle: this.handles[index],
				value: this.value()
			};
			return this._trigger(this.events.start, event, uiHash);
		},

		_slide: function (event, index, newVal) {
			var allowed;
			if (newVal !== this.value()) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger(this.events.slide, event, {
					handle: this.handles[index],
					value: newVal
				});
				if (allowed !== false) {
					this.value(newVal);
				}
			}
		},

		_stop: function (event, index) {
			var uiHash = {
				handle: this.handles[index],
				value: this.value()
			};
			this._trigger(this.events.stop, event, uiHash);
		},

		_change: function (event, index) {
			if (!this._keySliding && !this._mouseSliding) {
				var uiHash = {
						handle: this.handles[index],
						value: this.value()
					};
				this._trigger(this.events.change, event, uiHash);
				this._checkBookmarkHit(uiHash.value, event);
				if (uiHash.value === this.options.max && this._marksHit && this._marksHit.length === 0) {
					this._buildBookmarkHit();
				}
			}
		},

		_checkBookmarkHit: function (currentValue, event) {
			if (this._marksHit && this._marksHit.length > 0 && currentValue >= this._marksHit[0].value) {
				var index = this._marksHit[0].index;
				this._marksHit.shift();
				this._bookmarkHit(event, index);
			}
		},

		_buildBookmarkHit: function () {
			var b = this.options.bookmarks || [],
				i = b.length - 1;
			this._marksHit = [];
			for (i; i >= 0; i--) {
				if (!b[i].disabled) {
					this._marksHit.push({value: b[i].value, index: i });
				}
			}
			this._marksHit.sort(this._sortBookmarksJSON);
			this._marksHit = $.extend(true, [], this._marksHit);
		},

		_sortBookmarksJSON: function (a, b) {
			return (a.value - b.value);
		},

		_bookmarkClicked: function (event, index) {
			var uiHash = {
				bookmarkElement: this.bookmarks[index],
				bookmark: this.options.bookmarks[index]
			};
			return this._trigger(this.events.bookmarkClick, event, uiHash);
		},

		_bookmarkHit: function (event, index) {
			var uiHash = {
				bookmarkElement: this.bookmarks[index],
				bookmark: this.options.bookmarks[index]
			};

			// K.D. June 24th, 2011 Bug #77536 If we have autohide=true and we check for bookmark pins to be visible
			// then the bookmark hit event would never be fired /*if (uiHash.bookmarkElement && $(uiHash.bookmarkElement).is(':visible'))*/
			if (uiHash.bookmarkElement) {
				this._trigger(this.events.bookmarkHit, event, uiHash);
			}
		},

		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimValue(newValue);
				this._refreshValue();
				this._change(null, 0);
			}
			return this._value();
		},

		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);

			switch (key) {
			case "disabled":
				if (value) {
					this.handles.filter(".ui-state-focus").blur();
					this.handles.removeClass("ui-state-hover");
					this.handles.attr("disabled", "disabled");
					this.element.addClass("ui-disabled");
				} else {
					this.handles.removeAttr("disabled");
					this.element.removeClass("ui-disabled");
				}
				break;
			case "orientation":
				this._detectOrientation();
				this._refreshValue();
				break;
			case "value":
				if (this._mouseSliding === true) {
					return;
				}
				this._animateOff = true;
				this._refreshValue();
				this._change(null, 0);
				this._animateOff = false;
				break;
			case "bookmarks":
				this.clearBookmarks();
				this._renderBookmarks();
				break;
			}
		},

		_value: function () {
			return this._trimValue(this.options.value);
		},

		_trimValue: function (val) {
			if (val < this.options.min) {
				return this.options.min;
			}
			if (val > this.options.max) {
				return this.options.max;
			}
			var step = (this.options.step > 0) ? this.options.step : 1,
				valModStep = val % step,
				alignValue = val - valModStep;

			if (Math.abs(valModStep) * 2 >= step) {
				alignValue += (valModStep > 0) ? step : (-step);
			}
			return parseFloat(alignValue.toFixed(5));
		},

		_normPercentValue: function (val) {
			var decrease = 0, retVal = val;
			if (this.orientation === 'vertical') {
				decrease = (this.handle.outerHeight() / this.element.outerHeight()).toFixed(2) * 100;
			}
			if (val - decrease > 0) {
				retVal = val - decrease;
			}
			return retVal;
		},

		_refreshValue: function () {
			var o = this.options,
				control = this,
				animate = (!this._animateOff ? o.animate : false),
				_set = {},
				value = this.value(),
				valueMin = this.options.min,
				valueMax = this.options.max,
				valPercent = (valueMax !== valueMin) ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
			_set[control.orientation === "horizontal" ? "left" : "bottom"] = this._normPercentValue(valPercent) + "%";
			this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
		}
	});
	$.extend($.ui.igSlider, {version: '13.1.20131.2039'});

	$.widget("ui.igProgressBar", {
		options: {
			animate: false,
            animateTimeout: 100,
			max: 100,
			min: 0,
			orientation: 'horizontal',
			value: 0,
			width: '0px',
			height: '0px',
			range: false,
			endValue: 100 // show discontinous progress. I.e. we have data between value and endValue.
		},

		css: {
			"baseClasses" : "ui-igprogressbar ui-widget ui-widget-content ui-corner-all",
			"horizontalOrientationClass" : "ui-igprogressbar-horizontal",
			"verticalOrientationClass" : "ui-igprogressbar-vertical",
			"disabledClass" : "ui-igprogressbar-disabled ui-disabled",
			"progressRangeClass" : "ui-igprogressbar-range ui-widget-header ui-corner-all"
		},

		events: {
			change: "change"
		},

		_animationOff : true,

		widget: function () {
		    return this.element;
	    },

		_detectOrientation: function () {
			var css = this.css;
			if (this.options.orientation === "vertical") {
				this.orientation = "vertical";
				this.element.removeClass(css.horizontalOrientationClass).addClass(css.verticalOrientationClass);
			} else {
				this.orientation = "horizontal";
				this.element.removeClass(css.verticalOrientationClass).addClass(css.horizontalOrientationClass);
			}
		},

		_id: function (suffix) {
			return this.element[0].id + suffix;
		},

		_create: function () {
			var o = this.options,
				css = this.css;

			this._detectOrientation();

			this.element.addClass(css.baseClasses);

			if (o.disabled) {
				this.element.addClass(css.disabledClass);
			}

			if (o.width !== '0px') {
				this.element.css('width', o.width);
			}

			if (o.height !== '0px') {
				this.element.css('height', o.height);
			}

			if (o.orientation === 'horizontal') {
				$('<div id="' + this._id('_progress') + '" class="' + css.progressRangeClass + '" style="height:100%; top:0px; left:0%; width:0%;"></div>').appendTo(this.element);
			} else {
				$('<div id="' + this._id('_progress') + '" class="' + css.progressRangeClass + '" style="height:0%; bottom:0%; left:0px; width:100%;"></div>').appendTo(this.element);
			}

			this._refreshValue();
		},

		destroy: function () {
			this.element
				.removeClass("ui-igprogressbar" +
					" ui-igprogressbar-horizontal" +
					" ui-igprogressbar-vertical" +
					" ui-igprogressbar-disabled" +
					" ui-widget" +
					" ui-widget-content" +
					" ui-corner-all")
				.removeData("igProgressBar")
				.unbind(".igProgressBar");
			$('#' + this._id('_progress')).remove();
			return this;
		},

		_change: function (event) {
			var uiHash = {
				value: this.value()
			};
			this._trigger(this.events.change, event, uiHash);
		},

		value: function (newValue) {
			if (arguments.length) {
				this.options.value = this._trimValue(newValue);
				this._refreshValue();
				this._change(null);
			}
			return this.options.value;
		},

		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			var o = this.options;
			switch (key) {
			case "disabled":
				if (value) {
					this.element.addClass(this.css.disabledClass);
				} else {
					this.element.removeClass(this.css.disabledClass);
				}
				break;
			case "orientation":
				this._detectOrientation();
				this._refreshValue();
				break;
			case "value":
				this._animationOff = true;
				o.value = this._trimValue(value);
				this._refreshValue();
				this._change(null);
				this._animationOff = false;
				break;
			case "endValue":
				o.endValue = this._trimValue(value);
				this._refreshValue();
				break;
			case "max":
				if (o.endValue > o.max) {
					o.endValue = o.max;
					this._refreshValue();
				}
				break;
			case "width":
				this.element.css('width', value);
				break;
			case "height":
				this.element.css('height', value);
				break;
            case "animate":
                o.animate = value;
                break;
            case "animateTimeout":
                o.animateTimeout = value;
                break;
			default:
				break;
			}
		},

		_trimValue: function (val) {
			if (val < this.options.min) {
				return this.options.min;
			}
			if (val > this.options.max) {
				return this.options.max;
			}
			return parseInt(val, 10);
		},

		_refreshValue: function () {
			var o = this.options,
				value = o.value,
				valueMin = o.min,
				valueMax = o.max,
				valueEnd = o.endValue,
				valPercent = (valueMax !== valueMin) ? (value - valueMin) / (valueMax - valueMin) * 100 : 0,
				valueEndPercent = (value !== valueEnd) ? (valueEnd - value) / (valueMax - valueMin) * 100 : 0,
                progressBar = $('#' + this._id('_progress'));
			if (o.range) {
				if (o.orientation === 'horizontal') {
					progressBar.css('left', valPercent + '%').css('width', valueEndPercent + '%');
				} else {
					progressBar.css('bottom', valPercent + '%').css('height', valueEndPercent + '%');
				}
			} else {
                if (o.animate === true) {
                    if (o.orientation === 'horizontal') {
                        // in Opera animate width property throws error when width/height is firstly set as 0%
                        if (progressBar[0].style.width === '0%') {
                            progressBar.css({width: '0px'});
                        }
                        //fix for IE, when progress bar is hidden and try to animate throws error
                        if (progressBar.is(':hidden') === false) {
                            progressBar.animate({width: valPercent + '%'}, o.animateTimeout);
                        } else {
                            progressBar.css('width', valPercent + '%');
                        }
				    } else {
                        // in Opera animate width property throws error when width/height is firstly set as 0%
                        if (progressBar[0].style.height === '0%') {
                            progressBar.css({height: '0px'});
                        }
                        //fix for IE, when progress bar is hidden and try to animate throws error
                        if (progressBar.is(':hidden') === false) {
                            progressBar.animate({height: valPercent + '%'}, o.animateTimeout);
                        } else {
                            progressBar.animate({'height': valPercent + '%'}, o.animateTimeout);
                        }
				    }
                } else {
				    if (o.orientation === 'horizontal') {
					    progressBar.css('width', valPercent + '%');
				    } else {
					    progressBar.css('height', valPercent + '%');
				    }
                }
			}
		}
	});
	$.extend($.ui.igProgressBar, {version: '13.1.20131.2039'});

    //////////////////////////////////////////////////////////
    //For now igButton could be applied to these elements:
    //  1. input type="button" 
    //  2. input type="submit"
    //  3. a
    //  4. div
    //////////////////////////////////////////////////////////

    $.widget("ui.igButton", {
        options: {
	        width: null,
	        height: null,
	        link: { href: null, target: null, title: null },
	        labelText: "",
	        centerLabel: false,
	        css: null,
            onlyIcons: false,
            icons: {primary: null, secondary: null},
			// M.H. 12 May 2011 - fix bug 74763: add new option for title
            title: false
	    },

        _id: function (suffix) {
			return this.element[0].id + suffix;
        },

        _create: function () {
            var self = this, o = self.options,
                e = this.element,
                inputType,
                css = {
                    //            "baseClasses": "ui-widget ui-igbutton ui-button ui-state-default",
                    //            "baseDisabledClass": "ui-igbutton-disabled ui-state-disabled",
                    /* class for IE6 */
                    "buttonClassIE6": "ui-ie6",
                    "buttonClasses": "ui-button ui-igbutton ui-widget ui-widget-content ui-corner-all ui-state-default",
                    "buttonHoverClasses": "ui-state-hover",
                    "buttonActiveClasses": "ui-state-active", //when button is clicked 
                    "buttonFocusClasses": "ui-state-focus", //when button get focus
                    "buttonLabelClass": "ui-button-text",
                    "buttonDisabledClass": "ui-state-disabled",
                    "buttonPrimaryIconClass": "ui-button-icon-primary ui-icon",
                    "buttonMainElementPrimaryIconClass": " ui-button-text-icon-primary",
                    "buttonMainElementSecondaryIconClass": " ui-button-text-icon-secondary",
                    "buttonSecondaryIconClass": "ui-button-icon-secondary ui-icon",
                    "buttonIconsOnly": "ui-button-icons-only",
                    "buttonIconOnly": "ui-button-icon-only",
                    "buttonIcons": "ui-button-text-icons",
                    "buttonTextOnlyClass" : "ui-button-text-only"
                };

            this._attached = false;

            o.css = $.extend(css, o.css);
            self._getInitValues();

            if (e.is('div')) {
                self._renderDivButton();
            } else if (e.is('a')) {
                self._renderAHref();
            } else if (e.is('input')) {
                inputType = e.attr('type').toUpperCase();
                if (inputType === 'BUTTON' || inputType === 'SUBMIT' || inputType === 'RESET') {
                    self._renderInput();
                } else {
                    // we could not render button for other types
                    return;
                }
            } else if (e.is('button')) {
                self._renderButton();
            } else {
                // we could not render button for other DOM types
                return;
            }

            if (o.width !== null) {
                self._setWidth(o.width);
            }
            if (o.height !== null) {
                self._setHeight(o.height);
            }

            e.addClass(o.css.buttonClasses).addClass(o.css.buttonDefaultClasses);

            if (o.centerLabel === true) {
                self._centerLabel();
			}

            if (o.disabled) {
                self._disableButton(); //it should be dettached events too
			} else {
                self._enableButton();
			}
            self._setOnlyIcons();

            /* HTML 5 Properties */
            e.attr("role", "button");
            e.attr("aria-disabled", "false");
            /* //HTML 5 Properties */

            self._attachButtonEvents();

			// M.H. 12 May 2011 - fix bug 74763:
            self.setTitle(o.title);
            return this;
        },

		setTitle: function (title) {
            // M.H. 12 May 2011 - fix bug 74763: add method setTitle - add/remove title attribute
            var e = this.element;

            if (title === false) {
                e.removeAttr('title');
            } else {
                e.attr('title', title);
            }
        },

        widget: function () {
		    return this.element;
	    },

        _isRedirect: function () {
            return this.options.link.href !== null;
        },
        /* render button functions according to tag name of main element of widget */

        _renderDivButton: function () {
            this._setLabel();
        },

        _renderAHref: function () {
            //set link properties if it is set in options            
            this._setLinkOptions(true);
            this._setLabel();
        },

        _renderInput: function () {
            var e = this.element;

            e.attr('value', this.options.labelText);
        },

        _renderButton: function () {
            this._setLabel();
        },

        /* //render button functions according to tag name */
        _disableButton: function () {
            var self = this, e = self.element;
            e.addClass(self.options.css.buttonDisabledClass);

            //we should remove attributes for A because in FF disabled attribute does not work for anchors
            if (e.is('a') === true) {
                e.removeAttr('href');
                e.removeAttr('target');
                e.removeAttr('title');
            } else {
                e.attr('disabled', 'true');
            }
        },

        _enableButton: function () {
            var self = this, e = self.element, o = this.options;

            if (e.hasClass(o.css.buttonDisabledClass)) {
                e.removeClass(o.css.buttonDisabledClass);
            }

            e.removeAttr('disabled');
            if (e.is('a') === true) {
                self._setLinkOptions(true);
            }
        },

        _setLabel: function () {
            var e = this.element,
                o = this.options,
                icons = o.icons,
                css = o.css,
                html = '',
                isSetPrimary = this._isSetPrimaryIcon(),
                isSetSecondary = this._isSetSecondaryIcon(),
                labelText = (o.labelText === null || o.labelText === '') ? e.text() : o.labelText;

            e.attr('title', o.labelText);

            if (e.is('input')) {
                e.attr('value', o.labelText);
                return;
            }

            if (isSetPrimary) {
                html += '<span class="' + css.buttonPrimaryIconClass + ' ' + icons.primary + '" id="' + this._id('_picn') + '"></span>';
            }

            html += '<span class="' + o.css.buttonLabelClass + '" id="' + this._id('_lbl') + '">' + labelText + '</span>';
            if (isSetSecondary) {
                html += '<span class="' + css.buttonSecondaryIconClass + ' ' + icons.secondary + '" id="' + this._id('_sicn') + '"></span>';
            }

            if (isSetPrimary && isSetSecondary && !o.onlyIcons) {
                e.addClass(css.buttonIcons);
            } else if (o.onlyIcons) {
                this._setOnlyIcons();
            } else if (isSetPrimary) {
                e.addClass(css.buttonMainElementPrimaryIconClass);
            } else if (isSetSecondary) {
                e.addClass(css.buttonMainElementSecondaryIconClass);
            } else {
                e.addClass(css.buttonTextOnlyClass);
            }

            e.html(html);
        },

        _setOnlyIcons: function () {
            var e = this.element, css = this.options.css;
            if (this.options.onlyIcons === false) {
                if (e.hasClass(css.buttonIconsOnly)) {
                    e.removeClass(css.buttonIconsOnly);
                }
                if (e.hasClass(css.buttonIconOnly)) {
                    e.removeClass(css.buttonIconOnly);
                }
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    e.addClass(css.buttonIcons);
                }
            } else {
                if (this._isSetPrimaryIcon() && this._isSetSecondaryIcon()) {
                    e.addClass(css.buttonIconsOnly);
                } else {
                    e.addClass(css.buttonIconOnly);
                }
            }
        },

        _setLinkOptions: function (isAHref) {
            var self = this, e = self.element, o = this.options;
            //if main element is really isAHref then we should only set its attributes 
            //otherwise we should set as inner data its properties and             
            if (isAHref) {
                //set link properties if it is set in options
                if (o.link !== null && o.link.href !== null) {
                    e.attr('href', o.link.href);
                } else {
                    e.removeAttr('href');
                }

                if (o.link !== null && o.link.target !== null) {
                    e.attr('target', o.link.target);
                } else {
                    e.removeAttr('target');
                }

                if (o.link !== null && o.link.title !== null) {
                    e.attr('title', o.link.title);
                } else {
                    e.removeAttr('title');
                }
            }
        },
        /* //render button */
        _setWidth: function (value) {
            var e = this.element;

            if (value === null) {
                e.css('width', '');
            } else {
                e.css('width', value);
            }
        },
        _setHeight: function (value) {
            var e = this.element;
            if (value === null) {
                e.css('height', '');
            } else {
                e.css('height', value);
            }
        },
        _setOption: function (key, val) {
            // Particular Modifier
            var e = this.element, self = this;
            $.Widget.prototype._setOption.apply(this, [key, val]);
            switch (key) {
			case "width":
				self._setWidth(val);
				break;
			case "height":
				self._setHeight(val);
				break;
			case "link":
				self._setLinkOptions(e.is('a') === true);
				break;
			case "disabled":
                val = Boolean(val);

                if (val === true) {
					self._disableButton();
				} else {
                    self._enableButton();
				}
				break;
			case "labelText":
                self._setLabel();
				break;
			case "centerLabel":
				val = Boolean(val);
				if (val) {
					self._centerLabel();
				} else {
					self._removeCenterLabel();
				}
				break;
            case "onlyIcons":
                val = Boolean(val);
                self._setOnlyIcons();
                break;
            case "icons":
                self._setLabel();
                break;
			// M.H. 12 May 2011 - fix bug 74763 - add option for title
			case "title":
				self.setTitle(val);
				break;
			default:
				break;
            }
        },

        _centerLabel: function () {
            var self = this,
                e = self.element,
                l = $('#' + self._id('_lbl')),
				left = (e.width() - l.width()) / 2,
                top = (e.height() - l.height()) / 2;
            l.css({ position: 'relative', top: top + 'px', left: left + 'px' });
        },

        _removeCenterLabel: function () {
            //just removes css properties set from _centerLabel
            var self = this,
                l = $('#' + self._id('_lbl'));

            if (l.length > 0) {
                l.css({ position: '', top: '', left: '' });
            }
        },

        _dettachEvents: function () {
            var self = this, e = self.element;

            this._attached = false;
            e.unbind(this._events);
            return;
        },

        /* Event Functions */
        _onMouseOver: function (event) {
            //var self = event.data.self;
			var noCancel;
            if (this.options.disabled === true) {
                return;
            }

			noCancel = this._trigger('mouseover', event);

			if (noCancel) {
				this.element.addClass(this.options.css.buttonHoverClasses);
			}
        },

        _onMouseOut: function (event) {
            var self = this, e = self.element, o = this.options, noCancel;
            if (o.disabled === true) {
                return;
            }
			noCancel = self._trigger('mouseout', event);

			if (noCancel) {
				e.removeClass(o.css.buttonHoverClasses);
			}
        },

        _onClick: function (event) {
            var e = this.element, self = this, o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }

			noCancel = self._trigger('click', event);
			if (noCancel) {
				this.element.removeClass(o.css.buttonHoverClasses);
				//if element is link and is not a
				if (self._isRedirect() === true && e.is('a') === false) {
					if (o.link.target === '_blank') {
						window.open(o.link.href);
					} else {
						window.location = o.link.href;
					}
				}
			}
        },

        _onMouseDown: function (event) {
            var e = this.element, o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }

			noCancel = this._trigger('mousedown', event);
			if (noCancel) {
				e.removeClass(o.css.buttonHoverClasses);
				e.addClass(o.css.buttonActiveClasses);
			}
        },

        _onMouseUp: function (event) {
            var o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }
			noCancel = this._trigger('mouseup', event);

			if (noCancel) {
				this.element.removeClass(o.css.buttonHoverClasses);
				// M.H. 15 March 2012 Fix for bug #104916
				this.element.removeClass(o.css.buttonActiveClasses);
            }
        },

        _onFocus: function (event) {
            var o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }
			noCancel = this._trigger('focus', event);

			if (noCancel) {
				this.element.addClass(o.css.buttonFocusClasses);
            }
        },

        _onBlur: function (event) {
            var o = this.options, noCancel;

            if (o.disabled === true) {
                return;
            }
			noCancel = this._trigger('blur', event);

			if (noCancel) {
				this.element.removeClass(o.css.buttonActiveClasses);
				this.element.removeClass(o.css.buttonFocusClasses);
            }
        },

		// M.H. 22 Nov. 2011 Fix for bug 84440
		_onKeyDown: function (event) {
			var o = this.options;

            if (o.disabled === true) {
                return;
            }
			this._trigger('keydown', event);
		},

        _attachButtonEvents: function () {
            var self = this,
                e = self.element;

            //already attached - we should not attached events twice
            if (this._attached === true) {
                return;
            }
            this._attached = true;
            //e.bind('mouseover', {self: self}, self._onMouseOver)
            this._events = {
                mouseover: function (e) {
					self._onMouseOver(e, self);
				},
                click: function (e) {
					self._onClick(e);
				},
                mouseout: function (e) {
					self._onMouseOut(e);
				},
                mousedown: function (e) {
					self._onMouseDown(e);
				},
                mouseup: function (e) {
					self._onMouseUp(e);
				},
                focus: function (e) {
					self._onFocus(e);
				},
                blur: function (e) {
					self._onBlur(e);
				},
				// M.H. 22 Nov. 2011 Fix for bug 84440
				keydown: function (e) {
					self._onKeyDown(e);
				}
            };
            e.bind(this._events);
        },

        /************** Helper Functions *******************/
        _isSetPrimaryIcon: function () {
            var primary = this.options.icons.primary, isSet = false;

            if (primary !== undefined && primary !== null) {
                isSet = true;
            }

            return isSet;
        },

        _isSetSecondaryIcon: function () {
            var secondary = this.options.icons.secondary, isSet = false;

            if (secondary !== undefined && secondary !== null) {
                isSet = true;
            }

            return isSet;
        },

        _setAttribute: function (e, attr, attrName) {
            if (attr !== undefined && attr !== '' && attr !== null) {
                e.attr(attrName, attr);
            } else {
                e.removeAttr(attrName);
            }
        },

        /************** //Helper Functions *******************/

        destroy: function () {
            this._dettachEvents();
            this._rollbackInitValues();
			// M.H. 29 Oct 2012 Fix for bug #120642
			this._events = null;
            $.Widget.prototype.destroy.apply(this, arguments);
        },


        /**************************** Function which cache and rollback element style - need for destroy function  ***************************************/
        _getInitValues: function () {
            //cache all properties 
            // on destroy the widget will rollback this settings
            var e = this.element;

            this._innerHTML = e.html();
            this._cssClasses = e.attr('class');
            this._role = e.attr('role');

            // if e is anchor
            this._href = e.attr('href');
            this._title = e.attr('title');
            this._target = e.attr('target');

            this._width = e.attr('width');
            this._height = e.attr('height');
            this._disabled = e.attr('disabled');

            this._value = e.val();//in case elemen is input type="button|submit|"
        },

        _rollbackInitValues: function () {
            var e = this.element;
            e.html(this._innerHTML);

            if (e.is('a')) {
                this._setAttribute(e, this._href, 'href');

                this._setAttribute(e, this._target, 'target');
            } else if (e.is('input')) {
                e.val(this._value);
            }

            this._setAttribute(e, this._title, 'title');

            this._setAttribute(e, this._width, 'width');
            this._setAttribute(e, this._height, 'height');

            this._setAttribute(e, this._cssClasses, 'class');
            this._setAttribute(e, this._role, 'role');
            this._setAttribute(e, this._disabled, 'disabled');
        }
    });
    $.extend($.ui.igButton, { version: '13.1.20131.2039' });

	$.widget("ui.igTooltip", {
		css: {
			baseClasses: "ui-widget ui-igtooltip ui-igplayer-tooltip",
			arrowImageBaseClass: "ui-igtooltip-arrow-"
		},

		options: {
			text: '',
			arrowLocation: 'top'
		},

		_setOption: function (key, value) {
			$.Widget.prototype._setOption.apply(this, arguments);
			switch (key) {
			case 'text':
				$('div.ui-widget-content', this.element).html(value);
				break;
			case 'arrowLocation':
				$('div', this.element).remove(); // destroy tool tip and render new one.
				this._renderTooltip();
				break;
			}
		},

		_create: function () {
			if (this.element.is('div')) {
				this._renderTooltip();
				this.element.addClass(this.css.baseClasses);
			}
		},

		_renderTooltip: function () {
			switch (this.options.arrowLocation) {
			case 'top':
				this._createArrowDiv();
				this._createContentDiv();
				break;
			case 'bottom':
				this._createContentDiv();
				this._createArrowDiv();
				break;
			case 'left':
				break;
			case 'right':
				break;
			}
		},

		_createContentDiv: function () {
			var t = (this.options.text && this.options.text.length > 0) ? this.options.text : '';
			$('<div class="ui-widget-content ui-corner-all">' + t + '</div>').appendTo(this.element);
		},

		_createArrowDiv: function () {
			$('<div class="' + this.css.arrowImageBaseClass + this.options.arrowLocation + '"></div>').appendTo(this.element);
		},

		destroy: function () {
			this.element.children().remove();
			this.element.removeClass(this.css.baseClasses);
		}
    });
    $.extend($.ui.igTooltip, {version: '13.1.20131.2039'});
	$.widget("ui.igToolbar", {
		options: {
			height: null,
			width: null,
			allowCollapsing: true,
			collapseButtonIcon: "ui-igbutton-collapsed",
			expandButtonIcon: "ui-igbutton-expanded",
			name: '',
			displayName: '',
			items: [],
			isExpanded: true
		},
		events: {
			toolbarButtonClick: "toolbarButtonClick",
			toolbarComboOpening: "toolbarComboOpening",
			toolbarComboSelected: "toolbarComboSelected",
			toolbarMouseDown: "toolbarMouseDown",
			toolbarCustomItemClick: "toolbarCustomItemClick",
			itemRemoved: "itemRemoved",
			itemAdded: "itemAdded",
			collapsing: "collapsing",
			collapsed: "collapsed",
			expanding: "expanding",
			expanded: "expanded",
			itemDisable: "itemDisable",
			itemEnabled: "itemEnabled"
		},
		css: {
			toolbarWidget: "ui-widget ui-widget-content ui-igtoolbar ui-corner-all",
			toolbarWrapperConteiner: "ui-widget ui-widget-content ui-igtoolbar ui-corner-all",
			toolbarCollapsedButton: "ui-state-default ui-igbutton-all-caps",
			igToolbarSeparator: "ig-toolbar-separator ui-widget-content"
		},
		_id: function (id) {
			return this.element[0].id + id;
		},

		widget: function () {
			return this.element;
		},
		_create: function () {
			this._render();
			this._createItems();
		},
		_init: function () {
			this._attachEvents();
			if (!this.options.isExpanded) {
				this.buttonsList.hide();
				this.collapseBtn.igToolbarButton("toggle")
					.children(":first")
					.switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
			}
			// this._width = this.element.height() + this.buttonsList.width();
			this._width = this.collapseBtn.outerWidth(true) + this.buttonsList.width();
			this._height = this.element.height();
		},
		_render: function () {
			var o = this.options;

			this.element.addClass(this.css.toolbarWidget);
			this.element
				.width(this.options.width)
				.height(this.options.height);

			this.collapseBtn = $('<div tabIndex="0" id="' + this._id('_collapseButton') + '"></div>')
				.appendTo(this.element).igToolbarButton({
					"onlyIcons": true,
					"labelText": "&nbsp;",
					"title": $.ig.HtmlEditor.locale.collapseButtonTitle  + ' ' + this.options.displayName,
					"icons": {
						"primary": o.collapseButtonIcon
					}
				});

			this.toolbarBody = this.element.find('#' + this._id('_toolbar'));

			this.buttonsList = $('<span id="' + this._id('_toolbar_buttons') + '" style="display:inline-block"></span>')
				.appendTo(this.element);
		},
		_onCollapse: function (e) {
			var noCancel, event, cancelableEvent,
				o = this.options, width,
				self = this,
				visibility,
				opacity;

			if (!o.allowCollapsing) {
				return;
			}
			if (o.isExpanded) {
				event = "collapsed";
				cancelableEvent = "collapsing";
				o.isExpanded = false;
				width = this.element.height();
				this.collapseBtn.attr('title', $.ig.HtmlEditor.locale.expandButtonTitle + ' ' + this.options.displayName).children(":first").switchClass(this.options.collapseButtonIcon, this.options.expandButtonIcon);
				visibility = "hidden";
				opacity = "0.0";
			} else {
				event = "expanded";
				cancelableEvent = "expanding";
				o.isExpanded = true;
				width = this._width;
				this.buttonsList.show();
				this.collapseBtn.attr('title', $.ig.HtmlEditor.locale.collapseButtonTitle + ' ' + this.options.displayName).children(":first").switchClass(this.options.expandButtonIcon, this.options.collapseButtonIcon);
				visibility = "visible";
				opacity = "1";
			}

			e.stopPropagation();
			//TODO: toolbar: {} toolbar object describing the buttons in it, the actions, etc. ????
			noCancel = this._trigger(this.events[cancelableEvent], e, {owner: this, toolbarElement: this.element, toolbar: {}});
			if (noCancel) {
				this.element.css({overflow: "hidden"});
				this.element.animate({width: width}, 300, null, function () {
				    if (!o.isExpanded) {
						self.buttonsList.hide();
					}
					if (document.documentMode === 7) {
						self.buttonsList.attr("style", "visibility: " + visibility + " !important;");
					}
					self._trigger(self.events[event], e, {owner: self, toolbarElement: self.element, toolbar: {}});
				});
			}
		},
		_setOption: function (name, value) {
			$.Widget.prototype._setOption.apply(this, arguments);

			switch (name) {
			case 'allowCollapsing':
				this.options.allowCollapsing = value;
				break;
			// case 'collapseButtonIcon':
				// this._setCollapseExpandButtonIcon();
				// break;
			case 'items':
				this._updateItems(value);
				break;
			}
		},
		_isSelectedAction: function (el, props, itemOptionObj) {
			if (props.value) {
				el.addClass("ui-state-active");
			}
		},
		_tooltipAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.title = props.value;
			} else {
				el.igToolbarButton("option", "title", props.value);
			}
		},
		_buttonIconAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.icons = {primary: props.value};
			} else {
				el.igToolbarButton("option", "icons", {primary: props.value});
			}
		},
		_comboDataSourceAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.dataSource = props.value;
			} else {
				el.igCombo("option", "dataSource", props.value);
			}
		},
		_comboWidthAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.width = props.value;
			} else {
				el.igCombo("option", "width", props.value);
			}
		},
		_comboHeightAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.height = props.value;
			} else {
				el.igCombo("option", "height", props.value);
			}
		},
		_spltBtnTooltipAction: function (el, props, itemOptionObj) {

		},
		_comboSelectedItem: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.selectedItems = [{value:  props.value}];
			} else {
				el.igCombo("option", "selectedItems", [{value:  props.value}]);
			}
		},
		_spltButtonColorAction: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.defaultColor = props.value;
			} else {
				el.igColorPickerSplitButton("option", "defaultColor", props.value);
			}
		},
		_comboDropDownListWidth: function (el, props, itemOptionObj) {
			if (itemOptionObj !== undefined) {
				itemOptionObj.dropDownWidth = props.value;
			} else {
				el.igCombo("option", "dropDownWidth", props.value);
			}
		},
		_createItems: function () {
			var o = this.options,
				i,
				self = this,
				itemProps = {},
				newItem,
				tbItemsHash = {
					button: "igToolbarButton",
					combo: "igCombo",
					splitButton: "igSplitButton",
					splitButtonColor: "igColorPickerSplitButton"
				},
				tbItemsPropsTraversing = function (key, property) {
					var scope = o.items[i].scope || self;
					if (property.action !== undefined && $.isFunction(scope[property.action])) {
						scope[property.action](newItem, property, itemProps);
						return;
					}
					itemProps[key] = property.value;
				};
			this.buttonsList.empty();
			for (i = 0; i < o.items.length; i++) {
				itemProps = {};
				newItem = (o.items[i].callbackRenderer() || $('<div tabIndex="0"></div>'))
					.attr("id", this._id("_item_" + o.items[i].name)).appendTo(this.buttonsList);

				$.each(o.items[i].getProperties(), tbItemsPropsTraversing);

				if (tbItemsHash.hasOwnProperty(o.items[i].type)) {
					newItem[tbItemsHash[o.items[i].type]](itemProps);
					continue;
				}
				// newItem.appendTo(this.buttonsList);
			}
		},
		_updateItems: function (items) {
			var o = this.options,
				updProps,
				i,
				j,
				scope,
				el,
				key; //TODO Check this!!

			for (i = 0; i < items.length; i++) {
				updProps = items[i].getUpdatedProperties();
				el = this.getItem(items[i].name);
				scope = o.items[i].scope || this;
				for (j = 0; j < updProps.length; j++) {
					if (updProps[j].action !== undefined && $.isFunction(scope[updProps[j].action])) {
						scope[updProps[j].action](el, updProps[j]);
						continue;
					}
					if (items[i] instanceof $.ig.igToolbarButtonDescriptor) {
						el.igToolbarButton("option", key, updProps[j]);
					}

					if (o.items[i] instanceof $.ig.igToolbarComboDescriptor) {
						el.igCombo("option", key, updProps[j]);
					}
				}
			}
		},
		_getWidgetType: function (el) {
			var data, i;
			if (el === undefined) {
				return;
			}
			data = el.data();
			for (i in data) {
				if (data.hasOwnProperty(i) && data[i].widgetName) {
					return data[i].widgetName;
				}
			}
		},
		_isWidgetSupported: function (name) {
			var i;
			for (i = 0; i < this.supportedWidgets.length; i++) {
				if (this.supportedWidgets[i].name === name) {
					return true;
				}
			}
		},
		_attachEvents: function () {
			var toolbarItemsEvents = "igtoolbarbuttonclick igsplitbuttonclick igcolorpickersplitbuttoncolorselected";

			this.element.delegate(".ui-widget", toolbarItemsEvents, $.proxy(this._onToolbarItemInteraction, this));
			//Here we bind to igCombo items on click.
			this.element.delegate(":ui-igCombo", "click", $.proxy(this._onComboListItemClick, this));
			this.collapseBtn.bind("igtoolbarbuttonclick", $.proxy(this._onCollapse, this));
		},
		_onToolbarItemInteraction: function (e, ui) {
			var selectedItemValue,
				targetWidget = $(e.target).parentsUntil(":ui-igToolbar").eq(-2),
				selectedItemIndex,
				triggeredEvent,
				o = this.options;
			// B.C. 5/22/2012. Bug #112445. Fixes the difference between e.target in the different versions of jQuery.
			if (targetWidget.length === 0) {
				targetWidget = $(e.target);
			}
			selectedItemIndex = this.buttonsList.children().index(targetWidget);
			switch (e.type) {
			case 'igcomboselectionchanged':
				selectedItemValue = ui.items[0].value;
				triggeredEvent = this.events.toolbarComboSelected;
				break;
			case 'igtoolbarbuttonclick':
				triggeredEvent = this.events.toolbarButtonClick;
				break;
			default:
				triggeredEvent = this.events.toolbarCustomItemClick;
				selectedItemValue = ui.value;
				break;
			}

			this._trigger(triggeredEvent, e, {
				name: ui.name || o.items[selectedItemIndex].name,
				value: selectedItemValue,
				handler: o.items[selectedItemIndex].handler(),
				scope: o.items[selectedItemIndex].getProperty("scope"),
				itemProperties: o.items[selectedItemIndex].getProperties(),
				toolbarItem: targetWidget,
				toolbarName: o.name
			});
		},
		_onComboListItemClick: function (e) {
			var target = $(e.target), dataSource, selectedItemIndex, selectedItem, toolbarItemIndex, toolbarItem;
			if (!target.hasClass("ui-igcombo-listitem") && !target.parent().hasClass("ui-igcombo-listitem")) {
				return;
			}
			if (target.hasClass("ui-igcombo-listitem")) {
				selectedItem = target;
			} else if (target.parent().hasClass("ui-igcombo-listitem")) {
				selectedItem = target.parent();
			}

			selectedItemIndex = selectedItem.data("id") - 100;
			dataSource = $(e.currentTarget).igCombo("option", "dataSource");
			toolbarItemIndex = this.buttonsList.children().index($(e.currentTarget));
			toolbarItem = this.options.items[toolbarItemIndex];
			this._trigger(this.events.toolbarComboSelected, e, {
				name: toolbarItem.name,
				value: dataSource[selectedItemIndex].text,
				handler: toolbarItem.handler(),
				scope: toolbarItem.getProperty("scope"),
				itemProperties: toolbarItem.getProperties(),
				toolbarItem: $(e.currentTarget).data("igCombo"),
				toolbarName: this.options.name
			});
		},
		getItem: function (index) {
			var result;
			if (!isNaN(parseInt(index, 10))) {
				return this.buttonsList.eq(index);
			}
			if (typeof index === "string") {
				result = this.buttonsList.find('#' + this._id("_item_" + index));
				if (result.length) {
					return result;
				}
			}
		},
		addItem: function (item) {
			if (this._isWidgetSupported(item.type)) {
				this.options.items.push(item);
				this._createItems();
				this._trigger(this.events.itemAdded);
			}
		},
		removeItem: function (index) {
			this.buttonsList.eq(index).remove();
			this._trigger(this.events.itemremoved);
		},
		disableItem: function (index, disabled) {
			var item = this.getItem(index),
				widgetType = this._getWidgetType(item);
			if (widgetType) {
				item[this._getWidgetType(item)]("option", "disabled", disabled);
				this._trigger(this.events.itemDisable, {isDisabled: disabled});
			}
		},
		activateItem: function (index, activated) {
			var item = this.getItem(index),
				action = activated ? item.addClass : item.removeClass;

			action.call(this, "ui-state-active");
			item.igToolbarButton("options", "isSelected", activated);
			this._trigger(this.events.itemActivated, {isActivated: activated});
		},
		deactivateAll: function () {
			this.buttonsList
				.find(".ui-igbutton.ui-state-active")
				.removeClass("ui-state-active")
				.igToolbarButton("option", "isSelected", false);
		},

		_setCollapseExpandButtonIcon: function () {
			if (this.options.collapseButtonIcon) {
				this.collapseBtn.switchClass('ui-icon-triangle-1-w', this.options.collapseButtonIcon);
			}
		},
		destroy: function () {
			$.Widget.prototype.destroy.apply(this, arguments);

			this.element.undelegate();
			this.element.unbind();
			this.element.removeClass(this.css.toolbarWrapperConteiner)
				.find("#" + this._id("_toolbar")).removeClass(this.css.toolbarWidget).end()
				.find("#" + this._id("_collapseButton")).removeClass(this.css.toolbarCollapsedButton).end()
				.find(":ui-igToolbarButton").igToolbarButton("destroy").end()
				.find(":ui-igCombo").igCombo("destroy").end()
				.find(":ui-igSplitButton").igSplitButton("destroy").end()
				.find(":ui-igColorPickerSplitButton").igColorPickerSplitButton("destroy");
			delete this.buttonsList;
			delete this.collapseBtn;
			delete this.toolbarBody;
		}
	});
	$.ig = $.ig || {};
	$.ig.igToolbarItemBaseDescriptor = Class.extend({
		settings: {
			width: null,
			height: null,
			props: {
				scope: {
					value: null
				}
			}
		},
		_updatedProperties: [],
		init: function (item) {
			this.settings = $.extend(true, {}, this.settings, item);
			this.name = item.name;
			this.type = item.type;
			if (this.settings.scope) {
				this.settings.props.scope = this.settings.scope;
			}
		},
		updateProperty: function (name, value) {
			this.settings.props[name].value = value;
			this._updatedProperties.push(this.settings.props[name]);
		},
		getProperty: function (name) {
			return this.settings.props[name];
		},
		getUpdatedProperties: function () {
			return this._updatedProperties;
		},
		getProperties: function () {
			return this.settings.props;
		},
		callbackRenderer: function () {
			if (this.settings.callbackRenderer && $.isFunction(this.settings.callbackRenderer)) {
				return this.settings.callbackRenderer();
			}
		},
		handler: function () {
			return this.settings.handler;
		}
	});
	$.ig.igToolbarButtonDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
		settings: {
			props: {
				onlyIcons: {
					value: true
				},
				labelText: {
					value: "&nbsp;"
				}
			}
		},
		init: function (item) {
			this._super(item);
		}
	});
	$.ig.igToolbarSplitButtonDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
		settings: {
			props: {
				items: []
			}
		},
		init: function (item) {
			this._super(item);
		}
	});
	$.ig.igToolbarComboDescriptor = $.ig.igToolbarItemBaseDescriptor.extend({
		settings: {
			props: {
				valueKey: {
					value: 'text'
				},
				textKey: {
					value: 'value'
				},
				enableCheckboxes: {
					value: false
				},
				dropDownOnFocus: {
					value: true
				},
				selectedItems: {
					value: [{index: 0}]
				},
				enableClearButton: {
					value: false
				},
				dataSource: {
					value: null
				},
				mode: {
					value: "dropdown"
				},
				dropDownAsChild: {
					value: true
				},
				focusOnSelect: {
					value: false
				}
			}
		},
		init: function (item) {
			this._super(item);
			if (this.settings.dataSource) {
				this.settings.props.dataSource.value = this.settings.dataSource;
			}
		}
	});
	$.widget("ui.igToolbarButton", $.ui.igButton, {
		options: {
			allowToggling: true,
			isSelected: false
		},
		ENTER: 13,
		_setOption: function (name, value) {
			$.ui.igButton.prototype._setOption.apply(this, arguments);

			switch (name) {
			case "allowToggling":
				this._setToggling(value);
				break;
			case "isSelected":
				this.options.isSelected = value;
				break;
			}
		},
		_init: function () {
			var self = this,
				o = this.options;
			$.ui.igButton.prototype._init.apply(this);
			this._isToggled = false;
			this._setToggling(this.options.allowToggling);
			this.element.bind("keypress", $.proxy(this._onEnterKey, this));
			this.element.unbind("blur");
			this.element.bind("blur", function (e) {
				self.element.removeClass(o.css.buttonFocusClasses);
			});
		},
		_setToggling: function (value) {
			var o = this.options,
				self = this;
			o.allowToggling = value;
			if (o.allowToggling) {
				this.element.unbind("mouseup");
				this.element.bind("click", function () {
					if (o.isSelected) {
						self.element.removeClass(o.css.buttonActiveClasses);
					}
					self.element.removeClass(o.css.buttonFocusClasses);
					o.isSelected = !o.isSelected;
				});
			} else {
				this.element.bind("mouseup", this._events.mouseup);
				this.element.unbind("mousedown");
				this.element.bind("mousedown", this._events.mousedown);
			}
		},
		//TODO: Is there any need from this function?
		toggle: function () {
			var self = this, e = self.element, o = this.options;
			if (o.disabled === true || o.allowToggling === false) {
				return;
			}
			o.isSelected = !o.isSelected;
			e.toggleClass(o.css.buttonActiveClasses);
		},
		_onEnterKey: function (e) {
			if (e.keyCode !== this.ENTER) {
				return;
			}
			this.element.mousedown();
		},
		destroy: function () {
			$.ui.igButton.prototype.destroy.call(this);
			this.element.unbind();
			this.element.removeClass("");
		}
	});
	/*
		uiMouseWrapper that exposes the ui.mouse widget's functionality with events
	*/
	$.widget("ui.mouseWrapper", $.ui.mouse, {
		options: {
			cancel: ':input,option',
			distance: 1,
			delay: 0
		},
		events: {
			start: "start",
			drag: "drag",
			stop: "stop",
			capture: "capture"
		},
		_create: function () {
			var self = this,
				originalMouseDown = this._mouseDown;

			if ($.ig.util.isIE9) {
				//A.Y. required to fix bug 92472. 
				//Which is also a know jQuery UI 1.8.16 bug that is reproducable in Sortable plugin. (http://bugs.jqueryui.com/ticket/7519)

				//overwrite original _mouseDown with our function
				this._mouseDown = function (event) {
					var originalPreventDefault = event.preventDefault,
						result;

					//replace the event's preventDefault with an empty function
					//making it imposible to prevent the default
					event.preventDefault = function () { };

					//apply the "original this" and the arguments to the original _mouseDown
					result = originalMouseDown.apply(self, [event]);

					//return the event to its original state
					event.preventDefault = originalPreventDefault;

					return result;
				};
			}

			this._mouseInit();
		},
		destroy: function () {
			this._mouseDestroy();
			return this;
		},
		_mouseStart: function (event) {
			return this._trigger(this.events.start, event);
		},
		_mouseDrag: function (event) {
			return this._trigger(this.events.drag, event);
		},
		_mouseStop: function (event) {
			return this._trigger(this.events.stop, event);
		},
		_mouseCapture: function (event) {
			return this._trigger(this.events.capture, event);
		}
	});
	$.widget("ui.igPopover", {
		css: {
			baseClasses: "ui-widget ui-igtooltip",
			arrowImageBaseClass: "ui-igtooltip-arrow-",
			closeButtonClass: "ui-icon ui-icon-close"
		},
		options: {
			/* type="bool" controls whether the popover renders with a header or not */
			renderHeader: false,
			/* type="bool" controls whether the popover renders a functional close button */
			renderCloseButton: true,
			/* type="bool" controls whether the popover will close on blur or not */
			closeOnBlur: true,
			/* type="auto|left|right|top|bottom" controls the direction in which the control shows relative to the target element. 
			"auto" lets the control show on the side where enough space is available with the following priority top > bottom > right > left.
			*/
			direction: "auto",
			/* type="auto|balanced|start|end" controls the position of the tooltip according to the target element. "auto" lets
			the control choose a position depending on available space with the following priority balanced > end > start.
			*/
			position: "auto",
			/* type="int" defines width for the popover. leave null for auto. */
			width: null,
			/* type="int" defines height for the popover. leave null for auto. */
			height: null,
			/* type="int|text" defines width the popover won't exceed even if no specific one is set. */
			defaultMaxWidth: 200,
			/* type="object" defines a target for the popover control. if left null the user needs to show and hide the popover manually. */
			target: null,
			/* sets the time popover fades in and out when showing/hiding */
			fadeTimespan: 150
		},
		events: {
			/* cancel="true" Event fired before popover is shown.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover will show for.
			Use ui.content to get or set the content to be shown as a string.
			Use ui.popover to get the popover element showing.
			*/
			popoverShowing: "popoverShowing",
			/* Event fired after popover is shown.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover showed for.
			Use ui.content to get the content that was shown as a string.
			Use ui.popover to get the popover element shown.
			*/
			popoverShown: "popoverShown",
			/* cancel="true" Event fired before popover is hidden.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover will hide for.
			Use ui.content to get the current content displayed in the popover as a string.
			Use ui.popover to get the popover element hiding.
			*/
			popoverHiding: "popoverHiding",
			/* Event fired after popover is hidden.
			Function takes arguments evt and ui.
			Use ui.element to get the element the popover hid for.
			Use ui.content to get the current content displayed in the popover as a string.
			Use ui.popover to get the popover element hiding.
			*/
			popoverHidden: "popoverHidden"
		},
		_create: function () {
			this._priorityDir = [ "top", "bottom", "right", "left" ];
			this._arrowDir = [ "bottom", "top", "left", "right" ];
			this._positions = [ "balanced", "start", "end" ];
			this._directionIndex = -1;
			this._positionIndex = -1;
			this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
		},
		_createWidget: function (options, element) {
			$.Widget.prototype._createWidget.apply(this, arguments);
			this.element = $(element);
			if (element && element.nodeType !== undefined) {
				this._renderPopover();
				this._attachEventsToTarget();
			}
			if (this.options.direction !== "auto" || this.options.position !== "auto") {
				this._getPrioritiesIndex();
			}
		},
		_setOption: function (key, value) {
			switch (key) {
			case "direction":
				this.options.direction = value;
				if (this.options.direction !== "auto") {
					this._getPrioritiesIndex();
				}
				this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
				break;
			case "position":
				this.options.position = value;
				if (this.options.position !== "auto") {
					this._getPrioritiesIndex();
				}
				this._forced = this.options.direction !== "auto" && this.options.position !== "auto";
				break;
			case "target":
				this._detachEventsFromTarget();
				this.options.target = value;
				this._attachEventsToTarget();
				break;
			case "fadeTimespan":
				if (typeof value === "number") {
					this.options.fadeTimespan = value;
				}
				break;
			case "renderHeader":
			case "renderCloseButton":
			case "closeOnBlur":
			case "width":
			case "height":
			case "defaultMaxWidth":
				throw new Error($.ig.SharedLocale.locale.popoverOptionChangeNotSupported + ' ' + key);
			}
		},
		destroy:  function () {
			/* Destroys the popover widget.
			*/
			this._detachEventsFromTarget();
			$('#' + this.id() + "_popover").remove();
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		id: function () {
			/* returns the ID of the element the popover is attached to
				returnType="string"
			*/
			return this.element[0].id;
		},
		container: function () {
			/* returns the container for the popover contents
				returnType="object"
			*/
			return $("#" + this.id() + "_popover_contentInner");
		},
		show: function (trg, content) {
			/* shows the popover for the specified target
				paramType="dom" optional="true" The element to show popover for.
				paramType="string" optional="true" The string to set for the popover to show.
			*/
			var target = trg || this.options.target;
			if (content) {
				this._setNewContent(content);
			}
			this._openPopover(target);
		},
		hide: function () {
			/* hides the popover for the specified target */
			this._closePopover();
		},
		getContent: function () {
			/* gets the currently set content for the popover container
				returnType="string" The popover content.
			*/
			return $("#" + this.id() + "_popover_contentInner").html();
		},
		setContent: function (newCnt) {
			/* gets the currently set content for the popover container
				paramType="string" The popover content to set.
			*/
			if (typeof newCnt === 'string') {
				this._setNewContent(newCnt);
			}
		},
		_renderPopover: function () {
			this.popover = $('<div></div>')
				.attr('id', this.id() + "_popover")
				.css({
					'display': 'none',
					'white-space': 'normal',
					'word-wrap': 'break-word',
					'position': 'absolute'
				})
				.addClass(this.css.baseClasses)
				.appendTo(this.element);
			this._createContentDiv();
		},
		_createContentDiv: function () {
			var cnt;
			cnt = $('<div></div>')
				.attr('id', this.id() + "_popover_contentFrame")
				.css('position', 'relative')
				.css('max-width', this.options.defaultMaxWidth)
				.addClass("ui-widget-content ui-corner-all")
				.appendTo(this.popover);
			if (this.options.renderCloseButton === true) {
				$('<div></div>')
					.attr('id', this.id() + "_popover_closeBtn")
					.addClass(this.css.closeButtonClass)
					.css({
						"display": "block",
						"float": "right",
						"position": "relative",
						"top": "-5px",
						"left": "5px"
					})
					.bind('click.popover', $.proxy(this._closeBtnClick, this))
					.appendTo(cnt);
			}
			$('<div></div>')
				.attr('id', this.id() + "_popover_contentInner")
				.css("position", "relative")
				.appendTo(cnt);
			$('<div></div>')
				.css("clear", "both")
				.appendTo(cnt);
		},
		_updateArrowDiv: function (nDir, idx) {
			var arrowDiv = $("#" + this.id() + "_popover_arrow"), conDiv = $("#" + this.id() + "_popover_contentFrame"), dims;
			if (arrowDiv.length === 0) {
				arrowDiv = $('<div></div>')
					.attr('id', this.id() + "_popover_arrow")
					.attr('position', 'relative')
					.addClass(this.css.arrowImageBaseClass + this._arrowDir[idx])
					.appendTo(this.popover);
			} else {
				arrowDiv
					.removeClass()
					.addClass(this.css.arrowImageBaseClass + this._arrowDir[idx]);
			}
			dims = this._getHiddenElementsDimensions([arrowDiv, conDiv]);
			// TODO: Arrow should be positioned according to target, not
			// according to content div.
			switch (nDir) {
			case "top":
				conDiv.css({
					'left': '',
					'top': '',
					'float': ''
				});
				arrowDiv.css({
					'left': '',
					'top': '',
					'float': ''
				});
				break;
			case "bottom":
				conDiv.css({
					'left': '',
					'top': dims[0].height,
					'float': ''
				});
				arrowDiv.css({
					'left': '',
					'top': dims[1].height * -1,
					'float': ''
				});
				break;
			case "left":
				conDiv.css({
					'left': '',
					'top': '',
					'float': 'left'
				});
				arrowDiv.css({
					'left': '',
					'top': '',
					'float': 'left'
				});
				break;
			case "right":
				conDiv.css({
					'left': dims[0].width,
					'top': '',
					'float': 'left'
				});
				arrowDiv.css({
					'left': dims[1].width * -1,
					'top': '',
					'float': 'left'
				});
				break;
			}
			this.oDir = nDir;
		},
		_targetMouseLeave: function () {
			if (this.options.closeOnBlur === true) {
				this._closePopover();
			}
		},
		_targetMouseMove: function () {
			this._openPopover($(this.options.target));
		},
		_closeBtnClick: function (event, ui) {
			this._closePopover();
			event.stopPropagation();
		},
		_attachEventsToTarget: function () {
			var t = this.options.target;
			// K.D. July 18th, 2012 Bug #117374 The HTMLElement object is natively not defined in IE <= 8
			// Abstain from referring to "natively" defined objects as we're not sure in what cases they would
			// actually be undefined.
			if (t && window.HTMLElement !== undefined && t instanceof HTMLElement) {
				$(t).unbind('mouseenter.popover').bind('mouseenter.popover', $.proxy(this._targetMouseMove, this));
				$(t).unbind('mouseleave.popover').bind('mouseleave.popover', $.proxy(this._targetMouseLeave, this));
			}
		},
		_detachEventsFromTarget: function () {
			var t = this.options.target;
			// K.D. July 18th, 2012 Bug #117374 The HTMLElement object is natively not defined in IE <= 8
			// Abstain from referring to "natively" defined objects as we're not sure in what cases they would
			// actually be undefined.
			if (t && window.HTMLElement !== undefined && t instanceof HTMLElement) {
				$(t).unbind('popover');
			}
		},
		_positionPopover: function (trg) {
			var i = 0, fn, fnRes;
			if (this.options.direction === "auto") {
				do {
					this._updateArrowDiv(this._priorityDir[i], i);
					fn = "_" + this._priorityDir[i] + "Position";
					fnRes = this[fn](trg);
					i++;
				} while (fnRes === false && i < this._priorityDir.length);
				if (fnRes === false) {
					/* COULDN'T FIND SPACE ANYWHERE. SHOULD EXCEED SCREEN DIMENSIONS */
					return;
				}
			} else {
				this._updateArrowDiv(this.options.direction, this._directionIndex);
				fn = "_" + this.options.direction + "Position";
				if (!this[fn](trg)) {
					/* THROW ERROR OPTION NOT SUPPORTED */
					return;
				}
			}
		},
		_findProperPosition: function (dir, x, trg) {
			var i = 0, fnRes, y, cDim, cPos, win = $(window), trgFDim, wScroll, tPos;
			if (dir === "left") {
				cPos = "left";
				cDim = "outerWidth";
				wScroll = win.scrollLeft();
			} else {
				cPos = "top";
				cDim = "outerHeight";
				wScroll = win.scrollTop();
			}
			// target element is not fully visible on the screen along the axis we need
			if (trg.offset()[cPos] + trg[cDim]() > wScroll + win[0][cDim]) {
				// we use a redux value to not create the popover outside the screen borders
				trgFDim = win[0][cDim] + wScroll - trg.offset()[cPos];
			} else {
				trgFDim = trg[cDim]();
			}
			if (trg[cDim]() > this.popover[cDim]()) {
				// if the popover is smaller on the side we want to position it it should always get in the middle
				// of the visible area
				y = trg.offset()[cPos] + trgFDim / 2 - this.popover[cDim]() / 2;
				fnRes = dir === "left" ? this._checkCollision(x, y) : this._checkCollision(y, x);
			} else {
				// rotate between possible positions until the tooltip fits or it's clear it won't fit
				if (this.options.position === "auto") {
					do {
						tPos = this._positions[i];
						y = this._getCounterPosition(trg, trgFDim, tPos, cPos, cDim);
						fnRes = dir === "left" ? this._checkCollision(x, y) : this._checkCollision(y, x);
					} while (fnRes === false && ++i < this._positions.length);
				} else {
					y = this._getCounterPosition(trg, trgFDim, this.options.position, cPos, cDim);
					fnRes = dir === "left" ? this._checkCollision(x, y) : this._checkCollision(y, x);
				}
			}
			if (fnRes === true) {
				this._adjustArrowPosition(trg, dir, cPos, cDim);
			}
			return fnRes;
		},
		_getCounterPosition: function (trg, trgFDim, tPos, cPos, cDim) {
			var y;
			switch (tPos) {
			case "balanced":
				y = trg.offset()[cPos] + trgFDim / 2 - this.popover[cDim]() / 2;
				break;
			case "start":
				y = trg.offset()[cPos];
				break;
			case "end":
				y = trg.offset()[cPos] - this.popover[cDim]() + trgFDim;
				break;
			}
			return y;
		},
		_topPosition: function (trg) {
			var top = trg.offset().top - this.popover.outerHeight();
			// finds are proper left position for the tooltip if one exists
			return this._findProperPosition("left", top, trg);
		},
		_bottomPosition: function (trg) {
			var top = trg.offset().top + trg.outerHeight();
			// finds are proper left position for the tooltip if one exists
			return this._findProperPosition("left", top, trg);
		},
		_leftPosition: function (trg) {
			var left = trg.offset().left - this.popover.outerWidth();
			// finds are proper top position for the tooltip if one exists
			return this._findProperPosition("top", left, trg);
		},
		_rightPosition: function (trg) {
			var left = trg.offset().left + trg.outerWidth();
			// finds are proper top position for the tooltip if one exists
			return this._findProperPosition("top", left, trg);
		},
		_checkCollision: function (top, left) {
			var tfullw = this.popover.outerWidth(), tfullh = this.popover.outerHeight(), win = $(window), wh, ww, os;
			ww = win.width() + win.scrollLeft();
			wh = win.height() + win.scrollTop();
			if (left < win.scrollLeft() || left + tfullw > ww || top < win.scrollTop() || top + tfullh > wh) {
				if (this._forced === false) {
					return false;
				}
			}
			os = this._getRelativeOffset();
			this.popover.css({
				'top': top - os.top,
				'left': left - os.left
			});
			return true;
		},
		_getPrioritiesIndex: function () {
			var i;
			if (this.options.direction !== "auto") {
				for (i = 0; i < this._priorityDir.length; i++) {
					if (this.options.direction === this._priorityDir[i]) {
						this._directionIndex = i;
						break;
					}
				}
			}
			if (this.options.position !== "auto") {
				for (i = 0; i < this._positions.length; i++) {
					if (this.options.position === this._positions[i]) {
						this._positionIndex = i;
						break;
					}
				}
			}
		},
		_openPopover: function (trg) {
			var args, noCancel, val = this.getContent();
			args = {
				element: trg,
				content: val,
				popover: this.popover
			};
			noCancel = this._trigger(this.events.popoverShowing, this, args);
			if (noCancel === true) {
				if (args.content !== val && typeof args.content === "string") {
					this._setNewContent(args.content);
				}
				this._positionPopover(trg);
				this._currentTarget = trg;
				this.popover.fadeIn(this.options.fadeTimespan);
				this._trigger(this.events.popoverShown, this, args);
			}
		},
		_closePopover: function () {
			var args, noCancel;
			args = {
				element: this._currentTarget,
				content: this.getContent(),
				popover: this.popover
			};
			noCancel = this._trigger(this.events.popoverHiding, this, args);
			if (noCancel === true) {
				this.popover.fadeOut(this.options.fadeTimespan);
				this._trigger(this.events.popoverHidden, this, args);
			}
		},
		_adjustArrowPosition: function (trg, dir, cPos, cDim) {
			/*var arrow = $("#" + this.id() + "_popover_arrow");
			if (dir === "top") {
				arrow.css({
					"top": 2 * trg.offset()[cPos] + trg[cDim]() / 2 - 2 * this.popover.offset()[cPos]
				});
			} else {
				arrow.css({
					"left": 2 * trg.offset()[cPos] + trg[cDim]() / 2 - 2 * this.popover.offset()[cPos]
				});
			}*/
		},
		_getRelativeOffset: function () {
			var offset = { left: 0, top: 0 }, elem = this.popover;
			while (elem[0] !== null && elem[0] !== undefined && elem[0].nodeName !== "#document") {
				if (elem.css('position') === 'relative') {
					offset.left = elem.offset().left;
					offset.top = elem.offset().top;
					break;
				}
				elem = elem.parent();
			}
			return offset;
		},
		_getHiddenElementsDimensions: function (elArr) {
			var dim = [], i, elem;
			$("#" + this.id() + "_popover").show();
			for (i = 0; i < elArr.length; i++) {
				elem = elArr[i];
				dim.push({
					width: elem.outerWidth(),
					height: elem.outerHeight()
				});
			}
			$("#" + this.id() + "_popover").hide();
			return dim;
		},
		_setNewContent: function (nc) {
			$("#" + this.id() + "_popover_contentInner").html(nc);
		}
	});

	/*
		igResponsiveContainer polls an element for size changes and callbacks widgets subscribed for such changes based on per-widget
		based settings
	*/
	$.widget("ui.igResponsiveContainer", {
		options: {
			/* type="number" The time between two resize checks in milliseconds. */
			pollingInterval: 500
		},
		_createWidget: function (options, element) {
			this._callbacks = [];
			this._element = element;
			this._pollerHandler = $.proxy(this._pollerTick, this);
			this._startPoller();
			this._width = this._getCurrentWidth();
			this._height = this._getCurrentHeight();
			$.Widget.prototype._createWidget.apply(this, arguments);
		},
		destroy: function () {
			/* Destroys the ResponsiveContainer widget
			*/
			this._stopPoller();
			this._callbacks = [];
			$.Widget.prototype.destroy.call(this);
			return this;
		},
		startPoller: function () {
			/* Starts the automatic size check procedure
			*/
			this._startPoller();
		},
		stopPoller: function () {
			/* Stops the automatic size check procedure
			*/
			this._stopPoller();
		},
		removeCallback: function (callbackId) {
			/* Removes a callback from the callbacks collection.
			paramType="number" The callback id to remove.
			*/
			if (callbackId >= 0 && callbackId < this._callbacks.length) {
				this._callbacks.splice(callbackId, 1);
			}
		},
		addCallback: function (callback, owner, reactionStep, reactionDirection) {
			/* Adds a callback to the callback collection.
			paramType="function" The function to call when requirements are met.
			paramType="object" The owner object of the function.
			paramType="number" The sensitivity of the size change recognition.
			paramType="x|y|xy" The dimensions the changes of which to be traced.
			*/
			return this._callbacks.push({
				callback: callback,
				owner: owner,
				step: reactionStep,
				left: reactionDirection === "xy" || reactionDirection === "x",
				top: reactionDirection === "xy" || reactionDirection === "y",
				cWidth: this._getCurrentWidth(),
				cHeight: this._getCurrentHeight()
			}) - 1;
		},
		_startPoller: function () {
			this._intervalId = setInterval(this._pollerHandler, this.options.pollingInterval);
		},
		_stopPoller: function () {
			if (this._intervalId) {
				clearInterval(this._intervalId);
				delete this._intervalId;
			}
		},
		_pollerTick: function () {
			var nw = this._getCurrentWidth(), nh = this._getCurrentHeight(), cb, i, called = false;
			for (i = 0; i < this._callbacks.length; i++) {
				cb = this._callbacks[i];
				if (cb.left === true) {
					// check if callback should be called
					if (Math.abs(cb.cWidth - nw) > cb.step) {
						cb.callback.apply(cb.owner, [nw, nh]);
						cb.cWidth = nw;
						cb.cHeight = nh;
						called = true;
					}
				}
				if (cb.top === true && called === false) {
					// check if callback should be called
					if (Math.abs(cb.cHeight - nh) > cb.step) {
						cb.callback.apply(cb.owner, [nw, nh]);
						cb.cWidth = nw;
						cb.cHeight = nh;
					}
				}
			}
			this._width = nw;
			this._height = nh;
		},
		_getCurrentWidth: function () {
			return this._element.offsetWidth;
		},
		_getCurrentHeight: function () {
			return this._element.offsetHeight;
		}
	});
	$.extend($.ui.igResponsiveContainer, {version: '13.1.20131.2039'});
	
	// Expose ig.ui.shared as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase ig.ui.shared is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("ig.ui.shared", ["ig.util", "jquery.ui.core", "jquery.ui.widget"], function () { return $.ui.igLoading; });
	}

}(jQuery));

/*!@license
* Infragistics.Web.ClientUI Scroll 13.1.20131.2039
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery-1.4.4.js
* jquery.ui.core.js
* jquery.ui.widget.js
*/

/*global jQuery,setTimeout,window,clearTimeout,document*/
(function ($) {
	var _attr = "data-scroll", _stop = function (e) {
		try {
			e.preventDefault();
			e.stopPropagation();
		} catch (ex) { }
	}, _aNull = function (val) {
		return val === null || val === undefined || (typeof val === "number" && isNaN(val));
	}, _num = function (val) {
		// convert to int
		return isNaN(val = parseInt(val, 10)) ? 0 : val;
	}, _int = function (elem, css) {
		// css attribute of elem as int
		return _num(elem.css(css));
	}, _draggable = function (type) {
		return type === "draggable";
	}, _thin = function (type) {
		return type === "show";
	}, _zero = function (num) {
		return isNaN(num) || num < 5;
	}, _touch = function (e) {
		// get touch from event
		e = e.originalEvent;
		e = e ? e.touches : null;
		return (e && e.length === 1) ? e[0] : null;
	}, _src = function (e) {
		// get source element from event
		e = e.target;
		return e.nodeName === "#text" ? e.parentNode : e;
	}, _is = function (elem, src) {
		return elem && (elem.has(src).length > 0 || elem[0] === src);
	}, _valid = function (elem) {
		return (elem && elem[0].parentNode) ? elem : null;
	}, _remove = function (elem) {
		if (_valid(elem)) {
			elem.remove();
		}
	}, _find = function (notMobile) {
		setTimeout(function () {
			var m = window.Modernizr;
			if (!m || m.touch) {
				$("body").find("[" + _attr + "]").each(function () {
					var elem = $(this), scroll = elem.data("igScroll");
					if ((!scroll || !scroll.evts) && !elem.data('igScroll') && !elem.data('scrollview')) {
						elem.igScroll({ _find: true });
					}
				});
			}
		}, notMobile === true ? 1000 : 100);
	};
	$.widget("ui.igScroll", {
		options: {
			/* type="number" Sets gets opacity of dragged thumb. Default value is 1. That is applied only when x/yThumb is "draggable". */
			thumbOpacityDrag: null,
			/* type="bool" Sets gets opacity of thumb. Default value is 0.5. */
			thumbOpacity: null,
			/* type="bool" Sets gets option to cancel touchstart event and explicitly raise mouse events on touchend. */
			cancelStart: null,
			/* type="bool" Sets gets option to perform scrolling only in one direction. */
			oneDirection: null,
			/* type="x|y|null" Sets gets scroll direction. */
			direction: null,
			/* type="number" Sets gets duration of animation effect in millisecods to show thumbs. Value less than 5 will disable animation. Default value is 300. */
			animateShowDuration: null,
			/* type="number" Sets gets duration of animation effect in millisecods to hide thumbs. Value less than 5 will disable animation. Default value is 500. */
			animateHideDuration: null,
			/* type="number" Sets gets delay in milliseconds to hide thumbs, which is used when none of thumbs is draggable. If value is less than 5, then 5 is used. Default value is 200. */
			hideThumbsDelay: null,
			/* type="number" Sets gets delay in milliseconds to hide thumbs, which is used when any of thumbs is draggable. If value is less than 5, then 5 is used. Default value is 1000. */
			hideDragThumbsDelay: null,
			/* type="number" Sets gets inertia for horizontal scrolling. The larger value, the longer inertia. Range from 0.97 to 0. Default value is 0.8. */
			xInertia: null,
			/* type="number" Sets gets inertia for vertical scrolling. The larger value, the longer inertia. Range from 0.97 to 0. Default value is 0.85. */
			yInertia: null,
			/* type="show|draggable|none" Sets gets type of horizontal thumb. Default value is "show". */
			xThumb: null,
			/* type="show|draggable|none" Sets gets type of vertical thumb. Default value is "draggable". */
			yThumb: null,
			xLabel: null,
			yLabel: null,
			/* type="number" Sets gets margin between left edge of horizontal scrollbar (position of xThumb) and edge of target element. Number of pixels. */
			marginLeft: null,
			/* type="number" Sets gets margin between right edge of horizontal scrollbar (position of xThumb) and edge of target element. Number of pixels. */
			marginRight: null,
			/* type="number" Sets gets margin between top edge of vertical scrollbar (position of yThumb) and edge of target element. Number of pixels. */
			marginTop: null,
			/* type="number" Sets gets margin between bottom edge of vertical scrollbar (position of yThumb) and edge of target element. Number of pixels. */
			marginBottom: null,
			/* type="dom" Sets gets reference to html element which is used for horizontal scrolling. Value also may contain jquery selector instead of element. */
			xScroller: null,
			/* type="dom" Sets gets reference to html element which is used for vertical scrolling. Value also may contain jquery selector instead of element. */
			yScroller: null
		},
		events: {
			/* cancel="true" Event which is raised before start scrolling.
				Return false in order to cancel action.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igScroll.
			*/
			starting: null,
			/* cancel="false" Event which is raised after start scrolling.
				Function takes arguments evt and ui.
				Use evt.originalEvent to obtain reference to event of browser.
				Use ui.owner to obtain reference to igScroll.
			*/
			started: null,
			/* cancel="true" Event which is raised before scrolling.
				Return false in order to cancel action.
				Function takes arguments evt and ui.
				Note: while inertia, the evt parameter is not available.
				Use evt.originalEvent (with validation for not null of evt) to obtain reference to event of browser.
				Use ui.owner to obtain reference to igScroll.
				Use ui.deltaX to obtain increment/decrement of horizontal scroller. That member can be modified and igScoll will use that new custom value.
				Use ui.deltaY to obtain increment/decrement of vertical scroller. That member can be modified and igScoll will use that new custom value.
			*/
			scrolling: null,
			/* cancel="false" Event which is raised after scrolling.
				Function takes arguments evt and ui.
				Note: while inertia, the evt parameter is not available.
				Use evt.originalEvent (with validation for not null of evt) to obtain reference to event of browser.
				Use ui.owner to obtain reference to igScroll.
				Use ui.deltaX to obtain increment/decrement of horizontal scroller.
				Use ui.deltaY to obtain increment/decrement of vertical scroller.
			*/
			scrolled: null,
			/* cancel="false" Event which is raised when scrolling was stopped.
				Function takes arguments evt and ui.
				Note: the first (evt) parameter is not available and equal to null.
				Use ui.owner to obtain reference to igScroll.
			*/
			stopped: null
		},
		scrollLeft: function (val) {
			/* Gets sets scrollLeft attribute for horizontal scroller.
				paramType="number" optional="true" new value for scrollLeft.
				returnType="number|object" Returns scrollLeft or reference to igScroll.
			*/
			if (_aNull(val)) {
				return this._getScroll(true);
			}
			this._scroll(val);
			return this;
		},
		scrollTop: function (val) {
			/* Gets sets scrollTop attribute for vertical scroller.
				paramType="number" optional="true" new value for scrollTop.
				returnType="number|object" Returns scrollTop or reference to igScroll.
			*/
			if (_aNull(val)) {
				return this._getScroll();
			}
			this._scroll(null, val);
			return this;
		},
		scrollWidth: function () {
			/* Gets scrollWidth attribute of horizontal scroller.
				returnType="number" Returns scrollWidth.
			*/
			return this._getScroll(true, true);
		},
		scrollHeight: function () {
			/* Gets scrollHeight attribute of vertical scroller.
				returnType="number" Returns scrollHeight.
			*/
			return this._getScroll(false, true);
		},
		_create: function () {
			var v, key, self = this,
				elem = self.element,
				o = self.options;
			if (o._find) {
				for (key in o) {
					if (o.hasOwnProperty(key) && _aNull(o[key])) {
						if (_aNull(v = elem.attr("data-" + key))) {
							v = elem.attr("data-" + key.replace("S", "-s").replace("D", "-d").replace("O", "-o").
								replace("R", "-r").replace("T", "-t").replace("I", "-i").replace("B", "-b").
								replace("L", "-l").replace("H", "-h").replace("D", "-d"));
						}
						if (!_aNull(v)) {
							o[key] = v;
						}
					}
				}
				o.direction = o.direction || elem.attr(_attr);
			}
			v = $.ui.igScroll.defaults;
			for (key in v) {
				if (v.hasOwnProperty(key) && o[key] === null) {
					o[key] = v[key];
				}
			}
			elem.css("msTouchAction", "none");
			v = o.direction;
			self.dir = o.oneDirection && v !== "x" && v !== "y";
			self.evts = {
				MSPointerDown: function (e) {
					var evt = e.originalEvent;
					if (!evt || evt.pointerType !== 2) {
						return;
					}
					e.target.msSetPointerCapture(self._pointer = evt.pointerId);
					self.evts.touchstart(e);
				},
				MSPointerMove: function (e) {
					if (self._pointer) {
						self._move(e);
					}
				},
				MSPointerUp: function (e) {
					if (!self._pointer) {
						return;
					}
					e.target.msReleasePointerCapture(self._pointer);
					self.evts.touchend(e);
					delete self._pointer;
				},
				touchstart: function (e) {
					delete self.skip;
					var touch = self._pointer ? e.originalEvent : _touch(e);
					if (touch) {
						self.x = touch.pageX;
						self.y = touch.pageY;
						self.click = true;
						if (self._isCancel(o)) {
							_stop(e);
						}
					} else {
						self._move(e, "start");
					}
				},
				touchmove: function (e) {
					self._move(e);
				},
				touchend: function (e) {
					if (!self.click) {
						self._move(e, "end");
					} else if (self._isCancel(o)) {
						$(_src(e)).trigger("mousedown").trigger("mouseup").trigger("click");
					}
				}
			};
			elem.bind(self.evts);
		},
		_isCancel: function (o) {
			o = o.cancelStart;
			return o === true || (o === "ms" && this._pointer);
		},
		// create horizontal or vertical scroll-bar with none, thin or draggable type
		_createBar: function (elem, hor, type) {
			var bar, thumb, border, sizeInt, span, img,
				iconSize = 17,
				thumbSize = 5,
				thumbDragSize = 30,
				thin = _thin(type),
				display = hor ? "inline-block" : "block",
				margin = "margin" + (hor ? "Top" : "Left"),
				size = hor ? "height" : "width";
			if (thin || _draggable(type)) {
				bar = $("<span />").css({
					position: "absolute",
					zIndex: _int(elem, "zIndex") + 2,
					background: "transparent",
					border: "0px",
					opacity: 0,
					display: "block"
				}).addClass("ui-widget").css(size, "1px").insertAfter(elem);
				sizeInt = thin ? thumbSize : thumbDragSize;
				thumb = $("<span />").css("position", "relative").
					css(size, sizeInt).
					css("display", "block").appendTo(bar);
				// thin black thumb
				if (thin) {
					thumb.css("background", "#101010");
				// draggable-large-static-size thumb
				} else {
					bar.css("msTouchAction", "none");
					thumb.addClass("ui-corner-all ui-state-hover");
					border = thumb.css("borderTopColor");
					sizeInt = hor ? thumb[0].offsetHeight : thumb[0].offsetWidth;
					span = $("<span />").css({
						display: display,
						borderStyle: "solid",
						borderColor: border,
						borderWidth: hor ? "0px 1px 0px 0px" : "0px 0px 1px 0px"
					}).addClass("ui-corner-" + (hor ? "left" : "top")).css(size, "100%").appendTo(thumb);
					img = $("<span />").css("display", "block").
						css(margin, Math.floor((sizeInt - iconSize) / 2) + "px").
						addClass("ui-icon ui-icon-carat-1-" + (hor ? "w" : "n")).appendTo(span);
					span = $("<span />").css("display", display).css(size, "100%").appendTo(thumb);
					img = $("<span />").css("display", "block").
						css(margin, Math.floor((sizeInt - iconSize) / 2) + "px").
						addClass("ui-icon ui-icon-grip-dotted-" + (hor ? "vertical" : "horizontal")).appendTo(span);
					span = $("<span />").css({
						display: display,
						borderStyle: "solid",
						borderColor: border,
						borderWidth: hor ? "0px 0px 0px 1px" : "1px 0px 0px 0px"
					}).addClass("ui-corner-" + (hor ? "right" : "bottom")).css(size, "100%").appendTo(thumb);
					img = $("<span />").css("display", "block").
						css(margin, Math.floor((sizeInt - iconSize) / 2) + "px").
						addClass("ui-icon ui-icon-carat-1-" + (hor ? "e" : "s")).appendTo(span);
				}
				thumb.css(margin, -(sizeInt + 1) + "px");
			}
			if (hor) {
				this.barX = bar;
				this.thumbX = thumb;
			} else {
				this.barY = bar;
				this.thumbY = thumb;
			}
		},
		// adjust location of scroll-bar
		_bar: function (elem, hor) {
			var v, left, top, thumb, locElem, locBar, shiftBar, shiftX, shiftY, thumbSize,
				o = this.options,
				barMargin = 2,
				barSizeMargin = _num(hor ? o.marginLeft : o.marginTop),
				barSizeMargin2 = _num(hor ? o.marginRight : o.marginBottom),
				minBarSize = 4,
				minThumbSize = 15,
				bar = hor ? this.barX : this.barY,
				type = hor ? o.xThumb : o.yThumb,
				elemSize = hor ? elem[0].offsetWidth : elem[0].offsetHeight,
				barSize = Math.max(elemSize - barSizeMargin - barSizeMargin2, minBarSize),
				scrollSize = Math.max(this._getScroll(hor, true), minBarSize + barSizeMargin + barSizeMargin2);
			if (!elemSize || scrollSize - elemSize < 1) {
				if (bar) {
					bar.remove();
					delete this.bar;
				}
				return;
			}
			if (bar) {
				if (_valid(bar)) {
					return bar;
				}
				bar.insertAfter(elem);
			}
			if (!bar) {
				this._createBar(elem, hor, type);
			}
			bar = hor ? this.barX : this.barY;
			if (!bar) {
				return;
			}
			thumb = hor ? this.thumbX : this.thumbY;
			if (_draggable(type) && thumb) {
				thumb.bind(this.evts);
			}
			shiftBar = (hor ? elem[0].offsetHeight : elem[0].offsetWidth) - barMargin;
			left = _int(elem, "marginLeft") + (hor ? barSizeMargin : shiftBar);
			top = _int(elem, "marginTop") + (hor ? shiftBar : barSizeMargin);
			bar.css({ left: elem.css("left"), top: elem.css("top"), marginLeft: left + "px", marginTop: top + "px" });
			if (_thin(type)) {
				thumb.css(hor ? "width" : "height", Math.floor(Math.max(elemSize * elemSize / scrollSize, minThumbSize)) + "px");
			}
			thumbSize = hor ? thumb[0].offsetWidth : thumb[0].offsetHeight;
			v = (scrollSize - barSize - barSizeMargin - barSizeMargin2 + barMargin) / (barSize - thumbSize);
			if (hor) {
				this.ratioX = v;
			} else {
				this.ratioY = v;
			}
			//
			locElem = elem.offset();
			locBar = bar.offset();
			shiftY = locBar.top - locElem.top - (hor ? shiftBar : barSizeMargin);
			shiftX = locBar.left - locElem.left - (hor ? barSizeMargin : shiftBar);
			if (Math.abs(shiftY) > 0) {
				bar.css("marginTop", (top - shiftY + _int(elem, "borderTopWidth")) + "px");
			}
			if (Math.abs(shiftX) > 0) {
				bar.css("marginLeft", (left - shiftX + _int(elem, "borderLeftWidth")) + "px");
			}
			return bar;
		},
		// get scroller
		_scroller: function (hor) {
			var o = this.options, div = o.direction;
			if (!this.evts || (hor && div === "y") || (!hor && div === "x")) {
				return;
			}
			div = hor ? o.xScroller : o.yScroller;
			if (div && typeof div === "string") {
				div = $(div)[0];
				if (hor) {
					o.xScroller = div;
				} else {
					o.yScroller = div;
				}
			}
			if (div && div.length) {
				div = div[0];
			}
			return div || this.element[0];
		},
		// get left/top to width/height of scroller
		_getScroll: function (hor, size) {
			var div = this._scroller(hor);
			if (!div) {
				return 0;
			}
			return hor ? (size ? div.scrollWidth : div.scrollLeft) : (size ? div.scrollHeight : div.scrollTop);
		},
		// do horizontal scroll
		_scroll: function (x, y) {
			var div = this._scroller(true);
			if (div && !this.inBarY && this.dir !== "y" && !_aNull(x)) {
				div.scrollLeft = x;
				if (this.thumbX) {
					this.thumbX.css("marginLeft", Math.floor(div.scrollLeft / this.ratioX) + "px");
				}
			}
			div = this._scroller();
			if (div && !this.inBarX && this.dir !== "x" && !_aNull(y)) {
				div.scrollTop = y;
				if (this.thumbY) {
					this.thumbY.css("marginTop", Math.floor(div.scrollTop / this.ratioY) + "px");
				}
			}
		},
		_vis: function () {
			return this.evts && this.element[0].offsetWidth;
		},
		// do inertia
		_inertia: function () {
			var self = this,
				arg = { owner: self },
				max = 0.97,
				stopTimerSpeed = 0.8,
				x = self.speedX,
				y = self.speedY,
				o = self.options,
				tick = 17,
				rateX = Math.max(Math.min(parseFloat(o.xInertia), max), 0),
				rateY = Math.max(Math.min(parseFloat(o.yInertia), max), 0),
				speedX = (x ? x[0] + x[1] + x[2] : 0) * tick,
				speedY = (y ? y[0] + y[1] + y[2] : 0) * tick,
				left = self._getScroll(true),
				top = self._getScroll(),
				inertia = function () {
					self.timer = setTimeout(function () {
						delete self.timer;
						arg.deltaX = -Math.floor(speedX);
						arg.deltaY = -Math.floor(speedY);
						if (!self._vis() || !self._trigger("scrolling", null, arg)) {
							self._end();
							return;
						}
						left += arg.deltaX;
						top += arg.deltaY;
						self._scroll(Math.floor(left), Math.floor(top));
						self._trigger("scrolled", null, arg);
						speedY *= rateY;
						speedX *= rateX;
						if ((Math.abs(speedY) > stopTimerSpeed && top > 0) || (Math.abs(speedX) > stopTimerSpeed && left > 0)) {
							inertia();
						} else {
							self._end();
						}
					}, tick * 3);
				};
			inertia();
		},
		// show thumbs with possible delay
		_show: function (valid) {
			var bar, self = this,
				o = self.options,
				val = parseFloat(o.thumbOpacity),
				valDrag = parseFloat(o.thumbOpacityDrag),
				dur = valid ? 0 : _num(o.animateShowDuration),
				barX = _valid(self.barX),
				barY = _valid(self.barY);
			if (self.hiding) {
				self.hiding.stop(true);
				delete self.hiding;
			}
			if (_zero(dur)) {
				if (barX) {
					barX.css("opacity", self.inBarX ? valDrag : val);
				}
				if (barY) {
					barY.css("opacity", self.inBarY ? valDrag : val);
				}
				return;
			}
			bar = barX || barY;
			if (bar) {
				self.showing = bar.animate({ opacity: val }, {
					duration: dur,
					complete: function () { delete self.showing; },
					step: function (now) {
						if (barX && barY) {
							barY.css("opacity", now);
						}
					}
				});
			}
		},
		// do action after thumbs became invisible: remove thumbs
		_hide: function (hide) {
			var self = this;
			if (!self.time) {
				return;
			}
			if (self.showing) {
				self.showing.stop(true);
				delete self.showing;
			}
			setTimeout(function () {
				if (self.hiding || hide) {
					_remove(self.barX);
					_remove(self.barY);
					delete self.hiding;
					self._fixSB();
				}
			}, 0);
		},
		// do action after end-scroll: hide thumbs with delay and animate thumb-hiding
		_end: function () {
			var self = this,
				o = self.options,
				delay = (self.thumbX && _draggable(o.xThumb)) || (self.thumbY && _draggable(o.yThumb)),
				dur = _num(o.animateHideDuration);
			self._trigger("stopped", null, { owner: self });
			if (self.skip || !self._vis()) {
				return self._hide(true);
			}
			delay = _num(delay ? o.hideDragThumbsDelay : o.hideThumbsDelay);
			self.timerEnd = setTimeout(function () {
				if (!self.timer && self.timerEnd) {
					if (_zero(dur)) {
						self._hide(true);
					} else {
						var bar = _valid(self.barX), bar2 = _valid(self.barY);
						if (!bar) {
							bar = bar2;
							bar2 = null;
						}
						if (bar) {
							self.hiding = bar.animate({ opacity: 0 }, {
								duration: dur,
								complete: function () { self._hide(); },
								step: function (now) {
									if (bar2) {
										bar2.css("opacity", now);
									}
									// M.H. 30 Oct 2012 Fix for bug #125722
									if (self.skip && self.hiding) {
										self.hiding.stop();
									}
								}
							});
						}
					}
				}
				delete self.timerEnd;
			}, _zero(delay) ? 5 : delay);
		},
		// clear timers
		_clear: function () {
			if (this.timer) {
				clearTimeout(this.timer);
				delete this.timer;
			}
			if (this.timerEnd) {
				clearTimeout(this.timerEnd);
				delete this.timerEnd;
			}
		},
		_fire: function (t, e, x, y) {
			return this._trigger(t, e, { owner: this, left: x, top: y });
		},
		// return true if nowhere to scroll: allow default scrolling of browser
		_skip: function (x, y) {
			var dir = this.options.direction,
				left = this._scroller(true) || 0,
				top = this._scroller() || 0,
				height = 0,
				width = 0,
				heightScroll = 0,
				widthScroll = 0;
			if (left) {
				width = left.clientWidth;
				widthScroll = left.scrollWidth;
				left = left.scrollLeft;
			}
			if (top) {
				height = top.clientHeight;
				heightScroll = top.scrollHeight;
				top = top.scrollTop;
			}
			if ((dir === "y" || width >= widthScroll) && (dir === "x" || height >= heightScroll)) {
				return true;
			}
			if ((Math.abs(y) > Math.abs(x) || dir === "y") && dir !== "x") {
				return (y > 0 && !top) || (y < 0 && top + height >= heightScroll);
			}
			return (x > 0 && !left) || (x < 0 && left + width >= widthScroll);
		},
		// hide/show default scrollbars (IE10 may support both finger and pen/mouse)
		_fixSB: function (hide) {
			// on-container of overflowX/Y
			var vert, hor, on = this._on;
			if ((hide && on) || (!on && !hide)) {
				return;
			}
			vert = this._scroller();
			hor = this._scroller(true);
			if (on) {
				if (vert && !_aNull(on.y)) {
					vert.style.overflowY = on.y;
				}
				if (hor && !_aNull(on.x)) {
					hor.style.overflowX = on.x;
				}
				delete this._on;
				return;
			}
			on = this._on = {};
			if (vert) {
				on.y = $(vert).css("overflowY");
				vert.style.overflowY = "hidden";
			}
			if (hor) {
				on.x = $(hor).css("overflowX");
				hor.style.overflowX = "hidden";
			}
		},
		_move: function (evt, end) {
			if (!this.evts) {
				return;
			}
			var speed, arg = { owner: this },
				time = (new Date()).getTime(),
				self = this,
				maxSpeed = 3,
				oldX = self.x0,
				oldY = self.y0,
				speedX = self.speedX,
				speedY = self.speedY,
				oldTop = self.top,
				oldLeft = self.left,
				inBarY = self.inBarY,
				inBarX = self.inBarX,
				barX = self.barX,
				barY = self.barY,
				start = !self.drag,
				elem = self.element,
				touch = self._pointer ? evt.originalEvent : _touch(evt),
				x = touch ? touch.pageX : 0,
				y = touch ? touch.pageY : 0,
				src = _src(evt);
			if (self.click && self._pointer && Math.abs(self.x - x) < 3 && Math.abs(self.y - y) < 3) {
				return;
			}
			delete self.click;
			if (self.skip) {
				return;
			}
			self._fixSB(true);
			self._clear();
			// request to end scrolling
			if (end || !touch) {
				if (!self.skip && end === "end" && !start) {
					if (self.inBarX || self.inBarY) {
						self._end();
					} else {
						self._inertia();
					}
				}
				delete self.drag;
				return;
			}
			if (start) {
				self.skip = self._skip(x - self.x, y - self.y);
				if (self.skip) {
					self._end();
				}
			} else {
				arg.deltaX = self.x - x;
				arg.deltaY = self.y - y;
			}
			if (self.skip || !this._trigger(start ? "starting" : "scrolling", evt, arg)) {
				return;
			}
			if (start) {
				speed = _valid(barX) || _valid(barY);
				// x
				oldX = self.x0 = x;
				oldLeft = self.left = self._getScroll(true);
				delete self.speedX;
				barX = self._bar(elem, true);
				// check for scrolling inside scrollbar
				inBarX = self.inBarX = _is(barX, src);
				// y
				oldY = self.y0 = y;
				oldTop = self.top = self._getScroll();
				delete self.speedY;
				barY = self._bar(elem);
				// check for scrolling inside scrollbar
				inBarY = self.inBarY = _is(barY, src);
				self._show(speed || inBarX || inBarY);
			} else {
				x = self.x - arg.deltaX;
				speed = (x - self.x) / (time - self.time);
				if (Math.abs(speed) > maxSpeed) {
					speed = (speed > 0) ? maxSpeed : -maxSpeed;
				}
				if (!speedX) {
					self.speedX = [0, 0, speed];
				} else {
					speedX[0] = speedX[1];
					speedX[1] = speedX[2];
					speedX[2] = speed;
				}
				//
				y = self.y - arg.deltaY;
				speed = (y - self.y) / (time - self.time);
				if (Math.abs(speed) > maxSpeed) {
					speed = (speed > 0) ? maxSpeed : -maxSpeed;
				}
				if (!speedY) {
					self.speedY = [0, 0, speed];
					if (self.dir) {
						self.dir = (Math.abs(speed) >= Math.abs(self.speedX[2])) ? "y" : "x";
					}
				} else {
					speedY = self.speedY = [0, 0, speed];
					speedY[0] = speedY[1];
					speedY[1] = speedY[2];
					speedY[2] = speed;
				}
			}
			self.drag = true;
			self.x = x;
			self.y = y;
			self.time = time;
			_stop(evt);
			x = inBarX ? oldLeft + Math.floor((x - oldX) * self.ratioX) : oldLeft - x + oldX;
			y = inBarY ? oldTop + Math.floor((y - oldY) * self.ratioY) : oldTop - y + oldY;
			self._scroll(x, y);
			this._trigger(start ? "started" : "scrolled", evt);
		},
		destroy: function () {
			if (this.evts) {
				this.element.unbind(this.evts);
				delete this.evts;
				if (this.showing) {
					this.showing.stop(true);
				}
				if (this.hiding) {
					this.hiding.stop(true);
				}
				this._clear();
				_remove(this.barX);
				_remove(this.barY);
				$.Widget.prototype.destroy.apply(this, arguments);
			}
			return this;
		}
	});
	$.extend($.ui.igScroll, { version: "13.1.20131.2039" });
	/* options which can be customized globally for all instances of igScroll. */
	$.ui.igScroll.defaults = {
		thumbOpacityDrag: 1,
		thumbOpacity: 0.5,
		animateShowDuration: 300,
		animateHideDuration: 500,
		hideThumbsDelay: 200,
		hideDragThumbsDelay: 1000,
		xInertia: 0.8,
		yInertia: 0.85,
		marginLeft: 2,
		marginRight: 2,
		marginTop: 2,
		marginBottom: 2,
		xThumb: "show",
		yThumb: "show"
	};
	try {
		$(":jqmData(role='page')").live("pageshow", _find);
	} catch (ex) {
		_find(true);
		$(document).bind('igcontrolcreated', function (event, args) {
			args.owner.scrollContainer().igScroll({ _find: true });
		});
	}
}(jQuery));



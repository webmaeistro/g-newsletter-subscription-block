/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _wp = wp,
    blocks = _wp.blocks,
    data = _wp.data,
    element = _wp.element,
    components = _wp.components,
    editor = _wp.editor;
var registerBlockType = blocks.registerBlockType;
var dispatch = data.dispatch,
    select = data.select;
var Fragment = element.Fragment;
var PanelBody = components.PanelBody,
    BaseControl = components.BaseControl,
    Icon = components.Icon,
    RangeControl = components.RangeControl,
    IconButton = components.IconButton,
    Toolbar = components.Toolbar,
    SelectControl = components.SelectControl;
var InnerBlocks = editor.InnerBlocks,
    RichText = editor.RichText,
    InspectorControls = editor.InspectorControls,
    PanelColorSettings = editor.PanelColorSettings,
    MediaUpload = editor.MediaUpload,
    BlockControls = editor.BlockControls;

var __ = Drupal.t;

var settings = {
  title: __('Gutenberg ma1 Block'),
  description: __('Gutenberg ma1 Block'),
  icon: 'welcome-learn-more',
  attributes: {
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    },
    text: {
      type: 'string'
    }
  },

  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var title = attributes.title,
        subtitle = attributes.subtitle,
        text = attributes.text;


    return React.createElement(
      Fragment,
      null,
      React.createElement(
        'div',
        { className: className },
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(RichText, {
            identifier: 'title',
            tagName: 'h2',
            value: title,
            placeholder: __('Title'),
            onChange: function onChange(nextTitle) {
              setAttributes({
                title: nextTitle
              });
            },
            onSplit: function onSplit() {
              return null;
            },
            unstableOnSplit: function unstableOnSplit() {
              return null;
            }
          }),
          React.createElement(RichText, {
            identifier: 'subtitle',
            tagName: 'div',
            value: subtitle,
            placeholder: __('Subtitle'),
            onChange: function onChange(nextSubtitle) {
              setAttributes({
                subtitle: nextSubtitle
              });
            },
            onSplit: function onSplit() {
              return null;
            },
            unstableOnSplit: function unstableOnSplit() {
              return null;
            }
          }),
          React.createElement(RichText, {
            identifier: 'text',
            tagName: 'p',
            value: text,
            placeholder: __('Text'),
            onChange: function onChange(nextText) {
              setAttributes({
                text: nextText
              });
            }
          })
        ),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'div',
            { className: 'icon' },
            React.createElement(Icon, { icon: 'welcome-learn-more' })
          ),
          isSelected && React.createElement(
            'div',
            { className: 'info' },
            React.createElement(
              'p',
              null,
              'This is Gutenbergs ma1 block'
            ),
            React.createElement(
              'p',
              null,
              'To test it just fill the fields on the left and save.'
            )
          )
        )
      ),
      React.createElement(
        InspectorControls,
        null,
        React.createElement(
          PanelBody,
          { title: __('Block Settings') },
          React.createElement(
            'div',
            null,
            title
          )
        )
      )
    );
  },
  save: function save(_ref2) {
    var className = _ref2.className,
        attributes = _ref2.attributes;
    var title = attributes.title,
        subtitle = attributes.subtitle,
        text = attributes.text;


    return React.createElement(
      'div',
      { className: className },
      React.createElement(
        'div',
        { className: 'column' },
        title && React.createElement(
          'h2',
          null,
          title
        ),
        subtitle && React.createElement(
          'div',
          null,
          subtitle
        ),
        text && React.createElement(
          'p',
          null,
          text
        )
      ),
      React.createElement(
        'div',
        { className: 'column' },
        React.createElement(
          'div',
          { className: 'icon' },
          React.createElement(Icon, { icon: 'welcome-learn-more' })
        )
      )
    );
  }
};

var category = {
  slug: 'ma1',
  title: __('ma1s')
};

var currentCategories = select('core/blocks').getCategories().filter(function (item) {
  return item.slug !== category.slug;
});
dispatch('core/blocks').setCategories([category].concat(_toConsumableArray(currentCategories)));

registerBlockType(category.slug + '/ma1-block', _extends({
  category: category.slug
}, settings));
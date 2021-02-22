
var plugins = {
  powerpaste: "../../src/js/tinymce-plugins/powerpaste/plugin.min.js",
  paste:      "../../src/js/tinymce-plugins/paste/plugin.min.js"
}

var articleTitleConfig = {
    selector: '.article-title',
    menubar: false,
    inline: true,
    external_plugins: {
      'paste':plugins.paste
    },
    paste_as_text: true,
    toolbar: 'undo redo | bold italic underline | align',
    valid_elements: 'strong,em,span[style],a[href]',
    valid_styles: {
      '*': ''
    }
  };

var emailHeaderConfig = {
    selector: '.tinymce-heading',
    menubar: false,
    inline: true,
    external_plugins: {
      'powerpaste':plugins.powerpaste
    },
    toolbar: 'undo redo | bold italic underline',
    valid_elements: 'strong,em,span[style],a[href]',
    valid_styles: {
      '*': 'font-size,font-family,color,text-decoration,text-align'
    }
  };
  
  var articleBodyConfig = {
    selector: '.article-body',
    paste_as_text: true,
    menubar: false,
    inline: true,
    external_plugins: {
      'powerpaste':plugins.powerpaste
    },
    toolbar: [
      'undo redo | bold italic underline | fontselect fontsizeselect',
      'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
    ],
    valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
    valid_styles: {
      '*': 'font-size,font-family,color,text-decoration,text-align'
    }
  };
  
  tinymce.init(articleTitleConfig);
  //tinymce.init(emailHeaderConfig);
  tinymce.init(articleBodyConfig);

  





  function strip_tags (str, allowed_tags)
{

    var key = '', allowed = false;
    var matches = [];    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = ''; 
    var replacer = function (search, replace, str) {
        return str.split(search).join(replace);
    };
    // Build allowes tags associative array
    if (allowed_tags) {
        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }
    str += '';

    // Match tags
    matches = str.match(/(<\/?[\S][^>]*>)/gi);
    // Go through all HTML tags
    for (key in matches) {
        if (isNaN(key)) {
                // IE7 Hack
            continue;
        }

        // Save HTML tag
        html = matches[key].toString();
        // Is tag not in allowed list? Remove from str!
        allowed = false;

        // Go through all allowed tags
        for (k in allowed_array) {            // Init
            allowed_tag = allowed_array[k];
            i = -1;

            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

            // Determine
            if (i == 0) {                allowed = true;
                break;
            }
        }
        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }
    return str;
}
  
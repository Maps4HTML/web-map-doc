// Styling HTML Text Editor
var htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
    mode: "xml",
    //lineNumbers: true,
    screenReaderLabel: "MapML Demo Code",
    autoCloseTags: true,
    extraKeys: {Tab: false, "Shift-Tab": false}
});

// Styling CSS Text Editor
var cssEditor = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
    mode: "css",
    //lineNumbers: true,
    screenReaderLabel: "MapML Demo Code",
    autoCloseTags: true,
    extraKeys: {Tab: false, "Shift-Tab": false}
});

// Plot the new mapml map when run button is clicked
function plot() {
    let parser = new DOMParser();

    // HTML Parsing and implementing
    let rawText = htmlEditor.getValue();

    let mapml = parser.parseFromString(rawText, "text/html");
    mapml = mapml.querySelector('mapml-viewer');

    // CSS Parsing and implementing
    let rawTextCSS = cssEditor.getValue();

    let mapmlCSS = parser.parseFromString("<map-style>" + rawTextCSS + "</map-style>", "text/html").querySelector('map-style');

    // Adding the CSS to each layer
    let layers = mapml.querySelectorAll('layer-');
    for (i = 0; i < layers.length; ++i) {
        layers[i].appendChild(mapmlCSS);
    }

    // Adding code to output div
    let output = document.getElementById('output');
    output.replaceChild(mapml, output.querySelector('mapml-viewer'));
}

// Plot map when page is loaded using the deafult text
window.onload = (event) => {
    let parser = new DOMParser();

    // HTML Parsing and implementing
    let rawText = htmlEditor.getValue();
    let mapml = parser.parseFromString(rawText, "text/html");
    mapml = mapml.querySelector('mapml-viewer');

    // CSS Parsing and implementing
    let rawTextCSS = cssEditor.getValue();
    let mapmlCSS = parser.parseFromString("<map-style>" + rawTextCSS + "</map-style>", "text/html").querySelector('map-style');
    // Adding the CSS to each layer
    let layers = mapml.querySelectorAll('layer-');
    for (i = 0; i < layers.length; ++i) {
        layers[i].appendChild(mapmlCSS);
    }
    // Adding code to output div
    let output = document.getElementById('output');
    output.appendChild(mapml);
};

// Function for switching between HTML and CSS
function switchTab(evt, tab) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "inline-block";
    htmlEditor.refresh();
    cssEditor.refresh();
    evt.currentTarget.className += " active";
}

// Select The HTML Tab as the default
document.getElementById('default').click();


// ------------------------------- Dark mode ------------------------------- //
try {
    // Select dark mode checkbox
    let darkCheckbox = window.parent.document.querySelectorAll('input[type=checkbox]')[0];
    // Add event listener to change theme when dark mode toggled
    darkCheckbox.addEventListener('change', e => {
        if (e.target.checked) {
            document.querySelector('html').setAttribute('data-theme', "dark");
        } else {
            document.querySelector('html').setAttribute('data-theme', "light");
        }
    });
    // Initialize theme when go to a new page
    if (darkCheckbox.checked) {
        document.querySelector('html').setAttribute('data-theme', "dark");
    } else {
        document.querySelector('html').setAttribute('data-theme', "light");
    }
    // Initialize theme when page is reloaded
    window.parent.window.addEventListener('load', (event) => {
        let darkCheckbox = window.parent.document.querySelectorAll('input[type=checkbox]')[0];
        if (darkCheckbox.checked) {
            document.querySelector('html').setAttribute('data-theme', "dark");
        } else {
            document.querySelector('html').setAttribute('data-theme', "light");
        }
    });
}
catch (err) {
    // when demo page is not opened as an iframe, display default theme
}


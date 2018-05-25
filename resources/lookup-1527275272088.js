(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "106e3858-52cf-461d-9c2c-edd6aee41dfa": "Error",
    "a1e5a52e-c6b0-45ad-94b5-13302ec80f26": "Pagina Publicar Paso 2",
    "939f091c-4ae4-49f2-8034-a8bc210c8080": "Sugerencias",
    "08d180e8-2472-44f1-b0d4-adc934b642d6": "Pagina Publicar Paso 1",
    "51806f53-8f32-4f8b-9b22-b22ae6089d17": "Inicio",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
(function() {

	var name = "Juan";

	// Recurse through the DOM
	walk(document.body);

	function walk(node) {
		var child, next;

		switch ( node.nodeType ) {
			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment
				child = node.firstChild;
				while (child) {
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;

			case 3: // Text node
				juanify(node);
				break;
		}
	}

	// Need moar Juans
	function juanify(textNode) {
		var v = textNode.nodeValue;

		var words = [
			"one", // Change, track, cancel, or return your orders. All in Juan place.
      "want", // What do you Juan to do?
			"wan", // The boy Juandered the forest
      "whine" // What are you Juaning about?
		];

		for(var i=0; i<words.length; i++) {
			v = v.replace(" " + words[i], " " + name);
		}

		if(textNode.nodeValue !== v) {
			textNode.nodeValue = v;
		}
	}

})();

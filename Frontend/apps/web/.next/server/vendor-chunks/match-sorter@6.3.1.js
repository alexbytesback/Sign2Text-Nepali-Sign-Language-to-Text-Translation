"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/match-sorter@6.3.1";
exports.ids = ["vendor-chunks/match-sorter@6.3.1"];
exports.modules = {

/***/ "../../node_modules/.pnpm/match-sorter@6.3.1/node_modules/match-sorter/dist/match-sorter.cjs.js":
/*!******************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/match-sorter@6.3.1/node_modules/match-sorter/dist/match-sorter.cjs.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"../../node_modules/.pnpm/@babel+runtime@7.23.7/node_modules/@babel/runtime/helpers/extends.js\");\nvar removeAccents = __webpack_require__(/*! remove-accents */ \"../../node_modules/.pnpm/remove-accents@0.4.2/node_modules/remove-accents/index.js\");\n\nfunction _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }\n\nvar _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);\nvar removeAccents__default = /*#__PURE__*/_interopDefaultLegacy(removeAccents);\n\nvar rankings = {\n  CASE_SENSITIVE_EQUAL: 7,\n  EQUAL: 6,\n  STARTS_WITH: 5,\n  WORD_STARTS_WITH: 4,\n  CONTAINS: 3,\n  ACRONYM: 2,\n  MATCHES: 1,\n  NO_MATCH: 0\n};\nmatchSorter.rankings = rankings;\n\nvar defaultBaseSortFn = function defaultBaseSortFn(a, b) {\n  return String(a.rankedValue).localeCompare(String(b.rankedValue));\n};\n/**\n * Takes an array of items and a value and returns a new array with the items that match the given value\n * @param {Array} items - the items to sort\n * @param {String} value - the value to use for ranking\n * @param {Object} options - Some options to configure the sorter\n * @return {Array} - the new sorted array\n */\n\n\nfunction matchSorter(items, value, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options = options,\n      keys = _options.keys,\n      _options$threshold = _options.threshold,\n      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold,\n      _options$baseSort = _options.baseSort,\n      baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort,\n      _options$sorter = _options.sorter,\n      sorter = _options$sorter === void 0 ? function (matchedItems) {\n    return matchedItems.sort(function (a, b) {\n      return sortRankedValues(a, b, baseSort);\n    });\n  } : _options$sorter;\n  var matchedItems = items.reduce(reduceItemsToRanked, []);\n  return sorter(matchedItems).map(function (_ref) {\n    var item = _ref.item;\n    return item;\n  });\n\n  function reduceItemsToRanked(matches, item, index) {\n    var rankingInfo = getHighestRanking(item, keys, value, options);\n    var rank = rankingInfo.rank,\n        _rankingInfo$keyThres = rankingInfo.keyThreshold,\n        keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;\n\n    if (rank >= keyThreshold) {\n      matches.push(_extends__default['default']({}, rankingInfo, {\n        item: item,\n        index: index\n      }));\n    }\n\n    return matches;\n  }\n}\n/**\n * Gets the highest ranking for value for the given item based on its values for the given keys\n * @param {*} item - the item to rank\n * @param {Array} keys - the keys to get values from the item for the ranking\n * @param {String} value - the value to rank against\n * @param {Object} options - options to control the ranking\n * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking\n */\n\n\nfunction getHighestRanking(item, keys, value, options) {\n  if (!keys) {\n    // if keys is not specified, then we assume the item given is ready to be matched\n    var stringItem = item;\n    return {\n      // ends up being duplicate of 'item' in matches but consistent\n      rankedValue: stringItem,\n      rank: getMatchRanking(stringItem, value, options),\n      keyIndex: -1,\n      keyThreshold: options.threshold\n    };\n  }\n\n  var valuesToRank = getAllValuesToRank(item, keys);\n  return valuesToRank.reduce(function (_ref2, _ref3, i) {\n    var rank = _ref2.rank,\n        rankedValue = _ref2.rankedValue,\n        keyIndex = _ref2.keyIndex,\n        keyThreshold = _ref2.keyThreshold;\n    var itemValue = _ref3.itemValue,\n        attributes = _ref3.attributes;\n    var newRank = getMatchRanking(itemValue, value, options);\n    var newRankedValue = rankedValue;\n    var minRanking = attributes.minRanking,\n        maxRanking = attributes.maxRanking,\n        threshold = attributes.threshold;\n\n    if (newRank < minRanking && newRank >= rankings.MATCHES) {\n      newRank = minRanking;\n    } else if (newRank > maxRanking) {\n      newRank = maxRanking;\n    }\n\n    if (newRank > rank) {\n      rank = newRank;\n      keyIndex = i;\n      keyThreshold = threshold;\n      newRankedValue = itemValue;\n    }\n\n    return {\n      rankedValue: newRankedValue,\n      rank: rank,\n      keyIndex: keyIndex,\n      keyThreshold: keyThreshold\n    };\n  }, {\n    rankedValue: item,\n    rank: rankings.NO_MATCH,\n    keyIndex: -1,\n    keyThreshold: options.threshold\n  });\n}\n/**\n * Gives a rankings score based on how well the two strings match.\n * @param {String} testString - the string to test against\n * @param {String} stringToRank - the string to rank\n * @param {Object} options - options for the match (like keepDiacritics for comparison)\n * @returns {Number} the ranking for how well stringToRank matches testString\n */\n\n\nfunction getMatchRanking(testString, stringToRank, options) {\n  testString = prepareValueForComparison(testString, options);\n  stringToRank = prepareValueForComparison(stringToRank, options); // too long\n\n  if (stringToRank.length > testString.length) {\n    return rankings.NO_MATCH;\n  } // case sensitive equals\n\n\n  if (testString === stringToRank) {\n    return rankings.CASE_SENSITIVE_EQUAL;\n  } // Lower casing before further comparison\n\n\n  testString = testString.toLowerCase();\n  stringToRank = stringToRank.toLowerCase(); // case insensitive equals\n\n  if (testString === stringToRank) {\n    return rankings.EQUAL;\n  } // starts with\n\n\n  if (testString.startsWith(stringToRank)) {\n    return rankings.STARTS_WITH;\n  } // word starts with\n\n\n  if (testString.includes(\" \" + stringToRank)) {\n    return rankings.WORD_STARTS_WITH;\n  } // contains\n\n\n  if (testString.includes(stringToRank)) {\n    return rankings.CONTAINS;\n  } else if (stringToRank.length === 1) {\n    // If the only character in the given stringToRank\n    //   isn't even contained in the testString, then\n    //   it's definitely not a match.\n    return rankings.NO_MATCH;\n  } // acronym\n\n\n  if (getAcronym(testString).includes(stringToRank)) {\n    return rankings.ACRONYM;\n  } // will return a number between rankings.MATCHES and\n  // rankings.MATCHES + 1 depending  on how close of a match it is.\n\n\n  return getClosenessRanking(testString, stringToRank);\n}\n/**\n * Generates an acronym for a string.\n *\n * @param {String} string the string for which to produce the acronym\n * @returns {String} the acronym\n */\n\n\nfunction getAcronym(string) {\n  var acronym = '';\n  var wordsInString = string.split(' ');\n  wordsInString.forEach(function (wordInString) {\n    var splitByHyphenWords = wordInString.split('-');\n    splitByHyphenWords.forEach(function (splitByHyphenWord) {\n      acronym += splitByHyphenWord.substr(0, 1);\n    });\n  });\n  return acronym;\n}\n/**\n * Returns a score based on how spread apart the\n * characters from the stringToRank are within the testString.\n * A number close to rankings.MATCHES represents a loose match. A number close\n * to rankings.MATCHES + 1 represents a tighter match.\n * @param {String} testString - the string to test against\n * @param {String} stringToRank - the string to rank\n * @returns {Number} the number between rankings.MATCHES and\n * rankings.MATCHES + 1 for how well stringToRank matches testString\n */\n\n\nfunction getClosenessRanking(testString, stringToRank) {\n  var matchingInOrderCharCount = 0;\n  var charNumber = 0;\n\n  function findMatchingCharacter(matchChar, string, index) {\n    for (var j = index, J = string.length; j < J; j++) {\n      var stringChar = string[j];\n\n      if (stringChar === matchChar) {\n        matchingInOrderCharCount += 1;\n        return j + 1;\n      }\n    }\n\n    return -1;\n  }\n\n  function getRanking(spread) {\n    var spreadPercentage = 1 / spread;\n    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;\n    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;\n    return ranking;\n  }\n\n  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);\n\n  if (firstIndex < 0) {\n    return rankings.NO_MATCH;\n  }\n\n  charNumber = firstIndex;\n\n  for (var i = 1, I = stringToRank.length; i < I; i++) {\n    var matchChar = stringToRank[i];\n    charNumber = findMatchingCharacter(matchChar, testString, charNumber);\n    var found = charNumber > -1;\n\n    if (!found) {\n      return rankings.NO_MATCH;\n    }\n  }\n\n  var spread = charNumber - firstIndex;\n  return getRanking(spread);\n}\n/**\n * Sorts items that have a rank, index, and keyIndex\n * @param {Object} a - the first item to sort\n * @param {Object} b - the second item to sort\n * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal\n */\n\n\nfunction sortRankedValues(a, b, baseSort) {\n  var aFirst = -1;\n  var bFirst = 1;\n  var aRank = a.rank,\n      aKeyIndex = a.keyIndex;\n  var bRank = b.rank,\n      bKeyIndex = b.keyIndex;\n  var same = aRank === bRank;\n\n  if (same) {\n    if (aKeyIndex === bKeyIndex) {\n      // use the base sort function as a tie-breaker\n      return baseSort(a, b);\n    } else {\n      return aKeyIndex < bKeyIndex ? aFirst : bFirst;\n    }\n  } else {\n    return aRank > bRank ? aFirst : bFirst;\n  }\n}\n/**\n * Prepares value for comparison by stringifying it, removing diacritics (if specified)\n * @param {String} value - the value to clean\n * @param {Object} options - {keepDiacritics: whether to remove diacritics}\n * @return {String} the prepared value\n */\n\n\nfunction prepareValueForComparison(value, _ref4) {\n  var keepDiacritics = _ref4.keepDiacritics;\n  // value might not actually be a string at this point (we don't get to choose)\n  // so part of preparing the value for comparison is ensure that it is a string\n  value = \"\" + value; // toString\n\n  if (!keepDiacritics) {\n    value = removeAccents__default['default'](value);\n  }\n\n  return value;\n}\n/**\n * Gets value for key in item at arbitrarily nested keypath\n * @param {Object} item - the item\n * @param {Object|Function} key - the potentially nested keypath or property callback\n * @return {Array} - an array containing the value(s) at the nested keypath\n */\n\n\nfunction getItemValues(item, key) {\n  if (typeof key === 'object') {\n    key = key.key;\n  }\n\n  var value;\n\n  if (typeof key === 'function') {\n    value = key(item);\n  } else if (item == null) {\n    value = null;\n  } else if (Object.hasOwnProperty.call(item, key)) {\n    value = item[key];\n  } else if (key.includes('.')) {\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call\n    return getNestedValues(key, item);\n  } else {\n    value = null;\n  } // because `value` can also be undefined\n\n\n  if (value == null) {\n    return [];\n  }\n\n  if (Array.isArray(value)) {\n    return value;\n  }\n\n  return [String(value)];\n}\n/**\n * Given path: \"foo.bar.baz\"\n * And item: {foo: {bar: {baz: 'buzz'}}}\n *   -> 'buzz'\n * @param path a dot-separated set of keys\n * @param item the item to get the value from\n */\n\n\nfunction getNestedValues(path, item) {\n  var keys = path.split('.');\n  var values = [item];\n\n  for (var i = 0, I = keys.length; i < I; i++) {\n    var nestedKey = keys[i];\n    var nestedValues = [];\n\n    for (var j = 0, J = values.length; j < J; j++) {\n      var nestedItem = values[j];\n      if (nestedItem == null) continue;\n\n      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {\n        var nestedValue = nestedItem[nestedKey];\n\n        if (nestedValue != null) {\n          nestedValues.push(nestedValue);\n        }\n      } else if (nestedKey === '*') {\n        // ensure that values is an array\n        nestedValues = nestedValues.concat(nestedItem);\n      }\n    }\n\n    values = nestedValues;\n  }\n\n  if (Array.isArray(values[0])) {\n    // keep allowing the implicit wildcard for an array of strings at the end of\n    // the path; don't use `.flat()` because that's not available in node.js v10\n    var result = [];\n    return result.concat.apply(result, values);\n  } // Based on our logic it should be an array of strings by now...\n  // assuming the user's path terminated in strings\n\n\n  return values;\n}\n/**\n * Gets all the values for the given keys in the given item and returns an array of those values\n * @param item - the item from which the values will be retrieved\n * @param keys - the keys to use to retrieve the values\n * @return objects with {itemValue, attributes}\n */\n\n\nfunction getAllValuesToRank(item, keys) {\n  var allValues = [];\n\n  for (var j = 0, J = keys.length; j < J; j++) {\n    var key = keys[j];\n    var attributes = getKeyAttributes(key);\n    var itemValues = getItemValues(item, key);\n\n    for (var i = 0, I = itemValues.length; i < I; i++) {\n      allValues.push({\n        itemValue: itemValues[i],\n        attributes: attributes\n      });\n    }\n  }\n\n  return allValues;\n}\n\nvar defaultKeyAttributes = {\n  maxRanking: Infinity,\n  minRanking: -Infinity\n};\n/**\n * Gets all the attributes for the given key\n * @param key - the key from which the attributes will be retrieved\n * @return object containing the key's attributes\n */\n\nfunction getKeyAttributes(key) {\n  if (typeof key === 'string') {\n    return defaultKeyAttributes;\n  }\n\n  return _extends__default['default']({}, defaultKeyAttributes, key);\n}\n/*\neslint\n  no-continue: \"off\",\n*/\n\nexports.defaultBaseSortFn = defaultBaseSortFn;\nexports.matchSorter = matchSorter;\nexports.rankings = rankings;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hdGNoLXNvcnRlckA2LjMuMS9ub2RlX21vZHVsZXMvbWF0Y2gtc29ydGVyL2Rpc3QvbWF0Y2gtc29ydGVyLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELGVBQWUsbUJBQU8sQ0FBQyxxSUFBZ0M7QUFDdkQsb0JBQW9CLG1CQUFPLENBQUMsMEdBQWdCOztBQUU1QyxxQ0FBcUMsNERBQTREOztBQUVqRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsdURBQXVEO0FBQ3BFOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZ24ydGV4dC1zaXRlLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tYXRjaC1zb3J0ZXJANi4zLjEvbm9kZV9tb2R1bGVzL21hdGNoLXNvcnRlci9kaXN0L21hdGNoLXNvcnRlci5janMuanM/NjVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIHJlbW92ZUFjY2VudHMgPSByZXF1aXJlKCdyZW1vdmUtYWNjZW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIF9leHRlbmRzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfZXh0ZW5kcyk7XG52YXIgcmVtb3ZlQWNjZW50c19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3kocmVtb3ZlQWNjZW50cyk7XG5cbnZhciByYW5raW5ncyA9IHtcbiAgQ0FTRV9TRU5TSVRJVkVfRVFVQUw6IDcsXG4gIEVRVUFMOiA2LFxuICBTVEFSVFNfV0lUSDogNSxcbiAgV09SRF9TVEFSVFNfV0lUSDogNCxcbiAgQ09OVEFJTlM6IDMsXG4gIEFDUk9OWU06IDIsXG4gIE1BVENIRVM6IDEsXG4gIE5PX01BVENIOiAwXG59O1xubWF0Y2hTb3J0ZXIucmFua2luZ3MgPSByYW5raW5ncztcblxudmFyIGRlZmF1bHRCYXNlU29ydEZuID0gZnVuY3Rpb24gZGVmYXVsdEJhc2VTb3J0Rm4oYSwgYikge1xuICByZXR1cm4gU3RyaW5nKGEucmFua2VkVmFsdWUpLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGIucmFua2VkVmFsdWUpKTtcbn07XG4vKipcbiAqIFRha2VzIGFuIGFycmF5IG9mIGl0ZW1zIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGl0ZW1zIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIHRoZSBpdGVtcyB0byBzb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gdXNlIGZvciByYW5raW5nXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNvbWUgb3B0aW9ucyB0byBjb25maWd1cmUgdGhlIHNvcnRlclxuICogQHJldHVybiB7QXJyYXl9IC0gdGhlIG5ldyBzb3J0ZWQgYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIG1hdGNoU29ydGVyKGl0ZW1zLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIGtleXMgPSBfb3B0aW9ucy5rZXlzLFxuICAgICAgX29wdGlvbnMkdGhyZXNob2xkID0gX29wdGlvbnMudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX29wdGlvbnMkdGhyZXNob2xkID09PSB2b2lkIDAgPyByYW5raW5ncy5NQVRDSEVTIDogX29wdGlvbnMkdGhyZXNob2xkLFxuICAgICAgX29wdGlvbnMkYmFzZVNvcnQgPSBfb3B0aW9ucy5iYXNlU29ydCxcbiAgICAgIGJhc2VTb3J0ID0gX29wdGlvbnMkYmFzZVNvcnQgPT09IHZvaWQgMCA/IGRlZmF1bHRCYXNlU29ydEZuIDogX29wdGlvbnMkYmFzZVNvcnQsXG4gICAgICBfb3B0aW9ucyRzb3J0ZXIgPSBfb3B0aW9ucy5zb3J0ZXIsXG4gICAgICBzb3J0ZXIgPSBfb3B0aW9ucyRzb3J0ZXIgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChtYXRjaGVkSXRlbXMpIHtcbiAgICByZXR1cm4gbWF0Y2hlZEl0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBzb3J0UmFua2VkVmFsdWVzKGEsIGIsIGJhc2VTb3J0KTtcbiAgICB9KTtcbiAgfSA6IF9vcHRpb25zJHNvcnRlcjtcbiAgdmFyIG1hdGNoZWRJdGVtcyA9IGl0ZW1zLnJlZHVjZShyZWR1Y2VJdGVtc1RvUmFua2VkLCBbXSk7XG4gIHJldHVybiBzb3J0ZXIobWF0Y2hlZEl0ZW1zKS5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgaXRlbSA9IF9yZWYuaXRlbTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVkdWNlSXRlbXNUb1JhbmtlZChtYXRjaGVzLCBpdGVtLCBpbmRleCkge1xuICAgIHZhciByYW5raW5nSW5mbyA9IGdldEhpZ2hlc3RSYW5raW5nKGl0ZW0sIGtleXMsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB2YXIgcmFuayA9IHJhbmtpbmdJbmZvLnJhbmssXG4gICAgICAgIF9yYW5raW5nSW5mbyRrZXlUaHJlcyA9IHJhbmtpbmdJbmZvLmtleVRocmVzaG9sZCxcbiAgICAgICAga2V5VGhyZXNob2xkID0gX3JhbmtpbmdJbmZvJGtleVRocmVzID09PSB2b2lkIDAgPyB0aHJlc2hvbGQgOiBfcmFua2luZ0luZm8ka2V5VGhyZXM7XG5cbiAgICBpZiAocmFuayA+PSBrZXlUaHJlc2hvbGQpIHtcbiAgICAgIG1hdGNoZXMucHVzaChfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCByYW5raW5nSW5mbywge1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxufVxuLyoqXG4gKiBHZXRzIHRoZSBoaWdoZXN0IHJhbmtpbmcgZm9yIHZhbHVlIGZvciB0aGUgZ2l2ZW4gaXRlbSBiYXNlZCBvbiBpdHMgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5c1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGl0ZW0gdG8gcmFua1xuICogQHBhcmFtIHtBcnJheX0ga2V5cyAtIHRoZSBrZXlzIHRvIGdldCB2YWx1ZXMgZnJvbSB0aGUgaXRlbSBmb3IgdGhlIHJhbmtpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byByYW5rIGFnYWluc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0byBjb250cm9sIHRoZSByYW5raW5nXG4gKiBAcmV0dXJuIHt7cmFuazogTnVtYmVyLCBrZXlJbmRleDogTnVtYmVyLCBrZXlUaHJlc2hvbGQ6IE51bWJlcn19IC0gdGhlIGhpZ2hlc3QgcmFua2luZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0SGlnaGVzdFJhbmtpbmcoaXRlbSwga2V5cywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFrZXlzKSB7XG4gICAgLy8gaWYga2V5cyBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIHdlIGFzc3VtZSB0aGUgaXRlbSBnaXZlbiBpcyByZWFkeSB0byBiZSBtYXRjaGVkXG4gICAgdmFyIHN0cmluZ0l0ZW0gPSBpdGVtO1xuICAgIHJldHVybiB7XG4gICAgICAvLyBlbmRzIHVwIGJlaW5nIGR1cGxpY2F0ZSBvZiAnaXRlbScgaW4gbWF0Y2hlcyBidXQgY29uc2lzdGVudFxuICAgICAgcmFua2VkVmFsdWU6IHN0cmluZ0l0ZW0sXG4gICAgICByYW5rOiBnZXRNYXRjaFJhbmtpbmcoc3RyaW5nSXRlbSwgdmFsdWUsIG9wdGlvbnMpLFxuICAgICAga2V5SW5kZXg6IC0xLFxuICAgICAga2V5VGhyZXNob2xkOiBvcHRpb25zLnRocmVzaG9sZFxuICAgIH07XG4gIH1cblxuICB2YXIgdmFsdWVzVG9SYW5rID0gZ2V0QWxsVmFsdWVzVG9SYW5rKGl0ZW0sIGtleXMpO1xuICByZXR1cm4gdmFsdWVzVG9SYW5rLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIF9yZWYzLCBpKSB7XG4gICAgdmFyIHJhbmsgPSBfcmVmMi5yYW5rLFxuICAgICAgICByYW5rZWRWYWx1ZSA9IF9yZWYyLnJhbmtlZFZhbHVlLFxuICAgICAgICBrZXlJbmRleCA9IF9yZWYyLmtleUluZGV4LFxuICAgICAgICBrZXlUaHJlc2hvbGQgPSBfcmVmMi5rZXlUaHJlc2hvbGQ7XG4gICAgdmFyIGl0ZW1WYWx1ZSA9IF9yZWYzLml0ZW1WYWx1ZSxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXM7XG4gICAgdmFyIG5ld1JhbmsgPSBnZXRNYXRjaFJhbmtpbmcoaXRlbVZhbHVlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgdmFyIG5ld1JhbmtlZFZhbHVlID0gcmFua2VkVmFsdWU7XG4gICAgdmFyIG1pblJhbmtpbmcgPSBhdHRyaWJ1dGVzLm1pblJhbmtpbmcsXG4gICAgICAgIG1heFJhbmtpbmcgPSBhdHRyaWJ1dGVzLm1heFJhbmtpbmcsXG4gICAgICAgIHRocmVzaG9sZCA9IGF0dHJpYnV0ZXMudGhyZXNob2xkO1xuXG4gICAgaWYgKG5ld1JhbmsgPCBtaW5SYW5raW5nICYmIG5ld1JhbmsgPj0gcmFua2luZ3MuTUFUQ0hFUykge1xuICAgICAgbmV3UmFuayA9IG1pblJhbmtpbmc7XG4gICAgfSBlbHNlIGlmIChuZXdSYW5rID4gbWF4UmFua2luZykge1xuICAgICAgbmV3UmFuayA9IG1heFJhbmtpbmc7XG4gICAgfVxuXG4gICAgaWYgKG5ld1JhbmsgPiByYW5rKSB7XG4gICAgICByYW5rID0gbmV3UmFuaztcbiAgICAgIGtleUluZGV4ID0gaTtcbiAgICAgIGtleVRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgICAgIG5ld1JhbmtlZFZhbHVlID0gaXRlbVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByYW5rZWRWYWx1ZTogbmV3UmFua2VkVmFsdWUsXG4gICAgICByYW5rOiByYW5rLFxuICAgICAga2V5SW5kZXg6IGtleUluZGV4LFxuICAgICAga2V5VGhyZXNob2xkOiBrZXlUaHJlc2hvbGRcbiAgICB9O1xuICB9LCB7XG4gICAgcmFua2VkVmFsdWU6IGl0ZW0sXG4gICAgcmFuazogcmFua2luZ3MuTk9fTUFUQ0gsXG4gICAga2V5SW5kZXg6IC0xLFxuICAgIGtleVRocmVzaG9sZDogb3B0aW9ucy50aHJlc2hvbGRcbiAgfSk7XG59XG4vKipcbiAqIEdpdmVzIGEgcmFua2luZ3Mgc2NvcmUgYmFzZWQgb24gaG93IHdlbGwgdGhlIHR3byBzdHJpbmdzIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd9IHRlc3RTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHRlc3QgYWdhaW5zdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1RvUmFuayAtIHRoZSBzdHJpbmcgdG8gcmFua1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIGZvciB0aGUgbWF0Y2ggKGxpa2Uga2VlcERpYWNyaXRpY3MgZm9yIGNvbXBhcmlzb24pXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmFua2luZyBmb3IgaG93IHdlbGwgc3RyaW5nVG9SYW5rIG1hdGNoZXMgdGVzdFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gZ2V0TWF0Y2hSYW5raW5nKHRlc3RTdHJpbmcsIHN0cmluZ1RvUmFuaywgb3B0aW9ucykge1xuICB0ZXN0U3RyaW5nID0gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbih0ZXN0U3RyaW5nLCBvcHRpb25zKTtcbiAgc3RyaW5nVG9SYW5rID0gcHJlcGFyZVZhbHVlRm9yQ29tcGFyaXNvbihzdHJpbmdUb1JhbmssIG9wdGlvbnMpOyAvLyB0b28gbG9uZ1xuXG4gIGlmIChzdHJpbmdUb1JhbmsubGVuZ3RoID4gdGVzdFN0cmluZy5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuTk9fTUFUQ0g7XG4gIH0gLy8gY2FzZSBzZW5zaXRpdmUgZXF1YWxzXG5cblxuICBpZiAodGVzdFN0cmluZyA9PT0gc3RyaW5nVG9SYW5rKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkNBU0VfU0VOU0lUSVZFX0VRVUFMO1xuICB9IC8vIExvd2VyIGNhc2luZyBiZWZvcmUgZnVydGhlciBjb21wYXJpc29uXG5cblxuICB0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICBzdHJpbmdUb1JhbmsgPSBzdHJpbmdUb1JhbmsudG9Mb3dlckNhc2UoKTsgLy8gY2FzZSBpbnNlbnNpdGl2ZSBlcXVhbHNcblxuICBpZiAodGVzdFN0cmluZyA9PT0gc3RyaW5nVG9SYW5rKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkVRVUFMO1xuICB9IC8vIHN0YXJ0cyB3aXRoXG5cblxuICBpZiAodGVzdFN0cmluZy5zdGFydHNXaXRoKHN0cmluZ1RvUmFuaykpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuU1RBUlRTX1dJVEg7XG4gIH0gLy8gd29yZCBzdGFydHMgd2l0aFxuXG5cbiAgaWYgKHRlc3RTdHJpbmcuaW5jbHVkZXMoXCIgXCIgKyBzdHJpbmdUb1JhbmspKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLldPUkRfU1RBUlRTX1dJVEg7XG4gIH0gLy8gY29udGFpbnNcblxuXG4gIGlmICh0ZXN0U3RyaW5nLmluY2x1ZGVzKHN0cmluZ1RvUmFuaykpIHtcbiAgICByZXR1cm4gcmFua2luZ3MuQ09OVEFJTlM7XG4gIH0gZWxzZSBpZiAoc3RyaW5nVG9SYW5rLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIElmIHRoZSBvbmx5IGNoYXJhY3RlciBpbiB0aGUgZ2l2ZW4gc3RyaW5nVG9SYW5rXG4gICAgLy8gICBpc24ndCBldmVuIGNvbnRhaW5lZCBpbiB0aGUgdGVzdFN0cmluZywgdGhlblxuICAgIC8vICAgaXQncyBkZWZpbml0ZWx5IG5vdCBhIG1hdGNoLlxuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfSAvLyBhY3JvbnltXG5cblxuICBpZiAoZ2V0QWNyb255bSh0ZXN0U3RyaW5nKS5pbmNsdWRlcyhzdHJpbmdUb1JhbmspKSB7XG4gICAgcmV0dXJuIHJhbmtpbmdzLkFDUk9OWU07XG4gIH0gLy8gd2lsbCByZXR1cm4gYSBudW1iZXIgYmV0d2VlbiByYW5raW5ncy5NQVRDSEVTIGFuZFxuICAvLyByYW5raW5ncy5NQVRDSEVTICsgMSBkZXBlbmRpbmcgIG9uIGhvdyBjbG9zZSBvZiBhIG1hdGNoIGl0IGlzLlxuXG5cbiAgcmV0dXJuIGdldENsb3NlbmVzc1JhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rKTtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFjcm9ueW0gZm9yIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyBmb3Igd2hpY2ggdG8gcHJvZHVjZSB0aGUgYWNyb255bVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGFjcm9ueW1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEFjcm9ueW0oc3RyaW5nKSB7XG4gIHZhciBhY3JvbnltID0gJyc7XG4gIHZhciB3b3Jkc0luU3RyaW5nID0gc3RyaW5nLnNwbGl0KCcgJyk7XG4gIHdvcmRzSW5TdHJpbmcuZm9yRWFjaChmdW5jdGlvbiAod29yZEluU3RyaW5nKSB7XG4gICAgdmFyIHNwbGl0QnlIeXBoZW5Xb3JkcyA9IHdvcmRJblN0cmluZy5zcGxpdCgnLScpO1xuICAgIHNwbGl0QnlIeXBoZW5Xb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChzcGxpdEJ5SHlwaGVuV29yZCkge1xuICAgICAgYWNyb255bSArPSBzcGxpdEJ5SHlwaGVuV29yZC5zdWJzdHIoMCwgMSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYWNyb255bTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHNjb3JlIGJhc2VkIG9uIGhvdyBzcHJlYWQgYXBhcnQgdGhlXG4gKiBjaGFyYWN0ZXJzIGZyb20gdGhlIHN0cmluZ1RvUmFuayBhcmUgd2l0aGluIHRoZSB0ZXN0U3RyaW5nLlxuICogQSBudW1iZXIgY2xvc2UgdG8gcmFua2luZ3MuTUFUQ0hFUyByZXByZXNlbnRzIGEgbG9vc2UgbWF0Y2guIEEgbnVtYmVyIGNsb3NlXG4gKiB0byByYW5raW5ncy5NQVRDSEVTICsgMSByZXByZXNlbnRzIGEgdGlnaHRlciBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXN0U3RyaW5nIC0gdGhlIHN0cmluZyB0byB0ZXN0IGFnYWluc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdUb1JhbmsgLSB0aGUgc3RyaW5nIHRvIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgYmV0d2VlbiByYW5raW5ncy5NQVRDSEVTIGFuZFxuICogcmFua2luZ3MuTUFUQ0hFUyArIDEgZm9yIGhvdyB3ZWxsIHN0cmluZ1RvUmFuayBtYXRjaGVzIHRlc3RTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENsb3NlbmVzc1JhbmtpbmcodGVzdFN0cmluZywgc3RyaW5nVG9SYW5rKSB7XG4gIHZhciBtYXRjaGluZ0luT3JkZXJDaGFyQ291bnQgPSAwO1xuICB2YXIgY2hhck51bWJlciA9IDA7XG5cbiAgZnVuY3Rpb24gZmluZE1hdGNoaW5nQ2hhcmFjdGVyKG1hdGNoQ2hhciwgc3RyaW5nLCBpbmRleCkge1xuICAgIGZvciAodmFyIGogPSBpbmRleCwgSiA9IHN0cmluZy5sZW5ndGg7IGogPCBKOyBqKyspIHtcbiAgICAgIHZhciBzdHJpbmdDaGFyID0gc3RyaW5nW2pdO1xuXG4gICAgICBpZiAoc3RyaW5nQ2hhciA9PT0gbWF0Y2hDaGFyKSB7XG4gICAgICAgIG1hdGNoaW5nSW5PcmRlckNoYXJDb3VudCArPSAxO1xuICAgICAgICByZXR1cm4gaiArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFua2luZyhzcHJlYWQpIHtcbiAgICB2YXIgc3ByZWFkUGVyY2VudGFnZSA9IDEgLyBzcHJlYWQ7XG4gICAgdmFyIGluT3JkZXJQZXJjZW50YWdlID0gbWF0Y2hpbmdJbk9yZGVyQ2hhckNvdW50IC8gc3RyaW5nVG9SYW5rLmxlbmd0aDtcbiAgICB2YXIgcmFua2luZyA9IHJhbmtpbmdzLk1BVENIRVMgKyBpbk9yZGVyUGVyY2VudGFnZSAqIHNwcmVhZFBlcmNlbnRhZ2U7XG4gICAgcmV0dXJuIHJhbmtpbmc7XG4gIH1cblxuICB2YXIgZmlyc3RJbmRleCA9IGZpbmRNYXRjaGluZ0NoYXJhY3RlcihzdHJpbmdUb1JhbmtbMF0sIHRlc3RTdHJpbmcsIDApO1xuXG4gIGlmIChmaXJzdEluZGV4IDwgMCkge1xuICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgfVxuXG4gIGNoYXJOdW1iZXIgPSBmaXJzdEluZGV4O1xuXG4gIGZvciAodmFyIGkgPSAxLCBJID0gc3RyaW5nVG9SYW5rLmxlbmd0aDsgaSA8IEk7IGkrKykge1xuICAgIHZhciBtYXRjaENoYXIgPSBzdHJpbmdUb1JhbmtbaV07XG4gICAgY2hhck51bWJlciA9IGZpbmRNYXRjaGluZ0NoYXJhY3RlcihtYXRjaENoYXIsIHRlc3RTdHJpbmcsIGNoYXJOdW1iZXIpO1xuICAgIHZhciBmb3VuZCA9IGNoYXJOdW1iZXIgPiAtMTtcblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiByYW5raW5ncy5OT19NQVRDSDtcbiAgICB9XG4gIH1cblxuICB2YXIgc3ByZWFkID0gY2hhck51bWJlciAtIGZpcnN0SW5kZXg7XG4gIHJldHVybiBnZXRSYW5raW5nKHNwcmVhZCk7XG59XG4vKipcbiAqIFNvcnRzIGl0ZW1zIHRoYXQgaGF2ZSBhIHJhbmssIGluZGV4LCBhbmQga2V5SW5kZXhcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIC0gdGhlIGZpcnN0IGl0ZW0gdG8gc29ydFxuICogQHBhcmFtIHtPYmplY3R9IGIgLSB0aGUgc2Vjb25kIGl0ZW0gdG8gc29ydFxuICogQHJldHVybiB7TnVtYmVyfSAtMSBpZiBhIHNob3VsZCBjb21lIGZpcnN0LCAxIGlmIGIgc2hvdWxkIGNvbWUgZmlyc3QsIDAgaWYgZXF1YWxcbiAqL1xuXG5cbmZ1bmN0aW9uIHNvcnRSYW5rZWRWYWx1ZXMoYSwgYiwgYmFzZVNvcnQpIHtcbiAgdmFyIGFGaXJzdCA9IC0xO1xuICB2YXIgYkZpcnN0ID0gMTtcbiAgdmFyIGFSYW5rID0gYS5yYW5rLFxuICAgICAgYUtleUluZGV4ID0gYS5rZXlJbmRleDtcbiAgdmFyIGJSYW5rID0gYi5yYW5rLFxuICAgICAgYktleUluZGV4ID0gYi5rZXlJbmRleDtcbiAgdmFyIHNhbWUgPSBhUmFuayA9PT0gYlJhbms7XG5cbiAgaWYgKHNhbWUpIHtcbiAgICBpZiAoYUtleUluZGV4ID09PSBiS2V5SW5kZXgpIHtcbiAgICAgIC8vIHVzZSB0aGUgYmFzZSBzb3J0IGZ1bmN0aW9uIGFzIGEgdGllLWJyZWFrZXJcbiAgICAgIHJldHVybiBiYXNlU29ydChhLCBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFLZXlJbmRleCA8IGJLZXlJbmRleCA/IGFGaXJzdCA6IGJGaXJzdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFSYW5rID4gYlJhbmsgPyBhRmlyc3QgOiBiRmlyc3Q7XG4gIH1cbn1cbi8qKlxuICogUHJlcGFyZXMgdmFsdWUgZm9yIGNvbXBhcmlzb24gYnkgc3RyaW5naWZ5aW5nIGl0LCByZW1vdmluZyBkaWFjcml0aWNzIChpZiBzcGVjaWZpZWQpXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2xlYW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0ge2tlZXBEaWFjcml0aWNzOiB3aGV0aGVyIHRvIHJlbW92ZSBkaWFjcml0aWNzfVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgcHJlcGFyZWQgdmFsdWVcbiAqL1xuXG5cbmZ1bmN0aW9uIHByZXBhcmVWYWx1ZUZvckNvbXBhcmlzb24odmFsdWUsIF9yZWY0KSB7XG4gIHZhciBrZWVwRGlhY3JpdGljcyA9IF9yZWY0LmtlZXBEaWFjcml0aWNzO1xuICAvLyB2YWx1ZSBtaWdodCBub3QgYWN0dWFsbHkgYmUgYSBzdHJpbmcgYXQgdGhpcyBwb2ludCAod2UgZG9uJ3QgZ2V0IHRvIGNob29zZSlcbiAgLy8gc28gcGFydCBvZiBwcmVwYXJpbmcgdGhlIHZhbHVlIGZvciBjb21wYXJpc29uIGlzIGVuc3VyZSB0aGF0IGl0IGlzIGEgc3RyaW5nXG4gIHZhbHVlID0gXCJcIiArIHZhbHVlOyAvLyB0b1N0cmluZ1xuXG4gIGlmICgha2VlcERpYWNyaXRpY3MpIHtcbiAgICB2YWx1ZSA9IHJlbW92ZUFjY2VudHNfX2RlZmF1bHRbJ2RlZmF1bHQnXSh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEdldHMgdmFsdWUgZm9yIGtleSBpbiBpdGVtIGF0IGFyYml0cmFyaWx5IG5lc3RlZCBrZXlwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIHRoZSBpdGVtXG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0ga2V5IC0gdGhlIHBvdGVudGlhbGx5IG5lc3RlZCBrZXlwYXRoIG9yIHByb3BlcnR5IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZShzKSBhdCB0aGUgbmVzdGVkIGtleXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEl0ZW1WYWx1ZXMoaXRlbSwga2V5KSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgIGtleSA9IGtleS5rZXk7XG4gIH1cblxuICB2YXIgdmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWx1ZSA9IGtleShpdGVtKTtcbiAgfSBlbHNlIGlmIChpdGVtID09IG51bGwpIHtcbiAgICB2YWx1ZSA9IG51bGw7XG4gIH0gZWxzZSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoaXRlbSwga2V5KSkge1xuICAgIHZhbHVlID0gaXRlbVtrZXldO1xuICB9IGVsc2UgaWYgKGtleS5pbmNsdWRlcygnLicpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuICAgIHJldHVybiBnZXROZXN0ZWRWYWx1ZXMoa2V5LCBpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IG51bGw7XG4gIH0gLy8gYmVjYXVzZSBgdmFsdWVgIGNhbiBhbHNvIGJlIHVuZGVmaW5lZFxuXG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gW1N0cmluZyh2YWx1ZSldO1xufVxuLyoqXG4gKiBHaXZlbiBwYXRoOiBcImZvby5iYXIuYmF6XCJcbiAqIEFuZCBpdGVtOiB7Zm9vOiB7YmFyOiB7YmF6OiAnYnV6eid9fX1cbiAqICAgLT4gJ2J1enonXG4gKiBAcGFyYW0gcGF0aCBhIGRvdC1zZXBhcmF0ZWQgc2V0IG9mIGtleXNcbiAqIEBwYXJhbSBpdGVtIHRoZSBpdGVtIHRvIGdldCB0aGUgdmFsdWUgZnJvbVxuICovXG5cblxuZnVuY3Rpb24gZ2V0TmVzdGVkVmFsdWVzKHBhdGgsIGl0ZW0pIHtcbiAgdmFyIGtleXMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHZhciB2YWx1ZXMgPSBbaXRlbV07XG5cbiAgZm9yICh2YXIgaSA9IDAsIEkgPSBrZXlzLmxlbmd0aDsgaSA8IEk7IGkrKykge1xuICAgIHZhciBuZXN0ZWRLZXkgPSBrZXlzW2ldO1xuICAgIHZhciBuZXN0ZWRWYWx1ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGogPSAwLCBKID0gdmFsdWVzLmxlbmd0aDsgaiA8IEo7IGorKykge1xuICAgICAgdmFyIG5lc3RlZEl0ZW0gPSB2YWx1ZXNbal07XG4gICAgICBpZiAobmVzdGVkSXRlbSA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5lc3RlZEl0ZW0sIG5lc3RlZEtleSkpIHtcbiAgICAgICAgdmFyIG5lc3RlZFZhbHVlID0gbmVzdGVkSXRlbVtuZXN0ZWRLZXldO1xuXG4gICAgICAgIGlmIChuZXN0ZWRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmVzdGVkVmFsdWVzLnB1c2gobmVzdGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5lc3RlZEtleSA9PT0gJyonKSB7XG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHZhbHVlcyBpcyBhbiBhcnJheVxuICAgICAgICBuZXN0ZWRWYWx1ZXMgPSBuZXN0ZWRWYWx1ZXMuY29uY2F0KG5lc3RlZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlcyA9IG5lc3RlZFZhbHVlcztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlc1swXSkpIHtcbiAgICAvLyBrZWVwIGFsbG93aW5nIHRoZSBpbXBsaWNpdCB3aWxkY2FyZCBmb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhdCB0aGUgZW5kIG9mXG4gICAgLy8gdGhlIHBhdGg7IGRvbid0IHVzZSBgLmZsYXQoKWAgYmVjYXVzZSB0aGF0J3Mgbm90IGF2YWlsYWJsZSBpbiBub2RlLmpzIHYxMFxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXR1cm4gcmVzdWx0LmNvbmNhdC5hcHBseShyZXN1bHQsIHZhbHVlcyk7XG4gIH0gLy8gQmFzZWQgb24gb3VyIGxvZ2ljIGl0IHNob3VsZCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzIGJ5IG5vdy4uLlxuICAvLyBhc3N1bWluZyB0aGUgdXNlcidzIHBhdGggdGVybWluYXRlZCBpbiBzdHJpbmdzXG5cblxuICByZXR1cm4gdmFsdWVzO1xufVxuLyoqXG4gKiBHZXRzIGFsbCB0aGUgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5cyBpbiB0aGUgZ2l2ZW4gaXRlbSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aG9zZSB2YWx1ZXNcbiAqIEBwYXJhbSBpdGVtIC0gdGhlIGl0ZW0gZnJvbSB3aGljaCB0aGUgdmFsdWVzIHdpbGwgYmUgcmV0cmlldmVkXG4gKiBAcGFyYW0ga2V5cyAtIHRoZSBrZXlzIHRvIHVzZSB0byByZXRyaWV2ZSB0aGUgdmFsdWVzXG4gKiBAcmV0dXJuIG9iamVjdHMgd2l0aCB7aXRlbVZhbHVlLCBhdHRyaWJ1dGVzfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0QWxsVmFsdWVzVG9SYW5rKGl0ZW0sIGtleXMpIHtcbiAgdmFyIGFsbFZhbHVlcyA9IFtdO1xuXG4gIGZvciAodmFyIGogPSAwLCBKID0ga2V5cy5sZW5ndGg7IGogPCBKOyBqKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IGdldEtleUF0dHJpYnV0ZXMoa2V5KTtcbiAgICB2YXIgaXRlbVZhbHVlcyA9IGdldEl0ZW1WYWx1ZXMoaXRlbSwga2V5KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBJID0gaXRlbVZhbHVlcy5sZW5ndGg7IGkgPCBJOyBpKyspIHtcbiAgICAgIGFsbFZhbHVlcy5wdXNoKHtcbiAgICAgICAgaXRlbVZhbHVlOiBpdGVtVmFsdWVzW2ldLFxuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxsVmFsdWVzO1xufVxuXG52YXIgZGVmYXVsdEtleUF0dHJpYnV0ZXMgPSB7XG4gIG1heFJhbmtpbmc6IEluZmluaXR5LFxuICBtaW5SYW5raW5nOiAtSW5maW5pdHlcbn07XG4vKipcbiAqIEdldHMgYWxsIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgZ2l2ZW4ga2V5XG4gKiBAcGFyYW0ga2V5IC0gdGhlIGtleSBmcm9tIHdoaWNoIHRoZSBhdHRyaWJ1dGVzIHdpbGwgYmUgcmV0cmlldmVkXG4gKiBAcmV0dXJuIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXkncyBhdHRyaWJ1dGVzXG4gKi9cblxuZnVuY3Rpb24gZ2V0S2V5QXR0cmlidXRlcyhrZXkpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRLZXlBdHRyaWJ1dGVzO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzX19kZWZhdWx0WydkZWZhdWx0J10oe30sIGRlZmF1bHRLZXlBdHRyaWJ1dGVzLCBrZXkpO1xufVxuLypcbmVzbGludFxuICBuby1jb250aW51ZTogXCJvZmZcIixcbiovXG5cbmV4cG9ydHMuZGVmYXVsdEJhc2VTb3J0Rm4gPSBkZWZhdWx0QmFzZVNvcnRGbjtcbmV4cG9ydHMubWF0Y2hTb3J0ZXIgPSBtYXRjaFNvcnRlcjtcbmV4cG9ydHMucmFua2luZ3MgPSByYW5raW5ncztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/match-sorter@6.3.1/node_modules/match-sorter/dist/match-sorter.cjs.js\n");

/***/ })

};
;
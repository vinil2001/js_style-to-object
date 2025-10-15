'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  const parts = String(sourceString).split(';');

  parts.forEach((part) => {
    const decl = part.trim();

    if (!decl) {
      return;
    }

    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const prop = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (!prop) {
      return;
    }
    result[prop] = value;
  });

  return result;
}

module.exports = convertToObject;

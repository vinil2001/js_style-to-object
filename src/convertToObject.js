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

  for (const part of parts) {
    const decl = part.trim();

    if (!decl) {
      continue;
    }

    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const prop = decl.slice(0, colonIndex).replace(/\s+/g, '').trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (!prop) {
      continue;
    }
    result[prop] = value;
  }

  return result;
}

module.exports = convertToObject;

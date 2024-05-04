function useMemoPolyfill(callback, deps) {
  let cachedValue = null;
  let cachedDeps = null;

  // Validate callback function
  if (typeof callback !== "function") {
    throw new Error(
      "useMemoPolyfill requires a function as the first argument"
    );
  }

  // Validate dependencies or default to an empty array if not provided
  if (!Array.isArray(deps) && deps !== undefined && deps !== null) {
    throw new Error(
      "useMemoPolyfill requires an array or should be undefined/null as the second argument"
    );
  }
  deps = deps || [];

  if (!cachedValue || !deps.every((dep, index) => dep === cachedDeps[index])) {
    cachedValue = callback();
    cachedDeps = deps.slice();
  }

  return cachedValue;
}

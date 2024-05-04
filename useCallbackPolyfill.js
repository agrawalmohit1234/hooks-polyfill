function useCallbackPolyfill(callback, deps) {
  let cachedCallback = null;
  let cachedDeps = null;

  // Validate callback function
  if (typeof callback !== "function") {
    throw new Error(
      "useCallbackPolyfill requires a function as the first argument"
    );
  }

  // Validate dependencies or default to an empty array if not provided
  if (!Array.isArray(deps) && deps !== undefined && deps !== null) {
    throw new Error(
      "useCallbackPolyfill requires an array or should be undefined/null as the second argument"
    );
  }
  deps = deps || [];

  if (
    !cachedCallback ||
    !deps.every((dep, index) => dep === cachedDeps[index])
  ) {
    cachedCallback = callback;
    cachedDeps = deps.slice();
  }

  return cachedCallback;
}

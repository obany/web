/**
 * Gulp utils for env.
 */
const envUnite = {};

function get(name) {
    return envUnite[name];
}
exports.get = get;

function set(name, value) {
    envUnite[name] = value;
}
exports.set = set;
// Generated by UniteJS

/**
 * @description calculates the memory used by the script
 * @returns memory used
 */
 module.exports = function memoryUsed() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    return Math.round(used * 100) / 100+" MB";
}
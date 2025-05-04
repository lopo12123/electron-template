/**
 * @type {import("electron-builder").Configuration}
 */
module.exports = {
    appId: "com.example.app",
    productName: "应用名称ABC",
    files: [
        "src/**/*",
        "resources/**/*"
    ],
    "win": {
        "target": [
            "portable"
        ],
    },
}
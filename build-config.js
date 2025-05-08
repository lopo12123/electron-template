/**
 * @type {import("electron-builder").Configuration}
 */
module.exports = {
    appId: "com.example.app",
    productName: "应用名称ABC",
    files: [
        "src-main/**/*",
        "resources/**/*"
    ],
    "win": {
        "target": [
            "portable"
        ],
    },
}
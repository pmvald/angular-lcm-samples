load("//tools:defaults.bzl", "app_bundle", "http_server", "ng_module")

package(default_visibility = ["//visibility:public"])

LCM = True

ng_module(
    name = "sub",
    srcs = ["sub.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        "//packages/core",
    ],
    local_compilation_mode = LCM,
)

ng_module(
    name = "main",
    srcs = ["main.ts"],
    assets = ["main.ng.html"],
    tsconfig = ":tsconfig.json",
    deps = [
        ":sub",
        "//packages/core",
    ],
    local_compilation_mode = LCM,
)

ng_module(
    name = "app",
    srcs = ["app.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        ":main",
        "//packages/core",
        "//packages/platform-browser",
        "//packages/platform-browser-dynamic",
    ],
    local_compilation_mode = LCM,
)

app_bundle(
    name = "app_bundle",
    entry_point = ":app.ts",
    deps = [":app"],
)

http_server(
    name = "devserver",
    srcs = [
        "index.html",
    ],
    deps = [
        ":app_bundle",
        "//packages/zone.js/bundles:zone.umd.js",
    ],
)

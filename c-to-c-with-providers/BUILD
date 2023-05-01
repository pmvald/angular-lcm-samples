load("//tools:defaults.bzl", "esbuild", "http_server")
load("//integration/bazel/bazel-samples/bazel:ng_module.bzl", "ng_module_pv")

package(default_visibility = ["//visibility:public"])

LCM = True

ng_module_pv(
    name = "stubbed-service",
    srcs = ["stubbed-service.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        "//packages/core",
    ],
    local_compilation_mode = LCM,
)


ng_module_pv(
    name = "sub",
    srcs = ["sub.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        "//packages/core",
        ":stubbed-service",
    ],
    local_compilation_mode = LCM,
)

ng_module_pv(
    name = "main",
    srcs = ["main.ts"],
    assets = ["main.ng.html"],
    tsconfig = ":tsconfig.json",
    deps = [
        ":sub",
        ":stubbed-service",
        "//packages/core",
    ],
    local_compilation_mode = LCM,
)

ng_module_pv(
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

esbuild(
    name = "bundle",
    entry_point = ":app.ts",
    external = [
        "@angular-devkit/*",
        "typescript",
    ],
    format = "iife",
    platform = "browser",
    deps = [":app"],
)

http_server(
    name = "devserver",
    srcs = [
        "index.html",
    ],
    deps = [
        ":bundle",
        "//packages/zone.js/bundles:zone.umd.js",
    ],
)

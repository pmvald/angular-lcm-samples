load("//tools:defaults.bzl", "esbuild", "http_server")
load("//integration/bazel/bazel-samples/bazel:ng_module.bzl", "ng_module_pv")

package(default_visibility = ["//visibility:public"])

LCM = True

ng_module_pv(
    name = "sub",
    srcs = ["external_module.ts", "external_comp.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        "//packages/core",        
    ],
    local_compilation_mode = LCM,
    target_level_lcm_mode = True,
)

ng_module_pv(
    name = "main",
    srcs = ["main_comp.ts", "main_module.ts", "internal_module.ts", "internal_comp.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        ":sub",
        "//packages/core",
        "//packages/common",
    ],
    local_compilation_mode = LCM,
    target_level_lcm_mode = True,
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
    target_level_lcm_mode = True,
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

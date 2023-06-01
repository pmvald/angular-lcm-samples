load("//tools:defaults.bzl", "esbuild", "http_server")
load("//integration/bazel/bazel-samples/bazel:ng_module.bzl", "ng_module_pv")

package(default_visibility = ["//visibility:public"])

LCM = True

ng_module_pv(
    name = "sub",
    srcs = ["sub.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        "//packages/core",
    ],
    local_compilation_mode = LCM,
)

ng_module_pv(
    name = "main",
    srcs = ["main.ts"],
    tsconfig = ":tsconfig.json",
    deps = [
        ":sub",
        "//packages/core",
    ],
    local_compilation_mode = LCM,
)

